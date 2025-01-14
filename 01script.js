let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", () => {
    console.log(document.getElementById("campoTexto").value); // Mostra o valor do campo de texto
    alert("Formulario enviado");
});

let campoTexto = document.getElementById("campoTexto");

campoTexto.addEventListener("change", () => {
    console.log("Campo de texto modificado " + campoTexto.value);
});
campoTexto.addEventListener("focus", () => {
    console.log("Campo de texto enfocado");
});
campoTexto.addEventListener("blur", () => {
    console.log("Campo de texto desenfocado");
});
