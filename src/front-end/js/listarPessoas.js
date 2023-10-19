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

  //Buscar pessoa
  fetch(`http://localhost:3000/pessoas/${buscar}`)
    .then((response) => response.json())
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      alert("houver um erro ao buscar a pessoa.");
    });
}
export { listarPessoas };