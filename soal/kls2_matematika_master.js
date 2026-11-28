// File: soal/kls2_matematika_master.js
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b1 = M([
    ["Lambang bilangan dari 'tiga puluh tujuh' adalah ...", ["30", "37", "73", "307"], 1, "Tiga puluh tujuh ditulis 37."],
    ["Nama bilangan dari angka 48 adalah ...", ["Empat delapan", "Empat puluh delapan", "Delapan puluh empat", "Empat ratus delapan"], 1, "48 dibaca empat puluh delapan."],
    ["Pada bilangan 45, angka 4 menempati nilai tempat ...", ["Satuan", "Puluhan", "Ratusan", "Ribuan"], 1, "45 = 4 puluhan + 5 satuan."],
    ["Pada bilangan 39, nilai angka 9 adalah ...", ["90", "9", "900", "39"], 1, "Angka 9 berada pada tempat satuan bernilai 9."],
    ["Bilangan yang terdiri atas 4 puluhan dan 2 satuan adalah ...", ["24", "42", "402", "420"], 1, "4 puluhan (40) + 2 satuan (2) = 42."],
    ["Tanda perbandingan yang tepat untuk mengisi titik-titik pada 34 ... 43 adalah ...", [">", "<", "=", "+"], 1, "34 lebih kecil daripada 43 (<)."],
    ["Bilangan berikut yang nilainya lebih besar dari 46 adalah ...", ["39", "49", "41", "28"], 1, "49 > 46."],
    ["Urutan bilangan berikut dari yang terkecil ke terbesar yang benar adalah ...", ["45, 32, 28, 19", "19, 28, 32, 45", "28, 19, 45, 32", "32, 45, 19, 28"], 1, "19 < 28 < 32 < 45."],
    ["Urutan bilangan berikut dari yang terbesar ke terkecil yang benar adalah ...", ["25, 30, 35, 40", "40, 35, 30, 25", "35, 40, 25, 30", "30, 25, 40, 35"], 1, "40 > 35 > 30 > 25."],
    ["Bilangan loncat 2 setelah 24, 26, 28 adalah ...", ["29", "30", "31", "32"], 1, "28 + 2 = 30."],
    ["Bilangan loncat 5 setelah 15, 20, 25 adalah ...", ["26", "30", "35", "40"], 1, "25 + 5 = 30."],
    ["Bilangan yang terletak tepat di antara 38 dan 40 adalah ...", ["37", "39", "41", "42"], 1, "Urutan: 38, 39, 40."],
    ["Satu ikat lidi berisi 10 batang. Jika Siti memiliki 4 ikat lidi dan 6 batang satuan, jumlah seluruh lidi Siti adalah ...", ["10", "46", "64", "40"], 1, "40 + 6 = 46 batang lidi."],
    ["Bentuk panjang dari bilangan 47 adalah ...", ["4 + 7", "40 + 7", "70 + 4", "400 + 7"], 1, "47 = 40 + 7."],
    ["Bilangan genap yang terletak di antara 31 dan 35 adalah ...", ["33", "32 dan 34", "31 dan 33", "35"], 1, "Bilangan genap antara 31 dan 35 adalah 32 dan 34."],
    ["Bilangan ganjil yang berada tepat sebelum angka 45 adalah ...", ["44", "43", "46", "47"], 1, "Bilangan ganjil sebelum 45 adalah 43."],
    ["Ibu membeli 3 kantong jeruk, setiap kantong berisi 10 buah. Jumlah seluruh jeruk ibu adalah ...", ["13", "30", "33", "3"], 1, "3 × 10 = 30 buah jeruk."],
    ["Bilangan terbesar yang dapat disusun dari angka 2 dan 4 adalah ...", ["24", "42", "22", "44"], 1, "4 puluhan + 2 satuan = 42."],
    ["Bilangan terkecil yang dapat disusun dari angka 5 dan 3 adalah ...", ["53", "35", "55", "33"], 1, "3 puluhan + 5 satuan = 35."],
    ["Jika sekarang halaman buku ke-29, maka dua halaman berikutnya adalah halaman ke-...", ["30", "31", "32", "28"], 1, "29 + 2 = 31."]
  ]);
  window.BANK_SOAL_MASTER["kls2_matematika_bab1_sesi1"] = [...b1];
  window.BANK_SOAL_MASTER["kls2_matematika_bab1_sesi2"] = [...b1.slice(7), ...b1.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_matematika_bab1_sesi3"] = [...b1.slice(14), ...b1.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b2 = M([
    ["Hasil dari 24 + 13 adalah ...", ["36", "37", "38", "47"], 1, "24 + 13 = 37."],
    ["Hasil dari 28 + 16 adalah ...", ["34", "44", "42", "54"], 1, "8 + 6 = 14 (simpan 1), 2 + 1 + 1 = 4 → 44."],
    ["Hasil dari 47 - 23 adalah ...", ["23", "24", "25", "34"], 1, "47 - 23 = 24."],
    ["Hasil dari 42 - 17 adalah ...", ["35", "25", "27", "37"], 1, "12 - 7 = 5, 3 - 1 = 2 → 25."],
    ["Budi memiliki 19 kelereng. Ayah membelikan lagi 15 kelereng. Jumlah kelereng Budi sekarang adalah ...", ["33", "34", "35", "24"], 1, "19 + 15 = 34 kelereng."],
    ["Di keranjang ada 45 buah mangga. Sebanyak 18 mangga diberikan kepada tetangga. Sisa mangga di keranjang adalah ...", ["37", "27", "28", "33"], 1, "45 - 18 = 27 buah mangga."],
    ["Pasangan bilangan berikut yang jumlahnya sama dengan 30 adalah ...", ["14 + 15", "17 + 13", "18 + 14", "12 + 16"], 1, "17 + 13 = 30."],
    ["Nilai pengganti titik-titik pada 18 + ... = 35 adalah ...", ["16", "17", "18", "27"], 1, "35 - 18 = 17."],
    ["Nilai pengganti titik-titik pada 46 - ... = 21 adalah ...", ["24", "25", "26", "15"], 1, "46 - 21 = 25."],
    ["Hasil dari 15 + 12 + 13 adalah ...", ["39", "40", "41", "38"], 1, "15 + 12 = 27; 27 + 13 = 40."],
    ["Hasil dari 50 - 15 - 10 adalah ...", ["35", "25", "20", "30"], 1, "50 - 15 = 35; 35 - 10 = 25."],
    ["Di dalam bus terdapat 32 penumpang. Di halte turun 9 penumpang, lalu naik 6 penumpang. Banyak penumpang sekarang adalah ...", ["27", "29", "31", "35"], 1, "32 - 9 + 6 = 29 penumpang."],
    ["Sifat pertukaran (komutatif) penjumlahan dari 16 + 23 sama dengan ...", ["23 - 16", "23 + 16", "16 + 16", "23 + 23"], 1, "16 + 23 = 23 + 16 = 39."],
    ["Selisih antara bilangan 48 dan 29 adalah ...", ["21", "19", "29", "18"], 1, "48 - 29 = 19."],
    ["Rani mengumpulkan 26 perangko, sedangkan Sinta mengumpulkan 19 perangko. Jumlah perangko mereka berdua adalah ...", ["44", "45", "46", "35"], 1, "26 + 19 = 45 perangko."],
    ["Jika ... - 14 = 23, maka bilangan yang tepat untuk mengisi titik-titik adalah ...", ["9", "37", "36", "27"], 1, "23 + 14 = 37."],
    ["Hasil dari 39 + 11 adalah ...", ["40", "50", "49", "51"], 1, "39 + 11 = 50."],
    ["Ibu membuat 40 kue donat. Sebanyak 24 kue sudah dimakan keluarga. Sisa kue donat ibu adalah ...", ["26", "16", "14", "24"], 1, "40 - 24 = 16 kue."],
    ["Operasi hitung yang hasilnya 28 adalah ...", ["15 + 12", "45 - 17", "50 - 24", "19 + 11"], 1, "45 - 17 = 28."],
    ["Dalam kotak ada 25 pensil merah dan 18 pensil biru. Jumlah seluruh pensil dalam kotak adalah ...", ["33", "43", "42", "53"], 1, "25 + 18 = 43 pensil."]
  ]);
  window.BANK_SOAL_MASTER["kls2_matematika_bab2_sesi1"] = [...b2];
  window.BANK_SOAL_MASTER["kls2_matematika_bab2_sesi2"] = [...b2.slice(7), ...b2.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_matematika_bab2_sesi3"] = [...b2.slice(14), ...b2.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b3 = M([
    ["Bangun datar yang memiliki 3 sisi dan 3 sudut disebut ...", ["Persegi", "Segitiga", "Lingkaran", "Persegi panjang"], 1, "Segitiga memiliki 3 sisi dan 3 titik sudut."],
    ["Bangun datar yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku adalah ...", ["Persegi panjang", "Persegi", "Segitiga", "Trapesium"], 1, "Keempat sisi persegi sama panjang."],
    ["Permukaan papan tulis di depan kelas umumnya berbentuk bangun datar ...", ["Lingkaran", "Persegi panjang", "Segitiga", "Layang-layang"], 1, "Papan tulis berbentuk persegi panjang."],
    ["Permukaan roda sepeda dan uang koin berbentuk bangun datar ...", ["Persegi", "Lingkaran", "Segitiga", "Belah ketupat"], 1, "Roda dan koin memiliki 1 sisi lengkung berbentuk lingkaran."],
    ["Banyaknya sisi pada bangun datar segi empat adalah ... buah.", ["3", "4", "5", "6"], 1, "Segi empat memiliki 4 ruas garis sisi."],
    ["Bangun ruang yang berbentuk seperti bola sepak dan kelereng adalah ...", ["Kubus", "Bola", "Tabung", "Kerucut"], 1, "Bola memiliki permukaan lengkung seluruhnya."],
    ["Bangun ruang yang memiliki 6 sisi berbentuk persegi yang sama besar seperti dadu adalah ...", ["Balok", "Kubus", "Tabung", "Kerucut"], 1, "Dadu dan rubik berbentuk kubus."],
    ["Kotak sepatu, lemari pakaian, dan penghapus papan tulis berbentuk bangun ruang ...", ["Kubus", "Balok", "Bola", "Kerucut"], 1, "Balok memiliki 6 sisi berbentuk persegi panjang."],
    ["Kaleng susu, gelas minum, dan drum air berbentuk bangun ruang ...", ["Kerucut", "Tabung", "Kubus", "Bola"], 1, "Tabung memiliki alas dan tutup berbentuk lingkaran."],
    ["Topi ulang tahun dan nasi tumpeng berbentuk bangun ruang ...", ["Tabung", "Kerucut", "Balok", "Kubus"], 1, "Kerucut memiliki alas lingkaran dan satu titik puncak."],
    ["Bangun datar yang tidak memiliki titik sudut sama sekali adalah ...", ["Segitiga", "Lingkaran", "Persegi", "Persegi panjang"], 1, "Lingkaran hanya dibatasi satu garis lengkung tertutup."],
    ["Banyaknya titik sudut pada bangun datar segitiga adalah ...", ["2", "3", "4", "5"], 1, "Segitiga mempunyai 3 titik sudut."],
    ["Benda di ruang kelas yang permukaannya berbentuk persegi adalah ...", ["Pintu kelas", "Ubin keramik lantai", "Bola dunia (globe)", "Penggaris panjang"], 1, "Ubin lantai umumnya berbentuk persegi."],
    ["Banyaknya sisi pada bangun ruang balok dan kubus adalah ... sisi.", ["4", "6", "8", "12"], 1, "Kubus dan balok memiliki 6 bidang sisi."],
    ["Sisi alas dan sisi tutup pada bangun ruang tabung berbentuk bangun datar ...", ["Segitiga", "Lingkaran", "Persegi", "Segi lima"], 1, "Alas dan tutup tabung berbentuk lingkaran."],
    ["Jika dua buah bangun segitiga siku-siku yang sama besar digabungkan pada sisi miringnya, dapat membentuk bangun ...", ["Lingkaran", "Persegi atau persegi panjang", "Segi lima", "Tabung"], 1, "Komposisi dua segitiga siku-siku membentuk segi empat."],
    ["Bangun ruang yang dapat menggelinding dengan mudah ke segala arah adalah ...", ["Kubus", "Bola", "Balok", "Prisma"], 1, "Bola tidak memiliki sudut sehingga mudah menggelinding."],
    ["Rambu lalu lintas peringatan di jalan raya umumnya berbentuk bangun datar ...", ["Lingkaran", "Segitiga atau belah ketupat", "Tabung", "Kubus"], 1, "Rambu peringatan berbentuk segitiga/belah ketupat."],
    ["Benda berikut yang berbentuk tabung adalah ...", ["Kotak tisu", "Baterai jam dinding dan kaleng minuman", "Dadu permainan", "Bola basket"], 1, "Baterai silinder berbentuk tabung."],
    ["Mengelompokkan benda berdasarkan bentuk bangun datar dan bangun ruang melatih ketelitian mengamati ...", ["Warna cat", "Ciri-ciri bentuk benda di sekitar kita", "Berat benda", "Harga barang"], 1, "Mengenali sisi dan sudut membantu mengklasifikasi bentuk."]
  ]);
  window.BANK_SOAL_MASTER["kls2_matematika_bab3_sesi1"] = [...b3];
  window.BANK_SOAL_MASTER["kls2_matematika_bab3_sesi2"] = [...b3.slice(7), ...b3.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_matematika_bab3_sesi3"] = [...b3.slice(14), ...b3.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b4 = M([
    ["Lampu gantung ruang kelas terletak di ... kepala kita.", ["Bawah", "Atas", "Samping kanan", "Belakang"], 1, "Lampu gantung berada di bagian atas."],
    ["Sepatu yang kita pakai berada di ... kaki kita.", ["Atas", "Bawah", "Depan", "Belakang"], 1, "Sepatu menapak di bagian bawah."],
    ["Papan tulis di kelas biasanya terletak di ... bangku murid.", ["Belakang", "Depan", "Bawah", "Atas"], 1, "Murid menghadap papan tulis di depan kelas."],
    ["Saat menulis dengan tangan kanan, letak tangan kiri berada di sebelah ... tubuh kita.", ["Depan", "Kiri", "Atas", "Belakang"], 1, "Arah kanan berlawanan dengan kiri."],
    ["Kucing bersembunyi di kolong meja. Posisi kucing berada di ... meja.", ["Atas", "Bawah", "Samping", "Dalam laci"], 1, "Kolong meja terletak di bawah permukaan meja."],
    ["Buku pelajaran dimasukkan ke dalam tas. Posisi buku berada di ... tas.", ["Luar", "Dalam", "Atas", "Bawah"], 1, "Buku berada di dalam ruang tas."],
    ["Lanjutkan pola gambar berikut: Merah - Biru - Merah - Biru - ...", ["Kuning", "Merah", "Hijau", "Hitam"], 1, "Pola berulang 2 warna: Merah, Biru."],
    ["Lanjutkan pola bentuk berikut: Segitiga - Lingkaran - Persegi - Segitiga - Lingkaran - ...", ["Segitiga", "Persegi", "Lingkaran", "Bintang"], 1, "Urutan pola 3 bentuk: Segitiga, Lingkaran, Persegi."],
    ["Lanjutkan pola suara tepuk berikut: Prok - Prok - Duk - Prok - Prok - ...", ["Prok", "Duk", "Plok", "Tak"], 1, "Pola 3 ketukan: Prok, Prok, Duk."],
    ["Lanjutkan pola gerakan berikut: Lompat - Jongkok - Berdiri - Lompat - Jongkok - ...", ["Lompat", "Berdiri", "Jongkok", "Duduk"], 1, "Pola 3 gerakan berulang teratur."],
    ["Perhatikan pola bilangan: 2, 4, 6, 8, ... Angka selanjutnya adalah ...", ["9", "10", "11", "12"], 1, "Pola bertambah 2 setiap langkah: 8 + 2 = 10."],
    ["Perhatikan pola bilangan: 5, 10, 15, ..., 25. Angka yang hilang adalah ...", ["18", "20", "22", "30"], 1, "Pola kelipatan 5: 15 + 5 = 20."],
    ["Perhatikan pola bilangan menurun: 20, 18, 16, 14, ... Angka berikutnya adalah ...", ["13", "12", "10", "15"], 1, "Pola berkurang 2 setiap langkah: 14 - 2 = 12."],
    ["Ibu menata piring di atas meja makan. Posisi piring berada di ... meja.", ["Bawah", "Atas", "Dalam", "Belakang"], 1, "Benda diletakkan di permukaan atas meja."],
    ["Jika Budi berdiri menghadap ke utara, maka arah belakang punggung Budi adalah arah ...", ["Timur", "Selatan", "Barat", "Utara"], 1, "Utara berlawanan arah dengan Selatan."],
    ["Matahari terbit setiap pagi dari sebelah ...", ["Barat", "Timur", "Utara", "Selatan"], 1, "Matahari terbit di Timur dan terbenam di Barat."],
    ["Lanjutkan pola huruf berikut: A - B - A - B - A - ...", ["A", "B", "C", "D"], 1, "Pola huruf berselang A dan B."],
    ["Perhatikan susunan manik-manik gelang: 1 merah, 2 kuning, 1 merah, 2 kuning, 1 merah, ... Manik berikutnya adalah ...", ["1 merah", "2 kuning", "2 biru", "1 hijau"], 1, "Pola berulang: 1 merah diikuti 2 kuning."],
    ["Di sebelah kanan rumah Siti adalah rumah Rani, dan di sebelah kiri rumah Siti adalah rumah Beni. Rumah yang berada di tengah adalah rumah ...", ["Rani", "Siti", "Beni", "Dina"], 1, "Siti diapit oleh Rani (kanan) dan Beni (kiri)."],
    ["Mengenali posisi benda dan pola di sekitar membantu kita berpikir teratur dan mudah menemukan ...", ["Kesalahan", "Letak benda serta urutan kejadian", "Kerugian", "Kebingungan"], 1, "Pemahaman posisi dan pola melatih logika keteraturan."]
  ]);
  window.BANK_SOAL_MASTER["kls2_matematika_bab4_sesi1"] = [...b4];
  window.BANK_SOAL_MASTER["kls2_matematika_bab4_sesi2"] = [...b4.slice(7), ...b4.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_matematika_bab4_sesi3"] = [...b4.slice(14), ...b4.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b5 = M([
    ["Satu buah apel dipotong menjadi 2 bagian sama besar. Setiap potongan bernilai pecahan ...", ["1/3", "1/2 (setengah)", "1/4", "2/1"], 1, "1 bagian dari 2 potongan sama besar = 1/2."],
    ["Lambang pecahan 'seperempat' ditulis ...", ["1/2", "1/4", "1/3", "4/1"], 1, "Seperempat ditulis 1/4."],
    ["Satu loyang kue pizza dipotong menjadi 4 bagian sama besar. Satu potong pizza menyatakan pecahan ...", ["1/2", "1/4", "1/3", "1/5"], 1, "1 bagian dari 4 potongan sama besar = 1/4."],
    ["Pecahan 1/2 dibaca ...", ["Satu dua", "Setengah atau satu per dua", "Dua per satu", "Seperempat"], 1, "1/2 dibaca satu per dua atau setengah."],
    ["Agar potongan kue bernilai pecahan 1/2, maka kedua potongan tersebut harus ...", ["Berbeda ukuran", "Sama besar", "Satu sangat kecil", "Tidak dipotong"], 1, "Syarat pecahan adalah pembagian bagian yang sama besar."],
    ["Budi memiliki 6 buah kelereng. Setengah (1/2) dari jumlah kelereng Budi adalah ... butir.", ["2", "3", "4", "6"], 1, "1/2 dari 6 = 6 : 2 = 3 butir kelereng."],
    ["Siti memiliki 8 buah jeruk. Seperempat (1/4) dari jumlah jeruk Siti adalah ... buah.", ["4", "2", "3", "6"], 1, "1/4 dari 8 = 8 : 4 = 2 buah jeruk."],
    ["Di atas meja ada 10 buku tulis. Setengah bagian dari buku tersebut berjumlah ... buku.", ["2", "5", "4", "10"], 1, "1/2 dari 10 = 10 : 2 = 5 buku."],
    ["Manakah nilai pecahan yang lebih besar antara 1/2 bagian kue dan 1/4 bagian kue yang sama?", ["1/4 bagian kue", "1/2 bagian kue", "Sama besar", "Tidak bisa dibandingkan"], 1, "Membagi 2 menghasilkan potongan lebih besar daripada membagi 4 (1/2 > 1/4)."],
    ["Satu kertas lipat dilipat menjadi 4 bagian sama besar lalu 1 bagian diarsir. Bagian yang diarsir bernilai ...", ["1/2", "1/4", "3/4", "1/3"], 1, "1 bagian diarsir dari 4 bagian = 1/4."],
    ["Ibu memotong semangka menjadi 2 bagian sama besar. Satu bagian diberikan kepada ayah. Sisa semangka ibu adalah ...", ["1/4 bagian", "1/2 bagian", "2 bagian utuh", "1/3 bagian"], 1, "1 utuh - 1/2 = 1/2 bagian."],
    ["Dalam kelompok 12 siswa, seperempat (1/4) siswa memakai kacamata. Banyak siswa yang memakai kacamata adalah ... anak.", ["2", "3", "4", "6"], 1, "1/4 dari 12 = 12 : 4 = 3 anak."],
    ["Dua potongan kue masing-masing bernilai 1/2 jika digabungkan kembali akan menjadi ... kue utuh.", ["2", "1", "3", "4"], 1, "1/2 + 1/2 = 2/2 = 1 bagian utuh."],
    ["Empat potongan semangka masing-masing bernilai 1/4 jika disatukan kembali menjadi ... semangka utuh.", ["4", "1", "2", "3"], 1, "1/4 + 1/4 + 1/4 + 1/4 = 4/4 = 1 utuh."],
    ["Pada pecahan 1/4, angka 1 disebut pembilang dan angka 4 disebut ...", ["Satuan", "Penyebut", "Puluhan", "Hasil"], 1, "Angka bagian bawah pecahan disebut penyebut."],
    ["Di akuarium ada 4 ekor ikan mas. Seekor ikan berwarna hitam, sisanya merah. Ikan hitam bernilai pecahan ...", ["1/2", "1/4", "1/3", "3/4"], 1, "1 ekor dari 4 ekor ikan = 1/4."],
    ["Rani memiliki pita sepanjang 20 cm lalu dipotong menjadi dua sama panjang. Panjang setiap potongan pita adalah ... cm.", ["5", "10", "15", "20"], 1, "1/2 dari 20 cm = 10 cm."],
    ["Satu roti tawar dibagi rata untuk 4 orang anak. Setiap anak memperoleh ... bagian roti.", ["1/2", "1/4", "1/3", "2/4"], 1, "1 roti dibagi 4 anak sama rata = 1/4 bagian."],
    ["Tanda perbandingan yang tepat untuk 1/4 ... 1/2 adalah ...", [">", "<", "=", "+"], 1, "1/4 lebih kecil daripada 1/2 (<)."],
    ["Konsep pecahan mengajarkan kita untuk berbagi makanan dengan teman secara ...", ["Curang", "Adil dan sama besar", "Sombong", "Pelit"], 1, "Pecahan melatih pembagian yang adil."]
  ]);
  window.BANK_SOAL_MASTER["kls2_matematika_bab5_sesi1"] = [...b5];
  window.BANK_SOAL_MASTER["kls2_matematika_bab5_sesi2"] = [...b5.slice(7), ...b5.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_matematika_bab5_sesi3"] = [...b5.slice(14), ...b5.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b6 = M([
    ["Alat ukur panjang baku yang biasa digunakan murid untuk mengukur panjang buku tulis adalah ...", ["Timbangan", "Penggaris (mistar)", "Jam dinding", "Termometer"], 1, "Penggaris menggunakan satuan baku sentimeter (cm)."],
    ["Satuan panjang baku yang tertulis pada penggaris sekolah adalah ...", ["Kilogram (kg)", "Sentimeter (cm)", "Jam", "Liter"], 1, "cm adalah singkatan dari sentimeter."],
    ["1 meter (m) sama dengan ... sentimeter (cm).", ["10", "100", "1.000", "50"], 1, "1 m = 100 cm."],
    ["Panjang pita 200 cm jika diubah ke dalam satuan meter menjadi ... m.", ["20", "2", "200", "12"], 1, "200 cm : 100 = 2 meter."],
    ["Contoh alat ukur panjang tidak baku yang menggunakan anggota tubuh manusia adalah ...", ["Meteran kain", "Jengkal tangan dan depa", "Timbangan duduk", "Stopwatch"], 1, "Jengkal, hasta, dan depa adalah satuan tidak baku."],
    ["Alat yang digunakan untuk mengukur berat badan manusia adalah ...", ["Penggaris", "Timbangan badan", "Meteran pita", "Jam tangan"], 1, "Timbangan badan mengukur massa/berat tubuh."],
    ["Satuan berat baku yang sering digunakan saat membeli beras atau gula di toko adalah ...", ["Sentimeter (cm)", "Kilogram (kg) dan gram (g)", "Menit", "Meter (m)"], 1, "kg dan g adalah satuan berat baku."],
    ["1 kilogram (kg) sama dengan ... gram (g).", ["10", "1.000", "100", "500"], 1, "1 kg = 1.000 gram."],
    ["Berat 2 kg jeruk ditambah 3 kg apel seluruhnya adalah ... kg.", ["4", "5", "6", "1"], 1, "2 kg + 3 kg = 5 kg."],
    ["Di antara benda berikut, manakah yang paling berat?", ["1 buah pensil", "1 buah tas berisi penuh buku", "1 lembar kertas", "1 buah penghapus"], 1, "Tas penuh buku memiliki massa paling berat."],
    ["Alat ukur waktu yang memiliki jarum pendek penunjuk jam dan jarum panjang penunjuk menit adalah ...", ["Timbangan", "Jam analog (jam dinding)", "Penggaris", "Kompas"], 1, "Jarum pendek = jam, jarum panjang = menit."],
    ["Jika jarum pendek menunjuk angka 7 dan jarum panjang menunjuk angka 12, maka jam menunjukkan pukul ...", ["06.00", "07.00", "12.00", "07.30"], 1, "Jarum panjang di angka 12 menandakan pukul tepat (07.00)."],
    ["Jika jarum pendek berada di antara angka 3 dan 4, sedangkan jarum panjang di angka 6, maka pukul ...", ["03.00", "03.30 (setengah empat)", "04.30", "06.03"], 1, "Jarum panjang di angka 6 menandakan lewat 30 menit."],
    ["1 jam terdiri atas ... menit.", ["30", "60", "24", "100"], 1, "1 jam = 60 menit."],
    ["1 hari terdiri atas ... jam.", ["12", "24", "60", "7"], 1, "1 hari penuh = 24 jam."],
    ["Budi mulai belajar pukul 19.00 dan selesai pukul 20.00. Lama Budi belajar adalah ... jam.", ["2", "1", "3", "4"], 1, "20.00 - 19.00 = 1 jam."],
    ["Panjang pensil Ani 15 cm dan panjang pensil Rini 12 cm. Pensil yang lebih panjang adalah milik ...", ["Rini", "Ani (selisih 3 cm)", "Sama panjang", "Tidak diketahui"], 1, "15 cm > 12 cm, selisihnya 3 cm."],
    ["Alat ukur panjang yang digunakan penjahit untuk mengukur lingkar pinggang baju adalah ...", ["Penggaris besi", "Meteran pita (metlin)", "Timbangan gantung", "Jam pasir"], 1, "Meteran pita lentur mengikuti lekuk tubuh."],
    ["Berat semangka 3.000 gram sama dengan ... kg.", ["30", "3", "300", "3.000"], 1, "3.000 gram : 1.000 = 3 kg."],
    ["Menggunakan alat ukur baku seperti penggaris dan timbangan menghasilkan ukuran yang ...", ["Berubah-ubah tiap orang", "Tetap dan sama di mana saja", "Kurang tepat", "Berbeda-beda"], 1, "Satuan baku memberikan hasil pengukuran standar."]
  ]);
  window.BANK_SOAL_MASTER["kls2_matematika_bab6_sesi1"] = [...b6];
  window.BANK_SOAL_MASTER["kls2_matematika_bab6_sesi2"] = [...b6.slice(7), ...b6.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_matematika_bab6_sesi3"] = [...b6.slice(14), ...b6.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b7 = M([
    ["Lambang bilangan dari 'delapan puluh empat' adalah ...", ["48", "84", "804", "840"], 1, "Delapan puluh empat ditulis 84."],
    ["Nama bilangan dari lambang 96 adalah ...", ["Enam puluh sembilan", "Sembilan puluh enam", "Sembilan enam", "Sembilan ratus enam"], 1, "96 dibaca sembilan puluh enam."],
    ["Lambang bilangan 'seratus' ditulis ...", ["10", "100", "1.000", "010"], 1, "Seratus memiliki 1 ratusan, 0 puluhan, 0 satuan = 100."],
    ["Pada bilangan 75, angka 7 menempati nilai tempat ...", ["Satuan", "Puluhan (bernilai 70)", "Ratusan", "Ribuan"], 1, "75 = 7 puluhan + 5 satuan."],
    ["Bilangan yang terdiri atas 9 puluhan dan 3 satuan adalah ...", ["39", "93", "903", "930"], 1, "90 + 3 = 93."],
    ["Tanda perbandingan yang tepat untuk mengisi 68 ... 86 adalah ...", [">", "<", "=", "-"], 1, "68 lebih kecil daripada 86 (<)."],
    ["Tanda perbandingan yang tepat untuk mengisi 91 ... 89 adalah ...", ["<", ">", "=", "+"], 1, "91 lebih besar daripada 89 (>)."],
    ["Urutan bilangan berikut dari yang terkecil ke terbesar yang benar adalah ...", ["95, 82, 74, 61", "61, 74, 82, 95", "74, 61, 95, 82", "82, 95, 61, 74"], 1, "61 < 74 < 82 < 95."],
    ["Hasil penjumlahan dari 54 + 25 adalah ...", ["78", "79", "89", "69"], 1, "54 + 25 = 79."],
    ["Hasil penjumlahan dari 48 + 36 adalah ...", ["74", "84", "82", "94"], 1, "8 + 6 = 14 (simpan 1), 4 + 3 + 1 = 8 → 84."],
    ["Hasil pengurangan dari 87 - 34 adalah ...", ["52", "53", "43", "63"], 1, "87 - 34 = 53."],
    ["Hasil pengurangan dari 92 - 47 adalah ...", ["55", "45", "47", "57"], 1, "12 - 7 = 5, 8 - 4 = 4 → 45."],
    ["Di perpustakaan ada 65 buku cerita. Ibu guru menambah lagi 28 buku baru. Jumlah buku cerita sekarang adalah ...", ["83", "93", "92", "85"], 1, "65 + 28 = 93 buku."],
    ["Pak Tani memanen 80 buah semangka. Sebanyak 35 semangka terjual di pasar. Sisa semangka Pak Tani adalah ...", ["55", "45", "40", "50"], 1, "80 - 35 = 45 semangka."],
    ["Bilangan loncat 10 setelah 50, 60, 70, 80 adalah ...", ["85", "90", "95", "100"], 1, "80 + 10 = 90."],
    ["Bentuk panjang dari bilangan 89 adalah ...", ["8 + 9", "80 + 9", "90 + 8", "800 + 9"], 1, "89 = 80 + 9."],
    ["Bilangan ganjil terbesar yang kurang dari 100 adalah ...", ["98", "99", "97", "100"], 1, "99 adalah bilangan ganjil terbesar dua angka."],
    ["Bilangan genap terkecil setelah angka 76 adalah ...", ["77", "78", "80", "74"], 1, "76 + 2 = 78."],
    ["Jika 60 + ... = 95, maka bilangan pengganti titik-titik yang tepat adalah ...", ["25", "35", "45", "30"], 1, "95 - 60 = 35."],
    ["Dalam sebuah keranjang ada 100 butir telur. Jika 25 butir telur dibeli ibu, sisa telur di keranjang adalah ...", ["85", "75", "65", "80"], 1, "100 - 25 = 75 butir telur."]
  ]);
  window.BANK_SOAL_MASTER["kls2_matematika_bab7_sesi1"] = [...b7];
  window.BANK_SOAL_MASTER["kls2_matematika_bab7_sesi2"] = [...b7.slice(7), ...b7.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_matematika_bab7_sesi3"] = [...b7.slice(14), ...b7.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b8 = M([
    ["Keterangan atau informasi nyata yang diperoleh dari hasil pengamatan atau wawancara disebut ...", ["Dongeng", "Data", "Khayalan", "Tebakan"], 1, "Data adalah catatan fakta informasi."],
    ["Diagram yang menyajikan data menggunakan simbol atau gambar benda yang mewakili jumlah tertentu disebut ...", ["Diagram garis", "Diagram gambar (piktogram)", "Diagram lingkaran", "Peta"], 1, "Piktogram memakai gambar untuk mempermudah pembacaan data."],
    ["Tanda garis tegak lurus ( |||| ) yang digunakan untuk menghitung banyak data saat mendata suara disebut ...", ["Angka romawi", "Turus", "Pecahan", "Koma"], 1, "Turus memudahkan pencatatan hitungan berkelompok 5."],
    ["Satu ikat tanda turus empat garis tegak yang dicoret satu garis miring melambangkan bilangan ...", ["4", "5", "6", "10"], 1, "Empat tegak + satu miring = 5."],
    ["Data buah kesukaan siswa kelas 2: Apel = 8 siswa, Mangga = 12 siswa, Jeruk = 6 siswa. Buah yang paling banyak disukai adalah ...", ["Apel", "Mangga", "Jeruk", "Sama banyak"], 1, "12 siswa > 8 siswa > 6 siswa."],
    ["Berdasarkan data buah (Apel = 8, Mangga = 12, Jeruk = 6), buah yang paling sedikit disukai adalah ...", ["Apel", "Jeruk", "Mangga", "Pisang"], 1, "Jeruk hanya disukai 6 siswa (paling sedikit)."],
    ["Berdasarkan data buah (Apel = 8, Mangga = 12, Jeruk = 6), selisih siswa yang menyukai Mangga dan Jeruk adalah ... siswa.", ["4", "6", "8", "18"], 1, "12 - 6 = 6 siswa."],
    ["Berdasarkan data buah (Apel = 8, Mangga = 12, Jeruk = 6), jumlah seluruh siswa yang didata adalah ... siswa.", ["20", "26", "24", "28"], 1, "8 + 12 + 6 = 26 siswa."],
    ["Pada diagram gambar, jika 1 gambar bintang mewakili 2 siswa, maka 4 gambar bintang mewakili ... siswa.", ["4", "8", "6", "2"], 1, "4 × 2 = 8 siswa."],
    ["Pada diagram gambar, jika 1 gambar buku mewakili 1 siswa, untuk menyatakan 7 siswa diperlukan ... gambar buku.", ["5", "7", "14", "1"], 1, "1 gambar = 1 siswa, maka 7 siswa = 7 gambar."],
    ["Data warna kesukaan: Merah = 9, Biru = 7, Kuning = 9. Warna yang memiliki jumlah peminat sama banyak adalah ...", ["Merah dan Biru", "Merah dan Kuning", "Biru dan Kuning", "Semua berbeda"], 1, "Merah dan Kuning sama-sama berjumlah 9."],
    ["Langkah pertama sebelum membuat diagram gambar atau diagram batang sederhana adalah ...", ["Mewarnai kertas", "Mengumpulkan dan mencatat data dengan teliti", "Menghapus papan tulis", "Menghitung mundur"], 1, "Pengumpulan data adalah tahap awal penyajian data."],
    ["Data hewan peliharaan di kelas: Kucing = 10, Ikan = 8, Burung = 5. Hewan yang dipelihara lebih banyak dari ikan adalah ...", ["Burung", "Kucing", "Kelinci", "Ayam"], 1, "Kucing (10) > Ikan (8)."],
    ["Jumlah siswa yang memelihara Ikan (8) dan Burung (5) seluruhnya adalah ... anak.", ["3", "13", "15", "18"], 1, "8 + 5 = 13 anak."],
    ["Data alat transportasi ke sekolah: Jalan kaki = 11, Sepeda = 9, Antar motor = 14. Cara berangkat paling banyak dilakukan adalah ...", ["Jalan kaki", "Antar motor", "Sepeda", "Naik bus"], 1, "14 siswa terbanyak."],
    ["Selisih siswa yang berjalan kaki (11) dan naik sepeda (9) adalah ... siswa.", ["1", "2", "3", "20"], 1, "11 - 9 = 2 siswa."],
    ["Tabel data berguna untuk menyusun informasi dalam bentuk baris dan ... agar rapi.", ["Lingkaran", "Kolom", "Segitiga", "Garis lengkung"], 1, "Tabel terdiri atas baris mendatar dan kolom tegak."],
    ["Jika 1 simbol wajah tersenyum mewakili 5 anak, maka 3 simbol wajah tersenyum mewakili ... anak.", ["8", "15", "10", "5"], 1, "3 × 5 = 15 anak."],
    ["Cara mengumpulkan data tinggi badan seluruh teman sekelas paling tepat dilakukan dengan ...", ["Menebak dari jauh", "Mengukur langsung menggunakan meteran tinggi badan", "Bertanya kepada adik", "Melihat foto kelas"], 1, "Pengukuran langsung menghasilkan data akurat."],
    ["Manfaat menyajikan data dalam bentuk diagram adalah informasi menjadi lebih ...", ["Sulit dipahami", "Jelas, ringkas, dan mudah dibandingkan", "Membingungkan", "Panjang lebar"], 1, "Diagram memvisualisasikan perbandingan data secara cepat."]
  ]);
  window.BANK_SOAL_MASTER["kls2_matematika_bab8_sesi1"] = [...b8];
  window.BANK_SOAL_MASTER["kls2_matematika_bab8_sesi2"] = [...b8.slice(7), ...b8.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_matematika_bab8_sesi3"] = [...b8.slice(14), ...b8.slice(0, 14)];
})();
// Alias otomatis semua variasi kunci Matematika Kelas 2 SD
(function() {
  const M = window.BANK_SOAL_MASTER || {};
  for (let bab = 1; bab <= 8; bab++) {
    for (let sesi = 1; sesi <= 3; sesi++) {
      const asal = M[`kls2_matematika_bab${bab}_sesi${sesi}`];
      if (asal) {
        M[`kls2_mtk_bab${bab}_sesi${sesi}`] = asal;
        M[`kls2_math_bab${bab}_sesi${sesi}`] = asal;
      }
    }
  }
})();
