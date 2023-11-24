function showTab(tabId) {
    // Oculta todas las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Muestra la pestaña seleccionada
    document.getElementById(tabId).classList.add('active');

    // Ajusta la posición de las pestañas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(`tab${tabId.charAt(0).toUpperCase() + tabId.slice(2)}`).classList.add('active');
}