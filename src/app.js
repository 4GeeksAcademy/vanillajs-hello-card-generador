function generarCarta() {
  var palos = ["spade", "heart", "diamond", "club"];
  var valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  var paloIndex = Math.floor(Math.random() * 4);
  var valorIndex = Math.floor(Math.random() * 13);

  var carta = document.getElementById("card");
  carta.className = "card " + palos[paloIndex];
  carta.innerHTML = valores[valorIndex];
  carta.setAttribute("data-palo", palos[paloIndex]);
}
