//Listar pessoas
function listarPessoas() {
  fetch("http://localhost:3000/pessoas")
    .then((response) => response.json())
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      alert("Houver um erro ao listar as pessoas.");
    });
}
export { listarPessoas };