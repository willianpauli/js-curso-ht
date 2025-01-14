function validarFormulario() {
    //Obter o valor do campo de texto
    const campoTexto = document.getElementById("campoTexto").value;

    //Verificar se o campo de texto está vazio
    if (campoTexto === "") {
        alert("O campo de texto não pode estar vazio!");
        return false; // impede a submissão do formulário;
    } 
    return true; // permite a submissão do formulário;
}
