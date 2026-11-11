// ==========================================
// KONFIGURASI PIN ADMIN, AI & DURASI WAKTU
// ==========================================
const ADMIN_PIN_DEFAULT = "123456"; // Ubah PIN rahasia Anda di sini
const DURASI_KUIS_DETIK = 300;     // 300 detik = 5 menit
const GEMINI_API_KEY = "";         // Opsional: Isi API Key Gemini Anda di sini jika ada

// Data Struktur Jenjang, Kelas, dan Mata Pelajaran
const dataPendidikan = {
    sd: {
        judul: "Sekolah Dasar (SD)",
        kelas: ["Kelas 1", "Kelas 2", "Kelas 3", "Kelas 4", "Kelas 5", "Kelas 6"],
        mapel: ["Matematika", "Bahasa Indonesia", "IPAS", "Pendidikan Pancasila", "Bahasa Inggris", "PJOK", "Seni Budaya", "Pendidikan Agama"]
    },
    smp: {
        judul: "Sekolah Menengah Pertama (SMP)",
        kelas: ["Kelas 7", "Kelas 8", "Kelas 9"],
        mapel: ["Matematika", "Bahasa Indonesia", "Bahasa Inggris", "IPA", "IPS", "Pendidikan Pancasila", "Informatika", "PJOK", "Seni Budaya"]
    },
    sma: {
        judul: "SMA / SMK",
        kelas: ["Kelas 10", "Kelas 11", "Kelas 12"],
        mapel: ["Matematika", "Bahasa Indonesia", "Bahasa Inggris", "Fisika", "Kimia", "Biologi", "Ekonomi", "Sosiologi", "Geografi", "Sejarah", "Informatika", "Kejuruan SMK"]
    }
};

// Database Bab Materi Kurikulum Merdeka
const dataBabMateri = {
    "sd-Kelas 1-Matematika": [
        "Bab 1: Bilangan Cacah sampai 10",
        "Bab 2: Penjumlahan dan Pengurangan sampai 10",
        "Bab 3: Mengenal Bentuk Bangun Datar",
        "Bab 4: Mengukur Panjang dan Waktu"
    ],
    "sd-Kelas 4-IPAS": [
        "Bab 1: Tumbuhan, Sumber Kehidupan di Bumi",
        "Bab 2: Wujud Zat dan Perubahannya",
        "Bab 3: Gaya di Sekitar Kita",
        "Bab 4: Mengubah Bentuk Energi"
    ],
    "smp-Kelas 7-Matematika": [
        "Bab 1: Bilangan Bulat dan Bilangan Rasional",
        "Bab 2: Aljabar",
        "Bab 3: Persamaan Linear Satu Variabel",
        "Bab 4: Perbandingan Senilai dan Berbalik Nilai"
    ],
    "smp-Kelas 7-IPA": [
        "Bab 1: Hakikat Ilmu Sains dan Metode Ilmiah",
        "Bab 2: Zat dan Perubahannya",
        "Bab 3: Suhu, Kalor, dan Pemuaian",
        "Bab 4: Gerak dan Gaya"
    ],
    "sma-Kelas 10-Fisika": [
        "Bab 1: Pengukuran dalam Kerja Ilmiah",
        "Bab 2: Energi Terbarukan",
        "Bab 3: Pemanasan Global: Konsep dan Solusi"
    ],
    "sma-Kelas 10-Informatika": [
        "Bab 1: Berpikir Komputasional",
        "Bab 2: Teknologi Informasi dan Komunikasi",
        "Bab 3: Sistem Komputer",
        "Bab 4: Jaringan Komputer dan Internet"
    ]
};

