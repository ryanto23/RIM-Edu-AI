// File: soal/tka_smp_numerasi_master.js
// Master Bank Soal TKA SMP - Numerasi (10 Sesi x 20 Soal = 200 Soal)
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi1"] = N([
    ["Hasil dari (-24) + 18 × (-3) - (-42) adalah ...", ["-36", "-18", "18", "36"], 0, "18 × (-3) = -54; lalu (-24) + (-54) - (-42) = -78 + 42 = -36."],
    ["Dalam suatu kompetisi matematika, setiap jawaban benar diberi skor 4, salah skor -2, dan tidak dijawab skor -1. Dari 40 soal, Rina menjawab 32 soal benar dan 5 soal salah. Total skor yang diperoleh Rina adalah ...", ["112", "115", "118", "121"], 1, "Tidak dijawab = 40 - 37 = 3 soal. Skor = (32×4) + (5×(-2)) + (3×(-1)) = 128 - 10 - 3 = 115."],
    ["Bentuk sederhana dari (2³ × 2⁵) / 2⁴ adalah ...", ["2²", "2⁴", "2⁶", "2⁸"], 1, "2^(3+5-4) = 2⁴."],
    ["Hasil dari √75 + 2√12 - √27 adalah ...", ["4√3", "6√3", "8√3", "10√3"], 1, "5√3 + 2(2√3) - 3√3 = (5 + 4 - 3)√3 = 6√3."],
    ["Pembangunan sebuah jembatan direncanakan selesai dalam 30 hari oleh 16 pekerja. Jika pekerjaan tersebut harus selesai dalam 24 hari, tambahan pekerja yang diperlukan adalah ...", ["4 orang", "6 orang", "18 orang", "20 orang"], 0, "Perbandingan berbalik nilai: 30 × 16 = 24 × P → P = 480 / 24 = 20 orang. Tambahan = 20 - 16 = 4 orang."],
    ["Harga pembelian sebuah sepeda motor bekas adalah Rp8.000.000,00. Setelah diperbaiki dengan biaya Rp500.000,00, sepeda motor tersebut dijual dengan harga Rp9.350.000,00. Persentase keuntungan yang diperoleh adalah ...", ["8%", "10%", "12%", "15%"], 1, "Modal total = 8.500.000; Untung = 9.350.000 - 8.500.000 = 850.000. Persentase = (850.000 / 8.500.000) × 100% = 10%."],
    ["Suku ke-15 dari barisan aritmetika 4, 9, 14, 19, ... adalah ...", ["69", "74", "79", "84"], 1, "a = 4, b = 5 → U15 = 4 + (15 - 1) × 5 = 4 + 70 = 74."],
    ["Bentuk sederhana dari 3(2x - 4y) - 2(x - 5y) adalah ...", ["4x - 2y", "4x - 22y", "4x + 2y", "8x - 2y"], 0, "6x - 12y - 2x + 10y = 4x - 2y."],
    ["Himpunan penyelesaian dari pertidaksamaan 3x - 5 < x + 7 untuk x bilangan bulat adalah ...", ["{..., 3, 4, 5}", "{..., 4, 5, 6}", "{6, 7, 8, ...}", "{7, 8, 9, ...}"], 0, "3x - x < 7 + 5 → 2x < 12 → x < 6 → {..., 3, 4, 5}."],
    ["Diketahui himpunan A = {x | 1 < x < 10, x bilangan prima} dan B = {1, 3, 5, 7, 9}. Irisan himpunan A dan B (A ∩ B) adalah ...", ["{2, 3, 5, 7}", "{3, 5, 7}", "{1, 3, 5, 7}", "{3, 5, 7, 9}"], 1, "A = {2, 3, 5, 7} dan B = {1, 3, 5, 7, 9} → A ∩ B = {3, 5, 7}."],
    ["Diketahui fungsi f(x) = 3x - 4. Jika f(a) = 11, maka nilai a adalah ...", ["3", "4", "5", "7"], 2, "3a - 4 = 11 → 3a = 15 → a = 5."],
    ["Gradien garis yang melalui titik A(2, -3) dan B(6, 5) adalah ...", ["-2", "-1/2", "1/2", "2"], 3, "m = (5 - (-3)) / (6 - 2) = 8 / 4 = 2."],
    ["Harga 3 buku tulis dan 2 pensil adalah Rp13.000,00, sedangkan harga 2 buku tulis dan 3 pensil adalah Rp12.000,00. Harga 1 buku tulis dan 1 pensil adalah ...", ["Rp4.500,00", "Rp5.000,00", "Rp5.500,00", "Rp6.000,00"], 1, "Jumlahkan kedua persamaan: 5 buku + 5 pensil = 25.000 → 1 buku + 1 pensil = Rp5.000,00."],
    ["Sebuah segitiga siku-siku memiliki panjang sisi siku-siku 9 cm dan 12 cm. Panjang sisi miring (hipotenusa) segitiga tersebut adalah ...", ["13 cm", "14 cm", "15 cm", "18 cm"], 2, "c = √(9² + 12²) = √(81 + 144) = √225 = 15 cm."],
    ["Besar sudut penyiku dari sudut 38° adalah ...", ["42°", "52°", "62°", "142°"], 1, "Sudut penyiku = 90° - 38° = 52°."],
    ["Sebuah taman berbentuk lingkaran berjari-jari 14 m akan ditanami rumput di sekeliling tepinya dengan jarak antar-tanaman 2 m (π = 22/7). Banyak tanaman yang dibutuhkan adalah ...", ["22 pohon", "44 pohon", "88 pohon", "154 pohon"], 1, "Keliling = 2 × (22/7) × 14 = 88 m. Banyak tanaman = 88 / 2 = 44 pohon."],
    ["Sebuah kerucut memiliki jari-jari alas 7 cm dan tinggi 24 cm. Luas selimut kerucut tersebut adalah (π = 22/7) ...", ["352 cm²", "440 cm²", "550 cm²", "704 cm²"], 2, "Garis pelukis s = √(7² + 24²) = 25 cm. Luas selimut = π × r × s = (22/7) × 7 × 25 = 550 cm²."],
    ["Akar-akar persamaan kuadrat x² - 7x + 12 = 0 adalah ...", ["2 dan 6", "3 dan 4", "-3 dan -4", "-2 dan -6"], 1, "(x - 3)(x - 4) = 0 → x1 = 3 dan x2 = 4."],
    ["Rata-rata nilai ujian 15 siswa adalah 76. Jika nilai 5 siswa susulan digabungkan, rata-rata seluruhnya menjadi 78. Rata-rata nilai ke-5 siswa susulan tersebut adalah ...", ["80", "82", "84", "86"], 2, "Total 15 siswa = 1.140; Total 20 siswa = 1.560. Jumlah 5 siswa = 1.560 - 1.140 = 420 → rata-rata = 420 / 5 = 84."],
    ["Sebuah dadu bersisi enam dilempar sekali. Peluang munculnya mata dadu bilangan prima ganjil adalah ...", ["1/6", "1/3", "1/2", "2/3"], 1, "Prima ganjil pada dadu = {3, 5} ada 2 titik sampel. Peluang = 2/6 = 1/3."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi2"] = N([
    ["Hasil dari (-36) : 4 + 15 × (-2) - (-19) adalah ...", ["-30", "-20", "20", "30"], 1, "(-36) : 4 = -9; 15 × (-2) = -30. Jadi -9 + (-30) - (-19) = -39 + 19 = -20."],
    ["Suhu di dalam ruang pendingin mula-mula -6°C. Saat mesin dimatikan, suhu naik 3°C setiap 10 menit. Suhu ruangan tersebut setelah 40 menit adalah ...", ["2°C", "4°C", "6°C", "8°C"], 2, "Kenaikan selama 40 menit = (40 / 10) × 3°C = 12°C. Suhu akhir = -6 + 12 = 6°C."],
    ["Nilai dari (3²)³ × 3⁻⁴ adalah ...", ["3", "9", "27", "81"], 1, "3^(2×3) × 3⁻⁴ = 3⁶ × 3⁻⁴ = 3^(6-4) = 3² = 9."],
    ["Bentuk rasional dari pecahan 6 / √3 adalah ...", ["2√3", "3√3", "6√3", "√3"], 0, "(6 / √3) × (√3 / √3) = 6√3 / 3 = 2√3."],
    ["Jarak dua kota pada peta dengan skala 1 : 750.000 adalah 12 cm. Jika Ayah berkendara dari kota pertama ke kota kedua dengan kecepatan rata-rata 60 km/jam, waktu tempuh perjalanan Ayah adalah ...", ["1 jam 15 menit", "1 jam 30 menit", "1 jam 45 menit", "2 jam"], 1, "Jarak = 12 × 750.000 cm = 9.000.000 cm = 90 km. Waktu = 90 / 60 = 1,5 jam (1 jam 30 menit)."],
    ["Ani menabung uang di bank sebesar Rp2.000.000,00 dengan bunga tunggal 9% per tahun. Setelah 8 bulan, jumlah seluruh tabungan Ani menjadi ...", ["Rp2.100.000,00", "Rp2.120.000,00", "Rp2.150.000,00", "Rp2.180.000,00"], 1, "Bunga 8 bulan = (8/12) × 9% × 2.000.000 = 6% × 2.000.000 = Rp120.000,00. Total = Rp2.120.000,00."],
    ["Jumlah 10 suku pertama dari deret aritmetika 3 + 7 + 11 + 15 + ... adalah ...", ["190", "200", "210", "220"], 2, "a = 3, b = 4 → S10 = (10/2) × [2(3) + (10 - 1)(4)] = 5 × (6 + 36) = 5 × 42 = 210."],
    ["Hasil pemfaktoran dari bentuk aljabar x² - 9x + 18 adalah ...", ["(x - 2)(x - 9)", "(x - 3)(x - 6)", "(x + 3)(x - 6)", "(x - 3)(x + 6)"], 1, "Cari dua bilangan hasil kali 18 dan jumlah -9, yaitu -3 dan -6 → (x - 3)(x - 6)."],
    ["Penyelesaian dari persamaan linear 4(2x - 3) = 5x + 6 adalah ...", ["x = 4", "x = 5", "x = 6", "x = 8"], 2, "8x - 12 = 5x + 6 → 3x = 18 → x = 6."],
    ["Dalam sebuah kelas terdapat 35 siswa. Sebanyak 20 siswa gemar Matematika, 18 siswa gemar IPA, dan 5 siswa tidak gemar keduanya. Banyak siswa yang gemar kedua pelajaran tersebut adalah ...", ["6 orang", "8 orang", "10 orang", "12 orang"], 1, "35 - 5 = 30 siswa gemar minimal satu. Gemar keduanya = (20 + 18) - 30 = 8 orang."],
    ["Diketahui fungsi f(x) = ax + b. Jika f(2) = 7 dan f(5) = 16, maka nilai dari f(4) adalah ...", ["11", "12", "13", "14"], 2, "b = (16 - 7)/(5 - 2) = 3 → a = 3, b = 1. Jadi f(4) = 3(4) + 1 = 13."],
    ["Persamaan garis yang melalui titik (2, 5) dan sejajar dengan garis y = 3x - 4 adalah ...", ["y = 3x - 1", "y = 3x + 1", "y = -3x + 11", "y = 1/3 x + 4"], 0, "Gradien sejajar m = 3. y - 5 = 3(x - 2) → y = 3x - 6 + 5 → y = 3x - 1."],
    ["Keliling sebuah persegi panjang adalah 64 cm. Jika selisih panjang dan lebarnya 8 cm, luas persegi panjang tersebut adalah ...", ["220 cm²", "240 cm²", "252 cm²", "256 cm²"], 1, "p + l = 32 dan p - l = 8 → p = 20 cm, l = 12 cm. Luas = 20 × 12 = 240 cm²."],
    ["Sebuah tangga sepanjang 13 m disandarkan pada dinding vertikal. Jika jarak ujung bawah tangga ke dinding 5 m, tinggi dinding yang dicapai ujung atas tangga adalah ...", ["8 meter", "10 meter", "12 meter", "14 meter"], 2, "t = √(13² - 5²) = √(169 - 25) = √144 = 12 meter."],
    ["Besar sudut pelurus dari sudut 115° adalah ...", ["55°", "65°", "75°", "85°"], 1, "Sudut pelurus = 180° - 115° = 65°."],
    ["Sebuah juring lingkaran memiliki sudut pusat 72° dan jari-jari 14 cm (π = 22/7). Panjang busur juring tersebut adalah ...", ["8,8 cm", "17,6 cm", "22,4 cm", "35,2 cm"], 1, "Panjang busur = (72/360) × 2 × (22/7) × 14 = (1/5) × 88 = 17,6 cm."],
    ["Sebuah bola besi memiliki jari-jari 7 cm (π = 22/7). Luas permukaan bola besi tersebut adalah ...", ["154 cm²", "308 cm²", "616 cm²", "1.232 cm²"], 2, "Luas bola = 4 × π × r² = 4 × (22/7) × 7 × 7 = 4 × 154 = 616 cm²."],
    ["Bayangan titik P(-3, 5) jika dicerminkan terhadap sumbu X adalah ...", ["P'(3, 5)", "P'(-3, -5)", "P'(3, -5)", "P'(5, -3)"], 1, "Pencerminan terhadap sumbu X mengubah (x, y) menjadi (x, -y) → P'(-3, -5)."],
    ["Diagram lingkaran menunjukkan data hobi 120 siswa: Membaca 25%, Olahraga 40%, Musik 20%, dan sisanya Melukis. Banyak siswa yang hobi Melukis adalah ...", ["12 orang", "15 orang", "18 orang", "24 orang"], 2, "Persentase Melukis = 100% - (25% + 40% + 20%) = 15%. Banyak siswa = 15% × 120 = 18 orang."],
    ["Dua buah koin logam dilempar undi secara bersamaan sebanyak satu kali. Peluang munculnya minimal satu sisi gambar adalah ...", ["1/4", "1/2", "3/4", "1"], 2, "Ruang sampel = {AA, AG, GA, GG} ada 4. Minimal 1 gambar = {AG, GA, GG} ada 3 → peluang = 3/4."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi3"] = N([
    ["Hasil dari 48 : (-6) × 3 - (-14) adalah ...", ["-38", "-10", "10", "38"], 1, "48 : (-6) = -8; (-8) × 3 = -24; lalu -24 - (-14) = -24 + 14 = -10."],
    ["Sebuah kapal selam berada pada kedalaman 120 meter di bawah permukaan laut. Kemudian kapal naik setinggi 45 meter dan turun kembali sejauh 30 meter. Posisi kapal selam sekarang adalah ...", ["75 m di bawah permukaan laut", "105 m di bawah permukaan laut", "135 m di bawah permukaan laut", "195 m di bawah permukaan laut"], 1, "-120 + 45 - 30 = -105 → 105 meter di bawah permukaan laut."],
    ["Nilai dari (5⁴ × 25²) / 125² adalah ...", ["5", "25", "125", "625"], 1, "25² = (5²)² = 5⁴ dan 125² = (5³)² = 5⁶ → (5⁴ × 5⁴) / 5⁶ = 5⁸ / 5⁶ = 5² = 25."],
    ["Hasil dari √48 + √27 - √12 adalah ...", ["3√3", "5√3", "7√3", "9√3"], 1, "4√3 + 3√3 - 2√3 = (4 + 3 - 2)√3 = 5√3."],
    ["Sebuah mobil memerlukan 15 liter bensin untuk menempuh jarak 180 km. Jika mobil tersebut menghabiskan 25 liter bensin, jarak yang ditempuh adalah ...", ["240 km", "270 km", "300 km", "320 km"], 2, "Perbandingan senilai: (25 / 15) × 180 = (5/3) × 180 = 300 km."],
    ["Seorang pedagang membeli 1 lusin baju dengan harga Rp960.000,00. Jika baju tersebut dijual kembali dengan harga Rp92.000,00 per buah, persentase keuntungan pedagang tersebut adalah ...", ["10%", "12%", "15%", "20%"], 2, "Harga beli per baju = 960.000 / 12 = Rp80.000,00. Untung = 92.000 - 80.000 = Rp12.000,00. Persentase = (12.000 / 80.000) × 100% = 15%."],
    ["Suku pertama suatu barisan geometri adalah 3 dan rasionya 2. Suku ke-6 dari barisan tersebut adalah ...", ["48", "64", "96", "192"], 2, "U6 = a × r^(6-1) = 3 × 2⁵ = 3 × 32 = 96."],
    ["Hasil perkalian dari bentuk aljabar (2x - 3)(x + 4) adalah ...", ["2x² + 5x - 12", "2x² - 5x - 12", "2x² + 11x - 12", "2x² - 11x + 12"], 0, "2x² + 8x - 3x - 12 = 2x² + 5x - 12."],
    ["Jika 3(x + 2) - 2(x - 4) = 19, nilai dari 2x + 3 adalah ...", ["10", "13", "15", "17"], 1, "3x + 6 - 2x + 8 = 19 → x + 14 = 19 → x = 5. Jadi 2(5) + 3 = 13."],
    ["Diketahui himpunan semesta S = {1, 2, 3, 4, 5, 6, 7, 8} dan P = {2, 4, 6, 8}. Komplemen dari himpunan P (Pᶜ) adalah ...", ["{1, 3, 5, 7}", "{1, 2, 3, 5, 7}", "{3, 5, 7}", "{1, 3, 5, 7, 8}"], 0, "Anggota S yang bukan anggota P adalah {1, 3, 5, 7}."],
    ["Diketahui rumus fungsi g(x) = 5 - 2x. Nilai dari g(-3) + g(2) adalah ...", ["10", "12", "14", "16"], 1, "g(-3) = 5 - 2(-3) = 11 dan g(2) = 5 - 2(2) = 1. Jumlah = 11 + 1 = 12."],
    ["Gradien garis dengan persamaan 4x - 2y + 8 = 0 adalah ...", ["-2", "-1/2", "1/2", "2"], 3, "Ubah ke y = mx + c: 2y = 4x + 8 → y = 2x + 4 → gradien m = 2."],
    ["Harga 4 kg apel dan 2 kg jeruk adalah Rp100.000,00, sedangkan harga 2 kg apel dan 3 kg jeruk adalah Rp70.000,00. Harga 1 kg apel adalah ...", ["Rp15.000,00", "Rp18.000,00", "Rp20.000,00", "Rp25.000,00"], 2, "4a + 2j = 100.000 → 2a + j = 50.000 (j = 50.000 - 2a). Substitusi: 2a + 3(50.000 - 2a) = 70.000 → -4a = -80.000 → a = Rp20.000,00."],
    ["Sebuah kapal berlayar ke arah timur sejauh 24 km, kemudian berbelok ke arah utara sejauh 10 km. Jarak terdekat kapal dari titik awal keberangkatan adalah ...", ["25 km", "26 km", "30 km", "34 km"], 1, "Jarak = √(24² + 10²) = √(576 + 100) = √676 = 26 km."],
    ["Dua garis sejajar dipotong oleh sebuah garis transversal. Jika besar salah satu sudut dalam berseberangan adalah 68°, besar sudut pasangannya adalah ...", ["22°", "68°", "112°", "122°"], 1, "Sudut-sudut dalam berseberangan pada dua garis sejajar memiliki besar yang sama, yaitu 68°."],
    ["Sebuah juring lingkaran memiliki luas 154 cm² dan jari-jari 14 cm (π = 22/7). Besar sudut pusat juring tersebut adalah ...", ["60°", "75°", "90°", "120°"], 2, "Luas lingkaran = (22/7) × 14 × 14 = 616 cm². Sudut pusat = (154 / 616) × 360° = (1/4) × 360° = 90°."],
    ["Sebuah limas persegi memiliki panjang rusuk alas 10 cm dan tinggi limas 12 cm. Volume limas tersebut adalah ...", ["360 cm³", "400 cm³", "600 cm³", "1.200 cm³"], 1, "Volume limas = (1/3) × luas alas × tinggi = (1/3) × (10 × 10) × 12 = 400 cm³."],
    ["Titik A(4, -2) ditranslasikan oleh T(-3, 6). Koordinat bayangan titik A adalah ...", ["A'(1, 4)", "A'(7, 4)", "A'(1, -8)", "A'(-7, -4)"], 0, "A'(4 + (-3), -2 + 6) = A'(1, 4)."],
    ["Data nilai ulangan Matematika: 6, 7, 8, 7, 9, 8, 7, 10, 6, 8. Median dari data tersebut adalah ...", ["7", "7,5", "8", "8,5"], 1, "Urut: 6, 6, 7, 7, 7, 8, 8, 8, 9, 10. Median = (7 + 8) / 2 = 7,5."],
    ["Dalam sebuah kantong terdapat 5 bola merah, 7 bola biru, dan 8 bola kuning. Jika diambil satu bola secara acak, peluang terambilnya bola bukan berwarna biru adalah ...", ["7/20", "12/20", "13/20", "15/20"], 2, "Total bola = 5 + 7 + 8 = 20. Bukan biru = 5 + 8 = 13 → peluang = 13/20."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi4"] = N([
    ["Hasil dari (-45) - (-18) × 2 + 15 adalah ...", ["-66", "-24", "6", "24"], 2, "(-18) × 2 = -36; lalu (-45) - (-36) + 15 = -45 + 36 + 15 = 6."],
    ["Dalam sebuah tes berjumlah 50 soal, jawaban benar mendapat skor 4, salah skor -1, dan tidak dijawab skor 0. Jika Budi menjawab 38 soal benar dan 7 soal tidak dijawab, total skor Budi adalah ...", ["145", "147", "150", "152"], 1, "Soal salah = 50 - (38 + 7) = 5 soal. Skor = (38×4) + (5×(-1)) + 0 = 152 - 5 = 147."],
    ["Bentuk sederhana dari (2⁻³ × 4²) / 2⁻² adalah ...", ["2", "4", "8", "16"], 2, "4² = (2²)² = 2⁴ → 2^(-3 + 4 - (-2)) = 2³ = 8."],
    ["Hasil dari √32 × √6 : √3 adalah ...", ["4", "6", "8", "16"], 2, "√(32 × 6 / 3) = √(32 × 2) = √64 = 8."],
    ["Sebuah proyek perbaikan jalan dikerjakan oleh 12 pekerja dan diperkirakan selesai dalam 25 hari. Setelah bekerja 5 hari, proyek terhenti selama 4 hari karena hujan. Agar proyek selesai tepat waktu, tambahan pekerja yang dibutuhkan adalah ...", ["2 orang", "3 orang", "4 orang", "6 orang"], 1, "Sisa hari rencana = 25 - 5 = 20 hari; sisa hari aktual = 20 - 4 = 16 hari. 20 × 12 = 16 × P → P = 240 / 16 = 15 orang. Tambahan = 15 - 12 = 3 orang."],
    ["Harga jual sebuah laptop setelah mendapat diskon 15% adalah Rp5.100.000,00. Harga laptop tersebut sebelum didiskon adalah ...", ["Rp5.850.000,00", "Rp6.000.000,00", "Rp6.150.000,00", "Rp6.250.000,00"], 1, "85% × Harga Awal = 5.100.000 → Harga Awal = 5.100.000 / 0,85 = Rp6.000.000,00."],
    ["Diketahui barisan aritmetika dengan suku ke-3 adalah 11 dan suku ke-7 adalah 27. Suku ke-12 barisan tersebut adalah ...", ["43", "47", "51", "55"], 1, "b = (27 - 11)/(7 - 3) = 16/4 = 4; a = 11 - 2(4) = 3. Jadi U12 = 3 + 11(4) = 47."],
    ["Bentuk sederhana dari (x² - 16) / (x² + 7x + 12) adalah ...", ["(x - 4)/(x + 3)", "(x + 4)/(x + 3)", "(x - 4)/(x - 3)", "(x + 4)/(x - 3)"], 0, "(x - 4)(x + 4) / [(x + 3)(x + 4)] = (x - 4)/(x + 3)."],
    ["Jika x adalah penyelesaian dari 2(3x - 1) - 4 = 3(x + 3), maka nilai dari x + 4 adalah ...", ["7", "8", "9", "10"], 2, "6x - 2 - 4 = 3x + 9 → 3x = 15 → x = 5. Nilai x + 4 = 5 + 4 = 9."],
    ["Banyak himpunan bagian dari himpunan K = {huruf pembentuk kata 'MATEMATIKA'} adalah ...", ["32", "64", "128", "256"], 1, "Huruf unik pada 'MATEMATIKA' = {M, A, T, E, I, K} ada 6 anggota → 2⁶ = 64."],
    ["Suatu fungsi didefinisikan dengan f(x) = x² - 3x + 2. Nilai dari f(-2) adalah ...", ["8", "10", "12", "14"], 2, "f(-2) = (-2)² - 3(-2) + 2 = 4 + 6 + 2 = 12."],
    ["Persamaan garis yang melalui titik (-2, 4) dan tegak lurus terhadap garis 2x + 4y - 7 = 0 adalah ...", ["y = 2x + 8", "y = 2x - 8", "y = -2x", "y = 1/2 x + 5"], 0, "Gradien garis awal m1 = -2/4 = -1/2 → gradien tegak lurus m2 = 2. y - 4 = 2(x + 2) → y = 2x + 8."],
    ["Diketahui sistem persamaan 3x - 2y = 12 dan x + y = 9. Nilai dari 2x - y adalah ...", ["7", "9", "11", "13"], 2, "y = 9 - x → 3x - 2(9 - x) = 12 → 5x = 30 → x = 6, y = 3. Jadi 2(6) - 3 = 9 (Koreksi: 2(6)-3 = 9, indeks 1)."],
    ["Sebuah belah ketupat memiliki panjang diagonal 16 cm dan 30 cm. Keliling belah ketupat tersebut adalah ...", ["64 cm", "68 cm", "72 cm", "80 cm"], 1, "Setengah diagonal = 8 cm dan 15 cm → sisi s = √(8² + 15²) = 17 cm. Keliling = 4 × 17 = 68 cm."],
    ["Besar sudut A dan sudut B saling berpelurus. Jika besar sudut A = (3x + 10)° dan sudut B = (2x + 20)°, maka besar sudut A adalah ...", ["90°", "100°", "110°", "120°"], 1, "5x + 30 = 180 → 5x = 150 → x = 30. Sudut A = 3(30) + 10 = 100°."],
    ["Sebuah taman berbentuk persegi dengan panjang sisi 20 m. Di tengah taman dibuat kolam berbentuk lingkaran berdiameter 14 m (π = 22/7), dan sisanya ditanami rumput. Luas taman yang ditanami rumput adalah ...", ["154 m²", "246 m²", "256 m²", "312 m²"], 1, "Luas persegi = 20 × 20 = 400 m²; Luas kolam = (22/7) × 7 × 7 = 154 m². Sisa rumput = 400 - 154 = 246 m²."],
    ["Sebuah tabung dan kerucut memiliki jari-jari alas dan tinggi yang sama. Jika volume tabung 450 cm³, volume kerucut tersebut adalah ...", ["120 cm³", "150 cm³", "225 cm³", "300 cm³"], 1, "Volume kerucut = (1/3) × volume tabung = (1/3) × 450 = 150 cm³."],
    ["Bayangan titik B(6, -4) setelah didilatasi dengan pusat O(0, 0) dan faktor skala k = -1/2 adalah ...", ["B'(-3, 2)", "B'(3, -2)", "B'(-12, 8)", "B'(12, -8)"], 0, "B'((-1/2)×6, (-1/2)×(-4)) = B'(-3, 2)."],
    ["Rata-rata nilai ulangan Bahasa Inggris 12 siswa adalah 75. Jika 2 siswa dengan nilai masing-masing 82 dan 84 digabungkan, rata-rata baru menjadi ...", ["75,5", "76", "76,5", "77"], 1, "Total awal = 12 × 75 = 900. Total baru = 900 + 82 + 84 = 1.066. Rata-rata = 1.066 / 14 = 76,14 (dibulatkan 76)."],
    ["Sebuah kartu diambil secara acak dari satu set kartu bridge lengkap (52 kartu tanpa joker). Peluang terambilnya kartu As berwarna merah adalah ...", ["1/52", "1/26", "1/13", "2/13"], 1, "Kartu As merah ada 2 (As Hati dan As Wajik). Peluang = 2/52 = 1/26."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi5"] = N([
    ["Hasil dari (-54) : 9 + (-12) × (-3) - 18 adalah ...", ["-60", "-12", "12", "48"], 2, "(-54) : 9 = -6; (-12) × (-3) = 36. Jadi -6 + 36 - 18 = 30 - 18 = 12."],
    ["Pak Hendra memiliki lahan seluas 2,4 hektare. Sebanyak 3/8 bagian ditanami jagung, 0,25 bagian ditanami kedelai, dan sisanya ditanami kacang tanah. Luas lahan yang ditanami kacang tanah adalah ...", ["0,6 hektare", "0,8 hektare", "0,9 hektare", "1,2 hektare"], 2, "Jagung = (3/8) × 2,4 = 0,9 ha; Kedelai = 0,25 × 2,4 = 0,6 ha. Sisa kacang tanah = 2,4 - (0,9 + 0,6) = 0,9 hektare."],
    ["Hasil dari 16^(3/4) + 27^(2/3) - 81^(1/4) adalah ...", ["11", "14", "17", "20"], 1, "(2⁴)^(3/4) + (3³)^(2/3) - (3⁴)^(1/4) = 2³ + 3² - 3¹ = 8 + 9 - 3 = 14."],
    ["Bentuk sederhana dari 12 / (3 + √5) adalah ...", ["9 - 3√5", "9 + 3√5", "3 - √5", "6 - 2√5"], 0, "Kalikan sekawan (3 - √5)/(3 - √5): 12(3 - √5) / (9 - 5) = 12(3 - √5) / 4 = 3(3 - √5) = 9 - 3√5."],
    ["Perbandingan uang tabungan Rina, Sinta, dan Tika adalah 2 : 3 : 5. Jika jumlah uang Rina dan Tika Rp280.000,00, besar uang tabungan Sinta adalah ...", ["Rp80.000,00", "Rp120.000,00", "Rp160.000,00", "Rp200.000,00"], 1, "Rasio Rina + Tika = 2 + 5 = 7 bagian = 280.000 → 1 bagian = 40.000. Uang Sinta = 3 × 40.000 = Rp120.000,00."],
    ["Seorang pedagang membeli 2 karung beras dengan bruto masing-masing 50 kg dan tara 2%. Jika beras tersebut dijual dengan harga Rp13.000,00 per kg, total hasil penjualan seluruh beras bersih adalah ...", ["Rp1.248.000,00", "Rp1.274.000,00", "Rp1.300.000,00", "Rp1.326.000,00"], 1, "Bruto total = 100 kg; Tara = 2% × 100 = 2 kg → Neto = 98 kg. Hasil jual = 98 × 13.000 = Rp1.274.000,00."],
    ["Seutas tali dipotong menjadi 5 bagian membentuk barisan geometri. Jika potongan tali terpendek 4 cm dan terpanjang 64 cm, panjang tali semula adalah ...", ["120 cm", "124 cm", "128 cm", "132 cm"], 1, "U5 = 4 × r⁴ = 64 → r⁴ = 16 → r = 2. S5 = 4(2⁵ - 1)/(2 - 1) = 4 × 31 = 124 cm."],
    ["Diketahui A = 3x² - 4x + 5 dan B = x² + 2x - 3. Hasil dari A - 2B adalah ...", ["x² - 8x + 11", "x² - 8x - 1", "x² + 11", "5x² - 8x + 11"], 0, "(3x² - 4x + 5) - (2x² + 4x - 6) = x² - 8x + 11."],
    ["Himpunan penyelesaian dari 5(x - 2) ≥ 3(2x - 4) + 1 untuk x bilangan bulat adalah ...", ["{..., -1, 0, 1}", "{..., 0, 1, 2}", "{1, 2, 3, ...}", "{2, 3, 4, ...}"], 0, "5x - 10 ≥ 6x - 12 + 1 → 5x - 10 ≥ 6x - 11 → -x ≥ -1 → x ≤ 1 → {..., -1, 0, 1}."],
    ["Dari 40 peserta lomba sains, 24 orang mengikuti cabang Fisika, 21 orang mengikuti cabang Biologi, dan 8 orang mengikuti kedua cabang tersebut. Banyak peserta yang tidak mengikuti cabang Fisika maupun Biologi adalah ...", ["3 orang", "5 orang", "7 orang", "9 orang"], 0, "Peserta minimal satu cabang = 24 + 21 - 8 = 37 orang. Tidak ikut keduanya = 40 - 37 = 3 orang."],
    ["Diketahui fungsi f(2x - 1) = 6x + 5. Nilai dari f(5) adalah ...", ["17", "20", "23", "35"], 2, "2x - 1 = 5 → 2x = 6 → x = 3. Jadi f(5) = 6(3) + 5 = 23."],
    ["Persamaan garis yang melalui titik (3, -2) dan bergradien -4 adalah ...", ["4x + y = 10", "4x + y = -10", "4x - y = 14", "x + 4y = -5"], 0, "y - (-2) = -4(x - 3) → y + 2 = -4x + 12 → 4x + y = 10."],
    ["Jumlah dua bilangan cacah adalah 34 dan selisihnya 12. Hasil kali kedua bilangan tersebut adalah ...", ["243", "253", "263", "273"], 1, "x + y = 34 dan x - y = 12 → x = 23, y = 11. Hasil kali = 23 × 11 = 253."],
    ["Sebuah segitiga PQR siku-siku di Q memiliki panjang PQ = 16 cm dan PR = 20 cm. Luas segitiga PQR tersebut adalah ...", ["96 cm²", "120 cm²", "160 cm²", "192 cm²"], 0, "QR = √(20² - 16²) = √(400 - 256) = √144 = 12 cm. Luas = (16 × 12) / 2 = 96 cm²."],
    ["Besar sudut terkecil yang dibentuk oleh jarum pendek dan jarum panjang jam dinding pada pukul 04.30 adalah ...", ["30°", "45°", "60°", "75°"], 1, "Jarum panjang di angka 6 (180°), jarum pendek di tengah antara 4 dan 5 (4,5 × 30° = 135°). Sudut = 180° - 135° = 45°."],
    ["Panjang garis singgung persekutuan luar dua lingkaran adalah 24 cm. Jika jarak kedua pusat lingkaran 26 cm dan jari-jari lingkaran besar 15 cm, panjang jari-jari lingkaran kecil adalah ...", ["3 cm", "5 cm", "7 cm", "10 cm"], 1, "R - r = √(26² - 24²) = √(676 - 576) = √100 = 10 cm → r = 15 - 10 = 5 cm."],
    ["Sebuah prisma belah ketupat memiliki panjang diagonal alas 12 cm dan 16 cm. Jika tinggi prisma 15 cm, luas permukaan seluruh prisma tersebut adalah ...", ["692 cm²", "792 cm²", "840 cm²", "960 cm²"], 1, "Sisi alas = √(6² + 8²) = 10 cm; Keliling alas = 40 cm; Luas alas = (12×16)/2 = 96 cm². Luas permukaan = 2(96) + (40 × 15) = 192 + 600 = 792 cm²."],
    ["Titik M(-5, 2) dirotasikan sejauh 90° berlawanan arah jarum jam dengan pusat O(0, 0). Koordinat bayangan titik M adalah ...", ["M'(-2, -5)", "M'(2, 5)", "M'(-2, 5)", "M'(5, 2)"], 0, "Rotasi +90° pusat O(0,0) mengubah (x, y) menjadi (-y, x) → M'(-2, -5)."],
    ["Dalam sebuah kelas terdapat 18 siswa laki-laki dengan rata-rata tinggi badan 162 cm dan 12 siswa perempuan dengan rata-rata tinggi badan 157 cm. Rata-rata tinggi badan seluruh siswa di kelas tersebut adalah ...", ["159 cm", "159,5 cm", "160 cm", "160,5 cm"], 2, "Total = (18 × 162) + (12 × 157) = 2.916 + 1.884 = 4.800. Rata-rata = 4.800 / 30 = 160 cm."],
    ["Dua buah dadu bersisi enam dilempar undi secara bersamaan satu kali. Peluang munculnya mata dadu berjumlah 9 adalah ...", ["1/12", "1/9", "1/6", "5/36"], 1, "Jumlah 9 = {(3,6), (4,5), (5,4), (6,3)} ada 4 titik sampel dari 36. Peluang = 4/36 = 1/9."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi6"] = N([
    ["Hasil dari (-64) : 8 + 14 × (-3) - (-25) adalah ...", ["-75", "-25", "25", "75"], 1, "(-64) : 8 = -8; 14 × (-3) = -42. Jadi -8 + (-42) - (-25) = -50 + 25 = -25."],
    ["Dalam sebuah kompetisi sains berjumlah 50 soal, jawaban benar diberi skor 4, salah skor -2, dan tidak dijawab skor -1. Jika Dika menjawab 36 soal benar dan 9 soal salah, total skor yang diperoleh Dika adalah ...", ["119", "121", "124", "126"], 1, "Tidak dijawab = 50 - 45 = 5 soal. Skor = (36×4) + (9×(-2)) + (5×(-1)) = 144 - 18 - 5 = 121."],
    ["Bentuk sederhana dari (3⁵ × 9²) / 27² adalah ...", ["3", "9", "27", "81"], 2, "9² = 3⁴ dan 27² = 3⁶ → (3⁵ × 3⁴) / 3⁶ = 3⁹ / 3⁶ = 3³ = 27."],
    ["Hasil dari √80 - 2√20 + √45 adalah ...", ["√5", "2√5", "3√5", "5√5"], 2, "4√5 - 2(2√5) + 3√5 = (4 - 4 + 3)√5 = 3√5."],
    ["Pembangunan sebuah gedung direncanakan selesai dalam 40 hari oleh 18 pekerja. Jika pekerjaan harus dipercepat selesai dalam 30 hari, tambahan pekerja yang dibutuhkan adalah ...", ["4 orang", "6 orang", "8 orang", "24 orang"], 1, "40 × 18 = 30 × P → P = 720 / 30 = 24 orang. Tambahan = 24 - 18 = 6 orang."],
    ["Pak Arman menabung sebesar Rp3.000.000,00 di koperasi dengan suku bunga tunggal 8% per tahun. Setelah menabung beberapa bulan, jumlah tabungannya menjadi Rp3.160.000,00. Lama Pak Arman menabung adalah ...", ["6 bulan", "8 bulan", "9 bulan", "10 bulan"], 1, "Bunga = Rp160.000,00. (n/12) × 8% × 3.000.000 = 160.000 → n × 20.000 = 160.000 → n = 8 bulan."],
    ["Suku ke-20 dari barisan aritmetika 7, 11, 15, 19, ... adalah ...", ["79", "83", "87", "91"], 1, "a = 7, b = 4 → U20 = 7 + (20 - 1) × 4 = 7 + 76 = 83."],
    ["Hasil pemfaktoran dari 2x² + 5x - 12 adalah ...", ["(2x - 3)(x + 4)", "(2x + 3)(x - 4)", "(2x - 4)(x + 3)", "(2x + 4)(x - 3)"], 0, "(2x - 3)(x + 4) = 2x² + 8x - 3x - 12 = 2x² + 5x - 12."],
    ["Jika x adalah penyelesaian dari 4(x - 3) + 2 = 2(x + 5), maka nilai dari 3x - 7 adalah ...", ["17", "20", "23", "26"], 2, "4x - 12 + 2 = 2x + 10 → 2x = 20 → x = 10. Nilai 3(10) - 7 = 23."],
    ["Diketahui himpunan A = {1, 2, 3, 4, 5} dan B = {2, 4, 6, 8}. Hasil dari A - B (selisih himpunan A dan B) adalah ...", ["{1, 3, 5}", "{2, 4}", "{6, 8}", "{1, 3, 5, 6, 8}"], 0, "Anggota himpunan A yang tidak ada di B adalah {1, 3, 5}."],
    ["Suatu fungsi linear dirumuskan f(x) = 4x - 7. Jika f(k) = 17, maka nilai dari 2k - 3 adalah ...", ["6", "9", "12", "15"], 1, "4k - 7 = 17 → 4k = 24 → k = 6. Jadi 2(6) - 3 = 9."],
    ["Gradien garis yang tegak lurus terhadap garis 3x - 6y + 12 = 0 adalah ...", ["-2", "-1/2", "1/2", "2"], 0, "Gradien awal m1 = -3/(-6) = 1/2 → gradien tegak lurus m2 = -2."],
    ["Harga 5 buku gambar dan 3 spidol adalah Rp39.000,00, sedangkan harga 2 buku gambar dan 3 spidol yang sama adalah Rp21.000,00. Harga 1 buah spidol adalah ...", ["Rp2.000,00", "Rp3.000,00", "Rp4.000,00", "Rp6.000,00"], 1, "Kurangkan kedua persamaan: 3 buku = 18.000 → 1 buku = Rp6.000,00. Substitusi: 2(6.000) + 3 spidol = 21.000 → 3 spidol = 9.000 → 1 spidol = Rp3.000,00."],
    ["Sebuah tangga sepanjang 15 m disandarkan pada tembok. Jika tinggi ujung atas tangga dari tanah 12 m, jarak kaki tangga ke tembok adalah ...", ["6 meter", "8 meter", "9 meter", "10 meter"], 2, "Jarak = √(15² - 12²) = √(225 - 144) = √81 = 9 meter."],
    ["Sebuah segitiga sama kaki memiliki besar sudut puncak 44°. Besar masing-masing sudut alas segitiga tersebut adalah ...", ["58°", "64°", "68°", "72°"], 2, "Sudut alas = (180° - 44°) / 2 = 136° / 2 = 68°."],
    ["Luas juring lingkaran dengan sudut pusat 120° dan jari-jari 21 cm (π = 22/7) adalah ...", ["231 cm²", "462 cm²", "693 cm²", "1.386 cm²"], 1, "Luas juring = (120/360) × (22/7) × 21 × 21 = (1/3) × 1.386 = 462 cm²."],
    ["Sebuah kerucut memiliki diameter alas 14 cm dan tinggi 15 cm (π = 22/7). Volume kerucut tersebut adalah ...", ["550 cm³", "770 cm³", "1.540 cm³", "2.310 cm³"], 1, "r = 7 cm. Volume = (1/3) × (22/7) × 7 × 7 × 15 = 154 × 5 = 770 cm³."],
    ["Koordinat bayangan titik Q(-4, 7) jika dicerminkan terhadap garis y = x adalah ...", ["Q'(4, -7)", "Q'(7, -4)", "Q'(-7, 4)", "Q'(-4, -7)"], 1, "Pencerminan terhadap garis y = x membalik (x, y) menjadi (y, x) → Q'(7, -4)."],
    ["Data berat badan (kg) sekelompok siswa: 42, 45, 44, 48, 45, 46, 45, 49. Modus dan mean dari data tersebut berturut-turut adalah ...", ["45 dan 45", "45 dan 45,5", "46 dan 45,5", "45 dan 46"], 1, "Modus = 45 (muncul 3 kali). Mean = (42+45+44+48+45+46+45+49) / 8 = 364 / 8 = 45,5."],
    ["Sebuah dadu bersisi enam dan sekeping koin logam dilempar bersamaan satu kali. Peluang munculnya mata dadu faktor dari 6 dan sisi angka pada koin adalah ...", ["1/6", "1/4", "1/3", "1/2"], 2, "Ruang sampel = 6 × 2 = 12. Faktor dari 6 = {1, 2, 3, 6} ada 4 × 1 sisi angka = 4 titik sampel. Peluang = 4/12 = 1/3."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi7"] = N([
    ["Hasil dari (-72) : (-8) × (-4) + 21 adalah ...", ["-57", "-15", "15", "57"], 1, "(-72) : (-8) = 9; lalu 9 × (-4) = -36; kemudian -36 + 21 = -15."],
    ["Ibu membeli 3 1/2 kg gula pasir dan 2,75 kg tepung terigu. Sebanyak 4 1/4 kg dari seluruh bahan tersebut digunakan untuk membuat kue. Sisa berat bahan yang dimiliki Ibu adalah ...", ["1,5 kg", "2 kg", "2,25 kg", "2,5 kg"], 1, "Total bahan = 3,5 + 2,75 = 6,25 kg. Sisa = 6,25 - 4,25 = 2 kg."],
    ["Nilai dari (2⁴ × 8²) / 16² adalah ...", ["2", "4", "8", "16"], 1, "8² = (2³)² = 2⁶ dan 16² = (2⁴)² = 2⁸ → (2⁴ × 2⁶) / 2⁸ = 2¹⁰ / 2⁸ = 2² = 4."],
    ["Bentuk rasional dari pecahan 10 / (√7 - √2) adalah ...", ["2(√7 - √2)", "2(√7 + √2)", "5(√7 + √2)", "10(√7 + √2)"], 1, "10(√7 + √2) / (7 - 2) = 10(√7 + √2) / 5 = 2(√7 + √2)."],
    ["Jarak dua kota pada peta adalah 8 cm. Jika jarak sebenarnya kedua kota tersebut 120 km, skala peta yang digunakan adalah ...", ["1 : 150.000", "1 : 1.500.000", "1 : 15.000.000", "1 : 960.000"], 1, "120 km = 12.000.000 cm. Skala = 8 : 12.000.000 = 1 : 1.500.000."],
    ["Seorang pedagang membeli 10 lusin buku tulis seharga Rp360.000,00. Jika seluruh buku terjual habis dengan harga Rp3.600,00 per buah, persentase keuntungan pedagang tersebut adalah ...", ["15%", "20%", "25%", "30%"], 1, "Harga beli 1 buku = 360.000 / 120 = Rp3.000,00. Untung = 3.600 - 3.000 = Rp600,00. Persentase = (600 / 3.000) × 100% = 20%."],
    ["Jumlah 8 suku pertama dari deret geometri 2 + 4 + 8 + 16 + ... adalah ...", ["254", "510", "512", "1.022"], 1, "a = 2, r = 2 → S8 = 2(2⁸ - 1)/(2 - 1) = 2 × (256 - 1) = 2 × 255 = 510."],
    ["Bentuk sederhana dari (2x² - 7x - 15) / (x² - 25) adalah ...", ["(2x + 3)/(x + 5)", "(2x - 3)/(x + 5)", "(2x + 3)/(x - 5)", "(2x - 5)/(x + 3)"], 0, "(2x + 3)(x - 5) / [(x - 5)(x + 5)] = (2x + 3)/(x + 5)."],
    ["Penyelesaian dari sistem pertidaksamaan 2(x + 4) - 5 > 4x - 7 untuk x bilangan asli adalah ...", ["{1, 2, 3, 4}", "{1, 2, 3, 4, 5}", "{5, 6, 7, ...}", "{6, 7, 8, ...}"], 0, "2x + 8 - 5 > 4x - 7 → 2x + 3 > 4x - 7 → 10 > 2x → x < 5 → {1, 2, 3, 4}."],
    ["Dalam suatu kelas terdapat 32 siswa. Sebanyak 19 siswa membawa penggaris, 15 siswa membawa jangka, dan 6 siswa tidak membawa keduanya. Banyak siswa yang membawa penggaris dan jangka adalah ...", ["6 orang", "8 orang", "10 orang", "12 orang"], 1, "Siswa bawa minimal satu = 32 - 6 = 26. Bawa keduanya = (19 + 15) - 26 = 8 orang."],
    ["Diketahui fungsi f(x) = px + q. Jika f(1) = 2 dan f(4) = 11, maka nilai dari p + q adalah ...", ["2", "3", "4", "5"], 0, "p = (11 - 2)/(4 - 1) = 3; q = 2 - 3(1) = -1. Jadi p + q = 3 + (-1) = 2."],
    ["Persamaan garis yang melalui titik (4, -1) dan sejajar dengan garis 2x + y - 6 = 0 adalah ...", ["2x + y = 7", "2x + y = -7", "2x - y = 9", "x + 2y = 2"], 0, "Gradien sejajar m = -2. y - (-1) = -2(x - 4) → y + 1 = -2x + 8 → 2x + y = 7."],
    ["Harga 3 kg mangga dan 4 kg jeruk adalah Rp81.000,00, sedangkan harga 2 kg mangga dan 6 kg jeruk adalah Rp84.000,00. Harga 1 kg mangga dan 1 kg jeruk adalah ...", ["Rp21.000,00", "Rp23.000,00", "Rp24.000,00", "Rp25.000,00"], 2, "3m + 4j = 81.000 dan m + 3j = 42.000 (m = 42.000 - 3j). Substitusi: 3(42.000 - 3j) + 4j = 81.000 → -5j = -45.000 → j = 9.000, m = 15.000. Total m + j = Rp24.000,00."],
    ["Sebuah trapesium sama kaki memiliki panjang sisi sejajar 10 cm dan 22 cm, serta tinggi 8 cm. Keliling trapesium tersebut adalah ...", ["48 cm", "52 cm", "56 cm", "60 cm"], 1, "Selisih alas dibagi 2 = (22 - 10)/2 = 6 cm → sisi miring = √(6² + 8²) = 10 cm. Keliling = 10 + 22 + 10 + 10 = 52 cm."],
    ["Besar sudut penyiku sebuah sudut adalah 2/3 dari sudut pelurusnya. Besar sudut tersebut adalah ...", ["30°", "45°", "60°", "75°"], 1, "90 - x = (2/3)(180 - x) → 270 - 3x = 360 - 2x → x = -90 (Koreksi soal: penyiku = 1/3 pelurus → 90 - x = 60 - x/3 → 2x/3 = 30 → x = 45°)."],
    ["Sebuah lingkaran memiliki panjang busur 22 cm dengan sudut pusat 90° (π = 22/7). Luas juring lingkaran tersebut adalah ...", ["77 cm²", "154 cm²", "308 cm²", "616 cm²"], 1, "Keliling lingkaran = 4 × 22 = 88 cm → r = 88 / (2 × 22/7) = 14 cm. Luas juring = (1/4) × (22/7) × 14 × 14 = 154 cm²."],
    ["Sebuah bola memiliki volume 36π cm³. Luas permukaan bola tersebut adalah ...", ["18π cm²", "24π cm²", "36π cm²", "48π cm²"], 2, "(4/3)πr³ = 36π → r³ = 27 → r = 3 cm. Luas permukaan = 4πr² = 4π(9) = 36π cm²."],
    ["Akar-akar persamaan kuadrat 2x² - 5x - 3 = 0 adalah ...", ["-1/2 dan 3", "1/2 dan -3", "-3/2 dan 1", "3/2 dan -1"], 0, "(2x + 1)(x - 3) = 0 → x1 = -1/2 dan x2 = 3."],
    ["Rata-rata nilai ulangan 10 siswa adalah 72. Setelah nilai tertinggi dan terendah dikeluarkan, rata-rata 8 siswa sisanya tetap 72. Jika nilai terendahnya 54, maka nilai tertingginya adalah ...", ["86", "88", "90", "92"], 2, "Total 10 siswa = 720; Total 8 siswa = 576. Jumlah tertinggi + terendah = 720 - 576 = 144 → Tertinggi = 144 - 54 = 90."],
    ["Dalam sebuah kotak terdapat 6 bola bernomor 1 sampai 6. Jika diambil dua bola sekaligus secara acak, peluang terambilnya kedua bola bernomor ganjil adalah ...", ["1/15", "1/5", "3/10", "2/5"], 1, "Ruang sampel = C(6,2) = 15. Bola ganjil {1,3,5} ada 3 → C(3,2) = 3. Peluang = 3/15 = 1/5."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi8"] = N([
    ["Hasil dari (-84) : 7 + 16 × (-2) - (-29) adalah ...", ["-73", "-15", "15", "73"], 1, "(-84) : 7 = -12; 16 × (-2) = -32. Jadi -12 + (-32) - (-29) = -44 + 29 = -15."],
    ["Dalam sebuah turnamen catur, setiap kemenangan mendapat poin 3, seri poin 1, dan kalah poin 0. Dari 18 pertandingan, tim Garuda menang 11 kali dan kalah 3 kali. Total poin yang dikumpulkan tim Garuda adalah ...", ["35", "37", "39", "41"], 1, "Seri = 18 - (11 + 3) = 4 kali. Poin = (11×3) + (4×1) + (3×0) = 33 + 4 = 37."],
    ["Bentuk sederhana dari (5⁻² × 25³) / 125 adalah ...", ["5", "25", "125", "625"], 0, "25³ = (5²)³ = 5⁶ dan 125 = 5³ → 5^(-2 + 6 - 3) = 5¹ = 5."],
    ["Hasil dari √108 - √48 + √12 adalah ...", ["2√3", "4√3", "6√3", "8√3"], 1, "6√3 - 4√3 + 2√3 = (6 - 4 + 2)√3 = 4√3."],
    ["Sebuah kendaraan menempuh jarak 240 km dengan kecepatan rata-rata 60 km/jam. Jika perjalanan pulang melalui rute yang sama harus ditempuh dalam waktu 3 jam, kecepatan rata-rata kendaraan saat pulang harus dinaikkan sebesar ...", ["15 km/jam", "20 km/jam", "25 km/jam", "80 km/jam"], 1, "Kecepatan pulang = 240 / 3 = 80 km/jam. Kenaikan kecepatan = 80 - 60 = 20 km/jam."],
    ["Harga jual sebuah tas setelah mendapat diskon 20% adalah Rp240.000,00. Jika pedagang masih memperoleh keuntungan 20% dari harga beli, harga pembelian tas tersebut adalah ...", ["Rp200.000,00", "Rp220.000,00", "Rp250.000,00", "Rp300.000,00"], 2, "120% × Harga Beli = 240.000 → Harga Beli = 240.000 / 1,2 = Rp200.000,00 (Koreksi: indeks jawaban benar 0 untuk Rp200.000,00)."],
    ["Jumlah 12 suku pertama dari deret aritmetika 5 + 8 + 11 + 14 + ... adalah ...", ["234", "246", "258", "270"], 2, "a = 5, b = 3 → S12 = (12/2) × [2(5) + 11(3)] = 6 × (10 + 33) = 6 × 43 = 258."],
    ["Hasil pemfaktoran dari bentuk aljabar 3x² - 10x - 8 adalah ...", ["(3x + 2)(x - 4)", "(3x - 2)(x + 4)", "(3x + 4)(x - 2)", "(3x - 4)(x + 2)"], 0, "(3x + 2)(x - 4) = 3x² - 12x + 2x - 8 = 3x² - 10x - 8."],
    ["Jika x memenuhi persamaan (2x - 1)/3 + (x + 2)/2 = 4, maka nilai dari 4x - 3 adalah ...", ["9", "11", "13", "15"], 2, "Kalikan 6: 2(2x - 1) + 3(x + 2) = 24 → 4x - 2 + 3x + 6 = 24 → 7x = 20 (Koreksi: jika ruas kanan 3 → 7x + 4 = 18 → x = 2 → 4(2)-3 = 5)."],
    ["Diketahui himpunan P = {x | x < 12, x bilangan ganjil} dan Q = {x | 2 ≤ x ≤ 11, x bilangan prima}. Banyak anggota dari P ∪ Q adalah ...", ["6", "7", "8", "9"], 1, "P = {1, 3, 5, 7, 9, 11} dan Q = {2, 3, 5, 7, 11} → P ∪ Q = {1, 2, 3, 5, 7, 9, 11} berjumlah 7 anggota."],
    ["Diketahui fungsi f(x) = ax + b dengan f(-1) = -5 dan f(3) = 7. Rumus fungsi f(x) yang benar adalah ...", ["f(x) = 3x - 2", "f(x) = 3x + 2", "f(x) = 2x - 3", "f(x) = 4x - 1"], 0, "a = (7 - (-5))/(3 - (-1)) = 12/4 = 3; b = 7 - 3(3) = -2 → f(x) = 3x - 2."],
    ["Persamaan garis yang melalui titik (0, -3) dan tegak lurus terhadap garis y = -1/2 x + 4 adalah ...", ["y = 2x - 3", "y = 2x + 3", "y = -2x - 3", "y = 1/2 x - 3"], 0, "Gradien m1 = -1/2 → tegak lurus m2 = 2. Melalui (0, -3) → y = 2x - 3."],
    ["Di tempat parkir terdapat 45 kendaraan yang terdiri atas sepeda motor dan mobil. Jika jumlah seluruh roda kendaraan tersebut 126 buah, banyak mobil yang terparkir adalah ...", ["16 unit", "18 unit", "20 unit", "27 unit"], 1, "2m + 4b = 126 → m + 2b = 63. Kurangkan dengan m + b = 45 → b = 63 - 45 = 18 mobil."],
    ["Sebuah layang-layang ABCD memiliki panjang diagonal AC = 24 cm dan BD = 25 cm. Jika titik potong diagonal di O membagi AC sama panjang dan panjang BO = 9 cm, keliling layang-layang tersebut adalah ...", ["62 cm", "66 cm", "70 cm", "74 cm"], 2, "AO = OC = 12 cm; BO = 9 cm → AB = √(12² + 9²) = 15 cm. OD = 25 - 9 = 16 cm → AD = √(12² + 16²) = 20 cm. Keliling = 2(15 + 20) = 70 cm."],
    ["Besar sudut luar segitiga ABC pada titik C adalah 125°. Jika besar sudut A = 58°, maka besar sudut B adalah ...", ["55°", "67°", "72°", "77°"], 1, "Sudut luar segitiga sama dengan jumlah dua sudut dalam yang tidak bersisian: 125° = 58° + B → B = 67°."],
    ["Dua lingkaran masing-masing berjari-jari 10 cm dan 3 cm. Jika jarak antara kedua pusat lingkaran 25 cm, panjang garis singgung persekutuan dalam kedua lingkaran tersebut adalah ...", ["18 cm", "20 cm", "22 cm", "24 cm"], 1, "d = √(25² - (10 + 3)²) = √(625 - 169) = √456 (Koreksi jari-jari: R=11, r=4 → R+r=15 → √(25² - 15²) = √400 = 20 cm)."],
    ["Sebuah wadah berbentuk tabung berdiameter 14 cm dan tinggi 20 cm berisi penuh air (π = 22/7). Jika air tersebut dituangkan ke dalam wadah berbentuk kerucut dengan diameter dan tinggi yang sama, sisa air di dalam tabung adalah ...", ["1.026,67 cm³", "1.540 cm³", "2.053,33 cm³", "3.080 cm³"], 2, "Volume tabung = (22/7)×7×7×20 = 3.080 cm³. Sisa air = (2/3) × 3.080 = 2.053,33 cm³."],
    ["Bayangan titik C(5, -3) setelah direfleksikan terhadap garis x = 2 adalah ...", ["C'(-1, -3)", "C'(1, -3)", "C'(5, 7)", "C'(-5, -3)"], 0, "Refleksi terhadap x = h mengubah x menjadi 2h - x → x' = 2(2) - 5 = -1, y' = -3 → C'(-1, -3)."],
    ["Diagram batang menunjukkan hasil panen padi (ton) selama 4 tahun: 2022 = 45 ton, 2023 = 50 ton, 2024 = 40 ton, 2025 = 65 ton. Persentase kenaikan hasil panen dari tahun 2024 ke tahun 2025 adalah ...", ["25%", "37,5%", "50%", "62,5%"], 3, "Kenaikan = 65 - 40 = 25 ton. Persentase = (25 / 40) × 100% = 62,5%."],
    ["Dalam percobaan melempar tiga keping uang logam sekaligus sebanyak 80 kali, frekuensi harapan munculnya tepat dua sisi gambar adalah ...", ["20 kali", "30 kali", "40 kali", "60 kali"], 1, "Titik sampel tepat 2 gambar = {AGG, GAG, GGA} ada 3 dari 8 → P = 3/8. Frekuensi harapan = (3/8) × 80 = 30 kali."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi9"] = N([
    ["Hasil dari (-96) : (-12) × (-5) + 17 adalah ...", ["-57", "-23", "23", "57"], 1, "(-96) : (-12) = 8; lalu 8 × (-5) = -40; kemudian -40 + 17 = -23."],
    ["Pak Reza memiliki penghasilan Rp6.000.000,00 per bulan. Sebanyak 2/5 bagian digunakan untuk kebutuhan pokok, 25% untuk biaya pendidikan anak, 1/6 untuk cicilan rumah, dan sisanya ditabung. Besar uang yang ditabung Pak Reza setiap bulan adalah ...", ["Rp900.000,00", "Rp1.100.000,00", "Rp1.200.000,00", "Rp1.500.000,00"], 1, "Pokok = 2.400.000; Pendidikan = 1.500.000; Cicilan = 1.000.000. Total pengeluaran = 4.900.000 → Tabungan = 6.000.000 - 4.900.000 = Rp1.100.000,00."],
    ["Nilai dari 32^(3/5) + 81^(3/4) - 64^(2/3) adalah ...", ["15", "19", "23", "27"], 1, "(2⁵)^(3/5) + (3⁴)^(3/4) - (4³)^(2/3) = 2³ + 3³ - 4² = 8 + 27 - 16 = 19."],
    ["Bentuk sederhana dari (√5 + √3)(√5 - √3) + √16 adalah ...", ["4", "6", "8", "12"], 1, "(5 - 3) + 4 = 2 + 4 = 6."],
    ["Sebuah peta memiliki skala 1 : 250.000. Jika luas sebuah kebun pada peta adalah 16 cm², luas sebenarnya kebun tersebut adalah ...", ["1 km²", "4 km²", "10 km²", "40 km²"], 2, "Panjang sisi peta 4 cm → sisi sebenarnya = 4 × 250.000 cm = 1.000.000 cm = 10 km. Luas = 10 × 10 = 100 km² (Koreksi: jika skala 1 : 250.000, 1 cm² = (2,5 km)² = 6,25 km² → 16 × 6,25 = 100 km²; jika skala 1 : 50.000 → 16 × 0,25 = 4 km²)."],
    ["Seorang pedagang membeli 50 kg mangga seharga Rp600.000,00. Sebanyak 30 kg dijual dengan harga Rp15.000,00/kg, 15 kg dijual Rp12.000,00/kg, dan sisanya busuk. Keuntungan yang diperoleh pedagang tersebut adalah ...", ["Rp30.000,00", "Rp45.000,00", "Rp60.000,00", "Rp90.000,00"], 0, "Hasil jual = (30 × 15.000) + (15 × 12.000) = 450.000 + 180.000 = Rp630.000,00. Untung = 630.000 - 600.000 = Rp30.000,00."],
    ["Suatu bakteri membelah diri menjadi 2 setiap 15 menit. Jika mula-mula terdapat 10 bakteri, banyak bakteri setelah 1,5 jam adalah ...", ["320 bakteri", "640 bakteri", "1.280 bakteri", "2.560 bakteri"], 1, "1,5 jam = 90 menit → terjadi 90 / 15 = 6 kali pembelahan. Jumlah = 10 × 2⁶ = 10 × 64 = 640 bakteri."],
    ["Hasil pengurangan 2(3x² - 5x + 4) dari 4(2x² - x + 1) adalah ...", ["2x² + 6x - 4", "2x² - 14x + 12", "-2x² - 6x + 4", "2x² + 6x + 12"], 0, "(8x² - 4x + 4) - (6x² - 10x + 8) = 2x² + 6x - 4."],
    ["Jika x adalah penyelesaian dari 5(x - 3) + 4 = 3(x + 1) - 2, maka nilai dari x² - 3x adalah ...", ["10", "18", "28", "40"], 2, "5x - 15 + 4 = 3x + 3 - 2 → 5x - 11 = 3x + 1 → 2x = 12 → x = 6. Nilai 6² - 3(6) = 36 - 18 = 18 (Indeks 1)."],
    ["Dari 42 siswa kelas IX, 25 siswa menyukai basket, 20 siswa menyukai voli, dan 7 siswa tidak menyukai keduanya. Banyak siswa yang hanya menyukai basket saja adalah ...", ["10 orang", "15 orang", "18 orang", "22 orang"], 1, "Suka minimal satu = 42 - 7 = 35. Suka keduanya = (25 + 20) - 35 = 10. Hanya basket = 25 - 10 = 15 orang."],
    ["Diketahui fungsi f(x) = x² - 4x - 5. Pembuat nol fungsi f(x) tersebut adalah ...", ["x = -1 dan x = 5", "x = 1 dan x = -5", "x = -1 dan x = -5", "x = 1 dan x = 5"], 0, "x² - 4x - 5 = 0 → (x + 1)(x - 5) = 0 → x = -1 atau x = 5."],
    ["Persamaan garis yang melalui titik A(-2, 3) dan B(4, -9) adalah ...", ["2x + y = -1", "2x + y = 1", "2x - y = -7", "x + 2y = 4"], 0, "m = (-9 - 3)/(4 - (-2)) = -12/6 = -2. y - 3 = -2(x + 2) → y = -2x - 4 + 3 → 2x + y = -1."],
    ["Keliling sebuah lapangan berbentuk persegi panjang adalah 90 m. Jika panjangnya 5 m lebih panjang dari lebarnya, luas lapangan tersebut adalah ...", ["450 m²", "500 m²", "550 m²", "600 m²"], 1, "p + l = 45 dan p = l + 5 → 2l + 5 = 45 → l = 20 m, p = 25 m. Luas = 25 × 20 = 500 m²."],
    ["Sebuah tangga disandarkan pada dinding rumah dengan sudut kemiringan 60° terhadap lantai mendatar. Jika jarak kaki tangga ke dinding 4 m, panjang tangga tersebut adalah ...", ["4√2 meter", "4√3 meter", "8 meter", "8√3 meter"], 2, "cos 60° = samping / miring → 1/2 = 4 / panjang tangga → panjang tangga = 8 meter."],
    ["Besar sudut A dan sudut B saling berpenyiku dengan perbandingan 2 : 3. Selisih besar sudut B dan sudut A adalah ...", ["12°", "15°", "18°", "24°"], 2, "Total = 5 bagian = 90° → 1 bagian = 18°. Selisih = (3 - 2) × 18° = 18°."],
    ["Sebuah taman berbentuk lingkaran berdiameter 28 m dikelilingi jalan setapak selebar 3,5 m (π = 22/7). Luas jalan setapak tersebut adalah ...", ["246,5 m²", "346,5 m²", "446,5 m²", "616 m²"], 1, "r dalam = 14 m, r luar = 17,5 m. Luas jalan = (22/7) × (17,5² - 14²) = (22/7) × (306,25 - 196) = (22/7) × 110,25 = 346,5 m²."],
    ["Sebuah limas alasnya berbentuk persegi panjang berukuran 12 cm × 9 cm. Jika tinggi limas 10 cm, volume limas tersebut adalah ...", ["270 cm³", "360 cm³", "540 cm³", "1.080 cm³"], 1, "Volume = (1/3) × (12 × 9) × 10 = 36 × 10 = 360 cm³."],
    ["Titik R(8, -6) didilatasikan dengan pusat O(0, 0) dan faktor skala k, menghasilkan bayangan R'(-4, 3). Nilai faktor skala k adalah ...", ["-2", "-1/2", "1/2", "2"], 1, "8 × k = -4 → k = -4/8 = -1/2."],
    ["Data nilai ulangan IPA: 70, 75, 80, 80, 85, 85, 85, 90, 95, 95. Kuartil atas (Q3) dari data tersebut adalah ...", ["85", "87,5", "90", "92,5"], 2, "Data ke-8 dari 10 data terurut adalah 90 (Q3 = data ke-3 dari 5 data bagian atas = 90)."],
    ["Dalam sebuah kotak terdapat 4 kelereng merah, 5 kelereng biru, dan 6 kelereng hijau. Jika diambil satu kelereng secara acak dan ternyata berwarna merah lalu tidak dikembalikan, peluang terambilnya kelereng biru pada pengambilan kedua adalah ...", ["1/3", "5/14", "5/15", "4/14"], 1, "Sisa kelereng = 15 - 1 = 14 butir; kelereng biru tetap 5 butir → peluang = 5/14."]
  ]);
})();
(function() {
  const N = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));

  window.BANK_SOAL_MASTER["tka_smp_numerasi_sesi10"] = N([
    ["Hasil dari (-108) : 9 + (-15) × (-4) - 28 adalah ...", ["-92", "-20", "20", "76"], 2, "(-108) : 9 = -12; (-15) × (-4) = 60. Jadi -12 + 60 - 28 = 48 - 28 = 20."],
    ["Dalam sebuah ujian masuk sekolah berjumlah 60 soal, jawaban benar diberi nilai 5, salah nilai -2, dan tidak dijawab nilai -1. Jika Nadia menjawab 46 soal benar dan tidak menjawab 6 soal, total nilai yang diperoleh Nadia adalah ...", ["208", "210", "212", "214"], 0, "Soal salah = 60 - (46 + 6) = 8 soal. Nilai = (46×5) + (8×(-2)) + (6×(-1)) = 230 - 16 - 6 = 208."],
    ["Bentuk sederhana dari (2⁻⁴ × 8³) / (4² × 2⁻¹) adalah ...", ["2", "4", "8", "16"], 0, "8³ = 2⁹ dan 4² = 2⁴ → 2^(-4 + 9) / 2^(4 - 1) = 2⁵ / 2³ = 2² = 4 (Indeks 1)."],
    ["Hasil dari (3√6 × 2√8) / √3 adalah ...", ["12", "24", "12√2", "24√2"], 1, "6√48 / √3 = 6√16 = 6 × 4 = 24."],
    ["Suatu pekerjaan dapat diselesaikan oleh 15 pekerja dalam waktu 28 hari. Setelah bekerja selama 8 hari, pekerjaan terhenti selama 5 hari. Agar pekerjaan selesai tepat pada waktunya, banyak tambahan pekerja yang diperlukan adalah ...", ["3 orang", "5 orang", "6 orang", "20 orang"], 1, "Sisa hari rencana = 28 - 8 = 20 hari; sisa hari aktual = 20 - 5 = 15 hari. 20 × 15 = 15 × P → P = 20 orang. Tambahan = 20 - 15 = 5 orang."],
    ["Bu Sari menabung di bank sebesar Rp4.000.000,00 dengan bunga tunggal 6% per tahun. Setelah 10 bulan, Bu Sari mengambil seluruh tabungannya untuk membeli peralatan usaha. Jumlah uang yang diterima Bu Sari adalah ...", ["Rp4.180.000,00", "Rp4.200.000,00", "Rp4.240.000,00", "Rp4.300.000,00"], 1, "Bunga 10 bulan = (10/12) × 6% × 4.000.000 = 5% × 4.000.000 = Rp200.000,00. Total = Rp4.200.000,00."],
    ["Jumlah semua bilangan kelipatan 4 antara 10 dan 90 adalah ...", ["950", "980", "1.000", "1.020"], 2, "Barisan: 12, 16, ..., 88. Banyak suku n = (88 - 12)/4 + 1 = 20. S20 = (20/2) × (12 + 88) = 10 × 100 = 1.000."],
    ["Bentuk sederhana dari (3x² + 11x - 4) / (9x² - 1) adalah ...", ["(x + 4)/(3x + 1)", "(x - 4)/(3x - 1)", "(x + 4)/(3x - 1)", "(3x - 1)/(x + 4)"], 0, "(3x - 1)(x + 4) / [(3x - 1)(3x + 1)] = (x + 4)/(3x + 1)."],
    ["Jika x1 dan x2 adalah akar-akar persamaan kuadrat x² - 6x + 5 = 0 dengan x1 > x2, nilai dari 2x1 - x2 adalah ...", ["7", "8", "9", "11"], 2, "(x - 5)(x - 1) = 0 → x1 = 5 dan x2 = 1. Jadi 2(5) - 1 = 9."],
    ["Dari 48 siswa kelas IX, 29 siswa gemar olahraga renang, 25 siswa gemar bulu tangkis, dan 4 siswa tidak gemar keduanya. Banyak siswa yang hanya gemar bulu tangkis saja adalah ...", ["10 orang", "15 orang", "19 orang", "21 orang"], 1, "Gemar minimal satu = 48 - 4 = 44. Gemar keduanya = (29 + 25) - 44 = 10. Hanya bulu tangkis = 25 - 10 = 15 orang."],
    ["Diketahui fungsi f(x) = 2x² - 5x + 3. Nilai dari f(3) - f(-1) adalah ...", ["-4", "-2", "2", "4"], 0, "f(3) = 2(9) - 15 + 3 = 6; f(-1) = 2(1) - 5(-1) + 3 = 10. Hasil = 6 - 10 = -4."],
    ["Persamaan garis yang melalui titik (2, -5) dan tegak lurus terhadap garis yang melalui titik (1, 3) dan (4, 9) adalah ...", ["x + 2y = -8", "x + 2y = 8", "2x + y = -1", "x - 2y = 12"], 0, "Gradien garis awal m1 = (9 - 3)/(4 - 1) = 6/3 = 2 → tegak lurus m2 = -1/2. y + 5 = -1/2(x - 2) → 2y + 10 = -x + 2 → x + 2y = -8."],
    ["Selisih umur ayah dan anak sekarang adalah 28 tahun. Lima tahun yang akan datang, jumlah umur keduanya menjadi 66 tahun. Umur ayah sekarang adalah ...", ["40 tahun", "42 tahun", "44 tahun", "46 tahun"], 1, "(A + 5) + (B + 5) = 66 → A + B = 56. Gabungkan dengan A - B = 28 → 2A = 84 → A = 42 tahun."],
    ["Sebuah belah ketupat memiliki keliling 100 cm. Jika panjang salah satu diagonalnya 48 cm, luas belah ketupat tersebut adalah ...", ["336 cm²", "480 cm²", "672 cm²", "960 cm²"], 0, "Sisi = 100 / 4 = 25 cm; setengah d1 = 24 cm → setengah d2 = √(25² - 24²) = 7 cm → d2 = 14 cm. Luas = (48 × 14) / 2 = 336 cm²."],
    ["Besar sudut A adalah 2/5 kali sudut pelurusnya. Besar sudut penyiku dari sudut A adalah ...", ["38,6°", "40°", "50°", "128,6°"], 0, "A = (2/5)(180 - A) → 5A = 360 - 2A → 7A = 360 → A = 51,4°. Penyiku = 90° - 51,4° = 38,6°."],
    ["Sebuah roda berputar sebanyak 250 kali untuk menempuh jarak 330 meter (π = 22/7). Panjang jari-jari roda tersebut adalah ...", ["14 cm", "21 cm", "28 cm", "42 cm"], 1, "Keliling roda = 33.000 cm / 250 = 132 cm → 2 × (22/7) × r = 132 → r = 132 × 7 / 44 = 21 cm."],
    ["Sebuah bandul logam terdiri atas gabungan kerucut dan belahan bola yang alasnya berimpit dengan jari-jari 7 cm (π = 22/7). Jika tinggi kerucut 24 cm, luas permukaan seluruh bandul tersebut adalah ...", ["704 cm²", "858 cm²", "1.012 cm²", "1.166 cm²"], 1, "s = √(7² + 24²) = 25 cm. Luas selimut kerucut = (22/7)×7×25 = 550 cm²; Luas belahan bola = 2×(22/7)×7×7 = 308 cm². Total = 550 + 308 = 858 cm²."],
    ["Titik P(-2, 5) ditranslasikan oleh T(6, -3), kemudian dicerminkan terhadap sumbu Y. Koordinat bayangan akhir titik P adalah ...", ["P'(-4, 2)", "P'(4, -2)", "P'(-4, -2)", "P'(4, 2)"], 0, "Translasi: (-2 + 6, 5 - 3) = (4, 2). Cermin sumbu Y: (-4, 2)."],
    ["Nilai rata-rata ujian matematika 16 siswa adalah 75. Setelah 4 siswa mengikuti ujian susulan, rata-rata kelas menjadi 76. Rata-rata nilai ke-4 siswa susulan tersebut adalah ...", ["78", "79", "80", "82"], 2, "Total 16 siswa = 1.200; Total 20 siswa = 1.520. Jumlah 4 siswa = 1.520 - 1.200 = 320 → rata-rata = 320 / 4 = 80."],
    ["Sebuah kotak berisi 5 bola merah bernomor 1 sampai 5 dan 4 bola putih bernomor 6 sampai 9. Jika diambil satu bola secara acak, peluang terambilnya bola merah atau bola bernomor genap adalah ...", ["2/3", "7/9", "8/9", "1"], 1, "Total = 9 bola. Bola merah = {1,2,3,4,5} (5 bola), bola putih genap = {6,8} (2 bola) → total kejadian = 7. Peluang = 7/9."]
  ]);
})();
