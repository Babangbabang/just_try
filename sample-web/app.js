// Bug 1: Tidak memeriksa jumlahItem === 0 sehingga menghasilkan Infinity / NaN
function hitungHargaSatuan(totalHarga, jumlahItem) {
  return totalHarga / jumlahItem;
}

// Bug 2: Mencoba membaca properti .name dari objek user yang bernilai null
function ambilNamaUser(user) {
  return user.profile.name.toUpperCase();
}

document.getElementById("btnHitung").addEventListener("click", () => {
  const total = Number(document.getElementById("totalHarga").value);
  const jumlah = Number(document.getElementById("jumlahItem").value);
  const hasil = hitungHargaSatuan(total, jumlah);

  document.getElementById("hasilHitung").textContent = `Hasil: ${hasil}`;
});

document.getElementById("btnSimulasiError").addEventListener("click", () => {
  const logEl = document.getElementById("logError");
  try {
    const currentUser = null;
    const nama = ambilNamaUser(currentUser);
    logEl.textContent = `User: ${nama}`;
  } catch (err) {
    logEl.textContent =
      `File: sample-web/app.js\n` +
      `Error: ${err.name}: ${err.message}\n` +
      `Stack:\n${err.stack}`;
  }
});