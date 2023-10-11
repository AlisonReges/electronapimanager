// Obter elementos do DOM
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Abrir modal quando o botão é clicado
btn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Fechar o modal quando o usuário clica no "x"
span.addEventListener("click", function() {
  modal.style.display = "none";
});

// Fechar o modal quando o usuário clica fora da janela modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
