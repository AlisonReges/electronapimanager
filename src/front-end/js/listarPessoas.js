//Listar pessoas
function listarPessoas() {
  return fetch("http://localhost:3000/pessoas")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.status);
      }
      return response.json();
    });
}
export { listarPessoas };