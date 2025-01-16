let formulario = document.getElementById("formulario");

function isValidName(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (
      (char < "A" || char > "Z") &&
      (char < "a" || char > "z") &&
      (char < "À" || char > "Ú") &&
      (char < "à" || char > "ô") &&
      char !== " "
    ) {
      return false;
    }
  }
  return true;
}

function isValidCPF(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

function isValidTel(tel) {
  return tel.length === 11 && !isNaN(tel);
}

function isValidCEP(cep) {
  return cep.length === 8 && !isNaN(cep);
}

function isValidState(state) {
  return (
    state.length === 2 &&
    state[0] >= "A" &&
    state[0] <= "Z" &&
    state[1] >= "A" &&
    state[1] <= "Z"
  );
}

function validarEGuardarFormulario(e) {
  e.preventDefault();
  let nome = document.getElementById("nome").value.trim();
  let cpf = document.getElementById("cpf").value.trim();
  let tel = document.getElementById("tel").value.trim();
  let cep = document.getElementById("cep").value.trim();
  let rua = document.getElementById("rua").value.trim();
  let numero = document.getElementById("numero").value.trim();
  let complemento = document.getElementById("complemento").value.trim();
  let bairro = document.getElementById("bairro").value.trim();
  let cidade = document.getElementById("cidade").value.trim();
  let estado = document.getElementById("estado").value.trim();

  if (
    !nome ||
    !cpf ||
    !tel ||
    !cep ||
    !rua ||
    !numero ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert("Preencha todos os campos");
    return;
  }

  if (!isValidName(nome)) {
    alert("Nome inválido");
    return;
  }

  if (!isValidCPF(cpf)) {
    alert("CPF inválido");
    return;
  }

  if (!isValidTel(tel)) {
    alert("Telefone inválido");
    return;
  }

  if (!isValidCEP(cep)) {
    alert("CEP inválido");
    return;
  }

  if (!isValidState(estado)) {
    alert("Estado inválido");
    return;
  }

  let dadosform = {
    nome,
    cpf,
    tel,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };

  localStorage.setItem("form", JSON.stringify(dadosform));
  alert("Formulário salvo com sucesso!");
  formulario.reset();
}

formulario.addEventListener("submit", validarEGuardarFormulario);
