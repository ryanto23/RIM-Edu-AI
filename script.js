// ==========================================
// KONFIGURASI PIN ADMIN, AI & DURASI WAKTU
// ==========================================
const ADMIN_PIN_DEFAULT = "123456"; // Ubah PIN rahasia Anda di sini
const DURASI_KUIS_DETIK = 300; // 300 detik = 5 menit
const GEMINI_API_KEY = ""; // Opsional: Isi API Key Gemini Anda di sini jika ada

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
  sekolah: "",
  kelasInput: "",
  jenjang: "",
  kelasTingkat: "",
  mapel: "",
  bab: ""
};

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getPinAdmin() {
  return localStorage.getItem("rim_admin_pin") || ADMIN_PIN_DEFAULT;
}

function ambilSemuaBankSoal() {
  let soalTambahanAdmin = {};
  try {
    soalTambahanAdmin = JSON.parse(localStorage.getItem("rim_bank_soal_manual") || "{}");
  } catch (e) {
    console.error("Gagal membaca data soal tambahan:", e);
  }

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
    document.querySelectorAll(".nav-item").forEach(function (btn) {
      btn.classList.remove("active");
    });
    element.classList.add("active");
  }

  if (!contentArea) return;

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
    if (typeof tampilkanDaftarKelas === "function") {
      tampilkanDaftarKelas(menu);
    } else {
      console.error("Fungsi tampilkanDaftarKelas() belum didefinisikan.");
    }
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
// ==========================================
// ALUR PEMILIHAN MATERI & FORM SISWA
// ==========================================
function tampilkanDaftarKelas(jenjang) {
  const data = dataPendidikan[jenjang];
  if (!data) return;

  sesiSiswa.jenjang = jenjang;
  if (headerTitle) headerTitle.innerText = data.judul;

  let html = `
    <div class="form-box">
      <h3>Pilih Tingkat Kelas</h3>
      <p style="font-size: 0.85rem; color: #64748b; margin-top: 4px;">
        Silakan pilih kelas pada jenjang ${escapeHTML(data.judul)}.
      </p>
    </div>
    <div class="list-menu">
  `;

  data.kelas.forEach((kelas) => {
    html += `
      <div class="list-item" onclick="tampilkanDaftarMapel('${jenjang}', '${escapeHTML(kelas)}')">
        <span>🏫 ${escapeHTML(kelas)}</span>
        <span>›</span>
      </div>
    `;
  });

  html += `</div>`;
  contentArea.innerHTML = html;
}

function tampilkanDaftarMapel(jenjang, kelas) {
  const data = dataPendidikan[jenjang];
  sesiSiswa.kelasTingkat = kelas;
  if (headerTitle) headerTitle.innerText = `${kelas} - Mata Pelajaran`;

  let html = `
    <button type="button" class="btn-back" onclick="tampilkanDaftarKelas('${jenjang}')" style="margin-bottom: 12px;">
      ← Kembali ke Pilih Kelas
    </button>
    <div class="list-menu">
  `;

  data.mapel.forEach((mapel) => {
    html += `
      <div class="list-item" onclick="tampilkanDaftarBab('${jenjang}', '${escapeHTML(kelas)}', '${escapeHTML(mapel)}')">
        <span>📖 ${escapeHTML(mapel)}</span>
        <span>›</span>
      </div>
    `;
  });

  html += `</div>`;
  contentArea.innerHTML = html;
}

function tampilkanDaftarBab(jenjang, kelas, mapel) {
  sesiSiswa.mapel = mapel;
  if (headerTitle) headerTitle.innerText = mapel;

  const kunciMateri = `${jenjang}-${kelas}-${mapel}`;
  const daftarBab = dataBabMateri[kunciMateri] || [
    "Bab 1: Pengenalan Materi Dasar",
    "Bab 2: Pendalaman Konsep & Latihan",
    "Bab 3: Evaluasi Akhir Semester"
  ];

  let html = `
    <button type="button" class="btn-back" onclick="tampilkanDaftarMapel('${jenjang}', '${escapeHTML(kelas)}')" style="margin-bottom: 12px;">
      ← Kembali ke Mata Pelajaran
    </button>
    <div class="form-box">
      <h3>Pilih Bab Materi (${escapeHTML(kelas)})</h3>
    </div>
    <div class="list-menu">
  `;

  daftarBab.forEach((bab) => {
    html += `
      <div class="list-item" onclick="tampilkanFormSiswa('${escapeHTML(bab)}')">
        <span>📑 ${escapeHTML(bab)}</span>
        <span>›</span>
      </div>
    `;
  });

  html += `</div>`;
  contentArea.innerHTML = html;
}

