const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

//funcion para accionar el boton de encriptar

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
}

function encriptar(stringEncriptada) {
    //matrizCodigo agregara las letras al string ingresado
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    //para poder convertir los textos a solo minuscula:
    stringEncriptada = stringEncriptada.toLowerCase();

    //For recorre cada una de las vocales, index es igual a una vocal
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

function copiarMensaje() {
    let copiarTexto = document.getElementById("mensaje-encriptado");

    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiarTexto.value);

}