function encriptar() {
    if(document.getElementById('texto').value === "") {
        const divAnimado = document.getElementById("mensaje-copiar");
        divAnimado.classList.add("shake-horizontal");
        setTimeout(function () {
            divAnimado.classList.remove("shake-horizontal");
        }, 800);
    }
    else {
        let input = document.getElementById('texto').value;
        input = input.toLowerCase();
        let textarea = document.getElementById('output-copiar');
        textarea.value = input.replaceAll(/[eé]/g, 'enter')
             .replaceAll(/[ií]/g, 'imes')
             .replaceAll(/[aá]/g, 'ai')
             .replaceAll(/[oó]/g, 'ober')
             .replaceAll(/[uú]/g, 'ufat');
        ocultarElementos();
    }
}

function desencriptar () {
    if(document.getElementById('texto').value === "") {
        const divAnimado = document.getElementById("mensaje-copiar");
        divAnimado.classList.add("shake-horizontal");
        setTimeout(function () {
            divAnimado.classList.remove("shake-horizontal");
        }, 800);
    }
    else {
        let input = document.getElementById('texto').value;
        let textarea = document.getElementById('output-copiar');
        textarea.value = input.replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ober', 'o')
            .replaceAll('ufat', 'u');
        ocultarElementos();
    }
}

function ocultarElementos() {
    document.getElementById("imagen-copiar").style.display = "none";
    document.getElementById("mensaje-copiar").style.display = "none";
    document.getElementById("output-copiar").style.display = "inline";
    document.getElementById("boton-copiar").style.display = "inline";
}

function copiarTexto() {
    const copiar = document.getElementById("output-copiar").value;
    const botonCopiar = document.getElementById("boton-copiar");
    const simbolo = document.getElementById("simbolo-copiar");
    navigator.clipboard.writeText(copiar) .then(
        () => {
            botonCopiar.style.backgroundColor = '#50C878';
            botonCopiar.style.color = '#0A3871';
            simbolo.textContent = "done";
            setTimeout(function () {
                botonCopiar.style.backgroundColor = '#D8DFE8';
                botonCopiar.style.color = '#0A3871';
                simbolo.textContent = "content_copy";
            }, 400);
        },
        () => {
            botonCopiar.style.backgroundColor = '#CC2630';
            botonCopiar.style.color = '#0A3871';
            simbolo.textContent = "close";
            setTimeout(function () {
                botonCopiar.style.backgroundColor = '#D8DFE8';
                botonCopiar.style.color = '#0A3871';
                simbolo.textContent = "content_copy";
            }, 400);
        }
    );
}