function tampilkanFormSiswa(bab) {
  sesiSiswa.bab = bab;
  if (headerTitle) headerTitle.innerText = "Data Peserta Kuis";

  contentArea.innerHTML = `
    <button type="button" class="btn-back" onclick="tampilkanDaftarBab('${sesiSiswa.jenjang}', '${escapeHTML(sesiSiswa.kelasTingkat)}', '${escapeHTML(sesiSiswa.mapel)}')" style="margin-bottom: 12px;">
      ← Kembali ke Pilih Bab
    </button>
    <div class="form-box">
      <h3>📝 Isi Identitas Sebelum Mulai</h3>
      <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 12px;">
        Materi: <b>${escapeHTML(sesiSiswa.mapel)}</b> - ${escapeHTML(sesiSiswa.bab)}
      </p>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <input type="text" id="input-nama-siswa" placeholder="Nama Lengkap Siswa" required style="padding: 10px; border-radius: 8px; border: 1px solid #cbd5e1;">
        <input type="text" id="input-sekolah-siswa" placeholder="Asal Sekolah" required style="padding: 10px; border-radius: 8px; border: 1px solid #cbd5e1;">
        <input type="text" id="input-kelas-siswa" placeholder="Kelas (Contoh: 7A / 10 IPA 1)" required style="padding: 10px; border-radius: 8px; border: 1px solid #cbd5e1;">
        <button type="button" class="btn-ai-primary" onclick="mulaiKuis()">
          🚀 Mulai Kerjakan Soal
        </button>
      </div>
    </div>
  `;
}

// ==========================================
// LOGIKA KUIS, TIMER & PENILAIAN
// ==========================================
function mulaiKuis() {
  const nama = document.getElementById("input-nama-siswa").value.trim();
  const sekolah = document.getElementById("input-sekolah-siswa").value.trim();
  const kelasInput = document.getElementById("input-kelas-siswa").value.trim();

  if (!nama || !sekolah || !kelasInput) {
    alert("Harap lengkapi Nama, Asal Sekolah, dan Kelas terlebih dahulu!");
    return;
  }

  sesiSiswa.nama = nama;
  sesiSiswa.sekolah = sekolah;
  sesiSiswa.kelasInput = kelasInput;

  const semuaBank = ambilSemuaBankSoal();
  const kunciSoal = `${sesiSiswa.jenjang}-${sesiSiswa.kelasTingkat}-${sesiSiswa.mapel}-${sesiSiswa.bab}`;
  soalAktifList = semuaBank[kunciSoal] || [];

  if (soalAktifList.length === 0) {
    alert("Belum ada soal tersedia untuk bab ini. Silakan hubungi Guru/Admin untuk menambahkan soal.");
    return;
  }

  soalSekarang = 0;
  skorTotal = 0;
  riwayatJawabanUser = [];
  waktuTersisa = DURASI_KUIS_DETIK;

  jalankanTimer();
  renderSoal();
}

function jalankanTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    waktuTersisa--;
    const timerEl = document.getElementById("quiz-timer");
    if (timerEl) {
      const menit = Math.floor(waktuTersisa / 60);
      const detik = waktuTersisa % 60;
      timerEl.innerText = `⏱️ ${String(menit).padStart(2, "0")}:${String(detik).padStart(2, "0")}`;
    }

    if (waktuTersisa <= 0) {
      clearInterval(timerInterval);
      alert("Waktu pengerjaan telah habis!");
      selesaikanKuis();
    }
  }, 1000);
}

