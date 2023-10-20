import { cadastrarPessoa } from "./cadastrarPessoa.js";
import { listarPessoas } from "./listarPessoas.js";
let listaPessoas;
const pessoa = document.querySelector("#pessoas");
pessoa.addEventListener("click", async () => {
  const tela = await loadHTML("main", "pessoas.html");
  tela.addEventListener("load", function () {
    const modalForm = document.getElementById("modalForm");
    const openModalButton = document.querySelector(".BtnAdd");
    const modal = document.querySelector("#ModalPessoa");
    const closeModalButton = document.querySelector("#closeModal");


    openModalButton.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const nome = document.querySelector("input#nome").value;
      const matricula = document.querySelector("input#matricula").value;
      // Você pode adicionar código para lidar com o envio do formulário aqui
      cadastrarPessoa(matricula, nome).then((data) => {
        // alert(
        //   `Cadastro realizado com sucesso: Pessoa: ${data.name}, Matrícula: ${data.registration}`
        // );
        document.querySelector("input#nome").value = "";
        document.querySelector("input#matricula").value = "";
        modal.style.display = "none";
        let listaPessoas; // Declare a constante fora do escopo da Promessa
        listarPessoas().then((data) => {
          listaPessoas = data; // Atribui os dados à constante
          const tabelaPessoas = document.querySelector("tbody#listaPessoas");
          tabelaPessoas.innerHTML = "";
          listaPessoas.forEach((element) => {
            tabelaPessoas.innerHTML += `
                      <tr>
                      <td>${element.registration}</td>
                      <td>${element.name}</td>
                      <td class="AcaoBtn">
                        <button class="DeleteBtnClientes" value="${element.id}">
                          <ion-icon name="trash"></ion-icon>
                        </button>
                        <button class="AlterarBtnClientes" value="${element.id}">
                          <ion-icon name="create"></ion-icon>
                        </button>
                      </td>
                    </tr>`;
          });
        });
      });
    });
  });
  let listaPessoas; // Declare a constante fora do escopo da Promessa
  listarPessoas().then((data) => {
    listaPessoas = data; // Atribui os dados à constante
    const tabelaPessoas = document.querySelector("tbody#listaPessoas");
    tabelaPessoas.innerHTML = "";
    listaPessoas.forEach((element) => {
      tabelaPessoas.innerHTML += `
                <tr>
                <td>${element.registration}</td>
                <td>${element.name}</td>
                <td class="AcaoBtn">
                  <button class="DeleteBtnClientes" value="${element.id}">
                    <ion-icon name="trash"></ion-icon>
                  </button>
                  <button class="AlterarBtnClientes" value="${element.id}">
                    <ion-icon name="create"></ion-icon>
                  </button>
                </td>
              </tr>`;
    });
  });
});

function loadHTML(id, filename) {
  let xhttp;
  let element = document.getElementById(id);
  let file = filename;

  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          element.innerHTML = this.responseText;
        }
        if (this.status == 404) {
          element.innerHTML = "<h1>Page not found.</h1>";
        }
      }
    };
    xhttp.open("GET", `paginas/${file}`, true);
    xhttp.send();
    return xhttp;
  }
}
