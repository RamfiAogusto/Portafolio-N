document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementsByClassName("close")[0];
    var newVersionBtn = document.getElementById("newVersionButton");
    var stayHereBtn = document.getElementById("stayHereButton");

    // Mostrar el modal cuando se carga la página
    modal.style.display = "block";

    // Cuando el usuario hace clic en la "X", cierra el modal
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Cuando el usuario hace clic en el botón "Ir a la nueva versión"
    newVersionBtn.onclick = function () {
        window.location.href = "https://portfolio-react-ramfi-aogusto.vercel.app/"; // Reemplaza con la URL de tu nuevo portafolio
    };

    // Cuando el usuario hace clic en el botón "Quedarse en esta versión"
    stayHereBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Cuando el usuario hace clic fuera del modal, lo cierra
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
