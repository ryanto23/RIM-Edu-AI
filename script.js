// ==========================================
// KONFIGURASI PIN ADMIN, AI & DURASI WAKTU
// ==========================================
const ADMIN_PIN_DEFAULT = "123456"; // Ubah PIN rahasia Anda di sini
const DURASI_KUIS_DETIK = 300;      // 300 detik = 5 menit
const GEMINI_API_KEY = "";          // Opsional: Isi API Key Gemini Anda di sini jika ada

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
let sesiSiswa = { nama: "", sekolah: "", kelasInput: "", jenjang: "", kelasTingkat: "", mapel: "", bab: "" };

function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/\u0027/g, "&#39;");
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
        if (headerTitle) headerTitle.innerText = "RIM Edu AI";
        contentArea.innerHTML = `
            <section id="home-section" class="home-welcome">
                <div class="hero-card">
                    <h2>RIM Edu AI</h2>
                    <p class="subtitle">
                        Selamat datang di platform belajar cerdas dan bank soal interaktif Kurikulum Merdeka. Asah kemampuanmu setiap hari dan raih prestasi terbaik bersama asisten belajar AI!
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
                        <li>Isi <b>Nama Lengkap</b>, <b>Asal Sekolah</b>, dan <b>Kelas</b> sebelum mulai menjawab soal.</li>
                        <li>Gunakan fitur <b>Tanya AI</b> kapan saja jika butuh penjelasan materi.</li>
                        <li>Skor nilai otomatis tersimpan untuk direkap oleh Guru/Admin.</li>
                    </ul>
                </div>
            </section>
        `;
    } else if (menu === "sd" || menu === "smp" || menu === "sma") {
        tampilkanDaftarKelas(menu);
    } else if (menu === "saya") {
        if (headerTitle) headerTitle.innerText = "Panel Guru / Admin";
        contentArea.innerHTML = `
            <div class="form-box">
                <h3>🔐 Area Khusus Guru / Admin</h3>
                <p style="font-size: 0.85rem; color: #64748b; margin-top: 4px;">
                    Masukkan PIN Admin untuk melihat rekap skor siswa, mengunduh file nilai, atau menambah bank soal.
                </p>
            </div>
            <div class="list-menu">
                <div class="list-item" onclick="bukaPanelAdmin()">
                    <span>📊 Lihat & Unduh Rekap Nilai Siswa</span>
                    <span>›</span>
                </div>
                <div class="list-item" onclick="bukaFormInputSoal()">
                    <span>✍️ Tambah Soal Manual ke Bank Soal</span>
                    <span>›</span>
                </div>
                <div class="list-item" onclick="ubahPinAdmin()">
                    <span>🛡️ Ubah PIN Keamanan Admin</span>
                    <span>›</span>
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

