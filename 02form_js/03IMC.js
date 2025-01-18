const formulario = document.getElementById("formulario");
const nomeInput = document.getElementById("nome");
const msgError = document.getElementById("msgError");



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    resetarErrorMsg()
    
    if (!nomeInput.value) {
        msgError.textContent = "O campo nome é obrigatório";
        msgError.style.display = "block";
    } else {
        msgError.style.display = "none";
    }

    const nome = nomeInput.value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado");

    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
    } else if (imc < 34.9) {
        categoria = "Obesidade grau 1";
    } else if (imc < 39.9) {
        categoria = "Obesidade grau 2";
    } else {
        categoria = "Obesidade grau 3";
    }

    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} e você está na categoria ${categoria}.`;

    document.getElementById("categoria").value = categoria;

    let dados = new FormData(formulario);
    for (let [chave, valor] of dados.entries())
        console.log(chave + " : " + valor);

});



function resetarErrorMsg() {
    msgError.textContent = "";
}

