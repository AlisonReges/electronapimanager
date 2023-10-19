import { cadastrarPessoa } from "./cadastrarPessoa.js";
import { listarPessoas } from "./listarPessoas.js";
var navBar = document.getElementById("navBar");
var clique = false;

function toggleNavBar() {
  if (clique) {
    navBar.style =
      " background: none; height: auto; min-width: 0; border-radius: 0; ";
    listaUL.style = "display: none; ";
    clique = false;
    navBar.classList.remove("active");
  } else {
    navBar.style =
      "background: #261B1D; height: 50vh; min-width: 5ch; border-radius: 12px; border-top-right-radius: 0; border-top-left-radius: 0;";
    listaUL.style = "display: flex; ";
    clique = true;
    navBar.classList.add("active");
  }
}

navBar.addEventListener("click", () => {
  if (window.innerWidth < 450) {
    toggleNavBar();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 450) {
    navBar.style = "";
    listaUL.style = "";
    clique = false;
    navBar.classList.remove("active");
  }
});

//DROP DOWN MENU
const menuCadastro = document.querySelector("#cadastro");
menuCadastro.addEventListener("click", () => {
  const subOption = document.querySelector("#submenuPedidos");
  subOption.style.display =
    subOption.style.display === "block" ? "none" : "block";
});

//======================= MODAL =============================================

//Carregar telas na div main
const pessoa = document.querySelector("#pessoas");
const home = document.querySelector("#home");

home.addEventListener("click", async () => {
  const tela = await loadHTML("main", "home.html");
});
//##################################################################################
//Cadastrar Pessoa
pessoa.addEventListener("click", async () => {
  const tela = await loadHTML("main", "pessoas.html");
  tela.addEventListener("load", function () {
    const btnAdd = document.querySelector("#btnAdd");
    const modal = document.querySelector(".Modal");
    const sair = document.querySelector("#sair");
    let listaPessoas; // Declare a constante fora do escopo da Promessa
    const concluir = document.querySelector("#concluir");

    btnAdd.addEventListener("click", function () {
      modal.style.display = "flex";
    });

    sair.addEventListener("click", function () {
      const registration = document.querySelector("#matriculaPessoa");
      const name = document.querySelector("#nomePessoa");
      registration.value = "";
      name.value = "";
      modal.style.display = "none";
    });

    concluir.addEventListener("click", async (event) => {
      event.preventDefault();
      const registration = document.querySelector("#matriculaPessoa").value;
      const name = document.querySelector("#nomePessoa").value;

      cadastrarPessoa(registration, name)
        .then((data) => {
          alert(
            `Cadastro realizado com sucesso: Pessoa: ${data.name}, Matrícula: ${data.registration}`
          );
          const registration = document.querySelector("#matriculaPessoa");
          const name = document.querySelector("#nomePessoa");
          registration.value = "";
          name.value = "";
          modal.style.display = "none";
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
                <button class="DeleteBtnClientes" value="${id}">
                  <ion-icon name="trash"></ion-icon>
                </button>
                <button class="AlterarBtnClientes" value="${id}">
                  <ion-icon name="create"></ion-icon>
                </button>
              </td>
            </tr>`;
            });
          });
        })
        .catch((erro) => {
          alert(`Erro ao cadastrar a pessoa: ${erro.message}`);
        });
    });

    //##################################################################################
    //Carregar lista de pessoas.

    listarPessoas()
      .then((data) => {
        listaPessoas = data; // Atribui os dados à constante
        const tabelaPessoas = document.querySelector("tbody#listaPessoas");
        tabelaPessoas.innerHTML = "";
        listaPessoas.forEach((element) => {
          tabelaPessoas.innerHTML += `
          <tr>
          <td>${element.registration}</td>
          <td>${element.name}</td>
          <td class="AcaoBtn">
            <button class="DeleteBtnClientes">
              <ion-icon name="trash"></ion-icon>
            </button>
            <button class="AlterarBtnClientes">
              <ion-icon name="create"></ion-icon>
            </button>
          </td>
        </tr>`;
        });
      })
      .catch((error) => {
        alert("Erro ao listar pessoas");
      });
    //##################################################################################
  });
});
//##################################################################################

//Carregar arquivo html na tela main
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
