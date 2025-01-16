const form = document.querySelector('form');
const limpar = document.getElementById('limpar');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
//Capturar os dados dos inputs
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;

//Verificar se os campos estão preenchidos
  if (nome && idade) {
//Salvar os dados no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("idade", idade);
//Limpar os campos  
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    alert("Dados salvos com sucesso!");
  } else {
    alert("Preencha todos os campos!");
  }
});

//Recuperar os dados do localStorage
const carregarBtn = document.getElementById('carregar');
const texto = document.getElementById('texto');
carregarBtn.addEventListener('click', function () {
  const nome = localStorage.getItem("nome");
  const idade = localStorage.getItem("idade");
  texto.textContent = `Nome: ${nome}, Idade: ${idade}`;
});

//Apagar os dados do localStorage
limpar.addEventListener('click', function () {
  localStorage.clear();
  texto.textContent = '';
  alert("Dados apagados com sucesso!");
});