// File: soal/tka_literasi_master.js
// Master Bank Soal TKA SMA/SMK - Literasi (10 Sesi x 20 Soal = 200 Soal)
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi1"] = [
    ...L("TEKS 1 - Ekonomi Sirkular dan Pengelolaan Sampah Plastik",
      "Model ekonomi linear 'ambil, buat, buang' memicu penumpukan limbah plastik yang mencemari ekosistem laut dan rantai pangan. Sebaliknya, ekonomi sirkular menjaga material tetap berputar melalui desain ulang kemasan, penggunaan kembali (reuse), dan daur ulang kimiawi sehingga menekan emisi karbon hingga 45 persen sekaligus menciptakan lapangan kerja hijau.",
      [
        ["Gagasan utama teks tersebut adalah ...", ["Bahaya mikroplastik di pesisir", "Ekonomi sirkular sebagai solusi berkelanjutan mengatasi limbah plastik dari model ekonomi linear", "Perbedaan daur ulang mekanis dan kimiawi", "Cara menekan biaya produksi pabrik plastik"], 1, "Teks menyoroti ekonomi sirkular sebagai solusi atas kelemahan model linear."],
        ["Kelemahan utama model ekonomi linear menurut bacaan adalah ...", ["Membutuhkan terlalu banyak pekerja", "Pola 'ambil, buat, buang' memicu penumpukan limbah pencemar laut dan rantai pangan", "Menghasilkan produk yang cepat rusak", "Melarang penggunaan bahan daur ulang"], 1, "Kalimat pertama menjelaskan dampak penumpukan limbah plastik."],
        ["Manfaat ganda penerapan ekonomi sirkular yang disebutkan teks adalah ...", ["Menghapus seluruh plastik dan menurunkan harga ekspor", "Menekan emisi karbon hingga 45 persen dan membuka lapangan kerja hijau", "Mengganti pabrik dengan tenaga robotik", "Meningkatkan produksi plastik sekali pakai"], 1, "Kalimat kedua menyebut pengurangan emisi 45% dan lapangan kerja hijau."],
        ["Makna istilah 'ekonomi sirkular' dalam konteks bacaan adalah ...", ["Perdagangan antarnegara secara bergilir", "Sistem ekonomi yang menjaga material tetap berputar dan dimanfaatkan kembali selama mungkin", "Pajak tinggi bagi penghasil limbah", "Pembakaran sampah menjadi listrik"], 1, "Ekonomi sirkular mempertahankan siklus pakai material selama mungkin."],
        ["Simpulan yang paling tepat dari paragraf tersebut adalah ...", ["Ekonomi linear lebih menguntungkan jangka panjang", "Transisi ke ekonomi sirkular memberi dampak positif bagi lingkungan sekaligus ekonomi", "Daur ulang kimiawi satu-satunya cara mengatasi polusi", "Sampah plastik tidak bisa diolah kembali"], 1, "Pengurangan emisi karbon dan lapangan kerja baru menunjukkan manfaat ganda."]
      ]
    ),
    ...L("TEKS 2 - Literasi Digital dan Bias Konfirmasi di Media Sosial",
      "Algoritma media sosial menyajikan konten sesuai riwayat klik pengguna sehingga menciptakan 'ruang gema' (echo chamber) yang menyaring sudut pandang berbeda. Kondisi ini memperkuat bias konfirmasi, yakni kecenderungan psikologis untuk hanya memercayai informasi yang sejalan dengan keyakinan pribadi tanpa verifikasi fakta secara objektif.",
      [
        ["Penyebab utama terbentuknya 'ruang gema' di media sosial menurut teks adalah ...", ["Minimnya akses internet di desa", "Algoritma yang menyuguhkan konten sesuai riwayat klik pengguna", "Larangan mengunggah berita resmi", "Mahalnya biaya berlangganan aplikasi"], 1, "Kalimat pertama menyebut algoritma menyajikan konten sesuai riwayat klik."],
        ["Hubungan antara 'ruang gema' dan 'bias konfirmasi' adalah ...", ["Ruang gema menghilangkan bias konfirmasi", "Ruang gema memperkuat bias konfirmasi karena pengguna jarang melihat sudut pandang berbeda", "Bias konfirmasi menciptakan algoritma baru", "Keduanya tidak saling memengaruhi"], 1, "Lingkungan informasi tertutup memperparah kecenderungan memercayai informasi sepihak."],
        ["Pengertian 'bias konfirmasi' berdasarkan bacaan adalah ...", ["Kesalahan teknis saat mengunggah berkas", "Kecenderungan memercayai informasi yang mendukung pendapat pribadi tanpa verifikasi objektif", "Kemampuan memilah berita hoaks", "Kebiasaan membagikan berita tanpa membaca"], 1, "Definisi eksplisit tercantum di kalimat kedua."],
        ["Langkah literasi digital untuk keluar dari jebakan ruang gema sesuai teks adalah ...", ["Menghapus semua akun media sosial", "Membiasakan verifikasi fakta dan membaca sumber dengan sudut pandang beragam", "Hanya mengikuti akun yang sepaham", "Mengklik semua iklan di beranda"], 1, "Verifikasi objektif dan keberagaman sumber memecah ruang gema."],
        ["Kata 'sejalan' pada kalimat kedua bermakna ...", ["bertentangan", "sesuai atau selaras", "terpisah", "tersembunyi"], 1, "'Sejalan dengan keyakinan pribadi' berarti sesuai atau selaras."]
      ]
    ),
    ...L("TEKS 3 - Diversifikasi Pangan Lokal dan Ketahanan Nasional",
      "Ketergantungan pada satu jenis komoditas pangan pokok membuat ketahanan pangan rentan terhadap guncangan iklim dan gangguan pasokan global. Indonesia memiliki beragam sumber karbohidrat lokal seperti sagu di Maluku dan Papua, sorgum di Nusa Tenggara Timur, serta singkong yang kaya serat, berindeks glikemik rendah, dan memperkuat kedaulatan petani daerah.",
      [
        ["Risiko utama ketergantungan pada satu jenis pangan pokok adalah ...", ["Harga pupuk selalu naik", "Rentan terhadap guncangan iklim dan gangguan rantai pasok global", "Lahan pertanian tidak subur", "Masyarakat menolak makanan tradisional"], 1, "Kalimat pertama menjelaskan kerentanan terhadap iklim dan pasokan global."],
        ["Keunggulan nutrisi sumber karbohidrat lokal menurut bacaan adalah ...", ["Kadar gula paling tinggi", "Kaya serat dan memiliki indeks glikemik rendah", "Dapat disimpan puluhan tahun tanpa diolah", "Tidak memerlukan air saat ditanam"], 1, "Kalimat kedua menyebut kaya serat dan berindeks glikemik rendah."],
        ["Manfaat sosial-ekonomi diversifikasi pangan lokal adalah ...", ["Menghapus seluruh impor industri", "Memperkuat kedaulatan pangan petani daerah", "Menyeragamkan menu di semua provinsi", "Mengurangi luas lahan pertanian"], 1, "Kalimat kedua menyebut memperkuat kedaulatan petani daerah."],
        ["Pasangan pangan lokal dan wilayah asalnya yang tepat sesuai teks adalah ...", ["Sagu dari Nusa Tenggara Timur", "Sorgum dari Nusa Tenggara Timur dan sagu dari Maluku serta Papua", "Singkong dari Papua", "Gandum dari Maluku"], 1, "Kalimat kedua menyebut sagu di Maluku/Papua dan sorgum di NTT."],
        ["Tujuan penulis menyampaikan gagasan tersebut adalah ...", ["Mengajak semua orang menanam sagu", "Menjelaskan pentingnya diversifikasi pangan lokal demi gizi dan kedaulatan pangan", "Mengkritik kualitas beras lokal", "Membandingkan harga ekspor sagu"], 1, "Teks menguraikan manfaat nutrisi dan kedaulatan dari keberagaman pangan lokal."]
      ]
    ),
    ...L("TEKS 4 - Fenomena Hujan Asam dan Dampaknya bagi Ekosistem",
      "Hujan asam terbentuk ketika emisi sulfur dioksida (SO2) dan nitrogen oksida (NOx) dari pembakaran bahan bakar fosil bereaksi dengan uap air di atmosfer menjadi asam sulfat dan asam nitrat. Presipitasi asam ini menurunkan pH sungai sehingga membahayakan ikan serta melarutkan kalsium dan magnesium tanah hingga pepohonan hutan rentan terhadap hama.",
      [
        ["Dua gas pencemar utama pemicu hujan asam menurut teks adalah ...", ["Karbon monoksida dan metana", "Sulfur dioksida (SO2) dan nitrogen oksida (NOx)", "Ozon dan uap merkuri", "Helium dan hidrogen"], 1, "Kalimat pertama menyebut SO2 dan NOx."],
        ["Dampak hujan asam terhadap kesuburan tanah hutan adalah ...", ["Menambah cadangan kalsium berlebihan", "Melarutkan nutrisi penting seperti kalsium dan magnesium sehingga pohon melemah", "Mempercepat pertumbuhan lumut pelindung", "Menetralkan racun logam berat"], 1, "Kalimat kedua menyebut pelarutan kalsium dan magnesium tanah."],
        ["Sumber utama emisi pemicu hujan asam dalam bacaan adalah ...", ["Letusan gunung api bawah laut", "Pembakaran bahan bakar fosil", "Penguapan air laut tropis", "Penggunaan pupuk kompos"], 1, "Kalimat pertama menyebut pembakaran bahan bakar fosil."],
        ["Pengaruh hujan asam terhadap ekosistem perairan adalah ...", ["Menurunkan suhu air sungai", "Meningkatkan keasaman air sehingga mengancam kelangsungan hidup ikan", "Mempercepat perkembangbiakan ikan", "Mengubah air tawar menjadi asin"], 1, "Menurunkan pH berarti meningkatkan keasaman perairan."],
        ["Kata 'presipitasi' pada kalimat kedua merujuk pada peristiwa ...", ["penguapan air laut", "curahan hujan atau salju dari atmosfer ke bumi", "penyerapan air oleh akar", "penyaringan air tanah"], 1, "Presipitasi asam adalah curahan hujan yang bersifat asam."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi2"] = [
    ...L("TEKS 1 - Pulau Panas Perkotaan (Urban Heat Island)",
      "Kawasan perkotaan padat penduduk mencatat suhu udara 2 hingga 5 derajat Celsius lebih hangat dibanding pedesaan di sekitarnya—fenomena yang disebut pulau panas perkotaan. Permukaan aspal dan beton menyerap radiasi matahari pada siang hari lalu melepaskannya di malam hari, sementara minimnya vegetasi mengurangi pendinginan alami dari evapotranspirasi.",
      [
        ["Penyebab utama suhu kota lebih tinggi dibanding desa menurut teks adalah ...", ["Letak kota yang dekat pantai", "Permukaan aspal dan beton yang menyerap panas serta kurangnya ruang hijau", "Banyaknya sungai di tengah kota", "Curah hujan kota lebih tinggi"], 1, "Aspal/beton menyimpan panas dan minimnya tanaman mengurangi pendinginan alami."],
        ["Peran ruang terbuka hijau dalam menurunkan suhu perkotaan adalah ...", ["Memantulkan cahaya ke luar angkasa", "Memberikan pendinginan alami melalui penguapan air tanaman", "Menghalangi angin bertiup", "Menyerap gas oksigen siang hari"], 1, "Evapotranspirasi tanaman mendinginkan udara sekitar."],
        ["Selisih suhu rata-rata kota dan desa akibat fenomena ini mencapai ...", ["0,5–1°C", "2–5°C", "8–12°C", "15–20°C"], 1, "Kalimat pertama menyebut 2 hingga 5 derajat Celsius lebih hangat."],
        ["Istilah 'evapotranspirasi' dalam bacaan merujuk pada ...", ["Pembakaran bahan bakar kendaraan", "Proses penguapan air dari permukaan tanah dan tumbuhan", "Pencairan es di kutub", "Pemantulan panas kaca gedung"], 1, "Evapotranspirasi adalah penguapan air tanaman yang menyejukkan udara."],
        ["Solusi paling efektif mengurangi pulau panas perkotaan sesuai teks adalah ...", ["Memperlebar jalan beraspal", "Memperbanyak taman kota dan atap hijau", "Mengganti pohon dengan baliho", "Menutup saluran air kota"], 1, "Menambah vegetasi meningkatkan efek pendinginan alami."]
      ]
    ),
    ...L("TEKS 2 - Kecerdasan Buatan dalam Diagnosis Medis",
      "Model pembelajaran mesin mampu menganalisis ribuan citra medis seperti foto rontgen dalam hitungan detik untuk mendeteksi tanda awal penyakit secara akurat. Meski demikian, teknologi ini berfungsi sebagai alat bantu keputusan klinis, bukan pengganti dokter, karena empati manusia, riwayat pasien menyeluruh, serta pertimbangan etika tetap krusial dalam menetapkan terapi.",
      [
        ["Gagasan pokok bacaan tersebut adalah ...", ["Robot akan menggantikan seluruh dokter", "AI mempercepat deteksi dini penyakit namun tetap memerlukan peran dokter", "Foto rontgen tidak lagi dipakai", "Pasien lebih percaya komputer daripada manusia"], 1, "AI berperan sebagai alat bantu keputusan klinis, bukan pengganti dokter."],
        ["Keunggulan utama pembelajaran mesin dalam analisis citra medis adalah ...", ["Melakukan operasi bedah mandiri", "Memindai ribuan gambar medis dalam hitungan detik", "Menghapus pemeriksaan laboratorium", "Menyembuhkan penyakit tanpa obat"], 1, "Kalimat pertama menyebut analisis ribuan citra dalam hitungan detik."],
        ["Mengapa peran dokter tetap tidak tergantikan oleh AI?", ["Komputer tidak bisa menyimpan data", "Empati, pemahaman riwayat menyeluruh, dan etika medis hanya dimiliki manusia", "Biaya listrik terlalu mahal", "AI hanya bekerja malam hari"], 1, "Kalimat kedua menegaskan pentingnya empati, riwayat menyeluruh, dan etika."],
        ["Makna frasa 'alat bantu keputusan klinis' adalah ...", ["Perangkat pengganti perawat", "Sistem pendukung informasi bagi dokter sebelum menetapkan diagnosis", "Mesin pembuat resep otomatis", "Aplikasi antrean pasien"], 1, "AI membantu dokter mengambil keputusan medis lebih cepat dan akurat."],
        ["Sikap penulis terhadap pemanfaatan AI di bidang kesehatan bersifat ...", ["Menolak sepenuhnya", "Optimistis namun proporsional", "Sangat pesimistis", "Acuh tak acuh"], 1, "Penulis mengapresiasi kecepatan AI sekaligus menegaskan batasannya."]
      ]
    ),
    ...L("TEKS 3 - Terumbu Karang sebagai Benteng Alami Pesisir",
      "Selain menjadi rumah bagi seperempat spesies biota laut, terumbu karang berperan sebagai pemecah gelombang alami yang meredam hingga 97 persen energi ombak badai sebelum menghantam pantai. Kerusakan karang akibat bahan peledak dan pemanasan air laut tidak hanya mengancam mata pencaharian nelayan, tetapi juga mempercepat abrasi permukiman pesisir.",
      [
        ["Fungsi fisik terumbu karang bagi garis pantai menurut teks adalah ...", ["Meningkatkan kadar garam laut", "Meredam hingga 97 persen energi gelombang badai", "Menghasilkan arus ke samudra", "Mendinginkan suhu pantai"], 1, "Kalimat pertama menyebut kemampuan meredam hingga 97% energi ombak."],
        ["Dua penyebab kerusakan terumbu karang yang disebutkan bacaan adalah ...", ["Pariwisata bahari dan hujan asam", "Penggunaan bahan peledak dan kenaikan suhu laut", "Pembangunan mercusuar dan kapal layar", "Pasang surut dan angin muson"], 1, "Kalimat kedua menyebut bahan peledak dan pemanasan air laut."],
        ["Dampak kerusakan terumbu karang terhadap warga pesisir adalah ...", ["Menurunnya tangkapan nelayan dan meningkatnya abrasi pantai", "Bertambahnya luas daratan pantai", "Meningkatnya populasi ikan karang", "Berkurangnya curah hujan"], 1, "Ancaman mata pencaharian nelayan dan percepatan abrasi permukiman pesisir."],
        ["Kata 'abrasi' dalam teks bermakna ...", ["Pengendapan lumpur muara", "Pengikisan daratan pantai oleh gelombang laut", "Pembentukan pulau baru", "Pencemaran minyak pelabuhan"], 1, "Abrasi adalah erosi atau pengikisan pantai akibat gelombang."],
        ["Simpulan tepat dari teks tersebut adalah ...", ["Terumbu karang hanya berguna bagi wisata", "Pelestarian terumbu karang melindungi ekosistem laut sekaligus keselamatan warga pesisir", "Abrasi tidak bisa dicegah alami", "Nelayan penyebab pemanasan global"], 1, "Terumbu karang menjaga biota laut dan melindungi pantai dari badai."]
      ]
    ),
    ...L("TEKS 4 - Literasi Finansial dan Jebakan Pinjaman Daring Ilegal",
      "Kemudahan layanan keuangan digital mendorong inklusi keuangan, namun minimnya literasi finansial membuat sebagian warga terjebak pinjaman daring ilegal berbunga mencekik dan denda harian berlipat. Sebelum meminjam secara digital, masyarakat wajib memverifikasi legalitas penyelenggara di otoritas resmi serta memastikan cicilan tidak melebihi 30 persen penghasilan.",
      [
        ["Faktor utama penyebab warga terjerat pinjaman daring ilegal adalah ...", ["Sulitnya membuka rekening bank", "Rendahnya tingkat literasi finansial masyarakat", "Tidak adanya jaringan internet", "Larangan menabung di bank resmi"], 1, "Kalimat pertama menyebut 'minimnya literasi finansial'."],
        ["Dua langkah pencegahan sebelum meminjam secara digital menurut teks adalah ...", ["Meminjam di banyak aplikasi sekaligus", "Mengecek legalitas resmi dan membatasi cicilan maksimal 30% penghasilan", "Menghapus riwayat transaksi", "Meminjam tanpa membaca kontrak"], 1, "Kalimat kedua mencantumkan verifikasi legalitas dan batas rasio cicilan 30%."],
        ["Ciri pinjaman daring ilegal yang disebutkan pada bacaan adalah ...", ["Bunga rendah dan tenor panjang", "Bunga sangat tinggi disertai denda harian berlipat", "Diawasi langsung bank sentral", "Tanpa verifikasi identitas"], 1, "Disebutkan 'berbunga mencekik dan denda harian berlipat'."],
        ["Batas aman rasio cicilan bulanan terhadap penghasilan menurut teks adalah ...", ["Maksimal 10 persen", "Tidak melebihi 30 persen", "Tepat 50 persen", "Hingga 70 persen"], 1, "Teks menyebut 'tidak melebihi 30 persen penghasilan'."],
        ["Tujuan penulisan teks tersebut adalah ...", ["Mempromosikan aplikasi pinjaman cepat", "Mengedukasi pembaca agar cermat bertransaksi keuangan digital dan menghindari pindar ilegal", "Melarang teknologi finansial", "Menghitung pajak penghasilan"], 1, "Teks bersifat edukatif agar masyarakat memverifikasi legalitas dan rasio utang."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi3"] = [
    ...L("TEKS 1 - Pertanian Vertikal di Lahan Sempit Perkotaan",
      "Pertumbuhan populasi kota yang pesat menyusutkan lahan pertanian subur di wilayah pinggiran. Pertanian vertikal menjawab tantangan ini dengan membudidayakan sayuran secara bertingkat di dalam ruangan memakai sistem hidroponik serta lampu LED khusus sehingga menghemat air hingga 90 persen dan mampu panen sepanjang tahun.",
      [
        ["Masalah utama yang melatarbelakangi munculnya pertanian vertikal adalah ...", ["Kelebihan pasokan sayuran", "Menyusutnya lahan pertanian subur akibat pertumbuhan kota", "Mahalnya harga pupuk kimia", "Menurunnya minat makan sayur"], 1, "Kalimat pertama menjelaskan pertumbuhan kota menyusutkan lahan pertanian."],
        ["Keunggulan efisiensi sumber daya dari pertanian vertikal menurut teks adalah ...", ["Tidak butuh listrik sama sekali", "Menghemat penggunaan air hingga 90 persen dibanding pertanian biasa", "Memakai tanah pegunungan", "Tanpa perawatan tanaman"], 1, "Kalimat kedua menyebut penghematan air hingga 90 persen."],
        ["Teknologi pencahayaan yang digunakan dalam budidaya bertingkat adalah ...", ["Cermin pantul matahari", "Lampu LED berspektrum khusus", "Lampu pijar daya tinggi", "Sinar ultraviolet alami"], 1, "Kalimat kedua menyebut 'lampu LED khusus'."],
        ["Keuntungan waktu panen pada sistem pertanian vertikal adalah ...", ["Hanya panen saat musim hujan", "Dapat panen sepanjang tahun tanpa terpengaruh musim", "Masa panen lebih lambat", "Panen tiap lima tahun"], 1, "Sistem tertutup memungkinkan panen sepanjang tahun."],
        ["Kata 'konvensional' dalam pertanian bermakna ...", ["modern dan otomatis", "cara bercocok tanam biasa di lahan terbuka", "berbasis luar angkasa", "tidak ramah lingkungan"], 1, "Pertanian konvensional merujuk pada cara umum di lahan terbuka."]
      ]
    ),
    ...L("TEKS 2 - Arsitektur Vernakular dan Mitigasi Gempa Nusantara",
      "Nenek moyang masyarakat Nusantara mewariskan arsitektur vernakular yang adaptif terhadap wilayah rawan gempa. Rumah panggung tradisional berbahan kayu seperti Rumah Gadang dan Tongkonan memakai sambungan pasak tanpa paku besi sehingga lentur saat diguncang gempa, sekaligus melindungi penghuni dari banjir.",
      [
        ["Mengapa rumah tradisional Nusantara tahan terhadap guncangan gempa?", ["Memakai fondasi beton dalam", "Struktur kayu dengan sambungan pasak tanpa paku besi yang lentur", "Dibangun di bukit batu kapur", "Dinding bata tebal tanpa jendela"], 1, "Sambungan pasak tanpa paku besi memberi kelenturan saat gempa."],
        ["Fungsi lain dari konstruksi rumah panggung berkolong selain tahan gempa adalah ...", ["Menyimpan hasil tambang", "Melindungi penghuni dari banjir dan menjaga sirkulasi udara", "Menahan angin topan", "Memperluas ruang bawah tanah"], 1, "Kolong rumah panggung melindungi dari banjir."],
        ["Contoh rumah adat yang disebutkan dalam bacaan adalah ...", ["Joglo dan Honai", "Rumah Gadang dan Tongkonan", "Limas dan Panjang", "Baileo dan Lamin"], 1, "Kalimat kedua menyebut Rumah Gadang dan Tongkonan."],
        ["Istilah 'arsitektur vernakular' dalam bacaan merujuk pada ...", ["Desain gedung pencakar langit", "Gaya bangunan tradisional lokal yang menyesuaikan kondisi alam setempat", "Teknik jembatan gantung baja", "Rancangan tata kota kolonial"], 1, "Arsitektur vernakular adalah arsitektur lokal warisan leluhur."],
        ["Simpulan yang paling sesuai dengan isi teks adalah ...", ["Paku besi terbaik untuk daerah gempa", "Kearifan arsitektur Nusantara terbukti selaras dengan mitigasi bencana", "Rumah panggung hanya untuk gunung", "Bangunan modern tidak perlu belajar dari tradisi"], 1, "Desain tradisional fungsional menghadapi gempa dan banjir."]
      ]
    ),
    ...L("TEKS 3 - Fenomena Fotoperiodisme pada Tumbuhan",
      "Banyak tumbuhan mengatur waktu pembungaan dan pengguguran daun berdasarkan panjang siang dan malam hari—respons biologis yang disebut fotoperiodisme. Tumbuhan hari pendek seperti krisan berbunga ketika malam lebih panjang dari batas kritis, sedangkan tumbuhan hari panjang seperti bayam memerlukan periode terang lebih lama.",
      [
        ["Pengertian 'fotoperiodisme' berdasarkan teks tersebut adalah ...", ["Proses pembuatan glukosa dari cahaya", "Respons biologis tumbuhan terhadap panjang siang dan malam", "Gerak batang mengikuti matahari", "Penyerapan air oleh daun"], 1, "Kalimat pertama mendefinisikan fotoperiodisme."],
        ["Syarat agar tumbuhan hari pendek seperti krisan berbunga adalah ...", ["Penyinaran penuh 24 jam", "Durasi kegelapan malam melampaui batas kritis tertentu", "Suhu turun di bawah titik beku", "Ditanam di kutub utara"], 1, "Kalimat kedua menyebut durasi malam melebihi batas kritis."],
        ["Contoh tumbuhan hari panjang yang disebutkan dalam bacaan adalah ...", ["Krisan dan kedelai", "Bayam dan gandum", "Padi dan jagung", "Kaktus dan anggrek"], 1, "Kalimat kedua menyebut tumbuhan hari panjang seperti bayam."],
        ["Selain pembungaan, proses biologis lain yang dipengaruhi fotoperiodisme adalah ...", ["Pembentukan akar tunggang", "Pengguguran daun", "Penyerapan nitrogen udara", "Perubahan warna kelopak"], 1, "Kalimat pertama menyebut waktu pembungaan dan pengguguran daun."],
        ["Cara membungakan tanaman krisan di luar musim sesuai teks adalah ...", ["Menyalakan lampu sepanjang malam", "Mengatur periode gelap lebih panjang dengan penutup khusus", "Menyiram air es tiap pagi", "Memangkas seluruh daun"], 1, "Krisan memerlukan periode gelap yang lebih panjang."]
      ]
    ),
    ...L("TEKS 4 - Bias Kognitif 'Sunk Cost Fallacy' dalam Pengambilan Keputusan",
      "Sunk cost fallacy adalah jebakan psikologis ketika seseorang terus mempertahankan pilihan yang merugikan semata-mata karena sayang terhadap waktu atau uang yang telanjur keluar. Padahal, biaya masa lalu tidak dapat ditarik kembali sehingga keputusan rasional harus berfokus pada manfaat dan risiko masa depan.",
      [
        ["Inti dari fenomena 'sunk cost fallacy' adalah ...", ["Keberanian menghentikan proyek gagal", "Melanjutkan hal merugikan karena enggan merelakan biaya yang sudah keluar", "Kebiasaan menabung penghasilan", "Menghitung keuntungan bersih"], 1, "Definisi di kalimat pertama menekankan keengganan melepas biaya yang telanjur keluar."],
        ["Contoh perilaku yang mencerminkan 'sunk cost fallacy' adalah ...", ["Berhenti menonton film membosankan", "Memaksakan diri menghabiskan makanan tak enak karena sudah dibayar mahal", "Menjual saham yang terus merugi", "Memilih rute alternatif saat macet"], 1, "Memaksakan diri demi uang yang sudah dibayar meski merugikan kenyamanan."],
        ["Prinsip keputusan rasional yang disarankan kalimat terakhir adalah ...", ["Mempertahankan rencana awal sampai tuntas", "Berfokus pada prospek manfaat dan risiko masa depan", "Menghitung pengeluaran tahun lalu", "Menyerahkan keputusan ke orang lain"], 1, "Kalimat terakhir menegaskan fokus pada manfaat dan risiko masa depan."],
        ["Mengapa biaya masa lalu tidak relevan untuk pilihan berikutnya?", ["Nilainya bertambah tiap hari", "Biaya yang telanjur dikeluarkan tidak bisa ditarik kembali", "Hanya berlaku pada perusahaan besar", "Diganti oleh asuransi"], 1, "Kalimat kedua menyatakan biaya masa lalu tidak dapat ditarik kembali."],
        ["Kata 'telanjur' dalam bacaan bermakna ...", ["belum sempat", "sudah terlewat atau sudah terjadi sebelumnya", "direncanakan", "dibatalkan"], 1, "'Telanjur keluar' berarti sudah dikeluarkan di masa lalu."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi4"] = [
    ...L("TEKS 1 - Karbon Biru dan Peran Hutan Mangrove",
      "Ekosistem pesisir seperti hutan mangrove, padang lamun, dan rawa payau menyimpan cadangan karbon biru hingga empat kali lebih banyak per hektare dibanding hutan daratan. Sedimen berlumpur yang tergenang air memperlambat penguraian bahan organik sehingga karbon terkunci di dalam tanah selama ribuan tahun.",
      [
        ["Mengapa hutan mangrove menyimpan karbon lebih efektif per hektare dibanding hutan daratan?", ["Pohon mangrove tumbuh lebih tinggi", "Sedimen berlumpur yang tergenang air memperlambat dekomposisi bahan organik", "Daun mangrove tidak pernah gugur", "Air laut melarutkan seluruh karbon"], 1, "Kalimat kedua menjelaskan sedimen berlumpur tergenang air memperlambat penguraian."],
        ["Tiga ekosistem pesisir penyimpan karbon biru menurut teks adalah ...", ["Terumbu karang, palung laut, dan pantai pasir", "Hutan mangrove, padang lamun, dan rawa payau", "Muara sungai, danau, dan gunung es", "Hutan pinus, sabana, dan gurun"], 1, "Kalimat pertama menyebut hutan mangrove, padang lamun, dan rawa payau."],
        ["Perbandingan daya simpan karbon mangrove per hektare terhadap hutan daratan adalah ...", ["Setengah kali lebih kecil", "Hingga empat kali lebih banyak", "Sama persis", "Sepuluh kali lebih kecil"], 1, "Kalimat pertama menyebut hingga empat kali lebih banyak per hektare."],
        ["Istilah 'karbon biru' merujuk pada ...", ["Gas karbon berwarna biru", "Karbon yang diserap dan disimpan oleh ekosistem pesisir dan laut", "Bahan bakar fosil dasar samudra", "Limbah plastik terapung"], 1, "Karbon biru tersimpan dalam ekosistem pesisir dan lautan."],
        ["Dampak jika hutan mangrove ditebang secara masif adalah ...", ["Bertambahnya ikan karang", "Terlepasnya kembali cadangan karbon tersimpan ke atmosfer", "Menurunnya suhu air laut", "Meningkatnya kesuburan pantai"], 1, "Kerusakan sedimen melepaskan karbon yang terkunci ribuan tahun."]
      ]
    ),
    ...L("TEKS 2 - Efek Dunning-Kruger dalam Penilaian Kompetensi Diri",
      "Efek Dunning-Kruger membuat individu berkemampuan rendah cenderung melebih-lebihkan kompetensinya karena kurangnya pengetahuan untuk menyadari kekeliruan sendiri. Sebaliknya, individu yang sangat ahli justru sering meremehkan kemampuannya karena menganggap hal yang mereka kuasai mudah dilakukan orang lain juga.",
      [
        ["Mengapa orang berpemahaman dangkal sering merasa sangat mahir menurut teks?", ["Mendapat pujian berlebihan", "Keterbatasan pengetahuan membuatnya tidak menyadari kekeliruannya sendiri", "Sering mengikuti ujian internasional", "Memiliki daya ingat lebih kuat"], 1, "Kalimat pertama menyebut kurangnya pengetahuan untuk menyadari kekeliruan sendiri."],
        ["Kecenderungan individu yang sangat ahli menurut Efek Dunning-Kruger adalah ...", ["Selalu menyombongkan keahliannya", "Meremehkan kemampuannya karena mengira orang lain juga menguasai hal serupa", "Menolak ilmu baru", "Tidak pernah salah"], 1, "Kalimat kedua menjelaskan para ahli menganggap keterampilannya mudah bagi semua orang."],
        ["Pernyataan yang paling sesuai dengan isi bacaan adalah ...", ["Percaya diri tinggi selalu berarti ahli", "Semakin dalam seseorang mendalami bidang, semakin ia sadar luasnya hal yang belum diketahui", "Efek ini hanya dialami anak kecil", "Pakar selalu merasa paling unggul"], 1, "Pemahaman mendalam memunculkan kerendahan hati intelektual."],
        ["Kata 'kekeliruan' dalam teks bermakna ...", ["keberhasilan", "kesalahan atau kekhilafan", "kecepatan", "keberanian"], 1, "Kekeliruan berarti kesalahan."],
        ["Sikap bijak dalam belajar untuk menghindari Efek Dunning-Kruger adalah ...", ["Berhenti belajar setelah paham dasar", "Terbuka pada umpan balik dan terus menguji pemahaman secara objektif", "Menghindari diskusi dengan pakar", "Hanya membaca ringkasan singkat"], 1, "Umpan balik objektif membantu mengukur kemampuan nyata."]
      ]
    ),
    ...L("TEKS 3 - Komputasi Kuantum dan Keamanan Siber Masa Depan",
      "Komputer kuantum memanfaatkan prinsip superposisi menggunakan qubit yang dapat berada dalam kombinasi keadaan 0 dan 1 secara bersamaan. Kemampuan ini mempercepat simulasi molekul obat dalam hitungan menit, namun sekaligus mengancam enkripsi kriptografi konvensional sehingga ilmuwan mengembangkan enkripsi pascakuantum.",
      [
        ["Perbedaan mendasar qubit pada komputer kuantum dibanding bit klasik adalah ...", ["Qubit memakai tenaga uap", "Qubit dapat berada dalam kombinasi keadaan 0 dan 1 secara bersamaan", "Qubit hanya menyimpan teks", "Komputer kuantum lebih kecil dari ponsel"], 1, "Kalimat pertama menjelaskan prinsip superposisi qubit."],
        ["Prinsip fisika yang dimanfaatkan qubit menurut teks adalah ...", ["Gravitasi", "Superposisi", "Konduksi termal", "Pembiasan cahaya"], 1, "Kalimat pertama menyebut 'prinsip superposisi'."],
        ["Manfaat positif komputasi kuantum yang disebutkan dalam bacaan adalah ...", ["Menggantikan kabel internet", "Mempercepat simulasi molekul obat dalam hitungan menit", "Menghapus kebutuhan listrik", "Menurunkan harga laptop"], 1, "Kalimat kedua menyebut simulasi molekul obat dalam hitungan menit."],
        ["Mengapa ilmuwan mengembangkan enkripsi pascakuantum?", ["Enkripsi lama memperlambat unduhan", "Komputer kuantum berpotensi membobol enkripsi kriptografi konvensional", "Pemerintah melarang kata sandi", "Ponsel modern tidak mendukung enkripsi"], 1, "Kemampuan komputasi kuantum mengancam keamanan enkripsi konvensional."],
        ["Kata 'konvensional' pada kalimat kedua merujuk pada sistem enkripsi yang ...", ["belum diciptakan", "standar digunakan sebelum era kuantum", "berbasis kecerdasan buatan", "hanya dipakai di luar angkasa"], 1, "Enkripsi konvensional adalah kriptografi standar saat ini."]
      ]
    ),
    ...L("TEKS 4 - Polinasi Serangga dan Ketahanan Produksi Pangan",
      "Lebih dari 75 persen tanaman pangan dunia seperti buah, sayuran, kopi, dan kakao bergantung pada hewan penyerbuk seperti lebah madu dan kupu-kupu. Penggunaan pestisida sintetis berlebihan serta hilangnya habitat bunga liar menurunkan populasi penyerbuk sehingga mengancam hasil panen dan menaikkan harga pangan bergizi.",
      [
        ["Persentase tanaman pangan global yang bergantung pada hewan penyerbuk adalah ...", ["Kurang dari 25 persen", "Lebih dari 75 persen", "Tepat 50 persen", "Sekitar 10 persen"], 1, "Kalimat pertama menyebut lebih dari 75 persen tanaman pangan dunia."],
        ["Dua faktor utama penurunan populasi penyerbuk menurut teks adalah ...", ["Curah hujan tinggi dan angin", "Pestisida sintetis berlebihan dan hilangnya habitat bunga liar", "Penanaman buah dan irigasi", "Rotasi tanaman"], 1, "Kalimat kedua menyebut pestisida sintetis berlebihan dan hilangnya habitat bunga liar."],
        ["Contoh komoditas pangan yang bergantung pada penyerbuk dalam bacaan adalah ...", ["Padi dan gandum", "Buah, sayuran, kopi, dan kakao", "Tebu dan sawit", "Singkong dan kentang"], 1, "Kalimat pertama menyebut buah, sayuran, kopi, dan kakao."],
        ["Dampak ekonomi jika populasi penyerbuk terus merosot adalah ...", ["Harga pupuk organik turun", "Menurunnya hasil panen yang menaikkan harga pangan bergizi", "Meningkatnya ekspor buah", "Berkurangnya biaya petani"], 1, "Kalimat kedua menjelaskan penurunan panen dan kenaikan harga pangan bergizi."],
        ["Langkah konservasi yang tepat sesuai isi teks adalah ...", ["Menyemprot pestisida dosis tinggi", "Menjaga habitat bunga liar dan mengurangi pestisida kimia", "Mengganti pohon buah dengan gandum", "Membasmi serangga kebun"], 1, "Melindungi bunga liar dan mengurangi pestisida menjaga populasi penyerbuk."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi5"] = [
    ...L("TEKS 1 - Transportasi Publik Terintegrasi dan Produktivitas Kota",
      "Kemacetan lalu lintas di kota besar memboroskan bahan bakar fosil, memperburuk polusi udara, dan menggerus produktivitas akibat jutaan jam kerja terbuang di jalan. Sistem transportasi publik terintegrasi—menghubungkan kereta komuter, bus rapid transit (BRT), dan jalur pedestrian aman—terbukti menekan ketergantungan kendaraan pribadi sekaligus mewujudkan mobilitas inklusif bagi warga.",
      [
        ["Kerugian utama kemacetan lalu lintas menurut teks adalah ...", ["Turunnya harga kendaraan", "Pemborosan bahan bakar, polusi udara, serta hilangnya jam kerja produktif", "Berkurangnya penduduk kota", "Meningkatnya biaya trotoar"], 1, "Kalimat pertama menyebut pemborosan bahan bakar, polusi udara, dan terbuangnya jam kerja."],
        ["Komponen transportasi publik terintegrasi dalam bacaan adalah ...", ["Pesawat perintis dan kapal feri", "Kereta komuter, bus rapid transit (BRT), dan jalur pedestrian aman", "Taksi daring dan motor listrik", "Kereta barang dan pelabuhan"], 1, "Kalimat kedua menyebut kereta komuter, BRT, dan jalur pedestrian."],
        ["Dampak sosial transportasi publik yang terintegrasi adalah ...", ["Membatasi akses warga pinggiran", "Mewujudkan mobilitas inklusif bagi seluruh lapisan warga", "Mewajibkan punya mobil pribadi", "Menghapus angkutan tradisional"], 1, "Kalimat kedua menyebut mobilitas inklusif bagi warga."],
        ["Kata 'menggerus' pada kalimat pertama bermakna ...", ["menambah", "mengurangi atau mengikis secara bertahap", "melindungi", "mempercepat"], 1, "'Menggerus produktivitas' bermakna mengikis atau menurunkan produktivitas."],
        ["Simpulan tepat dari paragraf tersebut adalah ...", ["Pelebaran jalan satu-satunya solusi", "Integrasi angkutan umum dan jalur pejalan kaki meningkatkan efisiensi ekonomi sekaligus kualitas lingkungan", "Mobil pribadi lebih ramah lingkungan", "Kemacetan hanya berdampak pada wisata"], 1, "Integrasi transportasi mengatasi pemborosan energi, polusi, dan meningkatkan produktivitas."]
      ]
    ),
    ...L("TEKS 2 - Mikrobioma Usus dan Kesehatan Sistem Imun",
      "Triliunan mikroorganisme baik dalam saluran pencernaan atau mikrobioma usus memecah serat pangan menjadi asam lemak rantai pendek penyehat dinding usus, melatih sel imun mengenali patogen, serta memengaruhi produksi serotonin. Pola makan kaya serat nabati dan fermentasi mendukung keragaman mikrobioma, sedangkan konsumsi antibiotik tanpa indikasi medis merusak keseimbangannya.",
      [
        ["Peran bakteri baik dalam mikrobioma usus terhadap pencernaan adalah ...", ["Menghancurkan vitamin", "Memecah serat pangan menjadi asam lemak rantai pendek penyehat dinding usus", "Meningkatkan gula darah", "Menghambat penyerapan air"], 1, "Kalimat pertama menyebut pemecahan serat pangan menjadi asam lemak rantai pendek."],
        ["Hubungan mikrobioma usus dengan sistem kekebalan tubuh adalah ...", ["Melemahkan sel darah putih", "Melatih sel imun agar mampu mengenali patogen berbahaya", "Memusnahkan seluruh bakteri usus", "Bekerja terpisah tanpa pengaruh"], 1, "Kalimat pertama menyebut melatih sel imun mengenali patogen."],
        ["Kebiasaan yang merusak keseimbangan mikrobioma usus menurut teks adalah ...", ["Makan sayuran tinggi serat", "Mengonsumsi antibiotik tanpa indikasi medis", "Makan makanan fermentasi", "Minum air putih teratur"], 1, "Kalimat kedua memperingatkan konsumsi antibiotik tanpa indikasi medis."],
        ["Neurotransmiter otak yang produksinya dipengaruhi mikrobioma usus adalah ...", ["Adrenalin", "Serotonin", "Insulin", "Kolesterol"], 1, "Kalimat pertama menyebut 'produksi serotonin'."],
        ["Pesan kesehatan utama teks tersebut adalah ...", ["Semua bakteri merugikan tubuh", "Pola makan kaya serat serta penggunaan antibiotik secara bijak menjaga imun dan pencernaan", "Makanan fermentasi harus dihindari", "Antibiotik wajib diminum tiap minggu"], 1, "Keragaman mikrobioma terjaga melalui serat nabati dan penggunaan antibiotik bijak."]
      ]
    ),
    ...L("TEKS 3 - Teknologi Desalinasi Air Laut dan Krisis Air Bersih",
      "Hanya sekitar 2,5 persen air di Bumi berupa air tawar yang sebagian besar membeku di kutub. Untuk mengatasi kelangkaan air pesisir, teknologi desalinasi osmosis balik (reverse osmosis) memompa air laut bertekanan tinggi menembus membran semipermeabel penyaring ion garam, meski masih terkendala konsumsi listrik tinggi dan limbah air garam pekat (brine).",
      [
        ["Mengapa sumber air tawar siap pakai di Bumi sangat terbatas?", ["Sebagian besar air Bumi berupa air laut asin dan air tawar umumnya membeku di kutub", "Seluruh sungai telah mengering", "Hujan hanya turun di samudra", "Air tanah tidak bisa dipompa"], 0, "Kalimat pertama menjelaskan sebagian besar dari 2,5% air tawar membeku di kutub."],
        ["Prinsip kerja desalinasi osmosis balik dalam teks adalah ...", ["Merebus air laut dengan batu bara", "Memompa air laut bertekanan tinggi melewati membran semipermeabel penyaring garam", "Mencampur bahan kimia pengendap garam", "Membekukan air laut alami"], 1, "Kalimat kedua menyebut pemompaan bertekanan tinggi melewati membran semipermeabel."],
        ["Dua tantangan utama penerapan desalinasi air laut adalah ...", ["Kurangnya pasokan air laut", "Konsumsi energi listrik tinggi dan pengelolaan limbah air garam pekat (brine)", "Air hasil saringan berbau tajam", "Membran hanya tahan satu hari"], 1, "Kalimat kedua menyebut konsumsi listrik tinggi dan limbah brine."],
        ["Istilah 'brine' dalam bacaan merujuk pada ...", ["Membran penyaring polimer", "Limbah air dengan konsentrasi garam sangat pekat sisa desalinasi", "Pompa tekanan tinggi", "Air tawar murni hasil saringan"], 1, "Dijelaskan sebagai 'limbah air garam pekat (brine)'."],
        ["Inovasi pendukung terbaik mengatasi kendala energi desalinasi adalah ...", ["Membuang brine ke terumbu karang", "Mengintegrasikan desalinasi dengan pembangkit listrik tenaga surya atau angin", "Mengurangi tekanan pompa", "Menghentikan pasokan air pesisir"], 1, "Energi terbarukan menekan tingginya konsumsi listrik konvensional."]
      ]
    ),
    ...L("TEKS 4 - Jurnalisme Warga dan Etika Verifikasi Informasi",
      "Ponsel berkamera dan media digital melahirkan jurnalisme warga (citizen journalism) yang memungkinkan masyarakat menyebarkan peristiwa darurat seperti bencana secara waktu nyata. Namun, ketiadaan proses penyuntingan redaksi kerap memicu peredaran informasi belum terverifikasi serta pelanggaran privasi korban.",
      [
        ["Manfaat positif jurnalisme warga yang disoroti dalam bacaan adalah ...", ["Menggantikan seluruh jurnalis profesional", "Mempercepat penyebaran informasi darurat secara waktu nyata saat bencana", "Menjamin semua berita bebas kesalahan", "Menghapus kebutuhan verifikasi fakta"], 1, "Kalimat pertama menyebut percepatan penyebaran peristiwa darurat secara waktu nyata."],
        ["Risiko utama praktik jurnalisme warga menurut teks adalah ...", ["Biaya akses berita mahal", "Beredarnya kabar belum terverifikasi serta pelanggaran privasi korban", "Keterlambatan berita berhari-hari", "Berkurangnya minat memakai ponsel"], 1, "Kalimat kedua menyebut kabar belum terverifikasi dan pelanggaran privasi."],
        ["Perbedaan mendasar jurnalisme warga dan media profesional dalam teks adalah ...", ["Jenis kamera liputan", "Ada tidaknya proses penyuntingan redaksi sebelum publikasi", "Kecepatan internet", "Bahasa penulisan"], 1, "Teks menyoroti ketiadaan penyuntingan redaksi pada jurnalisme warga."],
        ["Frasa 'waktu nyata' (real-time) bermakna ...", ["Setelah diperiksa seminggu", "Langsung pada saat peristiwa sedang berlangsung", "Hanya disiarkan malam hari", "Berdasarkan arsip masa lalu"], 1, "Waktu nyata berarti langsung saat peristiwa terjadi."],
        ["Sikap bijak warga saat merekam peristiwa darurat sesuai etika teks adalah ...", ["Mengunggah foto wajah korban tanpa sensor demi viral", "Memastikan kebenaran lokasi serta waktu kejadian dan menghormati privasi korban", "Menambahkan opini belum pasti", "Menyebarkan rumor akun anonim"], 1, "Verifikasi fakta dan perlindungan privasi mengatasi dua risiko jurnalisme warga."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi6"] = [
    ...L("TEKS 1 - Hidrogen Hijau sebagai Bahan Bakar Masa Depan",
      "Hidrogen hijau diproduksi melalui elektrolisis air—memecah H2O menjadi hidrogen dan oksigen—memakai listrik dari energi terbarukan seperti tenaga surya atau angin. Berbeda dengan hidrogen abu-abu dari gas alam yang menghasilkan emisi karbon tinggi, pembakaran hidrogen hijau hanya melepaskan uap air sehingga ideal untuk mendekarbonisasi industri baja, semen, dan pelayaran.",
      [
        ["Perbedaan utama hidrogen hijau dan hidrogen abu-abu menurut teks adalah ...", ["Hidrogen hijau berwarna hijau", "Hidrogen hijau dibuat dari elektrolisis air bertenaga energi terbarukan tanpa emisi karbon, sedangkan hidrogen abu-abu dari gas alam", "Hidrogen abu-abu lebih ramah lingkungan", "Hidrogen hijau hanya untuk lampu rumah"], 1, "Kalimat pertama dan kedua membandingkan bahan baku serta emisi karbon keduanya."],
        ["Zat sisa pembakaran hidrogen hijau menurut bacaan adalah ...", ["Gas metana", "Uap air murni", "Sulfur dioksida", "Debu karbon"], 1, "Kalimat kedua menyebut hanya melepaskan uap air."],
        ["Tiga sektor industri berat yang cocok memanfaatkan hidrogen hijau adalah ...", ["Pertanian padi dan perikanan", "Industri baja, semen, dan pelayaran", "Pariwisata dan perhotelan", "Tekstil rumahan dan percetakan"], 1, "Kalimat kedua menyebut industri baja, semen, dan pelayaran."],
        ["Proses kimia produksi hidrogen hijau dalam teks disebut ...", ["Distilasi minyak", "Elektrolisis air", "Fermentasi biomassa", "Pembakaran batu bara"], 1, "Kalimat pertama menyebut proses elektrolisis air."],
        ["Makna istilah 'mendekarbonisasi' dalam teks tersebut adalah ...", ["Menambah karbon atmosfer", "Mengurangi atau menghilangkan emisi karbon dari aktivitas industri", "Mengubah oksigen menjadi batu bara", "Meningkatkan bahan bakar fosil"], 1, "Dekarbonisasi berarti menekan emisi karbon agar ramah lingkungan."]
      ]
    ),
    ...L("TEKS 2 - Fenomena 'Bystander Effect' dalam Psikologi Sosial",
      "Bystander effect adalah kecenderungan individu semakin enggan menolong korban darurat ketika banyak orang lain berada di lokasi kejadian. Fenomena ini dipicu difusi tanggung jawab—anggapan orang lain pasti sudah bertindak—serta pengaruh sosial saat tiap pengamat menunggu reaksi orang di sebelahnya.",
      [
        ["Inti fenomena 'bystander effect' menurut bacaan adalah ...", ["Orang lebih cepat menolong di keramaian", "Semakin banyak saksi di lokasi darurat, semakin kecil kecenderungan individu segera menolong", "Korban menolak bantuan orang asing", "Petugas medis selalu datang cepat"], 1, "Definisi di kalimat pertama menyatakan keengganan menolong saat banyak orang di sekitar."],
        ["Dua faktor psikologis pemicu bystander effect adalah ...", ["Takut gelap dan lelah fisik", "Difusi tanggung jawab dan ketergantungan pada reaksi sosial pengamat lain", "Kurang pengetahuan P3K", "Kebisingan lalu lintas"], 1, "Kalimat kedua menyebut difusi tanggung jawab dan pengaruh sosial."],
        ["Yang dimaksud 'difusi tanggung jawab' dalam teks adalah ...", ["Pembagian tugas kerja adil", "Anggapan bahwa kewajiban bertindak terbagi ke orang lain sehingga merasa tidak perlu turun tangan", "Tanggung jawab hukum saksi", "Keberanian memimpin saat darurat"], 1, "Anggapan bahwa orang lain pasti sudah mengambil tindakan."],
        ["Langkah efektif mematahkan bystander effect saat Anda butuh pertolongan di keramaian adalah ...", ["Berteriak minta tolong secara umum", "Menunjuk langsung satu orang spesifik untuk menghubungi bantuan", "Menunggu kerumunan bubar", "Diam agar tidak menarik perhatian"], 1, "Menunjuk individu spesifik menghilangkan difusi tanggung jawab."],
        ["Kata 'enggan' pada kalimat pertama bersinonim dengan ...", ["bersemangat", "segan atau kurang mau", "terburu-buru", "wajib"], 1, "'Enggan menolong' berarti segan atau tidak segera tergerak membantu."]
      ]
    ),
    ...L("TEKS 3 - Satelit Penginderaan Jauh untuk Mitigasi Kebakaran Hutan",
      "Satelit penginderaan jauh bersensor inframerah termal mendeteksi titik panas (hotspot) di kawasan hutan terpencil secara dini sebelum api meluas. Citra satelit multispektral juga memetakan kekeringan vegetasi, arah angin, dan luas area terdampak sehingga tim pemadam dapat mengalokasikan sumber daya secara presisi.",
      [
        ["Sensor satelit yang mendeteksi titik panas secara dini menurut teks adalah ...", ["Sensor sonar bawah laut", "Sensor inframerah termal", "Kamera hitam putih biasa", "Radar kedalaman tanah"], 1, "Kalimat pertama menyebut sensor inframerah termal."],
        ["Manfaat citra satelit multispektral bagi tim pemadam kebakaran adalah ...", ["Memadamkan api dari luar angkasa", "Memetakan kekeringan vegetasi dan luas area terdampak untuk alokasi sumber daya presisi", "Mengubah arah angin hutan", "Menurunkan suhu udara"], 1, "Kalimat kedua menjelaskan pemetaan kekeringan, arah angin, dan luas terdampak."],
        ["Keunggulan pemantauan satelit dibanding patroli darat semata adalah ...", ["Tanpa analisis komputer", "Menjangkau kawasan hutan terpencil secara cepat sebelum api membesar", "Menghentikan penebangan otomatis", "Menghilangkan petugas pemadam"], 1, "Deteksi dini menjangkau kawasan terpencil sebelum api meluas."],
        ["Istilah 'hotspot' dalam konteks bacaan merujuk pada ...", ["Jaringan internet nirkabel", "Titik anomali suhu tinggi indikasi potensi kebakaran lahan atau hutan", "Lokasi wisata pegunungan", "Stasiun bumi satelit"], 1, "Dijelaskan sebagai 'titik panas (hotspot)' indikasi kebakaran."],
        ["Simpulan yang paling tepat dari paragraf tersebut adalah ...", ["Kebakaran hanya terjadi malam hari", "Teknologi penginderaan jauh meningkatkan kecepatan deteksi dini dan ketepatan mitigasi kebakaran", "Patroli darat tidak perlu lagi", "Sensor inframerah hanya kerja saat hujan"], 1, "Satelit mempercepat deteksi awal dan ketepatan alokasi pemadaman."]
      ]
    ),
    ...L("TEKS 4 - Sejarah Jalur Rempah Nusantara dan Pertukaran Budaya",
      "Jauh sebelum bangsa Eropa tiba di Asia Tenggara, Nusantara telah menjadi poros maritim dunia melalui perdagangan cengkih dari Maluku, pala dari Banda, serta lada dari Sumatra dan Jawa. Jalur Rempah bukan sekadar lintasan niaga antarbenua, melainkan ruang pertemuan peradaban yang memperkaya bahasa, kuliner, dan arsitektur pesisir.",
      [
        ["Gagasan utama bacaan tersebut adalah ...", ["Monopoli rempah bangsa Eropa abad ke-16", "Peran strategis Jalur Rempah Nusantara sebagai poros maritim niaga sekaligus pertukaran budaya", "Cara budidaya cengkih di gunung", "Perbedaan harga lada di Eropa"], 1, "Teks menegaskan Nusantara sebagai poros maritim dan ruang pertemuan peradaban."],
        ["Pasangan komoditas rempah dan daerah asalnya sesuai teks adalah ...", ["Cengkih dari Sumatra", "Cengkih dari Maluku, pala dari Banda, serta lada dari Sumatra dan Jawa", "Pala dari Jawa", "Lada dari Maluku"], 1, "Kalimat pertama menyebut cengkih Maluku, pala Banda, lada Sumatra dan Jawa."],
        ["Dampak non-ekonomi aktivitas perdagangan di Jalur Rempah adalah ...", ["Terisolasinya warga pesisir", "Pertukaran peradaban yang memperkaya bahasa, kuliner, dan arsitektur lokal", "Hilangnya bahasa daerah", "Berhentinya pelayaran antarpulau"], 1, "Kalimat kedua menyebut pengayaan bahasa, kuliner, dan arsitektur."],
        ["Kata 'poros' pada kalimat pertama bermakna ...", ["pinggiran", "pusat atau sumbu utama", "penghalang", "akhir"], 1, "'Poros maritim dunia' berarti pusat utama pelayaran dan perdagangan laut."],
        ["Pernyataan yang terbukti benar berdasarkan kalimat pertama teks adalah ...", ["Niaga rempah dimulai setelah Eropa datang", "Jaringan niaga rempah Nusantara telah aktif jauh sebelum bangsa Eropa tiba di Asia Tenggara", "Lada hanya tumbuh di Maluku", "Jalur Rempah khusus kapal perang"], 1, "Frasa 'Jauh sebelum bangsa Eropa tiba' membuktikan jaringan niaga sudah mapan lebih dulu."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi7"] = [
    ...L("TEKS 1 - Ritual Tidur dan Ritme Sirkadian Manusia",
      "Tubuh manusia memiliki jam biologis internal berdurasi sekitar 24 jam bernama ritme sirkadian yang mengatur siklus tidur-bangun dan pelepasan hormon melatonin. Paparan cahaya biru layar gawai pada malam hari menekan produksi melatonin sehingga otak menafsirkan suasana masih siang dan menunda kantuk, sedangkan meredupkan lampu satu jam sebelum tidur meningkatkan kualitas tidur mendalam.",
      [
        ["Pengertian 'ritme sirkadian' menurut bacaan adalah ...", ["Latihan pernapasan malam", "Jam biologis internal berdurasi sekitar 24 jam yang mengatur fungsi tubuh harian", "Gangguan sulit tidur", "Gelombang otak saat bermimpi"], 1, "Kalimat pertama mendefinisikan ritme sirkadian sebagai jam biologis internal berdurasi sekitar 24 jam."],
        ["Mengapa menatap layar gawai sebelum tidur memicu sulit tidur?", ["Suhu layar memanaskan kamar", "Cahaya biru menekan produksi hormon melatonin sehingga otak mengira masih siang", "Suara notifikasi merusak telinga", "Layar menyerap oksigen"], 1, "Kalimat kedua menjelaskan cahaya biru menekan produksi melatonin dan menunda rasa kantuk."],
        ["Kebiasaan yang dianjurkan teks untuk memperbaiki kualitas tidur mendalam adalah ...", ["Minum kopi hangat sebelum tidur", "Meredupkan cahaya lampu satu jam sebelum tidur dan menjaga jadwal konsisten", "Olahraga berat tepat sebelum tidur", "Tidur siang empat jam"], 1, "Kalimat kedua menyebut meredupkan lampu satu jam sebelum tidur."],
        ["Hormon pemicu kantuk yang dipengaruhi paparan cahaya adalah ...", ["Adrenalin", "Melatonin", "Tiroksin", "Endorfin"], 1, "Kalimat pertama dan kedua menyebut hormon melatonin."],
        ["Simpulan tepat dari teks tersebut adalah ...", ["Layar gawai tidak memengaruhi tidur", "Pengaturan paparan cahaya selaras dengan jam biologis tubuh meningkatkan kualitas tidur", "Melatonin hanya keluar siang hari", "Tidur mendalam tidak penting"], 1, "Menjaga kebiasaan selaras ritme sirkadian meningkatkan kualitas tidur."]
      ]
    ),
    ...L("TEKS 2 - Gamifikasi dalam Pembelajaran Modern",
      "Gamifikasi menerapkan elemen permainan seperti poin, lencana, dan tantangan bertahap ke dalam konteks pendidikan untuk meningkatkan motivasi intrinsik lewat umpan balik instan atas kemajuan siswa. Namun, penekanan berlebihan pada peringkat kompetitif tanpa diimbangi kolaborasi berisiko menimbulkan kecemasan bagi peserta didik yang tertinggal.",
      [
        ["Yang dimaksud 'gamifikasi' dalam pendidikan menurut teks adalah ...", ["Mengganti pelajaran dengan gim video", "Penerapan elemen permainan seperti poin dan tantangan bertahap dalam belajar", "Larangan bermain gim di sekolah", "Ujian berbasis kompetisi olahraga"], 1, "Kalimat pertama mendefinisikan gamifikasi sebagai penerapan elemen permainan ke dalam konteks pendidikan."],
        ["Mekanisme yang membuat gamifikasi meningkatkan motivasi belajar adalah ...", ["Hukuman saat salah menjawab", "Pemberian umpan balik instan atas kemajuan belajar siswa", "Penghapusan tugas rumah", "Pengurangan jam belajar"], 1, "Kalimat pertama menyebut umpan balik instan atas kemajuan siswa."],
        ["Risiko utama jika gamifikasi terlalu menonjolkan persaingan peringkat adalah ...", ["Soal menjadi terlalu mudah", "Timbulnya rasa cemas pada siswa yang berada di posisi bawah", "Koneksi internet melambat", "Guru kurang kreatif"], 1, "Kalimat kedua memperingatkan risiko kecemasan bagi peserta didik yang tertinggal."],
        ["Solusi tersirat dalam bacaan agar gamifikasi tetap sehat secara psikologis adalah ...", ["Menghapus sistem poin", "Menyeimbangkan elemen tantangan dengan kegiatan kolaboratif antarsiswa", "Hanya memberi hadiah satu siswa", "Mewajibkan bermain gim tiap hari"], 1, "Kalimat kedua menyebut perlunya diimbangi kolaborasi."],
        ["Kata 'intrinsik' bermakna dorongan yang berasal dari ...", ["hadiah uang dari luar", "dalam diri individu itu sendiri", "paksaan peraturan", "tekanan teman"], 1, "Motivasi intrinsik adalah dorongan internal dari dalam diri pembelajar."]
      ]
    ),
    ...L("TEKS 3 - Ekowisata Berkelanjutan dan Konservasi Taman Nasional",
      "Berbeda dari pariwisata massal yang kerap membebani daya dukung lingkungan lewat tumpukan sampah, ekowisata berkelanjutan mengutamakan perjalanan bertanggung jawab yang menjaga ekosistem sekaligus menyejahterakan warga lokal. Melalui pembatasan kuota pengunjung harian dan pelibatan warga sebagai pemandu, pendapatan wisata mengalir mendanai patroli konservasi satwa langka.",
      [
        ["Perbedaan mendasar ekowisata berkelanjutan dan pariwisata massal adalah ...", ["Ekowisata tanpa batas wisatawan", "Ekowisata menjaga kelestarian alam dan memberdayakan warga, sedangkan pariwisata massal membebani lingkungan", "Pariwisata massal khusus hutan lindung", "Ekowisata melarang warga terlibat"], 1, "Kalimat pertama membandingkan beban lingkungan pariwisata massal dengan prinsip konservasi ekowisata."],
        ["Strategi pengelolaan ekowisata yang disebutkan dalam bacaan adalah ...", ["Membangun hotel bertingkat di hutan", "Membatasi kuota pengunjung harian dan melibatkan warga sebagai pemandu", "Menutup total taman nasional", "Mengganti satwa liar"], 1, "Kalimat kedua menyebut pembatasan kuota pengunjung harian dan pelibatan warga."],
        ["Pemanfaatan dana pendapatan sektor ekowisata menurut teks adalah ...", ["Membangun mal di kota", "Mendanai patroli konservasi satwa langka", "Membeli lahan di luar daerah", "Mengimpor kendaraan mewah"], 1, "Kalimat kedua menyatakan pendapatan wisata mendanai patroli konservasi satwa langka."],
        ["Frasa 'daya dukung lingkungan' bermakna ...", ["Kapasitas maksimal ekosistem menopang aktivitas tanpa rusak", "Harga tiket masuk wisata", "Jumlah parkir kendaraan", "Luas bangunan penginapan"], 1, "Daya dukung lingkungan adalah batas kemampuan alam menyerap dampak tanpa rusak."],
        ["Simpulan paling tepat dari bacaan tersebut adalah ...", ["Pariwisata dan alam selalu bertentangan", "Pengelolaan ekowisata terukur menyelaraskan konservasi alam dengan ekonomi warga lokal", "Homestay warga merusak lingkungan", "Satwa langka tidak butuh patroli"], 1, "Ekowisata menciptakan sinergi antara konservasi dan kesejahteraan warga."]
      ]
    ),
    ...L("TEKS 4 - Fenomena 'Filter Bubble' pada Mesin Pencari Internet",
      "Ketika dua orang mengetikkan kata kunci sama di mesin pencari, hasil yang muncul bisa berbeda signifikan akibat fenomena 'gelembung penyaring' (filter bubble). Sistem mempersonalisasi urutan tautan berdasarkan lokasi, perangkat, dan riwayat pencarian pengguna sehingga seseorang tanpa sadar hanya melihat potongan informasi sesuai profil digitalnya.",
      [
        ["Penyebab dua pengguna mendapat hasil pencarian berbeda meski kata kuncinya sama adalah ...", ["Gangguan sinyal satelit", "Personalisasi algoritma berdasarkan lokasi, perangkat, dan riwayat pencarian sebelumnya", "Perbedaan ukuran layar", "Kesalahan ejaan"], 1, "Kalimat kedua menjelaskan personalisasi berdasarkan lokasi, perangkat, dan riwayat pencarian."],
        ["Dampak utama fenomena 'filter bubble' bagi pengguna internet adalah ...", ["Memperoleh seluruh sudut pandang lengkap", "Tanpa sadar hanya terpapar potongan informasi sesuai profil digitalnya", "Kecepatan internet meningkat", "Iklan komersial hilang"], 1, "Kalimat kedua menyebut seseorang hanya melihat potongan informasi sesuai profil digitalnya."],
        ["Istilah 'gelembung penyaring' dalam teks merupakan padanan dari ...", ["echo chamber", "filter bubble", "digital footprint", "cloud storage"], 1, "Kalimat pertama menyebut 'gelembung penyaring (filter bubble)'."],
        ["Langkah praktis memperoleh hasil pencarian lebih netral sesuai teks adalah ...", ["Selalu memakai akun yang sama", "Memanfaatkan mode penyamaran (incognito) dan membandingkan beberapa mesin pencari", "Hanya mengklik tautan paling atas", "Menonaktifkan pembaruan peramban"], 1, "Mode penyamaran mengurangi pengaruh riwayat pencarian pribadi."],
        ["Kata 'signifikan' pada kalimat pertama bermakna ...", ["sangat kecil", "nyata atau cukup besar artinya", "sementara", "kebetulan"], 1, "'Berbeda signifikan' bermakna perbedaan yang nyata dan berarti."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi8"] = [
    ...L("TEKS 1 - Bioprospeksi Laut Dalam dan Penemuan Obat Baru",
      "Organisme di palung laut dalam dan ventilasi hidrotermal bertahan menghadapi tekanan ekstrem, kegelapan abadi, serta perubahan suhu drastis dengan menghasilkan senyawa biokimia unik. Melalui bioprospeksi kelautan, peneliti mengekstraksi senyawa bioaktif dari spons laut, karang lunak, dan mikroba laut dalam sebagai kandidat antibiotik baru dan obat antikanker sambil tetap menjaga kelestarian habitat aslinya.",
      [
        ["Mengapa organisme laut dalam menghasilkan senyawa biokimia unik menurut teks?", ["Mendapat sinar matahari penuh", "Beradaptasi terhadap tekanan ekstrem, kegelapan total, dan perubahan suhu drastis", "Memakan plastik di dasar laut", "Tidak memiliki pesaing di perairan dangkal"], 1, "Kalimat pertama menjelaskan adaptasi terhadap tekanan ekstrem, kegelapan abadi, dan perubahan suhu."],
        ["Tujuan utama kegiatan 'bioprospeksi kelautan' berdasarkan bacaan adalah ...", ["Menambang logam mulia di dasar palung", "Mengekstraksi senyawa bioaktif alami sebagai kandidat antibiotik baru dan obat antikanker", "Memindahkan terumbu karang ke akuarium", "Menangkap ikan laut dalam untuk ekspor"], 1, "Kalimat kedua menyebut ekstraksi senyawa bioaktif untuk antibiotik baru dan obat antikanker."],
        ["Tiga kelompok organisme laut yang disebutkan menghasilkan senyawa unik adalah ...", ["Paus biru, hiu, dan lumba-lumba", "Spons laut, karang lunak, dan mikroba laut dalam", "Rumput laut, kepiting, dan udang", "Ubur-ubur, penyu, dan bintang laut"], 1, "Kalimat kedua menyebut spons laut, karang lunak, dan mikroba laut dalam."],
        ["Prinsip etika lingkungan yang ditekankan dalam riset bioprospeksi adalah ...", ["Mengambil seluruh populasi langka ke laboratorium", "Tetap menjaga kelestarian habitat asli organisme laut tersebut", "Membuang limbah ekstraksi ke laut lepas", "Melarang seluruh riset farmasi"], 1, "Bagian akhir kalimat kedua menegaskan menjaga kelestarian habitat aslinya."],
        ["Simpulan paling sesuai dengan isi bacaan adalah ...", ["Laut dalam tidak bernilai bagi ilmu kesehatan", "Keanekaragaman hayati laut dalam menyimpan potensi besar bagi kemajuan farmasi modern", "Antibiotik hanya berasal dari tanaman darat", "Ventilasi hidrotermal berbahaya bagi semua kehidupan"], 1, "Adaptasi biota laut dalam menghasilkan kandidat obat penting."]
      ]
    ),
    ...L("TEKS 2 - Minimalisme Digital dan Kesehatan Fokus Kognitif",
      "Notifikasi ponsel yang berbunyi setiap beberapa menit memicu 'peralihan perhatian' (attention switching) sehingga otak memerlukan waktu hingga dua puluh menit untuk kembali mencapai konsentrasi penuh. Filosofi minimalisme digital mengajak pengguna menyaring secara sadar aplikasi yang benar-benar bermanfaat, mematikan notifikasi non-esensial, dan menjadwalkan waktu bebas layar demi memulihkan kejernihan berpikir.",
      [
        ["Dampak kognitif dari seringnya menerima notifikasi ponsel menurut teks adalah ...", ["Meningkatkan kecepatan membaca", "Memecah fokus sehingga otak butuh waktu hingga 20 menit untuk kembali berkonsentrasi penuh", "Memperkuat daya ingat jangka panjang", "Menghilangkan rasa lelah"], 1, "Kalimat pertama menjelaskan peralihan perhatian yang menyita hingga 20 menit untuk pulih."],
        ["Prinsip utama 'minimalisme digital' dalam bacaan adalah ...", ["Berhenti memakai seluruh perangkat elektronik", "Memilih secara sadar aplikasi bermanfaat dan membatasi gangguan layar", "Menginstal semua aplikasi produktivitas", "Memeriksa pesan setiap lima menit"], 1, "Kalimat kedua menjelaskan penyaringan sadar aplikasi bermanfaat dan penjadwalan waktu bebas layar."],
        ["Dua langkah praktis dalam penerapan minimalisme digital adalah ...", ["Membeli dua ponsel terpisah", "Menonaktifkan notifikasi tidak penting dan menjadwalkan waktu bebas layar", "Menghapus seluruh kontak teman", "Menyalakan mode getar sepanjang malam"], 1, "Kalimat kedua menyebut mematikan notifikasi non-esensial dan waktu bebas layar."],
        ["Frasa 'peralihan perhatian' (attention switching) merujuk pada ...", ["Mengerjakan lima tugas sekaligus", "Perpindahan fokus otak secara mendadak dari satu tugas ke gangguan lain", "Latihan meditasi sebelum belajar", "Metode mencatat warna-warni"], 1, "Attention switching terjadi saat fokus teralihkan oleh gangguan notifikasi."],
        ["Tujuan penulis menyampaikan gagasan tersebut adalah ...", ["Menjual aplikasi pemblokir iklan", "Mengajak pembaca mengelola penggunaan gawai secara bijak demi kualitas fokus mental", "Mengkritik perusahaan ponsel", "Melarang pelajar memakai internet"], 1, "Teks mengedukasi dampak gangguan notifikasi dan solusi minimalisme digital."]
      ]
    ),
    ...L("TEKS 3 - Ekonomi Gig dan Tantangan Perlindungan Pekerja Lepas",
      "Pertumbuhan platform digital melahirkan ekonomi gig (gig economy) yang didominasi pekerjaan berbasis proyek jangka pendek, mitra pengemudi daring, dan pekerja lepas (freelancer). Meski menawarkan fleksibilitas jam kerja dan tambahan penghasilan, pekerja gig kerap menghadapi ketidakpastian pendapatan bulanan serta minimnya jaminan sosial seperti asuransi kesehatan dan dana pensiun.",
      [
        ["Ciri utama pasar tenaga kerja dalam 'ekonomi gig' menurut bacaan adalah ...", ["Kontrak kerja tetap seumur hidup", "Dominasi pekerjaan proyek jangka pendek dan kemitraan lepas", "Gaji bulanan tetap disertai pensiun penuh", "Larangan bekerja lebih dari empat jam"], 1, "Kalimat pertama menjelaskan dominasi proyek jangka pendek, pengemudi daring, dan freelancer."],
        ["Keuntungan yang ditawarkan ekonomi gig bagi pekerjanya adalah ...", ["Jaminan pensiun tinggi", "Fleksibilitas jam kerja dan peluang penghasilan tambahan", "Kepastian bonus tahunan", "Fasilitas perumahan dinas"], 1, "Kalimat kedua menyebut fleksibilitas jam kerja dan peluang tambahan penghasilan."],
        ["Dua tantangan utama pekerja lepas dalam ekonomi gig adalah ...", ["Terlalu banyak cuti tahunan", "Ketidakpastian pendapatan bulanan dan minimnya perlindungan jaminan sosial", "Sulitnya mengakses aplikasi ponsel", "Kewajiban seragam formal"], 1, "Kalimat kedua menyebut ketidakpastian pendapatan dan minimnya asuransi kesehatan serta dana pensiun."],
        ["Contoh profesi dalam ekosistem ekonomi gig sesuai teks adalah ...", ["Pegawai negeri dan hakim", "Mitra pengemudi daring dan pekerja lepas (freelancer)", "Tentara dan diplomat", "Guru tetap dan pustakawan"], 1, "Kalimat pertama menyebut mitra pengemudi daring dan freelancer."],
        ["Kebijakan publik paling relevan menjawab tantangan pada teks adalah ...", ["Melarang aplikasi transportasi daring", "Merancang skema jaminan sosial dan perlindungan kerja adaptif bagi pekerja informal", "Mewajibkan pekerja lepas bekerja di kantor pemerintah", "Menghapus pajak perusahaan besar"], 1, "Skema jaminan sosial adaptif mengatasi kelemahan perlindungan pekerja gig."]
      ]
    ),
    ...L("TEKS 4 - Fenomena 'Aurora Borealis' dan Aktivitas Matahari",
      "Cahaya menari berwarna hijau, ungu, dan merah di langit malam kutub utara—dikenal sebagai aurora borealis—terjadi akibat tumbukan partikel bermuatan dari angin matahari dengan atom gas atmosfer atas Bumi. Medan magnet Bumi mengarahkan partikel surya menuju kutub, di mana tumbukan dengan oksigen menghasilkan pendaran hijau-merah, sedangkan nitrogen memancarkan cahaya biru-ungu.",
      [
        ["Penyebab utama munculnya cahaya aurora di langit malam kutub adalah ...", ["Pantulan cahaya bulan di atas es", "Tumbukan partikel bermuatan angin matahari dengan atom gas atmosfer atas Bumi", "Pembakaran meteor di samudra", "Lampu sorot kota besar"], 1, "Kalimat pertama menjelaskan tumbukan partikel bermuatan angin matahari dengan gas atmosfer."],
        ["Peran medan magnet Bumi dalam terjadinya aurora adalah ...", ["Menghalangi cahaya matahari", "Mengarahkan partikel bermuatan surya menuju wilayah kutub", "Mendinginkan lapisan stratosfer", "Mengubah oksigen menjadi hujan"], 1, "Kalimat kedua menyebut medan magnet Bumi mengarahkan partikel surya menuju kutub."],
        ["Warna cahaya saat partikel matahari bertumbukan dengan atom nitrogen adalah ...", ["Hijau terang", "Biru-ungu", "Kuning keemasan", "Putih perak"], 1, "Kalimat kedua menyebut tumbukan dengan nitrogen memancarkan cahaya biru-ungu."],
        ["Gas atmosfer yang menghasilkan pendaran hijau dan merah saat bertumbukan adalah ...", ["Helium", "Oksigen", "Karbon dioksida", "Argon"], 1, "Kalimat kedua menyebut atom oksigen menghasilkan pendaran hijau-merah."],
        ["Istilah 'aurora borealis' merujuk pada cahaya kutub yang terjadi di ...", ["Belahan Bumi selatan", "Belahan Bumi utara", "Garis khatulistiwa", "Dasar palung laut"], 1, "Kalimat pertama menyebut langit malam kutub utara (aurora borealis)."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi9"] = [
    ...L("TEKS 1 - Biokimia Tidur dan Sistem Glimfatik Otak",
      "Saat manusia tertidur pulas pada malam hari, otak mengaktifkan sistem glimfatik yang mengalirkan cairan serebrospinal untuk membilas protein limbah metabolik seperti beta-amiloid yang menumpuk selama terjaga. Kurang tidur kronis menghambat pembersihan alami ini dan dalam jangka panjang berkaitan dengan penurunan daya ingat serta meningkatnya risiko gangguan neurodegeneratif.",
      [
        ["Fungsi utama 'sistem glimfatik' di dalam otak menurut bacaan adalah ...", ["Mengatur detak jantung saat olahraga", "Membilas protein limbah metabolik seperti beta-amiloid dari otak saat tidur", "Menyimpan memori jangka panjang", "Memproduksi hormon adrenalin siang hari"], 1, "Kalimat pertama menjelaskan sistem glimfatik mengalirkan cairan serebrospinal untuk membilas limbah metabolik."],
        ["Kapan aktivitas pembersihan limbah otak melalui sistem glimfatik berlangsung optimal?", ["Saat bekerja lembur di depan layar", "Saat manusia tertidur pulas pada malam hari", "Saat berolahraga berat", "Saat makan makanan tinggi gula"], 1, "Kalimat pertama menyebut 'Saat manusia tertidur pulas pada malam hari'."],
        ["Dampak jangka panjang akibat kurang tidur kronis menurut teks adalah ...", ["Peningkatan kecepatan berpikir", "Penurunan daya ingat serta meningkatnya risiko gangguan neurodegeneratif", "Bertambahnya kapasitas paru-paru", "Hilangnya kebutuhan tidur di usia tua"], 1, "Kalimat kedua menyebut penurunan daya ingat dan risiko gangguan neurodegeneratif."],
        ["Nama protein limbah metabolik yang dibilas cairan serebrospinal adalah ...", ["Hemoglobin", "Beta-amiloid", "Klorofil", "Keratin"], 1, "Kalimat pertama menyebut 'protein limbah metabolik seperti beta-amiloid'."],
        ["Simpulan paling tepat dari bacaan tersebut adalah ...", ["Tidur hanyalah waktu istirahat pasif tanpa proses biologis", "Tidur malam berkualitas berperan vital menjaga kebersihan biologis dan kesehatan otak", "Sistem glimfatik hanya aktif pada balita", "Penumpukan beta-amiloid mempercepat belajar"], 1, "Tidur pulas memungkinkan sistem glimfatik membersihkan limbah metabolik otak."]
      ]
    ),
    ...L("TEKS 2 - Pertanian Regeneratif dan Pemulihan Kesehatan Tanah",
      "Berbeda dari pertanian intensif yang mengandalkan pembajakan dalam dan pupuk kimia dosis tinggi hingga memicu erosi lapisan tanah atas (topsoil), pertanian regeneratif memulihkan kesuburan alami lewat praktik tanpa olah tanah (no-till), tanaman penutup tanah (cover crops), dan rotasi tanaman beragam sehingga meningkatkan bahan organik tanah sekaligus menyerap karbon atmosfer.",
      [
        ["Perbedaan utama tujuan pertanian intensif dan pertanian regeneratif adalah ...", ["Pertanian regeneratif berfokus memulihkan kesehatan dan kesuburan alami tanah", "Pertanian intensif melarang traktor dan pupuk", "Pertanian regeneratif hanya menanam satu jenis tanaman", "Pertanian intensif bertujuan memperbanyak cacing"], 0, "Kalimat pertama membandingkan erosi akibat pertanian intensif dengan pemulihan kesuburan pada pertanian regeneratif."],
        ["Tiga praktik utama dalam pertanian regeneratif menurut bacaan adalah ...", ["Pembakaran lahan, irigasi banjir, dan monokultur", "Tanpa olah tanah (no-till), tanaman penutup tanah (cover crops), dan rotasi tanaman beragam", "Pestisida sintetis, pembajakan dalam, dan rumah kaca", "Penebangan hutan dan pemupukan kimia"], 1, "Kalimat pertama menyebut praktik no-till, cover crops, dan rotasi tanaman beragam."],
        ["Manfaat ekologis peningkatan bahan organik tanah pada pertanian regeneratif adalah ...", ["Memicu erosi lapisan atas", "Meningkatkan kesuburan alami sekaligus menyerap karbon atmosfer ke dalam tanah", "Mengurangi curah hujan", "Mengubah air tanah menjadi asin"], 1, "Bagian akhir kalimat menyebut peningkatan bahan organik dan penyerapan karbon atmosfer."],
        ["Istilah 'topsoil' dalam teks tersebut merujuk pada ...", ["Batuan dasar sedalam seratus meter", "Lapisan tanah bagian atas yang paling subur", "Pupuk buatan butiran kasar", "Alat pembajak mesin diesel"], 1, "Dijelaskan sebagai 'lapisan tanah atas (topsoil)' yang rawan tererosi."],
        ["Simpulan paling sesuai dengan isi teks adalah ...", ["Pembajakan terus-menerus menjamin kesuburan abadi", "Pertanian regeneratif menjaga produktivitas lahan sekaligus membantu mitigasi perubahan iklim", "Tanaman penutup menghambat panen", "Karbon tidak dapat disimpan di tanah"], 1, "Pertanian regeneratif menyuburkan tanah sekaligus menyerap karbon atmosfer."]
      ]
    ),
    ...L("TEKS 3 - Fenomena 'Greenwashing' dalam Pemasaran Produk",
      "Seiring meningkatnya kesadaran lingkungan konsumen, sejumlah perusahaan menerapkan greenwashing—strategi pemasaran dengan klaim ramah lingkungan yang menyesatkan demi mendongkrak citra merek. Contohnya meliputi label '100% alami' tanpa sertifikasi independen atau menonjolkan satu fitur hijau kecil untuk menutupi proses produksi yang sangat mencemari lingkungan.",
      [
        ["Pengertian istilah 'greenwashing' berdasarkan teks tersebut adalah ...", ["Proses mendaur ulang sampah menjadi kemasan", "Strategi pemasaran dengan klaim ramah lingkungan yang menyesatkan demi citra merek", "Program penanaman pohon industri berat", "Sertifikasi resmi pemerintah bagi produk hemat energi"], 1, "Kalimat pertama mendefinisikan greenwashing sebagai klaim ramah lingkungan yang menyesatkan."],
        ["Contoh praktik greenwashing yang disebutkan dalam bacaan adalah ...", ["Mencantumkan hasil audit lembaga independen", "Menonjolkan satu fitur hijau kecil untuk menutupi proses produksi yang mencemari lingkungan", "Mengurangi plastik sekali pakai secara nyata", "Mempublikasikan laporan emisi transparan"], 1, "Kalimat kedua menyebut penonjolan satu fitur hijau kecil untuk menutupi polusi produksi."],
        ["Tujuan utama perusahaan melakukan greenwashing menurut teks adalah ...", ["Menurunkan biaya pengolahan limbah", "Mendongkrak citra merek di mata konsumen peduli lingkungan", "Mematuhi standar audit internasional", "Mengedukasi bahaya perubahan iklim"], 1, "Kalimat pertama menyebut 'demi mendongkrak citra merek'."],
        ["Sikap kritis konsumen untuk menghindari jebakan greenwashing berdasarkan teks adalah ...", ["Langsung membeli produk berkemasan hijau", "Memeriksa keberadaan sertifikasi lingkungan dari lembaga independen kredibel", "Mempercayai semua slogan iklan", "Menghindari semua produk harian"], 1, "Klaim tanpa sertifikasi independen adalah ciri greenwashing sehingga verifikasi sertifikat sangat penting."],
        ["Kata 'mendongkrak' pada kalimat pertama bermakna ...", ["menurunkan", "menaikkan atau mengangkat citra secara cepat", "menghapus", "membatasi"], 1, "'Mendongkrak citra merek' berarti mengangkat atau meningkatkan citra merek."]
      ]
    ),
    ...L("TEKS 4 - Sejarah Aksara Nusantara dan Tradisi Naskah Kuno",
      "Kekayaan intelektual Nusantara masa lampau terekam dalam puluhan ribu naskah kuno di atas daun lontar, kulit kayu daluang, bambu, dan kertas menggunakan aksara daerah seperti Jawa, Sunda, Lontara, dan Batak. Manuskrip tersebut memuat ilmu tata pemerintahan, pengobatan tradisional, astronomi pelayaran, hingga sastra epos yang kini didigitalisasi agar tidak punah dimakan usia.",
      [
        ["Media tulis tradisional naskah kuno Nusantara menurut teks adalah ...", ["Pelat logam tembaga dan batu marmer", "Daun lontar, kulit kayu daluang, bambu, dan kertas", "Kain sutra dan kulit kerang", "Papan tanah liat bakar"], 1, "Kalimat pertama menyebut daun lontar, kulit kayu daluang, bambu, dan kertas."],
        ["Bidang ilmu pengetahuan yang tercatat dalam manuskrip Nusantara meliputi ...", ["Teknologi nuklir dan komputasi", "Tata pemerintahan, pengobatan tradisional, astronomi pelayaran, dan sastra epos", "Teknik penerbangan modern", "Arsitektur pencakar langit"], 1, "Kalimat kedua menyebut tata pemerintahan, pengobatan tradisional, astronomi pelayaran, dan sastra epos."],
        ["Tujuan utama digitalisasi naskah kuno pada kalimat terakhir adalah ...", ["Mengganti perpustakaan dengan toko buku", "Melestarikan isi naskah agar pengetahuan di dalamnya tidak punah dimakan usia", "Menghapus aksara daerah di sekolah", "Menjual naskah ke luar negeri"], 1, "Digitalisasi dilakukan 'agar tidak punah dimakan usia'."],
        ["Nama aksara tradisional Nusantara yang disebutkan dalam teks meliputi ...", ["Pallawa dan Devanagari", "Jawa, Sunda, Lontara, dan Batak", "Latin dan Cyrillic", "Kanji dan Hangul"], 1, "Kalimat pertama menyebut aksara daerah seperti Jawa, Sunda, Lontara, dan Batak."],
        ["Simpulan paling tepat berdasarkan isi bacaan adalah ...", ["Masyarakat Nusantara kuno belum mengenal tulisan", "Manuskrip Nusantara merupakan warisan peradaban kaya ilmu yang wajib dilestarikan", "Daun lontar lebih awet daripada arsip digital", "Naskah kuno hanya berisi cerita fiksi"], 1, "Naskah kuno menyimpan beragam pengetahuan penting yang dijaga lewat digitalisasi."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));
  window.BANK_SOAL_MASTER["tka_literasi_sesi10"] = [
    ...L("TEKS 1 - Sistem Subak Bali dan Keadilan Pengelolaan Air",
      "Subak adalah sistem irigasi tradisional Bali yang diakui sebagai Warisan Budaya Dunia UNESCO karena memadukan distribusi air yang adil dengan filosofi Tri Hita Karana—harmoni antara manusia, alam, dan Sang Pencipta. Pembagian air dari hulu ke hilir secara musyawarah serta tanam serempak mampu mencegah konflik air sekaligus memutus siklus hama tikus dan wereng.",
      [
        ["Alasan utama sistem Subak Bali diakui sebagai Warisan Budaya Dunia UNESCO menurut teks adalah ...", ["Menggunakan pompa tenaga surya modern", "Memadukan distribusi air yang adil dengan filosofi harmoni Tri Hita Karana", "Menghasilkan varietas padi tanpa air", "Melarang musyawarah pembagian air"], 1, "Kalimat pertama menjelaskan perpaduan distribusi air adil dengan filosofi Tri Hita Karana."],
        ["Manfaat ekologis dan sosial dari tanam serempak serta musyawarah subak adalah ...", ["Meningkatkan harga jual pupuk", "Mencegah konflik air sekaligus memutus siklus hama tikus dan wereng", "Mengeringkan sungai di wilayah hilir", "Menghapus pupuk organik"], 1, "Kalimat kedua menyebut pencegahan konflik air dan pemutusan siklus hama tikus serta wereng."],
        ["Tiga unsur keharmonisan dalam filosofi 'Tri Hita Karana' meliputi hubungan antara ...", ["Pemerintah, pedagang, dan wisatawan", "Manusia, alam, dan Sang Pencipta", "Hulu sungai, laut, dan gunung", "Petani, nelayan, dan perajin"], 1, "Kalimat pertama menyebut harmoni antara manusia, alam, dan Sang Pencipta."],
        ["Hama pertanian yang siklusnya dapat diputus melalui tanam serempak subak adalah ...", ["Belalang dan ulat grayak", "Tikus dan wereng", "Burung pipit dan keong mas", "Kumbang tanduk dan lalat buah"], 1, "Kalimat kedua menyebut 'hama tikus dan wereng'."],
        ["Simpulan paling tepat dari bacaan tersebut adalah ...", ["Irigasi tradisional tidak relevan di era modern", "Kearifan lokal berbasis musyawarah menciptakan keadilan sosial sekaligus ketahanan ekosistem pertanian", "Pembagian air selalu memicu perselisihan", "Sistem subak hanya diterapkan di kota"], 1, "Subak memadukan keadilan sosial (musyawarah air) dan pengendalian hama alami."]
      ]
    ),
    ...L("TEKS 2 - Baterai Solid-State dan Masa Depan Kendaraan Listrik",
      "Baterai litium-ion konvensional memakai elektrolit cair yang memiliki keterbatasan kepadatan energi serta risiko kebakaran saat rusak atau panas berlebih. Baterai solid-state mengganti elektrolit cair menjadi material padat keramik atau polimer sehingga mampu menyimpan energi dua kali lipat, mengisi daya di bawah lima belas menit, dan lebih tahan suhu tinggi.",
      [
        ["Perbedaan struktural utama antara baterai litium-ion dan baterai solid-state adalah ...", ["Baterai solid-state memakai bensin cadangan", "Baterai solid-state mengganti elektrolit cair dengan material elektrolit padat", "Baterai litium-ion tanpa elektrolit", "Baterai solid-state khusus jam tangan"], 1, "Kalimat kedua menjelaskan penggantian elektrolit cair menjadi material padat keramik atau polimer."],
        ["Tiga keunggulan utama baterai solid-state yang disebutkan dalam bacaan adalah ...", ["Harga sangat murah dan isi ulang sepuluh jam", "Kepadatan energi dua kali lipat, pengisian di bawah 15 menit, dan lebih tahan suhu tinggi", "Tanpa logam dan bertahan seribu tahun", "Menghasilkan listrik sendiri"], 1, "Kalimat kedua menyebut penyimpanan energi dua kali lipat, pengisian di bawah 15 menit, dan tahan suhu tinggi."],
        ["Kelemahan baterai litium-ion berelektrolit cair menurut kalimat pertama adalah ...", ["Tidak bisa diisi ulang", "Keterbatasan kepadatan energi serta risiko kebakaran saat rusak atau terlalu panas", "Ukurannya terlalu kecil", "Hanya berfungsi di negara dingin"], 1, "Kalimat pertama menyebut keterbatasan kepadatan energi serta risiko kebakaran."],
        ["Jenis bahan padat pengganti elektrolit cair pada baterai solid-state adalah ...", ["Kayu atau bambu", "Keramik atau polimer", "Kaca atau batu kapur", "Karet atau kapas"], 1, "Kalimat kedua menyebut 'material padat keramik atau polimer'."],
        ["Simpulan paling sesuai dengan isi teks adalah ...", ["Kendaraan listrik akan ditinggalkan konsumen", "Teknologi baterai solid-state berpotensi mengatasi kendala jarak tempuh, waktu pengisian, dan keamanan kendaraan listrik", "Elektrolit cair lebih aman daripada padat", "Baterai solid-state memperlambat pengisian"], 1, "Kapasitas ganda, pengisian cepat, dan keamanan termal menjawab kendala kendaraan listrik."]
      ]
    ),
    ...L("TEKS 3 - Fenomena 'Impostor Syndrome' di Dunia Akademik dan Kerja",
      "Banyak mahasiswa berprestasi maupun profesional kompeten mengalami impostor syndrome—pola pikir psikologis ketika seseorang meragukan kemampuan dirinya dan merasa kesuksesannya hanyalah keberuntungan semata, bukan buah kerja keras. Akibatnya, penderita sindrom ini kerap memaksakan diri bekerja melampaui batas wajar karena takut dianggap tidak kompeten.",
      [
        ["Inti dari fenomena 'impostor syndrome' menurut bacaan adalah ...", ["Kebiasaan melebih-lebihkan prestasi", "Keraguan terhadap kemampuan diri dan anggapan bahwa kesuksesan hanyalah faktor keberuntungan", "Rasa malas menyelesaikan tugas kuliah", "Keinginan meniru karya orang lain"], 1, "Kalimat pertama mendefinisikan impostor syndrome sebagai keraguan pada diri sendiri dan anggapan keberuntungan semata."],
        ["Dampak perilaku yang sering muncul pada individu dengan impostor syndrome adalah ...", ["Menolak semua tanggung jawab baru", "Bekerja berlebihan melampaui batas wajar karena takut dianggap tidak kompeten", "Menyalahkan rekan kerja atas kegagalan", "Berhenti belajar setelah lulus"], 1, "Kalimat kedua menyebut penderita memaksakan diri bekerja melampaui batas wajar."],
        ["Kelompok yang rentan mengalami impostor syndrome berdasarkan kalimat pertama adalah ...", ["Pelajar yang tidak pernah ujian", "Mahasiswa berprestasi dan tenaga profesional kompeten", "Pekerja yang baru pensiun", "Anak-anak sekolah dasar"], 1, "Kalimat pertama menyebut 'Banyak mahasiswa berprestasi maupun profesional kompeten'."],
        ["Langkah psikologis sehat mengatasi impostor syndrome sesuai konteks teks adalah ...", ["Menyembunyikan pencapaian dari keluarga", "Mencatat bukti objektif pencapaian dan menerima bahwa proses belajar wajar disertai ketidaksempurnaan", "Bekerja tanpa istirahat akhir pekan", "Menghindari kesempatan promosi"], 1, "Melihat bukti objektif kerja keras mematahkan anggapan kesuksesan sekadar keberuntungan."],
        ["Kata 'buah' pada frasa 'bukan buah kerja keras' memiliki makna kiasan ...", ["tanaman", "hasil atau akibat", "modal", "hambatan"], 1, "'Buah kerja keras' bermakna hasil nyata dari usaha dan kecerdasan."]
      ]
    ),
    ...L("TEKS 4 - Restorasi Lahan Gambut Tropis dan Pencegahan Kebakaran",
      "Lahan gambut tropis yang sehat bersifat jenuh air dan menyimpan cadangan karbon bawah tanah jauh lebih padat dibanding hutan mineral biasa. Namun, kanal drainase mengeringkan gambut sehingga rawan terbakar saat kemarau, sehingga restorasi melalui pembasahan kembali (rewetting) lewat sekat kanal dan penanaman vegetasi asli efektif menekan kebakaran berulang.",
      [
        ["Mengapa lahan gambut yang dikeringkan kanal drainase menjadi sangat rawan terbakar?", ["Air kanal berubah menjadi minyak", "Permukaan gambut kehilangan kejenuhan airnya sehingga mengering saat kemarau", "Pohon gambut menghasilkan gas api", "Curah hujan meningkat tajam"], 1, "Kalimat kedua menjelaskan kanal drainase mengeringkan gambut sehingga mudah terbakar."],
        ["Dua langkah restorasi lahan gambut yang disebutkan dalam bacaan adalah ...", ["Pengerukan kanal lebih dalam dan pembakaran", "Pembasahan kembali (rewetting) dengan sekat kanal dan penanaman vegetasi asli", "Pengaspalan jalan di atas rawa", "Penebangan pohon tua dan pengeringan total"], 1, "Kalimat kedua menyebut pembasahan kembali lewat sekat kanal dan penanaman vegetasi asli."],
        ["Keunggulan ekologis lahan gambut tropis sehat dibanding hutan mineral biasa adalah ...", ["Menghasilkan kayu dalam sebulan", "Menyimpan cadangan karbon bawah tanah dengan kepadatan jauh lebih tinggi", "Tidak butuh air hujan", "Bebas mikroorganisme"], 1, "Kalimat pertama menyebut penyimpanan cadangan karbon bawah tanah jauh lebih padat."],
        ["Istilah 'rewetting' dalam restorasi gambut merujuk pada ...", ["Pengeringan rawa untuk permukiman", "Pembasahan kembali lahan gambut yang mengering agar tetap jenuh air", "Penyiraman taman kota", "Pembuatan tambak ikan pesisir"], 1, "Teks menyebut 'pembasahan kembali (rewetting) lewat sekat kanal'."],
        ["Simpulan paling tepat dari paragraf tersebut adalah ...", ["Kanal drainase menyuburkan gambut", "Menjaga kelembapan alami lahan gambut melalui rewetting adalah kunci mencegah kebakaran dan menjaga simpanan karbon", "Kabut asap tidak terkait gambut", "Vegetasi asli tidak bisa tumbuh lagi"], 1, "Restorasi kelembapan gambut memulihkan ekosistem dan mencegah kebakaran berulang."]
      ]
    )
  ];
})();
