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
      listaUL.style = 'display: flex; ' ;
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


// ========================SUBMENU========================
