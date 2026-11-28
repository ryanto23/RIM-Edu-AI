// File: soal/kls2_bmadura_master.js
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b1 = M([
    ["Odi' rokun è compo' sareng kalowarga mabâdhân suasana dhâddhi ...", ["Ribut", "Tenteram, aman, bân senneng", "Sossa", "Atokar"], 1, "Karokunan è compo' mabâdhân suasana nyaman."],
    ["Bhâsa alossa (èngghi-bhunten) dâri oca' 'ngakan' ka'angghuy Eppa' otabâ Èbhu èngghi panèka ...", ["Tèdung", "Adhâ'âr", "Mèyos", "Toju'"], 1, "Adhâ'âr artèna makan dalam bahasa halus."],
    ["Bhâsa alossa dâri oca' 'ngènom' ka'angghuy orèng towa èngghi panèka ...", ["Adhâ'âr", "Adhâ'âr aèng / Ngènom", "Asarèn", "Asiram"], 1, "Adhâ'âr aèng otabâ ngènom alos."],
    ["Mon Èbhu pareppa'na nyapo è tanèyan, sikap anak sè rokun bân bhâktè èngghi panèka ...", ["Tèdung è kamar", "Dhuli nyander abhânto ngala' sampa'", "Amaèn dhibi'", "Nonton TV"], 1, "Abhânto Èbhu ngajhâri karokunan bân tanggung jawab."],
    ["Oca' 'abhânto' dâlem bhâsa Indonesia artèna ...", ["Melawan", "Membantu / Menolong", "Meninggalkan", "Membiarkan"], 1, "Abhânto artèna membantu."],
    ["Mon Kaka' bân Ale' amaèn abhâreng è compo', ta' olle ...", ["Salèng bherri'", "Arebbhu' mainan sampe' atokar", "Aghellâ' senneng", "Salèng jâgâ"], 1, "Arebbhu' mainan marosak karokunan taretan."],
    ["Bhâsa alossa dâri 'èntar / mangkat' (pergi/berangkat) ka'angghuy Eppa' èngghi panèka ...", ["Molè", "Mèyos / Bâdâ kaparlowan", "Asarèn", "Toju'"], 1, "Mèyos artèna pergi/berangkat dalam bahasa halus."],
    ["Bhâsa alossa dâri 'molè / dâteng' (pulang/datang) ka'angghuy orèng towa èngghi panèka ...", ["Mèyos", "Rabuh / Kondur", "Asarèn", "Adhâ'âr"], 1, "Rabuh (datang) bân kondur (pulang) bhâsa alos."],
    ["Mon Eppa' rabuh dâri alako, anak sè sopan kodhu ...", ["Neng-neng bhâi", "Nyambhut kalabân salam bân nyèyom tanangnga", "Nangis njâluk jhâjhân", "Berka' ka lowar"], 1, "Nyambhut orèng towa tandhâ bhâktè bân hormat."],
    ["Oca' 'nyèyom tanang' dâlem bhâsa Indonesia artèna ...", ["Mencuci tangan", "Mencium tangan (salim)", "Melambaikan tangan", "Menunjuk tangan"], 1, "Nyèyom tanang wujud hormat dâ' orèng seppo."],
    ["Pèssè sango sè èbherri' Èbhu sabbhân lagghu kodhu èghuna'aghi kalabân ...", ["Boros", "Èmat bân sabagiyân ètabung", "Èbuwâng", "Èbelliyaghi mainan kabbhi"], 1, "Èmat bân nabung melatih hidup hemat."],
    ["Oca' 'nabung' dâlem bhâsa Madhurâ biasa èsebbhut nyèmpet pèssè è ...", ["Kantong plastik", "Cèlèngan / Bank", "Kolong kasor", "Tanèyan"], 1, "Nabung è cèlèngan ajâgâ pèssè aman."],
    ["Mon alako sala dâ' Ale' è compo', Kaka' kodhu ngoca' ...", ["Terserah", "Saporana ya Le', Kaka' ta' sangajâ", "Salahna bâ'na dhibi'", "Neng-neng"], 1, "Ngoca' saporana ngajhâri rendah hati."],
    ["Oca' 'taretan' dâlem bhâsa Indonesia artèna ...", ["Tetangga", "Saudara", "Teman", "Guru"], 1, "Taretan artèna saudara."],
    ["Parèbhâsan Madhurâ 'Rampak naong beringin korong' ngajhâri pentingnga ...", ["Atokar", "Karokunan, persatuan, bân gotong royong", "Sombong", "Males"], 1, "Rampak naong artèna kompak bersatu."],
    ["Sabellunna ngakan abhâreng kalowarga è mèjhâ dhâ'âr, kita kodhu ...", ["Langsung ngala' kakanan", "Abassò tanang bân maca du'a abhâreng", "Acaca keras", "Berdiri"], 1, "Maca du'a sabellunna ngakan wujud syukur."],
    ["Oca' 'mèjhâ dhâ'âr' dâlem bhâsa Indonesia artèna ...", ["Meja belajar", "Meja makan", "Meja guru", "Meja tamu"], 1, "Mèjhâ dhâ'âr tempat makan bersama keluarga."],
    ["Mon bâdâ tamoy rabuh ka compo', sikap kita sè sopan èngghi panèka ...", ["Nyorak keras", "Ngoca' salam bân nyilâ'aghi toju'", "Notop labâng", "Berka' è adâ'na tamoy"], 1, "Mulia'aghi tamoy adat luhur orèng Madhurâ."],
    ["Oca' 'tamoy' dâlem bhâsa Indonesia artèna ...", ["Tetangga", "Tamu", "Keluarga", "Pedagang"], 1, "Tamoy artèna tamu."],
    ["Odi' rokun è compo' aropa'aghi pangamalan Pancasila sila ka-...", ["Sèttong", "Tello' (Persatuan Indonesia)", "Empa'", "Lèma'"], 1, "Karokunan mencerminkan sila ketiga Pancasila."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bmadura_bab1_sesi1"] = [...b1];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab1_sesi2"] = [...b1.slice(7), ...b1.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab1_sesi3"] = [...b1.slice(14), ...b1.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b2 = M([
    ["Permainan tradisional Madhurâ sè ngangghuy dhâmar / lèker èsebbhut ...", ["Bal-balan", "Alèkeran (main kelereng)", "Alajângan", "Renang"], 1, "Lèker artèna kelereng."],
    ["Permainan tradisional lonca' sèttong soko è atas kotak ghâris è tana èsebbhut ...", ["Petak umpet", "Engklèk / Sonda manda", "Tarik tambang", "Kasti"], 1, "Engklèk melatih keseimbangan soko."],
    ["Permainan tradisional nyarè kanca sè ngètek (bersembunyi) èsebbhut ...", ["Bal-balan", "Tè'-ngètè'an (petak umpet)", "Alajângan", "Congklak"], 1, "Tè'-ngètè'an artèna petak umpet."],
    ["Oca' 'ngètek' dâlem bhâsa Indonesia artèna ...", ["Berlari", "Bersembunyi", "Melompat", "Berteriak"], 1, "Ngètek artèna bersembunyi."],
    ["Permainan tradisional sè ngangghuy papan kayu alobâng bân bighi sawo otabâ kerikil èsebbhut ...", ["Layangan", "Dhâkon / Congklak", "Kelereng", "Egrang"], 1, "Dhâkon melatih berhitung bân kesabaran."],
    ["Mon amaèn tè'-ngètè'an, kennengngan ngètek sè aman èngghi panèka ...", ["È tengnga jhâlân raya", "È budhina bhungka otabâ tèmbok sè aman", "È dâlem somor", "È atas gentèng"], 1, "Mèlè tempat aman nyegghâ bahaya."],
    ["Bâkto amaèn kalabân kanca è tanèyan, sikap sè bhender èngghi panèka ...", ["Curang sopajâ mennang", "Jujur, sportif, bân ta' atokar", "Ngeccè kanca sè kala", "Marah mon kala"], 1, "Sportif mabâdhân permainan nyaman."],
    ["Oca' 'mennang' lalabânna (lawan katanya) èngghi panèka ...", ["Senneng", "Kala", "Ceppet", "Kowat"], 1, "Mennang = menang, kala = kalah."],
    ["Amaèn lajângan palèng bhâghus èlakonè è ...", ["Tengnga pasar", "Tegal otabâ lapangan lowas jhâu dâri kabel listrik", "Dâlem kellas", "Pingghir jhâlân raya"], 1, "Tegal lowas aman ka'angghuy alajângan."],
    ["Oca' 'tegal' dâlem bhâsa Madhurâ artèna ...", ["Sawah berair", "Ladang / Tanah lapang kering", "Sungai", "Laut"], 1, "Tegal artèna ladang atau tanah lapang."],
    ["Mon badâ kanca sè ta' andi' mainan, sikap kita sè bhâghus èngghi panèka ...", ["Sombong mamer mainan", "Ngajhâk amaèn abhâreng kalabân senneng", "Ngusir kanca", "Ngeccè"], 1, "Berbagi mainan makowat persahabatan."],
    ["Permainan tradisional 'egrang' èghâbây dâri ...", ["Kertas", "Perrèng (bambu)", "Plastik tipis", "Kain"], 1, "Egrang èghâbây dâri perrèng."],
    ["Amaèn è lowar compo' kodhu èngat bâkto, mon ampon adzan Magrib kodhu ...", ["Terros amaèn", "Dhuli molè ka compo' mandi bân asalat", "Ngètek è tanèyan", "Nonton TV"], 1, "Disiplin bâkto salat Magrib."],
    ["Oca' 'adzan' tandhâ maso'na bâkto ...", ["Amaèn", "Salat fardu", "Tèdung", "Mangkat sakola"], 1, "Mon adzan amonyè wajib abâli ka compo'/masjid."],
    ["Mon amaèn bal-balan è lapangan, kita ngangghuy sapatu olahraga sopajâ soko ta' ...", ["Bhersè", "Loka kena bâto otabâ duri", "Cellep", "Sèhat"], 1, "Sapatu ajâgâ kasalamadhân soko."],
    ["Oca' 'loka' dâlem bhâsa Indonesia artèna ...", ["Sembuh", "Luka", "Sehat", "Kuat"], 1, "Loka artèna luka."],
    ["Permainan tarik tambang ngajhâri murid pentingnga ...", ["Keegoisan", "Kekompakan bân kerja sama tim", "Atokar", "Males"], 1, "Tarik tambang butuh kekompakan abhâreng."],
    ["Saamponna amaèn è lapangan sè berdebu, tanang bân soko kodhu dhuli ...", ["Èdhina'aghi kotor", "Èbassò bhersè ngangghuy sabun", "Èlap ka klambhi", "Ètotop kaos soko"], 1, "Abassò tanang soko ngèlangngaghi kuman."],
    ["Permainan tradisional Madhurâ kodhu èrabât bân èmaènaghi sopajâ ta' ...", ["Èsenengngè", "Èlang èghântè HP terros", "Rammè", "Sèhat"], 1, "Permainan tradisional nyèhattaghi bâdhân bân sosial."],
    ["Amaèn abhâreng kanca è lingkungan sakètar mabâdhân atè ...", ["Sossa", "Senneng, akrab, bân bânnya' kanca", "Tako'", "Marah"], 1, "Kebersamaan nambâ karokunan."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bmadura_bab2_sesi1"] = [...b2];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab2_sesi2"] = [...b2.slice(7), ...b2.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab2_sesi3"] = [...b2.slice(14), ...b2.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b3 = M([
    ["Tugas utama murid è sakola'an èngghi panèka ...", ["Amaèn terros", "Ajhâr kalabân rajin bân patuh dâ' Ghuru", "Tèdung è kellas", "Mellè jhâjhân terros"], 1, "Ajhâr kalabân rajin tugas pokok murid."],
    ["Bhâsa alossa dâri oca' 'ajhâr' otabâ 'ngajhâr' dâlem bhâsa Madhurâ alos èngghi panèka ...", ["Tèdung", "Molang (mengajar) / Ajhâr", "Ngakan", "Berka'"], 1, "Ghuru molang murid è kellas."],
    ["Mon Ghuru aberri' PR (pekerjaan rumah), murid kodhu ngalakonè è ...", ["Kellas lagghuna", "Compo' kalabân jujur bân tepat bâkto", "Kantin", "Lapangan"], 1, "PR ègarap è compo' melatih tanggung jawab."],
    ["Oca' 'nggarap' dâlem bhâsa Indonesia artèna ...", ["Meninggalkan", "Mengerjakan", "Membuang", "Menyembunyikan"], 1, "Nggarap tugas artèna mengerjakan tugas."],
    ["Bâkto ulangan è kellas, murid ta' olle ...", ["Maca soal tè-ngatè", "Nyontek ghâbâyânna kanca", "Noles jâwâbhân dhibi'", "Adu'a"], 1, "Nyontek perilaku ta' jujur."],
    ["Tugas regu pikèt kellas lagghu èngghi panèka ...", ["Ngotori papan toles", "Nyapo lantai, ngapos papan toles, bân merapikan mèjhâ", "Amaèn bal è kellas", "Nonton"], 1, "Pikèt kellas ngajâgâ kabhersèyan ruang ajhâr."],
    ["Oca' 'ngapos' dâlem bhâsa Indonesia artèna ...", ["Menulis", "Menghapus", "Menggambar", "Membaca"], 1, "Ngapos papan toles artèna menghapus papan tulis."],
    ["Mon ketua kellas aberri' aba-aba sabellunna ajhâr, kabbhi murid ...", ["Acaca keras", "Toju' rapi bân adu'a abhâreng", "Kalowar kellas", "Berka'"], 1, "Adu'a sabellunna ajhâr ngalap berkah èlmo."],
    ["Bhâsa alossa 'tanya' (bertanya) dâ' Ghuru èngghi panèka ...", ["Nyorak", "Matanya / Nyuwun pèrsa", "Ngeccè", "Nangis"], 1, "Matanya dâ' Ghuru kalabân ngacongngaghi tanang kanan."],
    ["Mon èbherri' tugas kelompok sareng Ghuru, kabbhi anggota kodhu ...", ["Males-malesan", "Abhânto bân alako abhâreng", "Nyoro sèttong orèng bhâi", "Atokar"], 1, "Kerja kelompok butuh kontribusi kabbhi anggota."],
    ["Buku paket bân buku toles sè èbherri' sakola'an kodhu èrabât sopajâ ta' ...", ["Bhersè", "Sobek, kotor, otabâ èlang", "Rapi", "Èbâca"], 1, "Marabât buku wujud syukur fasilitas ajhâr."],
    ["Oca' 'èlang' dâlem bhâsa Indonesia artèna ...", ["Ketemu", "Hilang", "Baru", "Banyak"], 1, "Èlang artèna hilang."],
    ["Mon nemmo potlot otabâ pèssè ghâgghâr è kellas, tugas murid jujur èngghi panèka ...", ["Èsèmpet dhibi'", "Èpabâli ka Ghuru sopajâ èpabâli ka sè andi'", "Èbuwâng", "Èbelliyaghi jhâjhân"], 1, "Mabâli bhârâng temuan tandhâ anak jujur."],
    ["Oca' 'nemmo' dâlem bhâsa Indonesia artèna ...", ["Mencari", "Menemukan", "Menyimpan", "Membuang"], 1, "Nemmo artèna menemukan."],
    ["Sabbhân arè Sennin lagghu, murid ngalakonè upacara bendera kalabân sikap ...", ["Acaca terros", "Tegak, khidmat, bân hormat bendera", "Duduk", "Bercanda"], 1, "Khidmat upacara wujud cinta tanah air."],
    ["Menghormati Ghuru è sakola'an padâ sareng menghormati ... è compo'.", ["Kanca", "Orèng towa (Eppa' bân Èbhu)", "Adik", "Tetangga"], 1, "Ghuru èngghi panèka orèng towa è sakola'an."],
    ["Mon Ghuru lèbât è adâ'na murid, murid kodhu ...", ["Neng-neng bhâi", "Ngoca' salam kalabân mesem sopan", "Berka' èntar", "Ngeccè"], 1, "Nyapa Ghuru wujud tata krama santun."],
    ["Oca' 'mesem' dâlem bhâsa Indonesia artèna ...", ["Menangis", "Tersenyum", "Marah", "Terkejut"], 1, "Mesem artèna tersenyum ramah."],
    ["Alat-alat ajhâr akadhi potlot, pangapos, bân penggaris kodhu èsèmpet è ...", ["Kolong mèjhâ", "Kotak potlot è dâlem tas", "Tanèyan", "Kantin"], 1, "Nyèmpet alat toles rapi nyegghâ èlang."],
    ["Murid sè ngalakonè tugas è sakola'an kalabân disiplin bâkal dhâddhi anak sè ...", ["Males", "Pènter, mandiri, bân sukses", "Ceroboh", "Lamba'"], 1, "Disiplin tugas ngater dâ' prestasi."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bmadura_bab3_sesi1"] = [...b3];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab3_sesi2"] = [...b3.slice(7), ...b3.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab3_sesi3"] = [...b3.slice(14), ...b3.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b4 = M([
    ["Kebhân pèyara'an sè ngasèllaghi susu segar bân dhâghing èngghi panèka ...", ["Kocèng", "Sapè (Sapi)", "Mano'", "Olar"], 1, "Sapè ngasèllaghi susu bân dhâghing."],
    ["Kebhân sè ngasèllaghi tellor sabbhân arè èngghi panèka ...", ["Embi'", "Ajâm bân ètèk", "Sapè", "Jhârân"], 1, "Ajâm bân ètèk ngasèllaghi tellor bergizi."],
    ["Oca' 'tellor' dâlem bhâsa Indonesia artèna ...", ["Daging", "Telur", "Susu", "Bulu"], 1, "Tellor artèna telur."],
    ["Kebhân sè senneng ngakan wortel bân kopèngnga lanjhâng èngghi panèka ...", ["Kocèng", "Kelinci / Terwèlu", "Ajâm", "Juko'"], 1, "Terwèlu artèna kelinci."],
    ["Kebhân kènè' sè ngasèllaghi madu manès ka'angghuy kasèhadhân èngghi panèka ...", ["Nyamok", "Nyambhâng / Lebah madu", "Lala'", "Bilis"], 1, "Lebah madu ngasèllaghi madu sèhat."],
    ["Oca' 'manès' lalabânna (lawan katanya) èngghi panèka ...", ["Pèddhis", "Paè' (Pahit) / Accèn", "Lema'", "Sègger"], 1, "Manès = manis, paè' = pahit, accèn = asin."],
    ["Kandhângnga sapè bân embi' kodhu èbhersè'è sabbhân arè sopajâ ...", ["Kotor terros", "Bhersè, sèhat, bân ta' nyebbar bâu", "Penno lala'", "Bâsa"], 1, "Kandhâng bhersè nyegghâ panyakè' ternak."],
    ["Tombuwân sè ètanem petani è Pamekasan bân Madhurâ è mosèm nèmor (kemarau) sala sèttongnga èngghi panèka ...", ["Kaktus", "Bhâko (Tembakau) bân jhâghung", "Apel", "Stroberi"], 1, "Jhâghung bân bhâko tombu subur è tana Madhurâ."],
    ["Tombuwân è tanèyan compo' parlo èbherri' pupuk bân èsèram sopajâ ...", ["Kèring", "Subur bân lekka' abuwâ/akembhâng", "Matè", "Kènè' terros"], 1, "Pupuk nambâ zat hara ka'angghuy tombuwân."],
    ["Bagiyân tombuwân sè fungsina nyangga ranting bân dâun èngghi panèka ...", ["Ramo'", "Bhungka / Batang", "Kembhâng", "Bighi"], 1, "Bhungka / batang ngadegngaghi tombuwân."],
    ["Oca' 'bighi' dâlem bhâsa Indonesia artèna ...", ["Daun", "Biji", "Akar", "Kulit buah"], 1, "Bighi bisa ètanem polè dhâddhi tombuwân anyar."],
    ["Buwâ sè kulè'na abârna mèra bân dâlemma potè abighi celleng kènè' èngghi panèka ...", ["Gheddhâng", "Buwâ naga / Srikaya / Semangka", "Pao", "Jherruk"], 1, "Buwâ segar bânnya' vitaminna."],
    ["Oca' 'semangka' dâlem bhâsa Madhurâ biasa èsebbhut ...", ["Pao", "Samangka", "Nanas", "Salak"], 1, "Samangka ngandung bânnya' aèng sègger."],
    ["Kebhân sè bisa abhânto petani malako tana è serèng (sawah) èngghi panèka ...", ["Kocèng", "Kerbhuy bân sapè", "Mano'", "Juko'"], 1, "Kerbhuy bân sapè abhânto bajak sawah."],
    ["Kebhân sè nyebbaraghi panyakè' demam berdarah bân kodhu èjhâuwi èngghi panèka ...", ["Kalèmbâng", "Nyamok Aedes aegypti", "Mano' dara", "Juko' mas"], 1, "Nyamok berbiak è aèng taghenneng."],
    ["Cara ngajâgâ mano' è alam bebas sopajâ ta' punah èngghi panèka ...", ["Ètèmbak ngangghuy ketapel", "Ta' èburu bân ngajâgâ ka'-bhungka'an", "Èrosak sarangnga", "Èkorong terros"], 1, "Ngajâgâ alam ngalestarèaghi mano'."],
    ["Dâun gheddhâng (daun pisang) bânnya' èghuna'aghi è Madhurâ ka'angghuy ...", ["Noles sorat", "Mungkos kakanan tradisional akadhi lopis", "Aghâbây sapatu", "Ngapos papan toles"], 1, "Dâun gheddhâng ramah lingkungan bân ro'om."],
    ["Oca' 'ro'om' dâlem bhâsa Indonesia artèna ...", ["Bau busuk", "Harum / Wangi", "Pedas", "Asam"], 1, "Ro'om artèna harum atau wangi."],
    ["Mon ngoladhi kanca nyèksa kebhân akadhi ngalèmpari kocèng, sikap kita kodhu ...", ["Noro' ngalèmpar", "Ngèngè'è (mengingatkan) sopajâ nèsèr dâ' kebhân", "Aghellâ' keras", "Neng-neng bhâi"], 1, "Nèsèr dâ' kebhân cèpta'an Allah."],
    ["Kebhân bân tombuwân abhânto kaodhi'ân manossa, maka wajib èrabât kalabân ...", ["Kasar", "Rasa syukur bân tanggung jawab", "Males", "Acuh"], 1, "Marabât alam wujud syukur dâ' Allah SWT."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bmadura_bab4_sesi1"] = [...b4];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab4_sesi2"] = [...b4.slice(7), ...b4.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab4_sesi3"] = [...b4.slice(14), ...b4.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b5 = M([
    ["Lingkungan compo' bân sakola'an sè bhersè mabâdhân udara terasa ...", ["Pengap bân bâu", "Sègger, nyaman, bân sèhat", "Panas", "Berdebu"], 1, "Lingkungan bhersè nyèhattaghi pernapasan."],
    ["Kagiyadhân abhersè'è kampong otabâ sakola'an abhâreng warga èsebbhut ...", ["Atokar", "Gotong royong / Kerja bhâktè", "Lomba", "Amaèn"], 1, "Gotong royong makowat karokunan warga."],
    ["Sampa' organik akadhi dâun kèring bân sisa sayuran bisa èolah dhâddhi ...", ["Plastik", "Pupuk kompos alami", "Kaca", "Besi"], 1, "Pupuk kompos nyuburraghi tombuwân."],
    ["Sampa' plastik akadhi botol ènoman bân bungkos jhâjhân tamaso' sampa' ...", ["Organik", "Anorganik (malarat busuk)", "Pupuk", "Kakanan"], 1, "Sampa' plastik kodhu èdaur ulang."],
    ["Selokan aèng è adâ'na compo' kodhu èbhersè'è dâri sampa' sopajâ ta' nyebbabaghi ...", ["Kekeringan", "Banjir bâkto mosèm ojhân", "Angèn kencang", "Gempa"], 1, "Selokan lancar nyegghâ genangan banjir."],
    ["Oca' 'bânjir' dâlem bhâsa Madhurâ artèna ...", ["Kemarau", "Banjir (aèng raja)", "Angin topan", "Hujan gerimis"], 1, "Muwâng sampa' sembarangan nyebbabaghi bânjir."],
    ["Aèng è jeddhèng (bak mandi) kodhu èkoras saminggu sakalè sopajâ ta' dhâddhi sarang ...", ["Juko'", "Jentik-jentik nyamok", "Mano'", "Kocèng"], 1, "Ngoras bak mandi bagian gerakan 3M."],
    ["Sabbhân lagghu sabellunna mangkat sakola, lantai compo' èsapo bân èpèl sopajâ ...", ["Licin", "Bhersè dâri debu bân kuman", "Bâsa terros", "Kotor"], 1, "Lantai bhersè aman ka'angghuy kalowarga."],
    ["Mon ngoladhi sampa' plastik è tengnga jhâlân, anak sè peduli lingkungan bâkal ...", ["Nendang sampa'na", "Mungut bân muwâng ka tong sampa'", "Adhina'aghi bhâi", "Nginjek sampa'"], 1, "Peduli lingkungan dimulai dâri hal kènè'."],
    ["Nanem ka'-bhungka'an è sakètar sakola'an bân pèngghir jhâlân èsebbhut ...", ["Penebangan", "Penghijauan (reboisasi)", "Pembakaran", "Pencemaran"], 1, "Penghijauan ngasèllaghi oksigèn sègger."],
    ["Oca' 'oksigèn' èngghi panèka udara bhersè sè èghuna'aghi manossa ka'angghuy ...", ["Ngakan", "Anyabâ / Bernapas", "Tèdung", "Ngènom"], 1, "Tombuwân ngasèllaghi oksigèn ka'angghuy bernapas."],
    ["Ngobbhâr (membakar) sampa' plastik è semma'na compo' bisa nyebbabaghi ...", ["Udara ro'om", "Asap celleng sè marosak paru-paru", "Ojhân", "Sèhat"], 1, "Asap plastik ngandung racun berbahaya."],
    ["Oca' 'ngobbhâr' dâlem bhâsa Indonesia artèna ...", ["Menyiram", "Membakar", "Menanam", "Menyapu"], 1, "Ngobbhâr artèna membakar."],
    ["Kamar mandi (WC) è sakola'an saamponna èangghuy kodhu èsèram sampe' bhersè sopajâ ta' ...", ["Bhersè", "Bâu bân ngotori kanca laèn", "Sèhat", "Rapi"], 1, "Nyèram WC saamponna èangghuy tanggung jawab abhâreng."],
    ["Bâkto belanja ka toko, ngèbâ tas kain dhibi' dâri compo' abhânto ngorangè sampa' ...", ["Kertas", "Kantong plastik", "Dâun", "Kayu"], 1, "Tas kain bisa èangghuy polè berkali-kali."],
    ["Aèng somor otabâ PDAM è compo' kodhu èghuna'aghi kalabân èmat, artinya mon ampon marè kran kodhu ...", ["Èdhina'aghi abukka'", "Ètotop rapet", "Èrosak", "Èbuwâng"], 1, "Notop kran ngèmat aèng bhersè."],
    ["Oca' 'èmat' lalabânna èngghi panèka ...", ["Rajin", "Boros", "Pènter", "Sèhat"], 1, "Èmat = hemat, boros = boros."],
    ["Fasilitas umum akadhi taman kota bân halte kodhu èjhâgâ kabhersèyanna bân ta' olle ...", ["Èrabât", "Ècorèt-corèt otabâ èrosak", "Èbhersè'è", "Èoladhi"], 1, "Ajâgâ fasilitas umum tandhâ warga tertib."],
    ["Kakanan è compo' kodhu ètotop ngangghuy tudung saji sopajâ ta' èngghâ'i ...", ["Kalèmbâng", "Lala' bân debu", "Mano'", "Juko'"], 1, "Tudung saji ajâgâ kakanan pagghun higienis."],
    ["Lingkungan bhersè, asrè, bân sèhat mabâdhân masyarakat odi' ...", ["Sossa", "Sèhat, nyaman, bân sejahtera", "Sakè' terros", "Atokar"], 1, "Lingkungan sèhat investasi masa depan."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bmadura_bab5_sesi1"] = [...b5];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab5_sesi2"] = [...b5.slice(7), ...b5.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab5_sesi3"] = [...b5.slice(14), ...b5.slice(0, 14)];
})();
(function() {
  const M = (list) => list.map(([q, p, b, bahas]) => ({ q, p, b, bahas }));
  const b6 = M([
    ["Ajâgâ kasalamadhân abâ' dhibi' è compo' bân è jhâlân raya sangat penting sopajâ ta' ngalamè ...", ["Kasennengngan", "Kacilaka'an otabâ cedera", "Prestasi", "Hadiah"], 1, "Tè-ngatè nyegghâ kacilaka'an."],
    ["Bhârâng tajhem è dâpor akadhi pèso (pisau) bân ghunting ta' olle ...", ["Èsèmpet è laci", "Èmainaghi anak-anak tanpa pangawasan orèng towa", "Èangghuy Èbhu amassa'", "Èbhersè'è"], 1, "Pèso tajhem bisa malokaè tanang."],
    ["Oca' 'pèso' dâlem bhâsa Indonesia artèna ...", ["Sendok", "Pisau", "Garpu", "Piring"], 1, "Pèso artèna pisau."],
    ["Stopkontak listrik è tèmbok compo' ta' olle èpegghâ' ngangghuy tanang sè ...", ["Kèring", "Bhâsa (basah) polana bisa kesetrum", "Bhersè", "Rapi"], 1, "Aèng bisa ngalirraghi listrik sè berbahaya."],
    ["Oca' 'bhâsa' dâlem bhâsa Madhurâ artèna ...", ["Kering", "Basah", "Panas", "Dingin"], 1, "Bhâsa = basah, kèring = kering."],
    ["Mon nyebrang jhâlân raya sè rammè kendara'an, tempat nyebrang sè palèng aman èngghi panèka è ...", ["Tengnga tikungan", "Zebra cross (ghâris potè-celleng)", "Budhina truk", "Jalur tol"], 1, "Zebra cross jalur khusus pejalan kaki."],
    ["Sabellunna nyebrang jhâlân raya, mata kodhu ngoladhi ka arah ...", ["Langngè' atas", "Kanan, kacèr, bân kanan polè sopajâ aman", "Bâbâ soko", "Budhi"], 1, "Ngoladhi kanan-kacèr mastèaghi jhâlân seppè kendara'an."],
    ["Lampu lalu lintas (bangjo) bâdâ tello' bârna: mèra, konèng, bân ...", ["Potè", "Bhiru (hijau)", "Celleng", "Ungu"], 1, "Bhiru dâun artèna hijau (jalan terus)."],
    ["Mon lampu lalu lintas abârna mèra, artèna kendara'an kodhu ...", ["Berka' ceppet", "Ambu (berhenti) è budhina ghâris", "Belok kanan", "Membunyikan klakson"], 1, "Ambu artèna berhenti."],
    ["Oca' 'ambu' dâlem bhâsa Madhurâ artèna ...", ["Jalan", "Berhenti", "Lari", "Lompat"], 1, "Ambu artèna berhenti."],
    ["Bâkto nompa' sapèda motor abhâreng Eppa', perlengkapan wajib sè èangghuy è cèthak èngghi panèka ...", ["Topi kain", "Helm standar (SNI)", "Pajung", "Kacamata hitam"], 1, "Helm ngalindhungi cèthak dâri benturan."],
    ["Bâkto nompa' mobil abhâreng kalowarga, kita kodhu ngangghuy ...", ["Tali rafia", "Sabuk pangaman (seatbelt)", "Selendang", "Kertas"], 1, "Sabuk pangaman ajâgâ badan pagghun aman è korsè."],
    ["Oca' 'tè-ngatè' dâlem bhâsa Indonesia artèna ...", ["Tergesa-gesa", "Hati-hati / Waspada", "Ceroboh", "Berlari"], 1, "Tè-ngatè artèna hati-hati."],
    ["Mon lantai jeddhèng otabâ teras compo' bhâsa kena aèng ojhân, kita ajhâlân kalabân ...", ["Berka' ceppet", "Alon-alon sopajâ ta' tapalèset", "Alonca'-lonca'", "Notop mata"], 1, "Alon-alon nyegghâ tapalèset (terpeleset)."],
    ["Oca' 'alon-alon' dâlem bhâsa Indonesia artèna ...", ["Cepat-cepat", "Pelan-pelan", "Keras-keras", "Tinggi-tinggi"], 1, "Alon-alon artèna pelan-pelan."],
    ["Korek api bân kompor gas è dâpor ta' olle èmaènaghi sopajâ ta' nyebbabaghi ...", ["Bânjir", "Kabhâkaran (kebakaran)", "Angèn kencang", "Ojhân"], 1, "Api kènè' bisa dhâddhi kabhâkaran rajâ mon èmaènaghi."],
    ["Mon bâdâ orèng asing sè ta' èkennal ngajhâk èntar tanpa izin Eppa' otabâ Èbhu, kita kodhu ...", ["Noro' langsung", "Nolak tegas bân dhuli ngabâri Ghuru otabâ satpam", "Neng-neng bhâi", "Aberri' alamat compo'"], 1, "Waspada dâ' orèng asing ajâgâ kasalamadhân abâ'."],
    ["Ajhâlân soko è jhâlân raya kodhu è atas ... sebelah kacèr.", ["Tengnga aspal", "Trotoar", "Selokan", "Rel sepur"], 1, "Trotoar jalur aman pejalan kaki."],
    ["Nomor telepon darurat sè bisa èhubungè mon bâdâ kacilaka'an otabâ bahaya èngghi panèka ...", ["Nomor toko mainan", "110 (Polisi) otabâ 112 (Layanan Darurat)", "Nomor sembarangan", "Nomor teman"], 1, "112 layanan darurat nasional."],
    ["Dengan patuh dâ' aturan kasalamadhân è compo' bân è jhâlân, kita bisa ajhâr bân amaèn kalabân ...", ["Tako'", "Aman, nyaman, bân salamet", "Ceroboh", "Sossa"], 1, "Kasalamadhân nikmat sè kodhu èjhâgâ."]
  ]);
  window.BANK_SOAL_MASTER["kls2_bmadura_bab6_sesi1"] = [...b6];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab6_sesi2"] = [...b6.slice(7), ...b6.slice(0, 7)];
  window.BANK_SOAL_MASTER["kls2_bmadura_bab6_sesi3"] = [...b6.slice(14), ...b6.slice(0, 14)];
})();
