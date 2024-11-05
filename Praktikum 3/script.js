// Menambahkan event listener untuk form ketika di-submit
document.querySelector("form").addEventListener("submit", function(event) {
  // Mencegah form untuk reload halaman saat di-submit
  event.preventDefault();

  // Mendapatkan nilai dari input tugas, uts, dan uas
  const tugas = parseFloat(document.getElementById("tugas").value);
  const uts = parseFloat(document.getElementById("uts").value);
  const uas = parseFloat(document.getElementById("uas").value);

  // Validasi untuk memastikan nilai antara 0-100
  if (isNaN(tugas) || tugas < 0 || tugas > 100 ||
      isNaN(uts) || uts < 0 || uts > 100 ||
      isNaN(uas) || uas < 0 || uas > 100) {
    alert("Pastikan semua nilai berada antara 0 dan 100.");
    return;
  }

  // Deklarasi konstanta bobot dan batas kelulusan
  const BOBOT_TUGAS = 0.3;
  const BOBOT_UTS = 0.3;
  const BOBOT_UAS = 0.4;
  const BATAS_LULUS = 60;

  // Menghitung nilai berdasarkan bobot masing-masing
  let nilaiTugas = tugas * BOBOT_TUGAS;
  let nilaiUTS = uts * BOBOT_UTS;
  let nilaiUAS = uas * BOBOT_UAS;
  let rataRataTertimbang = nilaiTugas + nilaiUTS + nilaiUAS;

  // Menentukan nilai huruf berdasarkan rata-rata tertimbang
  let nilaiHuruf;
  if (rataRataTertimbang >= 90) {
    nilaiHuruf = "A";
  } else if (rataRataTertimbang >= 80) {
    nilaiHuruf = "B";
  } else if (rataRataTertimbang >= 70) {
    nilaiHuruf = "C";
  } else if (rataRataTertimbang >= 60) {
    nilaiHuruf = "D";
  } else {
    nilaiHuruf = "E";
  }

  // Menentukan status lulus/gagal dan warna status
  let status = rataRataTertimbang >= BATAS_LULUS ? "Lulus" : "Gagal";
  let statusColor = rataRataTertimbang >= BATAS_LULUS ? "green" : "red";

  // Menampilkan hasil perhitungan di elemen 'hasil'
  document.getElementById("hasil").innerHTML = `
    <p>Rata-rata tertimbang: ${rataRataTertimbang.toFixed(2)}</p>
    <p>Nilai Huruf: ${nilaiHuruf}</p>
    <p style="color:${statusColor}; font-weight: bold">${status}</p>
  `;
});
