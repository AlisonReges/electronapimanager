const cadastrar = document.querySelector("#cadastrar");
const buscar = document.querySelector("#buscar");

//Cadastrar uma nova Pessoa.
// cadastrar.addEventListener("click", (event) => {
//     event.preventDefault;
//     const registration = document.querySelector("#registration").value;
//     const name = document.querySelector("#name").value;

//     fetch("http://localhost:3000/pessoas", {
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             'Content-Type': 'application/json',

//         },
//         body: JSON.stringify({
//             registration,
//             name
//         })
//     })
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             alert(`
//         Pessoa: ${data.name}
//         Matrícula: ${data.registration}
//         Cadastro realizado com sucesso!
//         `);
//         })
//         .catch((erro) => {
//             alert("Houver um erro ao cadastrar a pessoa.");
//         })
// })

buscar.addEventListener("click", (event) => {
    event.preventDefault;

    fetch("http://localhost:3000/buscarpessoa")
        .then((response) => {
            console.log(response);
        })
        .then((data) => {
            console.log(data);
        })
        .catch((erro) => {
            console.log(erro);
        })
})