const Klik = document.getElementById("klik");
const Reset = document.getElementById("reset");

Klik.addEventListener("click", klik);
Reset.addEventListener("click", reset);

function Update(rumus) {
  const title = document.getElementById("title");
  const formula = document.getElementById("formula");
  const deskripsi = document.getElementById("deskripsi");

  if (rumus == luas) {
    title.innerHTML = "Rumus Luas persegi";
    formula.innerHTML = "K = S * S";
    deskripsi.innerHTML = "Di mana <br> L = Luas <br> S = sisi";
  } else if (rumus == keliling) {
    title.innerHTML = "Rumus Keliling persegi";
    formula.innerHTML = "K = 4 * S";
    deskripsi.innerHTML = "Di mana <br> K = Keliling <br> S = sisi";
  }
}

function klik() {
  const sisi = document.getElementById("data-sisi").value;
  const rumus = document.getElementById("rumus").value;
  const hasil = document.getElementById("hasil");

  if (rumus === "luas") {
    if (isNaN(sisi) || sisi <= 0) {
      hasil.innerHTML = "Masukkan data yang valid.";
    } else {
      const hitung = parseInt(sisi) * parseInt(sisi);
      hasil.innerHTML = `Rumus Luas <br> L = S x S  <br>L = ${sisi}  ${sisi} <br>L = ${hitung}`;
    }
  } else if (rumus === "keliling") {
    if (isNaN(sisi) || sisi <= 0) {
      hasil.innerHTML = "Masukkan data yang valid.";
    } else {
      const hitung = 4 * parseInt(sisi);
      hasil.innerHTML = `Rumus Keliling <br> K = 4 x S/S+S+S+S<br> K = 4 x ${sisi}/${sisi}+${sisi}+${sisi}+${sisi}<br>K = ${hitung}`;
    }
  }
}

function reset() {
  const hasil = document.getElementById("hasil");
  const dataSisi = document.getElementById("data-sisi");
  const rumus = document.getElementById("rumus");

  hasil.innerHTML = "";
  dataSisi.value = "";
  rumus.value = "luas"; // Set the default value to "luas"
}
