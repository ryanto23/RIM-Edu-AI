// File: soal/tka_smp_literasi_master.js
// Master Bank Soal TKA SMP - Literasi (10 Sesi x 20 Soal = 200 Soal)
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi1"] = [
    ...L("TEKS 1 - Taman Baca Masyarakat dan Minat Literasi Remaja",
      "Di tengah gempuran hiburan gawai, hadirnya Taman Baca Masyarakat (TBM) di sudut kampung menjadi ruang alternatif bagi remaja untuk membaca buku cerita dan berdiskusi secara gratis. Pengelola TBM rutin mengadakan bedah buku setiap akhir pekan agar generasi muda terbiasa berpikir kritis dan tidak mudah terpengaruh kabar bohong di internet.",
      [
        ["Tujuan utama didirikannya Taman Baca Masyarakat (TBM) menurut teks adalah ...", ["Menjual buku bekas dengan harga murah", "Menyediakan ruang membaca dan berdiskusi gratis bagi remaja di tengah gempuran gawai", "Menggantikan fungsi sekolah formal", "Menjadi tempat bermain gim daring bersama"], 1, "Kalimat pertama menjelaskan TBM hadir sebagai ruang alternatif membaca buku dan berdiskusi gratis."],
        ["Kegiatan rutin yang diadakan pengelola TBM setiap akhir pekan adalah ...", ["Lomba lari maraton", "Bedah buku bersama remaja", "Pameran lukisan abstrak", "Pemutaran film bioskop"], 1, "Kalimat kedua menyebut mengadakan bedah buku setiap akhir pekan."],
        ["Manfaat yang diharapkan dari kegiatan bedah buku bagi generasi muda adalah ...", ["Menghafal seluruh isi kamus", "Terbiasa berpikir kritis dan tidak mudah percaya kabar bohong", "Menghabiskan waktu luang di jalan raya", "Membeli gawai keluaran terbaru"], 1, "Kalimat kedua menyebut agar terbiasa berpikir kritis dan tidak mudah terpengaruh kabar bohong."],
        ["Makna frasa 'gempuran hiburan gawai' dalam bacaan adalah ...", ["Kerusakan perangkat telepon genggam", "Maraknya berbagai hiburan digital di ponsel yang menyita perhatian remaja", "Larangan membawa ponsel ke kampung", "Harga gawai yang semakin mahal"], 1, "Gempuran hiburan gawai merujuk pada derasnya arus hiburan digital pada ponsel/gawai."],
        ["Simpulan paling tepat dari bacaan tersebut adalah ...", ["Remaja masa kini tidak suka membaca buku sama sekali", "TBM dan kegiatan bedah buku berperan strategis membangun budaya literasi dan daya kritis remaja", "Kabar bohong hanya menyebar melalui buku cetak", "Akhir pekan sebaiknya diisi dengan bermain ponsel"], 1, "TBM memfasilitasi budaya baca dan diskusi yang melatih daya kritis."]
      ]
    ),
    ...L("TEKS 2 - Hutan Mangrove dan Perlindungan Abrasi Pesisir",
      "Akar tunjang tanaman mangrove yang rapat dan kokoh mampu meredam energi gelombang laut sehingga garis pantai terlindungi dari pengikisan atau abrasi. Selain menjadi benteng alami pesisir, hutan mangrove juga menjadi tempat pemijahan berbagai jenis ikan, udang, dan kepiting yang menopang perekonomian nelayan setempat.",
      [
        ["Fungsi fisik akar tunjang tanaman mangrove bagi wilayah pantai adalah ...", ["Menambah kadar garam air laut", "Meredam energi gelombang laut sehingga mencegah abrasi pantai", "Mempercepat aliran sungai ke samudra", "Mengeringkan rawa di sekitar muara"], 1, "Kalimat pertama menjelaskan akar tunjang meredam energi gelombang sehingga mencegah abrasi."],
        ["Manfaat ekologis dan ekonomi hutan mangrove bagi nelayan menurut teks adalah ...", ["Menyediakan kayu bakar dalam jumlah tak terbatas", "Menjadi tempat pemijahan ikan, udang, dan kepiting yang menopang penghasilan nelayan", "Menjadi lahan tambak garam raksasa", "Menghalangi perahu nelayan melaut"], 1, "Kalimat kedua menyebut mangrove sebagai tempat pemijahan biota laut penopang ekonomi nelayan."],
        ["Istilah 'abrasi' pada kalimat pertama bermakna ...", ["Pengendapan lumpur di sungai", "Pengikisan daratan pantai akibat hempasan gelombang laut", "Pencemaran air laut oleh minyak", "Pembentukan pulau karang baru"], 1, "Dijelaskan sebagai 'pengikisan atau abrasi' garis pantai."],
        ["Apa yang dimaksud dengan 'tempat pemijahan' dalam bacaan tersebut?", ["Tempat ikan mencari makan di laut dalam", "Tempat berkembang biak dan bertelurnya ikan serta biota laut", "Lokasi penangkapan ikan dengan jaring besar", "Pasar pelelangan ikan di pelabuhan"], 1, "Pemijahan adalah proses bertelur dan berkembang biaknya ikan/udang/kepiting."],
        ["Dampak yang dapat terjadi jika hutan mangrove di pesisir ditebang habis adalah ...", ["Hasil tangkapan kepiting meningkat tajam", "Pantai menjadi rawan abrasi dan populasi ikan pesisir menurun", "Gelombang laut menjadi semakin tenang", "Permukiman warga pesisir semakin aman"], 1, "Hilangnya mangrove menghilangkan penahan ombak dan habitat pemijahan biota laut."]
      ]
    ),
    ...L("TEKS 3 - Sepatu Baru dan Kejujuran Raka",
      "Raka sangat menginginkan sepatu futsal baru, namun ia tahu penghasilan ayahnya sebagai penjahit pas-pasan untuk kebutuhan keluarga. Suatu sore, Raka menemukan dompet berisi uang tunai cukup banyak di jalan pulang sekolah. Tanpa ragu, Raka mengantarkan dompet tersebut ke alamat pemiliknya yang tertera pada kartu identitas di dalamnya.",
      [
        ["Konflik batin atau tantangan yang dihadapi Raka dalam cerita tersebut adalah ...", ["Ia tersesat saat pulang dari sekolah", "Ia sangat ingin membeli sepatu futsal namun menemukan dompet berisi banyak uang di jalan", "Ia dimarahi ayahnya karena sepatu lamanya rusak", "Ia kehilangan uang tabungan di sekolah"], 1, "Raka sedang membutuhkan uang untuk sepatu baru tetapi justru menemukan dompet orang lain."],
        ["Bagaimana cara Raka menemukan pemilik dompet tersebut?", ["Mengumumkannya di lapangan bola", "Melihat alamat pemilik pada kartu identitas di dalam dompet", "Menitipkannya kepada teman sebangku", "Menunggu pemilik dompet mencarinya di jalan"], 1, "Kalimat ketiga menyebut Raka melihat alamat pemilik yang tertera pada kartu identitas."],
        ["Watak utama yang ditunjukkan tokoh Raka berdasarkan bacaan adalah ...", ["Serakah dan ceroboh", "Jujur, berempati, dan bertanggung jawab", "Pemalu dan ragu-ragu", "Sombong dan keras kepala"], 1, "Meski membutuhkan uang, Raka tetap mengembalikan dompet kepada pemiliknya tanpa ragu."],
        ["Pekerjaan ayah Raka yang disebutkan dalam teks adalah ...", ["Pedagang sayur", "Penjahit", "Sopir bus", "Petani padi"], 1, "Kalimat pertama menyebut 'penghasilan ayahnya sebagai penjahit'."],
        ["Amanat yang paling tepat dari penggalan cerpen tersebut adalah ...", ["Keinginan pribadi harus diutamakan dengan cara apa pun", "Kejujuran dan integritas jauh lebih berharga daripada keinginan materi", "Menemukan barang di jalan berarti menjadi milik kita", "Kita tidak perlu membantu orang yang tidak dikenal"], 1, "Raka menjunjung tinggi kejujuran di atas keinginan pribadinya."]
      ]
    ),
    ...L("TEKS 4 - Polusi Cahaya di Wilayah Perkotaan",
      "Penggunaan lampu penerangan jalan dan papan reklame yang berlebihan pada malam hari menimbulkan polusi cahaya di kota-kota besar. Cahaya buatan yang mengarah ke langit tidak hanya menghalangi pandangan manusia untuk mengamati bintang, tetapi juga mengganggu jam biologis burung bermigrasi serta penyu yang baru menetas di pantai.",
      [
        ["Penyebab utama terjadinya polusi cahaya di perkotaan menurut teks adalah ...", ["Kebakaran hutan di sekitar kota", "Penggunaan lampu jalan dan papan reklame yang berlebihan pada malam hari", "Pantulan sinar bulan di gedung kaca", "Kurangnya penerangan di taman kota"], 1, "Kalimat pertama menyebut lampu penerangan jalan dan papan reklame yang berlebihan."],
        ["Dampak polusi cahaya bagi bidang astronomi atau pengamatan alam adalah ...", ["Memperjelas penampakan galaksi di malam hari", "Menghalangi pandangan manusia untuk mengamati bintang di langit malam", "Menurunkan suhu udara perkotaan", "Mempercepat terbitnya matahari"], 1, "Kalimat kedua menyebut menghalangi pandangan manusia untuk mengamati bintang."],
        ["Dua kelompok satwa yang jam biologis dan perilakunya terganggu akibat polusi cahaya adalah ...", ["Kucing dan anjing peliharaan", "Burung bermigrasi dan penyu yang baru menetas", "Ikan lele dan katak sawah", "Kupu-kupu dan lebah madu"], 1, "Kalimat kedua menyebut burung bermigrasi serta penyu yang baru menetas."],
        ["Langkah bijak mengurangi polusi cahaya yang tersirat dari bacaan adalah ...", ["Mematikan seluruh listrik kota setiap malam", "Mengarahkan kap lampu ke bawah dan mematikan reklame saat tengah malam", "Memasang lampu sorot ke arah langit", "Mengganti semua lampu dengan api unggun"], 1, "Cahaya yang tidak mengarah ke langit mengurangi polusi cahaya."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Cara mengamati rasi bintang di desa", "Penyebab dan dampak negatif polusi cahaya bagi manusia serta satwa", "Manfaat papan reklame bagi ekonomi kota", "Kehidupan penyu di pantai berpasir"], 1, "Teks menguraikan sumber polusi cahaya dan dampaknya pada pengamatan langit serta satwa."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi2"] = [
    ...L("TEKS 1 - Ekosistem Sungai dan Pencemaran Limbah Rumah Tangga",
      "Sungai yang mengalir membelah permukiman sering kali tercemar limbah detergen dan sampah rumah tangga yang dibuang sembarangan. Kadar fosfat dari detergen memicu ledakan pertumbuhan eceng gondok yang menutupi permukaan air sehingga sinar matahari terhalang dan kadar oksigen terlarut menurun drastis bagi ikan.",
      [
        ["Zat pencemar dari limbah detergen yang memicu pertumbuhan eceng gondok berlebihan adalah ...", ["Kalsium", "Fosfat", "Merkuri", "Karbon monoksida"], 1, "Kalimat kedua menyebut kadar fosfat dari detergen memicu ledakan pertumbuhan eceng gondok."],
        ["Mengapa eceng gondok yang menutupi permukaan sungai membahayakan ikan?", ["Karena daunnya beracun bagi manusia", "Karena menghalangi sinar matahari dan menurunkan kadar oksigen terlarut", "Karena menyerap seluruh air sungai dalam sehari", "Karena membuat arus sungai menjadi sangat deras"], 1, "Kalimat kedua menjelaskan sinar matahari terhalang dan kadar oksigen terlarut menurun drastis."],
        ["Dua sumber pencemaran sungai yang disebutkan dalam bacaan adalah ...", ["Limbah pertambangan emas dan tumpahan minyak kapal", "Limbah detergen dan sampah rumah tangga", "Asap kendaraan bermotor dan hujan asam", "Pupuk organik dan dedaunan kering"], 1, "Kalimat pertama menyebut limbah detergen dan sampah rumah tangga."],
        ["Solusi paling tepat untuk mencegah pencemaran sungai sesuai bacaan adalah ...", ["Membuang sampah ke sungai saat hujan deras", "Mengolah limbah cair rumah tangga dan membuang sampah pada tempatnya", "Menanam lebih banyak eceng gondok di sungai", "Menutup aliran sungai dengan beton"], 1, "Menghentikan pembuangan sampah dan mengolah limbah detergen menjaga kejernihan dan oksigen sungai."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Manfaat eceng gondok untuk kerajinan", "Dampak pencemaran limbah rumah tangga dan detergen terhadap ekosistem sungai", "Cara membudidayakan ikan air tawar", "Penyebab banjir di hilir sungai"], 1, "Teks menjelaskan alur pencemaran detergen hingga menurunnya oksigen bagi ikan."]
      ]
    ),
    ...L("TEKS 2 - Jejak Digital dan Etika Berkomentar di Internet",
      "Setiap unggahan, foto, maupun komentar yang kita kirimkan di media sosial akan meninggalkan jejak digital yang sulit dihapus sepenuhnya. Remaja perlu membiasakan sikap berpikir sebelum mengunggah (think before posting) agar tidak terjerat perundungan siber dan menjaga reputasi diri di masa depan saat melamar pendidikan maupun pekerjaan.",
      [
        ["Pengertian 'jejak digital' berdasarkan bacaan tersebut adalah ...", ["Jejak kaki di atas pasir pantai", "Rekam jejak unggahan, foto, dan komentar di internet yang sulit dihapus", "Riwayat perjalanan menggunakan peta daring", "Kata sandi untuk masuk ke akun media sosial"], 1, "Kalimat pertama menjelaskan setiap unggahan dan komentar meninggalkan jejak digital yang sulit dihapus."],
        ["Manfaat membiasakan sikap berpikir sebelum mengunggah konten menurut teks adalah ...", ["Menambah jumlah pengikut secara instan", "Menghindari perundungan siber dan menjaga reputasi diri di masa depan", "Mempercepat koneksi jaringan seluler", "Menghapus seluruh akun media sosial"], 1, "Kalimat kedua menyebut mencegah perundungan siber dan menjaga reputasi diri."],
        ["Kapan jejak digital masa remaja dapat memengaruhi kehidupan seseorang menurut bacaan?", ["Saat tidur malam hari", "Saat melamar pendidikan lanjutan maupun pekerjaan di masa depan", "Saat membeli paket data internet", "Saat mengganti nomor telepon"], 1, "Bagian akhir kalimat kedua menyebut saat melamar pendidikan maupun pekerjaan."],
        ["Kata 'reputasi' dalam konteks teks tersebut bermakna ...", ["harga perangkat gawai", "nama baik atau citra seseorang di mata orang lain", "kecepatan mengetik pesan", "jumlah foto yang diunggah"], 1, "'Menjaga reputasi diri' berarti menjaga nama baik seseorang."],
        ["Simpulan yang paling tepat dari teks tersebut adalah ...", ["Komentar di internet tidak memiliki dampak nyata", "Kebijaksanaan dan etika dalam bermedia sosial penting untuk melindungi masa depan pengguna", "Semua foto pribadi harus diunggah ke publik", "Perundungan siber hanya terjadi pada orang dewasa"], 1, "Jejak digital bersifat permanen sehingga membutuhkan etika bermedia sosial sejak remaja."]
      ]
    ),
    ...L("TEKS 3 - Panggung Puisi di Malam Perpisahan",
      "Tangan Nabila gemetar memegang kertas puisi di balik tirai panggung aula sekolah. Sejak kecil ia selalu gugup berbicara di depan banyak orang, tetapi ia bertekad mempersembahkan puisi ciptaannya sendiri untuk guru-guru yang telah membimbingnya. Begitu sorot lampu menyala dan ia mulai membacakan bait pertama dengan suara mantap, tepuk tangan meriah pun menggema di seluruh ruangan.",
      [
        ["Perasaan yang dialami Nabila sebelum naik ke atas panggung adalah ...", ["Sangat marah dan kecewa", "Gugup hingga tangannya gemetar", "Bosan dan mengantuk", "Sombong dan meremehkan penonton"], 1, "Kalimat pertama dan kedua menyebut tangan Nabila gemetar dan ia selalu gugup."],
        ["Motivasi utama yang mendorong Nabila tetap tampil membacakan puisi adalah ...", ["Ingin mendapatkan hadiah uang tunai", "Bertekad mempersembahkan puisi ciptaannya untuk guru-guru yang telah membimbingnya", "Dipaksa oleh ketua kelas", "Ingin menyaingi penampilan temannya"], 1, "Kalimat kedua menjelaskan tekadnya mempersembahkan puisi untuk para guru."],
        ["Bagaimana perubahan keadaan Nabila setelah mulai membacakan bait pertama?", ["Ia lupa seluruh isi puisinya", "Suaranya terdengar mantap dan mendapat tepuk tangan meriah", "Ia langsung berlari turun dari panggung", "Lampu aula tiba-tiba padam"], 1, "Kalimat ketiga menyebut ia membacakan bait pertama dengan suara mantap dan disambut tepuk tangan."],
        ["Latar tempat terjadinya peristiwa dalam penggalan cerita tersebut adalah ...", ["Lapangan upacara", "Aula sekolah", "Perpustakaan kota", "Ruang kelas tujuh"], 1, "Kalimat pertama menyebut 'panggung aula sekolah'."],
        ["Amanat yang dapat dipetik dari kisah Nabila adalah ...", ["Rasa gugup harus membuat kita menyerah", "Keberanian dan ketulusan niat mampu mengalahkan rasa takut dalam diri", "Membaca puisi hanya cocok bagi orang yang tidak pernah gugup", "Tepuk tangan penonton tidak penting saat tampil"], 1, "Tekad kuat Nabila berhasil mengatasi kegugupannya."]
      ]
    ),
    ...L("TEKS 4 - Sejarah Terusan Suez dan Jalur Perdagangan Dunia",
      "Sebelum Terusan Suez di Mesir dibuka pada tahun 1869, kapal dagang dari Eropa menuju Asia harus berlayar memutari ujung selatan Benua Afrika yang memakan waktu berbulan-bulan dan berisiko tinggi. Terusan buatan sepanjang 193 kilometer yang menghubungkan Laut Mediterania dan Laut Merah ini memangkas jarak pelayaran hingga ribuan kilometer dan mempercepat arus perdagangan global.",
      [
        ["Dua perairan utama yang dihubungkan oleh Terusan Suez menurut teks adalah ...", ["Samudra Pasifik dan Samudra Atlantik", "Laut Mediterania dan Laut Merah", "Laut Jawa dan Selat Malaka", "Laut Hitam dan Laut Kaspia"], 1, "Kalimat kedua menyebut menghubungkan Laut Mediterania dan Laut Merah."],
        ["Rute pelayaran kapal dagang Eropa menuju Asia sebelum tahun 1869 adalah ...", ["Melewati Kutub Utara", "Memutari ujung selatan Benua Afrika", "Menyeberangi Gurun Sahara", "Melintasi Terusan Panama"], 1, "Kalimat pertama menyebut harus berlayar memutari ujung selatan Benua Afrika."],
        ["Berapa panjang Terusan Suez yang disebutkan dalam bacaan?", ["93 kilometer", "193 kilometer", "293 kilometer", "393 kilometer"], 1, "Kalimat kedua menyebut 'Terusan buatan sepanjang 193 kilometer'."],
        ["Manfaat ekonomi utama dibukanya Terusan Suez bagi dunia pelayaran adalah ...", ["Menghapus seluruh biaya pengiriman barang", "Memangkas jarak dan waktu tempuh sehingga mempercepat perdagangan global", "Menghentikan pembuatan kapal uap", "Mengubah arah angin musim"], 1, "Kalimat kedua menjelaskan pemangkasan jarak ribuan kilometer dan percepatan perdagangan."],
        ["Kata 'memangkas' pada kalimat kedua memiliki makna yang paling dekat dengan ...", ["memperpanjang", "mengurangi atau memotong secara signifikan", "menghambat", "menggandakan"], 1, "'Memangkas jarak pelayaran' berarti mengurangi atau memotong jarak tempuh."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi3"] = [
    ...L("TEKS 1 - Lubang Resapan Biopori di Halaman Sekolah",
      "Permukaan halaman yang tertutup beton menyulitkan air hujan meresap ke dalam tanah sehingga memicu genangan saat hujan lebat. Pembuatan lubang resapan biopori—lubang silindris vertikal sedalam satu meter yang diisi sampah organik—mempercepat penyerapan air hujan sekaligus mengundang cacing tanah membentuk rongga alami penyubur tanah.",
      [
        ["Penyebab utama munculnya genangan air di halaman saat hujan lebat menurut teks adalah ...", ["Curah hujan yang sangat kecil", "Permukaan tanah yang tertutup beton sehingga air sulit meresap", "Terlalu banyak pohon rindang", "Saluran air yang terlalu dalam"], 1, "Kalimat pertama menyebut permukaan yang tertutup beton menyulitkan air meresap."],
        ["Bahan yang dimasukkan ke dalam lubang resapan biopori berdasarkan teks adalah ...", ["Pasir dan kerikil sungai", "Sampah organik seperti daun kering", "Pecahan batu bata merah", "Kantong plastik bekas"], 1, "Kalimat kedua menyebut lubang diisi sampah organik."],
        ["Peran cacing tanah dalam lubang resapan biopori menurut bacaan adalah ...", ["Memakan akar tanaman hias", "Membentuk rongga alami yang mempercepat penyerapan air dan menyuburkan tanah", "Menutup lubang agar air tidak masuk", "Mengubah tanah menjadi batu kapur"], 1, "Kalimat kedua menyebut cacing tanah membentuk rongga alami penyubur tanah."],
        ["Kedalaman lubang resapan biopori yang disebutkan dalam teks adalah ...", ["20 sentimeter", "50 sentimeter", "Satu meter", "Lima meter"], 2, "Kalimat kedua menyebut 'lubang silindris vertikal sedalam satu meter'."],
        ["Simpulan yang paling tepat dari paragraf tersebut adalah ...", ["Betonisasi halaman sekolah tidak memiliki dampak negatif", "Lubang resapan biopori efektif mencegah genangan air sekaligus mengolah sampah organik", "Sampah organik sebaiknya dibakar di halaman", "Biopori hanya dapat dibuat di pegunungan"], 1, "Biopori mengatasi genangan air sekaligus memanfaatkan sampah organik."]
      ]
    ),
    ...L("TEKS 2 - Manfaat Bahasa Daerah dan Pelestariannya di Era Global",
      "Indonesia memiliki lebih dari tujuh ratus bahasa daerah yang menyimpan kearifan lokal, peribahasa, dan sejarah masyarakat penuturnya. Namun, pergeseran kebiasaan komunikasi membuat sebagian bahasa daerah terancam punah karena jarang dituturkan oleh generasi muda, sehingga pembelajaran muatan lokal di sekolah dan keluarga menjadi sangat penting.",
      [
        ["Kekayaan budaya yang tersimpan di dalam bahasa daerah menurut bacaan adalah ...", ["Teknologi mesin industri modern", "Kearifan lokal, peribahasa, dan sejarah masyarakat penuturnya", "Rumus matematika tingkat lanjut", "Peta jalur perdagangan luar negeri"], 1, "Kalimat pertama menyebut kearifan lokal, peribahasa, dan sejarah masyarakat penuturnya."],
        ["Mengapa sebagian bahasa daerah di Indonesia terancam punah?", ["Karena terlalu sulit ditulis dengan huruf latin", "Karena jarang dituturkan oleh generasi muda akibat pergeseran kebiasaan komunikasi", "Karena dilarang digunakan di tempat umum", "Karena jumlah penduduk desa terus bertambah"], 1, "Kalimat kedua menyebut jarang dituturkan oleh generasi muda."],
        ["Dua lingkungan utama yang berperan penting melestarikan bahasa daerah sesuai teks adalah ...", ["Pasar tradisional dan terminal bus", "Sekolah melalui muatan lokal dan lingkungan keluarga", "Stadion olahraga dan pusat perbelanjaan", "Kantor pos dan stasiun kereta"], 1, "Kalimat kedua menyebut pembelajaran muatan lokal di sekolah dan keluarga."],
        ["Berapa jumlah bahasa daerah di Indonesia yang disebutkan pada kalimat pertama?", ["Kurang dari seratus bahasa", "Tepat lima ratus bahasa", "Lebih dari tujuh ratus bahasa", "Lebih dari dua ribu bahasa"], 2, "Kalimat pertama menyebut 'lebih dari tujuh ratus bahasa daerah'."],
        ["Sikap generasi muda yang paling mendukung pelestarian bahasa daerah adalah ...", ["Malu menggunakan bahasa daerah di rumah", "Bangga bertutur bahasa daerah bersama keluarga sambil tetap menguasai bahasa Indonesia", "Mengganti seluruh kosakata daerah dengan bahasa asing", "Menghapus pelajaran muatan lokal di sekolah"], 1, "Menggunakan bahasa daerah dalam keseharian menjaga kelestariannya."]
      ]
    ),
    ...L("TEKS 3 - Layang-Layang Bambu di Bukit Angin",
      "Selama seminggu penuh, Dimas meraut bilah bambu dan menempelkan kertas minyak dengan lem kanji untuk mengikuti lomba layang-layang desa. Saat angin sore bertiup kencang, tali layang-layangnya tiba-tiba tersangkut di dahan pohon jambu milik Pak RT. Alih-alih menarik paksa hingga merusak dahan, Dimas meminta izin dengan sopan untuk mengambilnya menggunakan galah panjang.",
      [
        ["Bahan tradisional yang digunakan Dimas untuk membuat layang-layangnya adalah ...", ["Pipa paralon dan kain parasut", "Bilah bambu, kertas minyak, dan lem kanji", "Kawat besi dan plastik tebal", "Kayu jati dan kertas karton"], 1, "Kalimat pertama menyebut bilah bambu, kertas minyak, dan lem kanji."],
        ["Masalah yang dialami Dimas saat menerbangkan layang-layangnya adalah ...", ["Kertas minyaknya robek terkena hujan", "Tali layang-layangnya tersangkut di dahan pohon jambu Pak RT", "Angin tidak bertiup sama sekali", "Layang-layangnya hilang dicuri orang"], 1, "Kalimat kedua menyebut tali layang-layang tersangkut di dahan pohon jambu milik Pak RT."],
        ["Tindakan terpuji yang dilakukan Dimas saat menghadapi masalah tersebut adalah ...", ["Memanjat pagar rumah tanpa izin", "Meminta izin dengan sopan kepada Pak RT dan memakai galah panjang agar tidak merusak pohon", "Menarik tali sekuat tenaga sampai dahan patah", "Melempari pohon jambu dengan batu"], 1, "Kalimat ketiga menyebut Dimas meminta izin sopan dan memakai galah panjang."],
        ["Watak tokoh Dimas yang tergambar dalam penggalan cerita tersebut adalah ...", ["Terburu-buru dan pemarah", "Sabar, sopan, dan menghargai hak milik orang lain", "Pemalas dan mudah menyerah", "Ceroboh dan tidak peduli lingkungan"], 1, "Dimas sabar membuat layang-layang dan sopan meminta izin saat tersangkut."],
        ["Amanat yang dapat dipetik dari kisah Dimas adalah ...", ["Menang lomba adalah hal terpenting dengan cara apa pun", "Kesopanan dan kepedulian terhadap lingkungan sekitar harus dijaga saat bermain", "Bermain layang-layang sebaiknya di dekat kabel listrik", "Pohon milik tetangga boleh dipatahkan"], 1, "Etika meminta izin dan menjaga tanaman tetangga menjadi teladan utama."]
      ]
    ),
    ...L("TEKS 4 - Fenomena El Nino dan Dampaknya terhadap Iklim Indonesia",
      "El Nino merupakan fenomena pemanasan suhu muka laut di Samudra Pasifik bagian tengah dan timur yang mengubah pola sirkulasi atmosfer global. Bagi wilayah Indonesia, kemunculan El Nino umumnya memicu penurunan curah hujan drastis dan musim kemarau yang lebih panjang sehingga berisiko menyebabkan kekeringan lahan pertanian serta kebakaran hutan.",
      [
        ["Penyebab utama terjadinya fenomena El Nino menurut bacaan adalah ...", ["Mencairnya es di Kutub Selatan secara tiba-tiba", "Pemanasan suhu muka laut di Samudra Pasifik bagian tengah dan timur", "Letusan gunung berapi di Samudra Hindia", "Perubahan arah rotasi bumi"], 1, "Kalimat pertama menyebut pemanasan suhu muka laut di Samudra Pasifik tengah dan timur."],
        ["Dampak langsung El Nino terhadap kondisi cuaca di Indonesia adalah ...", ["Curah hujan meningkat tajam sepanjang tahun", "Penurunan curah hujan drastis dan musim kemarau lebih panjang", "Suhu udara turun hingga membeku", "Terjadinya badai salju di pegunungan"], 1, "Kalimat kedua menyebut penurunan curah hujan drastis dan kemarau lebih panjang."],
        ["Dua bencana ekologis yang berisiko muncul akibat El Nino di Indonesia adalah ...", ["Tsunami dan gempa tektonik", "Kekeringan lahan pertanian dan kebakaran hutan", "Tanah longsor dan banjir bandang", "Angin puting beliung dan abrasi"], 1, "Kalimat kedua menyebut kekeringan lahan pertanian serta kebakaran hutan."],
        ["Langkah antisipasi petani yang paling tepat menghadapi prakiraan El Nino adalah ...", ["Menanam tanaman yang membutuhkan genangan air sangat tinggi", "Membuat embung penampung air dan memilih varietas tanaman tahan kering", "Membakar sisa jerami di tengah musim kemarau", "Mengosongkan seluruh saluran irigasi"], 1, "Menampung cadangan air dan memilih tanaman hemat air mengurangi risiko gagal panen."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Perbedaan musim hujan dan kemarau di Eropa", "Pengertian fenomena El Nino dan dampaknya terhadap kekeringan di Indonesia", "Cara memadamkan kebakaran hutan gambut", "Letak geografis Samudra Pasifik"], 1, "Teks menjelaskan definisi El Nino serta dampaknya bagi iklim dan pertanian Indonesia."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi4"] = [
    ...L("TEKS 1 - Batik Tulis Madura dan Kearifan Warna Alami",
      "Perajin batik tulis di Madura mempertahankan teknik pewarnaan alami menggunakan ekstrak kulit kayu tingi, daun tarum, dan mengkudu untuk menghasilkan warna merah serta biru yang khas. Selain ramah lingkungan karena tidak mencemari aliran sungai, batik tulis dengan pewarna alami memiliki nilai seni tinggi karena setiap goresan cantingnya dikerjakan secara tekun oleh tangan perajin.",
      [
        ["Bahan alami yang digunakan perajin batik Madura untuk menghasilkan warna merah dan biru adalah ...", ["Cat tembok dan tinta cetak", "Ekstrak kulit kayu tingi, daun tarum, dan mengkudu", "Serbuk arang dan kapur sirih", "Bunga mawar dan daun pandan"], 1, "Kalimat pertama menyebut ekstrak kulit kayu tingi, daun tarum, dan mengkudu."],
        ["Keunggulan lingkungan dari penggunaan pewarna alami pada batik tulis adalah ...", ["Mempercepat pengeringan kain di malam hari", "Ramah lingkungan karena limbahnya tidak mencemari aliran sungai", "Menghilangkan kebutuhan air saat mencuci kain", "Membuat kain tahan terhadap api"], 1, "Kalimat kedua menyebut ramah lingkungan karena tidak mencemari aliran sungai."],
        ["Mengapa batik tulis memiliki nilai seni yang tinggi menurut bacaan?", ["Karena dicetak menggunakan mesin pabrik modern", "Karena setiap goresan cantingnya dikerjakan secara tekun oleh tangan perajin", "Karena harganya sangat murah", "Karena hanya dibuat satu warna"], 1, "Kalimat kedua menyebut setiap goresan canting dikerjakan secara tekun oleh tangan perajin."],
        ["Alat tradisional yang digunakan perajin untuk menggoreskan malam pada batik tulis adalah ...", ["Kuas lukis", "Canting", "Pahat kayu", "Jarum sulam"], 1, "Kalimat kedua menyebut 'goresan cantingnya'."],
        ["Simpulan yang paling tepat dari bacaan tersebut adalah ...", ["Pewarna sintetis lebih aman bagi ekosistem sungai", "Batik tulis Madura berpewarna alami memadukan kelestarian lingkungan dan keindahan seni tradisional", "Batik tulis hanya dibuat di luar Pulau Jawa", "Daun tarum tidak dapat menghasilkan warna pada kain"], 1, "Penggunaan bahan alami menjaga lingkungan sekaligus mempertahankan nilai seni kriya."]
      ]
    ),
    ...L("TEKS 2 - Sampah Elektronik (E-Waste) dan Bahaya Logam Berat",
      "Perangkat elektronik rusak seperti baterai bekas, telepon genggam usang, dan lampu neon mengandung logam berat berbahaya seperti timbal, merkuri, dan kadmium. Jika sampah elektronik dibuang bercampur dengan sampah rumah tangga biasa, zat beracun tersebut dapat meresap ke air tanah dan membahayakan kesehatan saraf maupun ginjal manusia.",
      [
        ["Tiga jenis logam berat berbahaya yang terkandung dalam sampah elektronik menurut teks adalah ...", ["Besi, tembaga, dan aluminium", "Timbal, merkuri, dan kadmium", "Emas, perak, dan platina", "Kalsium, kalium, dan magnesium"], 1, "Kalimat pertama menyebut timbal, merkuri, dan kadmium."],
        ["Dampak kesehatan jika logam berat dari e-waste mencemari air tanah adalah ...", ["Meningkatkan kekebalan tubuh manusia", "Membahayakan fungsi saraf dan ginjal manusia", "Mempercepat pertumbuhan tulang", "Menyehatkan saluran pencernaan"], 1, "Kalimat kedua menyebut membahayakan kesehatan saraf maupun ginjal manusia."],
        ["Contoh barang yang termasuk sampah elektronik pada bacaan adalah ...", ["Sisa sayuran dan kulit buah", "Baterai bekas, ponsel usang, dan lampu neon", "Kardus bekas dan kertas koran", "Botol kaca sirup dan kaleng biskuit"], 1, "Kalimat pertama menyebut baterai bekas, telepon genggam usang, dan lampu neon."],
        ["Tindakan pengelolaan sampah elektronik yang paling tepat sesuai bacaan adalah ...", ["Membakar baterai bekas di halaman belakang", "Memisahkan e-waste dari sampah biasa dan menyalurkannya ke pusat daur ulang khusus", "Mengubur ponsel rusak di dekat sumur", "Membuang lampu neon ke selokan"], 1, "Pemisahan dan daur ulang khusus mencegah racun logam berat meresap ke air tanah."],
        ["Istilah 'e-waste' dalam teks tersebut merujuk pada ...", ["limbah cair pabrik tekstil", "sampah perangkat elektronik yang sudah rusak atau tidak terpakai", "sisa makanan rumah tangga", "asap kendaraan bermotor"], 1, "Dijelaskan sebagai 'Sampah Elektronik (E-Waste)'."]
      ]
    ),
    ...L("TEKS 3 - Catatan Harian di Perpustakaan Tua",
      "Saat merapikan rak buku sejarah di perpustakaan sekolah, Tari menemukan sebuah buku catatan bersampul kulit yang terselip di balik ensiklopedia lama. Di dalamnya tertulis catatan perjalanan kepala sekolah pertama yang merintis berdirinya sekolah itu dengan menumpang di balai desa. Tari segera menyerahkan temuan berharga itu kepada pembina OSIS untuk dipajang di ruang arsip sejarah sekolah.",
      [
        ["Di mana Tari menemukan buku catatan bersampul kulit tersebut?", ["Di laci meja kantin", "Terselip di balik ensiklopedia lama pada rak buku sejarah perpustakaan", "Di bawah kursi lapangan upacara", "Di dalam tas teman sekelasnya"], 1, "Kalimat pertama menyebut terselip di balik ensiklopedia lama di perpustakaan sekolah."],
        ["Isi tulisan di dalam buku catatan tua tersebut adalah ...", ["Daftar nilai ujian matematika tahun lalu", "Catatan perjalanan kepala sekolah pertama merintis berdirinya sekolah", "Resep masakan tradisional daerah", "Jadwal pertandingan olahraga antarkelas"], 1, "Kalimat kedua menyebut catatan perjalanan kepala sekolah pertama merintis sekolah."],
        ["Di mana sekolah tersebut pertama kali didirikan menurut isi catatan?", ["Di gedung bertingkat tiga", "Menumpang di balai desa", "Di tepi pelabuhan", "Di dalam pasar tradisional"], 1, "Kalimat kedua menyebut 'dengan menumpang di balai desa'."],
        ["Tindakan bijak yang diambil Tari setelah menemukan buku catatan itu adalah ...", ["Membawanya pulang sebagai koleksi pribadi", "Menyerahkannya kepada pembina OSIS untuk disimpan di ruang arsip sejarah sekolah", "Membuangnya karena sampulnya sudah tua", "Menyobek halaman kosongnya untuk coretan"], 1, "Kalimat ketiga menyebut Tari menyerahkannya kepada pembina OSIS untuk ruang arsip sejarah."],
        ["Nilai karakter yang ditunjukkan Tari dalam penggalan cerita tersebut adalah ...", ["Ceroboh dan egois", "Menghargai sejarah dan bertanggung jawab menjaga arsip bersama", "Pemalas dan suka menunda tugas", "Sombong atas temuannya"], 1, "Tari menyadari nilai sejarah dokumen tersebut dan menyerahkannya ke pihak sekolah."]
      ]
    ),
    ...L("TEKS 4 - Mengapa Langit Berwarna Biru pada Siang Hari?",
      "Cahaya matahari tampak berwarna putih, tetapi sebenarnya tersusun atas spektrum berbagai warna dengan panjang gelombang berbeda. Saat cahaya matahari memasuki atmosfer Bumi, gelombang cahaya biru yang berukuran lebih pendek dihamburkan ke segala arah oleh molekul gas atmosfer jauh lebih kuat dibanding warna merah sehingga langit tampak biru cerah pada siang hari.",
      [
        ["Penyebab utama langit tampak berwarna biru pada siang hari menurut bacaan adalah ...", ["Pantulan warna air laut ke awan", "Hamburan gelombang cahaya biru oleh molekul gas di atmosfer Bumi", "Asap kendaraan yang berkumpul di langit", "Cahaya bulan yang memantul di siang hari"], 1, "Kalimat kedua menjelaskan gelombang cahaya biru dihamburkan lebih kuat oleh molekul gas atmosfer."],
        ["Mengapa cahaya biru lebih mudah dihamburkan daripada cahaya merah?", ["Karena cahaya biru memiliki suhu paling panas", "Karena cahaya biru memiliki panjang gelombang yang lebih pendek", "Karena cahaya merah tidak mampu menembus awan", "Karena molekul atmosfer hanya menyerap warna kuning"], 1, "Kalimat kedua menyebut 'gelombang cahaya biru yang berukuran lebih pendek dihamburkan... jauh lebih kuat'."],
        ["Warna sebenarnya dari cahaya matahari sebelum terurai spektrumnya adalah ...", ["Kuning keemasan", "Putih", "Jingga kemerahan", "Biru muda"], 1, "Kalimat pertama menyebut 'Cahaya matahari tampak berwarna putih'."],
        ["Apa yang menghamburkan cahaya matahari ketika memasuki lapisan udara Bumi?", ["Debu luar angkasa", "Molekul-molekul gas di atmosfer Bumi", "Titik embun di permukaan tanah", "Satelit komunikasi"], 1, "Kalimat kedua menyebut 'dihamburkan ke segala arah oleh molekul gas atmosfer'."],
        ["Gagasan utama paragraf ilmiah populer tersebut adalah ...", ["Perbedaan suhu siang dan malam", "Penjelasan ilmiah di balik warna biru langit pada siang hari", "Cara mengukur panjang gelombang radio", "Susunan lapisan kerak Bumi"], 1, "Teks menjelaskan fenomena fisika hamburan cahaya matahari di atmosfer."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi5"] = [
    ...L("TEKS 1 - Ekosistem Padang Lamun dan Penyu Hijau",
      "Padang lamun di perairan dangkal pesisir sering dikira rumput laut biasa, padahal lamun merupakan tumbuhan berbunga yang memiliki akar, batang, dan daun sejati. Hamparan padang lamun menjadi sumber makanan utama penyu hijau serta dugong, sekaligus menjernihkan air laut dengan mengendapkan partikel lumpur yang terbawa arus.",
      [
        ["Perbedaan mendasar antara lamun dan rumput laut menurut bacaan adalah ...", ["Lamun hidup di puncak gunung", "Lamun merupakan tumbuhan berbunga yang memiliki akar, batang, dan daun sejati", "Lamun berwarna merah menyala", "Lamun tidak membutuhkan sinar matahari"], 1, "Kalimat pertama menjelaskan lamun adalah tumbuhan berbunga dengan akar, batang, dan daun sejati."],
        ["Dua satwa laut dilindungi yang menjadikan padang lamun sebagai sumber pakan utama adalah ...", ["Hiu paus dan lumba-lumba", "Penyu hijau dan dugong", "Ikan tuna dan pari manta", "Gurita dan kepiting bakau"], 1, "Kalimat kedua menyebut penyu hijau serta dugong."],
        ["Peran fisik padang lamun dalam menjaga kualitas perairan pesisir adalah ...", ["Menambah kadar garam air laut", "Menjernihkan air laut dengan mengendapkan partikel lumpur", "Meningkatkan suhu permukaan laut", "Menghasilkan gelombang besar"], 1, "Kalimat kedua menyebut menjernihkan air laut dengan mengendapkan partikel lumpur."],
        ["Di zona perairan manakah padang lamun tumbuh subur sesuai teks?", ["Palung laut dalam", "Perairan dangkal pesisir", "Danau kawah gunung api", "Sungai air tawar pegunungan"], 1, "Kalimat pertama menyebut 'di perairan dangkal pesisir'."],
        ["Simpulan yang paling tepat dari bacaan tersebut adalah ...", ["Padang lamun menghalangi perahu nelayan", "Pelestarian padang lamun vital bagi kelangsungan hidup satwa laut dan kejernihan perairan pesisir", "Penyu hijau hanya memakan ikan kecil", "Rumput laut sama persis dengan lamun"], 1, "Padang lamun menopang rantai makanan penyu/dugong dan menjernihkan air pesisir."]
      ]
    ),
    ...L("TEKS 2 - Budaya Literasi Kritis dan Membedakan Fakta dengan Opini",
      "Dalam membaca artikel berita maupun unggahan media sosial, pembaca perlu cermat membedakan antara fakta yang dapat dibuktikan kebenarannya secara objektif dan opini yang berisi penilaian atau pandangan pribadi penulis. Ketidakmampuan membedakan keduanya kerap membuat pembaca mudah terpancing emosi oleh judul sensasional tanpa memeriksa data pendukung.",
      [
        ["Perbedaan utama antara fakta dan opini menurut bacaan adalah ...", ["Fakta ditulis dengan huruf tebal, sedangkan opini miring", "Fakta dapat dibuktikan kebenarannya secara objektif, sedangkan opini berupa penilaian pribadi", "Opini selalu lebih benar daripada fakta", "Fakta hanya terdapat di buku pelajaran"], 1, "Kalimat pertama mendefinisikan fakta sebagai hal yang terbukti objektif dan opini sebagai pandangan pribadi."],
        ["Dampak yang sering muncul jika pembaca gagal membedakan fakta dan opini adalah ...", ["Membaca buku dengan lebih cepat", "Mudah terpancing emosi oleh judul sensasional tanpa mengecek data", "Menjadi penulis berita profesional", "Tidak lagi membutuhkan sumber bacaan"], 1, "Kalimat kedua menyebut mudah terpancing emosi oleh judul sensasional tanpa memeriksa data pendukung."],
        ["Manakah kalimat berikut yang merupakan contoh fakta?", ["Menurut saya, cuaca hari ini terasa sangat membosankan", "Indonesia memiliki lebih dari tujuh belas ribu pulau yang membentang dari Sabang sampai Merauke", "Film tersebut seharusnya mendapatkan penghargaan terbaik", "Makanan pedas pasti disukai semua remaja"], 1, "Jumlah pulau Indonesia merupakan data objektif yang dapat dibuktikan."],
        ["Langkah bijak saat menemukan judul berita yang tampak sensasional sesuai teks adalah ...", ["Langsung membagikannya ke seluruh grup pesan", "Memeriksa data pendukung dan memverifikasi kebenaran informasinya", "Menulis komentar marah di kolom diskusi", "Mempercayainya tanpa membaca isi artikel"], 1, "Memeriksa data pendukung mencegah salah paham akibat judul sensasional."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Cara membuat judul berita yang menarik", "Pentingnya kemampuan membedakan fakta dan opini dalam literasi kritis", "Bahaya menggunakan telepon genggam", "Perbedaan koran cetak dan berita daring"], 1, "Teks menekankan pentingnya membedakan fakta dan opini saat membaca informasi."]
      ]
    ),
    ...L("TEKS 3 - Sepeda Tua Ayah di Bengkel Desa",
      "Setiap pulang sekolah, Bima membantu ayahnya memperbaiki sepeda warga di bengkel kecil depan rumah. Suatu hari, seorang kakek datang menuntun sepeda ontel tuanya yang rantainya putus dan bannya kempis, tetapi kakek itu tampak ragu karena uang di sakunya tidak cukup. Melihat hal itu, Bima berbisik kepada ayahnya agar menggratiskan biaya perbaikan dan menggantinya dari uang tabungan Bima sendiri.",
      [
        ["Kegiatan rutin yang dilakukan Bima setiap pulang sekolah adalah ...", ["Bermain layang-layang di lapangan", "Membantu ayahnya memperbaiki sepeda warga di bengkel depan rumah", "Menjaga toko kelontong di pasar", "Berlatih sepak bola bersama teman"], 1, "Kalimat pertama menyebut Bima membantu ayahnya di bengkel kecil depan rumah."],
        ["Masalah yang dialami kakek pemilik sepeda ontel tua dalam cerita adalah ...", ["Sepedanya hilang dicuri orang", "Rantai sepedanya putus, bannya kempis, dan uangnya tidak cukup untuk biaya perbaikan", "Ia lupa jalan pulang menuju desanya", "Sepedanya tertabrak kendaraan di jalan"], 1, "Kalimat kedua menyebut rantai putus, ban kempis, dan uang di sakunya tidak cukup."],
        ["Tindakan mulia yang diusulkan Bima kepada ayahnya adalah ...", ["Menolak memperbaiki sepeda kakek tersebut", "Menggratiskan biaya perbaikan dan menutupinya dari uang tabungan Bima sendiri", "Meminta kakek meninggalkan sepedanya sebagai jaminan", "Menyuruh kakek mencari bengkel lain"], 1, "Kalimat ketiga menyebut menggratiskan biaya perbaikan dan menggantinya dari tabungan Bima."],
        ["Watak tokoh Bima yang tergambar dalam penggalan cerita tersebut adalah ...", ["Kikir dan pemarah", "Dermawan, berempati tinggi, dan rajin membantu orang tua", "Pemalu dan ceroboh", "Sombong dan suka pamer"], 1, "Bima rela menyisihkan tabungannya untuk membantu orang lain yang kesulitan."],
        ["Amanat yang dapat dipetik dari kisah Bima adalah ...", ["Menabung hanya berguna untuk membeli mainan mahal", "Kepekaan sosial dan kerelaan berbagi dapat meringankan beban sesama", "Membantu orang lain harus selalu menunggu imbalan", "Bengkel kecil tidak bisa membantu warga"], 1, "Empati dan ketulusan membantu sesama menjadi pesan utama cerita."]
      ]
    ),
    ...L("TEKS 4 - Fenomena Biopestisida Alami dari Daun Mimba",
      "Penggunaan pestisida kimia sintetis secara terus-menerus dapat meninggalkan residu berbahaya pada hasil panen serta membunuh serangga penyerbuk alami. Sebagai alternatif ramah lingkungan, ekstrak daun mimba mengandung senyawa azadiraktin yang efektif mengendalikan hama ulat dan kutu daun tanpa meracuni ekosistem tanah maupun manusia.",
      [
        ["Dua dampak negatif penggunaan pestisida kimia sintetis menurut bacaan adalah ...", ["Mempercepat pertumbuhan akar dan daun", "Meninggalkan residu berbahaya pada panen dan membunuh serangga penyerbuk", "Menyuburkan cacing tanah secara berlebihan", "Menghemat biaya perawatan kebun"], 1, "Kalimat pertama menyebut residu berbahaya pada panen dan kematian serangga penyerbuk alami."],
        ["Senyawa aktif dalam ekstrak daun mimba yang berfungsi mengendalikan hama adalah ...", ["Klorofil", "Azadiraktin", "Kafein", "Selulosa"], 1, "Kalimat kedua menyebut 'senyawa azadiraktin'."],
        ["Jenis hama tanaman yang dapat dikendalikan oleh biopestisida daun mimba adalah ...", ["Tikus sawah dan burung pipit", "Ulat dan kutu daun", "Keong mas dan belalang sembah", "Kumbang kelapa dan rayap"], 1, "Kalimat kedua menyebut mengendalikan hama ulat dan kutu daun."],
        ["Keunggulan utama biopestisida daun mimba dibanding pestisida sintetis adalah ...", ["Membunuh seluruh hewan di sekitar kebun", "Ramah lingkungan karena tidak meracuni ekosistem tanah maupun manusia", "Tahan api dan tidak mudah larut air", "Menggantikan kebutuhan pupuk dan air"], 1, "Kalimat kedua menegaskan tidak meracuni ekosistem tanah maupun manusia."],
        ["Kata 'residu' pada kalimat pertama memiliki makna ...", ["pupuk penyubur", "sisa zat kimia yang tertinggal pada bahan pangan atau lingkungan", "aroma harum bunga", "akar tanaman baru"], 1, "Residu pestisida adalah sisa zat kimia yang menempel pada hasil panen."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi6"] = [
    ...L("TEKS 1 - Karapan Sapi dan Tradisi Masyarakat Madura",
      "Karapan sapi merupakan perlombaan pacuan sapi tradisional khas masyarakat Madura yang digelar setiap tahun setelah musim panen tiba. Sepasang sapi pilihan yang dihias indah menarik kereta kayu bernama kaleles dengan seorang joki yang berdiri menjaga keseimbangan di atasnya. Tradisi ini bukan sekadar hiburan rakyat, melainkan simbol kerja keras, kebanggaan budaya, serta ajang mempererat silaturahmi antarwarga.",
      [
        ["Kapan perlombaan Karapan Sapi biasanya diselenggarakan menurut bacaan?", ["Saat musim hujan lebat", "Setiap tahun setelah musim panen tiba", "Setiap awal bulan Januari", "Saat perayaan tahun baru"], 1, "Kalimat pertama menyebut digelar setiap tahun setelah musim panen tiba."],
        ["Nama kereta kayu tradisional yang ditarik oleh sepasang sapi pacuan dalam Karapan Sapi adalah ...", ["Delman", "Kaleles", "Pedati", "Becak"], 1, "Kalimat kedua menyebut 'kereta kayu bernama kaleles'."],
        ["Makna sosial dan budaya dari penyelenggaraan Karapan Sapi menurut teks adalah ...", ["Ajang persaingan dagang antarpedagang", "Simbol kerja keras, kebanggaan budaya, dan sarana mempererat silaturahmi warga", "Upacara penanaman bibit padi baru", "Lomba menghias perahu nelayan"], 1, "Kalimat ketiga menyebut simbol kerja keras, kebanggaan budaya, serta ajang mempererat silaturahmi."],
        ["Tugas joki yang berdiri di atas kaleles dalam perlombaan tersebut adalah ...", ["Memberi makan sapi saat berlari", "Mengendalikan laju sapi sambil menjaga keseimbangan tubuh di atas kaleles", "Menghitung jumlah penonton di pinggir lapangan", "Menabuh gamelan pengiring lomba"], 1, "Kalimat kedua menyebut seorang joki yang berdiri menjaga keseimbangan di atasnya."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Cara merawat sapi ternak di pedesaan", "Mengenal tradisi Karapan Sapi Madura beserta makna budayanya", "Jenis-jenis kereta kayu tradisional", "Sejarah pertanian di Pulau Madura"], 1, "Teks menjelaskan pelaksanaan, perlengkapan, dan nilai budaya Karapan Sapi."]
      ]
    ),
    ...L("TEKS 2 - Energi Terbarukan Mikrohidro untuk Desa Mandiri Energi",
      "Desa-desa di kawasan pegunungan yang dialiri sungai berarus stabil memiliki potensi besar mengembangkan pembangkit listrik tenaga mikrohidro (PLTMH). Dengan memanfaatkan aliran air sungai untuk memutar turbin kecil tanpa perlu membangun bendungan raksasa, PLTMH menyediakan listrik bersih yang terjangkau bagi rumah tangga dan sekolah di pedesaan.",
      [
        ["Syarat geografis utama agar suatu desa berpotensi mengembangkan PLTMH adalah ...", ["Memiliki pantai berombak besar", "Memiliki aliran sungai berarus stabil di kawasan pegunungan", "Berada di tengah gurun pasir yang luas", "Memiliki lahan tambang batu bara"], 1, "Kalimat pertama menyebut desa di pegunungan yang dialiri sungai berarus stabil."],
        ["Keunggulan PLTMH dibanding pembangkit listrik tenaga air skala besar menurut teks adalah ...", ["Tidak membutuhkan air sama sekali", "Tidak perlu membangun bendungan raksasa karena cukup memakai aliran sungai memutar turbin kecil", "Hanya berfungsi pada siang hari", "Menghasilkan asap uap berwarna putih"], 1, "Kalimat kedua menyebut memutar turbin kecil tanpa perlu membangun bendungan raksasa."],
        ["Manfaat langsung PLTMH bagi masyarakat pedesaan sesuai bacaan adalah ...", ["Menggantikan seluruh kendaraan bermotor dengan kereta listrik", "Menyediakan pasokan listrik bersih dan terjangkau untuk rumah tangga serta sekolah", "Meningkatkan ekspor kayu hutan", "Mengeringkan lahan rawa di sekitar desa"], 1, "Kalimat kedua menyebut listrik bersih yang terjangkau bagi rumah tangga dan sekolah."],
        ["Komponen mekanis yang diputar oleh aliran air sungai dalam sistem PLTMH adalah ...", ["Panel surya", "Turbin kecil", "Baling-baling angin", "Piston diesel"], 1, "Kalimat kedua menyebut 'untuk memutar turbin kecil'."],
        ["Simpulan yang paling tepat dari bacaan tersebut adalah ...", ["Listrik di desa hanya dapat dipasok dari kota besar", "Pemanfaatan potensi sungai lokal melalui PLTMH mendukung kemandirian energi ramah lingkungan di pedesaan", "Bendungan raksasa wajib dibangun di setiap sungai", "Aliran sungai pegunungan tidak bisa menghasilkan listrik"], 1, "PLTMH memanfaatkan sumber daya air setempat secara ramah lingkungan dan terjangkau."]
      ]
    ),
    ...L("TEKS 3 - Komik Sejarah di Sudut Kelas",
      "Rafi gemar menggambar tokoh-tokoh pahlawan nasional dalam bentuk komik strip di buku sketsanya. Awalnya ia malu menunjukkan karyanya karena khawatir ditertawakan teman-teman. Namun, ketika guru IPS memintanya membuat ilustrasi peristiwa Sumpah Pemuda untuk majalah dinding kelas, teman-temannya justru antusias membaca dan lebih mudah menghafal jalannya peristiwa sejarah tersebut.",
      [
        ["Bakat seni yang dimiliki tokoh Rafi dalam cerita tersebut adalah ...", ["Bermain alat musik biola", "Menggambar tokoh pahlawan dalam bentuk komik strip", "Menulis puisi berbahasa Inggris", "Membuat patung dari tanah liat"], 1, "Kalimat pertama menyebut Rafi gemar menggambar tokoh pahlawan dalam bentuk komik strip."],
        ["Mengapa Rafi pada awalnya enggan memperlihatkan gambarnya kepada teman-teman?", ["Karena buku sketsanya tertinggal di rumah", "Karena ia malu dan khawatir ditertawakan", "Karena gambarnya belum selesai diwarnai", "Karena dilarang oleh orang tuanya"], 1, "Kalimat kedua menyebut ia malu dan khawatir ditertawakan teman-teman."],
        ["Peristiwa sejarah yang digambar Rafi untuk majalah dinding kelas adalah ...", ["Pertempuran Surabaya", "Peristiwa Sumpah Pemuda", "Bandung Lautan Api", "Perjanjian Renville"], 1, "Kalimat ketiga menyebut ilustrasi peristiwa Sumpah Pemuda."],
        ["Dampak positif karya komik Rafi bagi teman-teman sekelasnya adalah ...", ["Teman-temannya menjadi malas membaca buku paket", "Teman-temannya antusias membaca dan lebih mudah memahami jalan cerita sejarah", "Majalah dinding kelas menjadi penuh sesak", "Pelajaran IPS ditiadakan oleh guru"], 1, "Kalimat ketiga menyebut teman-temannya antusias membaca dan lebih mudah menghafal peristiwa sejarah."],
        ["Amanat yang dapat dipetik dari penggalan cerita tersebut adalah ...", ["Bakat menggambar tidak bermanfaat untuk pelajaran sekolah", "Percaya diri mengembangkan bakat positif dapat memberi manfaat bagi orang lain", "Kita harus selalu menyembunyikan karya sendiri", "Sejarah hanya bisa dipelajari lewat hafalan teks panjang"], 1, "Keberanian menyalurkan bakat kreatif membantu teman belajar dengan cara menyenangkan."]
      ]
    ),
    ...L("TEKS 4 - Fenomena Karst dan Gua Bawah Tanah",
      "Kawasan karst merupakan bentang alam yang terbentuk dari pelarutan batuan kapur (batu gamping) oleh air hujan yang mengandung karbon dioksida selama jutaan tahun. Proses pelarutan alami ini menciptakan bukit-bukit kerucut, sungai bawah tanah, serta gua berhiaskan stalaktit dan stalagmit yang berfungsi sebagai tandon air alami penting bagi warga sekitar.",
      [
        ["Batuan utama penyusun bentang alam kawasan karst menurut teks adalah ...", ["Batuan granit dan basal", "Batuan kapur (batu gamping)", "Batuan pasir kuarsa", "Batuan obsidian vulkanik"], 1, "Kalimat pertama menyebut pelarutan batuan kapur (batu gamping)."],
        ["Agen alami yang melarutkan batuan kapur hingga membentuk gua karst adalah ...", ["Angin badai gurun pasir", "Air hujan yang mengandung karbon dioksida selama jutaan tahun", "Gelombang pasang air laut", "Aliran lava gunung berapi"], 1, "Kalimat pertama menyebut air hujan yang mengandung karbon dioksida selama jutaan tahun."],
        ["Fungsi ekologis penting kawasan karst bagi kehidupan masyarakat sekitar adalah ...", ["Sebagai lokasi penambangan batu bara terbuka", "Sebagai tandon atau penyimpan cadangan air alami melalui sungai bawah tanah", "Sebagai lahan pertanian padi irigasi teknis", "Sebagai tempat pembuangan limbah industri"], 1, "Kalimat kedua menyebut berfungsi sebagai tandon air alami penting bagi warga sekitar."],
        ["Kenampakan khas yang terbentuk di dalam gua karst menurut bacaan adalah ...", ["Terumbu karang dan padang lamun", "Stalaktit dan stalagmit", "Kawah belerang dan geyser", "Bukit pasir dan oasis"], 1, "Kalimat kedua menyebut 'gua berhiaskan stalaktit dan stalagmit'."],
        ["Simpulan yang paling sesuai dengan isi bacaan adalah ...", ["Kawasan karst terbentuk secara instan dalam beberapa tahun", "Kelestarian kawasan karst harus dijaga karena berperan vital menyimpan sumber air bersih warga", "Gua bawah tanah tidak memiliki hubungan dengan ketersediaan air", "Air hujan tidak dapat melarutkan batuan kapur"], 1, "Kawasan karst menyimpan jaringan sungai bawah tanah yang menjadi sumber air bagi masyarakat."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi7"] = [
    ...L("TEKS 1 - Pertanian Hidroponik di Lahan Sempit Perkotaan",
      "Keterbatasan lahan subur di perkotaan tidak menghalangi warga membudidayakan sayuran segar melalui sistem hidroponik yang menanam tumbuhan tanpa media tanah, melainkan memakai larutan air kaya nutrisi mineral. Selain hemat tempat karena dapat disusun bertingkat, pertanian hidroponik menghemat penggunaan air hingga 80 persen dan menghasilkan sayuran yang lebih bersih tanpa pestisida kimia.",
      [
        ["Media tanam utama yang digunakan pada sistem pertanian hidroponik menurut bacaan adalah ...", ["Tanah liat campur pasir", "Larutan air yang kaya nutrisi mineral tanpa tanah", "Serbuk gergaji dan arang sekam", "Batu kerikil sungai tanpa air"], 1, "Kalimat pertama menyebut menanam tumbuhan tanpa media tanah memakai larutan air kaya nutrisi mineral."],
        ["Dua keunggulan sistem hidroponik yang disebutkan dalam teks adalah ...", ["Membutuhkan lahan puluhan hektare dan banyak pestisida", "Menghemat penggunaan air hingga 80 persen dan menghasilkan sayuran bersih tanpa pestisida kimia", "Hanya dapat ditanam di daerah pegunungan dingin", "Tidak memerlukan cahaya matahari maupun lampu"], 1, "Kalimat kedua menyebut hemat air hingga 80 persen dan sayuran lebih bersih tanpa pestisida kimia."],
        ["Mengapa metode hidroponik cocok diterapkan di kawasan perkotaan?", ["Karena kota tidak memiliki pasokan air bersih", "Karena hemat ruang dan dapat disusun secara bertingkat di lahan terbatas", "Karena sayuran tidak laku dijual di pedesaan", "Karena seluruh penduduk kota berprofesi sebagai petani"], 1, "Kalimat pertama dan kedua menjelaskan solusi keterbatasan lahan dan susunan bertingkat."],
        ["Persentase penghematan air pada sistem hidroponik menurut teks mencapai ...", ["25 persen", "50 persen", "80 persen", "100 persen"], 2, "Kalimat kedua menyebut 'menghemat penggunaan air hingga 80 persen'."],
        ["Simpulan paling tepat dari bacaan tersebut adalah ...", ["Bertani hanya bisa dilakukan jika memiliki sawah luas", "Teknologi hidroponik menjadi solusi cerdas menghasilkan pangan sehat di lahan sempit perkotaan", "Pestisida kimia wajib digunakan agar sayuran tumbuh", "Larutan nutrisi mineral berbahaya bagi tanaman"], 1, "Hidroponik mengatasi keterbatasan lahan kota sekaligus hemat air dan bebas pestisida."]
      ]
    ),
    ...L("TEKS 2 - Etika Bermedia Sosial dan Pencegahan Perundungan Siber",
      "Perundungan siber (cyberbullying) seperti menyebarkan ejekan, rumor palsu, atau mempermalukan teman melalui media sosial dapat meninggalkan luka psikologis mendalam dan menurunkan kepercayaan diri korban. Remaja perlu menumbuhkan empati digital dengan memperlakukan orang lain di dunia maya sebaik memperlakukan mereka secara langsung di dunia nyata.",
      [
        ["Contoh tindakan yang termasuk perundungan siber (cyberbullying) menurut teks adalah ...", ["Mengirimkan ucapan selamat ulang tahun secara daring", "Menyebarkan ejekan, rumor palsu, atau mempermalukan teman di media sosial", "Berdiskusi tugas kelompok melalui pesan singkat", "Membagikan artikel ilmu pengetahuan kepada teman"], 1, "Kalimat pertama menyebut menyebarkan ejekan, rumor palsu, atau mempermalukan teman."],
        ["Dampak buruk yang dialami korban perundungan siber berdasarkan bacaan adalah ...", ["Meningkatnya prestasi olahraga di sekolah", "Luka psikologis mendalam dan menurunnya rasa percaya diri", "Bertambahnya jumlah teman di dunia nyata", "Membaiknya kualitas tidur malam"], 1, "Kalimat pertama menyebut luka psikologis mendalam dan menurunkan kepercayaan diri korban."],
        ["Prinsip 'empati digital' yang ditekankan pada kalimat kedua adalah ...", ["Bebas menulis komentar apa saja karena tidak bertemu langsung", "Memperlakukan orang lain di dunia maya dengan hormat sebagaimana di dunia nyata", "Menghapus seluruh teman di media sosial", "Membalas setiap ejekan dengan kata-kata kasar"], 1, "Kalimat kedua menjelaskan memperlakukan orang lain di dunia maya sebaik di dunia nyata."],
        ["Tindakan terbaik seorang pelajar jika melihat teman menjadi korban perundungan siber adalah ...", ["Ikut menyebarkan unggahan ejekan agar dianggap lucu", "Memberi dukungan kepada korban dan melaporkan konten perundungan kepada guru atau orang tua", "Menertawakan korban di kolom komentar", "Mengabaikan masalah tersebut sepenuhnya"], 1, "Dukungan moral dan pelaporan membantu menghentikan perundungan siber."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Cara menambah pengikut di media sosial", "Dampak negatif perundungan siber dan pentingnya menumbuhkan empati digital", "Sejarah perkembangan internet di Indonesia", "Manfaat bermain gim daring bagi remaja"], 1, "Teks menyoroti dampak cyberbullying serta ajakan berempati di dunia digital."]
      ]
    ),
    ...L("TEKS 3 - Perahu Kertas di Sungai Kecil",
      "Hujan rintik baru saja reda ketika Arka dan adiknya, Nina, meluncurkan perahu kertas lipat di aliran selokan depan rumah yang jernih. Tiba-tiba perahu kecil milik Nina tersangkut pada botol plastik bekas yang dibuang sembarangan di tepi saluran. Arka segera memungut sampah plastik tersebut ke tempat sampah sambil mengajak adiknya menjaga aliran air tetap bersih agar tidak tersumbat saat hujan deras.",
      [
        ["Apa yang dilakukan Arka dan Nina setelah hujan rintik reda?", ["Bermain layang-layang di lapangan", "Meluncurkan perahu kertas lipat di aliran selokan yang jernih", "Memancing ikan di sungai besar", "Membersihkan halaman rumah tetangga"], 1, "Kalimat pertama menyebut meluncurkan perahu kertas lipat di aliran selokan depan rumah."],
        ["Penyebab perahu kertas milik Nina berhenti melaju adalah ...", ["Kertasnya sobek terkena batu tajam", "Tersangkut pada botol plastik bekas di tepi saluran", "Air selokan tiba-tiba mengering", "Tertabrak perahu milik Arka"], 1, "Kalimat kedua menyebut tersangkut pada botol plastik bekas yang dibuang sembarangan."],
        ["Tindakan terpuji yang dilakukan Arka saat melihat sampah di saluran air adalah ...", ["Menendang botol plastik ke arah rumah tetangga", "Memungut sampah plastik ke tempat sampah dan mengajak adiknya menjaga kebersihan", "Membiarkan botol plastik hanyut terbawa arus", "Memarahi adiknya karena perahunya tersangkut"], 1, "Kalimat ketiga menyebut Arka memungut sampah ke tempat sampah dan memberi teladan."],
        ["Alasan penting menjaga aliran selokan bebas dari sampah menurut Arka adalah ...", ["Agar ikan hias bisa hidup di dalamnya", "Agar saluran air tidak tersumbat dan meluap saat hujan deras", "Agar perahu kertas melaju lebih lambat", "Agar air selokan berubah warna"], 1, "Kalimat ketiga menyebut 'agar tidak tersumbat saat hujan deras'."],
        ["Nilai karakter yang tergambar dari tokoh Arka dalam cerita tersebut adalah ...", ["Ceroboh dan pemarah", "Peduli lingkungan dan memberi teladan baik bagi adik", "Pemalas dan acuh tak acuh", "Sombong dan suka pamer"], 1, "Arka tanggap membersihkan sampah sekaligus mendidik adiknya menjaga lingkungan."]
      ]
    ),
    ...L("TEKS 4 - Fenomena Bi Luminesensi pada Kunang-Kunang dan Biota Laut",
      "Bioluminesensi adalah kemampuan alami sejumlah makhluk hidup—seperti kunang-kunang, ubur-ubur laut dalam, dan jamur tertentu—untuk memancarkan cahaya dari dalam tubuhnya melalui reaksi kimia antara zat lusiferin dan enzim lusiferase. Pada kunang-kunang, kedipan cahaya dingin tanpa panas ini berfungsi untuk menarik pasangan sekaligus memberi peringatan kepada pemangsa.",
      [
        ["Pengertian 'bioluminesensi' berdasarkan bacaan tersebut adalah ...", ["Kemampuan hewan mengubah warna kulit sesuai tempatnya", "Kemampuan alami makhluk hidup memancarkan cahaya melalui reaksi kimia tubuh", "Proses penyerapan sinar matahari oleh daun hijau", "Pantulan cahaya bulan di permukaan air laut"], 1, "Kalimat pertama mendefinisikan bioluminesensi sebagai kemampuan memancarkan cahaya melalui reaksi kimia."],
        ["Dua senyawa biologis yang bereaksi menghasilkan cahaya bioluminesensi menurut teks adalah ...", ["Klorofil dan hemoglobin", "Zat lusiferin dan enzim lusiferase", "Glukosa dan oksigen murni", "Kalsium dan magnesium"], 1, "Kalimat pertama menyebut reaksi kimia antara zat lusiferin dan enzim lusiferase."],
        ["Dua fungsi kedipan cahaya bagi kunang-kunang sesuai bacaan adalah ...", ["Menerangi jalan mencari buah dan menghangatkan sarang", "Menarik pasangan dan memberi peringatan kepada pemangsa", "Mengusir hujan dan memanggil angin", "Mengeringkan sayap di malam hari"], 1, "Kalimat kedua menyebut menarik pasangan sekaligus memberi peringatan kepada pemangsa."],
        ["Sifat cahaya yang dipancarkan oleh tubuh kunang-kunang menurut teks adalah ...", ["Sangat panas hingga membakar daun", "Cahaya dingin tanpa menghasilkan panas", "Hanya terlihat pada siang hari terik", "Berwarna hitam pekat"], 1, "Kalimat kedua menyebut 'kedipan cahaya dingin tanpa panas'."],
        ["Contoh organisme lain selain kunang-kunang yang memiliki kemampuan bioluminesensi dalam teks adalah ...", ["Kupu-kupu dan lebah madu", "Ubur-ubur laut dalam dan jamur tertentu", "Elang jawa dan harimau sumatra", "Pohon bakau dan terumbu karang"], 1, "Kalimat pertama menyebut kunang-kunang, ubur-ubur laut dalam, dan jamur tertentu."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi8"] = [
    ...L("TEKS 1 - Arsitektur Rumah Adat Tongkonan Toraja",
      "Rumah adat Tongkonan di Tana Toraja memiliki atap melengkung menyerupai perahu yang tersusun dari bilah-bilah bambu dan selalu menghadap ke arah utara sebagai simbol penghormatan kepada leluhur. Struktur bangunannya menggunakan sistem sambungan pasak kayu tanpa paku besi sehingga lentur menahan guncangan gempa bumi.",
      [
        ["Bentuk atap rumah adat Tongkonan menurut bacaan menyerupai ...", ["Kubah masjid", "Perahu", "Piramida batu", "Payung raksasa"], 1, "Kalimat pertama menyebut atap melengkung menyerupai perahu."],
        ["Ke arah mata angin manakah rumah Tongkonan selalu dihadapkan?", ["Selatan", "Utara", "Timur", "Barat"], 1, "Kalimat pertama menyebut selalu menghadap ke arah utara sebagai simbol penghormatan kepada leluhur."],
        ["Keunggulan teknis struktur bangunan Tongkonan dalam menghadapi bencana alam adalah ...", ["Tahan terhadap banjir bandang", "Lentur menahan guncangan gempa bumi berkat sambungan pasak kayu tanpa paku", "Anti terhadap angin topan", "Tidak dapat terbakar api"], 1, "Kalimat kedua menyebut sambungan pasak kayu tanpa paku besi sehingga lentur menahan guncangan gempa."],
        ["Bahan penyusun atap melengkung Tongkonan yang disebutkan dalam teks adalah ...", ["Genteng tanah liat", "Bilah-bilah bambu", "Seng gelombang", "Daun nipah kering"], 1, "Kalimat pertama menyebut tersusun dari bilah-bilah bambu."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Sejarah pelayaran masyarakat Toraja", "Keunikan bentuk, filosofi, dan ketahanan konstruksi rumah adat Tongkonan", "Cara membuat sambungan pasak kayu", "Wisata pegunungan di Sulawesi Selatan"], 1, "Teks menjelaskan arsitektur, makna orientasi, dan kekuatan struktur Tongkonan."]
      ]
    ),
    ...L("TEKS 2 - Literasi Finansial Remaja dan Perencanaan Anggaran",
      "Membiasakan diri mencatat pemasukan uang saku dan pengeluaran harian membantu remaja membedakan antara kebutuhan pokok seperti alat tulis dengan keinginan sesaat seperti jajanan kekinian. Dengan menyisihkan minimal dua puluh persen uang saku di awal waktu sebelum dibelanjakan, pelajar dapat membangun dana darurat tanpa bergantung terus-menerus pada orang tua.",
      [
        ["Manfaat utama mencatat pemasukan dan pengeluaran harian bagi remaja menurut teks adalah ...", ["Menambah jumlah uang saku dari sekolah", "Membantu membedakan antara kebutuhan pokok dan keinginan sesaat", "Menghapus kewajiban belajar di rumah", "Mempermudah berbelanja barang mewah"], 1, "Kalimat pertama menyebut membantu membedakan antara kebutuhan pokok dengan keinginan sesaat."],
        ["Strategi menabung yang efektif menurut kalimat kedua adalah ...", ["Menabung sisa uang di akhir bulan jika masih ada", "Menyisihkan minimal 20 persen uang saku di awal waktu sebelum dibelanjakan", "Meminjam uang teman saat ingin membeli barang", "Menghabiskan seluruh uang saku setiap hari Jumat"], 1, "Kalimat kedua menyebut menyisihkan minimal dua puluh persen di awal waktu sebelum dibelanjakan."],
        ["Contoh pengeluaran yang termasuk kebutuhan pokok pelajar pada bacaan adalah ...", ["Jajanan kekinian", "Alat tulis sekolah", "Mainan gim daring", "Aksesori telepon genggam"], 1, "Kalimat pertama menyebut 'kebutuhan pokok seperti alat tulis'."],
        ["Tujuan membangun dana darurat sejak usia sekolah sesuai teks adalah ...", ["Agar bisa mentraktir teman setiap hari", "Agar memiliki cadangan biaya mendesak tanpa terus bergantung pada orang tua", "Agar tidak perlu bersekolah lagi", "Agar mendapat hadiah dari bank"], 1, "Kalimat kedua menyebut membangun dana darurat tanpa bergantung terus-menerus pada orang tua."],
        ["Simpulan paling tepat dari bacaan tersebut adalah ...", ["Uang saku remaja selalu kurang untuk ditabung", "Pengelolaan anggaran sederhana melatih kemandirian dan kedisiplinan finansial sejak dini", "Keinginan sesaat harus selalu dipenuhi terlebih dahulu", "Mencatat pengeluaran hanya diperlukan oleh pengusaha"], 1, "Pencatatan dan penyisihan rutin membentuk kebiasaan finansial sehat."]
      ]
    ),
    ...L("TEKS 3 - Jam Dinding Tua di Ruang Keluarga",
      "Setiap malam pukul sembilan, jam dinding bandul peninggalan kakek selalu berdentang sembilan kali dengan suara berat yang khas. Suatu hari jam itu berhenti berdetak karena pegas pemutarnya macet oleh debu. Alih-alih menggantinya dengan jam digital baru, Ayah mengajak Dito membongkar mesinnya secara hati-hati, membersihkan roda giginya dengan kuas halus, hingga detak jarumnya kembali hidup.",
      [
        ["Penyebab jam dinding bandul peninggalan kakek berhenti berdetak adalah ...", ["Baterainya habis terpakai", "Pegas pemutarnya macet oleh debu", "Kaca depannya pecah terjatuh", "Jarum jamnya patah menjadi dua"], 1, "Kalimat kedua menyebut pegas pemutarnya macet oleh debu."],
        ["Langkah yang diambil Ayah dan Dito untuk memperbaiki jam tersebut adalah ...", ["Membeli jam digital baru di toko", "Membongkar mesinnya hati-hati dan membersihkan roda giginya dengan kuas halus", "Menjual jam tua tersebut ke pasar loak", "Membiarkannya tergantung tanpa diperbaiki"], 1, "Kalimat ketiga menyebut membongkar mesinnya secara hati-hati dan membersihkan roda giginya."],
        ["Alat yang digunakan untuk membersihkan debu pada roda gigi jam adalah ...", ["Kain basah", "Kuas halus", "Sikat kawat besi", "Amplas kasar"], 1, "Kalimat ketiga menyebut 'membersihkan roda giginya dengan kuas halus'."],
        ["Latar waktu dentang jam yang disebutkan pada kalimat pertama cerita adalah ...", ["Pukul enam pagi", "Pukul sembilan malam", "Pukul dua belas siang", "Pukul tiga sore"], 1, "Kalimat pertama menyebut 'Setiap malam pukul sembilan'."],
        ["Pesan moral yang tersirat dari penggalan cerita tersebut adalah ...", ["Barang lama harus segera dibuang saat rusak", "Merawat dan memperbaiki barang warisan dengan telaten menumbuhkan rasa menghargai kenangan", "Jam digital lebih indah daripada jam bandul", "Membersihkan mesin jam tidak membutuhkan ketelitian"], 1, "Ketelatenan merawat benda peninggalan keluarga menjaga nilai sejarah dan kenangan."]
      ]
    ),
    ...L("TEKS 4 - Fenomena Gempa Bumi Tektonik di Wilayah Cincin Api",
      "Indonesia terletak di pertemuan tiga lempeng tektonik besar dunia—Indo-Australia, Eurasia, dan Pasifik—yang terus bergerak saling bertumbukan maupun bergesekan. Ketika energi regangan pada batas lempeng dilepaskan secara tiba-tiba, terjadilah gempa bumi tektonik yang getarannya merambat ke permukaan dan menuntut kesiapsiagaan bangunan tahan gempa.",
      [
        ["Tiga lempeng tektonik besar dunia yang bertemu di wilayah Indonesia menurut teks adalah ...", ["Afrika, Amerika Selatan, dan Antarktika", "Indo-Australia, Eurasia, dan Pasifik", "Arab, Karibia, dan Filipina", "Nazca, Cocos, dan Amerika Utara"], 1, "Kalimat pertama menyebut lempeng Indo-Australia, Eurasia, dan Pasifik."],
        ["Penyebab terjadinya gempa bumi tektonik berdasarkan bacaan adalah ...", ["Runtuhnya gua kapur di pegunungan", "Pelepasan energi regangan secara tiba-tiba pada batas lempeng yang bertumbukan", "Tiupan angin badai di tengah samudra", "Pemanasan suhu air laut"], 1, "Kalimat kedua menjelaskan pelepasan energi regangan pada batas lempeng secara tiba-tiba."],
        ["Langkah mitigasi fisik yang ditekankan pada bagian akhir bacaan adalah ...", ["Melarang warga tinggal di kepulauan", "Menerapkan konstruksi bangunan tahan gempa sebagai bentuk kesiapsiagaan", "Menggali terowongan di bawah lempeng bumi", "Menghentikan pergerakan lempeng tektonik"], 1, "Kalimat kedua menyebut 'menuntut kesiapsiagaan bangunan tahan gempa'."],
        ["Bagaimana sifat pergerakan lempeng-lempeng tektonik di kerak Bumi?", ["Diam tidak pernah bergerak sedikit pun", "Terus bergerak saling bertumbukan maupun bergesekan", "Hanya bergerak saat musim hujan", "Berputar mengelilingi atmosfer"], 1, "Kalimat pertama menyebut 'yang terus bergerak saling bertumbukan maupun bergesekan'."],
        ["Simpulan yang paling tepat dari paragraf tersebut adalah ...", ["Gempa tektonik di Indonesia dapat dicegah sepenuhnya", "Letak geografis Indonesia pada pertemuan lempeng menuntut kesadaran mitigasi bencana gempa", "Lempeng Pasifik tidak memengaruhi wilayah Indonesia", "Getaran gempa hanya terjadi di dasar laut"], 1, "Kondisi geologis pertemuan tiga lempeng menjadikan kesiapsiagaan gempa sangat krusial."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi9"] = [
    ...L("TEKS 1 - Sistem Subak dan Harmoni Ekosistem Sawah Bali",
      "Subak merupakan organisasi kemasyarakatan tradisional di Bali yang mengatur sistem pengairan sawah secara adil dari hulu hingga hilir berlandaskan filosofi Tri Hita Karana. Melalui musyawarah jadwal tanam serempak serta pembagian air proporsional, sistem ini mencegah konflik antarpetani sekaligus memutus siklus hidup hama padi secara alami.",
      [
        ["Landasan filosofis yang mendasari sistem irigasi Subak di Bali menurut teks adalah ...", ["Bhinneka Tunggal Ika", "Tri Hita Karana", "Tut Wuri Handayani", "Sumpah Palapa"], 1, "Kalimat pertama menyebut berlandaskan filosofi Tri Hita Karana."],
        ["Dua manfaat utama pengaturan jadwal tanam serempak dan musyawarah air Subak adalah ...", ["Meningkatkan harga pupuk dan mengurangi jumlah petani", "Mencegah konflik antarpetani serta memutus siklus hidup hama padi secara alami", "Mengeringkan sungai di wilayah hilir dan memperluas jalan desa", "Menghapus seluruh penggunaan pupuk organik"], 1, "Kalimat kedua menyebut mencegah konflik antarpetani sekaligus memutus siklus hidup hama padi."],
        ["Bagaimana cara distribusi air diatur dalam sistem Subak?", ["Hanya mengairi sawah di dekat gunung saja", "Diatur secara adil dari hulu hingga hilir melalui musyawarah", "Dibagikan berdasarkan luas rumah warga", "Menggunakan mesin pompa otomatis tanpa kesepakatan"], 1, "Kalimat pertama dan kedua menyebut mengatur pengairan sawah secara adil dari hulu hingga hilir melalui musyawarah."],
        ["Kata 'proporsional' pada kalimat kedua bermakna ...", ["sama rata tanpa melihat ukuran sawah", "seimbang atau sesuai dengan bagian dan kebutuhan masing-masing", "berlebihan di bagian hulu", "sangat sedikit"], 1, "'Pembagian air proporsional' berarti seimbang sesuai kebutuhan lahan masing-masing."],
        ["Simpulan paling tepat dari bacaan tersebut adalah ...", ["Irigasi modern tidak cocok diterapkan di Bali", "Kearifan lokal Subak terbukti menjaga keadilan sosial sekaligus kelestarian ekologi pertanian", "Musyawarah petani selalu memicu perselisihan", "Hama padi hanya dapat dibasmi dengan bahan kimia"], 1, "Subak memadukan keadilan pembagian air dan pengendalian hama secara alami."]
      ]
    ),
    ...L("TEKS 2 - Literasi Gizi dan Membaca Label Kemasan Pangan",
      "Sebelum membeli makanan atau minuman kemasan, konsumen cerdas perlu memeriksa tabel informasi nilai gizi dan komposisi bahan pada bagian belakang kemasan. Memperhatikan takaran saji serta batas konsumsi gula, garam, dan lemak harian membantu remaja mencegah risiko obesitas serta penyakit tidak menular sejak usia muda.",
      [
        ["Dua bagian penting pada kemasan pangan yang perlu diperiksa sebelum membeli menurut teks adalah ...", ["Warna gambar kemasan dan ukuran huruf merek", "Tabel informasi nilai gizi dan komposisi bahan", "Nama toko penjual dan harga promo", "Bentuk tutup botol dan jenis plastik"], 1, "Kalimat pertama menyebut tabel informasi nilai gizi dan komposisi bahan."],
        ["Tiga kandungan gizi yang batas konsumsinya perlu diperhatikan remaja agar terhindar dari obesitas adalah ...", ["Vitamin A, zat besi, dan kalsium", "Gula, garam, dan lemak", "Air putih, serat, dan protein nabati", "Karbohidrat kompleks, seng, dan yodium"], 1, "Kalimat kedua menyebut batas konsumsi gula, garam, dan lemak harian."],
        ["Manfaat jangka panjang membiasakan membaca label informasi nilai gizi sejak remaja adalah ...", ["Mempercepat waktu berbelanja di pasar", "Mencegah risiko obesitas dan penyakit tidak menular sejak dini", "Mengurangi jumlah makanan di rumah", "Menghapus kebutuhan olahraga rutin"], 1, "Kalimat kedua menyebut mencegah risiko obesitas serta penyakit tidak menular sejak usia muda."],
        ["Mengapa 'takaran saji' pada label gizi penting diperhatikan?", ["Untuk mengetahui warna asli makanan di dalam kemasan", "Karena angka kalori dan gula pada tabel dihitung per satu kali takaran saji, bukan seluruh isi kemasan", "Untuk menghitung berat plastik pembungkus", "Agar kemasan mudah dibuka"], 1, "Takaran saji menentukan berapa porsi dalam satu kemasan sehingga total asupan gizi tidak salah hitung."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Cara mendesain kemasan makanan menarik", "Pentingnya kecermatan membaca label informasi nilai gizi untuk menjaga kesehatan remaja", "Bahaya mengonsumsi makanan tradisional", "Daftar penyakit menular di sekolah"], 1, "Teks menekankan literasi gizi melalui pembacaan label kemasan."]
      ]
    ),
    ...L("TEKS 3 - Senja di Pelabuhan Kalianget",
      "Angin laut berembus sejuk ketika Fajar membantu kakeknya merapikan jaring ikan di dermaga kayu Pelabuhan Kalianget menjelang senja. Dari kakeknya, Fajar belajar membaca arah angin dan formasi awan sebelum perahu layar bertolak melaut agar terhindar dari badai mendadak. Kakek selalu berpesan bahwa nelayan sejati bukan hanya berani menantang ombak, melainkan juga bijak menghormati isyarat alam.",
      [
        ["Kegiatan yang dilakukan Fajar bersama kakeknya menjelang senja adalah ...", ["Memancing kepiting di hutan bakau", "Merapikan jaring ikan di dermaga kayu Pelabuhan Kalianget", "Mengecat lambung kapal feri", "Menjual ikan di pasar malam"], 1, "Kalimat pertama menyebut merapikan jaring ikan di dermaga kayu Pelabuhan Kalianget."],
        ["Pengetahuan pelayaran tradisional yang diajarkan kakek kepada Fajar adalah ...", ["Cara memperbaiki mesin kapal modern", "Membaca arah angin dan formasi awan sebelum melaut", "Menghitung harga jual ikan di kota besar", "Membuat kompas dari jarum besi"], 1, "Kalimat kedua menyebut belajar membaca arah angin dan formasi awan sebelum perahu bertolak."],
        ["Tujuan mempelajari arah angin dan formasi awan sebelum melaut menurut bacaan adalah ...", ["Agar kapal melaju lebih lambat", "Agar terhindar dari bahaya badai mendadak di tengah laut", "Agar ikan mudah masuk ke jaring", "Agar layar perahu tidak basah"], 1, "Kalimat kedua menyebut 'agar terhindar dari badai mendadak'."],
        ["Pesan moral yang selalu ditekankan kakek kepada Fajar adalah ...", ["Nelayan harus melaut dalam cuaca apa pun tanpa rasa takut", "Nelayan sejati harus berani sekaligus bijak menghormati tanda-tanda alam", "Jaring ikan tidak perlu dirapikan setelah dipakai", "Angin laut selalu bertiup tenang sepanjang tahun"], 1, "Kalimat ketiga menyebut bijak menghormati isyarat alam."],
        ["Latar tempat dan waktu dalam penggalan cerita tersebut adalah ...", ["Pasar ikan pada pagi hari", "Dermaga Pelabuhan Kalianget menjelang senja", "Tengah samudra pada tengah malam", "Pantai berpasir pada siang terik"], 1, "Kalimat pertama menyebut dermaga kayu Pelabuhan Kalianget menjelang senja."]
      ]
    ),
    ...L("TEKS 4 - Fenomena Karbon Aktif sebagai Penjernih Air Alami",
      "Karbon aktif yang dibuat dari tempurung kelapa atau bambu melalui proses pemanasan bersuhu tinggi memiliki jutaan pori-pori mikroskopis dengan luas permukaan sangat besar. Struktur berpori tersebut mampu menyerap zat warna, bau tidak sedap, serta senyawa klorin dan logam berat terlarut sehingga banyak dimanfaatkan sebagai media penyaring air bersih ramah lingkungan.",
      [
        ["Bahan alami yang digunakan untuk membuat karbon aktif menurut bacaan adalah ...", ["Pasir pantai dan batu kapur", "Tempurung kelapa atau bambu", "Serbuk besi dan kaca bekas", "Kulit pisang dan daun kering"], 1, "Kalimat pertama menyebut dibuat dari tempurung kelapa atau bambu."],
        ["Sifat fisik karbon aktif yang membuatnya efektif menyerap zat pencemar adalah ...", ["Berwarna putih mengilap dan sangat licin", "Memiliki jutaan pori-pori mikroskopis dengan luas permukaan sangat besar", "Mudah larut di dalam air hangat", "Menghasilkan gelembung udara panas"], 1, "Kalimat pertama dan kedua menjelaskan jutaan pori-pori mikroskopis dengan luas permukaan besar."],
        ["Zat-zat dalam air yang dapat diserap oleh karbon aktif sesuai teks meliputi ...", ["Garam dapur dan gula pasir", "Zat warna, bau tidak sedap, klorin, dan logam berat terlarut", "Oksigen murni dan mineral kalsium", "Minyak tanah dan bensin murni"], 1, "Kalimat kedua menyebut zat warna, bau tidak sedap, senyawa klorin, dan logam berat terlarut."],
        ["Proses pembuatan karbon aktif dari tempurung kelapa dilakukan melalui ...", ["Perendaman air garam selama sebulan", "Pemanasan bersuhu tinggi", "Penjemuran di tempat teduh", "Pencampuran dengan tanah liat"], 1, "Kalimat pertama menyebut 'melalui proses pemanasan bersuhu tinggi'."],
        ["Simpulan yang paling sesuai dengan isi bacaan adalah ...", ["Tempurung kelapa hanya berguna sebagai bahan bakar", "Pemanfaatan tempurung kelapa menjadi karbon aktif menghadirkan solusi penjernih air ramah lingkungan", "Karbon aktif mencemari sumber air bersih", "Air keruh tidak dapat disaring secara alami"], 1, "Limbah alami seperti tempurung kelapa dapat diolah menjadi penyaring air efektif."]
      ]
    )
  ];
})();
(function() {
  const L = (j, t, s) => s.map(([q, p, b, h], i) => ({ q: `[${j}]\n${t}\n\n${i + 1}. ${q}`, p, b, bahas: h }));

  window.BANK_SOAL_MASTER["tka_smp_literasi_sesi10"] = [
    ...L("TEKS 1 - Taman Nasional Baluran dan Ekosistem Sabana Jawa",
      "Taman Nasional Baluran di ujung timur Pulau Jawa dijuluki 'Africa van Java' karena memiliki hamparan padang sabana luas yang berlatar Gunung Baluran. Pada musim kemarau, rumput sabana menguning keemasan dan menjadi habitat alami bagi banteng jawa, rusa timor, kerbau liar, serta burung merak hijau yang hidup bebas di alam terbuka.",
      [
        ["Alasan Taman Nasional Baluran dijuluki 'Africa van Java' menurut bacaan adalah ...", ["Memiliki gurun pasir terluas di Asia", "Memiliki hamparan padang sabana luas yang berlatar Gunung Baluran", "Terletak di benua Afrika bagian timur", "Memiliki sungai terpanjang di Pulau Jawa"], 1, "Kalimat pertama menyebut karena memiliki hamparan padang sabana luas berlatar Gunung Baluran."],
        ["Satwa liar yang hidup bebas di ekosistem sabana Baluran sesuai teks adalah ...", ["Orangutan dan harimau sumatra", "Banteng jawa, rusa timor, kerbau liar, dan burung merak hijau", "Komodo dan burung cenderawasih", "Gajah sumatra dan badak bercula satu"], 1, "Kalimat kedua menyebut banteng jawa, rusa timor, kerbau liar, serta burung merak hijau."],
        ["Bagaimana perubahan kenampakan padang sabana Baluran saat musim kemarau tiba?", ["Tertutup salju putih tebal", "Rumput sabana menguning keemasan", "Berubah menjadi danau air tawar", "Dipenuhi pohon bakau tinggi"], 1, "Kalimat kedua menyebut 'Pada musim kemarau, rumput sabana menguning keemasan'."],
        ["Letak geografis Taman Nasional Baluran yang disebutkan pada kalimat pertama adalah ...", ["Ujung barat Pulau Jawa", "Ujung timur Pulau Jawa", "Tengah Pulau Kalimantan", "Selatan Pulau Sulawesi"], 1, "Kalimat pertama menyebut 'di ujung timur Pulau Jawa'."],
        ["Simpulan paling tepat dari bacaan tersebut adalah ...", ["Padang sabana tidak cocok menjadi habitat satwa liar", "Taman Nasional Baluran merupakan kawasan konservasi unik yang melindungi ekosistem sabana dan satwa khas Jawa", "Burung merak hijau hanya hidup di kebun binatang", "Musim kemarau merusak seluruh ekosistem Baluran"], 1, "Baluran menjaga kelestarian ekosistem sabana beserta beragam satwa dilindungi."]
      ]
    ),
    ...L("TEKS 2 - Literasi Keamanan Siber dan Perlindungan Kata Sandi",
      "Maraknya layanan digital menuntut pelajar menjaga keamanan akun pribadi dengan menggunakan kata sandi (password) yang kuat—kombinasi huruf besar, huruf kecil, angka, dan simbol—serta tidak memakai kata sandi yang sama untuk semua aplikasi. Mengaktifkan autentikasi dua faktor (2FA) memberikan lapisan perlindungan tambahan agar akun tidak mudah diretas meskipun kata sandi diketahui pihak lain.",
      [
        ["Empat unsur penyusun kata sandi (password) yang kuat menurut bacaan adalah ...", ["Tanggal lahir, nama panggilan, nomor rumah, dan nama hewan", "Huruf besar, huruf kecil, angka, dan simbol", "Nama sekolah, kelas, hobi, dan warna kesukaan", "Hanya deretan angka berurutan dari satu sampai delapan"], 1, "Kalimat pertama menyebut kombinasi huruf besar, huruf kecil, angka, dan simbol."],
        ["Kebiasaan berbahaya dalam mengelola kata sandi yang harus dihindari sesuai teks adalah ...", ["Mengganti kata sandi secara berkala", "Memakai kata sandi yang sama untuk seluruh aplikasi digital", "Menyimpan catatan sandi di tempat aman", "Menggunakan kombinasi karakter acak"], 1, "Kalimat pertama menyebut 'serta tidak memakai kata sandi yang sama untuk semua aplikasi'."],
        ["Fungsi utama mengaktifkan autentikasi dua faktor (2FA) pada akun digital adalah ...", ["Mempercepat unduhan berkas besar", "Memberikan lapisan perlindungan tambahan agar akun tidak mudah diretas", "Menghapus seluruh iklan di media sosial", "Menambah kapasitas penyimpanan ponsel"], 1, "Kalimat kedua menyebut memberikan lapisan perlindungan tambahan agar akun tidak mudah diretas."],
        ["Risiko jika seseorang hanya mengandalkan satu kata sandi lemah tanpa 2FA adalah ...", ["Akun menjadi lebih cepat dibuka oleh pemiliknya", "Akun rentan diretas dan disalahgunakan pihak tidak bertanggung jawab", "Koneksi internet terputus otomatis", "Layar ponsel menjadi redup"], 1, "Tanpa sandi kuat dan 2FA, keamanan akun mudah ditembus peretas."],
        ["Gagasan utama paragraf tersebut adalah ...", ["Sejarah penciptaan komputer modern", "Langkah praktis menjaga keamanan akun digital melalui kata sandi kuat dan autentikasi dua faktor", "Cara membuat aplikasi media sosial", "Bahaya bermain gim daring terlalu lama"], 1, "Teks menjelaskan dua cara utama mengamankan akun pribadi di dunia digital."]
      ]
    ),
    ...L("TEKS 3 - Lentera Bambu di Malam Hari Raya",
      "Menjelang malam takbiran di kampung pesisir, pemuda karang taruna bersama anak-anak menghias jalan desa dengan deretan lentera bambu yang diterangi lampu hemat energi. Sambil menganyam bilah bambu dan memasang tiang penyangga, warga dari berbagai usia saling berbagi cerita dan kue tradisional hingga suasana kampung terasa hangat penuh kebersamaan.",
      [
        ["Bahan utama yang digunakan warga kampung pesisir untuk membuat lentera hias jalan adalah ...", ["Kaleng bekas dan kawat besi", "Bilah bambu yang diterangi lampu hemat energi", "Botol plastik dan kertas koran", "Pipa paralon dan kain sutra"], 1, "Kalimat pertama menyebut deretan lentera bambu yang diterangi lampu hemat energi."],
        ["Siapa saja yang terlibat dalam kegiatan menghias jalan desa tersebut?", ["Hanya kepala desa dan perangkatnya", "Pemuda karang taruna, anak-anak, dan warga dari berbagai usia", "Para wisatawan dari luar kota", "Pedagang pasar tradisional saja"], 1, "Kalimat pertama dan kedua menyebut pemuda karang taruna, anak-anak, serta warga berbagai usia."],
        ["Suasana sosial yang tercipta dari kegiatan gotong royong tersebut adalah ...", ["Sepi dan penuh persaingan", "Hangat dan penuh kebersamaan", "Tegang dan terburu-buru", "Bising dan berantakan"], 1, "Kalimat kedua menyebut 'suasana kampung terasa hangat penuh kebersamaan'."],
        ["Latar tempat dan waktu terjadinya peristiwa dalam penggalan cerita adalah ...", ["Tengah kota pada siang hari", "Kampung pesisir menjelang malam takbiran", "Pegunungan tinggi pada pagi hari", "Pelabuhan ikan pada musim hujan"], 1, "Kalimat pertama menyebut 'Menjelang malam takbiran di kampung pesisir'."],
        ["Nilai budaya dan sosial yang tercermin dari bacaan tersebut adalah ...", ["Sikap individualistis warga kota", "Semangat gotong royong dan kerukunan antarwarga lintas generasi", "Pemborosan energi listrik desa", "Persaingan menghias rumah termewah"], 1, "Kerja sama lintas usia mempererat tali silaturahmi masyarakat."]
      ]
    ),
    ...L("TEKS 4 - Mengenal Teknologi Biogas dari Limbah Peternakan",
      "Kotoran ternak sapi di pedesaan yang sebelumnya mencemari lingkungan dan menimbulkan bau tidak sedap kini dapat diolah menjadi biogas melalui proses fermentasi anaerob di dalam reaktor tertutup. Gas metana yang dihasilkan dapat dialirkan langsung ke kompor warga sebagai bahan bakar memasak yang bersih, sementara ampas sisa fermentasinya menjadi pupuk organik berkualitas tinggi.",
      [
        ["Proses ilmiah yang mengubah kotoran ternak menjadi biogas di dalam reaktor tertutup adalah ...", ["Pembakaran terbuka bersuhu tinggi", "Fermentasi anaerob (tanpa oksigen)", "Penyulingan air laut", "Pengeringan di bawah sinar matahari"], 1, "Kalimat pertama menyebut 'melalui proses fermentasi anaerob di dalam reaktor tertutup'."],
        ["Gas utama yang dihasilkan dari instalasi biogas dan dimanfaatkan untuk memasak adalah ...", ["Oksigen murni", "Gas metana", "Nitrogen cair", "Karbon monoksida"], 1, "Kalimat kedua menyebut 'Gas metana yang dihasilkan dapat dialirkan langsung ke kompor warga'."],
        ["Manfaat ganda dari pengolahan kotoran ternak menjadi biogas menurut bacaan adalah ...", ["Menghasilkan bahan bakar gas memasak bersih sekaligus pupuk organik bermutu", "Menghasilkan air minum kemasan dan listrik tenaga surya", "Menggantikan pakan ternak dan obat hewan", "Membuat batu bata bangunan dan genteng"], 1, "Kalimat kedua menyebut bahan bakar memasak bersih serta ampas sisa menjadi pupuk organik berkualitas tinggi."],
        ["Masalah lingkungan awal yang berhasil diatasi dengan teknologi biogas sesuai kalimat pertama adalah ...", ["Kekeringan sumur warga", "Pencemaran lingkungan dan bau tidak sedap dari tumpukan kotoran ternak", "Erosi tanah di lereng bukit", "Abrasi pantai di wilayah pesisir"], 1, "Kalimat pertama menyebut kotoran ternak yang sebelumnya mencemari lingkungan dan menimbulkan bau tidak sedap."],
        ["Simpulan yang paling tepat dari paragraf tersebut adalah ...", ["Limbah peternakan tidak memiliki nilai ekonomi", "Teknologi biogas mengubah limbah peternakan menjadi energi bersih dan pupuk ramah lingkungan", "Gas metana berbahaya jika digunakan untuk memasak", "Pupuk organik hanya bisa dibuat dari daun kering"], 1, "Biogas memberikan solusi pengelolaan limbah sekaligus kemandirian energi pedesaan."]
      ]
    )
  ];
})();
