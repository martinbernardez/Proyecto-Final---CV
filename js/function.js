/* Función: Compartir */
document.getElementById('compartir').onclick = function nativeShare() {
    if (navigator.share) {
        navigator.share({ title: "Diego Herrera", text: "Currículum Vitae", url: "https://www.ejemplo.com/" });
    }
    return false;
}


