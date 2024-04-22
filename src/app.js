function generarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}

function generarPalo() {
  const palos = ["♠", "♣", "♥", "♦"];
  const indice = Math.floor(Math.random() * palos.length);
  return palos[indice];
}

function actualizarCarta() {
  const numeroElement = document.getElementById("numero");
  const paloElements = [
    document.getElementById("palo1"),
    document.getElementById("palo2"),
    document.getElementById("palo3"),
    document.getElementById("palo4")
  ];

  numeroElement.innerHTML = generarNumero();
  for (let i = 0; i < paloElements.length; i++) {
    paloElements[i].innerHTML = generarPalo();
  }
}

window.onload = function() {
  actualizarCarta();
};