function renderSoal() {
  const soal = soalAktifList[soalSekarang];
  if (!soal) {
    selesaikanKuis();
    return;
  }

  if (headerTitle) headerTitle.innerText = `Soal ${soalSekarang + 1} dari ${soalAktifList.length}`;

  let pilihanHTML = "";
  const hurufPilihan = ["A", "B", "C", "D", "E"];

  soal.pilihan.forEach((teksPilihan, idx) => {
    pilihanHTML += `
      <button type="button" class="list-item" style="width: 100%; text-align: left; margin-bottom: 8px; cursor: pointer;" onclick="jawabSoal(${idx})">
        <span><b>${hurufPilihan[idx]}.</b> ${escapeHTML(teksPilihan)}</span>
      </button>
    `;
  });

  contentArea.innerHTML = `
    <div class="form-box">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 0.85rem; color: #64748b;">Peserta: <b>${escapeHTML(sesiSiswa.nama)}</b></span>
        <span id="quiz-timer" style="font-weight: bold; color: #ef4444;">⏱️ Menyiapkan...</span>
      </div>
      <p style="font-size: 1rem; line-height: 1.5; margin-bottom: 16px;">
        ${escapeHTML(soal.pertanyaan)}
      </p>
      <div>
        ${pilihanHTML}
      </div>
    </div>
  `;
}

function jawabSoal(indexPilihan) {
  const soal = soalAktifList[soalSekarang];
  const benar = indexPilihan === soal.jawabanBenar;

  if (benar) skorTotal++;

  riwayatJawabanUser.push({
    pertanyaan: soal.pertanyaan,
    jawabanUser: soal.pilihan[indexPilihan],
    jawabanBenar: soal.pilihan[soal.jawabanBenar],
    status: benar,
    pembahasan: soal.pembahasan || "-"
  });

  soalSekarang++;
  if (soalSekarang < soalAktifList.length) {
    renderSoal();
  } else {
    selesaikanKuis();
  }
}

function selesaikanKuis() {
  clearInterval(timerInterval);
  const nilaiAkhir = Math.round((skorTotal / soalAktifList.length) * 100);

  // Simpan rekap nilai ke localStorage
  const rekapLama = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
  rekapLama.push({
    tanggal: new Date().toLocaleString("id-ID"),
    nama: sesiSiswa.nama,
    sekolah: sesiSiswa.sekolah,
    kelas: sesiSiswa.kelasInput,
    mapel: sesiSiswa.mapel,
    bab: sesiSiswa.bab,
    nilai: nilaiAkhir
  });
  localStorage.setItem("rim_rekap_nilai", JSON.stringify(rekapLama));

  if (headerTitle) headerTitle.innerText = "Hasil Kuis";

  let pembahasanHTML = "";
  riwayatJawabanUser.forEach((item, idx) => {
    pembahasanHTML += `
      <div style="border-bottom: 1px solid #e2e8f0; padding: 10px 0; font-size: 0.85rem;">
        <p><b>${idx + 1}. ${escapeHTML(item.pertanyaan)}</b></p>
        <p style="color: ${item.status ? "#16a34a" : "#dc2626"};">
          Jawabanmu: ${escapeHTML(item.jawabanUser)} ${item.status ? "✅" : "❌"}
        </p>
        ${!item.status ? `<p style="color: #16a34a;">Jawaban Benar: ${escapeHTML(item.jawabanBenar)}</p>` : ""}
        <p style="color: #475569; margin-top: 4px;"><i>Pembahasan: ${escapeHTML(item.pembahasan)}</i></p>
      </div>
    `;
  });

  contentArea.innerHTML = `
    <div class="form-box" style="text-align: center;">
      <h2>🎉 Kuis Selesai!</h2>
      <p style="margin-top: 6px; color: #475569;">${escapeHTML(sesiSiswa.nama)} (${escapeHTML(sesiSiswa.sekolah)})</p>
      <div style="font-size: 2.5rem; font-weight: bold; color: #2563eb; margin: 14px 0;">
        ${nilaiAkhir}
      </div>
      <p style="font-size: 0.9rem; color: #64748b;">Benar ${skorTotal} dari ${soalAktifList.length} soal</p>
      <button type="button" class="btn-ai-primary" style="margin-top: 14px;" onclick="bukaMenu('home', document.querySelectorAll('.nav-item')[0])">
        🏠 Kembali ke Beranda
      </button>
    </div>
    <div class="form-box" style="margin-top: 12px;">
      <h3>📖 Pembahasan Jawaban</h3>
      ${pembahasanHTML}
    </div>
  `;
}

// ==========================================
// PANEL GURU / ADMIN
// ==========================================
function verifikasiPinAdmin() {
  const inputPin = prompt("Masukkan PIN Keamanan Admin:");
  if (inputPin === null) return false;
  if (inputPin !== getPinAdmin()) {
    alert("PIN Admin salah!");
    return false;
  }
  return true;
}

