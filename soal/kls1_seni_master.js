// File: soal/kls1_seni_master.js
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const S = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b1 = S([
    ["Unsur paling dasar dalam menggambar yang diawali dari sebuah titik yang ditarik memanjang adalah ...", ["Warna", "Garis", "Tekstur", "Ruang"], 1, "Garis terbentuk dari rangkaian titik yang memanjang."],
    ["Garis yang arahnya mendatar dari kiri ke kanan disebut garis ...", ["Tegak (vertikal)", "Datar (horizontal)", "Miring (diagonal)", "Lengkung"], 1, "Garis horizontal membentang mendatar seperti permukaan air tenang."],
    ["Garis yang arahnya berdiri lurus dari atas ke bawah disebut garis ...", ["Datar", "Tegak (vertikal)", "Zig-zag", "Spiral"], 1, "Garis vertikal berdiri tegak lurus seperti tiang bendera."],
    ["Garis yang berbelok-belok patah seperti petir atau puncak gunung disebut garis ...", ["Lengkung", "Zig-zag", "Gelombang", "Spiral"], 1, "Garis zig-zag memiliki sudut-sudut tajam patah."],
    ["Tiga warna pokok (primer) yang tidak dapat dibuat dari campuran warna lain adalah merah, kuning, dan ...", ["Hijau", "Biru", "Ungu", "Oranye"], 1, "Merah, kuning, dan biru adalah tiga warna primer."],
    ["Campuran antara warna merah dan kuning akan menghasilkan warna sekunder yaitu ...", ["Hijau", "Oranye (jingga)", "Ungu", "Cokelat"], 1, "Merah + kuning = oranye/jingga."],
    ["Campuran antara warna kuning dan biru akan menghasilkan warna ...", ["Ungu", "Hijau", "Oranye", "Merah muda"], 1, "Kuning + biru = hijau."],
    ["Campuran antara warna merah dan biru akan menghasilkan warna ...", ["Hijau", "Ungu", "Kuning", "Abu-abu"], 1, "Merah + biru = ungu."],
    ["Alat mewarnai gambar yang berbentuk batang lilin berwarna cerah adalah ...", ["Pensil 2B", "Krayon", "Penghapus", "Penggaris"], 1, "Krayon terbuat dari lilin berwarna yang mudah digoreskan."],
    ["Bentuk yang memiliki sudut-sudut beraturan seperti segitiga, persegi, dan lingkaran disebut bentuk ...", ["Organis", "Geometris", "Abstrak", "Alam"], 1, "Bentuk geometris memiliki ukuran dan sudut teratur."],
    ["Bentuk yang meniru benda-benda alam seperti daun, awan, dan batu disebut bentuk ...", ["Geometris", "Organis / Alam", "Kubus", "Balok"], 1, "Bentuk organis bersifat luwes mengikuti bentuk alam."],
    ["Karya seni menempelkan potongan-potongan kecil kertas warna atau biji-bijian pada pola gambar disebut ...", ["Lukisan", "Kolase / Mozaik", "Patung", "Origami"], 1, "Kolase menempelkan berbagai bahan pada bidang gambar."],
    ["Seni melipat kertas menjadi bentuk perahu, burung, atau bunga tanpa gunting dan lem disebut ...", ["Kolase", "Origami", "Anyaman", "Relief"], 1, "Origami berasal dari Jepang yang berarti seni melipat kertas."],
    ["Topeng wajah yang dibuat dari kertas karton untuk menutupi wajah termasuk karya seni rupa ... dimensi.", ["Satu", "Tiga (3D)", "Dua", "Nol"], 1, "Topeng memiliki volume ruang panjang, lebar, dan tinggi (3D)."],
    ["Lukisan pemandangan alam di atas kertas gambar termasuk karya seni rupa ... dimensi.", ["Tiga", "Dua (2D)", "Empat", "Lima"], 1, "Lukisan hanya memiliki panjang dan lebar pada bidang datar."],
    ["Bahan alam dari tumbuhan yang dapat digunakan untuk membuat karya kolase adalah ...", ["Tutup botol plastik", "Biji kacang hijau, jagung, dan daun kering", "Sedotan minum", "Kertas koran"], 1, "Biji-bijian dan daun kering adalah bahan alam ramah lingkungan."],
    ["Rasa kasar atau halusnya permukaan suatu benda ketika diraba disebut ...", ["Warna", "Tekstur", "Garis", "Gelap terang"], 1, "Tekstur adalah nilai raba permukaan benda (halus/kasar)."],
    ["Permukaan kaca jendela dan kertas HVS memiliki tekstur yang ...", ["Sangat kasar", "Halus dan licin", "Tajam", "Berlubang"], 1, "Kaca dan kertas HVS terasa halus saat diraba."],
    ["Sebelum mewarnai gambar pemandangan dengan krayon, langkah pertama yang dilakukan adalah membuat ...", ["Bingkai kayu", "Sketsa gambar tipis menggunakan pensil", "Tanda tangan", "Lubang kertas"], 1, "Sketsa pensil memudahkan perbaikan sebelum diwarnai."],
    ["Setelah selesai membuat karya seni rupa di kelas, sikap tertib siswa adalah ...", ["Membuang sisa kertas di lantai", "Membersihkan meja dan menyimpan alat gambar dengan rapi", "Mencoret meja teman", "Meninggalkan gunting terbuka"], 1, "Menjaga kebersihan ruang kelas bagian dari sikap berkesenian."]
  ]);
  window.BANK_SOAL_MASTER["kls1_seni_bab1_sesi1"] = [...b1];
  window.BANK_SOAL_MASTER["kls1_seni_bab1_sesi2"] = [...b1.slice(7), ...b1.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls1_seni_bab1_sesi3"] = [...b1.slice(14), ...b1.slice(0, 14)];
})();
(function() {
  const S = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b2 = S([
    ["Segala sesuatu yang dapat didengar oleh indra pendengaran (telinga) disebut ...", ["Warna", "Bunyi / Suara", "Garis", "Gerak"], 1, "Bunyi dihasilkan oleh benda yang bergetar."],
    ["Bunyi gemuruh petir, deburan ombak pantai, dan kicauan burung termasuk jenis bunyi ...", ["Buatan", "Alam", "Mesin", "Elektronik"], 1, "Bunyi alam berasal langsung dari fenomena dan makhluk alam."],
    ["Bunyi klakson mobil, peluit wasit, dan petikan gitar termasuk jenis bunyi ...", ["Alam", "Buatan manusia", "Hewan", "Hujan"], 1, "Bunyi buatan dihasilkan dari alat atau aktivitas manusia."],
    ["Contoh bunyi yang berasal dari anggota tubuh manusia sendiri adalah ...", ["Suara angin", "Tepuk tangan, siulan, dan hentakan kaki", "Suara petir", "Suara bel sekolah"], 1, "Tepuk tangan dan hentakan kaki adalah bunyi internal tubuh."],
    ["Cepat atau lambatnya ketukan dalam sebuah lagu disebut ...", ["Melodi", "Tempo", "Lirik", "Warna suara"], 1, "Tempo mengatur kecepatan alunan lagu."],
    ["Lagu anak-anak seperti 'Balonku', 'Pelangi-Pelangi', dan 'Lihat Kebunku' dinyanyikan dengan perasaan ...", ["Sedih menangis", "Riang gembira dan bersemangat", "Marah", "Takut"], 1, "Lagu anak-anak bertempo ceria dan gembira."],
    ["Lagu kebangsaan negara Republik Indonesia yang wajib dinyanyikan dengan sikap sempurna adalah ...", ["Bagimu Negeri", "Indonesia Raya", "Garuda Pancasila", "Tanah Airku"], 1, "Indonesia Raya ciptaan W.R. Supratman lagu kebangsaan RI."],
    ["Alat musik yang tidak memiliki nada tetapi berfungsi mengatur irama dan ketukan disebut alat musik ...", ["Melodis", "Ritmis", "Harmonis", "Tiup"], 1, "Alat musik ritmis seperti gendang, marakas, dan tamborin."],
    ["Contoh alat musik ritmis sederhana yang dimainkan dengan cara dipukul adalah ...", ["Seruling", "Gendang / Rebana / Drum", "Gitar", "Pianika"], 1, "Gendang dan rebana dimainkan dengan cara dipukul."],
    ["Contoh alat musik ritmis yang dimainkan dengan cara digoyang-goyangkan adalah ...", ["Tifa", "Marakas", "Piano", "Biola"], 1, "Marakas berisi butiran kecil yang berbunyi saat digoyang."],
    ["Contoh alat musik melodis yang dimainkan dengan cara ditiup dan ditekan tutsnya adalah ...", ["Gendang", "Pianika", "Tamborin", "Triangle"], 1, "Pianika menghasilkan nada do-re-mi saat ditiup dan ditekan."],
    ["Botol plastik bekas yang diisi beras atau kerikil kecil dapat dijadikan alat musik ritmis sederhana menyerupai ...", ["Gitar", "Marakas", "Seruling", "Gong"], 1, "Botol berisi biji-bijian menghasilkan bunyi gemericik ritmis."],
    ["Kuat atau lemahnya suara saat menyanyikan sebuah lagu disebut ...", ["Tempo", "Dinamika", "Birama", "Notasi"], 1, "Dinamika mengatur volume keras lembutnya nyanyian."],
    ["Saat menyanyikan lagu 'Nina Bobo' untuk menidurkan adik, suara kita sebaiknya ...", ["Berteriak keras", "Lembut, pelan, dan merdu", "Cepat tergesa-gesa", "Tepuk tangan keras"], 1, "Lagu pengantar tidur dinyanyikan lembut dengan tempo lambat."],
    ["Urutan tangga nada dasar yang benar adalah do - re - mi - fa - sol - la - si - ...", ["re", "do (tinggi)", "mi", "fa"], 1, "Tangga nada diatonis diakhiri kembali dengan nada do tinggi."],
    ["Angka 1 pada notasi angka musik dibaca dengan nada ...", ["Re", "Do", "Mi", "Sol"], 1, "Notasi angka: 1=do, 2=re, 3=mi, 4=fa, 5=sol, 6=la, 7=si."],
    ["Angka 5 pada notasi angka musik dibaca dengan nada ...", ["Fa", "Sol", "La", "Si"], 1, "Angka 5 dibaca 'sol'."],
    ["Lagu daerah 'Tanduk Majeng' dan 'Pajjhâr Lagghu' berasal dari daerah ...", ["Bali", "Madura (Jawa Timur)", "Papua", "Kalimantan"], 1, "Kedua lagu tersebut merupakan warisan budaya masyarakat Madura."],
    ["Bernyanyi bersama-sama dalam kelompok (paduan suara) membutuhkan kekompakan dan saling ...", ["Berebut suara paling keras", "Mendengarkan agar suara selaras", "Menertawakan teman", "Membelakangi dirigen"], 1, "Paduan suara mengutamakan keharmonisan suara bersama."],
    ["Mendengarkan musik dan bernyanyi dengan baik dapat melatih kepekaan pendengaran serta membuat hati ...", ["Gelisah", "Senang dan tenang", "Pemarah", "Malas"], 1, "Seni musik menumbuhkan rasa keindahan dan kegembiraan."]
  ]);
  window.BANK_SOAL_MASTER["kls1_seni_bab2_sesi1"] = [...b2];
  window.BANK_SOAL_MASTER["kls1_seni_bab2_sesi2"] = [...b2.slice(7), ...b2.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls1_seni_bab2_sesi3"] = [...b2.slice(14), ...b2.slice(0, 14)];
})();
(function() {
  const S = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b3 = S([
    ["Unsur utama dalam seni tari yang menggunakan anggota tubuh dari kepala hingga kaki adalah ...", ["Warna cat", "Gerak yang indah dan berirama", "Suara teriakan", "Kertas gambar"], 1, "Gerak tubuh adalah media utama dalam seni tari."],
    ["Gerakan menirukan kupu-kupu terbang dilakukan dengan menggerakkan kedua ... naik turun secara lembut.", ["Kaki", "Lengan dan tangan seperti sayap", "Lutut", "Tumit"], 1, "Ayunan lengan menirukan kepakan sayap kupu-kupu."],
    ["Gerakan menirukan katak melompat dilakukan dengan posisi lutut ...", ["Lurus kaku", "Ditekuk jongkok lalu menolak ke depan", "Disilangkan", "Diangkat satu"], 1, "Gerak hewan menjadi inspirasi tari kreasi anak."],
    ["Gerakan menirukan pohon tertiup angin sepoi-sepoi dilakukan dengan meliukkan badan ke ...", ["Bawah lantai", "Samping kanan dan kiri secara lembut", "Depan cepat", "Belakang keras"], 1, "Gerak tumbuhan tertiup angin bersifat gemulai."],
    ["Tiga unsur pendukung keindahan gerak tari meliputi tenaga, ruang, dan ...", ["Harga kostum", "Waktu (tempo cepat-lambat gerakan)", "Ukuran panggung", "Jumlah penonton"], 1, "Tenaga, ruang, dan waktu adalah unsur pokok gerak tari."],
    ["Gerakan tari menirukan harimau menerkam membutuhkan tenaga yang ...", ["Sangat lemah", "Kuat dan tegas", "Lambat sekali", "Lesu"], 1, "Karakter harimau digambarkan dengan tenaga kuat."],
    ["Gerakan tari menirukan bunga mekar di pagi hari dilakukan dengan tenaga yang ...", ["Kasar dan menghentak", "Lembut dan perlahan", "Sangat cepat", "Kaku"], 1, "Bunga mekar digambarkan dengan gerak lembut perlahan."],
    ["Tingkatan tinggi rendahnya posisi penari saat menari (berdiri, membungkuk, atau duduk) disebut ...", ["Tempo", "Level gerak tari", "Ekspresi", "Iringan"], 1, "Level tari terdiri atas level tinggi, sedang, dan rendah."],
    ["Penari yang melakukan gerakan tari sambil duduk bersila atau berlutut berada pada level ...", ["Tinggi", "Rendah", "Sedang", "Melayang"], 1, "Duduk dan berbaring termasuk level rendah."],
    ["Penari yang melakukan gerakan tari sambil melompat atau berjinjit tinggi berada pada level ...", ["Rendah", "Tinggi", "Sedang", "Duduk"], 1, "Melompat dan jinjit termasuk level tinggi."],
    ["Ekspresi wajah (mimik) penari saat membawakan tarian anak yang ceria harus tampak ...", ["Cemberut sedih", "Tersenyum ramah dan gembira", "Marah melotot", "Takut"], 1, "Mimik wajah mendukung pesan dan suasana tarian."],
    ["Benda yang dipegang atau digunakan penari untuk memperindah tarian seperti selendang, kipas, atau piring disebut ...", ["Kostum", "Properti tari", "Panggung", "Rias wajah"], 1, "Properti tari adalah perlengkapan yang dimainkan penari."],
    ["Tari Pendet dan Tari Kecak adalah contoh tarian tradisional terkenal yang berasal dari daerah ...", ["Jawa Barat", "Bali", "Aceh", "Papua"], 1, "Tari Pendet dan Kecak berasal dari Pulau Bali."],
    ["Tari Saman yang dimainkan secara duduk berbaris rapat dan kompak bertepuk tangan berasal dari ...", ["Bali", "Aceh", "Madura", "Kalimantan"], 1, "Tari Saman berasal dari Provinsi Aceh."],
    ["Saat menari secara berkelompok bersama teman-teman di panggung, hal utama yang harus dijaga adalah ...", ["Gerakan paling menonjol sendiri", "Kekompakan dan keseragaman irama", "Berbicara dengan penonton", "Berlari keluar panggung"], 1, "Kekompakan menciptakan harmoni tari kelompok."],
    ["Alat musik pengiring tarian tradisional yang ditabuh untuk mengatur irama langkah penari adalah ...", ["Seruling", "Gendang / Kendang", "Biola", "Harpa"], 1, "Kendang memandu perubahan tempo gerak penari."],
    ["Gerakan menggelengkan kepala ke kanan dan ke kiri mengikuti ketukan musik melatih kelenturan bagian ...", ["Pinggang", "Leher dan kepala", "Lutut", "Pergelangan kaki"], 1, "Gerak kepala menambah detail ekspresi tari."],
    ["Sebelum berlatih gerakan tari yang lincah, penari melakukan pemanasan agar otot tubuh menjadi ...", ["Kaku", "Lentur dan tidak mudah cedera", "Lelah", "Sakit"], 1, "Peregangan menyiapkan kelenturan tubuh penari."],
    ["Menghargai teman yang sedang tampil menari di depan kelas dilakukan dengan cara ...", ["Menertawakan gerakannya", "Menonton dengan tertib dan memberi tepuk tangan apresiasi", "Mengobrol keras", "Mengejek kostumnya"], 1, "Apresiasi menumbuhkan rasa percaya diri teman."],
    ["Mempelajari tari kreasi dan tari daerah sejak kelas 1 SD menumbuhkan rasa cinta terhadap ...", ["Permainan gawai", "Budaya bangsa Indonesia", "Budaya asing saja", "Kemalasan"], 1, "Seni tari melestarikan kekayaan budaya Nusantara."]
  ]);
  window.BANK_SOAL_MASTER["kls1_seni_bab3_sesi1"] = [...b3];
  window.BANK_SOAL_MASTER["kls1_seni_bab3_sesi2"] = [...b3.slice(7), ...b3.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls1_seni_bab3_sesi3"] = [...b3.slice(14), ...b3.slice(0, 14)];
})();
(function() {
  const S = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b4 = S([
    ["Seni pertunjukan yang menampilkan cerita melalui gerak, mimik wajah, dan dialog pemeran di atas panggung disebut seni ...", ["Lukis", "Teater / Drama", "Patung", "Musik"], 1, "Teater adalah seni bercerita lewat pemeranan tokoh."],
    ["Pertunjukan teater tanpa mengeluarkan kata-kata yang hanya mengandalkan gerak tubuh dan mimik wajah disebut ...", ["Paduan suara", "Pantomim", "Puisi", "Dongeng"], 1, "Pantomim adalah seni pertunjukan gerak isyarat tanpa suara."],
    ["Perubahan raut wajah pemain teater untuk menggambarkan perasaan senang, sedih, marah, atau terkejut disebut ...", ["Kostum", "Mimik / Ekspresi wajah", "Dialog", "Panggung"], 1, "Mimik wajah memperjelas emosi tokoh yang diperankan."],
    ["Percakapan antar tokoh dalam sebuah pementasan drama atau teater disebut ...", ["Monolog", "Dialog", "Prolog", "Epilog"], 1, "Dialog adalah percakapan dua tokoh atau lebih."],
    ["Jika seorang siswa berperan menjadi dokter dalam drama, perlengkapan (properti) yang sesuai dibawa adalah ...", ["Cangkul dan sabit", "Stetoskop mainan dan jas putih", "Pancingan ikan", "Peluit polisi"], 1, "Stetoskop dan jas putih mencirikan profesi dokter."],
    ["Jika seorang siswa berperan menjadi petani yang pergi ke sawah, sifat tokoh yang ditampilkan adalah ...", ["Malas tidur", "Rajin bekerja keras dan ramah", "Sombong", "Pemarah"], 1, "Penokohan sesuai karakter cerita."],
    ["Dalam gerakan pantomim 'menarik tambang berat', ekspresi wajah dan tubuh pemain harus terlihat ...", ["Santai tertawa", "Mengerahkan tenaga kuat seolah menarik tali berat", "Mengantuk", "Berdiri diam kaku"], 1, "Imajinasi gerak membuat pantomim tampak nyata."],
    ["Dalam gerakan pantomim 'memegang dinding kaca tak terlihat', telapak tangan digerakkan seolah ...", ["Menembus udara", "Menyentuh dan meraba permukaan rata di depan", "Menggenggam bola", "Melambai jauh"], 1, "Gerak raba kaca teknik dasar pantomim klasik."],
    ["Saat mengucapkan dialog di depan kelas atau di atas panggung teater, suara pemain harus ...", ["Berbisik pelan sekali", "Jelas, lantang, dan intonasinya tepat agar terdengar penonton", "Cepat tidak jelas", "Membelakangi penonton"], 1, "Artikulasi dan volume suara penting agar pesan cerita tersampaikan."],
    ["Gerakan tubuh yang dilakukan pemain teater untuk mendukung ucapan dialog disebut ...", ["Vokal", "Gestur / Olah tubuh", "Tata lampu", "Tata rias"], 1, "Gestur adalah bahasa gerak tubuh pemeran."],
    ["Menirukan gerak dan suara hewan seperti kucing mengeong atau ayam berkokok melatih kemampuan ...", ["Berhitung", "Olah tubuh dan olah vokal dasar", "Menggambar", "Menulis"], 1, "Olah tubuh dan vokal adalah latihan dasar pemeran."],
    ["Tempat para pemain teater menampilkan pertunjukan di hadapan penonton disebut ...", ["Dapur", "Panggung / Pentas", "Gudang", "Kantin"], 1, "Panggung adalah area pementasan teater."],
    ["Cerita rakyat 'Kancil dan Buaya' atau 'Bawang Merah dan Bawang Putih' dapat dipentaskan dalam bentuk ...", ["Lukisan dinding", "Drama anak / Teater boneka", "Tarian perang", "Lagu seriosa"], 1, "Cerita rakyat kaya pesan moral untuk dipentaskan."],
    ["Pertunjukan teater yang menggunakan boneka tangan atau wayang kertas untuk bercerita disebut teater ...", ["Pantomim", "Boneka (puppet show)", "Musikal", "Tari"], 1, "Teater boneka sangat disukai anak-anak."],
    ["Sebelum tampil bermain peran di depan kelas, kelompok pemain sebaiknya melakukan ... bersama-sama.", ["Pertengkaran", "Latihan (gladi) agar hafal peran dan kompak", "Permainan sendiri", "Tidur siang"], 1, "Latihan bersama memastikan pementasan berjalan lancar."],
    ["Sikap penonton yang sopan ketika teman sedang tampil bermain teater di depan kelas adalah ...", ["Berteriak mengganggu", "Duduk tenang, memperhatikan, dan bertepuk tangan setelah selesai", "Berjalan naik ke panggung", "Mengejek pemain"], 1, "Apresiasi penonton menghargai kerja keras pemain."],
    ["Latihan pemanasan mulut dengan mengucapkan huruf vokal A - I - U - E - O secara jelas melatih ...", ["Kelenturan kaki", "Kejelasan pengucapan (artikulasi vokal)", "Kekuatan tangan", "Keseimbangan duduk"], 1, "Latihan vokal A-I-U-E-O memperjelas pelafalan kata."],
    ["Pakaian khusus yang dikenakan pemeran agar sesuai dengan tokoh yang dimainkan disebut ...", ["Properti", "Kostum", "Dekorasi", "Naskah"], 1, "Kostum memperkuat identitas karakter tokoh."],
    ["Buku kecil yang berisi urutan cerita dan percakapan tokoh dalam drama disebut ...", ["Buku gambar", "Naskah drama / Skenario", "Kamus", "Buku kas"], 1, "Naskah drama menjadi panduan alur bagi pemain."],
    ["Bermain peran (teater) bersama teman-teman di sekolah melatih rasa percaya diri, kerja sama, dan ...", ["Keegoisan", "Keberanian berekspresi serta berkomunikasi", "Rasa malu berlebihan", "Kemalasan"], 1, "Seni teater mengasah empati, komunikasi, dan percaya diri."]
  ]);
  window.BANK_SOAL_MASTER["kls1_seni_bab4_sesi1"] = [...b4];
  window.BANK_SOAL_MASTER["kls1_seni_bab4_sesi2"] = [...b4.slice(7), ...b4.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls1_seni_bab4_sesi3"] = [...b4.slice(14), ...b4.slice(0, 14)];
})();
