let input;
function prueba() {
    input = document.getElementById('texto').value;
    const textarea = document.getElementById('output-copiar');
    const miVariable = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    textarea.value = miVariable;
    ocultarElementos();
}

function ocultarElementos() {
    document.getElementById("imagen-copiar").style.display = "none";
    document.getElementById("mensaje-copiar").style.display = "none";
    document.getElementById("output-copiar").style.display = "inline";
    document.getElementById("boton-copiar").style.display = "inline";
}



