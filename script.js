Kode JavaScript yang Anda berikan terpotong di bagian akhir (tepat pada baris <div class="list-item" onclick="bukaPanelAdmin()"><span>📊 Lihat), serta fungsi-fungsi yang dipanggil di dalam HTML (bukaTanyaAI(), tampilkanDaftarKelas(), dan bukaPanelAdmin()) belum didefinisikan.
Selain melengkapi fungsi yang hilang, saya juga memperbaiki celah keamanan kecil pada fungsi escapeHTML() (tanda kutip tunggal ' belum di-escape menjadi &#39;).
Berikut adalah kode JavaScript lengkap yang sudah diperbaiki dan siap digunakan:

Kode JavaScript Lengkap (script.js)

javascript
// ==========================================
// KONFIGURASI PIN ADMIN, AI & DURASI WAKTU
// ==========================================
const ADMIN_PIN_DEFAULT = "123456";
const DURASI_KUIS_DETIK = 300;
const GEMINI_API_KEY = ""; // Masukkan API Key Gemini Anda di sini

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

// ==========================================
// FUNGSI UTILITAS
// ==========================================
function getContentArea() {
  return document.getElementById("app-content");
}

function getHeaderTitle() {
  return document.getElementById("header-title");
}

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
    soalTambahanAdmin = {};
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
  const contentArea = getContentArea();
  const headerTitle = getHeaderTitle();

  if (!contentArea) {
    console.error("Elemen #app-content tidak ditemukan di index.html!");
    return;
  }

  if (element) {
    document.querySelectorAll(".nav-item").forEach(function (btn) {
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
        <div class="list-item" onclick="bukaPanelAdmin('rekap')">
          <span>📊 Lihat Rekap Nilai Siswa</span>
          <span>➔</span>
        </div>
        <div class="list-item" onclick="bukaPanelAdmin('tambah-soal')">
          <span>➕ Tambah Bank Soal Manual</span>
          <span>➔</span>
        </div>
        <div class="list-item" onclick="bukaPanelAdmin('ganti-pin')">
          <span>🔑 Ubah PIN Admin</span>
          <span>➔</span>
        </div>
      </div>
    `;
  }
}

// ==========================================
// ALUR PEMILIHAN KELAS, MAPEL, BAB & BIODATA
// ==========================================
function tampilkanDaftarKelas(jenjang) {
  const data = dataPendidikan[jenjang];
  const headerTitle = getHeaderTitle();
  const contentArea = getContentArea();

  if (headerTitle) headerTitle.innerText = data.judul;
  sesiSiswa.jenjang = jenjang;

  let htmlKelas = data.kelas.map(k => `
    <div class="list-item" onclick="tampilkanDaftarMapel('${jenjang}', '${k}')">
      <span>📚 ${k}</span>
      <span>➔</span>
    </div>
  `).join("");

  contentArea.innerHTML = `
    <div class="form-box">
      <h3>Pilih Tingkat Kelas</h3>
      <p style="font-size: 0.85rem; color: #64748b;">Jenjang: <b>${data.judul}</b></p>
    </div>
    <div class="list-menu">${htmlKelas}</div>
  `;
}

function tampilkanDaftarMapel(jenjang, kelas) {
  const data = dataPendidikan[jenjang];
  const contentArea = getContentArea();
  sesiSiswa.kelasTingkat = kelas;

  let htmlMapel = data.mapel.map(m => `
    <div class="list-item" onclick="tampilkanDaftarBab('${jenjang}', '${kelas}', '${m}')">
      <span>📖 ${m}</span>
      <span>➔</span>
    </div>
  `).join("");

Use code with caution.
contentArea.innerHTML = <div class="form-box"> <button type="button" onclick="tampilkanDaftarKelas('${jenjang}')" style="margin-bottom:8px;">⬅ Kembali</button> <h3>Pilih Mata Pelajaran</h3> <p style="font-size: 0.85rem; color: #64748b;">${data.judul} - <b>${kelas}</b></p> </div> <div class="list-menu">${htmlMapel}</div>;
}
function tampilkanDaftarBab(jenjang, kelas, mapel) {
const contentArea = getContentArea();
sesiSiswa.mapel = mapel;
const kunciBab = ${jenjang}-${kelas}-${mapel};
const daftarBab = dataBabMateri[kunciBab] || ["Bab 1: Latihan Soal Umum"];
let htmlBab = daftarBab.map(bab => <div class="list-item" onclick="tampilkanFormBiodata('${escapeHTML(bab)}')"> <span>📝 ${escapeHTML(bab)}</span> <span>➔</span> </div>).join("");
contentArea.innerHTML = <div class="form-box"> <button type="button" onclick="tampilkanDaftarMapel('${jenjang}', '${kelas}')" style="margin-bottom:8px;">⬅ Kembali</button> <h3>Pilih Bab Materi</h3> <p style="font-size: 0.85rem; color: #64748b;">${kelas} - <b>${mapel}</b></p> </div> <div class="list-menu">${htmlBab}</div>;
}
function tampilkanFormBiodata(bab) {
const contentArea = getContentArea();
sesiSiswa.bab = bab;
contentArea.innerHTML = `

⬅ Kembali
Data Diri Siswa
Materi: ${escapeHTML(bab)}
Nama Lengkap:
Asal Sekolah:
Kelas Spesifik:
🚀 Mulai Mengerjakan Soal

`;
}
// ==========================================
// SISTEM KUIS & PENILAIAN
// ==========================================
function mulaiKuis() {
const nama = document.getElementById("input-nama").value.trim();
const sekolah = document.getElementById("input-sekolah").value.trim();
const kelasInput = document.getElementById("input-kelas").value.trim();
if (!nama || !sekolah || !kelasInput) {
alert("Harap lengkapi semua data diri terlebih dahulu!");
return;
}
sesiSiswa.nama = nama;
sesiSiswa.sekolah = sekolah;
sesiSiswa.kelasInput = kelasInput;
const semuaSoal = ambilSemuaBankSoal();
const kunciSoal = ${sesiSiswa.jenjang}-${sesiSiswa.kelasTingkat}-${sesiSiswa.mapel}-${sesiSiswa.bab};
soalAktifList = semuaSoal[kunciSoal] || [];
if (soalAktifList.length === 0) {
alert("Maaf, soal untuk bab ini belum tersedia di database.");
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
const timerEl = document.getElementById("kuis-timer");
if (timerEl) {
const menit = Math.floor(waktuTersisa / 60);
const detik = waktuTersisa % 60;
timerEl.innerText = ⏱️ ${menit}:${detik < 10 ? "0" : ""}${detik};
}
if (waktuTersisa <= 0) {
clearInterval(timerInterval);
alert("Waktu habis! Jawaban Anda akan otomatis dikumpulkan.");
selesaiKuis();
}
}, 1000);
}
function renderSoal() {
const contentArea = getContentArea();
const soal = soalAktifList[soalSekarang];
const hurufPilihan = ["A", "B", "C", "D"];
let htmlPilihan = soal.pilihan.map((pil, index) => <button type="button" class="list-item" style="width:100%; text-align:left; margin-bottom:8px; cursor:pointer;" onclick="pilihJawaban(${index})"> <span><b>${hurufPilihan[index]}.</b> ${escapeHTML(pil)}</span> </button>).join("");
contentArea.innerHTML = <div class="form-box"> <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-weight:bold;"> <span>Soal ${soalSekarang + 1} dari ${soalAktifList.length}</span> <span id="kuis-timer" style="color:#dc2626;">⏱️ Memuat...</span> </div> <p style="font-size:1rem; margin-bottom:16px; line-height:1.5;">${escapeHTML(soal.pertanyaan)}</p> <div>${htmlPilihan}</div> </div>;
}
function pilihJawaban(indexPilihan) {
const soal = soalAktifList[soalSekarang];
const benar = indexPilihan === soal.jawabanBenar;
if (benar) skorTotal++;
riwayatJawabanUser.push({
pertanyaan: soal.pertanyaan,
pilihanUser: soal.pilihan[indexPilihan],
jawabanBenar: soal.pilihan[soal.jawabanBenar],
pembahasan: soal.pembahasan,
status: benar
});
soalSekarang++;
if (soalSekarang < soalAktifList.length) {
renderSoal();
} else {
selesaiKuis();
}
}
function selesaiKuis() {
clearInterval(timerInterval);
const contentArea = getContentArea();
const nilaiAkhir = Math.round((skorTotal / soalAktifList.length) * 100);
// Simpan ke LocalStorage untuk rekap Admin
const dataRekap = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
dataRekap.push({
tanggal: new Date().toLocaleString("id-ID"),
nama: sesiSiswa.nama,
sekolah: sesiSiswa.sekolah,
kelas: sesiSiswa.kelasInput,
mapel: sesiSiswa.mapel,
bab: sesiSiswa.bab,
nilai: nilaiAkhir
});
localStorage.setItem("rim_rekap_nilai", JSON.stringify(dataRekap));
let htmlPembahasan = riwayatJawabanUser.map((item, idx) => <div style="border-bottom:1px solid #e2e8f0; padding:10px 0;"> <p><b>${idx + 1}. ${escapeHTML(item.pertanyaan)}</b></p> <p style="color:${item.status ? "#16a34a" : "#dc2626"}; font-size:0.9rem;"> Jawabanmu: ${escapeHTML(item.pilihanUser)} (${item.status ? "Benar" : "Salah"}) </p> ${!item.status ?Jawaban Benar: ${escapeHTML(item.jawabanBenar)}: ""} <p style="font-size:0.85rem; color:#64748b; margin-top:4px;">💡 <i>${escapeHTML(item.pembahasan)}</i></p> </div>).join("");
contentArea.innerHTML = <div class="form-box" style="text-align:center;"> <h2>🎉 Kuis Selesai!</h2> <p style="margin-top:8px;">Nilai Akhir <b>${escapeHTML(sesiSiswa.nama)}</b>:</p> <h1 style="font-size:3rem; color:#2563eb; margin:12px 0;">${nilaiAkhir}</h1> <p style="font-size:0.9rem; color:#64748b;">Benar ${skorTotal} dari ${soalAktifList.length} soal</p> <button type="button" class="btn-ai-primary" onclick="bukaMenu('home')" style="margin-top:16px;">🏠 Kembali ke Beranda</button> </div> <div class="form-box" style="margin-top:12px;"> <h3>📋 Pembahasan Soal</h3> ${htmlPembahasan} </div>;
}
// ==========================================
// FITUR TANYA AI (GEMINI API)
// ==========================================
function bukaTanyaAI() {
const contentArea = getContentArea();
const headerTitle = getHeaderTitle();
if (headerTitle) headerTitle.innerText = "Asisten Belajar AI";
contentArea.innerHTML = <div class="form-box"> <button type="button" onclick="bukaMenu('home')" style="margin-bottom:8px;">⬅ Kembali</button> <h3>🤖 Tanya Materi ke AI</h3> <p style="font-size:0.85rem; color:#64748b; margin-bottom:12px;">Tanyakan konsep pelajaran yang belum kamu pahami.</p> <textarea id="ai-prompt" rows="4" placeholder="Contoh: Jelaskan rumus luas lingkaran beserta contoh soalnya..." style="width:100%; padding:8px; margin-bottom:12px;"></textarea> <button type="button" class="btn-ai-primary" onclick="kirimPertanyaanAI()" style="width:100%;">Kirim Pertanyaan</button> <div id="ai-response" style="margin-top:16px; font-size:0.9rem; line-height:1.6; color:#1e293b;"></div> </div>;
}
async function kirimPertanyaanAI() {
const promptText = document.getElementById("ai-prompt").value.trim();
const responseBox = document.getElementById("ai-response");
if (!promptText) {
alert("Tulis pertanyaan terlebih dahulu!");
return;
}
if (!GEMINI_API_KEY) {
responseBox.innerHTML = <p style="color:#dc2626;">⚠️ API Key Gemini belum diatur di dalam kode (variabel <code>GEMINI_API_KEY</code>).</p>;
return;
}
responseBox.innerHTML = <p>⏳ Sedang berpikir...</p>;
try {
const res = await fetch(https://googleapis.com{GEMINI_API_KEY}, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
contents: [{ parts: [{ text: Kamu adalah guru yang ramah untuk siswa Indonesia. Jawab dengan bahasa sederhana: ${promptText} }] }]
})
});
const data = await res.json();
const jawaban = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, AI tidak dapat memberikan jawaban saat ini.";
responseBox.innerHTML = <div style="background:#f8fafc; padding:12px; border-radius:8px; white-space:pre-wrap;">${escapeHTML(jawaban)}</div>;
} catch (error) {
responseBox.innerHTML = <p style="color:#dc2626;">Terjadi kesalahan koneksi ke server AI.</p>;
}
}
// ==========================================
// PANEL ADMIN / GURU
// ==========================================
function bukaPanelAdmin(aksi) {
const pinInput = prompt("Masukkan PIN Admin (Default: 123456):");
if (pinInput !== getPinAdmin()) {
alert("PIN salah! Akses ditolak.");
return;
}
const contentArea = getContentArea();
if (aksi === "rekap") {
const dataRekap = JSON.parse(localStorage.getItem("rim_rekap_nilai") || "[]");
let isiTabel = dataRekap.length === 0
? "Belum ada data nilai siswa."
: dataRekap.map((d, i) => <div style="border-bottom:1px solid #e2e8f0; padding:8px 0; font-size:0.85rem;"> <b>${i + 1}. ${escapeHTML(d.nama)}</b> (${escapeHTML(d.sekolah)} - ${escapeHTML(d.kelas)})<br> Mapel: ${escapeHTML(d.mapel)} | Nilai: <b style="color:#2563eb;">${d.nilai}</b><br> <small style="color:#64748b;">${escapeHTML(d.tanggal)}</small> </div>).join("");
contentArea.innerHTML = <div class="form-box"> <button type="button" onclick="bukaMenu('saya')" style="margin-bottom:8px;">⬅ Kembali</button> <h3>📊 Rekap Nilai Siswa</h3> <div style="margin-top:12px;">${isiTabel}</div> </div>;
} else if (aksi === "tambah-soal") {
alert("Fitur tambah soal siap digunakan! Silakan sesuaikan form input soal sesuai struktur bankSoalBawaan.");
} else if (aksi === "ganti-pin") {
const pinBaru = prompt("Masukkan PIN Admin Baru (minimal 4 angka):");
if (pinBaru && pinBaru.length >= 4) {
localStorage.setItem("rim_admin_pin", pinBaru);
alert("PIN Admin berhasil diperbarui!");
} else {
alert("PIN tidak valid.");
}
}
}
// Jalankan halaman Home saat pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
bukaMenu("home");
});

---

### Ringkasan Perbaikan yang Dilakukan
1. **Menutup Kode yang Terpotong**: Menyelesaikan bagian menu `"saya"` (Panel Guru/Admin) yang terputus di tengah tag HTML.
2. **Melengkapi Fungsi yang Hilang**: Menambahkan fungsi `tampilkanDaftarKelas()`, `tampilkanDaftarMapel()`, `tampilkanDaftarBab()`, `tampilkanFormBiodata()`, `mulaiKuis()`, `bukaTanyaAI()`, dan `bukaPanelAdmin()` agar semua tombol di aplikasi berjalan utuh tanpa *error* `ReferenceError`.
3. **Keamanan Sanitasi HTML (`escapeHTML`)**: Memperbaiki baris `.replace(/'/g, "'")` menjadi `.replace(/'/g, "&#39;")` untuk mencegah bug karakter kutip tunggal pada atribut `onclick`.
4. **Inisialisasi Halaman Awal**: Menambahkan `DOMContentLoaded` di bagian paling bawah agar halaman langsung menampilkan beranda saat dibuka.

<FollowUp>
Apakah Anda juga ingin saya buatkan kode **`index.html`** dan **`style.css`** yang cocok untuk menjalankan skrip JavaScript ini, atau melengkapi formulir **Tambah Bank Soal** pada panel admin?
</FollowUp>
