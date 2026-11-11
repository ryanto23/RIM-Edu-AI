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

const contentArea = document.getElementById("app-content");
const headerTitle = document.getElementById("header-title");

// Fungsi Utama Navigasi Bawah
function bukaMenu(menu, element) {
  // Ubah status aktif pada tombol bawah
  if (element) {
    document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active"));
    element.classList.add("active");
  }

  if (menu === "home") {
    headerTitle.innerText = "Beranda - RIM Edu AI";
    contentArea.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <h2>Selamat Datang! 👋</h2>
        <p style="margin-top: 8px; color: #475569; line-height: 1.5;">
          Pilih jenjang pendidikan pada menu di bawah untuk mulai mengerjakan bank soal dan latihan ujian.
        </p>
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
        <div class="list-item" onclick="alert('Pengaturan Aplikasi')">
          <span>⚙️ Pengaturan Aplikasi</span> <span>›</span>
        </div>
        <div class="list-item" onclick="alert('Tentang RIM Edu AI')">
          <span>ℹ️ Tentang & Bantuan</span> <span>›</span>
        </div>
      </div>
    `;
  }
}

// Menampilkan Daftar Kelas sesuai Jenjang
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

// Menampilkan Semua Mapel pada Kelas yang Dipilih
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

// Menghubungkan ke Kuis / Bank Soal
function mulaiKuis(jenjang, kelas, mapel) {
  headerTitle.innerText = `${mapel} (${kelas})`;
  contentArea.innerHTML = `
    <button class="back-btn" onclick="tampilkanMapel('${jenjang}', '${kelas}')">← Ganti Mapel</button>
    <div style="background: white; padding: 20px; border-radius: 10px;">
      <h3>Latihan Soal: ${mapel}</h3>
      <p style="margin: 10px 0; color: #64748b;">Jenjang: ${jenjang.toUpperCase()} | ${kelas}</p>
      <hr style="margin: 15px 0; border: 0; border-top: 1px solid #e2e8f0;">
      <p><em>Area soal kuis dan timer Anda akan dimuat di sini.</em></p>
    </div>
  `;
}

// Muat halaman Home saat pertama kali dibuka
bukaMenu('home');
