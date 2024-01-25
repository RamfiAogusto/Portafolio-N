document.getElementById("copiar-el-correo").addEventListener("click", function () {
        var textoACopiar = "ramfiaogusto@gmail.com";
        var elementoTemporal = document.createElement("textarea");
        elementoTemporal.value = textoACopiar;
        document.body.appendChild(elementoTemporal);
        elementoTemporal.select();
        document.execCommand("copy");
        document.body.removeChild(elementoTemporal);
        alert("Correo copiado al portapapeles");
    });
