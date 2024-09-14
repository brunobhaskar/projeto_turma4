console.log('Você está na página inicial.');
// Código para a página inicial
const projetos = [
    {titulo:"Educação Infantil",
    imagem:"./imagens/IMG_7207.JPG",
    link:"http://127.0.0.1:5500/educacao.html"
},
{
    titulo:"Biblioteca Comunitária",
    imagem:"./imagens/IMG_4958.JPG",
    link:"http://127.0.0.1:5500/biblioteca.html"
},
{
    titulo:"Cine-Moara",
    imagem:"./imagens/IMG_7278.JPG",
    link:"http://127.0.0.1:5500/cine.html"
}]; //Criando objeto do porjeto

const container = document.getElementById("projetos");

const card = document.createElement('div');

projetos.forEach((projeto) => {
    const card = document.createElement('div'); 
    card.innerHTML = `
    <a href="${projeto.link}"><h2>${projeto.titulo}</h2></a>
    <img src=${projeto.imagem}>
    `
    card.classList.add("cards")
    container.appendChild(card)
});


        // CAPTURANDO OS ELEMENTOS PELO DOM //
// ---------- campo USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");


// --------- campo E-MAIL -------------//
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// --------- campo IDADE -------------//
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");

// ---------botão ENVIAR ------------//
let form = document.getElementById('cadastroForm');


// CAMPOS OBRIGATORIOS//
// Mostrar popup de campo obrigatório  "focus""
function campoObrigatorio(input, label){ 
    input.addEventListener("focus", function() {
        label.classList.add("required-popup")
    });
} ;
// Ocultar popup de campo obrigatório  "blur"
function ocultarCampoObrigatorio(input, label){ 
    input.addEventListener("blur", function() {
        label.classList.remove("required-popup")
    });
} ;

ocultarCampoObrigatorio (usernameInput, usernameLabel);
ocultarCampoObrigatorio (emailInput, emailLabel);
ocultarCampoObrigatorio (idadeInput, idadeLabel);


// VALIDAÇÃO - VALOR DO IMPUT //
// validar quantidade de caracters na label username //
usernameInput.addEventListener("input", (elemento) => {
// parametro elemento => representa o elemento que chama o addEventListener (nesse caso o usernameInput)

    let inputValue = elemento.target.value;

    if (inputValue.length < 6) {
    usernameInput.classList.remove("correct")
    usernameInput.classList.add("error")

    usernameHelper.classList.add("visible")
    usernameHelper.innerText =
        "O nome precisa ter pelo menos 6 caracteres"
    } else {
    usernameInput.classList.remove("error")
    usernameInput.classList.add("correct")

    usernameHelper.innerText =""
    }
});


// validar idade maior que 18 anos //

idadeInput.addEventListener("input", (elemento) => {
let inputValue = parseInt(elemento.target.value);

if (isNaN(inputValue) || inputValue < 18) {
    idadeInput.classList.remove("correct");
    idadeInput.classList.add("error"); // Adiciona classe de erro

    idadeHelper.classList.add("visible");
    idadeHelper.innerText = 
    "É preciso ter no mínimo 18 anos de idade";
} else {
    idadeInput.classList.remove("error"); // Remove a classe de erro
    idadeInput.classList.add("correct"); // Adiciona classe correta

    idadeHelper.innerText = ""
}
})

emailInput.addEventListener("input", (elemento) => {
    let inputValue = elemento.target.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(inputValue)) {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.classList.add("visible");
        emailHelper.innerText = "Por favor, insira um e-mail válido";
    } else {
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.innerText = "";
    }
});




// Impede o envio do formulário caso a idade seja inválida
form.addEventListener('submit', (event) => {
const idade = parseInt(idadeInput.value);

if (isNaN(idade) || idade < 18) {
    event.preventDefault(); // Bloqueia o envio do formulário
    idadeHelper.style.display = 'block'; // Mostra mensagem de erro se não estiver visível
    idadeInput.classList.add('error');
}
});
console.log(document);

// Cadastro efetuado com sucesso //
        
        
        
        
        