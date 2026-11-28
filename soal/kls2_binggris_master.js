// File: soal/kls2_binggris_master.js
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u1 = E([
    ["What is 'apel' in English?", ["Banana", "Apple", "Orange", "Mango"], 1, "Apple artinya apel."],
    ["What is 'pisang' in English?", ["Grape", "Banana", "Watermelon", "Papaya"], 1, "Banana artinya pisang."],
    ["What is 'jeruk' in English?", ["Strawberry", "Orange", "Pineapple", "Avocado"], 1, "Orange artinya jeruk."],
    ["What is 'semangka' in English?", ["Melon", "Watermelon", "Durian", "Guava"], 1, "Watermelon artinya semangka."],
    ["What is 'anggur' in English?", ["Apple", "Grape", "Mango", "Pear"], 1, "Grape artinya anggur."],
    ["A: 'Do you like banana?' B: 'Yes, I ...'", ["do not", "do", "am", "is"], 1, "Jawaban singkat positif untuk 'Do you...' adalah 'Yes, I do.'"],
    ["A: 'Do you like durian?' B: 'No, I ...'", ["do", "don't", "am not", "isn't"], 1, "Jawaban singkat negatif untuk 'Do you...' adalah 'No, I don't.'"],
    ["I like ... (mangga). It is sweet.", ["apple", "mango", "banana", "orange"], 1, "Mango artinya mangga."],
    ["Siti ... strawberries. They are fresh.", ["like", "likes", "liking", "liked"], 1, "Subjek tunggal (Siti/She) menggunakan kata kerja 'likes'."],
    ["They ... watermelon very much.", ["likes", "like", "is like", "are like"], 1, "Subjek jamak (They) menggunakan kata kerja 'like'."],
    ["What color is a ripe banana?", ["Blue", "Yellow", "Purple", "Black"], 1, "Pisang matang berwarna kuning (yellow)."],
    ["What is 'nanas' in English?", ["Watermelon", "Pineapple", "Papaya", "Coconut"], 1, "Pineapple artinya nanas."],
    ["What is 'alpukat' in English?", ["Guava", "Avocado", "Starfruit", "Jackfruit"], 1, "Avocado artinya alpukat."],
    ["My mother ... like sour oranges.", ["don't", "doesn't", "aren't", "isn't"], 1, "Subjek tunggal (My mother) kalimat negatif memakai 'doesn't'."],
    ["Arrange the words: 'like - I - apple - red'", ["I apple like red.", "I like red apple.", "Red like I apple.", "Like I red apple."], 1, "Susunan kalimat benar: I like red apple."],
    ["'Saya suka pepaya' in English is ...", ["I like mango.", "I like papaya.", "I like guava.", "I like melon."], 1, "Papaya artinya pepaya."],
    ["What is 'jambu biji' in English?", ["Pear", "Guava", "Grape", "Cherry"], 1, "Guava artinya jambu biji."],
    ["A: 'What fruit do you like?' B: '...'", ["I am seven years old.", "I like orange and mango.", "My name is Budi.", "Good morning."], 1, "Menjawab pertanyaan buah kesukaan."],
    ["Watermelon is big and green outside, but ... inside.", ["blue", "red", "black", "purple"], 1, "Daging buah semangka berwarna merah (red)."],
    ["Eating fruits every day makes our body ...", ["sick", "healthy and strong", "sleepy", "sad"], 1, "Buah-buahan menyehatkan tubuh (healthy)."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab1_sesi1"] = [...u1];
  window.BANK_SOAL_MASTER["kls2_binggris_bab1_sesi2"] = [...u1.slice(7), ...u1.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab1_sesi3"] = [...u1.slice(14), ...u1.slice(0, 14)];
})();
(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u2 = E([
    ["What is 'ayah' in English?", ["Mother", "Father", "Brother", "Grandfather"], 1, "Father artinya ayah."],
    ["What is 'ibu' in English?", ["Sister", "Mother", "Aunt", "Grandmother"], 1, "Mother artinya ibu."],
    ["What is 'kakek' in English?", ["Uncle", "Grandfather", "Father", "Brother"], 1, "Grandfather artinya kakek."],
    ["What is 'nenek' in English?", ["Aunt", "Grandmother", "Mother", "Sister"], 1, "Grandmother artinya nenek."],
    ["My father ... watermelon.", ["like", "likes", "liking", "are like"], 1, "My father (He) menggunakan 'likes'."],
    ["My grandmother ... like spicy food. (tidak suka)", ["don't", "doesn't", "isn't", "aren't"], 1, "Subjek tunggal (My grandmother) memakai 'doesn't'."],
    ["A: 'Does your sister like mango?' B: 'Yes, she ...'", ["do", "does", "is", "has"], 1, "Pertanyaan diawali 'Does she...' dijawab 'Yes, she does.'"],
    ["A: 'Does your brother like avocado?' B: 'No, he ...'", ["don't", "doesn't", "isn't", "hasn't"], 1, "Jawaban negatif untuk 'Does he...' adalah 'No, he doesn't.'"],
    ["'Saudara laki-laki' in English is ...", ["Sister", "Brother", "Uncle", "Cousin"], 1, "Brother artinya saudara laki-laki."],
    ["'Saudara perempuan' in English is ...", ["Brother", "Sister", "Mother", "Aunt"], 1, "Sister artinya saudara perempuan."],
    ["He is my uncle. 'Uncle' means ...", ["Bibi", "Paman", "Kakek", "Sepupu"], 1, "Uncle artinya paman."],
    ["She is my aunt. 'Aunt' means ...", ["Nenek", "Bibi / Tante", "Ibu", "Kakak"], 1, "Aunt artinya bibi."],
    ["'Ibu saya suka jeruk' in English is ...", ["My father likes orange.", "My mother likes orange.", "My sister likes apple.", "My mother like orange."], 1, "My mother likes orange."],
    ["We ... our family very much.", ["loves", "love", "loving", "is love"], 1, "Subjek 'We' menggunakan kata kerja 'love'."],
    ["A: 'What fruit does your father like?' B: '...'", ["I like banana.", "He likes watermelon.", "She likes grape.", "They like apple."], 1, "Kata ganti untuk father adalah 'He'."],
    ["A: 'What fruit does your mother like?' B: '...'", ["He likes mango.", "She likes papaya.", "I like orange.", "We like melon."], 1, "Kata ganti untuk mother adalah 'She'."],
    ["Arrange the words: 'likes - My - grandfather - banana'", ["Grandfather my likes banana.", "My grandfather likes banana.", "Banana likes my grandfather.", "Likes my grandfather banana."], 1, "Susunan benar: My grandfather likes banana."],
    ["How many people are in a small family: father, mother, and one child?", ["Two", "Three", "Four", "Five"], 1, "Ayah, ibu, dan satu anak berjumlah tiga (three)."],
    ["Rani and Budi ... eating sweet mangoes together.", ["likes", "like", "is like", "was like"], 1, "Dua orang (jamak) memakai 'like'."],
    ["We must respect and ... our parents.", ["hate", "love / obey", "ignore", "forget"], 1, "Menghormati dan menyayangi orang tua adalah kewajiban anak."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab2_sesi1"] = [...u2];
  window.BANK_SOAL_MASTER["kls2_binggris_bab2_sesi2"] = [...u2.slice(7), ...u2.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab2_sesi3"] = [...u2.slice(14), ...u2.slice(0, 14)];
})();
(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u3 = E([
    ["What is 'pensil' in English?", ["Pen", "Pencil", "Ruler", "Eraser"], 1, "Pencil artinya pensil."],
    ["What is 'pulpen / pena' in English?", ["Pencil", "Pen", "Book", "Bag"], 1, "Pen artinya pena atau pulpen."],
    ["What is 'penggaris' in English?", ["Eraser", "Ruler", "Sharpener", "Notebook"], 1, "Ruler artinya penggaris."],
    ["What is 'penghapus' in English?", ["Ruler", "Eraser / Rubber", "Pencil case", "Crayon"], 1, "Eraser artinya penghapus."],
    ["What is 'tas sekolah' in English?", ["Desk", "Bag / School bag", "Chair", "Board"], 1, "Bag artinya tas."],
    ["The book is ... the table. (di atas)", ["in", "on", "under", "beside"], 1, "'On' berarti di atas permukaan."],
    ["The pencil is ... the pencil case. (di dalam)", ["on", "in", "under", "behind"], 1, "'In' berarti di dalam."],
    ["The ball is ... the chair. (di bawah)", ["on", "under", "in", "above"], 1, "'Under' berarti di bawah."],
    ["What is 'meja belajar' in English?", ["Chair", "Desk / Table", "Window", "Door"], 1, "Desk/table artinya meja."],
    ["What is 'kursi' in English?", ["Table", "Chair", "Cupboard", "Floor"], 1, "Chair artinya kursi."],
    ["What is 'tempat pensil' in English?", ["Bookcase", "Pencil case", "Lunch box", "Trash bin"], 1, "Pencil case artinya tempat pensil."],
    ["A: 'Where is my ruler?' B: 'It is ... your bag.' (di dalam)", ["on", "in", "under", "at"], 1, "Di dalam tas menggunakan kata depan 'in'."],
    ["What is 'rautan pensil' in English?", ["Eraser", "Sharpener", "Ruler", "Glue"], 1, "Sharpener artinya rautan pensil."],
    ["What is 'papan tulis' in English?", ["Door", "Whiteboard / Blackboard", "Window", "Wall"], 1, "Whiteboard artinya papan tulis putih."],
    ["'Buku tulis saya di atas meja' in English is ...", ["My book is under the table.", "My notebook is on the table.", "My book is in the table.", "My pen is on the chair."], 1, "On the table = di atas meja."],
    ["We use a ... to draw a straight line.", ["eraser", "ruler", "bag", "book"], 1, "Penggaris (ruler) dipakai menggambar garis lurus."],
    ["We use an ... to erase wrong pencil writing.", ["sharpener", "eraser", "pen", "ruler"], 1, "Penghapus (eraser) menghapus tulisan pensil."],
    ["Arrange the words: 'under - The - cat - is - table - the'", ["The table is under the cat.", "The cat is under the table.", "Under the table is cat.", "Cat is the under table."], 1, "Susunan benar: The cat is under the table."],
    ["There are five ... in my bag. (buku)", ["book", "books", "a book", "bookes"], 1, "Jumlah lebih dari satu (five) menggunakan bentuk jamak 'books'."],
    ["Keep your school things tidy in your ...", ["floor", "bag", "yard", "shoe"], 1, "Menyimpan perlengkapan sekolah rapi di dalam tas."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab3_sesi1"] = [...u3];
  window.BANK_SOAL_MASTER["kls2_binggris_bab3_sesi2"] = [...u3.slice(7), ...u3.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab3_sesi3"] = [...u3.slice(14), ...u3.slice(0, 14)];
})();
(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u4 = E([
    ["What number comes after eleven (11)?", ["Ten", "Twelve", "Thirteen", "Fifteen"], 1, "Setelah 11 adalah 12 (twelve)."],
    ["What is 'lima belas' in English?", ["Fifty", "Fifteen", "Five", "Fourteen"], 1, "15 dalam bahasa Inggris adalah fifteen."],
    ["What is 'dua puluh' in English?", ["Twelve", "Twenty", "Two", "Thirty"], 1, "20 dalam bahasa Inggris adalah twenty."],
    ["How do you write '13' in English?", ["Thirty", "Thirteen", "Three", "Threeteen"], 1, "13 ditulis thirteen."],
    ["How do you write '18' in English?", ["Eighty", "Eighteen", "Eight", "Eightteen"], 1, "18 ditulis eighteen (hanya satu huruf 't')."],
    ["Ten plus five equals ...", ["Fourteen", "Fifteen", "Sixteen", "Seventeen"], 1, "10 + 5 = 15 (fifteen)."],
    ["Twenty minus six equals ...", ["Thirteen", "Fourteen", "Fifteen", "Sixteen"], 1, "20 - 6 = 14 (fourteen)."],
    ["There ... one whiteboard in the classroom.", ["are", "is", "am", "were"], 1, "Benda tunggal (one whiteboard) menggunakan 'There is'."],
    ["There ... sixteen chairs in the classroom.", ["is", "are", "am", "was"], 1, "Benda jamak (sixteen chairs) menggunakan 'There are'."],
    ["A: 'How many pencils do you have?' B: 'I have ... pencils.' (11)", ["ten", "eleven", "twelve", "twenty"], 1, "11 dalam bahasa Inggris adalah eleven."],
    ["What number is between sixteen and eighteen?", ["Fifteen", "Seventeen", "Nineteen", "Twenty"], 1, "Di antara 16 dan 18 adalah 17 (seventeen)."],
    ["What is 'sembilan belas' in English?", ["Ninety", "Nineteen", "Nine", "Sixteen"], 1, "19 adalah nineteen."],
    ["Nine plus eight equals ...", ["Sixteen", "Seventeen", "Eighteen", "Nineteen"], 1, "9 + 8 = 17 (seventeen)."],
    ["'Ada dua puluh siswa di kelas' in English is ...", ["There is twenty students in the class.", "There are twenty students in the class.", "There are twelve students in the class.", "There is twelve students in the class."], 1, "Twenty students (jamak) memakai 'There are'."],
    ["Count the letters in the word 'WATERMELON'. How many letters are there?", ["Eight", "Ten", "Nine", "Eleven"], 1, "W-A-T-E-R-M-E-L-O-N berjumlah 10 huruf (ten)."],
    ["Two times eight equals ...", ["Fourteen", "Sixteen", "Eighteen", "Twelve"], 1, "2 × 8 = 16 (sixteen)."],
    ["A: 'How many erasers are there?' B: 'There is ... eraser.'", ["two", "one", "three", "five"], 1, "'There is' diikuti benda tunggal (one eraser)."],
    ["What number comes before fourteen (14)?", ["Fifteen", "Thirteen", "Twelve", "Eleven"], 1, "Sebelum 14 adalah 13 (thirteen)."],
    ["Arrange the numbers from smallest to largest: fifteen, eleven, nineteen, thirteen", ["Nineteen, fifteen, thirteen, eleven", "Eleven, thirteen, fifteen, nineteen", "Thirteen, eleven, fifteen, nineteen", "Eleven, fifteen, thirteen, nineteen"], 1, "Urutan: 11, 13, 15, 19."],
    ["Counting objects carefully helps us learn numbers and ...", ["sleeping", "mathematics", "singing", "drawing"], 1, "Berhitung melatih kemampuan numerasi dasar."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab4_sesi1"] = [...u4];
  window.BANK_SOAL_MASTER["kls2_binggris_bab4_sesi2"] = [...u4.slice(7), ...u4.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab4_sesi3"] = [...u4.slice(14), ...u4.slice(0, 14)];
})();
(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u5 = E([
    ["What is 'sapi' in English?", ["Goat", "Cow", "Horse", "Sheep"], 1, "Cow artinya sapi."],
    ["What is 'kambing' in English?", ["Cow", "Goat", "Duck", "Chicken"], 1, "Goat artinya kambing."],
    ["What is 'bebek' in English?", ["Chicken", "Duck", "Bird", "Fish"], 1, "Duck artinya bebek."],
    ["What is 'ayam' in English?", ["Duck", "Chicken", "Bird", "Rabbit"], 1, "Chicken artinya ayam."],
    ["What is 'kuda' in English?", ["Cow", "Horse", "Buffalo", "Donkey"], 1, "Horse artinya kuda."],
    ["What is 'domba' in English?", ["Goat", "Sheep", "Cow", "Cat"], 1, "Sheep artinya domba."],
    ["What is 'kelinci' in English?", ["Cat", "Rabbit", "Mouse", "Frog"], 1, "Rabbit artinya kelinci."],
    ["What is 'ikan' in English?", ["Bird", "Fish", "Duck", "Snake"], 1, "Fish artinya ikan."],
    ["What is 'burung' in English?", ["Fish", "Bird", "Butterfly", "Bee"], 1, "Bird artinya burung."],
    ["A cow gives us fresh ... to drink.", ["water", "milk", "juice", "tea"], 1, "Sapi menghasilkan susu segar (milk)."],
    ["A chicken lays ... every morning.", ["milk", "eggs", "wool", "honey"], 1, "Ayam bertelur (eggs)."],
    ["The fish swims ... the pond. (di dalam kolam)", ["on", "in", "under", "above"], 1, "Ikan berenang di dalam (in) kolam."],
    ["The bird is flying ... the tree. (di atas pohon)", ["in", "above / in", "under", "behind"], 1, "Burung terbang di atas pepohonan."],
    ["A rabbit likes eating ...", ["fish", "carrots", "bones", "meat"], 1, "Kelinci gemar makan wortel (carrots)."],
    ["What animal says 'Moo-moo'?", ["Duck", "Cow", "Cat", "Goat"], 1, "Suara sapi adalah 'moo'."],
    ["What animal says 'Quack-quack'?", ["Chicken", "Duck", "Horse", "Sheep"], 1, "Suara bebek adalah 'quack'."],
    ["Farmer keeps cows, goats, and chickens on the ...", ["hospital", "farm", "library", "bank"], 1, "Farm artinya peternakan atau ladang."],
    ["A: 'Where is the cat?' B: 'It is ... the sofa.' (di belakang)", ["in", "behind", "on", "under"], 1, "Behind artinya di belakang."],
    ["A: 'Where is the rabbit?' B: 'It is ... the bush.' (di samping)", ["under", "beside / next to", "in", "on"], 1, "Beside / next to artinya di samping."],
    ["We must feed and take care of our pets with ...", ["anger", "love and kindness", "laziness", "fear"], 1, "Menyayangi hewan peliharaan adalah sikap terpuji."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab5_sesi1"] = [...u5];
  window.BANK_SOAL_MASTER["kls2_binggris_bab5_sesi2"] = [...u5.slice(7), ...u5.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab5_sesi3"] = [...u5.slice(14), ...u5.slice(0, 14)];
})();
(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u6 = E([
    ["Mr. Ahmad is my father. ... is a teacher.", ["She", "He", "It", "They"], 1, "Kata ganti subjek untuk laki-laki tunggal adalah 'He'."],
    ["Mrs. Siti is my mother. ... is kind.", ["He", "She", "We", "You"], 1, "Kata ganti subjek untuk perempuan tunggal adalah 'She'."],
    ["Rani is my younger sister. ... is five years old.", ["He", "She", "They", "It"], 1, "Sister adalah perempuan, sehingga kata gantinya 'She'."],
    ["Budi is my elder brother. ... likes playing football.", ["She", "He", "It", "We"], 1, "Brother adalah laki-laki, sehingga kata gantinya 'He'."],
    ["A: 'Who is she?' B: '... is my grandmother.'", ["He", "She", "They", "I"], 1, "Pertanyaan 'Who is she?' dijawab 'She is...'."],
    ["A: 'Who is he?' B: '... is my grandfather.'", ["She", "He", "We", "You"], 1, "Pertanyaan 'Who is he?' dijawab 'He is...'."],
    ["What is 'kakak laki-laki' in English?", ["Younger brother", "Elder brother", "Elder sister", "Cousin"], 1, "Elder brother artinya kakak laki-laki."],
    ["What is 'adik perempuan' in English?", ["Elder sister", "Younger sister", "Aunt", "Mother"], 1, "Younger sister artinya adik perempuan."],
    ["My uncle and aunt are my parents' brother and sister. ... are very friendly.", ["He", "They", "She", "It"], 1, "Kata ganti untuk dua orang atau lebih (jamak) adalah 'They'."],
    ["My name is Dika. ... am a student of grade two.", ["You", "I", "He", "She"], 1, "Subjek 'I' berpasangan dengan to be 'am'."],
    ["Sinta and I are classmates. ... study together every day.", ["They", "We", "He", "She"], 1, "Sinta dan saya = kami ('We')."],
    ["Look at that cute cat! ... is sleeping on the sofa.", ["He", "It", "She", "They"], 1, "Kata ganti untuk hewan atau benda tunggal adalah 'It'."],
    ["He is my father's brother. He is my ...", ["grandfather", "uncle", "cousin", "nephew"], 1, "Saudara laki-laki ayah adalah paman (uncle)."],
    ["She is my mother's sister. She is my ...", ["grandmother", "aunt", "sister", "niece"], 1, "Saudara perempuan ibu adalah bibi (aunt)."],
    ["The children of my uncle and aunt are my ...", ["parents", "cousins", "grandparents", "teachers"], 1, "Anak dari paman dan bibi adalah sepupu (cousins)."],
    ["'Dia (perempuan) adalah bibi saya' in English is ...", ["He is my uncle.", "She is my aunt.", "She is my sister.", "He is my father."], 1, "She is my aunt."],
    ["'Dia (laki-laki) adalah paman saya' in English is ...", ["She is my aunt.", "He is my uncle.", "He is my brother.", "She is my mother."], 1, "He is my uncle."],
    ["My grandfather is old, ... he is still strong.", ["and", "but", "or", "so"], 1, "'But' artinya tetapi (menyatakan pertentangan)."],
    ["Arrange the words: 'is - She - my - sister - elder'", ["My sister elder is she.", "She is my elder sister.", "Elder sister my is she.", "Is she my elder sister."], 1, "Susunan kalimat benar: She is my elder sister."],
    ["A happy family always helps and ... each other.", ["fights", "cares for / loves", "leaves", "ignores"], 1, "Keluarga bahagia saling menyayangi dan membantu."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab6_sesi1"] = [...u6];
  window.BANK_SOAL_MASTER["kls2_binggris_bab6_sesi2"] = [...u6.slice(7), ...u6.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab6_sesi3"] = [...u6.slice(14), ...u6.slice(0, 14)];
})();
(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u7 = E([
    ["What is the opposite (lawan kata) of 'tall' (tinggi)?", ["Big", "Short", "Fat", "Long"], 1, "Tall (tinggi) berlawanan dengan short (pendek)."],
    ["What is the opposite of 'big' (besar)?", ["Tall", "Small", "Thin", "Young"], 1, "Big (besar) berlawanan dengan small (kecil)."],
    ["What is the opposite of 'fat' (gemuk)?", ["Short", "Thin / Slim", "Old", "Fast"], 1, "Fat berlawanan dengan thin atau slim (kurus/langsing)."],
    ["What is the opposite of 'old' (tua)?", ["Tall", "Young", "Long", "Heavy"], 1, "Old (tua) berlawanan dengan young (muda)."],
    ["What is the opposite of 'long' (panjang)?", ["Big", "Short", "Fat", "Clean"], 1, "Long (panjang) berlawanan dengan short (pendek)."],
    ["An elephant is very ..., while an ant is very small.", ["short", "big", "thin", "young"], 1, "Gajah (elephant) bertubuh sangat besar (big)."],
    ["A giraffe has a very ... neck.", ["short", "long", "small", "fat"], 1, "Jerapah memiliki leher yang panjang (long)."],
    ["My grandfather is 70 years old. He is ...", ["young", "old", "small", "short"], 1, "Usia 70 tahun tergolong tua (old)."],
    ["My baby brother is 1 year old. He is ...", ["old", "young", "tall", "big"], 1, "Bayi berusia 1 tahun masih muda/kecil (young)."],
    ["Rani has ... hair. (rambut panjang)", ["short", "long", "curly", "black"], 1, "Long hair artinya rambut panjang."],
    ["Budi has ... hair. (rambut pendek)", ["long", "short", "straight", "brown"], 1, "Short hair artinya rambut pendek."],
    ["'Kakek saya tinggi dan kurus' in English is ...", ["My grandfather is short and fat.", "My grandfather is tall and thin.", "My grandmother is tall and thin.", "My father is young and big."], 1, "Tall = tinggi, thin = kurus."],
    ["A: 'Is your sister tall?' B: 'No, she isn't. She is ...'", ["big", "short", "old", "long"], 1, "Lawan kata tinggi (tall) adalah pendek (short)."],
    ["The basketball player is very ... (tinggi).", ["short", "tall", "small", "thin"], 1, "Pemain basket bertubuh tinggi (tall)."],
    ["A mouse is ..., while a buffalo is big.", ["tall", "small", "long", "old"], 1, "Tikus (mouse) bertubuh kecil (small)."],
    ["What is 'rambut keriting' in English?", ["Straight hair", "Curly hair", "Long hair", "Short hair"], 1, "Curly hair artinya rambut keriting."],
    ["What is 'rambut lurus' in English?", ["Curly hair", "Straight hair", "Wavy hair", "White hair"], 1, "Straight hair artinya rambut lurus."],
    ["Look at the two rulers. Ruler A is 30 cm and Ruler B is 15 cm. Ruler A is ...", ["short", "long", "small", "old"], 1, "30 cm lebih panjang (long) daripada 15 cm."],
    ["Arrange the words: 'is - My - father - tall - strong - and'", ["My father is tall and strong.", "Tall and strong is my father.", "My is father tall and strong.", "Father my is strong and tall."], 1, "Susunan kalimat benar: My father is tall and strong."],
    ["Even though people are tall or short, big or small, we must ... everyone.", ["laugh at", "respect and be kind to", "hate", "ignore"], 1, "Menghormati perbedaan fisik setiap orang adalah sikap mulia."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab7_sesi1"] = [...u7];
  window.BANK_SOAL_MASTER["kls2_binggris_bab7_sesi2"] = [...u7.slice(7), ...u7.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab7_sesi3"] = [...u7.slice(14), ...u7.slice(0, 14)];
})();
(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u8 = E([
    ["What is 'jerapah' in English?", ["Zebra", "Giraffe", "Elephant", "Lion"], 1, "Giraffe artinya jerapah."],
    ["What is 'gajah' in English?", ["Tiger", "Elephant", "Monkey", "Bear"], 1, "Elephant artinya gajah."],
    ["What is 'singa' in English?", ["Tiger", "Lion", "Wolf", "Fox"], 1, "Lion artinya singa."],
    ["What is 'harimau' in English?", ["Lion", "Tiger", "Leopard", "Cat"], 1, "Tiger artinya harimau."],
    ["What is 'monyet / kera' in English?", ["Snake", "Monkey", "Crocodile", "Deer"], 1, "Monkey artinya monyet."],
    ["What is 'ular' in English?", ["Crocodile", "Snake", "Lizard", "Turtle"], 1, "Snake artinya ular."],
    ["What is 'buaya' in English?", ["Snake", "Crocodile", "Hippo", "Rhino"], 1, "Crocodile artinya buaya."],
    ["What is 'kura-kura' in English?", ["Rabbit", "Turtle / Tortoise", "Frog", "Snail"], 1, "Turtle artinya kura-kura."],
    ["A zebra has black and white ... on its body.", ["spots", "stripes", "feathers", "scales"], 1, "Zebra memiliki belang (stripes) hitam dan putih."],
    ["A monkey likes eating ... and climbing trees.", ["meat", "bananas", "grass", "fish"], 1, "Monyet gemar makan pisang (bananas)."],
    ["A turtle walks very ..., while a rabbit runs fast.", ["fast", "slowly / slow", "high", "tall"], 1, "Kura-kura berjalan lambat (slow)."],
    ["Where can we see many wild animals safely with our family?", ["At the hospital", "At the zoo", "At the post office", "At the bank"], 1, "Zoo artinya kebun binatang."],
    ["An elephant has a long ... and two big ears.", ["tail", "trunk", "neck", "beak"], 1, "Trunk artinya belalai gajah."],
    ["A snake has no legs. Its body is ... and thin.", ["short", "long", "big", "fat"], 1, "Ular bertubuh panjang (long) dan tidak berkaki."],
    ["A: 'Is the lion big and strong?' B: 'Yes, it ...'", ["are", "is", "do", "am"], 1, "Pertanyaan diawali 'Is the lion...' dijawab 'Yes, it is.'"],
    ["A: 'Is the crocodile small?' B: 'No, it isn't. It is ...'", ["short", "big and long", "thin", "young"], 1, "Buaya berukuran besar dan panjang."],
    ["A bird has two wings and can ... in the sky.", ["swim", "fly", "run", "jump"], 1, "Fly artinya terbang."],
    ["What is 'rusa / kijang' in English?", ["Bear", "Deer", "Camel", "Zebra"], 1, "Deer artinya rusa."],
    ["Arrange the words: 'is - The - elephant - big - grey - and'", ["The elephant is big and grey.", "Big and grey is elephant the.", "Elephant the is grey and big.", "Is the elephant big and grey."], 1, "Susunan benar: The elephant is big and grey."],
    ["At the zoo, we must not ... the animals carelessly.", ["look at", "feed or disturb", "take photos of", "learn about"], 1, "Dilarang memberi makan sembarangan atau mengganggu hewan di kebun binatang."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab8_sesi1"] = [...u8];
  window.BANK_SOAL_MASTER["kls2_binggris_bab8_sesi2"] = [...u8.slice(7), ...u8.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab8_sesi3"] = [...u8.slice(14), ...u8.slice(0, 14)];
})();
(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u9 = E([
    ["What is 'membaca' in English?", ["Writing", "Reading", "Drawing", "Singing"], 1, "Reading artinya sedang membaca."],
    ["What is 'menulis' in English?", ["Reading", "Writing", "Listening", "Speaking"], 1, "Writing artinya sedang menulis."],
    ["What is 'bermain' in English?", ["Sleeping", "Playing", "Eating", "Drinking"], 1, "Playing artinya sedang bermain."],
    ["What is 'makan' in English?", ["Drinking", "Eating", "Cooking", "Washing"], 1, "Eating artinya sedang makan."],
    ["What is 'minum' in English?", ["Eating", "Drinking", "Swimming", "Running"], 1, "Drinking artinya sedang minum."],
    ["I ... reading a storybook in the library.", ["is", "am", "are", "do"], 1, "Subjek 'I' berpasangan dengan 'am'."],
    ["She ... writing a letter on her desk.", ["am", "is", "are", "were"], 1, "Subjek tunggal 'She' berpasangan dengan 'is'."],
    ["They ... playing football in the school yard.", ["is", "are", "am", "was"], 1, "Subjek jamak 'They' berpasangan dengan 'are'."],
    ["A: 'What are you doing?' B: 'I am ... a picture.' (menggambar)", ["singing", "drawing", "sleeping", "jumping"], 1, "Drawing artinya menggambar."],
    ["A: 'What is Budi doing?' B: 'He is ... milk.' (minum)", ["eating", "drinking", "reading", "writing"], 1, "Drinking milk = sedang minum susu."],
    ["My mother is ... delicious food in the kitchen.", ["sleeping", "cooking", "swimming", "driving"], 1, "Cooking in the kitchen = memasak di dapur."],
    ["What is 'menyanyi' in English?", ["Dancing", "Singing", "Running", "Walking"], 1, "Singing artinya menyanyi."],
    ["What is 'berenang' in English?", ["Running", "Swimming", "Jumping", "Cycling"], 1, "Swimming artinya berenang."],
    ["The students are ... to the teacher carefully.", ["sleeping", "listening", "eating", "playing"], 1, "Listening to the teacher = mendengarkan guru."],
    ["We ... studying English in the classroom now.", ["is", "are", "am", "does"], 1, "Subjek 'We' menggunakan to be 'are'."],
    ["What is 'tidur' in English?", ["Waking up", "Sleeping", "Standing", "Sitting"], 1, "Sleeping artinya tidur."],
    ["A: 'Are you eating fried rice?' B: 'Yes, I ...'", ["is", "am", "are", "do"], 1, "Pertanyaan 'Are you...' dijawab 'Yes, I am.'"],
    ["'Dia (perempuan) sedang menari' in English is ...", ["She is singing.", "She is dancing.", "He is dancing.", "She is drawing."], 1, "Dancing artinya menari."],
    ["Arrange the words: 'is - He - watering - flowers - the'", ["Watering he is the flowers.", "He is watering the flowers.", "The flowers is he watering.", "Is he watering the flowers."], 1, "Susunan benar: He is watering the flowers."],
    ["When the teacher is explaining, students should be ... attentively.", ["playing", "listening and studying", "sleeping", "shouting"], 1, "Mendengarkan dan belajar dengan tekun saat guru mengajar."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab9_sesi1"] = [...u9];
  window.BANK_SOAL_MASTER["kls2_binggris_bab9_sesi2"] = [...u9.slice(7), ...u9.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab9_sesi3"] = [...u9.slice(14), ...u9.slice(0, 14)];
})();
(function() {
  const E = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const u10 = E([
    ["What is 'sepeda' in English?", ["Car", "Bike / Bicycle", "Bus", "Train"], 1, "Bike atau bicycle artinya sepeda."],
    ["What is 'mobil' in English?", ["Motorcycle", "Car", "Truck", "Boat"], 1, "Car artinya mobil."],
    ["What is 'sepeda motor' in English?", ["Bicycle", "Motorcycle / Motorbike", "Plane", "Ship"], 1, "Motorcycle artinya sepeda motor."],
    ["What is 'kereta api' in English?", ["Bus", "Train", "Plane", "Taxi"], 1, "Train artinya kereta api."],
    ["What is 'pesawat terbang' in English?", ["Ship", "Plane / Airplane", "Helicopter", "Train"], 1, "Plane artinya pesawat terbang."],
    ["What is 'kapal laut' in English?", ["Car", "Ship / Boat", "Bus", "Bike"], 1, "Ship artinya kapal laut."],
    ["What is 'becak' in English?", ["Taxi", "Pedicab", "Truck", "Train"], 1, "Pedicab adalah becak tradisional."],
    ["Siti's house is near the school. She goes to school on ...", ["car", "foot (berjalan kaki)", "plane", "ship"], 1, "'On foot' artinya berjalan kaki."],
    ["Budi goes to school ... bike every morning.", ["on", "by", "in", "at"], 1, "Menggunakan kendaraan memakai kata depan 'by' (by bike, by car)."],
    ["A: 'How do you go to school?' B: 'I go to school ... bus.'", ["on", "by", "in", "under"], 1, "By bus = naik bus."],
    ["A plane flies in the ...", ["sea", "sky / air", "road", "railway"], 1, "Pesawat terbang di udara/langit (sky)."],
    ["A ship sails on the ...", ["road", "sea / ocean", "sky", "mountain"], 1, "Kapal berlayar di laut (sea)."],
    ["A train runs on the ...", ["water", "railway track", "sky", "sand"], 1, "Kereta api berjalan di atas rel (railway track)."],
    ["Who drives a plane?", ["Driver", "Pilot", "Captain", "Machinist"], 1, "Pilot adalah pengemudi pesawat terbang."],
    ["Who drives a car or a bus?", ["Pilot", "Driver", "Sailor", "Teacher"], 1, "Driver adalah sopir/pengemudi mobil atau bus."],
    ["Before crossing the street, we must look right and ...", ["up", "left", "down", "back"], 1, "Look right and left = tengok kanan dan kiri."],
    ["When riding a motorcycle, we must wear a ... on our head.", ["hat", "helmet", "cap", "scarf"], 1, "Helmet artinya helm pelindung kepala."],
    ["Red traffic light means ...", ["Go", "Stop", "Run", "Turn left"], 1, "Lampu merah artinya berhenti (stop)."],
    ["Green traffic light means ...", ["Stop", "Go", "Wait", "Sleep"], 1, "Lampu hijau artinya jalan (go)."],
    ["Arrange the words: 'goes - Father - office - to - by - car'", ["Father goes to office by car.", "By car father goes office to.", "Office goes to father by car.", "Goes father to office by car."], 0, "Susunan kalimat benar: Father goes to office by car."]
  ]);
  window.BANK_SOAL_MASTER["kls2_binggris_bab10_sesi1"] = [...u10];
  window.BANK_SOAL_MASTER["kls2_binggris_bab10_sesi2"] = [...u10.slice(7), ...u10.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_binggris_bab10_sesi3"] = [...u10.slice(14), ...u10.slice(0, 14)];
})();
// Alias otomatis semua variasi kunci Bahasa Inggris Kelas 2 SD (unit / bab & bing / binggris / inggris)
(function() {
  const M = window.BANK_SOAL_MASTER || {};
  for (let u = 1; u <= 10; u++) {
    for (let sesi = 1; sesi <= 3; sesi++) {
      const asal = M[`kls2_binggris_bab${u}_sesi${sesi}`];
      if (asal) {
        M[`kls2_binggris_unit${u}_sesi${sesi}`] = asal;
        M[`kls2_bing_bab${u}_sesi${sesi}`] = asal;
        M[`kls2_bing_unit${u}_sesi${sesi}`] = asal;
        M[`kls2_inggris_bab${u}_sesi${sesi}`] = asal;
        M[`kls2_inggris_unit${u}_sesi${sesi}`] = asal;
        M[`kls2_english_bab${u}_sesi${sesi}`] = asal;
        M[`kls2_english_unit${u}_sesi${sesi}`] = asal;
      }
    }
  }
})();
