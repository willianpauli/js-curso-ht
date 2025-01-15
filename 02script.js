const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    resetarErrorMsg();

    if (!validarCamposObrigatorios()) {
        e.preventDefault();
    }
    if (!compararSenhas()) {
        e.preventDefault();
    }
});

function validarCamposObrigatorios() {
    let camposObrigatorios = document.querySelectorAll(".obrigatorio");
    let camposValidos = true;

    for (let i = 0; camposObrigatorios.length > i; i++) {
        let campo = camposObrigatorios[i];

        if (campo.value === "" || campo.value === null) {
            exibirErro(campo, "Preencha todos os campos obrigatórios!");
            camposValidos = false;
        }
    }
    return camposValidos;
}

function compararSenhas() {
    let senha = document.getElementById("senha");
    let confirmarSenha = document.getElementById("confirmarSenha");

    if (senha.value !== confirmarSenha.value) {
        exibirErro(confirmarSenha, "As senhas não são iguais!");
        return false;
    }
    return true;
}

function exibirErro(elemento, mensagem) {
    let mensagemErro = elemento.parentElement.querySelector(".msgError");
    mensagemErro.textContent = mensagem;
}

function resetarErrorMsg() {
    let errorMsg = document.querySelectorAll(".msgError");
    for (let i = 0; errorMsg.length > i; i++) {
        errorMsg[i].textContent = "";
    }
}
