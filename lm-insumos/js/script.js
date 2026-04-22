const buscador = document.getElementById("buscador");
const cards = document.querySelectorAll(".card");

buscador.addEventListener("keyup", () => {
  const texto = buscador.value.toLowerCase();

  cards.forEach(card => {
    const contenido = card.textContent.toLowerCase();
    card.style.display = contenido.includes(texto) ? "block" : "none";
  });
});

function filtrar(categoria) {
  cards.forEach(card => {
    if (categoria === "todos") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(categoria) ? "block" : "none";
    }
  });
}