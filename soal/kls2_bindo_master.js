// File: soal/kls2_bindo_master.js
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const B = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b1 = B([
    ["Saat mendapat hadiah sepeda baru dari ayah, perasaan yang dirasakan adalah ...", ["Sedih", "Senang / Gembira", "Takut", "Marah"], 1, "Hadiah menimbulkan rasa senang dan gembira."],
    ["Ketika mainan kesayangan rusak karena terinjak adik, perasaan awal yang sering muncul adalah ...", ["Bangga", "Kesal atau sedih", "Lucu", "Bosan"], 1, "Barang kesayangan rusak memicu rasa sedih atau kesal."],
    ["Cara menenangkan diri saat sedang merasa marah agar tidak menyakiti teman adalah ...", ["Berteriak keras", "Menarik napas dalam-dalam dan minum air putih", "Melempar buku", "Memukul meja"], 1, "Menarik napas perlahan membantu meredakan amarah."],
    ["Penulisan huruf kapital yang tepat pada awal kalimat dan nama orang adalah ...", ["hari ini rani pergi ke sekolah.", "Hari ini Rani pergi ke sekolah.", "Hari Ini rani pergi ke Sekolah.", "hari Ini Rani pergi ke sekolah."], 1, "Huruf kapital dipakai di awal kalimat dan huruf pertama nama orang."],
    ["Tanda baca yang digunakan untuk mengakhiri kalimat berita adalah tanda ...", ["Tanya (?)", "Titik (.)", "Seru (!)", "Koma (,)"], 1, "Kalimat berita diakhiri tanda titik (.)."],
    ["Tanda baca yang tepat untuk kalimat 'Mengapa kamu menangis...' adalah ...", ["Titik (.)", "Tanya (?)", "Seru (!)", "Titik dua (:)"], 1, "Kalimat tanya menggunakan tanda tanya (?)."],
    ["Ekspresi wajah seseorang yang sedang terkejut biasanya ditunjukkan dengan mata melebar dan mulut ...", ["Tertutup rapat", "Terbuka membentuk huruf O", "Cemberut sedih", "Tersenyum tipis"], 1, "Mata melebar dan mulut terbuka ciri ekspresi terkejut."],
    ["Ketika melihat teman duduk menyendiri sambil menangis, sikap empati yang baik adalah ...", ["Menertawakannya", "Menghampiri dengan lembut dan menanyakan keadaannya", "Membiarkannya saja", "Mengejeknya cengeng"], 1, "Menghibur teman menunjukkan kepedulian dan empati."],
    ["Sinonim atau persamaan kata dari kata 'gembira' adalah ...", ["Duka", "Riang / Senang", "Takut", "Gelisah"], 1, "Gembira bersinonim dengan senang atau riang."],
    ["Antonim atau lawan kata dari kata 'berani' adalah ...", ["Kuat", "Takut / Penakut", "Rajin", "Cerdas"], 1, "Lawan kata berani adalah takut."],
    ["Kalimat 'Ayo, kita hibur Sinta agar tidak sedih!' diakhiri tanda seru karena merupakan kalimat ...", ["Berita", "Ajakan / Seruan", "Tanya", "Larangan"], 1, "Kalimat ajakan dan perintah memakai tanda seru (!)."],
    ["Penggunaan huruf kapital pada nama bulan yang benar terdapat pada kalimat ...", ["Budi lahir pada bulan agustus.", "Budi lahir pada bulan Agustus.", "budi lahir pada Bulan Agustus.", "Budi Lahir pada bulan agustus."], 1, "Huruf pertama nama bulan ditulis kapital (Agustus)."],
    ["Saat mati lampu di malam hari dan suasana gelap gulita, perasaan yang sering muncul adalah ...", ["Lucu", "Takut", "Bangga", "Kenyang"], 1, "Suasana gelap sering menimbulkan rasa takut."],
    ["Puisi pendek tentang perasaan sebaiknya dibaca dengan mimik wajah dan ... yang sesuai.", ["Suara berbisik", "Intonasi / ekspresi yang tepat", "Teriakan marah", "Tergesa-gesa"], 1, "Intonasi dan ekspresi menghidupkan pembacaan puisi."],
    ["Kata 'memaafkan' memiliki kata dasar ...", ["Maafkan", "Maaf", "Memaaf", "Afkan"], 1, "Kata dasar memaafkan adalah maaf (awalan me- + akhiran -kan)."],
    ["Ketika melakukan kesalahan kepada teman, ucapan yang tepat untuk memperbaiki suasana adalah ...", ["Terserah kamu", "Maafkan aku ya, aku tidak sengaja", "Salahmu sendiri", "Biar saja"], 1, "Meminta maaf meredakan konflik dan kesedihan."],
    ["Susunan kata acak 'sedih - jangan - lagi - kamu' menjadi kalimat yang tepat adalah ...", ["Kamu jangan sedih lagi.", "Lagi kamu jangan sedih.", "Sedih kamu lagi jangan.", "Jangan sedih kamu lagi."], 0, "Susunan kalimat efektif: Kamu jangan sedih lagi."],
    ["Perasaan bangga muncul ketika kita berhasil ...", ["Merusak mainan", "Meraih juara lomba dengan usaha jujur", "Datang terlambat", "Lupa mengerjakan PR"], 1, "Prestasi jujur menumbuhkan rasa bangga positif."],
    ["Kata 'menangis' jika dipenggal berdasarkan suku katanya menjadi ...", ["Me-na-ngis", "Men-a-ngis", "Me-nan-gis", "Mena-ngis"], 0, "Pemenggalan suku kata yang tepat: me-na-ngis."],
    ["Mengungkapkan perasaan kepada orang tua atau guru sebaiknya dilakukan dengan bahasa yang ...", ["Kasar dan berteriak", "Sopan, jujur, dan tenang", "Membentak", "Menyalahkan orang lain"], 1, "Komunikasi santun membantu orang lain memahami perasaan kita."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bindo_bab1_sesi1"] = [...b1];
  window.BANK_SOAL_MASTER["kls2_bindo_bab1_sesi2"] = [...b1.slice(7), ...b1.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bindo_bab1_sesi3"] = [...b1.slice(14), ...b1.slice(0, 14)];
})();
(function() {
  const B = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b2 = B([
    ["Pola kalimat 'Siti membaca buku' terdiri atas unsur ...", ["S - P", "S - P - O (Subjek - Predikat - Objek)", "P - O - K", "S - K"], 1, "Siti (S), membaca (P), buku (O)."],
    ["Pada kalimat 'Ayah minum air putih', kata yang berkedudukan sebagai Predikat (P) adalah ...", ["Ayah", "Minum", "Air putih", "Putih"], 1, "Predikat menunjukkan tindakan/kegiatan (minum)."],
    ["Pada kalimat 'Adik makan pisang', kata 'pisang' berkedudukan sebagai ...", ["Subjek", "Objek (O)", "Predikat", "Keterangan"], 1, "Objek adalah sasaran tindakan predikat (pisang)."],
    ["Kegiatan yang baik untuk menjaga kesehatan mata saat membaca buku adalah ...", ["Membaca sambil tiduran", "Membaca di tempat terang dengan jarak sekitar 30 cm", "Membaca di ruangan gelap", "Membaca terlalu dekat dengan buku"], 1, "Jarak 30 cm dan cahaya terang menjaga kesehatan mata."],
    ["Infografik atau poster kesehatan di dinding sekolah bertujuan untuk ...", ["Menghias tembok saja", "Memberikan informasi dan ajakan hidup sehat secara jelas", "Membuat dinding kotor", "Menggantikan buku tulis"], 1, "Poster kesehatan menyampaikan pesan edukasi visual."],
    ["Kata tanya yang digunakan untuk menanyakan cara menjaga kebersihan gigi adalah ...", ["Siapa", "Bagaimana", "Kapan", "Di mana"], 1, "Kata tanya 'bagaimana' menanyakan cara atau proses."],
    ["Kata tanya yang digunakan untuk menanyakan waktu menggosok gigi adalah ...", ["Apa", "Kapan", "Siapa", "Berapa"], 1, "Kata tanya 'kapan' menanyakan waktu kejadian."],
    ["Makanan sehat empat sehat lima sempurna yang mengandung banyak vitamin dan serat adalah ...", ["Permen dan kerupuk", "Sayur-sayuran dan buah-buahan", "Minuman bersoda", "Gorengan berminyak"], 1, "Sayur dan buah kaya vitamin untuk daya tahan tubuh."],
    ["Kalimat berikut yang berpola Subjek - Predikat - Objek (S-P-O) adalah ...", ["Ibu memasak.", "Ibu memasak sayur bayam.", "Di dapur ibu memasak.", "Pagi hari ibu memasak."], 1, "Ibu (S) - memasak (P) - sayur bayam (O)."],
    ["Arti kata 'higienis' dalam bacaan kesehatan adalah ...", ["Kotor berdebu", "Bersih dan bebas dari kuman penyakit", "Mahal harganya", "Berwarna mencolok"], 1, "Higienis berarti bersih serta sehat."],
    ["Grafik gambar (piktogram) makanan kesukaan siswa kelas 2 berguna untuk menyajikan ...", ["Cerita dongeng", "Data jumlah siswa secara ringkas dan mudah dibaca", "Jadwal upacara", "Daftar nama guru"], 1, "Grafik memudahkan pembacaan perbandingan data."],
    ["Aturan 20-20-20 untuk menjaga mata saat menatap layar gawai artinya setiap 20 menit melihat benda sejauh 20 kaki selama ... detik.", ["5", "20", "60", "10"], 1, "Mengistirahatkan mata tiap 20 menit mencegah mata lelah."],
    ["Kalimat ajakan menjaga kebersihan tangan yang tepat adalah ...", ["Jangan cuci tanganmu!", "Ayo, cuci tangan pakai sabun sebelum makan!", "Siapa yang cuci tangan?", "Tangan kotor tidak apa-apa."], 1, "Kalimat ajakan diawali kata 'ayo' atau 'mari'."],
    ["Kata 'olahraga' jika dipenggal berdasarkan suku katanya yang benar adalah ...", ["O-lah-ra-ga", "Ol-ah-ra-ga", "O-la-hra-ga", "Olah-raga"], 0, "Pemenggalan yang tepat: o-lah-ra-ga."],
    ["Penyebab utama gigi berlubang pada anak-anak adalah malas menggosok gigi setelah makan makanan ...", ["Sayur hijau", "Manis seperti permen dan cokelat", "Air putih", "Buah apel"], 1, "Sisa gula merusak lapisan email gigi."],
    ["Pada kalimat 'Rani menyiram tanaman', unsur Subjek (S) adalah ...", ["Menyiram", "Rani", "Tanaman", "Halaman"], 1, "Subjek adalah pelaku kegiatan (Rani)."],
    ["Teks bacaan yang berisi informasi fakta tentang cara mencuci tangan yang benar disebut teks ...", ["Fiksi / Dongeng", "Nonfiksi / Informatif", "Pantun", "Puisi"], 1, "Teks informatif menyampaikan pengetahuan nyata."],
    ["Jajanan di luar pagar sekolah yang terbuka dan dihinggapi lalat sebaiknya ...", ["Dibeli banyak", "Dihindari karena mengandung kuman penyakit", "Dimakan bersama teman", "Disimpan di tas"], 1, "Makanan dihinggapi lalat berisiko menyebabkan diare."],
    ["Istirahat yang paling baik agar tubuh kembali segar esok pagi adalah ...", ["Bermain gim sampai larut", "Tidur malam cukup selama 9–10 jam", "Menonton televisi terus", "Makan camilan pedas"], 1, "Tidur cukup memulihkan energi tubuh anak."],
    ["Kalimat yang menggunakan tanda baca dan huruf kapital paling tepat adalah ...", ["dokter memeriksa kesehatan dina.", "Dokter memeriksa kesehatan Dina.", "Dokter Memeriksa Kesehatan dina?", "dokter memeriksa Kesehatan Dina!"], 1, "Awal kalimat dan nama orang memakai huruf kapital dan diakhiri titik."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bindo_bab2_sesi1"] = [...b2];
  window.BANK_SOAL_MASTER["kls2_bindo_bab2_sesi2"] = [...b2.slice(7), ...b2.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bindo_bab2_sesi3"] = [...b2.slice(14), ...b2.slice(0, 14)];
})();
(function() {
  const B = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b3 = B([
    ["Tempat penyeberangan jalan bagi pejalan kaki yang bergaris hitam putih disebut ...", ["Trotoar", "Zebra cross", "Halte", "Jembatan layang"], 1, "Zebra cross adalah jalur penyeberangan pejalan kaki."],
    ["Sebelum menyeberang jalan raya, langkah keselamatan '4T' yang pertama adalah ...", ["Terus berlari", "Tunggu sebentar, tengok kanan, tengok kiri, tengok kanan lagi", "Tutup mata", "Teriak keras"], 1, "Menengok kanan-kiri memastikan jalan aman dari kendaraan."],
    ["Rambu lalu lintas bergambar huruf 'P' dicoret memiliki arti ...", ["Tempat parkir", "Dilarang parkir", "Dilarang berhenti", "Putar balik"], 1, "Huruf P dicoret menandakan larangan parkir."],
    ["Rambu lalu lintas bergambar huruf 'S' dicoret memiliki arti ...", ["Dilarang masuk", "Dilarang berhenti (stop)", "Jalan licin", "Hati-hati"], 1, "Huruf S dicoret berarti kendaraan dilarang berhenti."],
    ["Penggunaan kata depan 'di' yang ditulis terpisah untuk menunjukkan tempat yang benar adalah ...", ["dirumah", "di rumah", "dimakan", "ditulis"], 1, "Kata depan 'di' penunjuk tempat ditulis terpisah dari kata berikutnya."],
    ["Penulisan imbuhan 'di-' yang ditulis serangkai sebagai kata kerja pasif adalah ...", ["di sekolah", "dibaca", "di taman", "di pasar"], 1, "Imbuhan 'di-' pada kata kerja (dibaca) ditulis serangkai."],
    ["Tanda seru (!) digunakan pada kalimat perintah atau larangan seperti ...", ["Siapa namamu!", "Hati-hati saat menyeberang jalan!", "Ibu pergi ke pasar!", "Buku itu tebal!"], 1, "Kalimat peringatan/perintah diakhiri tanda seru (!)."],
    ["Benda-benda di dapur yang berbahaya dan tidak boleh dimainkan anak-anak adalah ...", ["Sendok plastik", "Kompor gas, pisau tajam, dan korek api", "Piring melamin", "Lap kain"], 1, "Benda tajam dan api berbahaya jika dimainkan anak."],
    ["Bagian tepi jalan raya yang khusus disediakan untuk pejalan kaki disebut ...", ["Jalan tol", "Trotoar", "Rel kereta", "Bundaran"], 1, "Pejalan kaki berjalan aman di atas trotoar."],
    ["Ketika berada di rumah sendirian dan ada orang asing mengetuk pintu, tindakan aman yang dilakukan adalah ...", ["Langsung membukakan pintu lebar", "Tidak membukakan pintu dan segera menghubungi orang tua", "Mengajaknya masuk ruang tamu", "Memberitahu semua isi rumah"], 1, "Waspada terhadap orang asing menjaga keselamatan diri."],
    ["Kalimat berikut yang menggunakan kata depan 'di' secara tepat adalah ...", ["Sepatu disimpan dirak sepatu.", "Sepatu disimpan di rak sepatu.", "Buku itu di baca adik.", "Adik bermain dihalaman."], 1, "'di rak sepatu' menunjukkan tempat sehingga ditulis terpisah."],
    ["Warna lampu lalu lintas yang memberi tanda pengendara harus bersiap-siap berhenti adalah warna ...", ["Hijau", "Kuning", "Merah", "Biru"], 1, "Lampu kuning tanda hati-hati dan bersiap berhenti."],
    ["Rambu lalu lintas dengan warna dasar kuning dan gambar hitam umumnya berisi ...", ["Larangan keras", "Peringatan hati-hati (misalnya jalan licin atau tikungan)", "Perintah wajib", "Petunjuk arah kota"], 1, "Rambu kuning adalah rambu peringatan bagi pengguna jalan."],
    ["Saat berjalan di lantai kamar mandi yang basah, kita harus melangkah pelan agar tidak ...", ["Cepat sampai", "Terpeleset dan terjatuh", "Kedinginan", "Basah kaki"], 1, "Lantai basah licin berisiko menyebabkan jatuh."],
    ["Arti rambu lalu lintas bergambar anak sekolah sedang menyeberang adalah ...", ["Tempat bermain anak", "Hati-hati banyak anak sekolah melintas", "Dilarang berjalan kaki", "Sekolah tutup"], 1, "Peringatan bagi pengendara untuk memperlambat laju di zona sekolah."],
    ["Stopkontak listrik di dinding rumah tidak boleh disentuh dengan tangan yang ...", ["Kering", "Basah karena dapat menyengat listrik", "Bersih", "Memakai sarung tangan karet"], 1, "Air penghantar listrik sehingga tangan basah sangat berbahaya."],
    ["Kalimat larangan yang santun dan jelas untuk menjaga keselamatan di tangga sekolah adalah ...", ["Ayo lari di tangga!", "Jangan berlari-lari saat menuruni tangga!", "Tangga sekolah sangat tinggi.", "Siapa yang turun tangga?"], 1, "Larangan berlari di tangga mencegah kecelakaan jatuh."],
    ["Cerita fiksi adalah cerita yang dibuat berdasarkan ...", ["Data statistik resmi", "Khayalan atau imajinasi pengarang", "Berita koran harian", "Laporan cuaca"], 1, "Cerita fiksi bersifat rekaan/imajinasi untuk hiburan dan pesan moral."],
    ["Ketika naik sepeda motor bersama ayah, perlengkapan keselamatan wajib yang harus dipakai di kepala adalah ...", ["Topi kain", "Helm standar (SNI)", "Payung", "Kacamata hitam"], 1, "Helm melindungi kepala saat berkendara motor."],
    ["Dengan mematuhi rambu dan aturan keselamatan di rumah, jalan, maupun sekolah, kita akan terhindar dari ...", ["Teman baru", "Kecelakaan dan bahaya cedera", "Pelajaran sekolah", "Hadiah guru"], 1, "Kewaspadaan menjaga keselamatan diri di mana saja."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bindo_bab3_sesi1"] = [...b3];
  window.BANK_SOAL_MASTER["kls2_bindo_bab3_sesi2"] = [...b3.slice(7), ...b3.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bindo_bab3_sesi3"] = [...b3.slice(14), ...b3.slice(0, 14)];
})();
(function() {
  const B = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b4 = B([
    ["Kalimat yang berisi pernyataan atau tindakan yang dilakukan langsung oleh subjek disebut kalimat ...", ["Pasif", "Aktif", "Tanya", "Larangan"], 1, "Kalimat aktif predikatnya umumnya berawalan me- atau ber-."],
    ["Kalimat yang subjeknya dikenai suatu pekerjaan atau tindakan disebut kalimat ...", ["Aktif", "Pasif", "Perintah", "Ajakan"], 1, "Kalimat pasif predikatnya umumnya berawalan di-."],
    ["Contoh kalimat aktif berikut ini adalah ...", ["Bola ditendang Budi.", "Budi menendang bola.", "Buku dibaca Sinta.", "Nasi dimasak ibu."], 1, "Budi (S) melakukan tindakan menendang (me-)."],
    ["Bentuk kalimat pasif dari 'Ibu menyiram bunga' adalah ...", ["Bunga menyiram ibu.", "Bunga disiram ibu.", "Ibu disiram bunga.", "Menyiram bunga ibu."], 1, "Objek 'bunga' menjadi subjek dan predikat berubah menjadi 'disiram'."],
    ["Setiap keluarga di Indonesia memiliki kebiasaan, bahasa daerah, dan makanan khas yang berbeda-beda. Sikap kita sebaiknya ...", ["Mengejek kebiasaan keluarga lain", "Saling menghormati dan bangga dengan keragaman budaya", "Memaksa orang lain mengikuti kebiasaan kita", "Malu dengan budaya sendiri"], 1, "Keberagaman budaya keluarga memperkaya persatuan bangsa."],
    ["Keterangan yang berisi kebenaran nyata dan dapat dibuktikan disebut ...", ["Opini", "Fakta", "Khayalan", "Dongeng"], 1, "Fakta adalah hal yang benar-benar terjadi dan terbukti."],
    ["Keterangan yang berisi pendapat, pikiran, atau perasaan seseorang yang belum tentu sama bagi semua orang disebut ...", ["Fakta", "Opini (pendapat)", "Berita", "Sejarah"], 1, "Opini bersifat subjektif berupa pendapat."],
    ["Manakah kalimat berikut yang merupakan fakta?", ["Menurutku kue buatan ibu paling enak sedunia.", "Indonesia merdeka pada tanggal 17 Agustus 1945.", "Warna biru lebih bagus daripada merah.", "Sepertinya hari ini akan hujan deras."], 1, "Tanggal kemerdekaan Indonesia adalah fakta sejarah."],
    ["Manakah kalimat berikut yang merupakan opini?", ["Matahari terbit dari sebelah timur.", "Sapi berkaki empat.", "Menurut saya, membaca buku cerita sangat menyenangkan.", "Satu minggu terdiri atas tujuh hari."], 2, "Kata 'menurut saya' menandakan opini atau pendapat."],
    ["Dalam silsilah keluarga inti, anggota keluarga terdiri atas ayah, ibu, dan ...", ["Paman dan bibi", "Anak-anak (kakak dan adik)", "Kakek dan nenek", "Tetangga sebelah"], 1, "Keluarga inti terdiri dari ayah, ibu, dan anak."],
    ["Orang tua laki-laki dari ayah atau ibu kita dipanggil ...", ["Paman", "Kakek", "Kakak", "Sepupu"], 1, "Kakek adalah ayah dari orang tua kita."],
    ["Saudara perempuan dari ayah atau ibu kita dipanggil ...", ["Nenek", "Bibi / Tante", "Adik", "Keponakan"], 1, "Bibi adalah saudara perempuan ayah atau ibu."],
    ["Noken adalah tas tradisional unik yang dibawa dengan disangkutkan di kepala berasal dari daerah ...", ["Jawa Timur", "Papua", "Sumatra Barat", "Kalimantan"], 1, "Noken merupakan warisan budaya unik masyarakat Papua."],
    ["Panggilan 'Abang' atau 'Kakak' untuk saudara laki-laki yang lebih tua biasanya digunakan di daerah ...", ["Jawa Tengah", "Jakarta (Betawi) dan Sumatra", "Bali", "Madura"], 1, "Abang adalah sapaan khas Betawi/Melayu untuk kakak laki-laki."],
    ["Bentuk kalimat aktif dari kalimat pasif 'Piring dicuci kakak' adalah ...", ["Kakak dicuci piring.", "Kakak mencuci piring.", "Piring mencuci kakak.", "Dicuci kakak piring."], 1, "Subjek pelaku 'kakak' melakukan tindakan 'mencuci'."],
    ["Pembagian tugas rumah tangga seperti menyapu, mengepel, dan menyiram tanaman membuat pekerjaan keluarga terasa ...", ["Sangat berat", "Lebih ringan dan cepat selesai", "Membosankan", "Berantakan"], 1, "Gotong royong keluarga meringankan pekerjaan."],
    ["Kata 'berkebun' memiliki imbuhan awalan ...", ["me-", "ber-", "di-", "ter-"], 1, "Kata dasar 'kebun' mendapat awalan 'ber-' menjadi 'berkebun'."],
    ["Ketika berkumpul bersama keluarga besar saat hari raya, sikap santun kepada anggota keluarga yang lebih tua adalah ...", ["Berbicara kasar", "Menyapa ramah, bersalaman, dan berbicara sopan", "Bermain ponsel terus", "Mengabaikan tamu"], 1, "Silaturahmi mempererat kasih sayang keluarga besar."],
    ["Tabel perbandingan kebiasaan keluarga berguna untuk melihat persamaan dan ... antaranggota keluarga.", ["Permusuhan", "Perbedaan secara jelas", "Kerugian", "Kesalahan"], 1, "Tabel memudahkan perbandingan informasi secara rapi."],
    ["Keunikan dan perbedaan tugas setiap anggota keluarga justru membuat kehidupan keluarga saling ...", ["Bertengkar", "Melengkapi dan harmonis", "Menjauh", "Bersaing"], 1, "Perbedaan peran saling melengkapi dalam keluarga."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bindo_bab4_sesi1"] = [...b4];
  window.BANK_SOAL_MASTER["kls2_bindo_bab4_sesi2"] = [...b4.slice(7), ...b4.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bindo_bab4_sesi3"] = [...b4.slice(14), ...b4.slice(0, 14)];
})();
(function() {
  const B = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b5 = B([
    ["Cerita fiksi yang tokoh-tokohnya berupa hewan yang dapat berbicara dan bertingkah laku seperti manusia disebut ...", ["Legenda", "Fabel", "Mitos", "Berita"], 1, "Fabel adalah cerita binatang yang mengandung pesan moral."],
    ["Penggunaan tanda baca koma (,) yang tepat untuk memisahkan pemerincian dalam kalimat adalah ...", ["Ibu membeli apel jeruk dan pisang.", "Ibu membeli apel, jeruk, dan pisang.", "Ibu membeli, apel jeruk, dan pisang.", "Ibu, membeli apel jeruk dan pisang."], 1, "Tanda koma dipakai di antara unsur-unsur pemerincian lebih dari dua."],
    ["Kata yang menyatakan nama benda, orang, hewan, atau tempat disebut kata ...", ["Sifat", "Benda (nomina)", "Kerja", "Bilangan"], 1, "Kata benda merujuk pada segala sesuatu yang dibendakan."],
    ["Kata yang menerangkan keadaan atau watak suatu benda maupun tokoh disebut kata ...", ["Kerja", "Sifat (adjektiva)", "Tanya", "Depan"], 1, "Kata sifat menerangkan ciri/sifat, seperti ramah, rajin, besar."],
    ["Manakah kelompok kata berikut yang seluruhnya merupakan kata benda?", ["Lari, makan, tidur", "Meja, kursi, pensil", "Cantik, pintar, jujur", "Di, ke, dari"], 1, "Meja, kursi, dan pensil adalah kata benda konkret."],
    ["Manakah kelompok kata berikut yang seluruhnya merupakan kata sifat?", ["Buku, tas, sepatu", "Ramah, jujur, sabar", "Membaca, menulis, menyapu", "Sekolah, pasar, rumah"], 1, "Ramah, jujur, dan sabar adalah kata sifat terpuji."],
    ["Saat berteman dengan teman yang memiliki kesukaan atau suku berbeda, kita harus bersikap ...", ["Sombong", "Toleran dan saling menghargai", "Pilih-pilih teman", "Suka mengejek"], 1, "Menghargai perbedaan menjaga kerukunan berteman."],
    ["Dalam fabel 'Kancil dan Siput', pesan moral yang dapat kita teladani adalah ...", ["Boleh meremehkan teman yang lambat", "Jangan sombong dan jangan meremehkan kemampuan orang lain", "Menipu teman agar menang", "Malas berusaha"], 1, "Kesombongan Kancil membuatnya kalah dari Siput yang kompak."],
    ["Penggunaan tanda koma setelah kata seru di awal kalimat yang tepat adalah ...", ["Wah indah sekali pemandangan ini!", "Wah, indah sekali pemandangan ini!", "Wah indah, sekali pemandangan ini!", "Wah indah sekali, pemandangan ini!"], 1, "Tanda koma diletakkan setelah kata seru (wah, aduh, oh)."],
    ["Antonim atau lawan kata dari kata sifat 'rajin' adalah ...", ["Tekun", "Malas", "Cerdas", "Cepat"], 1, "Lawan kata rajin adalah malas."],
    ["Sinonim atau persamaan kata dari kata sifat 'ramah' adalah ...", ["Kasar", "Akrab dan sopan", "Pemarah", "Sombong"], 1, "Ramah bersinonim dengan baik budi dan sopan."],
    ["Kata 'bersahabat' terbentuk dari kata dasar 'sahabat' yang mendapat awalan ...", ["me-", "ber-", "di-", "pe-"], 1, "Awalan 'ber-' + 'sahabat' = bersahabat."],
    ["Ketika melihat dua teman bertengkar karena berebut mainan, sikap baik kita adalah ...", ["Ikut berteriak", "Melerai dan mengajak mereka bermain bergantian", "Menertawakan keduanya", "Mengambil mainan untuk diri sendiri"], 1, "Berbagi dan bergantian menyelesaikan pertengkaran dengan damai."],
    ["Tokoh dalam cerita fabel yang memiliki sifat baik dan menjadi panutan disebut tokoh ...", ["Antagonis", "Protagonis", "Figuran", "Narator"], 1, "Protagonis adalah tokoh utama berwatak baik."],
    ["Tokoh dalam cerita yang memiliki sifat buruk atau menentang tokoh baik disebut tokoh ...", ["Protagonis", "Antagonis", "Sutradara", "Penulis"], 1, "Antagonis adalah tokoh penentang berwatak kurang baik."],
    ["Kalimat berikut yang menggunakan kata sifat dengan tepat adalah ...", ["Siti memakai baju meja.", "Rani adalah anak yang santun dan pemaaf.", "Budi sedang buku di kelas.", "Ayah pergi ke rajin."], 1, "Santun dan pemaaf adalah kata sifat yang menerangkan Rani."],
    ["Tanda baca koma juga digunakan sebelum kata penghubung pertentangan seperti ...", ["Dan", "Tetapi / Melainkan", "Atau", "Serta"], 1, "Sebelum kata 'tetapi' dan 'melainkan' diberi tanda koma."],
    ["Contoh penggunaan tanda koma sebelum kata 'tetapi' yang benar adalah ...", ["Dina ingin bermain tetapi hari hujan.", "Dina ingin bermain, tetapi hari hujan.", "Dina ingin, bermain tetapi hari hujan.", "Dina, ingin bermain tetapi hari hujan."], 1, "Tanda koma diletakkan tepat sebelum kata 'tetapi'."],
    ["Alur cerita fabel biasanya terdiri atas bagian awal (perkenalan), tengah (masalah), dan akhir (...).", ["Daftar isi", "Penyelesaian masalah dan pesan moral", "Biodata penulis", "Daftar pustaka"], 1, "Bagian akhir cerita berisi penyelesaian dan amanat."],
    ["Berteman dengan rukun tanpa membeda-bedakan latar belakang membuat suasana belajar di kelas terasa ...", ["Tegang", "Nyaman, ceria, dan penuh semangat", "Sepi", "Menakutkan"], 1, "Kerukunan menciptakan lingkungan belajar yang positif."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bindo_bab5_sesi1"] = [...b5];
  window.BANK_SOAL_MASTER["kls2_bindo_bab5_sesi2"] = [...b5.slice(7), ...b5.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bindo_bab5_sesi3"] = [...b5.slice(14), ...b5.slice(0, 14)];
})();
(function() {
  const B = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b6 = B([
    ["Mata uang resmi yang digunakan sebagai alat pembayaran sah di negara Indonesia adalah ...", ["Dolar", "Rupiah (Rp)", "Ringgit", "Yen"], 1, "Rupiah adalah mata uang resmi Indonesia."],
    ["Penulisan nilai uang 'lima ribu rupiah' dalam angka yang benar adalah ...", ["Rp5.000,00", "Rp. 5000", "5.000 Rp", "Rp500,00"], 0, "Penulisan baku: Rp5.000,00 tanpa spasi setelah Rp dan diakhiri ,00."],
    ["Segala sesuatu yang harus dipenuhi agar manusia dapat hidup sehat dan belajar dengan baik disebut ...", ["Keinginan", "Kebutuhan", "Hiburan", "Koleksi"], 1, "Kebutuhan bersifat pokok dan mendesak (makan, pakaian, alat tulis)."],
    ["Segala sesuatu yang ingin dimiliki untuk kesenangan tambahan namun jika ditunda tidak membahayakan disebut ...", ["Kebutuhan pokok", "Keinginan", "Kewajiban", "Kesehatan"], 1, "Keinginan dapat ditunda pemenuhannya."],
    ["Manakah berikut ini yang termasuk kebutuhan pokok seorang siswa kelas 2 SD?", ["Mainan robot mahal", "Buku tulis, pensil, dan seragam sekolah", "Permen warna-warni", "Gim daring"], 1, "Buku dan alat tulis adalah kebutuhan utama sekolah."],
    ["Kebiasaan menyisihkan sebagian uang saku untuk disimpan di celengan atau bank disebut ...", ["Boros", "Menabung / Hemat", "Berbelanja", "Berutang"], 1, "Menabung melatih hidup hemat dan menyiapkan masa depan."],
    ["Puisi lama Melayu yang tiap baitnya terdiri atas empat baris bersajak a-b-a-b disebut ...", ["Cerpen", "Pantun", "Dongeng", "Fabel"], 1, "Pantun memiliki ciri 4 baris dan rima a-b-a-b."],
    ["Dua baris pertama pada pantun (baris ke-1 dan ke-2) disebut bagian ...", ["Isi", "Sampiran", "Judul", "Penutup"], 1, "Baris 1–2 pantun adalah sampiran pengantar rima."],
    ["Dua baris terakhir pada pantun (baris ke-3 dan ke-4) yang memuat pesan utama disebut bagian ...", ["Sampiran", "Isi pantun", "Pembuka", "Daftar kata"], 1, "Baris 3–4 pantun berisi amanat atau pesan."],
    ["Perhatikan pantun berikut: 'Pergi ke pasar membeli pepaya / Jangan lupa membeli duku / Rajin menabung sejak usia belia / Kelak berguna di masa depanmu.' Isi pantun tersebut adalah ...", ["Membeli pepaya di pasar", "Anjuran rajin menabung sejak kecil demi masa depan", "Duku rasanya manis", "Pasar sangat ramai"], 1, "Isi terletak pada baris ke-3 dan ke-4 pantun."],
    ["Cara mendapatkan uang secara halal dan jujur yang dilakukan oleh orang tua kita adalah ...", ["Mencuri", "Bekerja keras sesuai profesi masing-masing", "Meminta-minta", "Menipu orang lain"], 1, "Pekerjaan halal menghasilkan rezeki berkah."],
    ["Orang yang pekerjaannya mengobati pasien yang sakit di rumah sakit atau puskesmas adalah ...", ["Arsitek", "Dokter", "Nelayan", "Masinis"], 1, "Dokter bertugas memeriksa dan mengobati orang sakit."],
    ["Orang yang pekerjaannya menanam padi dan sayuran di sawah atau ladang adalah ...", ["Pedagang", "Petani", "Pilot", "Sopir"], 1, "Petani menghasilkan bahan pangan bagi masyarakat."],
    ["Orang yang pekerjaannya menangkap ikan di laut menggunakan perahu adalah ...", ["Petani", "Nelayan", "Masinis", "Koki"], 1, "Nelayan mencari ikan di laut."],
    ["Uang logam dan uang kertas harus dirawat dengan baik, yaitu tidak boleh ...", ["Disimpan di dompet", "Dilipat-lipat, dicoret, atau diremas", "Dibelanjakan sesuai kebutuhan", "Ditabung di bank"], 1, "Merawat uang rupiah wujud cinta simbol kedaulatan negara."],
    ["Antonim atau lawan kata dari sikap 'hemat' adalah ...", ["Cermat", "Boros", "Rajin", "Teliti"], 1, "Boros artinya membelanjakan uang secara berlebihan."],
    ["Jika uang saku kita Rp5.000,00 lalu membeli roti Rp3.000,00, sisa uang yang dapat ditabung adalah ...", ["Rp1.000,00", "Rp2.000,00", "Rp3.000,00", "Rp4.000,00"], 1, "Rp5.000,00 - Rp3.000,00 = Rp2.000,00."],
    ["Sebelum membeli barang di toko, hal bijak yang harus dilakukan adalah memeriksa ...", ["Warna bungkusnya saja", "Kebutuhan, harga barang, dan tanggal kedaluwarsa makanan", "Nama penjualnya", "Ukuran tokonya"], 1, "Membeli cermat memastikan barang bermanfaat dan aman."],
    ["Pola rima (persajakan) akhir setiap baris pada pantun yang benar adalah ...", ["a-a-a-a", "a-b-a-b", "a-a-b-b", "a-b-b-a"], 1, "Pantun bersajak silang a-b-a-b."],
    ["Membiasakan hidup hemat dan bijak memakai uang sejak kecil membuat kita menjadi anak yang ...", ["Sombong", "Mandiri, disiplin, dan pandai bersyukur", "Serakah", "Manja"], 1, "Bijak mengelola uang melatih kemandirian finansial sejak dini."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bindo_bab6_sesi1"] = [...b6];
  window.BANK_SOAL_MASTER["kls2_bindo_bab6_sesi2"] = [...b6.slice(7), ...b6.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bindo_bab6_sesi3"] = [...b6.slice(14), ...b6.slice(0, 14)];
})();
(function() {
  const B = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b7 = B([
    ["Upaya mengelola sampah dengan prinsip 3R terdiri atas Reduce, Reuse, dan ...", ["Run", "Recycle (mendaur ulang)", "Read", "Rest"], 1, "3R: Reduce (mengurangi), Reuse (memakai ulang), Recycle (mendaur ulang)."],
    ["Arti kata 'Reduce' dalam pengelolaan sampah ramah lingkungan adalah ...", ["Membakar sampah", "Mengurangi penggunaan barang yang menghasilkan sampah", "Membuang sampah ke sungai", "Menimbun sampah plastik"], 1, "Reduce berarti mengurangi pemakaian bahan sekali pakai."],
    ["Membawa tas kain belanja sendiri dari rumah saat pergi ke pasar merupakan penerapan prinsip ...", ["Recycle", "Reduce (mengurangi kantong plastik)", "Membuang sampah", "Mencemari alam"], 1, "Tas belanja kain mengurangi limbah kantong plastik."],
    ["Memanfaatkan kaleng bekas biskuit menjadi tempat pensil yang cantik merupakan contoh prinsip ...", ["Reduce", "Reuse (menggunakan kembali)", "Merusak", "Membakar"], 1, "Reuse memanfaatkan barang bekas untuk fungsi baru."],
    ["Mengolah sampah kertas bekas atau botol plastik menjadi produk baru di pabrik disebut ...", ["Reduce", "Recycle (mendaur ulang)", "Polusi", "Reboisasi"], 1, "Recycle adalah proses daur ulang bahan bekas."],
    ["Kalimat imbauan atau ajakan menjaga kebersihan lingkungan biasanya ditandai dengan kata ...", ["Mengapa", "Ayo / Mari", "Siapa", "Kapan"], 1, "Kata 'ayo' dan 'mari' digunakan dalam kalimat ajakan."],
    ["Contoh kalimat ajakan menjaga lingkungan sekolah yang paling tepat adalah ...", ["Siapa yang membuang sampah?", "Mari kita jaga kebersihan taman sekolah bersama-sama!", "Taman sekolah sangat luas.", "Jangan menyiram tanaman!"], 1, "Menggunakan kata 'mari' dan diakhiri tanda seru (!)."],
    ["Teks yang berisi langkah-langkah atau urutan cara membuat pot bunga dari botol bekas disebut teks ...", ["Dongeng", "Prosedur / Petunjuk", "Pantun", "Puisi"], 1, "Teks petunjuk menjelaskan urutan langkah melakukan sesuatu."],
    ["Kalimat perintah dalam teks petunjuk membuat kerajinan biasanya menggunakan kata kerja berakhiran ...", ["-an", "-lah atau -kan (misalnya: guntinglah, tempelkan)", "-nya", "-ku"], 1, "Akhiran -lah dan -kan dipakai dalam kalimat instruksi."],
    ["Tumbuhan di sekitar rumah memiliki manfaat sangat besar bagi manusia karena menghasilkan gas ...", ["Karbon dioksida", "Oksigen yang bersih untuk bernapas", "Asap kendaraan", "Debu jalanan"], 1, "Fotosintesis tumbuhan menghasilkan oksigen bagi makhluk hidup."],
    ["Dampak buruk membuang sampah sembarangan ke selokan atau sungai saat musim hujan adalah ...", ["Air sungai menjadi jernih", "Aliran air tersumbat sehingga terjadi banjir", "Ikan tumbuh semakin banyak", "Udara menjadi sejuk"], 1, "Sampah menyumbat saluran air penyebab banjir."],
    ["Kata 'lingkungan' jika dipenggal berdasarkan suku katanya yang tepat adalah ...", ["Ling-kung-an", "Li-ngku-ngan", "Lingk-ung-an", "Ling-ku-ngan"], 0, "Pemenggalan suku kata yang benar: ling-kung-an."],
    ["Cara menghemat penggunaan kertas buku tulis sebagai wujud cinta pohon adalah ...", ["Merobek kertas untuk pesawat mainan", "Menggunakan kedua sisi halaman buku dengan rapi hingga penuh", "Mencoret-coret buku baru", "Membuang buku yang masih kosong"], 1, "Kertas dibuat dari kayu pohon sehingga menghemat kertas menjaga hutan."],
    ["Sinonim atau persamaan kata dari kata 'lestari' adalah ...", ["Punah", "Tetap terjaga dan abadi", "Rusak", "Kotor"], 1, "Lestari berarti tetap seperti keadaan semula dan terpelihara."],
    ["Antonim atau lawan kata dari kata 'bersih' adalah ...", ["Suci", "Kotor / Kumuh", "Rapi", "Indah"], 1, "Lawan kata bersih adalah kotor."],
    ["Ketika melihat keran air di toilet sekolah masih meneteskan air setelah dipakai, tindakan kita adalah ...", ["Membiarkannya saja", "Memutar keran hingga tertutup rapat", "Bermain air di toilet", "Menyuruh adik kelas menutupnya"], 1, "Menutup keran menghemat persediaan air bersih."],
    ["Tempat sampah berwarna hijau di sekolah biasanya disediakan untuk menampung sampah ...", ["Plastik dan kaleng", "Organik (daun kering dan sisa makanan)", "Pecahan kaca", "Baterai bekas"], 1, "Tempat sampah hijau umumnya untuk sampah organik mudah terurai."],
    ["Tempat sampah berwarna kuning di sekolah biasanya disediakan untuk menampung sampah ...", ["Daun basah", "Anorganik (botol plastik dan bungkus makanan)", "Sisa nasi", "Kulit pisang"], 1, "Tempat sampah kuning untuk sampah anorganik daur ulang."],
    ["Puisi bertema alam sekitar menggambarkan keindahan gunung, sawah, laut, dan ...", ["Kemacetan kota", "Pepohonan hijau serta udara segar", "Tumpukan sampah", "Asap pabrik"], 1, "Puisi alam menumbuhkan rasa syukur dan cinta lingkungan."],
    ["Menjaga kebersihan dan kelestarian lingkungan sekolah membuat seluruh warga sekolah hidup ...", ["Sakit-sakitan", "Sehat, nyaman, dan bahagia", "Gelisah", "Malas"], 1, "Lingkungan bersih pangkal kesehatan bersama."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bindo_bab7_sesi1"] = [...b7];
  window.BANK_SOAL_MASTER["kls2_bindo_bab7_sesi2"] = [...b7.slice(7), ...b7.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bindo_bab7_sesi3"] = [...b7.slice(14), ...b7.slice(0, 14)];
})();
(function() {
  const B = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b8 = B([
    ["Kegiatan yang sangat disukai dan sering dilakukan pada waktu luang disebut ...", ["Kewajiban", "Hobi / Kegemaran", "Hukuman", "Pekerjaan rumah"], 1, "Hobi adalah kegemaran yang dilakukan di waktu senggang."],
    ["Agar hobi seperti menggambar, berenang, atau membaca dapat menjadi prestasi membanggakan, kita harus ...", ["Berlatih jika ingin saja", "Berlatih dengan tekun, disiplin, dan pantang menyerah", "Menyombongkan diri", "Mengejek teman lain"], 1, "Ketekunan berlatih mengasah bakat menjadi prestasi."],
    ["Kata penghubung (konjungsi) yang digunakan untuk menggabungkan dua hal yang setara adalah ...", ["Tetapi", "Dan", "Karena", "Walaupun"], 1, "Kata 'dan' menghubungkan dua kata atau frasa yang setara."],
    ["Kata penghubung yang digunakan untuk menyatakan pilihan di antara dua hal adalah ...", ["Dan", "Atau", "Tetapi", "Sehingga"], 1, "Kata 'atau' menyatakan pilihan (misalnya: melukis atau menyanyi)."],
    ["Kalimat berikut yang menggunakan kata penghubung 'dan' secara tepat adalah ...", ["Kamu mau minum teh dan susu?", "Siti gemar membaca buku cerita dan menulis puisi.", "Budi rajin belajar dan nilainya bagus.", "Rani ingin ikut lomba dan sakit perut."], 1, "Menggabungkan dua kegemaran Siti yang setara."],
    ["Kalimat berikut yang menggunakan kata penghubung 'atau' secara tepat adalah ...", ["Ayah dan ibu pergi ke kantor.", "Kamu lebih suka bermain bola basket atau bulu tangkis?", "Adik makan roti atau minum susu pagi.", "Dina rajin berlatih atau menjadi juara."], 1, "Menyatakan pilihan antara basket dan bulu tangkis."],
    ["Teks petunjuk atau brosur informasi lomba biasanya memuat hal-hal penting seperti ...", ["Cerita dongeng hewan", "Nama lomba, waktu pelaksanaan, tempat, dan syarat pendaftaran", "Resep masakan ibu", "Daftar nilai ulangan"], 1, "Brosur lomba memberi informasi lengkap bagi calon peserta."],
    ["Karya seni melipat kertas menjadi berbagai bentuk menarik seperti burung dan perahu berasal dari Jepang disebut ...", ["Kaligrafi", "Origami", "Mosaik", "Batik"], 1, "Origami adalah seni melipat kertas."],
    ["Ketika teman berhasil meraih piala juara lomba menyanyi, ucapan apresiasi yang santun adalah ...", ["Biasa saja", "Selamat ya atas prestasimu, suaramu merdu sekali!", "Kamu menang karena beruntung saja", "Aku pasti lebih hebat"], 1, "Memberi selamat menunjukkan sikap sportif dan menghargai teman."],
    ["Jika belum berhasil menjadi juara saat mengikuti lomba pertama kali, sikap terpuji kita adalah ...", ["Menangis dan berhenti berlatih", "Tetap semangat, mengevaluasi kekurangan, dan lebih giat berlatih", "Menyalahkan juri lomba", "Iri hati kepada pemenang"], 1, "Kegagalan awal adalah pelajaran berharga menuju keberhasilan."],
    ["Waktu yang paling tepat untuk melakukan kegiatan hobi di rumah adalah ...", ["Saat jam pelajaran sekolah berlangsung", "Setelah seluruh tugas sekolah dan kewajiban rumah selesai", "Tengah malam saat jam tidur", "Ketika orang tua sedang meminta bantuan"], 1, "Kewajiban belajar dan membantu orang tua tetap diutamakan."],
    ["Hobi membaca buku di perpustakaan memberikan banyak manfaat, antara lain ...", ["Membuat mata cepat sakit", "Menambah kosakata baru, pengetahuan, dan wawasan luas", "Menghabiskan waktu sia-sia", "Membuat malas menulis"], 1, "Membaca adalah jendela ilmu pengetahuan."],
    ["Cerita pengalaman pribadi tentang mengikuti lomba menggambar ditulis menggunakan sudut pandang orang pertama yaitu kata ...", ["Dia / Mereka", "Aku / Saya", "Kalian", "Beliau"], 1, "Pengalaman pribadi diceritakan memakai kata 'aku' atau 'saya'."],
    ["Kata 'berprestasi' memiliki kata dasar ...", ["Presta", "Prestasi", "Berpres", "Tasi"], 1, "Awalan 'ber-' + kata dasar 'prestasi' = berprestasi."],
    ["Sinonim atau persamaan kata dari kata 'tekun' adalah ...", ["Ceroboh", "Rajin dan bersungguh-sungguh", "Malas", "Cepat bosan"], 1, "Tekun berarti rajin, keras hati, dan bersungguh-sungguh."],
    ["Hobi olahraga seperti bulu tangkis, renang, dan sepak bola bermanfaat ganda karena mengasah bakat sekaligus membuat tubuh ...", ["Cepat lelah", "Sehat dan bugar", "Mudah sakit", "Kaku"], 1, "Hobi olahraga menyehatkan jasmani dan berpotensi prestasi."],
    ["Dalam kalimat 'Raka rajin berlatih renang setiap sore sehingga ia menjadi juara', kata 'sehingga' menyatakan hubungan ...", ["Pilihan", "Akibat / Hasil", "Pertentangan", "Waktu"], 1, "Kata 'sehingga' menunjukkan hasil dari ketekunan berlatih."],
    ["Informasi utama dalam sebuah paragraf bacaan disebut ...", ["Kalimat penjelas", "Ide pokok / Gagasan utama", "Tanda baca", "Judul buku"], 1, "Ide pokok adalah inti pembahasan dalam satu paragraf."],
    ["Membagikan cerita pengalaman hobi di depan kelas melatih siswa memiliki rasa ...", ["Malu dan takut", "Percaya diri dan terampil berbicara di depan umum", "Sombong", "Gugup berlebihan"], 1, "Bercerita di depan kelas melatih keberanian komunikasi."],
    ["Setiap anak memiliki bakat dan hobi yang berbeda-beda, maka kita harus saling mendukung agar semuanya dapat meraih ...", ["Permusuhan", "Prestasi terbaik sesuai potensi masing-masing", "Kesedihan", "Kegagalan"], 1, "Saling mendukung menumbuhkan generasi berprestasi."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bindo_bab8_sesi1"] = [...b8];
  window.BANK_SOAL_MASTER["kls2_bindo_bab8_sesi2"] = [...b8.slice(7), ...b8.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bindo_bab8_sesi3"] = [...b8.slice(14), ...b8.slice(0, 14)];
})();
