// ==========================================
// KONFIGURASI API AI (Ganti dengan API Key Anda)
// ==========================================
const GEMINI_API_KEY = "MASUKKAN_API_KEY_GEMINI_ANDA_DISINI";

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

// Contoh Bank Soal Dasar (Bisa Anda perbanyak)
const bankSoalContoh = [
  {
    tanya: "Berapakah hasil dari 15 + 27?",
    opsi: ["32", "42", "45", "52"],
    jawaban: 1 // Indeks jawaban benar (42)
  },
  {
    tanya: "Apa ibu kota negara Indonesia saat ini yang sedang dibangun di Kalimantan Timur?",
    opsi: ["Nusantara", "Balikpapan", "Samarinda", "Pontianak"],
    jawaban: 0 // Nusantara
  }
];

const contentArea = document.getElementById("app-content");
const headerTitle = document.getElementById("header-title");
let timerInterval;

// ==========================================
// NAVIGASI MENU BAWAH
// ==========================================
function bukaMenu(menu, element) {
  clearInterval(timerInterval); // Hentikan timer jika pindah menu

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
          Pilih jenjang di bawah untuk latihan soal, atau tanyakan materi pelajaran langsung ke AI di bawah ini.
        </p>
      </div>

      <!-- FITUR TANYA AI -->
      <div class="ai-box">
        <h3>🤖 Tanya Guru AI</h3>
        <div id="chat-history" class="chat-history">
          <div class="chat-msg chat-ai">Halo! Ada materi pelajaran atau soal PR yang ingin kamu tanyakan?</div>
        </div>
        <div class="chat-input-area">
          <input type="text" id="ai-input" placeholder="Ketik pertanyaanmu di sini..." onkeypress="if(event.key==='Enter') kirimPertanyaanAI()">
          <button onclick="kirimPertanyaanAI()">Kirim</button>
        </div>
      </div>
    `;
  } 
  else if (menu === "sd" || menu === "smp" || menu === "sma") {
    tampilkanDaftarKelas(menu);
  } 
  else if (menu === "saya") {
    headerTitle.innerText = "Akun & Pengaturan";
    contentArea.innerHTML = `
      <div class="list-menu">
        <div class="list-item" onclick="alert('Profil Pengguna')">
          <span>👤 Profil Saya</span> <span>›</span>
        </div>
        <div class="list-item" onclick="alert('Riwayat Skor Ujian')">
          <span>📊 Riwayat Nilai & Latihan</span> <span>›</span>
        </div>
        <div class="list-item" onclick="aturApiKey()">
          <span>🔑 Atur API Key AI</span> <span>›</span>
        </div>
        <div class="list-item" onclick="alert('Aplikasi Bank Soal RIM Edu AI v1.0')">
          <span>ℹ️ Tentang & Bantuan</span> <span>›</span>
        </div>
      </div>
    `;
  }
}

// ==========================================
// LOGIKA TANYA AI OTOMATIS (GEMINI API)
// ==========================================
async function kirimPertanyaanAI() {
  const inputEl = document.getElementById("ai-input");
  const chatHistory = document.getElementById("chat-history");
  const pertanyaan = inputEl.value.trim();

  if (!pertanyaan) return;

  // Tampilkan pesan pengguna
  chatHistory.innerHTML += `<div class="chat-msg chat-user">${pertanyaan}</div>`;
  inputEl.value = "";
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // Tampilkan indikator mengetik
  const loadingId = "loading-" + Date.now();
  chatHistory.innerHTML += `<div id="${loadingId}" class="chat-msg chat-ai"><em>Sedang berpikir...</em></div>`;
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // Cek apakah API Key sudah diisi
  const savedKey = localStorage.getItem("rim_gemini_key") || GEMINI_API_KEY;
  if (!savedKey || savedKey === "MASUKKAN_API_KEY_GEMINI_ANDA_DISINI") {
    document.getElementById(loadingId).innerHTML = 
      "⚠️ API Key belum diatur. Silakan masuk ke menu <b>Saya > Atur API Key AI</b> untuk memasukkan kunci API Gemini gratis Anda.";
    return;
  }

  try {
    const response = await fetch(`https://googleapis.com{savedKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Kamu adalah guru tutor yang ramah untuk siswa SD, SMP, dan SMA di Indonesia. Jawab pertanyaan ini dengan jelas dan mudah dipahami: ${pertanyaan}` }]
        }]
      })
    });

    const data = await response.json();
    const jawabanAI = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, AI tidak dapat memberikan jawaban saat ini.";
    
    // Ubah format baris baru menjadi <br> agar rapi
    document.getElementById(loadingId).innerHTML = jawabanAI.replace(/\n/g, "<br>");
  } catch (error) {
    document.getElementById(loadingId).innerHTML = "❌ Gagal terhubung ke server AI. Periksa koneksi internet atau API Key Anda.";
  }

  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Fitur simpan API Key lewat menu Saya
