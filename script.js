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
