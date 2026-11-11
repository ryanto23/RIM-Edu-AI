// ==========================================
// KONFIGURASI PIN ADMIN & DURASI WAKTU
// ==========================================
const ADMIN_PIN_DEFAULT = "123456"; // Ubah PIN rahasia Anda di sini
const DURASI_KUIS_DETIK = 300;     // 300 detik = 5 menit

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
// BANK SOAL MANUAL (BISA DIEDIT LANGSUNG DI SINI)
// ==========================================
// jawabanBenar: 0 = A, 1 = B, 2 = C, 3 = D
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

function escapeHTML(str) {
    return String(str).replace(/[&<>'"]/g, function(tag) {
        const chars = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' };
        return chars[tag] || tag;
    });
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
// NAVIGASI MENU BAWAH
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
        headerTitle.innerText = "Beranda - RIM Edu";
        contentArea.innerHTML = `
            <div class="form-box">
                <h2>Selamat Datang! 👋</h2>
                <p style="margin-top: 8px; color: #475569; font-size: 0.9rem; line-height: 1.5;">
                    Silakan pilih jenjang pendidikan pada menu di bawah (<b>SD</b>, <b>SMP</b>, atau <b>SMA/K</b>) untuk mulai mengerjakan latihan soal.
                </p>
            </div>
            <div class="form-box">
                <h3>📌 Petunjuk Pengerjaan</h3>
                <ul style="padding-left: 18px; color: #475569; font-size: 0.88rem; line-height: 1.6; margin-top: 6px;">
                    <li>Pilih <b>Jenjang → Kelas → Mata Pelajaran → Bab</b>.</li>
                    <li>Isi <b>Nama Lengkap</b> dan <b>Kelas</b> sebelum memulai.</li>
                    <li>Waktu akan langsung berjalan setelah menekan tombol mulai.</li>
                    <li>Nilai akan otomatis tersimpan setelah soal selesai dikerjakan.</li>
                </ul>
            </div>
        `;
    } else if (menu === "sd" || menu === "smp" || menu === "sma") {
        tampilkanDaftarKelas(menu);
    } else if (menu === "saya") {
        headerTitle.innerText = "Panel Guru / Admin";
        contentArea.innerHTML = `
            <div class="list-menu">
                <div class="list-item" onclick="bukaPanelAdmin()">
                    <span>📊 Lihat Rekap Nilai Siswa (PIN)</span> <span>›</span>
                </div>
                <div class="list-item" onclick="bukaFormInputSoal()">
                    <span>✍️ Tambah / Input Soal Manual (PIN)</span> <span>›</span>
                </div>
                <div class="list-item" onclick="ubahPinAdmin()">
                    <span>🛡️ Ubah PIN Admin</span> <span>›</span>
                </div>
            </div>
        `;
    }
}

// ==========================================
// NAVIGASI KELAS -> MAPEL -> BAB MATERI
// ==========================================
function tampilkanDaftarKelas(jenjang) {
    const info = dataPendidikan[jenjang];
    headerTitle.innerText = info.judul;

    let html = `<h3>Pilih Kelas:</h3><div class="grid-menu">`;
    info.kelas.forEach(function(kelas) {
        html += `<button class="card-btn" onclick="tampilkanMapel('${jenjang}', '${kelas}')">${kelas}</button>`;
    });
    html += `</div>`;

    contentArea.innerHTML = html;
}

function tampilkanMapel(jenjang, kelas) {
    const info = dataPendidikan[jenjang];
    headerTitle.innerText = `${jenjang.toUpperCase()} - ${kelas}`;

    let html = `
        <button class="back-btn" onclick="tampilkanDaftarKelas('${jenjang}')">← Kembali ke Daftar Kelas</button>
        <h3>Pilih Mata Pelajaran (${kelas}):</h3>
        <div class="grid-menu">
    `;

    info.mapel.forEach(function(mapel) {
        html += `<button class="card-btn" onclick="tampilkanBab('${jenjang}', '${kelas}', '${mapel}')">${mapel}</button>`;
    });

    html += `</div>`;
    contentArea.innerHTML = html;
}