function aturApiKey() {
  const currentKey = localStorage.getItem("rim_gemini_key") || "";
  const newKey = prompt("Masukkan Google Gemini API Key Anda:", currentKey);
  if (newKey !== null) {
    localStorage.setItem("rim_gemini_key", newKey.trim());
    alert("API Key berhasil disimpan di browser!");
  }
}

// ==========================================
// NAVIGASI KELAS, MAPEL, & SISTEM KUIS TIMER
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
    html += `<button class="card-btn" onclick="mulaiKuis('${jenjang}', '${kelas}', '${mapel}')">${mapel}</button>`;
  });

  html += `</div>`;
  contentArea.innerHTML = html;
}

let soalAktif = 0;
let skor = 0;

function mulaiKuis(jenjang, kelas, mapel) {
  soalAktif = 0;
  skor = 0;
  headerTitle.innerText = `${mapel} (${kelas})`;
  jalankanTimer(60, jenjang, kelas, mapel); // Timer 60 detik
  renderSoal(jenjang, kelas, mapel);
}

function jalankanTimer(detik, jenjang, kelas, mapel) {
  clearInterval(timerInterval);
  let sisaWaktu = detik;

  timerInterval = setInterval(() => {
    const timerEl = document.getElementById("timer-display");
    if (timerEl) {
      timerEl.innerText = `⏱️ ${sisaWaktu} detik`;
    }
    sisaWaktu--;

    if (sisaWaktu < 0) {
      clearInterval(timerInterval);
      selesaiKuis(jenjang, kelas, mapel);
    }
  }, 1000);
}

function renderSoal(jenjang, kelas, mapel) {
  if (soalAktif >= bankSoalContoh.length) {
    clearInterval(timerInterval);
    selesaiKuis(jenjang, kelas, mapel);
    return;
  }

  const soal = bankSoalContoh[soalAktif];
  let opsiHtml = "";
  soal.opsi.forEach((pilihan, idx) => {
    opsiHtml += `<button class="opsi-btn" onclick="jawabSoal(${idx}, '${jenjang}', '${kelas}', '${mapel}')">${pilihan}</button>`;
  });

  contentArea.innerHTML = `
    <button class="back-btn" onclick="clearInterval(timerInterval); tampilkanMapel('${jenjang}', '${kelas}')">← Batal</button>
    <div style="background: white; padding: 18px; border-radius: 10px;">
      <div class="quiz-header">
        <span>Soal ${soalAktif + 1} / ${bankSoalContoh.length}</span>
        <span id="timer-display">⏱️ Mulai...</span>
      </div>
      <p style="font-size: 1.05rem; font-weight: 600; margin-bottom: 16px;">${soal.tanya}</p>
      ${opsiHtml}
    </div>
  `;
}

function jawabSoal(indeksPilihan, jenjang, kelas, mapel) {
  if (indeksPilihan === bankSoalContoh[soalAktif].jawaban) {
    skor += 100 / bankSoalContoh.length;
  }
  soalAktif++;
  renderSoal(jenjang, kelas, mapel);
}

function selesaiKuis(jenjang, kelas, mapel) {
  contentArea.innerHTML = `
    <div style="background: white; padding: 24px; border-radius: 10px; text-align: center;">
      <h2>🎉 Latihan Selesai!</h2>
      <p style="margin: 10px 0; color: #64748b;">${mapel} - ${kelas}</p>
      <div style="font-size: 2.5rem; font-weight: bold; color: #2563eb; margin: 16px 0;">
        Skor: ${Math.round(skor)}
      </div>
      <button class="card-btn" style="width: 100%; background: #2563eb; color: white;" onclick="tampilkanMapel('${jenjang}', '${kelas}')">
        Pilih Mapel Lain
      </button>
    </div>
  `;
}

// Jalankan beranda pertama kali
bukaMenu('home');