// ==========================================
// BANK SOAL MANUAL
// ==========================================
const bankSoalBawaan = {
    "smp-Kelas 7-Matematika-Bab 1: Bilangan Bulat dan Bilangan Rasional": [
        {
            pertanyaan: "Hasil dari -12 + 7 adalah ...",
            pilihan: ["-5", "5", "-19", "19"],
            jawabanBenar: 0,
            pembahasan: "Utang 12 dibayar 7, maka sisanya adalah -5."
        },
        {
            pertanyaan: "Hasil dari (-4) x (-6) adalah ...",
            pilihan: ["-24", "24", "-10", "10"],
            jawabanBenar: 1,
            pembahasan: "Bilangan negatif dikali bilangan negatif menghasilkan bilangan positif: 4 x 6 = 24."
        },
        {
            pertanyaan: "Suhu di puncak gunung pada pagi hari adalah -3°C. Pada siang hari suhunya naik 8°C. Suhu pada siang hari adalah ...",
            pilihan: ["11°C", "-11°C", "5°C", "-5°C"],
            jawabanBenar: 2,
            pembahasan: "-3 + 8 = 5°C."
        }
    ],
    "sd-Kelas 1-Matematika-Bab 1: Bilangan Cacah sampai 10": [
        {
            pertanyaan: "Angka setelah bilangan 6 adalah ...",
            pilihan: ["5", "7", "8", "9"],
            jawabanBenar: 1,
            pembahasan: "Urutan bilangan: 5, 6, 7, 8."
        },
        {
            pertanyaan: "Di atas meja ada 4 apel dan 3 jeruk. Jumlah seluruh buah adalah ...",
            pilihan: ["6", "7", "8", "9"],
            jawabanBenar: 1,
            pembahasan: "4 + 3 = 7 buah."
        }
    ]
};

const contentArea = document.getElementById("app-content");
const headerTitle = document.getElementById("header-title");

let timerInterval;
let soalAktifList = [];
let riwayatJawabanUser = [];
let soalSekarang = 0;
let skorTotal = 0;
let waktuTersisa = 0;

let sesiSiswa = {
    nama: "",
    kelasInput: "",
    jenjang: "",
    kelasTingkat: "",
    mapel: "",
    bab: ""
};

// Menggunakan Unicode \u0027 agar 100% aman saat di-copy-paste
function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/\u0027/g, "\u0026#39;");
}

function getPinAdmin() {
    return localStorage.getItem("rim_admin_pin") || ADMIN_PIN_DEFAULT;
}

function ambilSemuaBankSoal() {
    const soalTambahanAdmin = JSON.parse(localStorage.getItem("rim_bank_soal_manual") || "{}");
    const gabungan = Object.assign({}, bankSoalBawaan);
    for (const kunci in soalTambahanAdmin) {
        if (!gabungan[kunci]) gabungan[kunci] = [];
        gabungan[kunci] = gabungan[kunci].concat(soalTambahanAdmin[kunci]);
    }
    return gabungan;
}

