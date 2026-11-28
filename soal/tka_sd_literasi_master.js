// File: soal/tka_sd_literasi_master.js
// Master Bank Soal TKA SD - Literasi (10 Sesi x 20 Soal = 200 Soal)
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi1"] = [
    ...L("TEKS 1 - Kebun Sayur Sekolah",
      "Setiap hari Jumat pagi, siswa kelas lima merawat kebun sayur di belakang sekolah. Rina bertugas menyiram tanaman kangkung dan bayam menggunakan gembor. Budi mencabuti rumput liar yang tumbuh di sekitar bedengan agar tanaman sayur tumbuh subur. Dua minggu kemudian, hasil panen sayur dimasak bersama di kantin sekolah.",
      [
        ["Kapan siswa kelas lima merawat kebun sayur sekolah?", ["Setiap Senin pagi", "Setiap Jumat pagi", "Setiap Sabtu sore", "Setiap Minggu pagi"], 1, "Kalimat pertama menyebutkan 'Setiap hari Jumat pagi'."],
        ["Tugas Budi saat merawat kebun sayur adalah ...", ["Menyiram tanaman bayam", "Mencabuti rumput liar di sekitar bedengan", "Memasak sayur di kantin", "Menjual sayur ke pasar"], 1, "Kalimat ketiga menyebutkan Budi mencabuti rumput liar."],
        ["Mengapa rumput liar di sekitar bedengan harus dicabuti?", ["Agar halaman terlihat luas", "Agar tanaman sayur dapat tumbuh subur", "Agar gembor tidak rusak", "Agar kantin sekolah ramai"], 1, "Dijelaskan 'agar tanaman sayur tumbuh subur'."],
        ["Alat yang digunakan Rina untuk menyiram tanaman adalah ...", ["Ember", "Gembor", "Selang", "Gayung"], 1, "Kalimat kedua menyebut Rina menyiram menggunakan gembor."],
        ["Pesan baik yang dapat dicontoh dari bacaan tersebut adalah ...", ["Bermalas-malasan saat jam istirahat", "Bekerja sama merawat lingkungan sekolah", "Membiarkan rumput tumbuh tinggi", "Membeli makanan siap saji setiap hari"], 1, "Rina dan Budi bekerja sama merawat kebun hingga panen bersama."]
      ]
    ),
    ...L("TEKS 2 - Semut dan Belalang",
      "Pada musim kemarau yang cerah, kawanan semut rajin mengumpulkan butiran biji-bijian ke dalam sarangnya. Seekor belalang yang sedang bernyanyi di atas dahan menertawakan mereka karena bekerja terlalu keras. Ketika musim hujan tiba dan makanan sulit dicari, belalang kelaparan dan meminta bantuan. Kawanan semut pun dengan ramah membagikan sebagian persediaan makanan mereka.",
      [
        ["Apa yang dilakukan kawanan semut saat musim kemarau?", ["Bernyanyi di atas dahan", "Mengumpulkan biji-bijian ke dalam sarang", "Tidur sepanjang hari", "Bermain di tepi sungai"], 1, "Kalimat pertama menjelaskan semut rajin mengumpulkan butiran biji-bijian."],
        ["Mengapa belalang kelaparan saat musim hujan tiba?", ["Karena sarangnya hanyut terbawa banjir", "Karena ia tidak menyimpan persediaan makanan saat kemarau", "Karena biji-bijian dimakan burung", "Karena ia sakit tenggorokan"], 1, "Saat kemarau belalang hanya bernyanyi dan tidak mengumpulkan makanan."],
        ["Bagaimana sikap kawanan semut ketika belalang meminta bantuan?", ["Mengusir belalang dari sarang", "Menertawakan balik belalang", "Dengan ramah membagikan sebagian makanan mereka", "Bersembunyi di dalam tanah"], 2, "Kalimat terakhir menyebutkan semut dengan ramah membagikan sebagian persediaan makanan."],
        ["Sifat terpuji yang dimiliki kawanan semut dalam cerita adalah ...", ["Sombong dan pelit", "Rajin bekerja dan suka menolong", "Pemalas dan pemarah", "Penakut dan ceroboh"], 1, "Semut rajin mengumpulkan makanan dan mau menolong belalang yang kelaparan."],
        ["Amanat utama dari fabel tersebut adalah ...", ["Kita tidak perlu bekerja keras selagi masih muda", "Persiapan yang rajin di waktu lapang akan menolong kita di masa sulit", "Menertawakan teman yang bekerja adalah hal biasa", "Musim hujan selalu membawa bencana"], 1, "Kebiasaan rajin menabung/menyiapkan bekal sangat berguna saat menghadapi kesulitan."]
      ]
    ),
    ...L("TEKS 3 - Manfaat Sarapan Pagi",
      "Sarapan pagi memberi energi bagi tubuh dan otak sebelum mulai belajar di sekolah. Anak yang rutin sarapan bergizi seperti nasi, telur, dan sayur lebih mudah berkonsentrasi di kelas. Sebaliknya, melewatkan sarapan membuat tubuh cepat lemas dan mengantuk.",
      [
        ["Manfaat utama sarapan pagi menurut bacaan adalah ...", ["Membuat cepat mengantuk", "Memberi energi bagi tubuh dan otak untuk belajar", "Mengganti waktu tidur malam", "Membuat perut terasa sakit"], 1, "Kalimat pertama menjelaskan sarapan memberi energi bagi tubuh dan otak."],
        ["Contoh menu sarapan bergizi dalam teks adalah ...", ["Permen dan minuman bersoda", "Nasi, telur, dan sayur", "Kerupuk dan es krim", "Gorengan dan teh manis"], 1, "Kalimat kedua menyebut nasi, telur, dan sayur."],
        ["Akibat jika anak sering melewatkan sarapan adalah ...", ["Semakin semangat berlari", "Tubuh cepat lemas dan mengantuk", "Nilai ujian langsung sempurna", "Tidak perlu makan siang"], 1, "Kalimat ketiga menyebutkan tubuh cepat lemas dan mengantuk."],
        ["Siapa yang lebih mudah berkonsentrasi di kelas?", ["Anak yang tidur larut malam", "Anak yang rutin sarapan bergizi", "Anak yang jajan sembarangan", "Anak yang jarang minum air"], 1, "Anak yang rutin sarapan bergizi lebih mudah berkonsentrasi."],
        ["Simpulan teks tersebut adalah ...", ["Sarapan pagi tidak penting bagi siswa", "Membiasakan sarapan bergizi membantu siswa fokus belajar di sekolah", "Makan siang lebih penting dari sarapan", "Semua makanan mengandung gizi seimbang"], 1, "Sarapan bergizi menunjang energi dan konsentrasi belajar."]
      ]
    ),
    ...L("TEKS 4 - Daur Hidup Kupu-Kupu",
      "Kupu-kupu mengalami metamorfosis sempurna melalui empat tahap. Telur kupu-kupu menetas menjadi ulat (larva) yang gemar memakan dedaunan. Setelah cukup besar, ulat berubah menjadi kepompong (pupa) sebelum akhirnya keluar sebagai kupu-kupu dewasa bersayap indah.",
      [
        ["Berapa tahap yang dilalui kupu-kupu dalam metamorfosis sempurna?", ["Dua tahap", "Tiga tahap", "Empat tahap", "Lima tahap"], 2, "Kalimat pertama menyebut empat tahap (telur, ulat, kepompong, kupu-kupu)."],
        ["Makanan utama ulat setelah menetas dari telur adalah ...", ["Nektar bunga", "Dedaunan", "Biji-bijian", "Buah busuk"], 1, "Kalimat kedua menyebut ulat gemar memakan dedaunan."],
        ["Nama tahap sebelum ulat berubah menjadi kupu-kupu dewasa adalah ...", ["Telur", "Kepompong (pupa)", "Berudu", "Nimfa"], 1, "Kalimat ketiga menyebut kepompong (pupa)."],
        ["Kata 'metamorfosis' dalam teks berarti ...", ["Cara kupu-kupu terbang", "Perubahan bentuk tubuh hewan selama pertumbuhannya", "Tempat tinggal serangga", "Warna sayap kupu-kupu"], 1, "Metamorfosis adalah tahap perubahan bentuk selama siklus hidup."],
        ["Urutan daur hidup kupu-kupu yang benar adalah ...", ["Telur - kepompong - ulat - kupu-kupu", "Telur - ulat - kepompong - kupu-kupu", "Ulat - telur - kupu-kupu - kepompong", "Kepompong - ulat - telur - kupu-kupu"], 1, "Urutannya: telur → ulat → kepompong → kupu-kupu dewasa."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi2"] = [
    ...L("TEKS 1 - Rajin Membaca di Perpustakaan",
      "Perpustakaan sekolah menyediakan berbagai buku cerita, ensiklopedia, dan majalah anak. Setiap jam istirahat, Dito gemar membaca buku tentang antariksa. Kebiasaan membaca membuat wawasan Dito semakin luas dan kosakatanya bertambah.",
      [
        ["Kapan Dito gemar membaca di perpustakaan?", ["Saat pulang sekolah", "Setiap jam istirahat", "Saat upacara bendera", "Setiap hari Minggu"], 1, "Kalimat kedua menyebut 'Setiap jam istirahat'."],
        ["Jenis buku yang sering dibaca Dito adalah ...", ["Buku resep masakan", "Buku tentang antariksa", "Buku komik olahraga", "Buku pelajaran matematika"], 1, "Dito gemar membaca buku tentang antariksa."],
        ["Manfaat kebiasaan membaca bagi Dito adalah ...", ["Membuatnya cepat mengantuk", "Wawasannya semakin luas dan kosakatanya bertambah", "Waktu bermainnya menjadi hilang", "Buku di perpustakaan cepat habis"], 1, "Kalimat ketiga menyebut wawasan luas dan kosakata bertambah."],
        ["Tempat Dito meminjam dan membaca buku adalah ...", ["Kantin sekolah", "Perpustakaan sekolah", "Ruang guru", "Lapangan upacara"], 1, "Kalimat pertama menyebut perpustakaan sekolah."],
        ["Simpulan teks tersebut adalah ...", ["Perpustakaan hanya untuk guru", "Membiasakan membaca buku memperkaya pengetahuan siswa", "Jam istirahat sebaiknya dipakai tidur", "Buku antariksa sulit dipahami anak"], 1, "Membaca di perpustakaan menambah wawasan dan kosakata."]
      ]
    ),
    ...L("TEKS 2 - Menghemat Energi Listrik di Rumah",
      "Energi listrik harus digunakan secara bijak agar biaya bulanan tidak membengkak dan pasokan energi tetap terjaga. Kita dapat mematikan lampu pada siang hari serta mencabut kabel televisi yang tidak ditonton. Kebiasaan sederhana ini membantu menjaga kelestarian bumi.",
      [
        ["Mengapa kita harus menggunakan listrik secara bijak?", ["Agar lampu rumah tetap terang", "Agar biaya bulanan tidak membengkak dan pasokan energi terjaga", "Agar televisi cepat rusak", "Agar siang hari menjadi gelap"], 1, "Kalimat pertama menjelaskan manfaat penghematan biaya dan pasokan energi."],
        ["Contoh cara menghemat listrik dalam teks adalah ...", ["Menyalakan AC sepanjang hari", "Mematikan lampu pada siang hari", "Menonton televisi sambil tidur", "Menyalakan semua lampu kamar"], 1, "Kalimat kedua menyebut mematikan lampu pada siang hari."],
        ["Tindakan yang perlu dilakukan pada televisi yang tidak ditonton adalah ...", ["Mengecilkan suaranya saja", "Mencabut kabelnya", "Menutup layarnya dengan kain", "Memindahkannya ke ruang tamu"], 1, "Kalimat kedua menyebut mencabut kabel televisi yang tidak ditonton."],
        ["Dampak baik kebiasaan hemat listrik bagi lingkungan adalah ...", ["Membuat udara semakin panas", "Membantu menjaga kelestarian bumi", "Menambah tumpukan sampah plastik", "Mengurangi cahaya matahari"], 1, "Kalimat ketiga menyebut menjaga kelestarian bumi."],
        ["Kata 'bijak' pada kalimat pertama berarti ...", ["boros", "pandai dan cermat", "terburu-buru", "malas"], 1, "'Digunakan secara bijak' berarti cermat dan tidak boros."]
      ]
    ),
    ...L("TEKS 3 - Kancil dan Siput yang Cerdik",
      "Kancil yang sombong menantang Siput berlomba lari di tepi sungai. Sebelum lomba dimulai, Siput mengatur strategi dengan meminta teman-temannya berbaris di sepanjang jalur sungai. Setiap kali Kancil memanggil, siput di depannya selalu menjawab sehingga Kancil kelelahan dan mengakui kekalahannya.",
      [
        ["Siapa yang menantang Siput berlomba lari?", ["Kelinci", "Kancil", "Kura-kura", "Rusa"], 1, "Kalimat pertama menyebut Kancil menantang Siput."],
        ["Di mana perlombaan lari itu berlangsung?", ["Di tengah hutan lebat", "Di tepi sungai", "Di atas bukit batu", "Di padang rumput"], 1, "Kalimat pertama menyebut di tepi sungai."],
        ["Bagaimana cara Siput memenangkan perlombaan?", ["Berlari lebih cepat dari Kancil", "Meminta teman-temannya berbaris di sepanjang jalur sungai", "Menaiki punggung burung bangau", "Menyembunyikan sepatu Kancil"], 1, "Kalimat kedua menjelaskan strategi Siput berbaris bersama teman-temannya."],
        ["Sifat Kancil pada awal cerita adalah ...", ["Rendah hati", "Sombong", "Pemalu", "Sabar"], 1, "Kalimat pertama menyebut 'Kancil yang sombong'."],
        ["Pelajaran yang dapat diambil dari cerita tersebut adalah ...", ["Kita boleh meremehkan teman yang lemah", "Kerja sama dan kecerdikan dapat mengalahkan kesombongan", "Berlari cepat selalu menjamin kemenangan", "Siput adalah hewan tercepat di hutan"], 1, "Kerja sama tim Siput berhasil mengalahkan Kancil yang sombong."]
      ]
    ),
    ...L("TEKS 4 - Pentingnya Mencuci Tangan Pakai Sabun",
      "Tangan kita sering menyentuh berbagai benda yang mengandung kuman penyakit tanpa disadari. Mencuci tangan memakai sabun dan air mengalir selama dua puluh detik efektif membunuh kuman penyebab diare dan flu. Biasakan mencuci tangan sebelum makan dan setelah bermain di luar rumah.",
      [
        ["Mengapa tangan kita perlu sering dicuci?", ["Agar tangan terasa dingin", "Karena tangan sering menyentuh benda yang mengandung kuman", "Agar kuku cepat panjang", "Karena air mengalir sangat melimpah"], 1, "Kalimat pertama menjelaskan tangan menyentuh benda berkuman."],
        ["Berapa lama waktu yang dianjurkan untuk mencuci tangan pakai sabun?", ["Lima detik", "Sepuluh detik", "Dua puluh detik", "Satu menit penuh"], 2, "Kalimat kedua menyebut 'selama dua puluh detik'."],
        ["Penyakit yang dapat dicegah dengan rajin mencuci tangan menurut teks adalah ...", ["Sakit gigi dan rabun jauh", "Diare dan flu", "Patah tulang dan luka bakar", "Alergi debu dan asma"], 1, "Kalimat kedua menyebut kuman penyebab diare dan flu."],
        ["Kapan waktu yang tepat untuk membiasakan cuci tangan sesuai bacaan?", ["Hanya saat tangan terlihat kotor", "Sebelum makan dan setelah bermain di luar rumah", "Hanya sebelum tidur malam", "Setelah selesai makan saja"], 1, "Kalimat ketiga menyebut sebelum makan dan setelah bermain di luar rumah."],
        ["Bahan yang digunakan bersama air mengalir untuk membunuh kuman adalah ...", ["Pasir halus", "Sabun", "Minyak goreng", "Tepung terigu"], 1, "Kalimat kedua menyebut 'memakai sabun dan air mengalir'."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi3"] = [
    ...L("TEKS 1 - Kerja Bakti Membersihkan Selokan",
      "Warga Desa Sukamaju mengadakan kerja bakti membersihkan selokan pada hari Minggu pagi. Bapak-bapak mengeruk lumpur dan sampah plastik yang menyumbat aliran air, sedangkan ibu-ibu menyiapkan minuman hangat dan kue. Selokan pun kembali bersih sehingga lingkungan terhindar dari banjir saat hujan deras.",
      [
        ["Kapan warga Desa Sukamaju mengadakan kerja bakti?", ["Sabtu sore", "Minggu pagi", "Senin pagi", "Jumat siang"], 1, "Kalimat pertama menyebut 'pada hari Minggu pagi'."],
        ["Apa yang dilakukan bapak-bapak saat kerja bakti?", ["Menyiapkan kue dan teh", "Mengeruk lumpur dan sampah plastik di selokan", "Menanam bunga di taman", "Mengecat pagar balai desa"], 1, "Kalimat kedua menjelaskan bapak-bapak mengeruk lumpur dan sampah plastik."],
        ["Manfaat membersihkan selokan menurut bacaan adalah ...", ["Air sungai menjadi asin", "Lingkungan terhindar dari banjir saat hujan deras", "Ikan di selokan bertambah banyak", "Jalan desa menjadi lebih lebar"], 1, "Kalimat ketiga menyebut terhindar dari banjir saat hujan deras."],
        ["Peran ibu-ibu dalam kegiatan kerja bakti tersebut adalah ...", ["Mengangkat karung sampah", "Menyiapkan minuman hangat dan kue", "Memotong dahan pohon", "Membersihkan lapangan bola"], 1, "Kalimat kedua menyebut ibu-ibu menyiapkan minuman hangat dan kue."],
        ["Nilai kebersamaan yang terlihat pada teks tersebut adalah ...", ["Persaingan antarwarga", "Gotong royong menjaga kebersihan lingkungan", "Sikap acuh tak acuh terhadap banjir", "Bekerja sendiri tanpa bantuan orang lain"], 1, "Seluruh warga berbagi tugas bergotong royong membersihkan desa."]
      ]
    ),
    ...L("TEKS 2 - Manfaat Menanam Pohon di Halaman",
      "Menanam pohon di sekitar rumah memberikan banyak manfaat bagi kehidupan kita. Daun-daun pohon yang rimbun menghasilkan gas oksigen yang segar dan menyerap gas karbon dioksida. Selain itu, akar pohon membantu menahan air hujan di dalam tanah sehingga mencegah kekeringan pada musim kemarau.",
      [
        ["Gas bermanfaat yang dihasilkan oleh daun pohon adalah ...", ["Karbon monoksida", "Oksigen", "Nitrogen", "Uap bensin"], 1, "Kalimat kedua menyebut daun pohon menghasilkan gas oksigen."],
        ["Apa fungsi akar pohon menurut bacaan tersebut?", ["Menghasilkan buah manis", "Menahan air hujan di dalam tanah agar tidak kekeringan saat kemarau", "Menyerap cahaya matahari", "Mengusir serangga pengganggu"], 1, "Kalimat ketiga menyebut akar pohon menahan air hujan di dalam tanah."],
        ["Gas yang diserap oleh pohon dari udara adalah ...", ["Oksigen", "Karbon dioksida", "Helium", "Uap air"], 1, "Kalimat kedua menyebut menyerap gas karbon dioksida."],
        ["Dampak positif menanam pohon saat musim kemarau tiba adalah ...", ["Rumah menjadi sangat gelap", "Mencegah terjadinya kekeringan karena cadangan air tanah terjaga", "Daun gugur memenuhi jalan", "Tanah menjadi retak dan tandus"], 1, "Akar menahan air hujan sehingga mencegah kekeringan pada musim kemarau."],
        ["Simpulan teks tersebut adalah ...", ["Pohon hanya cocok ditanam di hutan", "Menanam pohon menjaga kesegaran udara sekaligus ketersediaan air tanah", "Akar pohon merusak halaman rumah", "Musim kemarau tidak membutuhkan air"], 1, "Pohon memberi manfaat udara bersih (oksigen) dan cadangan air tanah."]
      ]
    ),
    ...L("TEKS 3 - Kejujuran Andi di Kantin Sekolah",
      "Saat membeli roti di kantin sekolah, Andi menerima uang kembalian yang lebih banyak daripada seharusnya. Andi segera menghitung ulang uang tersebut dan mengembalikan kelebihannya kepada ibu penjaga kantin. Ibu kantin tersenyum bangga dan memuji kejujuran Andi.",
      [
        ["Di mana peristiwa dalam cerita tersebut terjadi?", ["Di toko buku", "Di kantin sekolah", "Di pasar tradisional", "Di ruang kelas"], 1, "Kalimat pertama menyebut 'di kantin sekolah'."],
        ["Apa yang dilakukan Andi saat mengetahui uang kembaliannya berlebih?", ["Menyimpannya di dalam saku", "Mengembalikan kelebihan uang kepada ibu penjaga kantin", "Membelikannya permen untuk teman", "Pura-pura tidak tahu"], 1, "Kalimat kedua menyebut Andi mengembalikan kelebihannya."],
        ["Bagaimana reaksi ibu penjaga kantin terhadap sikap Andi?", ["Marah karena salah menghitung", "Tersenyum bangga dan memuji kejujuran Andi", "Menegur Andi di depan siswa lain", "Menolak menerima uang tersebut"], 1, "Kalimat ketiga menyebut ibu kantin tersenyum bangga dan memuji."],
        ["Sifat terpuji yang ditunjukkan Andi dalam bacaan adalah ...", ["Pemalu", "Jujur", "Boros", "Ceroboh"], 1, "Mengembalikan hak orang lain menunjukkan sikap jujur."],
        ["Pelajaran yang dapat kita petik dari cerita Andi adalah ...", ["Kita harus selalu jujur meskipun tidak ada yang melihat", "Uang kembalian berlebih boleh diambil", "Menghitung uang tidak diperlukan saat jajan", "Kejujuran membuat kita rugi"], 1, "Kejujuran mendatangkan kepercayaan dan kebanggaan."]
      ]
    ),
    ...L("TEKS 4 - Mengenal Bagian-Bagian Tumbuhan",
      "Setiap bagian tumbuhan memiliki tugas penting untuk mempertahankan hidupnya. Akar bertugas menyerap air dan zat hara dari dalam tanah, sedangkan batang menyalurkannya ke seluruh bagian tumbuhan. Sementara itu, daun berperan sebagai tempat memasak makanan melalui proses fotosintesis.",
      [
        ["Bagian tumbuhan yang bertugas menyerap air dari dalam tanah adalah ...", ["Daun", "Akar", "Bunga", "Biji"], 1, "Kalimat kedua menyebut akar bertugas menyerap air dan zat hara."],
        ["Fungsi batang pada tumbuhan menurut bacaan adalah ...", ["Tempat menyimpan biji", "Menyalurkan air dan zat hara ke seluruh bagian tumbuhan", "Menyerap sinar bulan", "Menarik perhatian kupu-kupu"], 1, "Kalimat kedua menyebut batang menyalurkannya ke seluruh bagian tumbuhan."],
        ["Proses memasak makanan pada daun tumbuhan disebut ...", ["Respirasi", "Fotosintesis", "Penguapan", "Penyerbukan"], 1, "Kalimat ketiga menyebut proses fotosintesis."],
        ["Di bagian manakah proses fotosintesis berlangsung?", ["Akar", "Daun", "Kulit kayu", "Ujung ranting"], 1, "Kalimat ketiga menyebut daun berperan sebagai tempat memasak makanan."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Cara menanam bunga di pot", "Fungsi bagian-bagian utama pada tumbuhan", "Jenis-jenis tumbuhan obat", "Proses gugurnya daun di musim kemarau"], 1, "Teks menjelaskan tugas akar, batang, dan daun."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi4"] = [
    ...L("TEKS 1 - Menabung di Celengan Bambu",
      "Ayah membuatkan sebuah celengan dari ruas bambu untuk Siti. Setiap hari, Siti menyisihkan sebagian uang jajannya untuk dimasukkan ke dalam celengan tersebut. Setelah enam bulan penuh, tabungan Siti cukup untuk membeli tas sekolah baru tanpa merepotkan orang tua.",
      [
        ["Terbuat dari apakah celengan milik Siti?", ["Plastik warna-warni", "Ruas bambu", "Kaleng susu", "Tanah liat"], 1, "Kalimat pertama menyebut 'celengan dari ruas bambu'."],
        ["Dari mana uang yang ditabung Siti berasal?", ["Hadiah lomba menggambar", "Sebagian uang jajannya yang disisihkan setiap hari", "Pinjaman dari teman sekelas", "Upah membantu tetangga"], 1, "Kalimat kedua menyebut menyisihkan sebagian uang jajannya."],
        ["Berapa lama Siti menabung hingga celengannya penuh?", ["Dua bulan", "Empat bulan", "Enam bulan", "Satu tahun"], 2, "Kalimat ketiga menyebut 'Setelah enam bulan penuh'."],
        ["Apa yang dibeli Siti dari hasil tabungannya?", ["Sepeda baru", "Tas sekolah baru", "Sepatu olahraga", "Buku cerita bergambar"], 1, "Kalimat ketiga menyebut membeli tas sekolah baru."],
        ["Sikap baik Siti yang patut ditiru adalah ...", ["Boros membelanjakan uang", "Hemat dan rajin menabung", "Suka meminta-minta", "Malas pergi ke sekolah"], 1, "Menyisihkan uang jajan menunjukkan sikap hemat dan rajin menabung."]
      ]
    ),
    ...L("TEKS 2 - Rambu Lalu Lintas di Jalan Raya",
      "Rambu lalu lintas dipasang di tepi jalan untuk menjaga keselamatan semua pengguna jalan. Lampu merah berarti kendaraan wajib berhenti, lampu kuning tanda bersiap-siap, dan lampu hijau tanda boleh melaju. Pejalan kaki juga harus menyeberang melalui zebra cross atau jembatan penyeberangan.",
      [
        ["Apa tujuan utama pemasangan rambu lalu lintas menurut teks?", ["Menghias pemandangan kota", "Menjaga keselamatan semua pengguna jalan", "Memperlambat perjalanan mobil", "Menambah pendapatan negara"], 1, "Kalimat pertama menyebut menjaga keselamatan semua pengguna jalan."],
        ["Arti lampu lalu lintas berwarna merah bagi pengendara adalah ...", ["Melaju dengan cepat", "Wajib berhenti", "Belok ke kiri langsung", "Membunyikan klakson"], 1, "Kalimat kedua menyebut lampu merah berarti wajib berhenti."],
        ["Tempat yang aman bagi pejalan kaki untuk menyeberang jalan adalah ...", ["Di tengah tikungan tajam", "Melalui zebra cross atau jembatan penyeberangan", "Di belakang bus berhenti", "Di jalur khusus sepeda"], 1, "Kalimat ketiga menyebut zebra cross atau jembatan penyeberangan."],
        ["Tanda lampu lalu lintas yang berarti bersiap-siap adalah warna ...", ["Merah", "Kuning", "Hijau", "Biru"], 1, "Kalimat kedua menyebut lampu kuning tanda bersiap-siap."],
        ["Simpulan teks tersebut adalah ...", ["Rambu lalu lintas hanya berlaku untuk mobil", "Mematuhi aturan lalu lintas melindungi pengendara maupun pejalan kaki", "Pejalan kaki bebas menyeberang di mana saja", "Lampu hijau berarti kendaraan harus berhenti"], 1, "Kepatuhan pada rambu menjamin keselamatan bersama."]
      ]
    ),
    ...L("TEKS 3 - Elang dan Gagak yang Meniru",
      "Seekor gagak melihat burung elang menyambar seekor anak domba dengan gagahnya. Karena ingin dipuji, gagak itu mencoba meniru elang dengan menyambar domba jantan yang besar. Namun, cakar gagak tersangkut di bulu domba yang tebal hingga ia tertangkap oleh penggembala.",
      [
        ["Hewan apa yang ingin ditiru oleh burung gagak dalam cerita tersebut?", ["Burung hantu", "Burung elang", "Burung bangau", "Burung merpati"], 1, "Kalimat pertama menyebut gagak melihat burung elang."],
        ["Mengapa gagak gagal mengangkat domba jantan?", ["Karena domba itu berlari sangat kencang", "Karena tubuh domba terlalu besar dan cakar gagak tersangkut di bulunya", "Karena elang datang mengusir gagak", "Karena hujan turun dengan lebat"], 1, "Kalimat ketiga menyebut cakar gagak tersangkut di bulu domba yang tebal."],
        ["Siapa yang akhirnya menangkap gagak tersebut?", ["Pemburu rusa", "Penggembala domba", "Petani jagung", "Penjaga hutan"], 1, "Kalimat ketiga menyebut ia tertangkap oleh penggembala."],
        ["Sifat gagak yang menyebabkan dirinya celaka adalah ...", ["Rendah hati dan sabar", "Tinggi hati dan memaksakan diri di luar kemampuan", "Rajin berlatih terbang", "Suka berbagi makanan"], 1, "Gagak meniru kemampuan elang tanpa mengukur kekuatan dirinya sendiri."],
        ["Amanat cerita tersebut adalah ...", ["Kita harus selalu meniru semua perbuatan orang lain", "Kenalilah kemampuan diri sendiri dan jangan bertindak gegabah demi pujian", "Domba adalah hewan yang berbahaya bagi burung", "Elang tidak pandai berburu"], 1, "Mengukur kemampuan diri mencegah tindakan ceroboh."]
      ]
    ),
    ...L("TEKS 4 - Proses Terjadinya Hujan",
      "Air laut, sungai, dan danau menguap ke langit karena terkena panas sinar matahari. Uap air tersebut berkumpul di udara dingin dan berubah menjadi titik-titik air membentuk awan. Ketika awan semakin berat dan tidak mampu lagi menahan air, turunlah titik-titik air ke bumi sebagai hujan.",
      [
        ["Apa yang menyebabkan air laut dan sungai menguap ke langit?", ["Tiupan angin malam", "Panas sinar matahari", "Gerakan ombak pantai", "Cahaya bulan purnama"], 1, "Kalimat pertama menyebut terkena panas sinar matahari."],
        ["Perubahan uap air ketika berada di udara dingin adalah membentuk ...", ["Batu bara", "Awan", "Pelangi", "Kabut asap"], 1, "Kalimat kedua menyebut titik-titik air membentuk awan."],
        ["Kapan titik-titik air di awan turun ke bumi sebagai hujan?", ["Saat matahari bersinar terik", "Ketika awan semakin berat dan tidak mampu lagi menahan air", "Saat laut sedang surut", "Ketika tidak ada angin bertiup"], 1, "Kalimat ketiga menjelaskan awan semakin berat dan tidak mampu menahan air."],
        ["Sumber air di bumi yang mengalami penguapan dalam teks meliputi ...", ["Sumur dan kolam ikan", "Laut, sungai, dan danau", "Air hujan dan embun", "Salju dan mata air"], 1, "Kalimat pertama menyebut air laut, sungai, dan danau."],
        ["Gagasan pokok bacaan tersebut adalah ...", ["Manfaat air hujan bagi petani", "Tahapan alami proses terjadinya hujan", "Cara menampung air bersih di rumah", "Penyebab banjir di perkotaan"], 1, "Teks menjelaskan urutan penguapan, pembentukan awan, hingga turunnya hujan."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi5"] = [
    ...L("TEKS 1 - Memilah Sampah Organik dan Anorganik",
      "Di halaman sekolah tersedia dua tempat sampah berwarna hijau dan kuning. Tempat sampah hijau khusus menampung sampah organik seperti sisa daun dan kulit buah yang mudah membusuk menjadi kompos. Sementara itu, tempat sampah kuning menampung sampah anorganik seperti botol plastik dan kaleng agar mudah didaur ulang.",
      [
        ["Apa kegunaan tempat sampah berwarna hijau menurut teks?", ["Menampung botol plastik dan kaleng", "Menampung sampah organik yang mudah membusuk menjadi kompos", "Menyimpan alat kebersihan kelas", "Menampung pecahan kaca dan besi"], 1, "Kalimat kedua menyebut tempat sampah hijau menampung sampah organik seperti sisa daun dan kulit buah."],
        ["Contoh sampah anorganik yang disebutkan dalam bacaan adalah ...", ["Sisa nasi dan kulit pisang", "Botol plastik dan kaleng", "Ranting pohon dan daun kering", "Kertas tisu dan serbuk kayu"], 1, "Kalimat ketiga menyebut botol plastik dan kaleng."],
        ["Mengapa sampah anorganik dipisahkan ke tempat sampah kuning?", ["Agar mudah dibakar di lapangan", "Agar mudah didaur ulang", "Agar cepat membusuk di tanah", "Agar tidak terkena air hujan"], 1, "Kalimat ketiga menjelaskan 'agar mudah didaur ulang'."],
        ["Sampah organik dapat diolah menjadi bahan penyubur tanaman yang disebut ...", ["Plastik", "Kompos", "Aspal", "Kaca"], 1, "Kalimat kedua menyebut 'menjadi kompos'."],
        ["Simpulan teks tersebut adalah ...", ["Semua sampah harus dibuang ke sungai", "Memilah sampah sesuai jenisnya memudahkan pengolahan kompos dan daur ulang", "Tempat sampah kuning hanya untuk sisa makanan", "Sampah plastik mudah membusuk di tanah"], 1, "Pemilahan organik dan anorganik mempermudah pengomposan dan daur ulang."]
      ]
    ),
    ...L("TEKS 2 - Lebah Madu yang Rajin",
      "Lebah madu hidup berkelompok di dalam sarang yang tersusun rapi berbentuk segi enam. Setiap pagi, lebah pekerja terbang mencari nektar bunga untuk diolah menjadi madu yang manis dan menyehatkan. Saat hinggap dari satu bunga ke bunga lain, lebah juga membantu penyerbukan tanaman buah.",
      [
        ["Bentuk susunan sarang lebah madu menurut bacaan adalah ...", ["Lingkaran", "Segi enam", "Segitiga", "Persegi panjang"], 1, "Kalimat pertama menyebut 'tersusun rapi berbentuk segi enam'."],
        ["Bahan yang dikumpulkan lebah pekerja dari bunga untuk diolah menjadi madu adalah ...", ["Air hujan", "Nektar bunga", "Serbuk kayu", "Getah pohon"], 1, "Kalimat kedua menyebut lebah mencari nektar bunga."],
        ["Manfaat lebah bagi tanaman buah ketika hinggap di bunga adalah ...", ["Memakan seluruh daun tanaman", "Membantu proses penyerbukan tanaman", "Mematahkan ranting pohon", "Mengeringkan kelopak bunga"], 1, "Kalimat ketiga menyebut lebah membantu penyerbukan tanaman buah."],
        ["Kapan lebah pekerja mulai terbang mencari nektar?", ["Tengah malam", "Setiap pagi", "Saat hujan badai", "Menjelang matahari terbenam"], 1, "Kalimat kedua menyebut 'Setiap pagi'."],
        ["Sifat lebah yang patut kita teladani dari bacaan tersebut adalah ...", ["Pemalas dan suka menyendiri", "Rajin bekerja dan memberi manfaat bagi lingkungan sekitar", "Suka merusak tanaman kebun", "Sering bertengkar dengan sesama"], 1, "Lebah bekerja rajin menghasilkan madu sekaligus membantu penyerbukan."]
      ]
    ),
    ...L("TEKS 3 - Menjaga Kesehatan Mata",
      "Mata adalah indra penglihatan yang sangat berharga sehingga harus dirawat dengan baik. Hindari membaca buku sambil tiduran atau di tempat yang redup karena membuat otot mata cepat lelah. Selain itu, batasi waktu menatap layar gawai dan perbanyak makan wortel yang kaya vitamin A.",
      [
        ["Kebiasaan membaca yang membuat otot mata cepat lelah menurut teks adalah ...", ["Membaca di meja belajar yang terang", "Membaca sambil tiduran atau di tempat redup", "Membaca buku cerita bergambar", "Membaca pada pagi hari"], 1, "Kalimat kedua menyebut membaca sambil tiduran atau di tempat redup."],
        ["Vitamin yang terkandung dalam wortel dan baik untuk kesehatan mata adalah ...", ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], 0, "Kalimat ketiga menyebut wortel kaya vitamin A."],
        ["Apa yang harus dibatasi agar mata tidak cepat rusak?", ["Minum air putih", "Waktu menatap layar gawai", "Makan sayur dan buah", "Tidur malam yang cukup"], 1, "Kalimat ketiga menyebut 'batasi waktu menatap layar gawai'."],
        ["Fungsi mata bagi tubuh kita adalah sebagai indra ...", ["Pendengaran", "Penglihatan", "Penciuman", "Peraba"], 0, "Koreksi: indra penglihatan (pilihan B)."],
        ["Pesan utama dari bacaan tersebut adalah ...", ["Menonton gawai sepanjang hari menyehatkan mata", "Menjaga cara membaca, membatasi layar, dan makan makanan bergizi penting untuk kesehatan mata", "Wortel adalah satu-satunya makanan sehat", "Membaca di tempat gelap melatih ketajaman mata"], 1, "Teks memberikan cara merawat kesehatan mata sehari-hari."]
      ]
    ),
    ...L("TEKS 4 - Alat Transportasi Tradisional Delman",
      "Delman adalah kendaraan tradisional beroda dua atau empat yang ditarik oleh tenaga kuda. Pada bagian belakang tempat duduk penumpang terdapat kusir yang mengendalikan arah jalan kuda menggunakan tali kekang. Meski kini banyak kendaraan bermotor, delman masih dilestarikan sebagai angkutan wisata yang ramah lingkungan.",
      [
        ["Tenaga penggerak kendaraan tradisional delman adalah ...", ["Mesin bensin", "Tenaga kuda", "Tenaga listrik", "Kayuhan pedal"], 1, "Kalimat pertama menyebut ditarik oleh tenaga kuda."],
        ["Sebutan bagi orang yang mengendalikan arah jalan kuda pada delman adalah ...", ["Masinis", "Kusir", "Nahkoda", "Pilot"], 1, "Kalimat kedua menyebut 'kusir yang mengendalikan arah jalan kuda'."],
        ["Alat yang digunakan kusir untuk mengendalikan kuda adalah ...", ["Setir kemudi", "Tali kekang", "Dayung kayu", "Tuas rem"], 1, "Kalimat kedua menyebut menggunakan tali kekang."],
        ["Peran delman pada masa sekarang menurut bacaan adalah ...", ["Pengangkut barang tambang", "Angkutan wisata yang ramah lingkungan", "Kendaraan balap di jalan tol", "Pengganti kereta api antarkota"], 1, "Kalimat ketiga menyebut delman dilestarikan sebagai angkutan wisata yang ramah lingkungan."],
        ["Keunggulan delman bagi lingkungan sekitar adalah ...", ["Mengeluarkan asap tebal", "Tidak menimbulkan polusi asap kendaraan bermotor", "Berjalan sangat bising", "Membutuhkan bahan bakar solar"], 1, "Delman ditarik kuda sehingga ramah lingkungan tanpa polusi asap mesin."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi6"] = [
    ...L("TEKS 1 - Pasar Terapung di Sungai Barito",
      "Di Kota Banjarmasin terdapat pasar tradisional unik yang berada di atas aliran Sungai Barito. Para pedagang menjajakan buah-buahan, sayuran, dan kue tradisional menggunakan perahu kayu kecil bernama jukung. Pasar terapung ini ramai dikunjungi warga maupun wisatawan sejak matahari terbit.",
      [
        ["Di kota manakah pasar terapung pada bacaan tersebut berada?", ["Surabaya", "Banjarmasin", "Makassar", "Palembang"], 1, "Kalimat pertama menyebut Kota Banjarmasin."],
        ["Nama perahu kayu kecil yang digunakan para pedagang adalah ...", ["Sampan karet", "Jukung", "Kapal feri", "Rakit bambu"], 1, "Kalimat kedua menyebut perahu kayu kecil bernama jukung."],
        ["Barang dagangan yang dijual di pasar terapung menurut teks adalah ...", ["Pakaian dan sepatu", "Buah-buahan, sayuran, dan kue tradisional", "Buku pelajaran dan alat tulis", "Perabot rumah tangga"], 1, "Kalimat kedua menyebut buah-buahan, sayuran, dan kue tradisional."],
        ["Kapan pasar terapung mulai ramai dikunjungi pembeli?", ["Tengah malam", "Sejak matahari terbit", "Menjelang malam hari", "Saat hujan lebat"], 1, "Kalimat ketiga menyebut 'sejak matahari terbit'."],
        ["Keunikan utama pasar dalam bacaan tersebut adalah ...", ["Berada di puncak gunung tinggi", "Kegiatan jual beli dilakukan di atas perahu di aliran sungai", "Hanya buka setahun sekali", "Pembeli tidak boleh menawar harga"], 1, "Seluruh transaksi berlangsung di atas perahu di Sungai Barito."]
      ]
    ),
    ...L("TEKS 2 - Melestarikan Permainan Tradisional Egrang",
      "Egrang adalah permainan tradisional Indonesia yang terbuat dari dua batang bambu panjang dengan pijakan kaki di bagian bawah. Bermain egrang melatih keseimbangan tubuh, keberanian, dan ketangkasan anak-anak. Permainan ini sering dilombakan untuk memeriahkan perayaan Hari Kemerdekaan setiap bulan Agustus.",
      [
        ["Bahan utama pembuatan egrang menurut teks adalah ...", ["Batang besi", "Dua batang bambu panjang", "Papan kayu jati", "Pipa plastik"], 1, "Kalimat pertama menyebut dua batang bambu panjang."],
        ["Kemampuan yang dilatih saat bermain egrang meliputi ...", ["Kecepatan mengetik komputer", "Keseimbangan tubuh, keberanian, dan ketangkasan", "Kemampuan berenang di laut", "Kekuatan mengangkat beban berat"], 1, "Kalimat kedua menyebut keseimbangan tubuh, keberanian, dan ketangkasan."],
        ["Kapan permainan egrang sering dilombakan menurut bacaan?", ["Setiap akhir tahun", "Setiap bulan Agustus saat perayaan Hari Kemerdekaan", "Setiap hari Senin pagi", "Saat liburan kenaikan kelas"], 1, "Kalimat ketiga menyebut perayaan Hari Kemerdekaan setiap bulan Agustus."],
        ["Di bagian manakah pijakan kaki pada bambu egrang dipasang?", ["Di ujung paling atas", "Di bagian bawah", "Di tengah-tengah bambu", "Di samping kiri saja"], 1, "Kalimat pertama menyebut 'dengan pijakan kaki di bagian bawah'."],
        ["Tujuan melestarikan permainan tradisional egrang adalah ...", ["Menggantikan semua olahraga modern", "Menjaga warisan budaya bangsa sekaligus menyehatkan tubuh anak", "Menghabiskan persediaan bambu di desa", "Melarang anak-anak belajar di rumah"], 1, "Egrang adalah warisan budaya yang melatih fisik dan ketangkasan."]
      ]
    ),
    ...L("TEKS 3 - Kura-Kura dan Burung Bangau",
      "Musim kemarau panjang membuat kolam tempat tinggal kura-kura mengering. Dua ekor burung bangau menawarkan bantuan untuk menerbangkan kura-kura ke danau baru menggunakan sebatang ranting yang digigit kura-kura. Namun, kura-kura lupa pesan bangau agar tidak membuka mulut saat terbang sehingga ia terjatuh ke semak-semak ketika membalas ejekan hewan lain.",
      [
        ["Mengapa kura-kura harus pindah dari kolam lamanya?", ["Karena kolamnya terlalu dalam", "Karena musim kemarau panjang membuat kolam mengering", "Karena dikejar buaya besar", "Karena air kolam menjadi asin"], 1, "Kalimat pertama menyebut musim kemarau panjang membuat kolam mengering."],
        ["Alat yang digunakan burung bangau untuk membawa kura-kura terbang adalah ...", ["Jaring tali", "Sebatang ranting", "Keranjang rotan", "Daun pisang lebar"], 1, "Kalimat kedua menyebut menggunakan sebatang ranting."],
        ["Pesan penting yang diberikan burung bangau sebelum terbang adalah ...", ["Memegang erat bulu sayap bangau", "Tidak membuka mulut selama terbang di udara", "Menutup mata sepanjang perjalanan", "Berteriak meminta jalan kepada burung lain"], 1, "Kalimat ketiga menyebut pesan bangau agar tidak membuka mulut saat terbang."],
        ["Apa penyebab kura-kura terjatuh ke semak-semak?", ["Ranting kayu patah di tengah jalan", "Kura-kura membuka mulut untuk membalas ejekan hewan lain", "Bangau kelelahan terbang tinggi", "Angin topan bertiup sangat kencang"], 1, "Saat membuka mulut membalas ejekan, gigitannya pada ranting terlepas."],
        ["Amanat cerita tersebut adalah ...", ["Kita harus membalas setiap ejekan orang lain", "Mematuhi nasihat baik dan mengendalikan ucapan dapat menghindarkan kita dari celaka", "Kura-kura lebih pandai terbang daripada bangau", "Burung bangau tidak suka menolong teman"], 1, "Ketidakpatuhan pada nasihat dan terpancing emosi merugikan diri sendiri."]
      ]
    ),
    ...L("TEKS 4 - Manfaat Air Putih bagi Tubuh",
      "Sebagian besar tubuh manusia terdiri atas cairan sehingga kita membutuhkan asupan air putih yang cukup setiap hari. Minum air putih delapan gelas sehari membantu melancarkan peredaran darah, menjaga suhu tubuh tetap stabil, serta mencegah dehidrasi. Kurang minum air putih dapat membuat tubuh cepat lelah dan sulit fokus belajar.",
      [
        ["Berapa gelas air putih yang dianjurkan diminum setiap hari menurut teks?", ["Empat gelas", "Enam gelas", "Delapan gelas", "Dua belas gelas"], 2, "Kalimat kedua menyebut 'delapan gelas sehari'."],
        ["Manfaat minum air putih bagi tubuh menurut bacaan adalah ...", ["Membuat gigi cepat berlubang", "Melancarkan peredaran darah dan menjaga suhu tubuh stabil", "Menambah rasa kantuk di siang hari", "Menggantikan makanan pokok"], 1, "Kalimat kedua menyebut melancarkan peredaran darah, menjaga suhu tubuh, dan mencegah dehidrasi."],
        ["Akibat yang timbul apabila tubuh kekurangan cairan adalah ...", ["Tubuh menjadi sangat bugar", "Tubuh cepat lelah dan sulit fokus belajar", "Nafsu makan meningkat drastis", "Suhu udara terasa dingin"], 1, "Kalimat ketiga menyebut tubuh cepat lelah dan sulit fokus belajar."],
        ["Kata 'dehidrasi' dalam bacaan bermakna kondisi tubuh yang mengalami ...", ["kelebihan gula", "kekurangan cairan", "kelelahan otot", "kenaikan berat badan"], 1, "Dehidrasi adalah keadaan saat tubuh kekurangan cairan."],
        ["Simpulan tepat dari teks tersebut adalah ...", ["Minuman manis lebih sehat daripada air putih", "Membiasakan minum air putih cukup setiap hari sangat penting bagi kesehatan dan konsentrasi", "Air putih hanya diminum setelah berolahraga", "Tubuh manusia tidak membutuhkan cairan saat musim hujan"], 1, "Kecukupan air putih menjaga fungsi tubuh dan fokus belajar."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi7"] = [
    ...L("TEKS 1 - Peternakan Sapi Perah di Pegunungan",
      "Keluarga Pak Tono memelihara lima ekor sapi perah di lereng pegunungan yang berudara sejuk. Setiap pagi sebelum berangkat sekolah, Bagas membantu ayahnya memberi rumput segar dan membersihkan kandang. Susu segar hasil perahan dijual ke koperasi desa untuk diolah menjadi minuman sehat.",
      [
        ["Di mana keluarga Pak Tono memelihara sapi perah?", ["Di tepi pantai", "Di lereng pegunungan yang berudara sejuk", "Di tengah kota besar", "Di pinggir sungai"], 1, "Kalimat pertama menyebut lereng pegunungan yang berudara sejuk."],
        ["Tugas Bagas setiap pagi sebelum berangkat sekolah adalah ...", ["Menjual susu ke pasar", "Memberi rumput segar dan membersihkan kandang", "Memasak sarapan di dapur", "Menyiram tanaman bunga"], 1, "Kalimat kedua menyebut memberi rumput segar dan membersihkan kandang."],
        ["Ke mana susu segar hasil perahan dijual?", ["Ke warung kopi", "Ke koperasi desa", "Ke toko roti", "Ke sekolah dasar"], 1, "Kalimat ketiga menyebut dijual ke koperasi desa."],
        ["Berapa jumlah sapi perah yang dipelihara keluarga Pak Tono?", ["Tiga ekor", "Empat ekor", "Lima ekor", "Tujuh ekor"], 2, "Kalimat pertama menyebut lima ekor sapi perah."],
        ["Sikap terpuji yang ditunjukkan Bagas adalah ...", ["Bangun kesiangan setiap hari", "Rajin membantu pekerjaan orang tua sebelum sekolah", "Bermain sepanjang pagi", "Menolak membersihkan kandang"], 1, "Bagas rutin membantu ayahnya setiap pagi sebelum sekolah."]
      ]
    ),
    ...L("TEKS 2 - Mengenal Gerhana Matahari",
      "Gerhana matahari terjadi pada siang hari ketika posisi bulan berada tepat di antara bumi dan matahari dalam satu garis lurus. Akibatnya, cahaya matahari menuju bumi terhalang oleh bulan sehingga sebagian wilayah bumi menjadi gelap sejenak. Saat mengamati gerhana matahari, kita harus memakai kacamata pelindung khusus agar mata tidak rusak.",
      [
        ["Kapan peristiwa gerhana matahari terjadi?", ["Pada malam hari", "Pada siang hari", "Saat hujan turun", "Setiap akhir pekan"], 1, "Kalimat pertama menyebut terjadi pada siang hari."],
        ["Urutan posisi benda langit saat gerhana matahari adalah ...", ["Bumi - Matahari - Bulan", "Matahari - Bulan - Bumi", "Bulan - Bumi - Matahari", "Matahari - Bumi - Bulan"], 1, "Bulan berada tepat di antara bumi dan matahari."],
        ["Mengapa sebagian wilayah bumi menjadi gelap saat gerhana matahari?", ["Karena matahari padam sementara", "Karena cahaya matahari terhalang oleh bulan", "Karena awan hitam menutupi langit", "Karena bulan memancarkan bayangan biru"], 1, "Kalimat kedua menyebut cahaya matahari terhalang oleh bulan."],
        ["Alat yang wajib dipakai saat melihat gerhana matahari adalah ...", ["Teropong bintang biasa", "Kacamata pelindung khusus", "Kacamata renang", "Kaca pembesar"], 1, "Kalimat ketiga menyebut memakai kacamata pelindung khusus."],
        ["Tujuan memakai kacamata khusus saat gerhana matahari adalah ...", ["Agar bulan terlihat lebih besar", "Agar mata tidak rusak terkena sinar matahari", "Agar langit terlihat terang", "Agar tidak merasa silau saat tidur"], 1, "Dijelaskan 'agar mata tidak rusak'."]
      ]
    ),
    ...L("TEKS 3 - Merawat Buku Pelajaran",
      "Buku pelajaran adalah jendela ilmu yang membantu siswa belajar di rumah maupun di sekolah. Agar buku tidak cepat sobek dan kusut, kita sebaiknya memberi sampul plastik atau kertas cokelat yang rapi. Selain itu, gunakan pembatas buku saat berhenti membaca dan jangan melipat ujung halaman.",
      [
        ["Manfaat buku pelajaran menurut kalimat pertama adalah ...", ["Sebagai hiasan rak kamar", "Sebagai jendela ilmu yang membantu siswa belajar", "Sebagai alat menggambar dinding", "Sebagai pengganti papan tulis"], 1, "Kalimat pertama menyebut buku adalah jendela ilmu."],
        ["Cara melindungi sampul buku agar tidak cepat rusak menurut teks adalah ...", ["Menyimpannya di lantai", "Memberi sampul plastik atau kertas cokelat yang rapi", "Mencoret-coret bagian depannya", "Menjemurnya di bawah terik matahari"], 1, "Kalimat kedua menyebut memberi sampul plastik atau kertas cokelat."],
        ["Apa yang sebaiknya digunakan untuk menandai halaman terakhir yang dibaca?", ["Melipat ujung halaman", "Menggunakan pembatas buku", "Menyobek sedikit tepi kertas", "Menaruh pensil tebal di tengah buku"], 1, "Kalimat ketiga menyebut gunakan pembatas buku dan jangan melipat ujung halaman."],
        ["Akibat jika kita sering melipat ujung halaman buku adalah ...", ["Buku menjadi semakin tebal", "Halaman buku cepat kusut dan sobek", "Tulisan di buku menjadi hilang", "Buku terasa lebih ringan"], 1, "Melipat halaman membuat kertas cepat kusut dan rusak."],
        ["Pesan utama dari teks tersebut adalah ...", ["Membeli buku baru setiap bulan", "Merawat buku dengan baik agar awet dan nyaman dibaca", "Menyimpan buku di tempat lembap", "Meminjamkan buku tanpa merawatnya"], 1, "Teks mengajarkan cara merawat buku pelajaran."]
      ]
    ),
    ...L("TEKS 4 - Batik sebagai Warisan Budaya Indonesia",
      "Batik adalah kain bergambar khas Indonesia yang dibuat secara khusus dengan menuliskan malam (lilin) menggunakan alat bernama canting. Setiap daerah di Indonesia memiliki motif batik yang indah dan penuh makna, seperti batik parang dari Yogyakarta dan batik megamendung dari Cirebon. Kita patut bangga mengenakan batik sebagai wujud cinta tanah air.",
      [
        ["Alat tradisional yang digunakan untuk menuliskan malam pada kain batik adalah ...", ["Kuas cat", "Canting", "Pena bulu", "Jarum jahit"], 1, "Kalimat pertama menyebut alat bernama canting."],
        ["Bahan lilin khusus yang digunakan dalam proses membatik disebut ...", ["Malam", "Damar", "Getah", "Kapur"], 0, "Kalimat pertama menyebut 'menuliskan malam (lilin)'."],
        ["Motif batik yang berasal dari daerah Cirebon menurut teks adalah ...", ["Batik Parang", "Batik Megamendung", "Batik Kawung", "Batik Tujuh Rupa"], 1, "Kalimat kedua menyebut batik megamendung dari Cirebon."],
        ["Dari daerah manakah asal motif batik parang dalam bacaan?", ["Pekalongan", "Yogyakarta", "Solo", "Madura"], 1, "Kalimat kedua menyebut batik parang dari Yogyakarta."],
        ["Cara siswa menunjukkan rasa bangga terhadap batik sesuai bacaan adalah ...", ["Menyimpan kain batik di lemari terkunci", "Bangga mengenakan batik sebagai wujud cinta tanah air", "Hanya memakai pakaian buatan luar negeri", "Melupakan motif batik daerah sendiri"], 1, "Kalimat ketiga menyebut bangga mengenakan batik sebagai wujud cinta tanah air."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi8"] = [
    ...L("TEKS 1 - Mengenal Hewan Pemakan Tumbuhan (Herbivor)",
      "Berdasarkan jenis makanannya, hewan dikelompokkan menjadi herbivor, karnivor, dan omnivor. Hewan herbivor seperti sapi, kambing, dan kelinci hanya memakan bagian tumbuhan seperti rumput dan dedaunan. Mereka memiliki gigi geraham yang lebar untuk mengunyah makanan hingga halus.",
      [
        ["Apa yang dimakan oleh kelompok hewan herbivor?", ["Daging segar", "Bagian tumbuhan seperti rumput dan dedaunan", "Serangga kecil", "Ikan di sungai"], 1, "Kalimat kedua menyebut herbivor hanya memakan bagian tumbuhan seperti rumput dan dedaunan."],
        ["Contoh hewan herbivor yang disebutkan dalam teks adalah ...", ["Harimau, singa, dan elang", "Sapi, kambing, dan kelinci", "Ayam, bebek, dan tikus", "Buaya, ular, dan hiu"], 1, "Kalimat kedua menyebut sapi, kambing, dan kelinci."],
        ["Jenis gigi yang dimiliki hewan herbivor untuk mengunyah rumput hingga halus adalah ...", ["Gigi taring yang tajam", "Gigi geraham yang lebar", "Paruh yang bengkok", "Gigi seri yang runcing"], 1, "Kalimat ketiga menyebut gigi geraham yang lebar."],
        ["Pengelompokan hewan dalam bacaan tersebut didasarkan pada ...", ["Tempat tinggalnya", "Jenis makanannya", "Cara berkembang biaknya", "Warna bulunya"], 1, "Kalimat pertama menyebut 'Berdasarkan jenis makanannya'."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Cara merawat sapi di kandang", "Ciri dan contoh hewan herbivor pemakan tumbuhan", "Bahaya hewan buas di hutan", "Perbedaan hewan darat dan air"], 1, "Teks menjelaskan pengertian, contoh, dan ciri gigi hewan herbivor."]
      ]
    ),
    ...L("TEKS 2 - Persahabatan Melati dan Mawar di Taman",
      "Di sudut taman sekolah tumbuh bunga melati putih dan mawar merah yang saling bersahabat. Setiap pagi, kelopak melati menebarkan aroma wangi yang menyejukkan, sementara mawar memikat kupu-kupu dengan warna merah cerahnya. Keduanya membuat suasana taman sekolah tampak indah dan asri.",
      [
        ["Di mana bunga melati dan mawar tumbuh dalam bacaan?", ["Di halaman rumah", "Di sudut taman sekolah", "Di tepi jalan raya", "Di dalam pot kelas"], 1, "Kalimat pertama menyebut 'Di sudut taman sekolah'."],
        ["Keistimewaan bunga melati menurut teks adalah ...", ["Memiliki duri yang tajam", "Menebarkan aroma wangi yang menyejukkan setiap pagi", "Berukuran sangat raksasa", "Hanya mekar di malam hari"], 1, "Kalimat kedua menyebut melati menebarkan aroma wangi yang menyejukkan."],
        ["Hewan yang terpikat oleh warna merah cerah bunga mawar adalah ...", ["Semut hitam", "Kupu-kupu", "Belalang hijau", "Ulat bulu"], 1, "Kalimat kedua menyebut mawar memikat kupu-kupu."],
        ["Dampak keberadaan kedua bunga tersebut bagi taman sekolah adalah ...", ["Membuat taman menjadi panas", "Membuat suasana taman tampak indah dan asri", "Menghalangi siswa bermain bola", "Mengundang banyak nyamuk"], 1, "Kalimat ketiga menyebut suasana taman sekolah tampak indah dan asri."],
        ["Kata 'asri' pada kalimat terakhir memiliki makna ...", ["kotor dan berantakan", "indah dan sedap dipandang", "sempit dan gelap", "kering dan gersang"], 1, "'Asri' berarti indah, sejuk, dan sedap dipandang mata."]
      ]
    ),
    ...L("TEKS 3 - Manfaat Olahraga Bersepeda di Pagi Hari",
      "Bersepeda pada pagi hari merupakan kegiatan olahraga yang menyenangkan sekaligus menyehatkan. Mengayuh sepeda secara teratur dapat melatih kekuatan otot kaki dan menjaga kesehatan jantung. Agar tetap aman di jalan, pesepeda wajib memakai helm pelindung dan melaju di jalur sebelah kiri.",
      [
        ["Manfaat mengayuh sepeda secara teratur bagi tubuh menurut teks adalah ...", ["Membuat badan cepat gemuk", "Melatih kekuatan otot kaki dan menjaga kesehatan jantung", "Menambah rasa kantuk saat belajar", "Membuat mata cepat lelah"], 1, "Kalimat kedua menyebut melatih kekuatan otot kaki dan menjaga kesehatan jantung."],
        ["Perlengkapan keselamatan yang wajib dipakai pesepeda sesuai bacaan adalah ...", ["Jaket tebal", "Helm pelindung", "Kacamata hitam", "Payung lipat"], 1, "Kalimat ketiga menyebut wajib memakai helm pelindung."],
        ["Di jalur sebelah mana pesepeda harus melaju agar aman?", ["Jalur tengah jalan", "Jalur sebelah kiri", "Jalur sebelah kanan", "Trotoar pejalan kaki"], 1, "Kalimat ketiga menyebut melaju di jalur sebelah kiri."],
        ["Kapan waktu bersepeda yang disebutkan dalam bacaan?", ["Tengah malam", "Pagi hari", "Siang bolong", "Sore hari saat hujan"], 1, "Kalimat pertama menyebut bersepeda pada pagi hari."],
        ["Simpulan teks tersebut adalah ...", ["Bersepeda hanya boleh dilakukan atlet", "Bersepeda pagi menyehatkan tubuh asalkan tetap mematuhi aturan keselamatan", "Helm pelindung tidak diperlukan di jalan desa", "Olahraga pagi membuat tubuh cepat sakit"], 1, "Teks menyoroti manfaat kesehatan dan kewajiban keselamatan bersepeda."]
      ]
    ),
    ...L("TEKS 4 - Alat Musik Tradisional Angklung",
      "Angklung adalah alat musik tradisional asal Jawa Barat yang terbuat dari tabung-tabung bambu. Cara memainkan angklung cukup unik, yaitu dengan menggoyangkannya menggunakan tangan sehingga tabung bambu saling berbenturan dan menghasilkan bunyi merdu. Karena setiap angklung hanya memiliki satu nada, bermain bersama dalam kelompok melatih kekompakan.",
      [
        ["Dari provinsi manakah asal alat musik tradisional angklung?", ["Jawa Tengah", "Jawa Barat", "Bali", "Sumatra Barat"], 1, "Kalimat pertama menyebut 'asal Jawa Barat'."],
        ["Bahan utama pembuatan alat musik angklung adalah ...", ["Kayu jati", "Tabung-tabung bambu", "Logam kuningan", "Kulit kerbau"], 1, "Kalimat pertama menyebut terbuat dari tabung-tabung bambu."],
        ["Bagaimana cara memainkan angklung agar menghasilkan bunyi merdu?", ["Dipukul dengan tongkat kayu", "Digoyangkan dengan tangan hingga tabung bambu berbenturan", "Ditiup pada bagian ujungnya", "Dipetik senarnya dengan jari"], 1, "Kalimat kedua menjelaskan cara menggoyangkannya dengan tangan."],
        ["Mengapa bermain angklung dalam kelompok dapat melatih kekompakan?", ["Karena ukuran angklung sangat berat", "Karena setiap angklung hanya menghasilkan satu nada sehingga pemain harus bekerja sama membentuk lagu", "Karena dimainkan sambil berlari", "Karena hanya boleh dimainkan dua orang"], 1, "Kalimat ketiga menjelaskan setiap angklung hanya memiliki satu nada."],
        ["Gagasan utama bacaan tersebut adalah ...", ["Cara menanam bambu di kebun", "Mengenal asal, bahan, dan cara memainkan alat musik angklung", "Daftar lagu daerah Jawa Barat", "Jenis-jenis alat musik tiup modern"], 1, "Teks memperkenalkan asal daerah, bahan, cara bermain, dan nilai kebersamaan angklung."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi9"] = [
    ...L("TEKS 1 - Menghemat Air Bersih di Rumah",
      "Air bersih sangat dibutuhkan untuk minum, mandi, dan mencuci pakaian setiap hari. Kita dapat menghemat air dengan menutup keran rapat-rapat setelah selesai digunakan dan menampung air hujan untuk menyiram tanaman. Menghemat air membantu menjaga ketersediaan air bersih saat musim kemarau.",
      [
        ["Kegunaan air bersih sehari-hari menurut kalimat pertama adalah ...", ["Untuk menyiram jalan beraspal", "Untuk minum, mandi, dan mencuci pakaian", "Untuk memadamkan lampu rumah", "Untuk mengganti bahan bakar motor"], 1, "Kalimat pertama menyebut minum, mandi, dan mencuci pakaian."],
        ["Salah satu cara menghemat air yang disebutkan dalam teks adalah ...", ["Membiarkan keran terbuka saat menggosok gigi", "Menutup keran rapat-rapat setelah selesai digunakan", "Mencuci sepeda setiap satu jam sekali", "Membuang air bersih ke selokan"], 1, "Kalimat kedua menyebut menutup keran rapat-rapat."],
        ["Untuk apa air hujan yang ditampung dapat dimanfaatkan?", ["Untuk diminum langsung tanpa dimasak", "Untuk menyiram tanaman", "Untuk memasak nasi", "Untuk mencuci piring bersih"], 1, "Kalimat kedua menyebut menampung air hujan untuk menyiram tanaman."],
        ["Manfaat menghemat air saat musim kemarau tiba adalah ...", ["Air sungai meluap ke jalan", "Membantu menjaga ketersediaan air bersih", "Hujan turun setiap hari", "Tanaman menjadi layu"], 1, "Kalimat ketiga menyebut menjaga ketersediaan air bersih saat musim kemarau."],
        ["Simpulan teks tersebut adalah ...", ["Air bersih tidak akan pernah habis", "Kebiasaan hemat air di rumah menjaga cadangan air bersih bagi kehidupan", "Menyiram tanaman harus memakai air mineral", "Musim kemarau tidak membutuhkan air bersih"], 1, "Menghemat air menjaga ketersediaan air di masa kemarau."]
      ]
    ),
    ...L("TEKS 2 - Burung Merpati Pos yang Setia",
      "Pada zaman dahulu sebelum ada telepon genggam, burung merpati sering dilatih untuk mengantarkan surat jarak jauh. Merpati memiliki daya ingat arah yang sangat tajam sehingga selalu mampu menemukan jalan pulang ke kandangnya. Surat kecil diikatkan pada kaki merpati sebelum ia dilepaskan terbang.",
      [
        ["Apa tugas burung merpati terlatih pada zaman dahulu?", ["Menjaga kebun jagung petani", "Mengantarkan surat jarak jauh", "Mencari ikan di sungai", "Menghibur warga di pasar"], 1, "Kalimat pertama menyebut mengantarkan surat jarak jauh."],
        ["Kemampuan istimewa merpati sehingga tidak tersesat saat terbang adalah ...", ["Memiliki sayap berwarna emas", "Memiliki daya ingat arah yang sangat tajam untuk pulang ke kandang", "Dapat berbicara dengan manusia", "Terbang lebih tinggi dari pesawat"], 1, "Kalimat kedua menyebut daya ingat arah yang sangat tajam."],
        ["Di bagian tubuh manakah surat kecil diikatkan sebelum merpati terbang?", ["Di paruhnya", "Di kaki merpati", "Di ujung ekornya", "Di lehernya"], 1, "Kalimat ketiga menyebut surat kecil diikatkan pada kaki merpati."],
        ["Mengapa merpati digunakan sebagai pengantar pesan pada zaman dahulu?", ["Karena harga kertas sangat mahal", "Karena belum ada telepon genggam", "Karena merpati tidak perlu makan", "Karena jalan raya belum dibangun"], 1, "Kalimat pertama menyebut 'sebelum ada telepon genggam'."],
        ["Gagasan utama bacaan tersebut adalah ...", ["Cara membuat kandang burung merpati", "Peran burung merpati pos sebagai pengantar surat di masa lampau", "Jenis-jenis makanan kesukaan merpati", "Sejarah penemuan telepon genggam"], 1, "Teks menceritakan pemanfaatan kemampuan navigasi merpati untuk mengirim surat."]
      ]
    ),
    ...L("TEKS 3 - Pentingnya Tidur Cukup bagi Anak",
      "Tidur yang cukup pada malam hari membuat tubuh kembali segar dan bersemangat keesokan paginya. Anak usia sekolah dasar dianjurkan tidur selama delapan hingga sembilan jam setiap malam. Hindari bermain gawai hingga larut malam agar tidak kesiangan berangkat ke sekolah.",
      [
        ["Berapa lama waktu tidur malam yang dianjurkan bagi anak usia SD?", ["Empat hingga lima jam", "Enam hingga tujuh jam", "Delapan hingga sembilan jam", "Sepuluh hingga dua belas jam"], 2, "Kalimat kedua menyebut delapan hingga sembilan jam setiap malam."],
        ["Manfaat tidur cukup pada malam hari menurut teks adalah ...", ["Membuat perut terasa kenyang", "Membuat tubuh kembali segar dan bersemangat keesokan paginya", "Membuat mata cepat lelah", "Mengganti waktu sarapan pagi"], 1, "Kalimat pertama menyebut tubuh kembali segar dan bersemangat."],
        ["Kebiasaan yang harus dihindari agar tidak bangun kesiangan adalah ...", ["Membaca buku pelajaran sore hari", "Bermain gawai hingga larut malam", "Menyiapkan tas sebelum tidur", "Minum segelas air putih"], 1, "Kalimat ketiga menyebut hindari bermain gawai hingga larut malam."],
        ["Akibat jika anak sering tidur larut malam adalah ...", ["Selalu datang paling pagi ke sekolah", "Bisa bangun kesiangan dan terlambat berangkat sekolah", "Nilai ulangan selalu meningkat", "Tubuh menjadi semakin kuat"], 1, "Kalimat ketiga menyebut 'agar tidak kesiangan berangkat ke sekolah'."],
        ["Pesan utama dari bacaan tersebut adalah ...", ["Bermain gawai di malam hari sangat menyenangkan", "Menjaga waktu tidur cukup membuat anak bugar dan disiplin ke sekolah", "Anak-anak tidak perlu tidur malam", "Tidur siang lebih penting daripada tidur malam"], 1, "Tidur cukup menjaga kebugaran dan kedisiplinan waktu sekolah."]
      ]
    ),
    ...L("TEKS 4 - Mengenal Komodo Satwa Langka Indonesia",
      "Komodo adalah kadal terbesar di dunia yang hidup alami di Pulau Komodo, Nusa Tenggara Timur. Hewan purba ini memiliki indra penciuman yang sangat tajam melalui lidahnya yang bercabang. Karena jumlahnya terbatas, komodo dilindungi di dalam kawasan taman nasional agar tidak punah.",
      [
        ["Di provinsi manakah habitat alami komodo berada?", ["Jawa Timur", "Nusa Tenggara Timur", "Kalimantan Timur", "Sulawesi Selatan"], 1, "Kalimat pertama menyebut Pulau Komodo, Nusa Tenggara Timur."],
        ["Indra apa yang sangat tajam pada hewan komodo?", ["Indra pendengaran", "Indra penciuman melalui lidahnya yang bercabang", "Indra penglihatan di malam hari", "Indra perasa di kulitnya"], 1, "Kalimat kedua menyebut indra penciuman melalui lidahnya yang bercabang."],
        ["Mengapa komodo dilindungi di dalam kawasan taman nasional?", ["Karena komodo sangat jinak dipelihara di rumah", "Karena jumlahnya terbatas sehingga dijaga agar tidak punah", "Karena komodo memakan rumput taman", "Karena komodo berasal dari luar negeri"], 1, "Kalimat ketiga menyebut jumlahnya terbatas sehingga dilindungi agar tidak punah."],
        ["Julukan komodo berdasarkan ukurannya pada kalimat pertama adalah ...", ["Burung terbesar di dunia", "Kadal terbesar di dunia", "Ular terpanjang di dunia", "Kura-kura tertua di dunia"], 1, "Kalimat pertama menyebut 'kadal terbesar di dunia'."],
        ["Simpulan teks tersebut adalah ...", ["Komodo dapat dipelihara bebas di halaman rumah", "Komodo merupakan satwa langka kebanggaan Indonesia yang wajib dilestarikan", "Lidah komodo digunakan untuk berenang", "Pulau Komodo berada di Pulau Jawa"], 1, "Komodo adalah satwa unik dan langka yang dilindungi negara."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_sd_literasi_sesi10"] = [
    ...L("TEKS 1 - Membuat Kompos dari Daun Kering",
      "Setiap sore, halaman sekolah dipenuhi guguran daun kering yang berserakan. Pak Kebun mengajak siswa mengumpulkan daun-daun tersebut ke dalam lubang kompos di sudut kebun. Setelah beberapa minggu membusuk secara alami, daun kering berubah menjadi pupuk kompos yang menyuburkan tanaman bunga.",
      [
        ["Apa yang dikumpulkan siswa bersama Pak Kebun setiap sore?", ["Botol plastik bekas", "Guguran daun kering", "Batu kerikil jalan", "Kertas koran bekas"], 1, "Kalimat pertama dan kedua menyebut mengumpulkan guguran daun kering."],
        ["Di mana daun kering tersebut dikumpulkan untuk diolah?", ["Di dalam kelas", "Di dalam lubang kompos di sudut kebun", "Di pinggir jalan raya", "Di kantin sekolah"], 1, "Kalimat kedua menyebut ke dalam lubang kompos di sudut kebun."],
        ["Hasil akhir dari pembusukan daun kering setelah beberapa minggu adalah ...", ["Bahan bakar minyak", "Pupuk kompos yang menyuburkan tanaman", "Kertas daur ulang", "Pasir bangunan"], 1, "Kalimat ketiga menyebut berubah menjadi pupuk kompos."],
        ["Manfaat pupuk kompos bagi kebun sekolah adalah ...", ["Membuat daun cepat rontok", "Menyuburkan tanaman bunga", "Mengusir kupu-kupu taman", "Mengeraskan tanah kebun"], 1, "Kalimat ketiga menyebut menyuburkan tanaman bunga."],
        ["Simpulan teks tersebut adalah ...", ["Daun kering sebaiknya dibakar di halaman", "Mengolah daun kering menjadi kompos menjaga kebersihan sekaligus menyuburkan tanaman", "Lubang kompos berbahaya bagi tanaman", "Halaman sekolah tidak perlu disapu setiap hari"], 1, "Pengomposan mengubah sampah daun menjadi pupuk bermanfaat."]
      ]
    ),
    ...L("TEKS 2 - Kisah Semut dan Burung Merpati",
      "Seekor semut terpeleset ke dalam sungai yang berarus deras dan hampir tenggelam. Melihat kejadian itu, burung merpati yang hinggap di pohon segera menjatuhkan sehelai daun ke dekat semut. Semut pun naik ke atas daun tersebut dan selamat sampai ke tepi sungai.",
      [
        ["Mengapa semut hampir tenggelam di sungai?", ["Karena semut tidak suka air", "Karena semut terpeleset ke sungai berarus deras", "Karena didorong oleh katak", "Karena hujan turun sangat lebat"], 1, "Kalimat pertama menyebut semut terpeleset ke sungai yang berarus deras."],
        ["Bagaimana cara burung merpati menolong semut tersebut?", ["Mengangkat semut dengan kakinya", "Menjatuhkan sehelai daun ke dekat semut", "Memanggil ikan besar di sungai", "Mengeringkan air sungai"], 1, "Kalimat kedua menyebut merpati menjatuhkan sehelai daun."],
        ["Apa yang digunakan semut sebagai perahu untuk menuju tepi sungai?", ["Ranting kayu kecil", "Sehelai daun", "Kulit kacang", "Bulu burung merpati"], 1, "Kalimat ketiga menyebut semut naik ke atas daun tersebut."],
        ["Sifat terpuji burung merpati dalam cerita tersebut adalah ...", ["Acuh tak acuh", "Cepat tanggap dan suka menolong", "Sombong dan pemarah", "Penakut dan ceroboh"], 1, "Merpati segera menolong semut yang sedang dalam bahaya."],
        ["Amanat cerita tersebut adalah ...", ["Kita tidak perlu menolong hewan kecil", "Menolong sesama yang kesulitan dapat dilakukan dengan cara sederhana", "Sungai berarus deras aman untuk bermain", "Semut lebih pandai berenang daripada ikan"], 1, "Bantuan sederhana seperti sehelai daun sangat berarti menyelamatkan nyawa."]
      ]
    ),
    ...L("TEKS 3 - Mengenal Sumber Energi Matahari",
      "Matahari adalah sumber energi panas dan cahaya terbesar bagi seluruh makhluk hidup di bumi. Panas matahari membantu petani mengeringkan gabah hasil panen dan membantu nelayan menjemur ikan asin. Selain itu, cahaya matahari pagi sangat baik untuk membantu tubuh membentuk vitamin D.",
      [
        ["Dua jenis energi utama yang dipancarkan matahari menurut teks adalah ...", ["Energi gerak dan bunyi", "Energi panas dan cahaya", "Energi listrik dan kimia", "Energi angin dan air"], 1, "Kalimat pertama menyebut sumber energi panas dan cahaya terbesar."],
        ["Manfaat panas matahari bagi para nelayan sesuai bacaan adalah ...", ["Menggerakkan perahu layar", "Menjemur ikan asin", "Mendinginkan hasil tangkapan", "Membuat jaring ikan"], 1, "Kalimat kedua menyebut membantu nelayan menjemur ikan asin."],
        ["Vitamin yang dibentuk tubuh dengan bantuan cahaya matahari pagi adalah ...", ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], 2, "Kalimat ketiga menyebut membantu tubuh membentuk vitamin D."],
        ["Siapa yang memanfaatkan panas matahari untuk mengeringkan gabah hasil panen?", ["Pedagang pasar", "Petani", "Nelayan", "Dokter"], 1, "Kalimat kedua menyebut membantu petani mengeringkan gabah."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Cara menjemur ikan di pantai", "Beragam manfaat energi matahari bagi kehidupan manusia", "Proses terjadinya siang dan malam", "Bahaya sinar matahari di siang bolong"], 1, "Teks menjelaskan manfaat energi panas dan cahaya matahari bagi petani, nelayan, dan kesehatan."]
      ]
    ),
    ...L("TEKS 4 - Sopan Santun Berbicara dengan Orang Tua",
      "Berbicara dengan sopan kepada orang tua dan guru merupakan cerminan anak yang berbudi pekerti luhur. Gunakanlah kata-kata yang lembut, nada suara yang ramah, serta ucapkan kata 'tolong', 'maaf', dan 'terima kasih' dalam kehidupan sehari-hari. Sikap santun membuat kita disayangi oleh keluarga maupun teman.",
      [
        ["Cerminan dari anak yang berbicara sopan kepada orang tua dan guru adalah ...", ["Anak yang pemalu", "Anak yang berbudi pekerti luhur", "Anak yang suka menyendiri", "Anak yang selalu menang lomba"], 1, "Kalimat pertama menyebut cerminan anak yang berbudi pekerti luhur."],
        ["Tiga kata ajaib yang dianjurkan untuk diucapkan sehari-hari menurut teks adalah ...", ["Cepat, pergi, dan diam", "Tolong, maaf, dan terima kasih", "Halo, sampai jumpa, dan selamat", "Boleh, tidak, dan jangan"], 1, "Kalimat kedua menyebut kata 'tolong', 'maaf', dan 'terima kasih'."],
        ["Bagaimana nada suara yang sebaiknya digunakan saat berbicara dengan orang lain?", ["Keras dan membentak", "Lembut dan ramah", "Pelan sekali hingga tidak terdengar", "Tergesa-gesa"], 1, "Kalimat kedua menyebut kata-kata lembut dan nada suara ramah."],
        ["Dampak baik dari membiasakan sikap santun adalah ...", ["Dijauhi teman sekelas", "Disayangi oleh keluarga maupun teman", "Sering dimarahi guru", "Sulit mendapat bantuan"], 1, "Kalimat ketiga menyebut disayangi oleh keluarga maupun teman."],
        ["Pesan utama dari bacaan tersebut adalah ...", ["Berbicara keras membuat kita terlihat hebat", "Membiasakan tutur kata santun mempererat kasih sayang dan kerukunan", "Kata terima kasih hanya diucapkan saat ulang tahun", "Sopan santun hanya berlaku di sekolah"], 1, "Tutur kata sopan mencerminkan budi pekerti dan menciptakan keharmonisan."]
      ]
    )
  ];
})();
