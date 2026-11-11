// ==========================================
// KONFIGURASI API AI & PIN ADMIN
// ==========================================
const GEMINI_API_KEY = "MASUKKAN_API_KEY_GEMINI_ANDA_DISINI";
const GEMINI_MODEL = "gemini-2.5-flash";
const ADMIN_PIN_DEFAULT = "123456"; // Ubah PIN rahasia Anda di sini

// Data Struktur Jenjang, Kelas, dan Mata Pelajaran (Kurikulum Merdeka)
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

const contentArea = document.getElementById("app-content");
const headerTitle = document.getElementById("header-title");

let timerInterval;
let soalAktifList = [];
let riwayatJawabanUser = [];
let soalSekarang = 0;
let skorTotal = 0;
let waktuTersisa = 0;

// Data sesi pengerjaan siswa yang sedang aktif
let sesiSiswa = {
    nama: "",
    kelasInput: "",
    jenjang: "",
    kelasTingkat: "",
    mapel: "",
    bab: ""
};

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag]));
}

// ==========================================
// NAVIGASI MENU BAWAH
// ==========================================
function bukaMenu(menu, element) {
    clearInterval(timerInterval);

    if (element) {
        document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active"));
        element.classList.add("active");
    }

    if (menu === "home") {
        headerTitle.innerText = "Beranda - RIM Edu AI";
        contentArea.innerHTML = `
            <div style="background: white; padding: 16px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <h2>Selamat Datang! 👋</h2>
                <p style="margin-top: 6px; color: #475569; font-size: 0.9rem;">
                    Pilih jenjang pendidikan di bawah untuk latihan soal Kurikulum Merdeka per bab, atau tanya materi ke Guru AI.
                </p>
            </div>
            <div class="ai-box">
                <h3>🤖 Tanya Guru AI</h3>
                <div id="chat-history" class="chat-history">
                    <div class="chat-msg chat-ai">Halo! Ada materi Kurikulum Merdeka atau soal PR yang ingin kamu tanyakan?</div>
                </div>
                <div class="chat-input-area">
                    <input type="text" id="ai-input" placeholder="Ketik pertanyaanmu di sini..." onkeypress="if(event.key==='Enter') kirimPertanyaanAI()">
                    <button onclick="kirimPertanyaanAI()">Kirim</button>
                </div>
            </div>
        `;
    } else if (menu === "sd" || menu === "smp" || menu === "sma") {
        tampilkanDaftarKelas(menu);
    } else if (menu === "saya") {
        headerTitle.innerText = "Akun & Pengaturan";
        contentArea.innerHTML = `
            <div class="list-menu">
                <div class="list-item" onclick="bukaPanelAdmin()">
                    <span>🔐 Rekap Nilai Siswa (Khusus Admin)</span> <span>›</span>
                </div>
                <div class="list-item" onclick="aturApiKey()">
                    <span>🔑 Atur API Key Gemini AI</span> <span>›</span>
                </div>
                <div class="list-item" onclick="ubahPinAdmin()">
                    <span>🛡️ Ubah PIN Admin</span> <span>›</span>
                </div>
                <div class="list-item" onclick="alert('Aplikasi Bank Soal Kurikulum Merdeka Otomatis berbasis AI')">
                    <span>ℹ️ Tentang & Bantuan</span> <span>›</span>
                </div>
            </div>
        `;
    }
}

// ==========================================
// FUNGSI TANYA AI DI HOME
// ==========================================
function ambilApiKey() {
    return localStorage.getItem("rim_gemini_key") || GEMINI_API_KEY;
}

function aturApiKey() {
    const currentKey = localStorage.getItem("rim_gemini_key") || "";
    const newKey = prompt("Masukkan Google Gemini API Key Anda:", currentKey);
    if (newKey !== null) {
        localStorage.setItem("rim_gemini_key", newKey.trim());
        alert("API Key berhasil disimpan di browser!");
    }
}

async function kirimPertanyaanAI() {
    const inputEl = document.getElementById("ai-input");
    const chatHistory = document.getElementById("chat-history");
    const pertanyaan = inputEl.value.trim();

    if (!pertanyaan) return;

    chatHistory.innerHTML += `<div class="chat-msg chat-user">${escapeHTML(pertanyaan)}</div>`;
    inputEl.value = "";
    chatHistory.scrollTop = chatHistory.scrollHeight;

    const loadingId = "loading-" + Date.now();
    chatHistory.innerHTML += `<div id="${loadingId}" class="chat-msg chat-ai"><em>Sedang berpikir...</em></div>`;
    chatHistory.scrollTop = chatHistory.scrollHeight;

    const savedKey = ambilApiKey();
    if (!savedKey || savedKey === "MASUKKAN_API_KEY_GEMINI_ANDA_DISINI") {
        document.getElementById(loadingId).innerHTML =
            "⚠️ API Key belum diatur. Masuk ke menu <b>Saya > Atur API Key Gemini AI</b> terlebih dahulu.";
        return;
    }

    try {
        const response = await fetch(`https://googleapis.com{GEMINI_MODEL}:generateContent?key=${savedKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Kamu adalah guru tutor Kurikulum Merdeka di Indonesia yang ramah dan jelas. Jawab pertanyaan siswa ini dengan bahasa yang mudah dipahami:\n\n${pertanyaan}`
                    }]
                }]
            })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message);

        const jawabanAI = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, AI tidak dapat menjawab saat ini.";
        document.getElementById(loadingId).innerHTML = jawabanAI.replace(/\n/g, "<br>");
    } catch (error) {
        document.getElementById(loadingId).innerHTML = `❌ Gagal terhubung ke server AI: ${error.message}`;
    }

    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// ==========================================
// NAVIGASI KELAS -> MAPEL -> BAB MATERI
// ==========================================
function tampilkanDaftarKelas(jenjang) {
    const info = dataPendidikan[jenjang];
    headerTitle.innerText = info.judul;

    let html = `<h3>Pilih Kelas:</h3><div class="grid-menu">`;
    info.kelas.forEach(kelas => {
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

    info.mapel.forEach(mapel => {
        html += `<button class="card-btn" onclick="tampilkanBab('${jenjang}', '${kelas}', '${mapel}')">${mapel}</button>`;
    });

    html += `</div>`;
    contentArea.innerHTML = html;
}

function tampilkanBab(jenjang, kelas, mapel) {
    headerTitle.innerText = `${mapel} (${kelas})`;
    const kunciBab = `${jenjang}-${kelas}-${mapel}`;

    const daftarBab = dataBabMateri[kunciBab] || [
        `Bab 1: Konsep Dasar ${mapel} (${kelas})`,
        `Bab 2: Penerapan & Pemahaman ${mapel} Semester 1`,
        `Bab 3: Analisis Materi Lanjutan ${mapel}`,
        `Bab 4: Evaluasi & Latihan Akhir Semester 2`
    ];

    let html = `
        <button class="back-btn" onclick="tampilkanMapel('${jenjang}', '${kelas}')">← Ganti Mapel</button>