// ==========================================
// NAVIGASI MENU BAWAH & HOME
// ==========================================
function bukaMenu(menu, element) {
    clearInterval(timerInterval);

    if (element) {
        document.querySelectorAll(".nav-item").forEach(function(btn) {
            btn.classList.remove("active");
        });
        element.classList.add("active");
    }

    if (menu === "home") {
        headerTitle.innerText = "RIM Edu AI";
        contentArea.innerHTML = `
            <section id="home-section" class="home-welcome">
                <div class="hero-card">
                    <h2>RIM Edu AI</h2>
                    <p class="subtitle">
                        Selamat datang di platform belajar cerdas dan bank soal interaktif Kurikulum Merdeka. 
                        Asah kemampuanmu setiap hari dan raih prestasi terbaik bersama asisten belajar AI!
                    </p>
                    <button type="button" class="btn-ai-primary" onclick="bukaTanyaAI()">
                        🤖 Tanya AI Sekarang
                    </button>
                </div>

                <div class="quick-menu">
                    <h3>Pilih Jenjang Latihan Soal</h3>
                    <div class="jenjang-grid">
                        <button type="button" class="jenjang-card" onclick="bukaMenu('sd', document.querySelectorAll('.nav-item')[1])">
                            <span class="icon">🎒</span>
                            <strong>SD / MI</strong>
                            <small>Kelas 1 - 6</small>
                        </button>
                        <button type="button" class="jenjang-card" onclick="bukaMenu('smp', document.querySelectorAll('.nav-item')[2])">
                            <span class="icon">📘</span>
                            <strong>SMP / MTs</strong>
                            <small>Kelas 7 - 9</small>
                        </button>
                        <button type="button" class="jenjang-card" onclick="bukaMenu('sma', document.querySelectorAll('.nav-item')[3])">
                            <span class="icon">🎓</span>
                            <strong>SMA / SMK</strong>
                            <small>Kelas 10 - 12</small>
                        </button>
                    </div>
                </div>

                <div class="form-box" style="margin-top: 4px;">
                    <h3>📌 Petunjuk Pengerjaan</h3>
                    <ul style="padding-left: 18px; color: #475569; font-size: 0.86rem; line-height: 1.6; margin-top: 6px;">
                        <li>Pilih <b>Jenjang → Kelas → Mata Pelajaran → Bab</b>.</li>
                        <li>Isi <b>Nama Lengkap</b> dan <b>Kelas</b> sebelum mulai menjawab soal.</li>
                        <li>Gunakan fitur <b>Tanya AI</b> kapan saja jika butuh penjelasan materi.</li>
                        <li>Skor nilai otomatis tersimpan untuk direkap oleh Guru/Admin.</li>
                    </ul>
                </div>
            </section>
        `;
    } else if (menu === "sd" || menu === "smp" || menu === "sma") {
        tampilkanDaftarKelas(menu);
    } else if (menu === "saya") {
        headerTitle.innerText = "Panel Guru / Admin";
        contentArea.innerHTML = `
            <div class="form-box">
                <h3>🔐 Area Khusus Guru / Admin</h3>
                <p style="font-size: 0.85rem; color: #64748b; margin-top: 4px;">
                    Masukkan PIN Admin untuk melihat rekap skor siswa, mengunduh file nilai, atau menambah bank soal.
                </p>
            </div>
            <div class="list-menu">
                <div class="list-item" onclick="bukaPanelAdmin()">
                    <span>📊 Lihat & Unduh Rekap Nilai Siswa</span> <span>›</span>
                </div>
                <div class="list-item" onclick="bukaFormInputSoal()">
                    <span>✍️ Tambah Soal Manual ke Bank Soal</span> <span>›</span>
                </div>
                <div class="list-item" onclick="ubahPinAdmin()">
                    <span>🛡️ Ubah PIN Keamanan Admin</span> <span>›</span>
                </div>
            </div>
        `;
    }
}

// ==========================================
// FITUR TANYA AI (CHAT INTERAKTIF)
// ==========================================
function bukaTanyaAI() {
    const modal = document.getElementById("modal-ai");
    if (modal) {
        modal.style.display = "flex";
        setTimeout(() => {
            const input = document.getElementById("input-pertanyaan-ai");
            if (input) input.focus();
        }, 100);
    }
}

function tutupModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) modal.style.display = "none";
}
// ==========================================
// LANJUTAN KODE SCRIPT.JS (TEMPEL DI PALING BAWAH)
// ==========================================

// 1. TAMPILKAN KELAS -> MAPEL -> BAB
function tampilkanDaftarKelas(jenjang) {
    const info = dataPendidikan[jenjang];
    headerTitle.innerText = info.judul;
    let html = `<div class="form-box"><h3>Pilih Tingkat Kelas</h3><div class="jenjang-grid" style="margin-top:12px;">`;
    info.kelas.forEach(kls => {
        html += `<button type="button" class="jenjang-card" onclick="tampilkanDaftarMapel('${jenjang}', '${kls}')"><strong>${kls}</strong></button>`;
    });
    html += `</div></div>`;
    contentArea.innerHTML = html;
}