function tampilkanBab(jenjang, kelas, mapel) {
    headerTitle.innerText = `${mapel} (${kelas})`;
    const kunciBab = `${jenjang}-${kelas}-${mapel}`;
    const semuaSoal = ambilSemuaBankSoal();

    const daftarBab = dataBabMateri[kunciBab] || [
        `Bab 1: Konsep Dasar ${mapel} (${kelas})`,
        `Bab 2: Penerapan & Pemahaman ${mapel} Semester 1`,
        `Bab 3: Analisis Materi Lanjutan ${mapel}`,
        `Bab 4: Evaluasi & Latihan Akhir Semester 2`
    ];

    let html = `
        <button class="back-btn" onclick="tampilkanMapel('${jenjang}', '${kelas}')">← Ganti Mapel</button>
        <h3>Pilih Bab Materi:</h3>
        <div class="bab-list">
    `;

    daftarBab.forEach(function(bab) {
        const kunciSoal = `${jenjang}-${kelas}-${mapel}-${bab}`;
        const jumlahSoal = (semuaSoal[kunciSoal] || []).length;
        const labelJumlah = jumlahSoal > 0 ? `(${jumlahSoal} soal)` : `(Belum ada soal)`;

        html += `
            <button class="bab-btn" onclick="formIdentitasSiswa('${jenjang}', '${kelas}', '${mapel}', '${bab}')">
                <span>${bab} <br><small style="color:#64748b;">${labelJumlah}</small></span>
                <span>Mulai ›</span>
            </button>
        `;
    });

    html += `</div>`;
    contentArea.innerHTML = html;
}

