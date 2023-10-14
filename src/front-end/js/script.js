// var navBar = document.getElementById('navBar');
// var clique = false;

// function toggleNavBar() {
//   if (clique) {
//     navBar.style = ' background: none; height: auto; min-width: 0; border-radius: 0; ';
//     listaUL.style = 'display: none; ';
//     clique = false;
//     navBar.classList.remove('active');
//   } else {
//     navBar.style = 'background: #261B1D; height: 50vh; min-width: 5ch; border-radius: 12px; border-top-right-radius: 0; border-top-left-radius: 0;';
//     listaUL.style = 'display: flex; ';
//     clique = true;
//     navBar.classList.add('active');
//   }
// }

// navBar.addEventListener('click', () => {
//   if (window.innerWidth < 450) {
//     toggleNavBar();
//   }
// });

// window.addEventListener('resize', () => {
//   if (window.innerWidth >= 450) {
//     navBar.style = '';
//     listaUL.style = '';
//     clique = false;
//     navBar.classList.remove('active');

//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const menuItems = document.querySelectorAll(".Lista");

//   menuItems.forEach(function (menuItem) {
//     const submenu = menuItem.querySelector(".submenu");
//     if (submenu) {
//       submenu.style.display = "none"; // Inicialmente, oculta o submenu

//       menuItem.addEventListener("click", function (event) {
//         event.preventDefault();
//         submenu.style.display = submenu.style.display === "block" ? "none" : "block";
//       });

//       // Adicione um ouvinte de eventos para fechar o submenu quando se clica em qualquer outro item do menu
//       const otherMenuItems = document.querySelectorAll(".Lista:not(#" + menuItem.id + ")");
//       otherMenuItems.forEach(function (otherMenuItem) {
//         otherMenuItem.addEventListener("click", function (event) {
//           submenu.style.display = "none";
//         });
//       });

//       // Adicionar um evento de clique aos itens do submenu
//       const submenuItems = submenu.querySelectorAll("li");
//       submenuItems.forEach(function (submenuItem) {
//         submenuItem.addEventListener("click", function (event) {
//           // Evita que o evento de clique no submenu se propague para o menu principal e o feche
//           event.stopPropagation();

//           // Aqui você pode adicionar o código para o que deseja fazer quando um item do submenu é clicado
//           // Por exemplo, redirecionar para outra página ou executar uma ação específica
//           console.log("Clicou em um item do submenu:", submenuItem.textContent);
//         });
//       });
//     }
//   });
// });

// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     file = elmnt.getAttribute("include");
//     if (file) {
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//           if (this.status == 200) {
//             elmnt.innerHTML = this.responseText;
//           }
//           if (this.status == 404) {
//             elmnt.innerHTML = "Page not found.";
//           }
//           elmnt.removeAttribute("include");
//           includeHTML();
//         }
//       };
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       return;
//     }
//   }
// }

// document.getElementById("Home").addEventListener("click", function (event) {
//   event.preventDefault();
//   setActiveOption("Home");

//   loadHTML("./paginas/home.html", document.getElementById("contentDiv"));
// });

// document.getElementById("cadastroClientes").addEventListener("click", function (event) {
//   event.preventDefault();

//   setActiveOption("Cadastros");
//   loadHTML("paginas/cadastroPessoas.html", document.getElementById("contentDiv"));

// });

// document.getElementById("cadastroProdutos").addEventListener("click", function (event) {
//   event.preventDefault();
//   setActiveOption("Produtos");

//   loadHTML("Cadastros/CadastroIncluir/incluirClientes.html", document.getElementById("contentDiv"));
// });

// document.getElementById("Administrador").addEventListener("click", function (event) {
//   event.preventDefault();
//   setActiveOption("Administrador");

//   loadHTML("CadastroAdm.html", document.getElementById("contentDiv"));
// });
// document.getElementById("Ajuda").addEventListener("click", function (event) {
//   event.preventDefault();
//   setActiveOption("Ajuda");

//   loadHTML("Ajuda.html", document.getElementById("contentDiv"));
// });
// document.getElementById("Sair").addEventListener("click", function (event) {
//   event.preventDefault();
//   setActiveOption("Sair");

//   loadHTML("Sair.html", document.getElementById("contentDiv"));
// });

// function loadHTML(file, elmnt) {
//   var xhttp;
//   xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4) {
//       if (this.status == 200) {
//         elmnt.innerHTML = this.responseText;
//       }
//       if (this.status == 404) {
//         elmnt.innerHTML = "Page not found.";
//       }
//     }
//   };
//   xhttp.open("GET", file, true);
//   xhttp.send();
// }

// includeHTML();
// window.addEventListener("DOMContentLoaded", function () {
//   loadHTML("HomeAdm.html", document.getElementById("contentDiv"));

// });

// // Select ative
// function setActiveOption(optionId) {
//   var options = document.getElementsByClassName("Lista");
//   for (var i = 0; i < options.length; i++) {
//     options[i].classList.remove("active");
//   }

//   var option = document.getElementById(optionId);
//   option.classList.add("active");
// }
// setActiveOption("Home"); // Define a primeira opção como ativa

//MODAL
// Obter elementos do DOM
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("openModalBtn");
// var span = document.getElementsByClassName("close")[0];

// // Abrir modal quando o botão é clicado
// btn.addEventListener("click", function () {
//   modal.style.display = "block";
// });

// // Fechar o modal quando o usuário clica no "x"
// span.addEventListener("click", function () {
//   modal.style.display = "none";
// });

// // Fechar o modal quando o usuário clica fora da janela modal
// window.addEventListener("click", function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });


//======================= MODAL =============================================


//Carregar telas

const pessoa = document.querySelector("#pessoas");
const home = document.querySelector("#home");

console.log(pessoas)

home.addEventListener("click", async () => {
  const tela = await loadHTML("main", "home.html")
})


pessoa.addEventListener("click", async () => {
  const tela = await loadHTML("main", "pessoas.html");
})


function loadHTML(id, filename) {
  let xhttp;
  let element = document.getElementById(id)
    ;
  let file = filename;

  if (file) {

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) { element.innerHTML = this.responseText; }
        if (this.status == 404) { element.innerHTML = "<h1>Page not found.</h1>"; }
      }
    }
    xhttp.open("GET", `paginas/${file}`, true);
    xhttp.send();
    return xhttp;
  }

}