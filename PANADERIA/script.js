function cargarContenido(archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById("contenido-principal").innerHTML = data;
            localStorage.setItem("paginaActual", archivo);
        })
        .catch(error => {
            console.error('Error al cargar el contenido:', error);
            document.getElementById("contenido-principal").innerHTML = '<p>Error al cargar el contenido.</p>';
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const ultimaPagina = localStorage.getItem("paginaActual");
    if (ultimaPagina) {
        cargarContenido(ultimaPagina);
    } else {
        cargarContenido('inicio.html');
    }
});