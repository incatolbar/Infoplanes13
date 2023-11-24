//para el menu en responsive

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
  
    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
  });
  

//para el cambio de pestañas 

function showTab(tabId) {
    // Oculta todas las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Muestra la pestaña seleccionada
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    // Ajusta la posición de las pestañas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    const tabElement = document.getElementById(`tab${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`);
    tabElement.classList.add('active');

    // Intercambia las clases de las pestañas
    if (tabElement.classList.contains('tab-premium')) {
        document.getElementById('tabBasic').classList.add('active');
        document.getElementById('tabPremium').classList.remove('active');
    } else {
        document.getElementById('tabPremium').classList.add('active');
        document.getElementById('tabBasic').classList.remove('active');
    }
}