function tampilkanDaftarMapel(jenjang, kelas) {
    const info = dataPendidikan[jenjang];
    headerTitle.innerText = `${info.judul} - ${kelas}`;
    let html = `<div class="form-box">
        <button type="button" onclick="tampilkanDaftarKelas('${jenjang}')" style="margin-bottom:10px; background:#e2e8f0; border:none; padding:6px 12px; border-radius:6px; cursor:pointer;">‹ Kembali ke Kelas</button>
        <h3>Pilih Mata Pelajaran</h3>
        <div class="list-menu" style="margin-top:10px;">`;
    info.mapel.forEach(mpl => {
        html += `<div class="list-item" onclick="tampilkanDaftarBab('${jenjang}', '${kelas}', '${mpl}')">
            <span>📘 ${mpl}</span><span>›</span>
        </div>`;
    });
    html += `</div></div>`;
    contentArea.innerHTML = html;
}

function tampilkanDaftarBab(jenjang, kelas, mapel) {
    headerTitle.innerText = `${mapel} (${kelas})`;
    const kunciBab = `${jenjang}-${kelas}-${mapel}`;
    const daftarBab = dataBabMateri[kunciBab] || ["Bab 1: Materi Umum & Latihan Soal"];

    let html = `<div class="form-box">
        <button type="button" onclick="tampilkanDaftarMapel('${jenjang}', '${kelas}')" style="margin-bottom:10px; background:#e2e8f0; border:none; padding:6px 12px; border-radius:6px; cursor:pointer;">‹ Kembali ke Mapel</button>
        <h3>Pilih Bab Materi</h3>
        <div class="list-menu" style="margin-top:10px;">`;
    daftarBab.forEach(bab => {
        html += `<div class="list-item" onclick="bukaFormBiodata('${jenjang}', '${kelas}', '${mapel}', '${escapeHTML(bab)}')">
            <span>📑 ${escapeHTML(bab)}</span><span>›</span>
        </div>`;
    });
    html += `</div></div>`;
    contentArea.innerHTML = html;
}

// 2. FORM BIODATA (NAMA, SEKOLAH, KELAS) SEBELUM KUIS
function bukaFormBiodata(jenjang, kelas, mapel, bab) {
    sesiSiswa = { nama: "", sekolah: "", kelasInput: kelas, jenjang, kelasTingkat: kelas, mapel, bab };
    headerTitle.innerText = "Biodata Peserta";
    contentArea.innerHTML = `
        <div class="form-box">
            <h3>📝 Isi Biodata Sebelum Mengerjakan</h3>
            <p style="font-size:0.85rem; color:#64748b; margin-bottom:12px;">${jenjang.toUpperCase()} | ${kelas} | ${mapel} <br> <b>${bab}</b></p>
            
            <label style="font-size:0.85rem; font-weight:bold;">Nama Lengkap Siswa</label>
            <input type="text" id="bio-nama" placeholder="Masukkan nama lengkap..." style="width:100%; padding:10px; margin:6px 0 12px; border:1px solid #cbd5e1; border-radius:8px;">
            
            <label style="font-size:0.85rem; font-weight:bold;">Asal Sekolah</label>
            <input type="text" id="bio-sekolah" placeholder="Contoh: SMPN 1 Surabaya" style="width:100%; padding:10px; margin:6px 0 12px; border:1px solid #cbd5e1; border-radius:8px;">
            
            <label style="font-size:0.85rem; font-weight:bold;">Kelas</label>
            <input type="text" id="bio-kelas" value="${kelas}" style="width:100%; padding:10px; margin:6px 0 16px; border:1px solid #cbd5e1; border-radius:8px;">
            
            <button type="button" class="btn-ai-primary" style="width:100%;" onclick="mulaiKerjakanSoal()">Mulai Kerjakan Soal 🚀</button>
        </div>
    `;
}