function bukaPanelAdmin() {
  if (!verifikasiPinAdmin()) return;

  const dataNilai = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
  if (headerTitle) headerTitle.innerText = "Rekap Nilai Siswa";

  let barisNilai = "";
if (dataNilai.length === 0) {
barisNilai = <p style="color: #64748b; font-size: 0.9rem;">Belum ada data nilai siswa yang tersimpan.</p>;
} else {
dataNilai.forEach((row, i) => {
barisNilai += <div style="border-bottom: 1px solid #e2e8f0; padding: 8px 0; font-size: 0.85rem;"> <b>${i + 1}. ${escapeHTML(row.nama)}</b> (${escapeHTML(row.kelas)} - ${escapeHTML(row.sekolah)})<br> <span style="color: #475569;">${escapeHTML(row.mapel)} | Nilai: <b>${row.nilai}</b></span><br> <small style="color: #94a3b8;">${escapeHTML(row.tanggal)}</small> </div>;
});
}
contentArea.innerHTML = <button type="button" class="btn-back" onclick="bukaMenu('saya')" style="margin-bottom: 12px;">← Kembali</button> <div class="form-box"> <h3>📊 Rekap Skor Siswa</h3> <div style="margin: 12px 0; display: flex; gap: 8px;"> <button type="button" class="btn-ai-primary" onclick="unduhCSVNilai()">⬇️ Unduh CSV</button> <button type="button" class="btn-back" style="color: #dc2626;" onclick="hapusSemuaNilai()">🗑️ Reset Data</button> </div> ${barisNilai} </div>;
}
function unduhCSVNilai() {
const dataNilai = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
if (dataNilai.length === 0) {
alert("Tidak ada data untuk diunduh.");
return;
}
let csv = "No,Tanggal,Nama Siswa,Sekolah,Kelas,Mata Pelajaran,Bab,Nilai\n";
dataNilai.forEach((r, idx) => {
csv += ${idx + 1},"${r.tanggal}","${r.nama}","${r.sekolah}","${r.kelas}","${r.mapel}","${r.bab}",${r.nilai}\n;
});
const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = Rekap_Nilai_RIM_Edu_${new Date().toISOString().slice(0, 10)}.csv;
link.click();
}
function hapusSemuaNilai() {
if (confirm("Yakin ingin menghapus seluruh rekap nilai siswa?")) {
localStorage.removeItem("rim_rekap_nilai");
bukaPanelAdmin();
}
}
function bukaFormInputSoal() {
if (!verifikasiPinAdmin()) return;
if (headerTitle) headerTitle.innerText = "Tambah Soal Manual";
contentArea.innerHTML = <button type="button" class="btn-back" onclick="bukaMenu('saya')" style="margin-bottom: 12px;">← Kembali</button> <div class="form-box" style="display: flex; flex-direction: column; gap: 10px;"> <h3>✍️ Input Soal Baru</h3> <select id="admin-jenjang" style="padding: 8px; border-radius: 6px;"> <option value="sd">SD</option> <option value="smp">SMP</option> <option value="sma">SMA / SMK</option> </select> <input type="text" id="admin-kelas" placeholder="Kelas (Contoh: Kelas 7)" style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;"> <input type="text" id="admin-mapel" placeholder="Mata Pelajaran (Contoh: Matematika)" style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;"> <input type="text" id="admin-bab" placeholder="Nama Bab (Harus sama persis dengan daftar bab)" style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;"> <textarea id="admin-pertanyaan" rows="3" placeholder="Tulis pertanyaan soal..." style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;"></textarea> <input type="text" id="admin-pil-0" placeholder="Pilihan A" style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;"> <input type="text" id="admin-pil-1" placeholder="Pilihan B" style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;"> <input type="text" id="admin-pil-2" placeholder="Pilihan C" style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;"> <input type="text" id="admin-pil-3" placeholder="Pilihan D" style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;"> <select id="admin-kunci" style="padding: 8px; border-radius: 6px;"> <option value="0">Kunci Jawaban: A</option> <option value="1">Kunci Jawaban: B</option> <option value="2">Kunci Jawaban: C</option> <option value="3">Kunci Jawaban: D</option> </select> <textarea id="admin-pembahasan" rows="2" placeholder="Pembahasan singkat..." style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;"></textarea> <button type="button" class="btn-ai-primary" onclick="simpanSoalBaru()">💾 Simpan Soal</button> </div>;
}
function simpanSoalBaru() {
const jenjang = document.getElementById("admin-jenjang").value;
const kelas = document.getElementById("admin-kelas").value.trim();
const mapel = document.getElementById("admin-mapel").value.trim();
const bab = document.getElementById("admin-bab").value.trim();
const pertanyaan = document.getElementById("admin-pertanyaan").value.trim();
const pilihan = [
document.getElementById("admin-pil-0").value.trim(),
document.getElementById("admin-pil-1").value.trim(),
document.getElementById("admin-pil-2").value.trim(),
document.getElementById("admin-pil-3").value.trim()
];
const jawabanBenar = parseInt(document.getElementById("admin-kunci").value, 10);
const pembahasan = document.getElementById("admin-pembahasan").value.trim();
if (!kelas || !mapel || !bab || !pertanyaan || pilihan.includes("")) {
alert("Harap isi semua kolom soal dan pilihan jawaban!");
return;
}
const kunciMateri = ${jenjang}-${kelas}-${mapel}-${bab};
const bankTambahan = JSON.parse(localStorage.getItem("rim_bank_soal_manual") || "{}");
if (!bankTambahan[kunciMateri]) bankTambahan[kunciMateri] = [];
bankTambahan[kunciMateri].push({ pertanyaan, pilihan, jawabanBenar, pembahasan });
localStorage.setItem("rim_bank_soal_manual", JSON.stringify(bankTambahan));
alert("Soal berhasil disimpan ke Bank Soal!");
bukaMenu("saya");
}
function ubahPinAdmin() {
if (!verifikasiPinAdmin()) return;
const pinBaru = prompt("Masukkan PIN Admin baru (minimal 4 angka):");
if (pinBaru && pinBaru.trim().length >= 4) {
localStorage.setItem("rim_admin_pin", pinBaru.trim());
alert("PIN Admin berhasil diperbarui!");
} else if (pinBaru !== null) {
alert("PIN minimal harus 4 karakter!");
}
}
// ==========================================
// INTEGRASI API GEMINI (UNTUK FITUR TANYA AI)
// ==========================================
async function kirimPertanyaanAI() {
const inputEl = document.getElementById("input-pertanyaan-ai");
const chatBox = document.getElementById("chat-ai-box");
if (!inputEl || !chatBox) return;
const pertanyaan = inputEl.value.trim();
if (!pertanyaan) return;
chatBox.innerHTML += <div style="text-align: right; margin: 6px 0;"><span style="background: #2563eb; color: #fff; padding: 8px 12px; border-radius: 12px; display: inline-block;">${escapeHTML(pertanyaan)}</span></div>;
inputEl.value = "";
const loadingId = "ai-loading-" + Date.now();
chatBox.innerHTML += <div id="${loadingId}" style="margin: 6px 0; color: #64748b; font-size: 0.85rem;">🤖 Sedang berpikir...</div>;
chatBox.scrollTop = chatBox.scrollHeight;
if (!GEMINI_API_KEY) {
document.getElementById(loadingId).innerHTML = <span style="background: #f1f5f9; padding: 8px 12px; border-radius: 12px; display: inline-block;">⚠️ API Key Gemini belum diatur di file <b>script.js</b>. Silakan isi variabel <code>GEMINI_API_KEY</code> terlebih dahulu.</span>;
return;
}
try {
const response = await fetch(https://googleapis.com{GEMINI_API_KEY}, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
contents: [{ parts: [{ text: Kamu adalah asisten belajar ramah untuk siswa Indonesia (Kurikulum Merdeka). Jawab dengan jelas dan ringkas: ${pertanyaan} }] }]
})
});
const data = await response.json();
const jawabanAI = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, AI tidak dapat memberikan jawaban saat ini.";
document.getElementById(loadingId).innerHTML = <div style="background: #f1f5f9; padding: 10px 12px; border-radius: 12px; line-height: 1.5; white-space: pre-line;">${escapeHTML(jawabanAI)}</div>;
} catch (error) {
document.getElementById(loadingId).innerHTML = <span style="color: #dc2626;">❌ Gagal terhubung ke server AI. Periksa koneksi internet Anda.</span>;
}
chatBox.scrollTop = chatBox.scrollHeight;
}
// Jalankan halaman Home saat pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
bukaMenu("home", document.querySelectorAll(".nav-item")[0]);
});
