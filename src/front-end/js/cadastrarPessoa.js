function cadastrarPessoa(registration, name) {
  fetch("http://localhost:3000/pessoas", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      registration,
      name,
    }),
  })
    .then((response) => {
      if (response.status === 201) {
        alert("Cadastro realizado com sucesso.");
        return response.json();
      } else if (response.status === 409) {
        alert("Pessoa já cadastrada.");
      }
    })
    .then((data) => {
      if (data) {
        alert(`
            Pessoa: ${data.name}
            Matrícula: ${data.registration}
            Cadastro realizado com sucesso!
          `);
      }
    })
    .catch((erro) => {
      alert("Houve um erro ao cadastrar a pessoa.");
    });
}
export { cadastrarPessoa };