// 3. SISTEM PENGERJAAN SOAL & PENILAIAN
function mulaiKerjakanSoal() {
    const nama = document.getElementById("bio-nama").value.trim();
    const sekolah = document.getElementById("bio-sekolah").value.trim();
    const kelas = document.getElementById("bio-kelas").value.trim();

    if (!nama || !sekolah || !kelas) {
        alert("Harap lengkapi Nama, Asal Sekolah, dan Kelas terlebih dahulu!");
        return;
    }

    sesiSiswa.nama = nama;
    sesiSiswa.sekolah = sekolah;
    sesiSiswa.kelasInput = kelas;

    const semuaSoal = ambilSemuaBankSoal();
    const kunciSoal = `${sesiSiswa.jenjang}-${sesiSiswa.kelasTingkat}-${sesiSiswa.mapel}-${sesiSiswa.bab}`;
    
    // Jika bab belum punya soal khusus, gunakan soal contoh default agar tidak error
    soalAktifList = semuaSoal[kunciSoal] || bankSoalBawaan["smp-Kelas 7-Matematika-Bab 1: Bilangan Bulat dan Bilangan Rasional"];
    
    soalSekarang = 0;
    skorTotal = 0;
    riwayatJawabanUser = [];
    waktuTersisa = DURASI_KUIS_DETIK;

    jalankanTimerKuis();
    tampilkanSoal();
}

function jalankanTimerKuis() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        waktuTersisa--;
        const timerEl = document.getElementById("kuis-timer-display");
        if (timerEl) {
            const m = Math.floor(waktuTersisa / 60).toString().padStart(2, '0');
            const d = (waktuTersisa % 60).toString().padStart(2, '0');
            timerEl.innerText = `⏱️ ${m}:${d}`;
        }
        if (waktuTersisa <= 0) {
            clearInterval(timerInterval);
            selesaiDanRekapNilai();
        }
    }, 1000);
}

function tampilkanSoal() {
    const soal = soalAktifList[soalSekarang];
    headerTitle.innerText = `Soal ${soalSekarang + 1} dari ${soalAktifList.length}`;
    
    let opsiHTML = "";
    soal.pilihan.forEach((pil, index) => {
        opsiHTML += `
            <button type="button" onclick="pilihJawaban(${index})" style="display:block; width:100%; text-align:left; padding:12px; margin-bottom:8px; border:1px solid #cbd5e1; border-radius:8px; background:#f8fafc; cursor:pointer; font-size:0.95rem;">
                <b>${String.fromCharCode(65 + index)}.</b> ${escapeHTML(pil)}
            </button>
        `;
    });

    contentArea.innerHTML = `
        <div class="form-box">
            <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-weight:bold; color:#2563eb;">
                <span>${sesiSiswa.mapel}</span>
                <span id="kuis-timer-display" style="color:#dc2626;">⏱️ 05:00</span>
            </div>
            <p style="font-size:1rem; line-height:1.5; margin-bottom:16px; font-weight:500;">${escapeHTML(soal.pertanyaan)}</p>
            <div>${opsiHTML}</div>
        </div>
    `;
}

function pilihJawaban(indexDipilih) {
    const soal = soalAktifList[soalSekarang];
    if (indexDipilih === soal.jawabanBenar) {
        skorTotal++;
    }
    soalSekarang++;
    if (soalSekarang < soalAktifList.length) {
        tampilkanSoal();
    } else {
        selesaiDanRekapNilai();
    }
}

