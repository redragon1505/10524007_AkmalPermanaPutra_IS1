
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      alert("Produk berhasil ditambahkan ke keranjang!");
    });
  });
});
