// File: soal/cpns_cat_master.js
window.BANK_SOAL_MASTER = window.BANK_SOAL_MASTER || {};

function bangunPaketCAT() {
  for (let s = 1; s <= 15; s++) {
    const twk = window.BANK_SOAL_MASTER[`cpns_twk_sesi${s}`] || [];
    const tiu = window.BANK_SOAL_MASTER[`cpns_tiu_sesi${s}`] || [];
    const tkp = window.BANK_SOAL_MASTER[`cpns_tkp_sesi${s}`] || [];

    window.BANK_SOAL_MASTER[`cpns_cat_sesi${s}`] = [
      ...twk.slice(0, 6),
      ...tiu.slice(0, 7),
      ...tkp.slice(0, 7)
    ];
  }
}

bangunPaketCAT();
window.addEventListener("DOMContentLoaded", bangunPaketCAT);
