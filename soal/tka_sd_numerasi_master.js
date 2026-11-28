// File: soal/tka_sd_numerasi_master.js
// Master Bank Soal TKA SD - Numerasi (10 Sesi x 20 Soal = 200 Soal)
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi1"] = N([
    ["Hasil dari 1.245 + 3.678 - 2.190 adalah ...", ["2.633", "2.733", "2.833", "2.933"], 1, "1.245 + 3.678 = 4.923; lalu 4.923 - 2.190 = 2.733."],
    ["Ibu membeli 4 kantong jeruk. Setiap kantong berisi 15 buah jeruk. Jika jeruk tersebut dibagikan sama banyak kepada 6 anak, setiap anak menerima ...", ["8 buah", "10 buah", "12 buah", "15 buah"], 1, "Total jeruk = 4 × 15 = 60 buah. Dibagi 6 anak = 60 / 6 = 10 buah."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 12 dan 18 adalah ...", ["24", "36", "48", "72"], 1, "12 = 2² × 3; 18 = 2 × 3². KPK = 2² × 3² = 4 × 9 = 36."],
    ["Faktor Persekutuan Terbesar (FPB) dari 24 dan 36 adalah ...", ["6", "8", "12", "18"], 2, "24 = 2³ × 3; 36 = 2² × 3². FPB = 2² × 3 = 4 × 3 = 12."],
    ["Hasil dari 3/4 + 2/3 adalah ...", ["5/7", "17/12", "13/12", "11/12"], 1, "Samakan penyebut menjadi 12: 9/12 + 8/12 = 17/12."],
    ["Bentuk persen dari pecahan 3/5 adalah ...", ["35%", "45%", "60%", "75%"], 2, "3/5 × 100% = 300% / 5 = 60%."],
    ["Sebuah persegi memiliki panjang sisi 14 cm. Keliling persegi tersebut adalah ...", ["28 cm", "42 cm", "56 cm", "196 cm"], 2, "Keliling persegi = 4 × sisi = 4 × 14 = 56 cm."],
    ["Sebuah persegi panjang memiliki panjang 16 cm dan lebar 9 cm. Luas persegi panjang tersebut adalah ...", ["50 cm²", "124 cm²", "144 cm²", "154 cm²"], 2, "Luas = panjang × lebar = 16 × 9 = 144 cm²."],
    ["Ayah berangkat ke kantor pukul 06.45 dan tiba di kantor pukul 07.30. Lama perjalanan Ayah adalah ...", ["35 menit", "40 menit", "45 menit", "50 menit"], 2, "Dari 06.45 ke 07.00 = 15 menit, ditambah 30 menit = 45 menit."],
    ["Hasil dari 2,5 km + 400 m adalah ...", ["2.540 m", "2.900 m", "6.500 m", "29.000 m"], 1, "2,5 km = 2.500 m. Jadi 2.500 m + 400 m = 2.900 m."],
    ["Harga 3 buku tulis adalah Rp12.000,00. Jika Rina membeli 5 buku tulis yang sama, uang yang harus dibayar adalah ...", ["Rp16.000,00", "Rp18.000,00", "Rp20.000,00", "Rp24.000,00"], 2, "Harga 1 buku = 12.000 / 3 = Rp4.000,00. Untuk 5 buku = 5 × 4.000 = Rp20.000,00."],
    ["Sebuah kubus memiliki panjang rusuk 8 cm. Volume kubus tersebut adalah ...", ["64 cm³", "256 cm³", "384 cm³", "512 cm³"], 3, "Volume kubus = s × s × s = 8 × 8 × 8 = 512 cm³."],
    ["Lampu merah menyala setiap 4 detik sekali dan lampu kuning menyala setiap 6 detik sekali. Jika keduanya menyala bersamaan pada pukul 08.00.00, keduanya akan menyala bersamaan lagi pada pukul ...", ["08.00.10", "08.00.12", "08.00.16", "08.00.24"], 1, "KPK dari 4 dan 6 adalah 12 detik → menyala bersamaan lagi pukul 08.00.12."],
    ["Hasil dari 15² - √144 adalah ...", ["203", "213", "223", "237"], 1, "15² = 225 dan √144 = 12. Hasil = 225 - 12 = 213."],
    ["Sebuah segitiga memiliki panjang alas 12 cm dan tinggi 10 cm. Luas segitiga tersebut adalah ...", ["44 cm²", "60 cm²", "120 cm²", "240 cm²"], 1, "Luas segitiga = (alas × tinggi) / 2 = (12 × 10) / 2 = 60 cm²."],
    ["Budi memiliki 45 kelereng. Sebanyak 2/5 bagian diberikan kepada adiknya. Sisa kelereng Budi sekarang adalah ...", ["18 butir", "25 butir", "27 butir", "30 butir"], 2, "Diberikan = (2/5) × 45 = 18 butir. Sisa = 45 - 18 = 27 butir."],
    ["Nilai ulangan Matematika Siti adalah 80, 75, 90, 85, dan 70. Rata-rata nilai ulangan Siti adalah ...", ["78", "80", "82", "84"], 1, "Jumlah = 80 + 75 + 90 + 85 + 70 = 400. Rata-rata = 400 / 5 = 80."],
    ["Sebuah lingkaran memiliki jari-jari 7 cm (π = 22/7). Luas lingkaran tersebut adalah ...", ["44 cm²", "88 cm²", "154 cm²", "308 cm²"], 2, "Luas = π × r × r = (22/7) × 7 × 7 = 154 cm²."],
    ["Suhu di dalam kulkas mula-mula -4°C. Setelah listrik padam, suhunya naik 9°C. Suhu di dalam kulkas sekarang menjadi ...", ["-13°C", "-5°C", "5°C", "13°C"], 2, "-4 + 9 = 5°C."],
    ["Sebuah balok berukuran panjang 10 cm, lebar 6 cm, dan tinggi 5 cm. Volume balok tersebut adalah ...", ["150 cm³", "250 cm³", "300 cm³", "350 cm³"], 2, "Volume balok = p × l × t = 10 × 6 × 5 = 300 cm³."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi2"] = N([
    ["Hasil dari 4.520 - 1.875 + 2.340 adalah ...", ["4.885", "4.985", "5.085", "5.185"], 1, "4.520 - 1.875 = 2.645; lalu 2.645 + 2.340 = 4.985."],
    ["Pak Rudi memanen 6 keranjang mangga. Setiap keranjang berisi 24 buah mangga. Jika mangga tersebut dikemas ke dalam 8 kardus sama banyak, isi setiap kardus adalah ...", ["16 buah", "18 buah", "20 buah", "22 buah"], 1, "Total mangga = 6 × 24 = 144 buah. Dibagi 8 kardus = 144 / 8 = 18 buah."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 15 dan 20 adalah ...", ["30", "45", "60", "90"], 2, "15 = 3 × 5; 20 = 2² × 5. KPK = 2² × 3 × 5 = 60."],
    ["Faktor Persekutuan Terbesar (FPB) dari 30 dan 45 adalah ...", ["5", "10", "15", "30"], 2, "30 = 2 × 3 × 5; 45 = 3² × 5. FPB = 3 × 5 = 15."],
    ["Hasil dari 5/6 - 1/4 adalah ...", ["7/12", "4/10", "2/3", "5/12"], 0, "Samakan penyebut menjadi 12: 10/12 - 3/12 = 7/12."],
    ["Bentuk desimal dari pecahan 7/8 adalah ...", ["0,75", "0,825", "0,85", "0,875"], 3, "7 dibagi 8 = 0,875."],
    ["Sebuah persegi memiliki keliling 64 cm. Luas persegi tersebut adalah ...", ["144 cm²", "196 cm²", "256 cm²", "324 cm²"], 2, "Sisi = 64 / 4 = 16 cm. Luas = 16 × 16 = 256 cm²."],
    ["Sebuah jajar genjang memiliki panjang alas 18 cm dan tinggi 11 cm. Luas jajar genjang tersebut adalah ...", ["99 cm²", "188 cm²", "198 cm²", "208 cm²"], 2, "Luas jajar genjang = alas × tinggi = 18 × 11 = 198 cm²."],
    ["Kereta api berangkat dari stasiun pukul 09.20 dan tiba di tujuan pukul 11.05. Lama perjalanan kereta api tersebut adalah ...", ["1 jam 35 menit", "1 jam 45 menit", "1 jam 55 menit", "2 jam 15 menit"], 1, "Dari 09.20 ke 11.00 = 1 jam 40 menit, ditambah 5 menit = 1 jam 45 menit."],
    ["Hasil dari 3,2 ton - 450 kg adalah ...", ["2.650 kg", "2.750 kg", "2.850 kg", "3.155 kg"], 1, "3,2 ton = 3.200 kg. Jadi 3.200 kg - 450 kg = 2.750 kg."],
    ["Perbandingan umur Ani dan Budi adalah 3 : 4. Jika umur Ani 12 tahun, maka umur Budi adalah ...", ["14 tahun", "15 tahun", "16 tahun", "18 tahun"], 2, "Umur Budi = (4/3) × 12 = 16 tahun."],
    ["Sebuah kubus memiliki luas alas 49 cm². Volume kubus tersebut adalah ...", ["216 cm³", "294 cm³", "343 cm³", "512 cm³"], 2, "Sisi = √49 = 7 cm. Volume = 7 × 7 × 7 = 343 cm³."],
    ["Ibu memiliki 28 kue bolu dan 42 kue lapis yang akan dimasukkan ke dalam beberapa piring sama banyak. Piring terbanyak yang dibutuhkan Ibu adalah ...", ["7 piring", "14 piring", "21 piring", "28 piring"], 1, "FPB dari 28 dan 42 adalah 14 piring."],
    ["Hasil dari 12² + √225 adalah ...", ["159", "169", "179", "189"], 0, "12² = 144 dan √225 = 15. Hasil = 144 + 15 = 159."],
    ["Sebuah belah ketupat memiliki panjang diagonal 14 cm dan 20 cm. Luas belah ketupat tersebut adalah ...", ["120 cm²", "140 cm²", "240 cm²", "280 cm²"], 1, "Luas = (14 × 20) / 2 = 140 cm²."],
    ["Harga sebuah sepatu adalah Rp150.000,00. Toko memberikan diskon sebesar 20%. Harga sepatu setelah diskon adalah ...", ["Rp115.000,00", "Rp120.000,00", "Rp125.000,00", "Rp130.000,00"], 1, "Diskon = 20% × 150.000 = Rp30.000,00. Harga bayar = 150.000 - 30.000 = Rp120.000,00."],
    ["Data berat badan (kg) lima siswa: 34, 36, 35, 38, 37. Median dari data tersebut adalah ...", ["35 kg", "36 kg", "36,5 kg", "37 kg"], 1, "Urutkan: 34, 35, 36, 37, 38. Nilai tengah (median) = 36 kg."],
    ["Sebuah lingkaran memiliki diameter 28 cm (π = 22/7). Keliling lingkaran tersebut adalah ...", ["44 cm", "66 cm", "88 cm", "154 cm"], 2, "Keliling = π × d = (22/7) × 28 = 88 cm."],
    ["Hasil dari (-18) + 25 - (-7) adalah ...", ["0", "7", "14", "28"], 2, "-18 + 25 = 7; lalu 7 - (-7) = 7 + 7 = 14."],
    ["Sebuah akuarium berbentuk balok berukuran panjang 50 cm, lebar 30 cm, dan tinggi 40 cm berisi air penuh. Volume air di dalam akuarium tersebut adalah ...", ["45 liter", "50 liter", "60 liter", "75 liter"], 2, "Volume = 50 × 30 × 40 = 60.000 cm³ = 60 liter."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi3"] = N([
    ["Hasil dari 6.450 + 2.385 - 4.190 adalah ...", ["4.545", "4.645", "4.745", "4.845"], 1, "6.450 + 2.385 = 8.835; lalu 8.835 - 4.190 = 4.645."],
    ["Sebuah toko memiliki 8 kotak pensil. Setiap kotak berisi 12 batang pensil. Jika terjual 35 batang pensil, sisa pensil di toko tersebut adalah ...", ["51 batang", "61 batang", "71 batang", "81 batang"], 1, "Total pensil = 8 × 12 = 96 batang. Sisa = 96 - 35 = 61 batang."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 16 dan 24 adalah ...", ["32", "48", "64", "96"], 1, "16 = 2⁴; 24 = 2³ × 3. KPK = 2⁴ × 3 = 16 × 3 = 48."],
    ["Faktor Persekutuan Terbesar (FPB) dari 36 dan 54 adalah ...", ["6", "9", "12", "18"], 3, "36 = 2² × 3²; 54 = 2 × 3³. FPB = 2 × 3² = 18."],
    ["Hasil dari 2 1/2 + 1 3/4 adalah ...", ["3 1/4", "3 3/4", "4 1/4", "4 1/2"], 2, "2 2/4 + 1 3/4 = 3 5/4 = 4 1/4."],
    ["Urutan pecahan berikut dari yang terkecil ke terbesar yang benar adalah ...", ["1/2 ; 0,4 ; 75%", "0,4 ; 1/2 ; 75%", "75% ; 1/2 ; 0,4", "0,4 ; 75% ; 1/2"], 1, "0,4 = 40%; 1/2 = 50%; 75% = 75%. Urutan: 0,4 ; 1/2 ; 75%."],
    ["Sebuah trapesium memiliki panjang sisi sejajar 12 cm dan 18 cm, serta tinggi 10 cm. Luas trapesium tersebut adalah ...", ["120 cm²", "140 cm²", "150 cm²", "180 cm²"], 2, "Luas = [(12 + 18) / 2] × 10 = 15 × 10 = 150 cm²."],
    ["Sebuah persegi panjang memiliki keliling 54 cm dan panjang 17 cm. Lebar persegi panjang tersebut adalah ...", ["8 cm", "9 cm", "10 cm", "12 cm"], 2, "p + l = 54 / 2 = 27 cm. Lebar = 27 - 17 = 10 cm."],
    ["Siti belajar mulai pukul 19.15 dan selesai pukul 20.50. Lama Siti belajar adalah ...", ["1 jam 25 menit", "1 jam 35 menit", "1 jam 45 menit", "2 jam 05 menit"], 1, "Dari 19.15 ke 20.15 = 1 jam, ditambah 35 menit = 1 jam 35 menit."],
    ["Hasil dari 4.500 ml + 2,5 liter adalah ...", ["6 liter", "7 liter", "7,5 liter", "8 liter"], 1, "4.500 ml = 4,5 liter. Jadi 4,5 liter + 2,5 liter = 7 liter."],
    ["Jarak Kota A dan Kota B pada peta adalah 5 cm. Jika skala peta 1 : 400.000, jarak sebenarnya kedua kota tersebut adalah ...", ["2 km", "20 km", "200 km", "2.000 km"], 1, "Jarak sebenarnya = 5 × 400.000 cm = 2.000.000 cm = 20 km."],
    ["Sebuah tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm (π = 22/7). Volume tabung tersebut adalah ...", ["440 cm³", "770 cm³", "1.540 cm³", "3.080 cm³"], 2, "Volume = π × r² × t = (22/7) × 7 × 7 × 10 = 154 × 10 = 1.540 cm³."],
    ["Andi berenang setiap 3 hari sekali, sedangkan Bayu berenang setiap 5 hari sekali. Jika mereka berenang bersama pada hari Senin, mereka akan berenang bersama lagi pada hari ...", ["Senin", "Selasa", "Rabu", "Kamis"], 1, "KPK dari 3 dan 5 adalah 15 hari. 15 hari setelah Senin (15 = 2 minggu + 1 hari) adalah hari Selasa."],
    ["Hasil dari 14² - √169 adalah ...", ["173", "183", "193", "209"], 1, "14² = 196 dan √169 = 13. Hasil = 196 - 13 = 183."],
    ["Sebuah layang-layang memiliki panjang diagonal 16 cm dan 25 cm. Luas layang-layang tersebut adalah ...", ["180 cm²", "200 cm²", "240 cm²", "400 cm²"], 1, "Luas = (16 × 25) / 2 = 200 cm²."],
    ["Uang tabungan Dinda Rp240.000,00. Sebanyak 3/8 bagian digunakan untuk membeli buku cerita. Sisa uang tabungan Dinda sekarang adalah ...", ["Rp90.000,00", "Rp120.000,00", "Rp150.000,00", "Rp180.000,00"], 2, "Dipakai = (3/8) × 240.000 = Rp90.000,00. Sisa = 240.000 - 90.000 = Rp150.000,00."],
    ["Data nilai kuis IPA: 70, 80, 90, 80, 85, 80, 75. Modus dari data tersebut adalah ...", ["75", "80", "85", "90"], 1, "Nilai 80 muncul paling sering (sebanyak 3 kali), sehingga modusnya 80."],
    ["Sebuah roda sepeda memiliki jari-jari 21 cm (π = 22/7). Keliling roda sepeda tersebut adalah ...", ["66 cm", "132 cm", "264 cm", "1.386 cm"], 1, "Keliling = 2 × (22/7) × 21 = 2 × 66 = 132 cm."],
    ["Hasil dari (-24) : 4 × (-3) adalah ...", ["-18", "-2", "2", "18"], 3, "(-24) : 4 = -6; lalu (-6) × (-3) = 18."],
    ["Sebuah kolam ikan berbentuk balok memiliki panjang 4 m, lebar 2,5 m, dan kedalaman 1,2 m. Volume kolam ikan tersebut adalah ...", ["10 m³", "12 m³", "14 m³", "15 m³"], 1, "Volume = 4 × 2,5 × 1,2 = 10 × 1,2 = 12 m³."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi4"] = N([
    ["Hasil dari 7.825 - 3.490 + 1.675 adalah ...", ["5.910", "6.010", "6.110", "6.210"], 1, "7.825 - 3.490 = 4.335; lalu 4.335 + 1.675 = 6.010."],
    ["Seorang pedagang membeli 5 karung beras. Setiap karung berisi 25 kg beras. Jika beras tersebut dikemas ke dalam kantong plastik berukuran 5 kg, banyak kantong plastik yang diperlukan adalah ...", ["20 kantong", "25 kantong", "30 kantong", "35 kantong"], 1, "Total beras = 5 × 25 = 125 kg. Banyak kantong = 125 / 5 = 25 kantong."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 18 dan 24 adalah ...", ["36", "48", "72", "96"], 2, "18 = 2 × 3²; 24 = 2³ × 3. KPK = 2³ × 3² = 8 × 9 = 72."],
    ["Faktor Persekutuan Terbesar (FPB) dari 42 dan 56 adalah ...", ["7", "14", "21", "28"], 1, "42 = 2 × 3 × 7; 56 = 2³ × 7. FPB = 2 × 7 = 14."],
    ["Hasil dari 4/5 × 15/16 adalah ...", ["3/4", "4/5", "1/2", "5/8"], 0, "Sederhanakan: (4/16) × (15/5) = (1/4) × 3 = 3/4."],
    ["Bentuk pecahan biasa paling sederhana dari 0,65 adalah ...", ["13/20", "15/20", "13/25", "7/10"], 0, "0,65 = 65/100 = (65 : 5)/(100 : 5) = 13/20."],
    ["Sebuah segitiga sama sisi memiliki keliling 48 cm. Panjang setiap sisi segitiga tersebut adalah ...", ["12 cm", "14 cm", "16 cm", "18 cm"], 2, "Panjang sisi = 48 / 3 = 16 cm."],
    ["Sebuah lingkaran memiliki jari-jari 14 cm (π = 22/7). Luas lingkaran tersebut adalah ...", ["308 cm²", "462 cm²", "616 cm²", "1.232 cm²"], 2, "Luas = (22/7) × 14 × 14 = 44 × 14 = 616 cm²."],
    ["Sebuah bus berangkat dari terminal pukul 07.40 dan tiba di kota tujuan pukul 10.15. Lama perjalanan bus tersebut adalah ...", ["2 jam 15 menit", "2 jam 25 menit", "2 jam 35 menit", "3 jam 25 menit"], 2, "Dari 07.40 ke 09.40 = 2 jam, ditambah 35 menit = 2 jam 35 menit."],
    ["Hasil dari 1,8 hektare + 2.500 m² adalah ...", ["4.300 m²", "18.250 m²", "20.500 m²", "43.000 m²"], 2, "1,8 hektare = 1,8 × 10.000 m² = 18.000 m². Jadi 18.000 + 2.500 = 20.500 m²."],
    ["Harga 4 kg mangga adalah Rp60.000,00. Jika Ibu membeli 7 kg mangga yang sama, uang yang harus dibayar adalah ...", ["Rp95.000,00", "Rp100.000,00", "Rp105.000,00", "Rp120.000,00"], 2, "Harga 1 kg = 60.000 / 4 = Rp15.000,00. Untuk 7 kg = 7 × 15.000 = Rp105.000,00."],
    ["Sebuah balok memiliki volume 480 cm³. Jika panjang balok 10 cm dan lebarnya 8 cm, tinggi balok tersebut adalah ...", ["4 cm", "5 cm", "6 cm", "8 cm"], 2, "Tinggi = Volume / (p × l) = 480 / (10 × 8) = 480 / 80 = 6 cm."],
    ["Bu Guru memiliki 32 pensil dan 48 penghapus yang akan dibagikan ke dalam bingkisan hadiah dengan isi sama banyak. Bingkisan terbanyak yang dapat dibuat adalah ...", ["8 bingkisan", "12 bingkisan", "16 bingkisan", "24 bingkisan"], 2, "FPB dari 32 dan 48 adalah 16 bingkisan."],
    ["Hasil dari 16² + √196 adalah ...", ["260", "270", "280", "290"], 1, "16² = 256 dan √196 = 14. Hasil = 256 + 14 = 270."],
    ["Sebuah taman berbentuk persegi panjang berukuran panjang 22 m dan lebar 15 m. Di sekeliling taman akan dipasang pagar kawat. Panjang pagar kawat yang dibutuhkan adalah ...", ["37 meter", "64 meter", "74 meter", "330 meter"], 2, "Keliling = 2 × (22 + 15) = 2 × 37 = 74 meter."],
    ["Sebuah sepeda motor menempuh jarak 120 km dalam waktu 2 jam. Kecepatan rata-rata sepeda motor tersebut adalah ...", ["50 km/jam", "55 km/jam", "60 km/jam", "65 km/jam"], 2, "Kecepatan = jarak / waktu = 120 / 2 = 60 km/jam."],
    ["Nilai ulangan Bahasa Indonesia Edo: 75, 85, 80, 90, 85, 95. Rata-rata nilai ulangan Edo adalah ...", ["84", "85", "86", "87"], 1, "Jumlah = 75 + 85 + 80 + 90 + 85 + 95 = 510. Rata-rata = 510 / 6 = 85."],
    ["Sebuah setengah lingkaran memiliki diameter 14 cm (π = 22/7). Luas daerah setengah lingkaran tersebut adalah ...", ["44 cm²", "77 cm²", "154 cm²", "308 cm²"], 1, "r = 7 cm. Luas setengah lingkaran = (1/2) × (22/7) × 7 × 7 = 77 cm²."],
    ["Hasil dari 45 - (-15) + (-20) adalah ...", ["10", "30", "40", "80"], 2, "45 - (-15) = 45 + 15 = 60; lalu 60 + (-20) = 40."],
    ["Sebuah kubus memiliki jumlah panjang seluruh rusuknya 72 cm. Volume kubus tersebut adalah ...", ["125 cm³", "216 cm³", "343 cm³", "512 cm³"], 1, "Kubus memiliki 12 rusuk → panjang 1 rusuk = 72 / 12 = 6 cm. Volume = 6 × 6 × 6 = 216 cm³."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi5"] = N([
    ["Hasil dari 8.540 + 1.460 - 3.725 adalah ...", ["6.175", "6.275", "6.375", "6.475"], 1, "8.540 + 1.460 = 10.000; lalu 10.000 - 3.725 = 6.275."],
    ["Di sebuah aula terdapat 12 baris kursi. Setiap baris berisi 15 kursi. Jika terdapat 145 penonton yang hadir, banyak kursi yang masih kosong adalah ...", ["25 kursi", "35 kursi", "45 kursi", "55 kursi"], 1, "Total kursi = 12 × 15 = 180 kursi. Kursi kosong = 180 - 145 = 35 kursi."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 20 dan 30 adalah ...", ["40", "50", "60", "90"], 2, "20 = 2² × 5; 30 = 2 × 3 × 5. KPK = 2² × 3 × 5 = 60."],
    ["Faktor Persekutuan Terbesar (FPB) dari 48 dan 72 adalah ...", ["12", "16", "24", "36"], 2, "48 = 2⁴ × 3; 72 = 2³ × 3². FPB = 2³ × 3 = 8 × 3 = 24."],
    ["Hasil dari 3/4 : 9/8 adalah ...", ["2/3", "3/4", "27/32", "4/3"], 0, "3/4 × 8/9 = 24/36 = 2/3."],
    ["Bentuk pecahan campuran paling sederhana dari 23/5 adalah ...", ["3 4/5", "4 2/5", "4 3/5", "5 3/5"], 2, "23 dibagi 5 = 4 sisa 3 → 4 3/5."],
    ["Sebuah segitiga siku-siku memiliki panjang alas 9 cm, tinggi 12 cm, dan sisi miring 15 cm. Keliling segitiga tersebut adalah ...", ["30 cm", "36 cm", "54 cm", "108 cm"], 1, "Keliling = 9 + 12 + 15 = 36 cm."],
    ["Luas segitiga siku-siku dengan panjang alas 9 cm dan tinggi 12 cm adalah ...", ["36 cm²", "48 cm²", "54 cm²", "108 cm²"], 2, "Luas = (9 × 12) / 2 = 54 cm²."],
    ["Paman berangkat memancing pukul 05.50 dan pulang pukul 09.15. Lama Paman pergi memancing adalah ...", ["3 jam 15 menit", "3 jam 25 menit", "3 jam 35 menit", "4 jam 25 menit"], 1, "Dari 05.50 ke 08.50 = 3 jam, ditambah 25 menit = 3 jam 25 menit."],
    ["Hasil dari 2,4 kuintal + 85 kg adalah ...", ["109 kg", "245 kg", "325 kg", "2.485 kg"], 2, "2,4 kuintal = 240 kg. Jadi 240 + 85 = 325 kg."],
    ["Perbandingan banyak siswa laki-laki dan perempuan di kelas VI adalah 4 : 5. Jika banyak siswa perempuan 20 orang, jumlah seluruh siswa di kelas tersebut adalah ...", ["32 orang", "36 orang", "40 orang", "45 orang"], 1, "Siswa laki-laki = (4/5) × 20 = 16 orang. Total = 16 + 20 = 36 orang."],
    ["Sebuah prisma tegak segitiga memiliki luas alas 28 cm² dan tinggi 15 cm. Volume prisma tersebut adalah ...", ["210 cm³", "320 cm³", "420 cm³", "450 cm³"], 2, "Volume prisma = luas alas × tinggi = 28 × 15 = 420 cm³."],
    ["Ayah mencuci motor setiap 6 hari sekali dan mencuci mobil setiap 8 hari sekali. Jika hari ini Ayah mencuci keduanya bersamaan, berapa hari lagi Ayah akan mencuci keduanya bersamaan?", ["14 hari", "18 hari", "24 hari", "48 hari"], 2, "KPK dari 6 dan 8 adalah 24 hari."],
    ["Hasil dari 18² - √256 adalah ...", ["298", "308", "318", "340"], 1, "18² = 324 dan √256 = 16. Hasil = 324 - 16 = 308."],
    ["Sebuah roda memiliki diameter 35 cm (π = 22/7). Keliling roda tersebut adalah ...", ["70 cm", "90 cm", "110 cm", "140 cm"], 2, "Keliling = (22/7) × 35 = 22 × 5 = 110 cm."],
    ["Beni membeli tas seharga Rp120.000,00 dan mendapat potongan harga 15%. Besar uang yang harus dibayar Beni adalah ...", ["Rp98.000,00", "Rp102.000,00", "Rp105.000,00", "Rp108.000,00"], 1, "Potongan = 15% × 120.000 = Rp18.000,00. Bayar = 120.000 - 18.000 = Rp102.000,00."],
    ["Data tinggi badan (cm) enam siswa: 138, 142, 140, 145, 140, 141. Selisih tinggi badan tertinggi dan terendah adalah ...", ["5 cm", "6 cm", "7 cm", "8 cm"], 2, "Tertinggi = 145 cm, terendah = 138 cm. Selisih = 145 - 138 = 7 cm."],
    ["Sebuah kaleng susu berbentuk tabung memiliki diameter alas 14 cm dan tinggi 20 cm (π = 22/7). Volume kaleng tersebut adalah ...", ["1.540 cm³", "2.460 cm³", "3.080 cm³", "6.160 cm³"], 2, "r = 7 cm. Volume = (22/7) × 7 × 7 × 20 = 154 × 20 = 3.080 cm³."],
    ["Hasil dari (-15) × 4 + 32 adalah ...", ["-92", "-28", "28", "92"], 1, "(-15) × 4 = -60; lalu -60 + 32 = -28."],
    ["Sebuah bak mandi berbentuk kubus memiliki panjang rusuk 100 cm. Jika terisi air setengah bagian, volume air di dalam bak mandi tersebut adalah ...", ["250 liter", "500 liter", "750 liter", "1.000 liter"], 1, "Volume penuh = 100 × 100 × 100 = 1.000.000 cm³ = 1.000 liter. Setengahnya = 500 liter."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi6"] = N([
    ["Hasil dari 9.120 - 4.565 + 2.845 adalah ...", ["7.200", "7.300", "7.400", "7.500"], 2, "9.120 - 4.565 = 4.555; lalu 4.555 + 2.845 = 7.400."],
    ["Bu Nina membuat 96 kue donat. Kue tersebut dimasukkan ke dalam 8 kotak dengan isi sama banyak. Jika 3 kotak diberikan kepada tetangga, sisa kue donat Bu Nina adalah ...", ["48 kue", "60 kue", "64 kue", "72 kue"], 1, "Isi per kotak = 96 / 8 = 12 kue. Sisa = 5 kotak × 12 = 60 kue."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 14 dan 21 adalah ...", ["28", "42", "63", "84"], 1, "14 = 2 × 7; 21 = 3 × 7. KPK = 2 × 3 × 7 = 42."],
    ["Faktor Persekutuan Terbesar (FPB) dari 40 dan 60 adalah ...", ["10", "15", "20", "30"], 2, "40 = 2³ × 5; 60 = 2² × 3 × 5. FPB = 2² × 5 = 20."],
    ["Hasil dari 1 2/3 + 2 1/6 adalah ...", ["3 1/2", "3 5/6", "4 1/6", "4 1/3"], 1, "1 4/6 + 2 1/6 = 3 5/6."],
    ["Bentuk persen dari 0,45 adalah ...", ["4,5%", "45%", "54%", "450%"], 1, "0,45 × 100% = 45%."],
    ["Sebuah belah ketupat memiliki panjang sisi 17 cm. Keliling belah ketupat tersebut adalah ...", ["34 cm", "51 cm", "68 cm", "85 cm"], 2, "Keliling = 4 × 17 = 68 cm."],
    ["Sebuah trapesium memiliki sisi sejajar 15 cm dan 25 cm serta tinggi 12 cm. Luas trapesium tersebut adalah ...", ["220 cm²", "240 cm²", "260 cm²", "300 cm²"], 1, "Luas = [(15 + 25) / 2] × 12 = 20 × 12 = 240 cm²."],
    ["Lomba lari dimulai pukul 06.35. Andi mencapai garis finis pukul 07.20. Waktu tempuh Andi adalah ...", ["35 menit", "40 menit", "45 menit", "55 menit"], 2, "Dari 06.35 ke 07.00 = 25 menit, ditambah 20 menit = 45 menit."],
    ["Hasil dari 3,5 jam + 45 menit adalah ...", ["215 menit", "245 menit", "255 menit", "395 menit"], 2, "3,5 jam = 3 × 60 + 30 = 210 menit. Jadi 210 + 45 = 255 menit."],
    ["Sebuah peta memiliki skala 1 : 500.000. Jika jarak sebenarnya dua kota adalah 35 km, jarak kedua kota tersebut pada peta adalah ...", ["5 cm", "7 cm", "9 cm", "14 cm"], 1, "35 km = 3.500.000 cm. Jarak peta = 3.500.000 / 500.000 = 7 cm."],
    ["Sebuah kubus memiliki volume 729 cm³. Panjang rusuk kubus tersebut adalah ...", ["7 cm", "8 cm", "9 cm", "11 cm"], 2, "Akar pangkat tiga dari 729 adalah 9 cm (9 × 9 × 9 = 729)."],
    ["Terdapat 36 siswa laki-laki dan 48 siswa perempuan yang akan dibagi menjadi beberapa kelompok dengan jumlah anggota sama banyak dan komposisi sama. Kelompok terbanyak yang dapat dibentuk adalah ...", ["6 kelompok", "8 kelompok", "12 kelompok", "16 kelompok"], 2, "FPB dari 36 dan 48 adalah 12 kelompok."],
    ["Hasil dari 20² - √324 adalah ...", ["372", "382", "392", "418"], 1, "20² = 400 dan √324 = 18. Hasil = 400 - 18 = 382."],
    ["Sebuah lingkaran memiliki luas 154 cm² (π = 22/7). Jari-jari lingkaran tersebut adalah ...", ["7 cm", "14 cm", "21 cm", "28 cm"], 0, "r² = 154 : (22/7) = 154 × 7 / 22 = 49 → r = 7 cm."],
    ["Pak Danu menabung Rp800.000,00 di bank dengan bunga 5% per tahun. Besar bunga tabungan Pak Danu setelah 1 tahun adalah ...", ["Rp30.000,00", "Rp40.000,00", "Rp45.000,00", "Rp50.000,00"], 1, "Bunga 1 tahun = 5% × 800.000 = Rp40.000,00."],
    ["Nilai ulangan Matematika 4 anak memiliki rata-rata 82. Jika 3 anak mendapat nilai 80, 85, dan 78, nilai anak keempat adalah ...", ["83", "85", "87", "89"], 1, "Total 4 anak = 4 × 82 = 328. Nilai anak ke-4 = 328 - (80 + 85 + 78) = 328 - 243 = 85."],
    ["Sebuah balok memiliki panjang 12 cm, lebar 8 cm, dan tinggi 5 cm. Luas permukaan seluruh balok tersebut adalah ...", ["296 cm²", "392 cm²", "480 cm²", "512 cm²"], 1, "Luas = 2 × [(12×8) + (12×5) + (8×5)] = 2 × (96 + 60 + 40) = 2 × 196 = 392 cm²."],
    ["Hasil dari (-36) + (-14) - (-25) adalah ...", ["-75", "-25", "25", "75"], 1, "-36 + (-14) = -50; lalu -50 - (-25) = -50 + 25 = -25."],
    ["Sebuah ember mampu menampung 15 liter air. Jika digunakan untuk mengisi drum berkapasitas 180 liter hingga penuh, ember tersebut harus dituangkan sebanyak ...", ["10 kali", "12 kali", "14 kali", "15 kali"], 1, "Banyak tuangan = 180 / 15 = 12 kali."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi7"] = N([
    ["Hasil dari 5.680 + 3.495 - 2.750 adalah ...", ["6.325", "6.425", "6.525", "6.625"], 1, "5.680 + 3.495 = 9.175; lalu 9.175 - 2.750 = 6.425."],
    ["Sebuah toko kue memiliki 7 loyang brownies. Setiap loyang dipotong menjadi 16 potong. Jika terjual 85 potong, sisa brownies di toko tersebut adalah ...", ["25 potong", "27 potong", "29 potong", "31 potong"], 1, "Total brownies = 7 × 16 = 112 potong. Sisa = 112 - 85 = 27 potong."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 24 dan 36 adalah ...", ["48", "60", "72", "108"], 2, "24 = 2³ × 3; 36 = 2² × 3². KPK = 2³ × 3² = 8 × 9 = 72."],
    ["Faktor Persekutuan Terbesar (FPB) dari 45 dan 60 adalah ...", ["5", "10", "15", "30"], 2, "45 = 3² × 5; 60 = 2² × 3 × 5. FPB = 3 × 5 = 15."],
    ["Hasil dari 5/8 + 3/4 adalah ...", ["8/12", "1 1/8", "1 3/8", "1 5/8"], 2, "5/8 + 6/8 = 11/8 = 1 3/8."],
    ["Bentuk desimal dari pecahan 3/8 adalah ...", ["0,275", "0,325", "0,375", "0,425"], 2, "3 dibagi 8 = 0,375."],
    ["Sebuah jajar genjang memiliki panjang alas 24 cm dan sisi miring 13 cm. Keliling jajar genjang tersebut adalah ...", ["37 cm", "62 cm", "74 cm", "312 cm"], 2, "Keliling = 2 × (24 + 13) = 2 × 37 = 74 cm."],
    ["Sebuah layang-layang memiliki luas 180 cm². Jika panjang salah satu diagonalnya 20 cm, panjang diagonal lainnya adalah ...", ["9 cm", "16 cm", "18 cm", "36 cm"], 2, "d2 = (2 × Luas) / d1 = (2 × 180) / 20 = 360 / 20 = 18 cm."],
    ["Dina mulai les piano pukul 15.40 dan selesai pukul 17.10. Lama Dina mengikuti les piano adalah ...", ["1 jam 10 menit", "1 jam 20 menit", "1 jam 30 menit", "1 jam 50 menit"], 2, "Dari 15.40 ke 16.40 = 1 jam, ditambah 30 menit = 1 jam 30 menit."],
    ["Hasil dari 4,5 kg - 1.250 gram adalah ...", ["2.250 gram", "3.250 gram", "3.750 gram", "4.375 gram"], 1, "4,5 kg = 4.500 gram. Jadi 4.500 - 1.250 = 3.250 gram."],
    ["Perbandingan kelereng Andi dan Deni adalah 5 : 3. Jika selisih kelereng mereka 14 butir, banyak kelereng Andi adalah ...", ["21 butir", "28 butir", "35 butir", "42 butir"], 2, "Selisih rasio = 5 - 3 = 2 bagian = 14 → 1 bagian = 7. Kelereng Andi = 5 × 7 = 35 butir."],
    ["Sebuah tabung memiliki luas alas 154 cm² dan tinggi 12 cm. Volume tabung tersebut adalah ...", ["1.540 cm³", "1.694 cm³", "1.848 cm³", "2.156 cm³"], 2, "Volume = luas alas × tinggi = 154 × 12 = 1.848 cm³."],
    ["Bus A berangkat dari terminal setiap 15 menit sekali dan Bus B berangkat setiap 20 menit sekali. Jika kedua bus berangkat bersama pukul 06.30, pukul berapa keduanya berangkat bersama lagi?", ["07.00", "07.15", "07.30", "08.00"], 2, "KPK dari 15 dan 20 adalah 60 menit (1 jam) → berangkat bersama lagi pukul 07.30."],
    ["Hasil dari 17² + √289 adalah ...", ["296", "306", "316", "326"], 1, "17² = 289 dan √289 = 17. Hasil = 289 + 17 = 306."],
    ["Sebuah taman berbentuk lingkaran memiliki diameter 42 m (π = 22/7). Keliling taman tersebut adalah ...", ["66 meter", "132 meter", "264 meter", "1.386 meter"], 1, "Keliling = (22/7) × 42 = 22 × 6 = 132 meter."],
    ["Ibu membeli baju seharga Rp180.000,00 dan mendapat diskon 25%. Besar uang yang harus dibayar Ibu adalah ...", ["Rp125.000,00", "Rp135.000,00", "Rp145.000,00", "Rp155.000,00"], 1, "Diskon = 25% × 180.000 = Rp45.000,00. Bayar = 180.000 - 45.000 = Rp135.000,00."],
    ["Data nilai ulangan IPS tujuh siswa: 75, 80, 90, 85, 70, 95, 85. Median dari data tersebut adalah ...", ["80", "85", "87,5", "90"], 1, "Urutkan: 70, 75, 80, 85, 85, 90, 95. Nilai tengah (urutan ke-4) = 85."],
    ["Sebuah kubus memiliki luas seluruh permukaan 150 cm². Panjang rusuk kubus tersebut adalah ...", ["4 cm", "5 cm", "6 cm", "8 cm"], 1, "6 × s² = 150 → s² = 25 → s = 5 cm."],
    ["Hasil dari (-42) : (-6) + (-12) adalah ...", ["-19", "-5", "5", "19"], 1, "(-42) : (-6) = 7; lalu 7 + (-12) = -5."],
    ["Sebuah keran mengalirkan air dengan debit 15 liter/menit. Volume air yang mengalir selama 20 menit adalah ...", ["200 liter", "250 liter", "300 liter", "350 liter"], 2, "Volume = debit × waktu = 15 × 20 = 300 liter."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi8"] = N([
    ["Hasil dari 8.420 - 3.675 + 1.955 adalah ...", ["6.600", "6.700", "6.800", "6.900"], 1, "8.420 - 3.675 = 4.745; lalu 4.745 + 1.955 = 6.700."],
    ["Pak Budi membeli 9 dus air mineral. Setiap dus berisi 24 gelas. Jika air mineral tersebut dibagikan kepada 18 kelompok kerja bakti sama banyak, setiap kelompok menerima ...", ["10 gelas", "12 gelas", "14 gelas", "16 gelas"], 1, "Total gelas = 9 × 24 = 216 gelas. Dibagi 18 kelompok = 216 / 18 = 12 gelas."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 18 dan 30 adalah ...", ["60", "90", "120", "180"], 1, "18 = 2 × 3²; 30 = 2 × 3 × 5. KPK = 2 × 3² × 5 = 90."],
    ["Faktor Persekutuan Terbesar (FPB) dari 54 dan 72 adalah ...", ["9", "12", "18", "24"], 2, "54 = 2 × 3³; 72 = 2³ × 3². FPB = 2 × 3² = 18."],
    ["Hasil dari 2 3/4 - 1 2/5 adalah ...", ["1 1/20", "1 7/20", "1 9/20", "1 11/20"], 1, "2 15/20 - 1 8/20 = 1 7/20."],
    ["Bentuk persen dari pecahan 7/20 adalah ...", ["25%", "30%", "35%", "40%"], 2, "7/20 × 100% = 7 × 5% = 35%."],
    ["Sebuah segitiga sama kaki memiliki keliling 50 cm. Jika panjang alasnya 16 cm, panjang masing-masing kaki segitiga tersebut adalah ...", ["15 cm", "17 cm", "18 cm", "34 cm"], 1, "Sisa panjang dua kaki = 50 - 16 = 34 cm → panjang 1 kaki = 34 / 2 = 17 cm."],
    ["Sebuah lingkaran memiliki jari-jari 21 cm (π = 22/7). Luas lingkaran tersebut adalah ...", ["616 cm²", "1.232 cm²", "1.386 cm²", "2.772 cm²"], 2, "Luas = (22/7) × 21 × 21 = 66 × 21 = 1.386 cm²."],
    ["Sebuah kereta api menempuh jarak 210 km dalam waktu 3 jam. Kecepatan rata-rata kereta api tersebut adalah ...", ["60 km/jam", "65 km/jam", "70 km/jam", "75 km/jam"], 2, "Kecepatan = jarak / waktu = 210 / 3 = 70 km/jam."],
    ["Hasil dari 2,5 rim + 150 lembar adalah ...", ["1.250 lembar", "1.300 lembar", "1.400 lembar", "1.500 lembar"], 2, "1 rim = 500 lembar → 2,5 rim = 1.250 lembar. Jadi 1.250 + 150 = 1.400 lembar."],
    ["Harga 6 buah buku gambar adalah Rp45.000,00. Jika Rina membeli 10 buah buku gambar yang sama, uang yang harus dibayar Rina adalah ...", ["Rp65.000,00", "Rp70.000,00", "Rp75.000,00", "Rp80.000,00"], 2, "Harga 1 buku = 45.000 / 6 = Rp7.500,00. Untuk 10 buku = 10 × 7.500 = Rp75.000,00."],
    ["Sebuah balok memiliki panjang 15 cm, lebar 10 cm, dan tinggi 8 cm. Volume balok tersebut adalah ...", ["1.000 cm³", "1.100 cm³", "1.200 cm³", "1.500 cm³"], 2, "Volume = 15 × 10 × 8 = 1.200 cm³."],
    ["Ibu membeli 40 buah jeruk dan 64 buah apel untuk dimasukkan ke dalam keranjang buah dengan isi sama banyak. Keranjang terbanyak yang dibutuhkan Ibu adalah ...", ["4 keranjang", "8 keranjang", "12 keranjang", "16 keranjang"], 1, "FPB dari 40 dan 64 adalah 8 keranjang."],
    ["Hasil dari 19² - √400 adalah ...", ["331", "341", "351", "381"], 1, "19² = 361 dan √400 = 20. Hasil = 361 - 20 = 341."],
    ["Sebuah kebun berbentuk persegi panjang memiliki luas 288 m². Jika panjang kebun 18 m, lebar kebun tersebut adalah ...", ["14 meter", "16 meter", "18 meter", "20 meter"], 1, "Lebar = Luas / panjang = 288 / 18 = 16 meter."],
    ["Jumlah tabungan Riko dan Sinta adalah Rp360.000,00. Jika perbandingan tabungan mereka 4 : 5, besar tabungan Sinta adalah ...", ["Rp160.000,00", "Rp180.000,00", "Rp200.000,00", "Rp225.000,00"], 2, "Tabungan Sinta = (5 / (4 + 5)) × 360.000 = (5/9) × 360.000 = Rp200.000,00."],
    ["Rata-rata berat badan 5 siswa adalah 38 kg. Jika seorang siswa dengan berat 44 kg bergabung, rata-rata berat badan ke-6 siswa sekarang adalah ...", ["38,5 kg", "39 kg", "39,5 kg", "40 kg"], 1, "Total awal = 5 × 38 = 190 kg. Total baru = 190 + 44 = 234 kg. Rata-rata = 234 / 6 = 39 kg."],
    ["Sebuah roda memiliki jari-jari 14 cm (π = 22/7). Jika roda berputar sebanyak 10 kali, jarak yang ditempuh roda tersebut adalah ...", ["440 cm", "880 cm", "1.320 cm", "1.760 cm"], 1, "Keliling roda = 2 × (22/7) × 14 = 88 cm. Jarak 10 putaran = 88 × 10 = 880 cm."],
    ["Suhu puncak gunung pada pagi hari adalah -3°C. Pada siang hari suhunya naik 11°C, lalu pada malam hari turun 6°C. Suhu puncak gunung pada malam hari adalah ...", ["-2°C", "2°C", "4°C", "8°C"], 1, "-3 + 11 - 6 = 8 - 6 = 2°C."],
    ["Sebuah wadah berbentuk tabung memiliki jari-jari alas 10 cm dan tinggi 15 cm (π = 3,14). Volume wadah tersebut adalah ...", ["3.140 cm³", "4.710 cm³", "6.280 cm³", "9.420 cm³"], 1, "Volume = 3,14 × 10 × 10 × 15 = 314 × 15 = 4.710 cm³."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi9"] = N([
    ["Hasil dari 9.650 - 4.875 + 2.425 adalah ...", ["7.100", "7.200", "7.300", "7.400"], 1, "9.650 - 4.875 = 4.775; lalu 4.775 + 2.425 = 7.200."],
    ["Sebuah toko alat tulis memiliki 14 pak pulpen. Setiap pak berisi 12 batang pulpen. Jika terjual 118 batang, sisa pulpen di toko tersebut adalah ...", ["40 batang", "50 batang", "60 batang", "70 batang"], 1, "Total pulpen = 14 × 12 = 168 batang. Sisa = 168 - 118 = 50 batang."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 21 dan 28 adalah ...", ["42", "56", "84", "112"], 2, "21 = 3 × 7; 28 = 2² × 7. KPK = 2² × 3 × 7 = 84."],
    ["Faktor Persekutuan Terbesar (FPB) dari 48 dan 80 adalah ...", ["8", "12", "16", "24"], 2, "48 = 2⁴ × 3; 80 = 2⁴ × 5. FPB = 2⁴ = 16."],
    ["Hasil dari 3/5 + 1/4 - 3/10 adalah ...", ["9/20", "11/20", "13/20", "15/20"], 1, "Samakan penyebut menjadi 20: 12/20 + 5/20 - 6/20 = 11/20."],
    ["Bentuk pecahan biasa paling sederhana dari 64% adalah ...", ["16/25", "18/25", "32/50", "8/15"], 0, "64/100 dibagi 4 pembilang dan penyebutnya = 16/25."],
    ["Sebuah belah ketupat memiliki luas 168 cm² dan panjang salah satu diagonalnya 24 cm. Panjang diagonal lainnya adalah ...", ["7 cm", "12 cm", "14 cm", "28 cm"], 2, "d2 = (2 × Luas) / d1 = (2 × 168) / 24 = 336 / 24 = 14 cm."],
    ["Sebuah persegi panjang memiliki panjang 24 cm dan lebar 15 cm. Selisih antara luas dan keliling persegi panjang tersebut adalah ...", ["272", "282", "292", "302"], 1, "Luas = 24 × 15 = 360; Keliling = 2 × (24 + 15) = 78. Selisih = 360 - 78 = 282."],
    ["Ayah mengendarai mobil dari Kota A ke Kota B sejauh 180 km dengan kecepatan rata-rata 60 km/jam. Jika Ayah berangkat pukul 08.15, pukul berapa Ayah tiba di Kota B?", ["10.45", "11.00", "11.15", "11.30"], 2, "Waktu tempuh = 180 / 60 = 3 jam → tiba pukul 08.15 + 3 jam = 11.15."],
    ["Hasil dari 3,6 km - 850 m + 25 dam adalah ...", ["2.775 m", "3.000 m", "3.250 m", "3.500 m"], 1, "3,6 km = 3.600 m; 25 dam = 250 m. Jadi 3.600 - 850 + 250 = 3.000 m."],
    ["Perbandingan umur Ibu dan Kakak adalah 7 : 3. Jika selisih umur mereka 24 tahun, umur Kakak sekarang adalah ...", ["15 tahun", "18 tahun", "21 tahun", "24 tahun"], 1, "Selisih rasio = 7 - 3 = 4 bagian = 24 → 1 bagian = 6. Umur Kakak = 3 × 6 = 18 tahun."],
    ["Sebuah kubus memiliki panjang rusuk 12 cm. Jumlah panjang seluruh rusuk kubus tersebut adalah ...", ["72 cm", "96 cm", "120 cm", "144 cm"], 3, "Kubus memiliki 12 rusuk → total panjang rusuk = 12 × 12 = 144 cm."],
    ["Lampu taman A menyala setiap 8 detik sekali, lampu B setiap 12 detik sekali, dan lampu C setiap 16 detik sekali. Ketiga lampu akan menyala bersamaan setiap ... detik sekali.", ["24", "36", "48", "96"], 2, "KPK dari 8, 12, dan 16 adalah 48 detik."],
    ["Hasil dari 21² - √441 adalah ...", ["400", "410", "420", "440"], 2, "21² = 441 dan √441 = 21. Hasil = 441 - 21 = 420."],
    ["Sebuah trapesium sama kaki memiliki panjang sisi sejajar 10 cm dan 22 cm, serta panjang kaki trapesium 10 cm. Keliling trapesium tersebut adalah ...", ["42 cm", "52 cm", "62 cm", "72 cm"], 1, "Keliling = 10 + 22 + 10 + 10 = 52 cm."],
    ["Harga sebuah jaket setelah mendapat diskon 20% adalah Rp160.000,00. Harga jaket tersebut sebelum didiskon adalah ...", ["Rp180.000,00", "Rp192.000,00", "Rp200.000,00", "Rp220.000,00"], 2, "80% × Harga Awal = 160.000 → Harga Awal = 160.000 / 0,8 = Rp200.000,00."],
    ["Data nilai ulangan Matematika 8 siswa: 80, 75, 90, 85, 80, 95, 70, 80. Modus dan median dari data tersebut berturut-turut adalah ...", ["80 dan 80", "80 dan 82,5", "85 dan 80", "80 dan 85"], 1, "Urut: 70, 75, 80, 80, 80, 85, 90, 95. Modus = 80; Median = (80 + 85) / 2 = 82,5."],
    ["Sebuah lingkaran memiliki diameter 20 cm (π = 3,14). Luas lingkaran tersebut adalah ...", ["62,8 cm²", "125,6 cm²", "314 cm²", "628 cm²"], 2, "r = 10 cm. Luas = 3,14 × 10 × 10 = 314 cm²."],
    ["Hasil dari (-35) + 48 - (-12) adalah ...", ["1", "13", "25", "95"], 2, "-35 + 48 = 13; lalu 13 - (-12) = 13 + 12 = 25."],
    ["Sebuah bak penampungan air berbentuk balok berukuran panjang 80 cm, lebar 50 cm, dan tinggi 60 cm. Jika diisi air hingga 3/4 bagian, volume air di dalamnya adalah ...", ["150 liter", "180 liter", "200 liter", "240 liter"], 1, "Volume penuh = 80 × 50 × 60 = 240.000 cm³ = 240 liter. 3/4 bagian = (3/4) × 240 = 180 liter."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_sd_numerasi_sesi10"] = N([
    ["Hasil dari 10.500 - 4.785 + 3.285 adalah ...", ["8.900", "9.000", "9.100", "9.200"], 1, "10.500 - 4.785 = 5.715; lalu 5.715 + 3.285 = 9.000."],
    ["Seorang pedagang buah memiliki 8 peti jeruk. Setiap peti berisi 35 buah jeruk. Jika 40 buah jeruk busuk dan sisanya dikemas ke dalam kantong plastik berisi 10 buah, banyak kantong plastik yang dihasilkan adalah ...", ["20 kantong", "24 kantong", "28 kantong", "32 kantong"], 1, "Total jeruk = 8 × 35 = 280 buah. Sisa bagus = 280 - 40 = 240 buah. Banyak kantong = 240 / 10 = 24 kantong."],
    ["Kelipatan Persekutuan Terkecil (KPK) dari 24, 30, dan 40 adalah ...", ["60", "90", "120", "240"], 2, "24 = 2³ × 3; 30 = 2 × 3 × 5; 40 = 2³ × 5. KPK = 2³ × 3 × 5 = 120."],
    ["Faktor Persekutuan Terbesar (FPB) dari 42, 63, dan 84 adalah ...", ["7", "14", "21", "42"], 2, "42 = 2 × 3 × 7; 63 = 3² × 7; 84 = 2² × 3 × 7. FPB = 3 × 7 = 21."],
    ["Hasil dari 1 3/4 + 2 1/2 - 1 5/8 adalah ...", ["2 3/8", "2 5/8", "2 7/8", "3 1/8"], 1, "1 6/8 + 2 4/8 - 1 5/8 = 2 5/8."],
    ["Urutan bilangan pecahan berikut dari yang terbesar ke terkecil yang benar adalah ...", ["0,85 ; 4/5 ; 75% ; 0,6", "4/5 ; 0,85 ; 75% ; 0,6", "75% ; 0,85 ; 4/5 ; 0,6", "0,6 ; 75% ; 4/5 ; 0,85"], 0, "0,85 = 85%; 4/5 = 80%; 75% = 75%; 0,6 = 60%. Urutan terbesar: 0,85 ; 4/5 ; 75% ; 0,6."],
    ["Sebuah segitiga siku-siku memiliki keliling 60 cm. Jika panjang alasnya 15 cm dan tingginya 20 cm, panjang sisi miring segitiga tersebut adalah ...", ["22 cm", "25 cm", "30 cm", "35 cm"], 1, "Sisi miring = 60 - (15 + 20) = 60 - 35 = 25 cm."],
    ["Luas gabungan bangun persegi dengan sisi 10 cm dan segitiga dengan alas 10 cm serta tinggi 8 cm adalah ...", ["130 cm²", "140 cm²", "150 cm²", "180 cm²"], 1, "Luas persegi = 10 × 10 = 100 cm²; Luas segitiga = (10 × 8) / 2 = 40 cm². Total = 100 + 40 = 140 cm²."],
    ["Budi mengendarai sepeda dari rumah ke taman dengan kecepatan 15 km/jam selama 40 menit. Jarak dari rumah Budi ke taman adalah ...", ["8 km", "10 km", "12 km", "15 km"], 1, "40 menit = 40/60 jam = 2/3 jam. Jarak = 15 × (2/3) = 10 km."],
    ["Hasil dari 2,5 gros + 4 lusin - 38 buah adalah ...", ["350 buah", "370 buah", "390 buah", "410 buah"], 1, "2,5 gros = 2,5 × 144 = 360 buah; 4 lusin = 48 buah. Jadi 360 + 48 - 38 = 370 buah."],
    ["Jarak Kota P dan Kota Q pada peta dengan skala 1 : 600.000 adalah 8 cm. Jika Ayah berkendara dari Kota P ke Kota Q dengan kecepatan 48 km/jam, waktu tempuh perjalanan Ayah adalah ...", ["45 menit", "1 jam", "1 jam 15 menit", "1 jam 30 menit"], 1, "Jarak sebenarnya = 8 × 600.000 cm = 4.800.000 cm = 48 km. Waktu = 48 / 48 = 1 jam."],
    ["Sebuah kubus memiliki luas alas 81 cm². Volume kubus tersebut adalah ...", ["486 cm³", "512 cm³", "729 cm³", "1.000 cm³"], 2, "Sisi = √81 = 9 cm. Volume = 9 × 9 × 9 = 729 cm³."],
    ["Ibu memiliki 60 kue bolu, 75 kue lapis, dan 90 kue lemper yang akan dimasukkan ke dalam kotak kue dengan isi sama banyak dan jenis sama. Kotak kue terbanyak yang dapat dibuat Ibu adalah ...", ["10 kotak", "15 kotak", "20 kotak", "30 kotak"], 1, "FPB dari 60, 75, dan 90 adalah 15 kotak."],
    ["Hasil dari 25² - √625 adalah ...", ["575", "600", "625", "650"], 1, "25² = 625 dan √625 = 25. Hasil = 625 - 25 = 600."],
    ["Sebuah roda memiliki keliling 176 cm (π = 22/7). Jari-jari roda tersebut adalah ...", ["14 cm", "21 cm", "28 cm", "56 cm"], 2, "Diameter d = 176 : (22/7) = 176 × 7 / 22 = 56 cm → jari-jari r = 56 / 2 = 28 cm."],
    ["Pak Roni menabung uang di koperasi sebesar Rp1.500.000,00 dengan bunga tunggal 6% per tahun. Jumlah tabungan Pak Roni setelah 8 bulan adalah ...", ["Rp1.545.000,00", "Rp1.560.000,00", "Rp1.575.000,00", "Rp1.590.000,00"], 1, "Bunga 8 bulan = (8/12) × 6% × 1.500.000 = 4% × 1.500.000 = Rp60.000,00. Total = Rp1.560.000,00."],
    ["Nilai rata-rata ulangan IPA 9 siswa adalah 78. Setelah nilai Dito digabungkan, rata-ratanya menjadi 79. Nilai ulangan IPA Dito adalah ...", ["85", "86", "88", "90"], 2, "Total 9 siswa = 9 × 78 = 702; total 10 siswa = 10 × 79 = 790. Nilai Dito = 790 - 702 = 88."],
    ["Sebuah tabung memiliki jari-jari alas 14 cm dan tinggi 10 cm (π = 22/7). Luas permukaan seluruh tabung tersebut adalah ...", ["1.232 cm²", "1.760 cm²", "2.112 cm²", "2.464 cm²"], 2, "Luas = 2 × π × r × (r + t) = 2 × (22/7) × 14 × (14 + 10) = 88 × 24 = 2.112 cm²."],
    ["Hasil dari (-48) : 6 × (-5) + (-10) adalah ...", ["-50", "-30", "30", "50"], 2, "(-48) : 6 = -8; (-8) × (-5) = 40; lalu 40 + (-10) = 30."],
    ["Sebuah akuarium berbentuk balok berukuran panjang 60 cm, lebar 40 cm, dan tinggi 50 cm berisi air penuh. Jika air tersebut dituangkan ke dalam botol-botol berkapasitas 1,5 liter hingga habis, banyak botol yang terisi penuh adalah ...", ["60 botol", "70 botol", "80 botol", "90 botol"], 2, "Volume = 60 × 40 × 50 = 120.000 cm³ = 120 liter. Banyak botol = 120 / 1,5 = 80 botol."]
  ]);
})();