// ==========================================
// FORM IDENTITAS WAJIB SEBELUM MULAI SOAL
// ==========================================
function formIdentitasSiswa(jenjang, kelas, mapel, bab) {
const semuaSoal = ambilSemuaBankSoal();
const kunciSoal = ${jenjang}-${kelas}-${mapel}-${bab};
const daftarSoal = semuaSoal[kunciSoal] || [];
if (daftarSoal.length === 0) {
alert("⚠️ Belum ada soal pada bab ini. Silakan input soal terlebih dahulu melalui menu Admin > Tambah / Input Soal Manual.");
return;
}
headerTitle.innerText = "Data Peserta Latihan";
contentArea.innerHTML = `
← Kembali ke Bab

📝 Isi Identitas Terlebih Dahulu

Materi: ${mapel} - ${bab}

Jumlah Soal: ${daftarSoal.length} soal

Waktu pengerjaan ${Math.floor(DURASI_KUIS_DETIK / 60)} menit akan langsung berjalan setelah menekan tombol mulai.

Nama Lengkap Siswa *
Kelas / Rombel *
🚀 Mulai Kerjakan Soal


`;
}
function validasiDanMulai(jenjang, kelas, mapel, bab) {
const nama = document.getElementById("input-nama-siswa").value.trim();
const kelasInput = document.getElementById("input-kelas-siswa").value.trim();
if (!nama || !kelasInput) {
alert("⚠️ Nama Lengkap dan Kelas wajib diisi sebelum memulai soal!");
return;
}
const semuaSoal = ambilSemuaBankSoal();
const kunciSoal = ${jenjang}-${kelas}-${mapel}-${bab};
sesiSiswa = {
nama: nama,
kelasInput: kelasInput,
jenjang: jenjang,
kelasTingkat: kelas,
mapel: mapel,
bab: bab
};
soalAktifList = semuaSoal[kunciSoal] || [];
soalSekarang = 0;
skorTotal = 0;
riwayatJawabanUser = [];
mulaiTimer(DURASI_KUIS_DETIK);
tampilkanSoalKuis();
}
// ==========================================
// LOGIKA KUIS, TIMER, & PENILAIAN
// ==========================================
function mulaiTimer(durasiDetik) {
clearInterval(timerInterval);
waktuTersisa = durasiDetik;
timerInterval = setInterval(function() {
waktuTersisa--;
const timerEl = document.getElementById("quiz-timer");
if (timerEl) {
const menit = Math.floor(waktuTersisa / 60);
const detik = waktuTersisa % 60;
timerEl.innerText = ⏱️ ${menit}:${detik < 10 ? "0" : ""}${detik};
}
if (waktuTersisa <= 0) {
clearInterval(timerInterval);
alert("⏰ Waktu habis! Jawabanmu otomatis dikumpulkan.");
selesaiDanSimpanNilai();
}
}, 1000);
}
function tampilkanSoalKuis() {
if (soalSekarang >= soalAktifList.length) {
clearInterval(timerInterval);
selesaiDanSimpanNilai();
return;
}
const item = soalAktifList[soalSekarang];
const hurufPilihan = ["A", "B", "C", "D"];
headerTitle.innerText = Soal ${soalSekarang + 1} dari ${soalAktifList.length};
const menit = Math.floor(waktuTersisa / 60);
const detik = waktuTersisa % 60;
let html = <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;"> <span style="font-size: 0.85rem; color: #475569;">👤 <b>${escapeHTML(sesiSiswa.nama)}</b> (${escapeHTML(sesiSiswa.kelasInput)})</span> <span id="quiz-timer" style="font-weight: bold; color: #dc2626;">⏱️ ${menit}:${detik < 10 ? "0" : ""}${detik}</span> </div> <div style="background: white; padding: 16px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);"> <p style="font-weight: 600; line-height: 1.5; margin-bottom: 16px;">${soalSekarang + 1}. ${escapeHTML(item.pertanyaan)}</p> <div style="display: flex; flex-direction: column; gap: 10px;">;
item.pilihan.forEach(function(opsi, idx) {
html += <button class="bab-btn" style="justify-content: flex-start; text-align: left; gap: 10px;" onclick="pilihJawaban(${idx})"> <b>${hurufPilihan[idx]}.</b> <span>${escapeHTML(opsi)}</span> </button>;
});
html += </div> </div>;
contentArea.innerHTML = html;
}
function pilihJawaban(indeksDipilih) {
const item = soalAktifList[soalSekarang];
const benar = indeksDipilih === item.jawabanBenar;
if (benar) skorTotal++;
riwayatJawabanUser.push({
pertanyaan: item.pertanyaan,
pilihan: item.pilihan,
jawabanUser: indeksDipilih,
jawabanBenar: item.jawabanBenar,
pembahasan: item.pembahasan || "-",
benar: benar
});
soalSekarang++;
tampilkanSoalKuis();
}
function selesaiDanSimpanNilai() {
const nilaiAkhir = Math.round((skorTotal / soalAktifList.length) * 100);
const waktuSelesai = new Date().toLocaleString("id-ID", {
day: "2-digit", month: "short", year: "numeric",
hour: "2-digit", minute: "2-digit"
});
const dataRekap = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
dataRekap.unshift({
nama: sesiSiswa.nama,
kelas: sesiSiswa.kelasInput,
mapel: sesiSiswa.mapel,
bab: sesiSiswa.bab,
benar: skorTotal,
totalSoal: soalAktifList.length,
nilai: nilaiAkhir,
waktu: waktuSelesai
});
localStorage.setItem("rim_rekap_nilai", JSON.stringify(dataRekap));
tampilkanHasilKuis(nilaiAkhir);
}
function tampilkanHasilKuis(nilaiAkhir) {
headerTitle.innerText = "Hasil Latihan";
const hurufPilihan = ["A", "B", "C", "D"];
let html = <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);"> <h3>🎉 Latihan Selesai!</h3> <p style="font-size: 0.9rem; color: #334155; margin-top: 4px;"> <b>${escapeHTML(sesiSiswa.nama)}</b> • Kelas <b>${escapeHTML(sesiSiswa.kelasInput)}</b> </p> <div style="font-size: 2.5rem; font-weight: bold; color: #2563eb; margin: 10px 0;">${nilaiAkhir}</div> <p style="color: #475569;">Benar <b>${skorTotal}</b> dari <b>${soalAktifList.length}</b> soal</p> <p style="font-size: 0.8rem; color: #16a34a; margin-top: 6px;">✅ Nilai telah tersimpan otomatis ke sistem guru.</p> </div> <h4 style="margin-bottom: 10px;">Pembahasan Soal:</h4>;
riwayatJawabanUser.forEach(function(item, idx) {
const statusWarna = item.benar ? "#16a34a" : "#dc2626";
const statusTeks = item.benar ? "✅ Benar" : "❌ Kurang Tepat";
html += <div style="background: white; padding: 14px; border-radius: 10px; margin-bottom: 12px; border-left: 4px solid ${statusWarna};"> <p style="font-weight: 600; margin-bottom: 6px;">${idx + 1}. ${escapeHTML(item.pertanyaan)}</p> <p style="font-size: 0.85rem; color: ${statusWarna}; font-weight: bold; margin-bottom: 4px;">${statusTeks}</p> <p style="font-size: 0.85rem;">Jawabanmu: <b>${hurufPilihan[item.jawabanUser]}. ${escapeHTML(item.pilihan[item.jawabanUser])}</b></p> <p style="font-size: 0.85rem;">Kunci Jawaban: <b>${hurufPilihan[item.jawabanBenar]}. ${escapeHTML(item.pilihan[item.jawabanBenar])}</b></p> <p style="font-size: 0.85rem; color: #475569; margin-top: 8px; background: #f8fafc; padding: 8px; border-radius: 6px;"> <b>Pembahasan:</b> ${escapeHTML(item.pembahasan)} </p> </div>;
});
html += <button class="card-btn" style="width: 100%; margin-top: 8px;" onclick="bukaMenu('home')">🏠 Kembali ke Beranda</button>;
contentArea.innerHTML = html;
}
// ==========================================
// PANEL ADMIN: INPUT SOAL MANUAL & REKAP NILAI
// ==========================================
function ambilPinAdmin() {
return localStorage.getItem("rim_admin_pin") || ADMIN_PIN_DEFAULT;
}
function ubahPinAdmin() {
const pinLama = prompt("Masukkan PIN Admin saat ini:");
if (pinLama !== ambilPinAdmin()) {
alert("❌ PIN lama salah!");
return;
}
const pinBaru = prompt("Masukkan PIN Admin baru (minimal 4 karakter):");
if (pinBaru && pinBaru.trim().length >= 4) {
localStorage.setItem("rim_admin_pin", pinBaru.trim());
alert("✅ PIN Admin berhasil diperbarui!");
} else if (pinBaru !== null) {
alert("⚠️ PIN minimal 4 karakter.");
}
}
function bukaFormInputSoal() {
const inputPin = prompt("🔒 Masukkan PIN Admin untuk menambah soal manual:");
if (inputPin !== ambilPinAdmin()) {
if (inputPin !== null) alert("❌ Akses Ditolak! PIN salah.");
return;
}
headerTitle.innerText = "Input Soal Manual";
contentArea.innerHTML = `
← Kembali

✍️ Tambah Soal Baru
Jenjang
SD
SMP
SMA / SMK


Kelas
Mata Pelajaran
Bab Materi
Pertanyaan Soal *
Pilihan A *
Pilihan B *
Pilihan C *
Pilihan D *
Kunci Jawaban Benar
Pilihan A
Pilihan B
Pilihan C
Pilihan D


Pembahasan Singkat (Opsional)
💾 Simpan Soal

`;
updateDropdownAdmin();
}
function updateDropdownAdmin() {
const jenjang = document.getElementById("admin-jenjang").value;
const info = dataPendidikan[jenjang];
const kelasSel = document.getElementById("admin-kelas");
const mapelSel = document.getElementById("admin-mapel");
kelasSel.innerHTML = "";
info.kelas.forEach(function(k) {
kelasSel.innerHTML += <option value="${k}">${k}</option>;
});
mapelSel.innerHTML = "";
info.mapel.forEach(function(m) {
mapelSel.innerHTML += <option value="${m}">${m}</option>;
});
updateDropdownBabAdmin();
}
function updateDropdownBabAdmin() {
const jenjang = document.getElementById("admin-jenjang").value;
const kelas = document.getElementById("admin-kelas").value;
const mapel = document.getElementById("admin-mapel").value;
const babSel = document.getElementById("admin-bab");
const kunciBab = ${jenjang}-${kelas}-${mapel};
const daftarBab = dataBabMateri[kunciBab] || [
Bab 1: Konsep Dasar ${mapel} (${kelas}),
Bab 2: Penerapan & Pemahaman ${mapel} Semester 1,
Bab 3: Analisis Materi Lanjutan ${mapel},
Bab 4: Evaluasi & Latihan Akhir Semester 2
];
babSel.innerHTML = "";
daftarBab.forEach(function(b) {
babSel.innerHTML += <option value="${b}">${b}</option>;
});
}
function simpanSoalManual() {
const jenjang = document.getElementById("admin-jenjang").value;
const kelas = document.getElementById("admin-kelas").value;
const mapel = document.getElementById("admin-mapel").value;
const bab = document.getElementById("admin-bab").value;
const tanya = document.getElementById("admin-tanya").value.trim();
const o0 = document.getElementById("admin-opsi-0").value.trim();
const o1 = document.getElementById("admin-opsi-1").value.trim();
const o2 = document.getElementById("admin-opsi-2").value.trim();
const o3 = document.getElementById("admin-opsi-3").value.trim();
const kunci = parseInt(document.getElementById("admin-kunci").value, 10);
const bahas = document.getElementById("admin-bahas").value.trim();
if (!tanya || !o0 || !o1 || !o2 || !o3) {
alert("⚠️ Pertanyaan dan semua pilihan (A, B, C, D) wajib diisi!");
return;
}
const kunciSoal = ${jenjang}-${kelas}-${mapel}-${bab};
const dataTersimpan = JSON.parse(localStorage.getItem("rim_bank_soal_manual") || "{}");
if (!dataTersimpan[kunciSoal]) dataTersimpan[kunciSoal] = [];
dataTersimpan[kunciSoal].push({
pertanyaan: tanya,
pilihan: [o0, o1, o2, o3],
jawabanBenar: kunci,
pembahasan: bahas || "Jawaban sesuai materi pembelajaran."
});
localStorage.setItem("rim_bank_soal_manual", JSON.stringify(dataTersimpan));
alert("✅ Soal berhasil disimpan! Siswa sekarang bisa mengerjakan soal ini.");
document.getElementById("admin-tanya").value = "";
document.getElementById("admin-opsi-0").value = "";
document.getElementById("admin-opsi-1").value = "";
document.getElementById("admin-opsi-2").value = "";
document.getElementById("admin-opsi-3").value = "";
document.getElementById("admin-bahas").value = "";
}
function bukaPanelAdmin() {
const inputPin = prompt("🔒 Masukkan PIN Admin untuk melihat rekap nilai siswa:");
if (inputPin !== ambilPinAdmin()) {
if (inputPin !== null) alert("❌ Akses Ditolak! PIN salah.");
return;
}
headerTitle.innerText = "Rekap Nilai (Admin)";
const dataRekap = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
let html = <button class="back-btn" onclick="bukaMenu('saya')">← Kembali</button> <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;"> <h3>📊 Daftar Nilai Siswa (${dataRekap.length})</h3> </div>;
if (dataRekap.length === 0) {
html += <div class="loading-box"><p style="color: #64748b;">Belum ada siswa yang menyelesaikan latihan soal.</p></div>;
} else {
html += `

📥 Download CSV (Excel)
🗑️ Hapus Semua

`;
dataRekap.forEach(function(row, idx) {
html += `
    `;
});

html += `</tbody></table></div>`;
}
contentArea.innerHTML = html;
}
function eksporNilaiCSV() {
const dataRekap = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
if (dataRekap.length === 0) return;
let csv = "No,Nama Siswa,Kelas,Mata Pelajaran,Bab Materi,Benar,Total Soal,Nilai,Waktu Selesai\n";
dataRekap.forEach(function(row, i) {
csv += ${i + 1},"${row.nama}","${row.kelas}","${row.mapel}","${row.bab}",${row.benar},${row.totalSoal},${row.nilai},"${row.waktu}"\n;
});
const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
const url = URL.createObjectURL(blob);
const link = document.createElement("a");
link.href = url;
link.download = Rekap_Nilai_RIM_Edu_${new Date().toISOString().slice(0,10)}.csv;
link.click();
}
function hapusSemuaNilai() {
if (confirm("⚠️ Yakin ingin menghapus seluruh riwayat nilai siswa? Tindakan ini tidak bisa dibatalkan.")) {
localStorage.removeItem("rim_rekap_nilai");
bukaPanelAdmin();
}
}
// Jalankan halaman awal
bukaMenu("home");

Pastikan ketiga nama file di repositori Anda persis bernama **`index.html`**, **`style.css`**, dan **`script.js`** (huruf kecil semua) dalam satu folder utama.

<FollowUp>
Apakah ketiga file terpisah tersebut sudah berhasil Anda simpan dan tampil normal di halaman web Anda?
</FollowUp>

No
	Nama & Kelas
	Mapel / Bab
	Nilai
	Waktu
${idx + 1}
	\({escapeHTML(row.nama)}</b><br><span style="color:#64748b;">\){escapeHTML(row.kelas)}
	\({escapeHTML(row.mapel)}</b><br><span style="color:#64748b; font-size:0.75rem;">\){escapeHTML(row.bab)}
	\({row.nilai}</b><br><span style="font-size:0.75rem;">(\){row.benar}/${row.totalSoal})
	${row.waktu}

