// Función para mostrar el mensaje de ayuda
function mostrarAyuda() {
    var mensajeAyuda = document.getElementById('mensajeAyuda');
    if (mensajeAyuda.style.display === 'none' || mensajeAyuda.style.display === '') {
        mensajeAyuda.style.display = 'block';
    } else {
        mensajeAyuda.style.display = 'none';
    }
}

// Función para encriptar el texto
function encriptarTexto() {
    const texto = document.getElementById('texto').value;
    const clave = document.getElementById('clave').value;

    if (!texto || !clave) {
        alert('Por favor ingresa un texto y una clave.');
        return;
    }

    const textoEncriptado = encriptar(texto, clave);

    // Mostramos el texto encriptado en el textarea de texto encriptado
    document.getElementById('texto-encriptado').value = textoEncriptado;

    // Limpiamos el campo de texto
    document.getElementById('texto').value = '';
}

// Función para encriptar utilizando una clave
function encriptar(texto, clave) {
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);
        const claveCharCode = clave.charCodeAt(i % clave.length);
        const encriptadoCharCode = charCode + claveCharCode;
        textoEncriptado += String.fromCharCode(encriptadoCharCode);
    }
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto() {
    const textoEncriptado = document.getElementById('texto-encriptado').value;
    const clave = document.getElementById('clave').value;
    
    if (!textoEncriptado || !clave) {
        alert('Por favor ingresa un texto encriptado y una clave.');
        return;
    }

    const textoDesencriptado = desencriptar(textoEncriptado, clave);

    // Mostramos el texto desencriptado en el textarea de texto normal
    document.getElementById('texto').value = textoDesencriptado;

    // Limpiamos el campo de texto encriptado
    document.getElementById('texto-encriptado').value = '';
}

// Función para desencriptar utilizando una clave
function desencriptar(textoEncriptado, clave) {
    let textoDesencriptado = '';
    for (let i = 0; i < textoEncriptado.length; i++) {
        const charCode = textoEncriptado.charCodeAt(i);
        const claveCharCode = clave.charCodeAt(i % clave.length);
        const desencriptadoCharCode = charCode - claveCharCode;
        textoDesencriptado += String.fromCharCode(desencriptadoCharCode);
    }
    return textoDesencriptado;
}

// Event listener para el botón de Encriptar
document.getElementById('btnEncriptar').addEventListener('click', encriptarTexto);

// Event listener para el botón de Desencriptar
document.getElementById('btnDesencriptar').addEventListener('click', desencriptarTexto);
