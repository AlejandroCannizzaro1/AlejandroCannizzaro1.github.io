function copiarTexto(texto) {
    navigator.clipboard.writeText("alejandrocannizzaro@gmail.com").then(() => {
        alert("Correo copiado: " + texto);
    }).catch(err => {
        console.error("Error al copiar", err);
    });
}

/* ✅ navigator es un objeto que permite acceder a funcionalidades del navegador y del dispositivo del usuario.
✅ Se usa para cosas como copiar texto, obtener la ubicación, saber si hay conexión, acceder a la batería, etc.*/

/* Traduccion al ingles*/

