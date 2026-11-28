// File: soal/cpns_cat_master.js
// Generator Otomatis 15 Sesi Simulasi CAT Lengkap (Campuran TWK + TIU + TKP)
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

(function() {
  for (let s = 1; s <= 15; s++) {
    const twk = window.BANK_SOAL_MASTER[`cpns_twk_sesi${s}`] || [];
    const tiu = window.BANK_SOAL_MASTER[`cpns_tiu_sesi${s}`] || [];
    const tkp = window.BANK_SOAL_MASTER[`cpns_tkp_sesi${s}`] || [];

    // Ambil campuran proporsional: 6 TWK + 7 TIU + 7 TKP = 20 Soal per Sesi CAT
    // (Atau ubah slice menjadi twk.slice(0,30), tiu.slice(0,35), tkp.slice(0,45) jika ingin full)
    const paketCAT = [
      ...twk.slice(0, 6),
      ...tiu.slice(0, 7),
      ...tkp.slice(0, 7)
    ];

    window.BANK_SOAL_MASTER[`cpns_cat_sesi${s}`] = paketCAT;
  }
})();
