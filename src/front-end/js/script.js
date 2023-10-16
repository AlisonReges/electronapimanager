var navBar = document.getElementById('navBar');
var clique = false;

function toggleNavBar() {
    if (clique) {
        navBar.style = ' background: none; height: auto; min-width: 0; border-radius: 0; ';
        listaUL.style = 'display: none; ';
        clique = false;
        navBar.classList.remove('active');
    } else {
        navBar.style = 'background: #261B1D; height: 50vh; min-width: 5ch; border-radius: 12px; border-top-right-radius: 0; border-top-left-radius: 0;';
        listaUL.style = 'display: flex; ';
        clique = true;
        navBar.classList.add('active');
    }
}

navBar.addEventListener('click', () => {
    if (window.innerWidth < 450) {
        toggleNavBar();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 450) {
        navBar.style = '';
        listaUL.style = '';
        clique = false;
        navBar.classList.remove('active');

    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".Lista");

    menuItems.forEach(function (menuItem) {
        const submenu = menuItem.querySelector(".submenu");
        if (submenu) {
            submenu.style.display = "none"; // Inicialmente, oculta o submenu

            menuItem.addEventListener("click", function (event) {
                event.preventDefault();
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            });

            // Adicione um ouvinte de eventos para fechar o submenu quando se clica em qualquer outro item do menu
            const otherMenuItems = document.querySelectorAll(".Lista:not(#" + menuItem.id + ")");
            otherMenuItems.forEach(function (otherMenuItem) {
                otherMenuItem.addEventListener("click", function (event) {
                    submenu.style.display = "none";
                });
            });

            // Adicionar um evento de clique aos itens do submenu
            const submenuItems = submenu.querySelectorAll("li");
            submenuItems.forEach(function (submenuItem) {
                submenuItem.addEventListener("click", function (event) {
                    // Evita que o evento de clique no submenu se propague para o menu principal e o feche
                    event.stopPropagation();

                    // Aqui você pode adicionar o código para o que deseja fazer quando um item do submenu é clicado
                    // Por exemplo, redirecionar para outra página ou executar uma ação específica
                    console.log("Clicou em um item do submenu:", submenuItem.textContent);
                });
            });
        }
    });
});
//======================= MODAL =============================================


//Carregar telas na div main

const pessoa = document.querySelector("#pessoas");
const home = document.querySelector("#home");

home.addEventListener("click", async () => {
    const tela = await loadHTML("main", "home.html")
})


pessoa.addEventListener("click", async () => {
    const tela = await loadHTML("main", "pessoas.html");
    tela.addEventListener("load", function () {

            const btnAdd = document.querySelector("#btnAdd")
            const modal = document.querySelector(".Modal")
            const sair = document.querySelector("#sair")
            console.log(sair)
            btnAdd.addEventListener("click", function(){
                
                    modal.style = "display:flex;"


            })

            sair.addEventListener("click", function(){
                modal.style = "display:none;"

            })

    })




})



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
        }
        xhttp.open("GET", `paginas/${file}`, true);
        xhttp.send();
        return xhttp;
    }

}

