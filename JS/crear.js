/* CREAR */

function enProceso() {
    alert ("Pagina en proceso, vuelva cuando este terminada")
    var confirmacion = confirm("¿Desea volver a la página principal?")
    if (confirmacion === true) {
        location.href = "index.html";
    }
}