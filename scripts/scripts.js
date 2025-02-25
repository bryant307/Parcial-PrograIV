class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer><p>&copy; 2025 Información sobre el Dengue en El Salvador</p></footer>`;
    }
}
customElements.define('custom-footer', CustomFooter);

document.addEventListener("DOMContentLoaded", function () {
    const botonMostrar = document.getElementById("mostrar-mas");
    const infoAdicional = document.getElementById("info-adicional");
    const imagenPrevencion = document.getElementById("imagen-prevencion");
    const botonImagen = document.getElementById("mostrar-imagen");
    const imagenDengue = document.getElementById("imagen-dengue");

    if (botonMostrar && infoAdicional && imagenPrevencion) {
        botonMostrar.addEventListener("click", function () {
            infoAdicional.classList.toggle("hidden");
            imagenPrevencion.classList.toggle("hidden");
        });
    }

    if (botonImagen && imagenDengue) {
        botonImagen.addEventListener("click", function () {
            imagenDengue.classList.toggle("hidden");
        });
    }
});
