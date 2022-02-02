const texto = document.querySelector(".text-input");
const descripto = document.querySelector(".text-input2");
const copiar = document.querySelector(".btn-copy");
const btnCripto = document.querySelector(".btn-cripto");
const btnDescipto = document.querySelector(".btn-descripto");


btnCripto.addEventListener("click", function criptografar() {

    let mensagem = texto.value;
    let resultado = mensagem
        .replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    texto.value = resultado;


    event.preventDefault();

    var caracteres = texto.value.toLowerCase();
    var bloqueia = caracteres.replaceAll(/[^a-z]/g, "");

    if (caracteres == bloqueia) {
    } else {
        alert("Não é permitido caracteres especias")
        texto.value = "";
    }
    
    descripto.value=resultado;
    texto.value = "";

})

btnDescipto.addEventListener("click", function descriptografar() {
    let textCodificado = texto.value;
    let decodificar = textCodificado
        .replaceAll(/enter/gi, 'e').replaceAll(/imes/gi, 'i').replaceAll(/ai/gi, 'a').replaceAll(/ober/gi, 'o').replaceAll(/ufat/gi, 'u');

    texto.value = decodificar;

    descripto.value = decodificar;
    texto.value="";

})
document.querySelector(".btn-copy").addEventListener("click", function () {
    
    var copiarTexto = document.querySelector(".text-input2");
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiarTexto.value);

    alert("Seu texto foi copiado: " + copiarTexto.value);
})