function selesaiDanRekapNilai() {
    clearInterval(timerInterval);
    const nilaiAkhir = Math.round((skorTotal / soalAktifList.length) * 100);

    // Simpan ke LocalStorage agar bisa dilihat & didownload Admin
    const rekap = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
    rekap.push({
        tanggal: new Date().toLocaleString("id-ID"),
        nama: sesiSiswa.nama,
        sekolah: sesiSiswa.sekolah,
        kelas: sesiSiswa.kelasInput,
        mapel: sesiSiswa.mapel,
        bab: sesiSiswa.bab,
        nilai: nilaiAkhir
    });
    localStorage.setItem("rim_rekap_nilai", JSON.stringify(rekap));

    headerTitle.innerText = "Hasil Kuis";
    contentArea.innerHTML = `
        <div class="form-box" style="text-align:center;">
            <h2>🎉 Kuis Selesai!</h2>
            <p style="color:#64748b; margin-top:4px;">Nilai Anda telah direkap ke sistem Admin.</p>
            <div style="font-size:3rem; font-weight:bold; color:#2563eb; margin:16px 0;">${nilaiAkhir}</div>
            <p style="font-size:0.9rem; margin-bottom:16px;">
                <b>${escapeHTML(sesiSiswa.nama)}</b> (${escapeHTML(sesiSiswa.sekolah)})<br>
                Benar ${skorTotal} dari ${soalAktifList.length} soal
            </p>
            <button type="button" class="btn-ai-primary" style="width:100%;" onclick="bukaMenu('home', document.querySelectorAll('.nav-item')[0])">Kembali ke Beranda</button>
        </div>
    `;
}

// 4. PANEL ADMIN (LIHAT REKAP, DOWNLOAD CSV, TAMBAH SOAL, UBAH PIN)
function bukaPanelAdmin() {
    const pin = prompt("Masukkan PIN Admin:");
    if (pin !== getPinAdmin()) {
        alert("PIN salah! Akses ditolak.");
        return;
    }

    const rekap = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
    let barisTabel = rekap.length === 0 
        ? `<tr><td colspan="5" style="text-align:center; padding:12px;">Belum ada data nilai siswa.</td></tr>`
        : rekap.map(r => `
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px;">${escapeHTML(r.nama)}</td>
                <td style="padding:8px;">${escapeHTML(r.sekolah)}</td>
                <td style="padding:8px;">${escapeHTML(r.kelas)}</td>
                <td style="padding:8px;">${escapeHTML(r.mapel)}</td>
                <td style="padding:8px; font-weight:bold; color:#2563eb;">${r.nilai}</td>
            </tr>
        `).join("");

    headerTitle.innerText = "Rekap Nilai Admin";
    contentArea.innerHTML = `
        <div class="form-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <h3>📊 Rekap Nilai Siswa</h3>
                <button type="button" onclick="downloadRekapCSV()" style="background:#16a34a; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; font-weight:bold;">⬇️ Unduh CSV</button>
            </div>
            <div style="overflow-x:auto;">
            ${barisTabel}

Nama	Sekolah	Kelas	Mapel	Nilai

`;
}
function downloadRekapCSV() {
const rekap = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
if (rekap.length === 0) return alert("Data nilai masih kosong.");
let csv = "Waktu,Nama Lengkap,Asal Sekolah,Kelas,Mata Pelajaran,Bab,Nilai\n";
rekap.forEach(r => {
csv += "${r.tanggal}","${r.nama}","${r.sekolah}","${r.kelas}","${r.mapel}","${r.bab}",${r.nilai}\n;
});
const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "Rekap_Nilai_RIM_Edu_AI.csv";
link.click();
}
function ubahPinAdmin() {
const pinLama = prompt("Masukkan PIN Admin saat ini:");
if (pinLama !== getPinAdmin()) return alert("PIN lama salah!");
const pinBaru = prompt("Masukkan PIN Admin baru (minimal 4 angka):");
if (pinBaru && pinBaru.length >= 4) {
localStorage.setItem("rim_admin_pin", pinBaru);
alert("PIN Admin berhasil diperbarui!");
}
}
function bukaFormInputSoal() {
alert("Fitur tambah soal manual: Anda dapat menambahkan soal langsung di variabel bankSoalBawaan pada script.js atau hubungi saya untuk membuatkan form inputnya.");
}
// Jalankan menu Home secara otomatis saat halaman pertama kali dibuka
window.addEventListener("DOMContentLoaded", () => {
bukaMenu("home", document.querySelectorAll(".nav-item")[0]);
});

