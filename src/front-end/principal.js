



// fetch(`http://localhost:3000/pessoas/${pessoaId}`, {
// 		method: 'DELETE',
// 	})
// 	.then(response => {
// 		if (response.status === 204) {
// 			// Pessoa foi deletada com sucesso (status 204 No Content).
// 		} else if (response.status === 404) {
// 			// Pessoa não encontrada.
// 		}
// 	})
// 	.catch(error => {
// 		// Lida com erros, se houver, aqui.
// 	});

// ///

// //Editar pessoa
// const pessoaAtualizada = {
// 	registration: 'novo_registro', // Substitua pelos novos dados desejados.
// 	name: 'novo_nome'
// };

// fetch(`http://localhost:3000/pessoas/${pessoaId}`, {
// 		method: 'PUT',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(pessoaAtualizada),
// 	})
// 	.then(response => response.json())
// 	.then(data => {
// 		// Lida com a pessoa atualizada recebida do servidor aqui.
// 	})
// 	.catch(error => {
// 		// Lida com erros, se houver, aqui.
// 	});

module.exports = cadastrarPessoa;
