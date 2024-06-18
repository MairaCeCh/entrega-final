const volver = document.getElementById("volver");
const gano = document.getElementById("gano");

volver.addEventListener("click", () => {
  window.location.href = "index.html";
});

// if (
//   adversaryLifeP <= 0 ||
//   chosenCard.active == false ||
//   chosenCardAdv.active == false
// ) {
//   gano.innerHTML = `${nombre}`;
// } else if (
//   MyLifeP <= 0 ||
//   chosenCard.active == false ||
//   chosenCardAdv.active == false
// ) {
//   gano.innerHTML = ` el adversario`;
// }
