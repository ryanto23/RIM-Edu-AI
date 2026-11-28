// File: soal/kls2_pancasila_master.js
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const P = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b1 = P([
    ["Ketentuan yang dibuat untuk mengatur tingkah laku agar kehidupan tertib disebut ...", ["Hadiah", "Aturan / Tata tertib", "Permainan", "Hukuman"], 1, "Aturan menciptakan ketertiban dan kenyamanan bersama."],
    ["Aturan yang berlaku di lingkungan rumah harus dipatuhi oleh ...", ["Ayah dan ibu saja", "Seluruh anggota keluarga", "Anak bungsu saja", "Tamu yang datang"], 1, "Semua anggota keluarga wajib mematuhi aturan rumah."],
    ["Contoh aturan di rumah pada pagi hari setelah bangun tidur adalah ...", ["Langsung menonton TV", "Merapikan tempat tidur dan mandi pagi", "Bermain di luar rumah", "Tidur kembali"], 1, "Merapikan kamar melatih kemandirian anak."],
    ["Ketika hendak keluar rumah untuk bermain, sikap anak yang patuh aturan adalah ...", ["Pergi diam-diam tanpa kabar", "Meminta izin terlebih dahulu kepada orang tua", "Membanting pintu rumah", "Pulang larut malam"], 1, "Berpamitan membuat orang tua tahu keberadaan anak."],
    ["Contoh aturan yang berlaku di lingkungan sekolah adalah ...", ["Memakai baju bebas", "Memakai seragam rapi dan datang tepat waktu", "Mencoret-coret dinding kelas", "Berbicara keras saat guru mengajar"], 1, "Seragam rapi dan tepat waktu bagian tata tertib sekolah."],
    ["Apabila kita melanggar aturan yang berlaku di sekolah maupun di rumah, akibatnya adalah ...", ["Mendapat pujian", "Mendapat teguran atau sanksi serta merugikan diri sendiri", "Menjadi juara kelas", "Disayang semua teman"], 1, "Melanggar aturan menimbulkan ketidaktertiban dan sanksi."],
    ["Saat guru sedang menjelaskan pelajaran di depan kelas, sikap yang sesuai aturan adalah ...", ["Mengobrol dengan teman sebangku", "Mendengarkan dengan tenang dan penuh perhatian", "Bermain mainan di kolong meja", "Berjalan-jalan di kelas"], 1, "Menyimak guru menjaga ketertiban belajar."],
    ["Aturan makan yang baik bersama keluarga di rumah adalah ...", ["Makan sambil berdiri dan berbicara keras", "Mencuci tangan, berdoa, dan makan dengan tertib", "Berebut lauk dengan adik", "Menyisakan banyak nasi di piring"], 1, "Adab makan menjaga sopan santun dan kesehatan."],
    ["Membuang sampah bungkus jajan di halaman sekolah harus dimasukkan ke dalam ...", ["Selokan air", "Tempat sampah sesuai jenisnya", "Kolong meja kelas", "Pot bunga"], 1, "Membuang sampah pada tempatnya menjaga kebersihan sekolah."],
    ["Jadwal piket kebersihan kelas dilaksanakan oleh siswa secara ...", ["Sendirian terus-menerus", "Bergiliran dan bekerja sama sesuai jadwal", "Terpaksa sambil marah", "Menunggu disuruh kepala sekolah"], 1, "Piket kelas tanggung jawab bersama seluruh siswa."],
    ["Ketika lampu lalu lintas menyala merah di jalan raya, pengendara harus ...", ["Mempercepat kendaraan", "Berhenti di belakang garis marka jalan", "Membunyikan klakson terus", "Belok tanpa aba-aba"], 1, "Mematuhi rambu lalu lintas menjaga keselamatan jalan."],
    ["Manfaat mematuhi aturan di rumah dan di sekolah adalah membuat suasana menjadi ...", ["Kacau dan ribut", "Aman, tertib, rukun, dan nyaman", "Tegang dan menakutkan", "Sepi"], 1, "Kepatuhan aturan mewujudkan ketenteraman bersama."],
    ["Saat mengikuti upacara bendera setiap hari Senin, sikap siswa yang patuh aturan adalah ...", ["Bercanda dengan barisan sebelah", "Berdiri tegak dan mengikuti upacara dengan khidmat", "Duduk di lapangan", "Mengobrol keras"], 1, "Khidmat saat upacara melatih disiplin dan cinta tanah air."],
    ["Jika tidak sengaja melanggar aturan di rumah, sikap terpuji yang harus dilakukan adalah ...", ["Menyalahkan adik", "Mengakui kesalahan, meminta maaf, dan tidak mengulanginya", "Berbohong agar tidak dimarahi", "Bersembunyi di kamar"], 1, "Jujur mengakui salah wujud tanggung jawab."],
    ["Batas waktu menonton televisi atau bermain gawai di rumah sebaiknya diatur agar anak tidak lupa ...", ["Makan permen", "Belajar dan beristirahat cukup", "Bermain sepanjang malam", "Membeli mainan"], 1, "Aturan waktu layar menjaga kesehatan mata dan prestasi belajar."],
    ["Aturan meminjam buku di perpustakaan sekolah mewajibkan siswa untuk ...", ["Mencoret halaman buku", "Menjaga kebersihan buku dan mengembalikan tepat waktu", "Menyimpan buku selamanya", "Merobek gambar buku"], 1, "Menjaga buku perpustakaan agar bisa dibaca teman lain."],
    ["Sebelum masuk ke kamar orang tua atau ruang guru, aturan kesopanan yang benar adalah ...", ["Langsung membuka pintu keras", "Mengetuk pintu dan mengucapkan salam/permisi", "Mengintip dari jendela", "Berteriak dari luar"], 1, "Mengetuk pintu menunjukkan tata krama sopan santun."],
    ["Dalam musyawarah membuat kesepakatan aturan kelas, setiap siswa berhak menyampaikan ...", ["Kemarahan", "Pendapat secara sopan dan bergantian", "Ejekan kepada teman", "Ancaman"], 1, "Kesepakatan kelas disusun bersama secara demokratis."],
    ["Setelah selesai bermain di ruang tamu, aturan kerapian di rumah mengharuskan kita ...", ["Meninggalkan mainan berserakan", "Merapikan kembali mainan ke tempatnya semula", "Menyuruh ibu merapikan", "Membuang mainan"], 1, "Merapikan mainan melatih kemandirian dan tanggung jawab."],
    ["Kepatuhan terhadap aturan harus dilakukan dengan kesadaran sendiri bukan karena ...", ["Rasa tanggung jawab", "Takut dimarahi guru atau orang tua semata", "Keinginan hidup tertib", "Kebiasaan baik"], 1, "Disiplin sejati tumbuh dari kesadaran diri sendiri."]
  ]);
  window.BANK_SOAL_MASTER["kls2_pancasila_bab1_sesi1"] = [...b1];
  window.BANK_SOAL_MASTER["kls2_pancasila_bab1_sesi2"] = [...b1.slice(7), ...b1.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_pancasila_bab1_sesi3"] = [...b1.slice(14), ...b1.slice(0, 14)];
})();
(function() {
  const P = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b2 = P([
    ["Dasar negara Republik Indonesia yang memiliki lima sila adalah ...", ["UUD 1945", "Pancasila", "Bhinneka Tunggal Ika", "Sumpah Pemuda"], 1, "Pancasila adalah dasar negara Indonesia."],
    ["Lambang negara Indonesia berbentuk burung Garuda yang di dadanya terdapat perisai berisi ... simbol sila.", ["3", "4", "5", "6"], 2, "Perisai Garuda Pancasila memuat 5 simbol sila."],
    ["Simbol sila pertama Pancasila 'Ketuhanan Yang Maha Esa' adalah ...", ["Rantai emas", "Bintang bersudut lima", "Pohon beringin", "Kepala banteng"], 1, "Bintang melambangkan cahaya kerohanian sila pertama."],
    ["Contoh pengamalan sila pertama Pancasila di sekolah adalah ...", ["Mengganggu teman berdoa", "Berdoa sebelum belajar dan menghormati teman berbeda agama", "Memilih teman seagama saja", "Malas beribadah"], 1, "Taat beribadah dan toleransi beragama pengamalan sila ke-1."],
    ["Simbol sila kedua Pancasila 'Kemanusiaan yang Adil dan Beradab' adalah ...", ["Bintang", "Rantai emas", "Pohon beringin", "Padi dan kapas"], 1, "Rantai emas melambangkan hubungan manusia yang saling membantu."],
    ["Contoh perilaku yang sesuai dengan sila kedua Pancasila adalah ...", ["Mengejek teman yang jatuh", "Menolong teman yang terkena musibah dan bersikap sopan", "Merebut mainan adik", "Bersikap kasar kepada orang lain"], 1, "Empati dan menolong sesama pengamalan sila ke-2."],
    ["Simbol sila ketiga Pancasila 'Persatuan Indonesia' adalah ...", ["Kepala banteng", "Pohon beringin", "Rantai emas", "Bintang"], 1, "Pohon beringin melambangkan tempat berteduh dan persatuan bangsa."],
    ["Contoh pengamalan sila ketiga Pancasila di lingkungan sekolah adalah ...", ["Bertengkar antarkelas", "Bekerja bakti membersihkan kelas bersama tanpa membeda-bedakan suku", "Mengejek bahasa daerah teman", "Bermain sendiri-sendiri"], 1, "Kerja sama dan cinta tanah air mencerminkan sila ke-3."],
    ["Simbol sila keempat Pancasila 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan' adalah ...", ["Pohon beringin", "Kepala banteng", "Padi dan kapas", "Rantai emas"], 1, "Banteng hewan sosial yang suka berkumpul bermusyawarah."],
    ["Cara menyelesaikan perbedaan pendapat saat memilih ketua kelas sesuai sila keempat Pancasila adalah ...", ["Berkelahi", "Bermusyawarah untuk mencapai mufakat", "Memaksakan kehendak sendiri", "Keluar dari kelas"], 1, "Musyawarah mufakat inti sila keempat Pancasila."],
    ["Simbol sila kelima Pancasila 'Keadilan Sosial bagi Seluruh Rakyat Indonesia' adalah ...", ["Bintang", "Padi dan kapas", "Kepala banteng", "Pohon beringin"], 1, "Padi dan kapas melambangkan kebutuhan pokok pangan dan sandang yang adil."],
    ["Contoh pengamalan sila kelima Pancasila di rumah dan sekolah adalah ...", ["Bersikap boros jajan", "Bersikap adil kepada sesama, hemat, dan gemar menabung", "Memilih kasih saat membagi tugas", "Merusak fasilitas umum"], 1, "Berlaku adil dan hemat mencerminkan sila ke-5."],
    ["Pita putih yang dicengkeram oleh kedua kaki Burung Garuda bertuliskan semboyan ...", ["Tut Wuri Handayani", "Bhinneka Tunggal Ika", "Merdeka atau Mati", "Bersatu Kita Teguh"], 1, "Bhinneka Tunggal Ika artinya berbeda-beda tetapi tetap satu jua."],
    ["Jumlah bulu pada masing-masing sayap Burung Garuda Pancasila adalah ... helai melambangkan tanggal kemerdekaan.", ["8", "17", "19", "45"], 1, "17 helai bulu sayap melambangkan tanggal 17."],
    ["Jumlah bulu pada ekor Burung Garuda Pancasila adalah ... helai melambangkan bulan Agustus.", ["8", "17", "19", "45"], 0, "8 helai bulu ekor melambangkan bulan ke-8 (Agustus)."],
    ["Jumlah bulu pada leher Burung Garuda Pancasila adalah ... helai melambangkan tahun 1945.", ["17", "45", "19", "8"], 1, "45 helai bulu leher dan 19 di pangkal ekor melambangkan tahun 1945."],
    ["Warna keemasan pada Burung Garuda Pancasila melambangkan ...", ["Kesedihan", "Keagungan dan kejayaan bangsa Indonesia", "Keberanian", "Kesucian"], 1, "Warna emas melambangkan kemuliaan dan keagungan."],
    ["Apabila usulan kita tidak diterima dalam musyawarah kelas, sikap yang sesuai sila keempat adalah ...", ["Marah dan meninggalkan rapat", "Menerima keputusan bersama dengan lapang dada", "Mengganggu jalannya kegiatan", "Mengejek ketua kelas"], 1, "Menghormati hasil musyawarah wujud kedewasaan berdemokrasi."],
    ["Membeli dan bangga menggunakan produk buatan dalam negeri merupakan wujud pengamalan sila ke-...", ["Satu", "Tiga (Persatuan Indonesia)", "Dua", "Empat"], 1, "Cinta produk Indonesia memperkuat persatuan dan ekonomi bangsa."],
    ["Para tokoh perumus Pancasila seperti Ir. Soekarno, Drs. Moh. Hatta, dan Mr. Moh. Yamin meneladankan sikap ...", ["Egois", "Rela berkorban, musyawarah, dan cinta tanah air", "Suka bertengkar", "Sombong"], 1, "Meneladani semangat persatuan para pendiri bangsa."]
  ]);
  window.BANK_SOAL_MASTER["kls2_pancasila_bab2_sesi1"] = [...b2];
  window.BANK_SOAL_MASTER["kls2_pancasila_bab2_sesi2"] = [...b2.slice(7), ...b2.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_pancasila_bab2_sesi3"] = [...b2.slice(14), ...b2.slice(0, 14)];
})();
(function() {
  const P = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b3 = P([
    ["Setiap anak memiliki ciri fisik dan sifat yang berbeda-beda. Perbedaan tersebut merupakan anugerah dari ...", ["Manusia", "Tuhan Yang Maha Esa", "Teman", "Guru"], 1, "Keberagaman ciptaan Tuhan patut disyukuri."],
    ["Perbedaan ciri fisik yang tampak pada teman di kelas antara lain ...", ["Hobi membaca", "Bentuk rambut, warna kulit, dan tinggi badan", "Cita-cita menjadi dokter", "Agama yang dianut"], 1, "Ciri fisik meliputi bentuk rambut, mata, kulit, dan tinggi tubuh."],
    ["Terhadap teman yang memiliki bentuk rambut keriting atau warna kulit berbeda, sikap kita harus ...", ["Mengejeknya", "Saling menghormati dan berteman baik", "Menjauhinya", "Membanding-bandingkannya"], 1, "Menghargai perbedaan fisik mencegah perundungan."],
    ["Indonesia memiliki beragam agama yang diakui negara. Jumlah agama resmi yang diakui di Indonesia ada ...", ["4", "5", "6", "7"], 2, "Enam agama: Islam, Kristen, Katolik, Hindu, Buddha, dan Konghucu."],
    ["Tempat ibadah umat beragama Islam adalah ...", ["Gereja", "Masjid", "Pura", "Vihara"], 1, "Masjid adalah tempat ibadah umat Islam."],
    ["Tempat ibadah umat beragama Kristen dan Katolik adalah ...", ["Masjid", "Gereja", "Klenteng", "Pura"], 1, "Gereja tempat ibadah umat Kristen dan Katolik."],
    ["Tempat ibadah umat beragama Hindu adalah ...", ["Vihara", "Pura", "Masjid", "Klenteng"], 1, "Pura adalah tempat ibadah umat Hindu."],
    ["Tempat ibadah umat beragama Buddha adalah ...", ["Pura", "Vihara", "Gereja", "Masjid"], 1, "Vihara tempat ibadah umat Buddha."],
    ["Tempat ibadah umat beragama Konghucu adalah ...", ["Masjid", "Klenteng / Litang", "Pura", "Gereja"], 1, "Klenteng tempat ibadah umat Konghucu."],
    ["Ketika teman yang berbeda agama sedang menjalankan ibadahnya, sikap toleransi kita adalah ...", ["Berteriak di dekatnya", "Menjaga ketenangan dan tidak mengganggu ibadahnya", "Mengajaknya bermain saat beribadah", "Mengejek tata cara ibadahnya"], 1, "Toleransi beragama menciptakan kerukunan hidup."],
    ["Teman sekelas kita berasal dari berbagai suku bangsa seperti Jawa, Madura, Sunda, dan Batak. Sikap kita sebaiknya ...", ["Hanya berteman dengan satu suku saja", "Rukun bermain dan belajar bersama semua teman", "Mengejek logat bahasa daerah teman", "Membentuk kelompok terpisah"], 1, "Persatuan antarsuku memperkuat persaudaraan."],
    ["Bahasa persatuan yang digunakan untuk berkomunikasi dengan teman dari berbagai daerah di Indonesia adalah Bahasa ...", ["Daerah", "Indonesia", "Asing", "Isyarat saja"], 1, "Bahasa Indonesia mempersatukan seluruh suku bangsa."],
    ["Jika dua orang teman di kelas sedang bertengkar karena perbedaan pendapat, sikap terpuji kita adalah ...", ["Ikut memanas-manasi", "Melerai dengan ramah dan mengajak mereka berdamai", "Menonton sambil tertawa", "Memihak teman yang paling dekat"], 1, "Menjadi penengah damai menjaga kerukunan kelas."],
    ["Perbedaan kegemaran (hobi) seperti menggambar, menyanyi, dan bermain bola di kelas sebaiknya disikapi dengan ...", ["Saling mengejek hobi teman", "Saling menghargai dan mendukung bakat masing-masing", "Memaksa teman menyukai hobi kita", "Bermusuhan"], 1, "Menghargai minat teman menumbuhkan rasa percaya diri."],
    ["Saat bekerja kelompok di kelas bersama teman yang berbeda latar belakang, kita harus mengutamakan ...", ["Kepentingan diri sendiri", "Kerja sama dan kekompakan tim", "Keegoisan", "Persaingan"], 1, "Kerja sama membuat tugas cepat selesai dengan baik."],
    ["Perilaku mengejek, mengucilkan, atau menyakiti teman (perundungan/bullying) harus dihindari karena ...", ["Membuat terkenal", "Menyakiti perasaan teman dan merusak persahabatan", "Melatih keberanian", "Disukai guru"], 1, "Sekolah harus menjadi lingkungan ramah anak tanpa perundungan."],
    ["Hari raya keagamaan umat Islam setelah berpuasa Ramadan adalah ...", ["Natal", "Idulfitri", "Nyepi", "Waisak"], 1, "Idulfitri dirayakan umat Islam pada 1 Syawal."],
    ["Hari raya keagamaan umat Hindu yang dirayakan dengan menyepi dalam keheningan adalah ...", ["Waisak", "Nyepi", "Imlek", "Paskah"], 1, "Hari Raya Nyepi dirayakan umat Hindu."],
    ["Manfaat hidup rukun dalam keberagaman di sekolah adalah ...", ["Sering terjadi pertengkaran", "Belajar terasa nyaman, damai, dan memiliki banyak sahabat", "Suasana kelas sepi", "Sulit bekerja sama"], 1, "Kerukunan membawa kebahagiaan dan persatuan."],
    ["Semboyan 'Bersatu kita teguh, bercerai kita runtuh' mengajarkan pentingnya menjaga ...", ["Permusuhan", "Persatuan dan kesatuan di tengah perbedaan", "Perpecahan", "Kesombongan"], 1, "Persatuan membuat bangsa menjadi kuat."]
  ]);
  window.BANK_SOAL_MASTER["kls2_pancasila_bab3_sesi1"] = [...b3];
  window.BANK_SOAL_MASTER["kls2_pancasila_bab3_sesi2"] = [...b3.slice(7), ...b3.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_pancasila_bab3_sesi3"] = [...b3.slice(14), ...b3.slice(0, 14)];
})();
(function() {
  const P = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b4 = P([
    ["Lingkungan tempat tinggal dan sekolah yang bersih serta sehat merupakan tanggung jawab ...", ["Petugas kebersihan saja", "Seluruh warga dan siswa secara bersama-sama", "Kepala desa saja", "Guru kelas saja"], 1, "Menjaga kebersihan lingkungan tanggung jawab bersama."],
    ["Kegiatan membersihkan lingkungan sekolah atau kampung secara bersama-sama disebut ...", ["Lomba lari", "Gotong royong / Kerja bakti", "Upacara bendera", "Musyawarah"], 1, "Gotong royong adalah ciri khas budaya bangsa Indonesia."],
    ["Manfaat melakukan kerja bakti membersihkan selokan di lingkungan rumah adalah mencegah terjadinya ...", ["Kekeringan", "Banjir dan sarang nyamuk penyebab penyakit", "Angin kencang", "Gempa bumi"], 1, "Selokan bersih melancarkan aliran air hujan."],
    ["Contoh sikap peduli terhadap kelestarian tumbuhan di lingkungan sekolah adalah ...", ["Mencabuti bunga di taman", "Menyiram tanaman secara rutin dan tidak menginjak rumput taman", "Mengukir nama di batang pohon", "Membuang plastik di pot bunga"], 1, "Merawat tanaman menjaga keasrian dan udara segar."],
    ["Terhadap hewan di lingkungan sekitar seperti burung dan kucing, sikap peduli kita adalah ...", ["Melempari batu", "Menyayangi dan tidak menyiksa hewan", "Merusak sarang burung", "Menangkapnya untuk disakiti"], 1, "Menjaga kelestarian hewan bagian dari kepedulian alam."],
    ["Cara menghemat penggunaan air bersih di rumah dan di sekolah adalah ...", ["Membiarkan keran air terbuka terus", "Menutup rapat keran air setelah selesai digunakan", "Bermain air bersih sembarangan", "Mandi terlalu lama tanpa keperluan"], 1, "Menghemat air menjaga ketersediaan air bersih."],
    ["Cara menghemat penggunaan energi listrik di rumah pada siang hari adalah ...", ["Menyalakan semua lampu kamar", "Mematikan lampu dan kipas angin saat ruangan tidak digunakan", "Menghidupkan televisi tanpa ditonton", "Membuka pintu kulkas lama-lama"], 1, "Hemat listrik mengurangi pemborosan energi."],
    ["Sampah sisa makanan dan daun-daun kering termasuk jenis sampah ...", ["Anorganik", "Organik (mudah membusuk dan bisa dibuat kompos)", "Bahan berbahaya", "Logam"], 1, "Sampah organik mudah terurai secara alami."],
    ["Sampah botol plastik, kaleng minuman, dan bungkus permen termasuk jenis sampah ...", ["Organik", "Anorganik (sulit membusuk dan bisa didaur ulang)", "Pupuk alami", "Makanan"], 1, "Sampah anorganik dapat didaur ulang menjadi kerajinan."],
    ["Ketika berangkat ke sekolah atau berbelanja dekat rumah, penggunaan botol minum isi ulang (tumbler) bermanfaat untuk ...", ["Menambah sampah plastik", "Mengurangi sampah botol plastik sekali pakai", "Memberatkan tas saja", "Menghabiskan air"], 1, "Membawa tumbler mengurangi pencemaran plastik."],
    ["Denah lingkungan rumah dan sekolah berguna untuk menunjukkan ...", ["Daftar harga makanan", "Letak atau arah suatu tempat agar mudah ditemukan", "Nama-nama teman", "Jadwal pelajaran"], 1, "Denah membantu mengenali batas dan posisi ruang."],
    ["Ruang di sekolah yang berfungsi memberikan pertolongan pertama bagi siswa yang sakit adalah ...", ["Kantin", "UKS (Usaha Kesehatan Sekolah)", "Perpustakaan", "Gudang"], 1, "UKS adalah fasilitas kesehatan di lingkungan sekolah."],
    ["Jika melihat teman membuang sampah sembarangan di halaman sekolah, sikap peduli kita adalah ...", ["Memarahinya dengan kata kasar", "Mengingatkannya secara sopan agar membuang ke tempat sampah", "Ikut membuang sampah di sana", "Membiarkannya saja"], 1, "Mengingatkan dengan santun menumbuhkan kepedulian bersama."],
    ["Kegiatan menanam pohon di lahan kosong atau halaman sekolah disebut ...", ["Penebangan liar", "Penghijauan (reboisasi)", "Pembakaran hutan", "Pencemaran"], 1, "Penghijauan menghasilkan oksigen dan menyejukkan udara."],
    ["Lingkungan sekitar rumah yang banyak pepohonan hijau membuat udara terasa ...", ["Panas dan berdebu", "Sejuk, segar, dan sehat untuk pernapasan", "Pengap", "Berbau asap"], 1, "Pohon menyerap karbon dioksida dan menghasilkan oksigen."],
    ["Batas wilayah rumah kita di sebelah kanan, kiri, depan, dan belakang disebut lingkungan ...", ["Sekolah", "Tetangga sekitar rumah", "Pasar", "Kantor"], 1, "Mengenal batas lingkungan mempererat kerukunan bertetangga."],
    ["Saat terjadi kerja bakti kampung pada hari Minggu pagi, sikap anak kelas 2 yang baik adalah ...", ["Tidur sampai siang", "Ikut membantu tugas ringan seperti memungut daun kering", "Mengganggu warga yang bekerja", "Bermain gim di kamar"], 1, "Berpartisipasi sesuai kemampuan melatih jiwa sosial."],
    ["Membakar sampah plastik secara sembarangan di lingkungan padat penduduk dapat menyebabkan ...", ["Udara menjadi wangi", "Pencemaran udara dan gangguan pernapasan", "Tanah menjadi subur", "Hujan turun deras"], 1, "Asap pembakaran plastik berbahaya bagi kesehatan paru-paru."],
    ["Fasilitas umum di lingkungan sekitar seperti taman bermain dan pos ronda harus kita ...", ["Coret-coret", "Jaga kebersihan dan rawat bersama", "Rusak peralatannya", "Kotori"], 1, "Merawat fasilitas umum wujud kepedulian warga negara."],
    ["Lingkungan yang bersih, hijau, dan terjaga kelestariannya merupakan wujud syukur kita kepada ...", ["Manusia", "Tuhan Yang Maha Esa", "Hewan", "Kendaraan"], 1, "Merawat bumi ciptaan Tuhan adalah kewajiban setiap manusia."]
  ]);
  window.BANK_SOAL_MASTER["kls2_pancasila_bab4_sesi1"] = [...b4];
  window.BANK_SOAL_MASTER["kls2_pancasila_bab4_sesi2"] = [...b4.slice(7), ...b4.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_pancasila_bab4_sesi3"] = [...b4.slice(14), ...b4.slice(0, 14)];
})();
