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