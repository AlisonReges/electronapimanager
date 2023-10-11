function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    elmnt.removeAttribute("include");
                    includeHTML();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

document.getElementById("Home").addEventListener("click", function (event) {
    event.preventDefault();
    setActiveOption("Home");

    loadHTML("HomeAdm.html", document.getElementById("contentDiv"));
});

document.getElementById("cadastroClientes").addEventListener("click", function (event) {
    event.preventDefault();

    setActiveOption("Cadastros");
    loadHTML("paginas/Cadastros/cadastroClientes.html", document.getElementById("contentDiv"));

});



document.getElementById("cadastroProdutos").addEventListener("click", function (event) {
    event.preventDefault();
    setActiveOption("Produtos");

    loadHTML("Cadastros/CadastroIncluir/incluirClientes.html", document.getElementById("contentDiv"));
});


document.getElementById("Administrador").addEventListener("click", function (event) {
    event.preventDefault();
    setActiveOption("Administrador");

    loadHTML("CadastroAdm.html", document.getElementById("contentDiv"));
});
document.getElementById("Ajuda").addEventListener("click", function (event) {
    event.preventDefault();
    setActiveOption("Ajuda");

    loadHTML("Ajuda.html", document.getElementById("contentDiv"));
});
document.getElementById("Sair").addEventListener("click", function (event) {
    event.preventDefault();
    setActiveOption("Sair");

    loadHTML("Sair.html", document.getElementById("contentDiv"));
});

function loadHTML(file, elmnt) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
                elmnt.innerHTML = "Page not found.";
            }
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

includeHTML();
window.addEventListener("DOMContentLoaded", function () {
    loadHTML("HomeAdm.html", document.getElementById("contentDiv"));

});




// Select ative
function setActiveOption(optionId) {
    var options = document.getElementsByClassName("Lista");
    for (var i = 0; i < options.length; i++) {
        options[i].classList.remove("active");
    }

    var option = document.getElementById(optionId);
    option.classList.add("active");
}
setActiveOption("Home"); // Define a primeira opção como ativa


