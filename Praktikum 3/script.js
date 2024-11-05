document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const tugas = parseFloat(document.getElementById("tugas").value);
  const uts = parseFloat(document.getElementById("uts").value);
  const uas = parseFloat(document.getElementById("uas").value);

  if (isNaN(tugas) || tugas < 0 || tugas > 100 ||
      isNaN(uts) || uts < 0 || uts > 100 ||
      isNaN(uas) || uas < 0 || uas > 100) {
    alert("Pastikan semua nilai berada antara 0 dan 100.");
    return;
  }

  const BOBOT_TUGAS = 0.3;
  const BOBOT_UTS = 0.3;
  const BOBOT_UAS = 0.4;
  const BATAS_LULUS = 60;

  let nilaiTugas = tugas * BOBOT_TUGAS;
  let nilaiUTS = uts * BOBOT_UTS;
  let nilaiUAS = uas * BOBOT_UAS;
  let rataRataTertimbang = nilaiTugas + nilaiUTS + nilaiUAS;

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

  let status = rataRataTertimbang >= BATAS_LULUS ? "Lulus" : "Gagal";
  let statusColor = rataRataTertimbang >= BATAS_LULUS ? "green" : "red";

  const resultSection = document.getElementById("hasil");
  resultSection.innerHTML = `
    <h3 class="h3">HASIL PERHITUNGAN</h3>
    <p class="kontribusi">Kontribusi Nilai Tugas (${BOBOT_TUGAS * 100}%): ${nilaiTugas.toFixed(2)}</p>
    <p class="kontribusi">Kontribusi Nilai UTS (${BOBOT_UTS * 100}%): ${nilaiUTS.toFixed(2)}</p>
    <p class="kontribusi">Kontribusi Nilai UAS (${BOBOT_UAS * 100}%): ${nilaiUAS.toFixed(2)}</p>
    <p class="rerata">Rata-rata Tertimbang: <strong>${rataRataTertimbang.toFixed(2)}</strong></p>
    <p class="nilai_huruf">Nilai Huruf: <strong>${nilaiHuruf}</strong></p>
    <p class="status">Status: <strong class="status_color" style="color: ${statusColor};">${status}</strong></p>
  `;
});