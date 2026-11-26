// File: soal/kls1_mtk_bab8_sesi3.js
// Kelas 1 SD - Matematika - Bab 8: Mengenal Diagram (Sesi 3)
window.BANK_SOAL_AKTIF = [
  {
    q: "Perhatikan diagram gambar cuaca selama 10 hari berikut! Cuaca apakah yang paling sering terjadi?",
    svg: "<svg width='260' height='115' viewBox='0 0 260 115' xmlns='http://w3.org'><rect width='260' height='115' rx='10' fill='#f0f9ff' stroke='#bae6fd'/><text x='14' y='32' font-size='12' font-weight='bold' fill='#0369a1'>Cerah   :</text><text x='80' y='34' font-size='17'>☀️☀️☀️☀️☀️</text><text x='14' y='64' font-size='12' font-weight='bold' fill='#0369a1'>Berawan :</text><text x='80' y='66' font-size='17'>⛅⛅⛅</text><text x='14' y='96' font-size='12' font-weight='bold' fill='#0369a1'>Hujan   :</text><text x='80' y='98' font-size='17'>🌧️🌧️</text></svg>",
    p: ["Cerah", "Berawan", "Hujan", "Cerah dan Hujan"],
    b: 0,
    bahas: "Cuaca Cerah terjadi sebanyak 5 hari (paling banyak), sedangkan Berawan 3 hari dan Hujan 2 hari."
  },
  {
    q: "Berdasarkan diagram cuaca di atas (Cerah 5, Berawan 3, Hujan 2), berapa hari terjadinya cuaca Hujan?",
    p: ["2 hari", "3 hari", "4 hari", "5 hari"],
    b: 0,
    bahas: "Terdapat 2 gambar awan hujan pada baris Hujan, artinya terjadi selama 2 hari."
  },
  {
    q: "Perhatikan diagram gambar makanan kesukaan siswa berikut! Makanan apakah yang paling sedikit peminatnya?",
    svg: "<svg width='260' height='115' viewBox='0 0 260 115' xmlns='http://w3.org'><rect width='260' height='115' rx='10' fill='#fff7ed' stroke='#fdba74'/><text x='14' y='32' font-size='12' font-weight='bold' fill='#9a3412'>Bakso  :</text><text x='80' y='34' font-size='17'>🍜🍜🍜🍜🍜🍜</text><text x='14' y='64' font-size='12' font-weight='bold' fill='#9a3412'>Roti   :</text><text x='80' y='66' font-size='17'>🍞🍞🍞🍞</text><text x='14' y='96' font-size='12' font-weight='bold' fill='#9a3412'>Sate   :</text><text x='80' y='98' font-size='17'>🍢🍢🍢</text></svg>",
    p: ["Bakso", "Roti", "Sate", "Bakso dan Roti"],
    b: 2,
    bahas: "Sate hanya disukai 3 siswa, lebih sedikit dibandingkan Roti (4) dan Bakso (6)."
  },
  {
    q: "Berdasarkan diagram makanan kesukaan di atas (Bakso 6, Roti 4, Sate 3), berapa jumlah seluruh siswa yang didata?",
    p: ["11 siswa", "12 siswa", "13 siswa", "14 siswa"],
    b: 2,
    bahas: "6 + 4 + 3 = 13 siswa."
  },
  {
    q: "Perhatikan diagram batang alat kebersihan kelas berikut! Alat kebersihan apakah yang berjumlah 6 buah?",
    svg: "<svg width='250' height='125' viewBox='0 0 250 125' xmlns='http://w3.org'><rect width='250' height='125' rx='10' fill='#f0fdf4' stroke='#86efac'/><line x1='30' y1='98' x2='230' y2='98' stroke='#334155' stroke-width='2'/><rect x='48' y='30' width='36' height='68' fill='#16a34a'/><text x='61' y='24' font-size='11' font-weight='bold'>6</text><text x='50' y='113' font-size='11' font-weight='bold'>Sapu</text><rect x='110' y='66' width='36' height='32' fill='#3b82f6'/><text x='123' y='60' font-size='11' font-weight='bold'>3</text><text x='112' y='113' font-size='11' font-weight='bold'>Pel</text><rect x='172' y='56' width='36' height='42' fill='#f59e0b'/><text x='185' y='50' font-size='11' font-weight='bold'>4</text><text x='168' y='113' font-size='11' font-weight='bold'>Ember</text></svg>",
    p: ["Sapu", "Pel", "Ember", "Pel dan Ember"],
    b: 0,
    bahas: "Batang hijau untuk Sapu memiliki angka 6 di atasnya."
  },
  {
    q: "Jika 1 gambar bintang mewakili 1 poin prestasi, maka siswa yang memperoleh 8 gambar bintang memiliki ... poin.",
    p: ["6 poin", "7 poin", "8 poin", "9 poin"],
    b: 2,
    bahas: "Setiap gambar bernilai 1, sehingga 8 gambar bintang sama dengan 8 poin."
  },
  {
    q: "Perhatikan diagram gambar hewan laut di akuarium raksasa berikut! Berapa banyak penyu yang terlihat?",
    svg: "<svg width='260' height='100' viewBox='0 0 260 100' xmlns='http://w3.org'><rect width='260' height='100' rx='10' fill='#e0f2fe' stroke='#38bdf8'/><text x='14' y='38' font-size='12' font-weight='bold' fill='#0369a1'>Gurita :</text><text x='80' y='40' font-size='18'>🐙🐙🐙🐙</text><text x='14' y='76' font-size='12' font-weight='bold' fill='#0369a1'>Penyu  :</text><text x='80' y='78' font-size='18'>🐢🐢🐢🐢🐢🐢🐢</text></svg>",
    p: ["5 penyu", "6 penyu", "7 penyu", "8 penyu"],
    b: 2,
    bahas: "Pada baris Penyu terdapat 7 gambar penyu."
  },
  {
    q: "Dari diagram hewan laut di atas (Gurita 4, Penyu 7), berapa selisih jumlah Penyu dan Gurita?",
    p: ["2 ekor", "3 ekor", "4 ekor", "11 ekor"],
    b: 1,
    bahas: "Selisihnya adalah 7 - 4 = 3 ekor."
  },
  {
    q: "Manakah diagram gambar di bawah ini yang menunjukkan data: Apel = 3 dan Pisang = 5?",
    p: ["Diagram A", "Diagram B", "Diagram C", "Diagram D"],
    pSvg: [
      "<svg width='115' height='65' viewBox='0 0 115 65' xmlns='http://w3.org'><text x='8' y='26' font-size='14'>🍎🍎🍎🍎</text><text x='6' y='50' font-size='13'>🍌🍌🍌🍌🍌</text></svg>",
      "<svg width='115' height='65' viewBox='0 0 115 65' xmlns='http://w3.org'><text x='8' y='26' font-size='14'>🍎🍎🍎</text><text x='6' y='50' font-size='13'>🍌🍌🍌🍌🍌</text></svg>",
      "<svg width='115' height='65' viewBox='0 0 115 65' xmlns='http://w3.org'><text x='6' y='26' font-size='13'>🍎🍎🍎🍎🍎</text><text x='8' y='50' font-size='14'>🍌🍌🍌</text></svg>",
      "<svg width='115' height='65' viewBox='0 0 115 65' xmlns='http://w3.org'><text x='8' y='26' font-size='14'>🍎🍎🍎</text><text x='8' y='50' font-size='14'>🍌🍌🍌🍌</text></svg>"
    ],
    b: 1,
    bahas: "Diagram B memuat 3 gambar apel di baris atas dan 5 gambar pisang di baris bawah."
  },
  {
    q: "Perhatikan diagram gambar bola di ruang olahraga berikut! Berapa jumlah seluruh bola pada diagram?",
    svg: "<svg width='260' height='100' viewBox='0 0 260 100' xmlns='http://w3.org'><rect width='260' height='100' rx='10' fill='#f8fafc' stroke='#cbd5e1'/><text x='14' y='38' font-size='12' font-weight='bold' fill='#0f172a'>Sepak  :</text><text x='80' y='40' font-size='17'>⚽⚽⚽⚽⚽</text><text x='14' y='76' font-size='12' font-weight='bold' fill='#0f172a'>Basket :</text><text x='80' y='78' font-size='17'>🏀🏀🏀🏀🏀</text></svg>",
    p: ["8 bola", "9 bola", "10 bola", "11 bola"],
    b: 2,
    bahas: "5 bola sepak + 5 bola basket = 10 bola seluruhnya."
  },

    {
    q: "Perhatikan diagram gambar mainan koleksi Udin berikut! Mainan apakah yang jumlahnya sama banyak?",
    svg: "<svg width='260' height='115' viewBox='0 0 260 115' xmlns='http://w3.org'><rect width='260' height='115' rx='10' fill='#eef2ff' stroke='#c7d2fe'/><text x='14' y='32' font-size='12' font-weight='bold' fill='#312e81'>Mobil  :</text><text x='80' y='34' font-size='17'>🚗🚗🚗🚗</text><text x='14' y='64' font-size='12' font-weight='bold' fill='#312e81'>Robot  :</text><text x='80' y='66' font-size='17'>🤖🤖🤖🤖</text><text x='14' y='96' font-size='12' font-weight='bold' fill='#312e81'>Pesawat:</text><text x='80' y='98' font-size='17'>✈️✈️</text></svg>",
    p: ["Mobil dan Pesawat", "Mobil dan Robot", "Robot dan Pesawat", "Semua sama banyak"],
    b: 1,
    bahas: "Mobil berjumlah 4 dan Robot juga berjumlah 4, sehingga keduanya sama banyak."
  },
  {
    q: "Agar diagram gambar mudah dipahami orang lain, setiap baris atau kolom diagram harus diberi ...",
    p: ["Warna hitam semua", "Nama atau label jenis data", "Garis melengkung", "Hiasan rumit"],
    b: 1,
    bahas: "Label atau nama kelompok membantu pembaca mengetahui arti setiap baris gambar pada diagram."
  },
  {
    q: "Perhatikan diagram batang kesukaan warna tas siswa berikut! Warna tas apakah yang paling sedikit dipilih?",
    svg: "<svg width='250' height='125' viewBox='0 0 250 125' xmlns='http://w3.org'><rect width='250' height='125' rx='10' fill='#faf5ff' stroke='#e9d5ff'/><line x1='30' y1='98' x2='230' y2='98' stroke='#334155' stroke-width='2'/><rect x='48' y='36' width='36' height='62' fill='#ef4444'/><text x='61' y='30' font-size='11' font-weight='bold'>6</text><text x='46' y='113' font-size='11' font-weight='bold'>Merah</text><rect x='110' y='24' width='36' height='74' fill='#1e293b'/><text x='123' y='18' font-size='11' font-weight='bold'>8</text><text x='110' y='113' font-size='11' font-weight='bold'>Hitam</text><rect x='172' y='68' width='36' height='30' fill='#ec4899'/><text x='185' y='62' font-size='11' font-weight='bold'>3</text><text x='174' y='113' font-size='11' font-weight='bold'>Pink</text></svg>",
    p: ["Merah", "Hitam", "Pink", "Merah dan Hitam"],
    b: 2,
    bahas: "Batang untuk warna Pink paling pendek dengan angka 3 siswa (paling sedikit)."
  },
  {
    q: "Berdasarkan diagram warna tas di atas (Merah 6, Hitam 8, Pink 3), urutan warna tas dari yang paling banyak dipilih adalah ...",
    p: ["Pink, Merah, Hitam", "Hitam, Merah, Pink", "Merah, Hitam, Pink", "Hitam, Pink, Merah"],
    b: 1,
    bahas: "Urutan dari jumlah terbanyak ke terkecil adalah Hitam (8), Merah (6), dan Pink (3)."
  },
  {
    q: "Perhatikan diagram gambar kue di toko roti berikut! Berapa jumlah donat dan croissant jika digabungkan?",
    svg: "<svg width='260' height='100' viewBox='0 0 260 100' xmlns='http://w3.org'><rect width='260' height='100' rx='10' fill='#fffbeb' stroke='#fde68a'/><text x='14' y='38' font-size='12' font-weight='bold' fill='#92400e'>Donat    :</text><text x='90' y='40' font-size='17'>🍩🍩🍩🍩🍩</text><text x='14' y='76' font-size='12' font-weight='bold' fill='#92400e'>Croissant:</text><text x='90' y='78' font-size='17'>🥐🥐🥐🥐</text></svg>",
    p: ["8 kue", "9 kue", "10 kue", "11 kue"],
    b: 1,
    bahas: "5 donat + 4 croissant = 9 kue seluruhnya."
  },
  {
    q: "Data hasil pengamatan benda-benda di sekitar yang disusun rapi agar mudah dibaca dan dibandingkan disebut ...",
    p: ["Dongeng", "Diagram", "Lagu anak", "Puisi"],
    b: 1,
    bahas: "Diagram adalah penyajian data secara visual agar informasi mudah dibaca dan dibandingkan."
  },
  {
    q: "Perhatikan diagram gambar pohon buah di kebun kakek! Pohon apakah yang berjumlah 5 batang?",
    svg: "<svg width='260' height='115' viewBox='0 0 260 115' xmlns='http://w3.org'><rect width='260' height='115' rx='10' fill='#f0fdf4' stroke='#86efac'/><text x='14' y='32' font-size='12' font-weight='bold' fill='#166534'>Mangga :</text><text x='80' y='34' font-size='17'>🥭🥭🥭🥭🥭</text><text x='14' y='64' font-size='12' font-weight='bold' fill='#166534'>Jeruk  :</text><text x='80' y='66' font-size='17'>🍊🍊🍊🍊</text><text x='14' y='96' font-size='12' font-weight='bold' fill='#166534'>Pisang :</text><text x='80' y='98' font-size='17'>🍌🍌🍌🍌🍌🍌</text></svg>",
    p: ["Mangga", "Jeruk", "Pisang", "Mangga dan Jeruk"],
    b: 0,
    bahas: "Pada baris Mangga terdapat 5 gambar mangga."
  },
  {
    q: "Dalam sebuah diagram data: Pensil Lani = 9, Pensil Siti = 6, Pensil Dayu = 10. Siapakah yang memiliki pensil paling banyak?",
    p: ["Lani", "Siti", "Dayu", "Lani dan Dayu"],
    b: 2,
    bahas: "10 pensil milik Dayu lebih banyak dibandingkan milik Lani (9) dan Siti (6)."
  },
  {
    q: "Berapa selisih antara pemilik pensil terbanyak (Dayu = 10) dan pemilik pensil paling sedikit (Siti = 6)?",
    p: ["3 pensil", "4 pensil", "5 pensil", "16 pensil"],
    b: 1,
    bahas: "Selisihnya adalah 10 - 6 = 4 pensil."
  },
  {
    q: "Perhatikan diagram gambar serangga di taman berikut! Berapa banyak seluruh serangga pada diagram tersebut?",
    svg: "<svg width='260' height='100' viewBox='0 0 260 100' xmlns='http://w3.org'><rect width='260' height='100' rx='10' fill='#fefce8' stroke='#fde047'/><text x='14' y='38' font-size='12' font-weight='bold' fill='#854d0e'>Lebah :</text><text x='80' y='40' font-size='17'>🐝🐝🐝🐝🐝🐝</text><text x='14' y='76' font-size='12' font-weight='bold' fill='#854d0e'>Kupu  :</text><text x='80' y='78' font-size='17'>🦋🦋🦋🦋</text></svg>",
    p: ["8 serangga", "9 serangga", "10 serangga", "11 serangga"],
    b: 2,
    bahas: "6 lebah + 4 kupu-kupu = 10 serangga seluruhnya."
  }
];
