/* Compartir */

document.getElementById('share').onclick = function nativeShare() {
    if (navigator.share) {
        navigator.share({ title: "Diego Herrera", text: "Currículum Vitae", url: "https://www.ejemplo.com/" });
    }
    return false;
}



/* Dark Mode */

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', function DarkMode() {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})
