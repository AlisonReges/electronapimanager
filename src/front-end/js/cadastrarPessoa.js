function cadastrarPessoa(registration, name) {
  return new Promise((resolve, reject) => {
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
          return response.json();
        } else if (response.status === 409) {
          reject(new Error("Pessoa já cadastrada."));
        } else {
          reject(new Error("Erro desconhecido ao cadastrar a pessoa."));
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((erro) => {
        reject(erro);
      });
  });
}

export { cadastrarPessoa };
