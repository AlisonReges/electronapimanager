const cadastrar = document.querySelector("#cadastrar");
const buscar = document.querySelector("#buscar");
const delPessoaId = document.querySelector("#pessoaId");
const editPessoaId = document.querySelector("#pessoaId");

//Cadastrar pessoa.
cadastrar.addEventListener("click", (event) => {
	event.preventDefault;
	const registration = document.querySelector("#registration").value;
	const name = document.querySelector("#name").value;

	fetch("http://localhost:3000/pessoas", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				'Content-Type': 'application/json',

			},
			body: JSON.stringify({
				registration,
				name
			})
		})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			alert(`
        Pessoa: ${data.name}
        Matrícula: ${data.registration}
        Cadastro realizado com sucesso!
        `);
		})
		.catch((erro) => {
			alert("Houver um erro ao cadastrar a pessoa.");
		})
})

//Listar pessoas
fetch('http://localhost:3000/pessoas')
	.then(response => response.json())
	.then(data => {
		return data.json();
	})
	.catch(error => {
		alert("Houver um erro ao listar as pessoas.")
	});

//Buscar pessoa
fetch(`http://localhost:3000/pessoas/${buscar}`)
	.then(response => response.json())
	.then(data => {
		return data.json();
	})
	.catch(error => {
		alert("houver um erro ao buscar a pessoa.");
	});

fetch(`http://localhost:3000/pessoas/${pessoaId}`, {
		method: 'DELETE',
	})
	.then(response => {
		if (response.status === 204) {
			// Pessoa foi deletada com sucesso (status 204 No Content).
		} else if (response.status === 404) {
			// Pessoa não encontrada.
		}
	})
	.catch(error => {
		// Lida com erros, se houver, aqui.
	});



///

//Editar pessoa
const pessoaAtualizada = {
	registration: 'novo_registro', // Substitua pelos novos dados desejados.
	name: 'novo_nome'
};

fetch(`http://localhost:3000/pessoas/${pessoaId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(pessoaAtualizada),
	})
	.then(response => response.json())
	.then(data => {
		// Lida com a pessoa atualizada recebida do servidor aqui.
	})
	.catch(error => {
		// Lida com erros, se houver, aqui.
	});


