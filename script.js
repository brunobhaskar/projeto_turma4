

const path = window.location.pathname;
const pageName = path.split("/").pop();

switch (pageName) {
    case 'home.html':
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
        console.log(document);

                // CAPTURANDO OS ELEMENTOS PELO DOM //
        // ---------- VALIDAÇÃO USERNAME ---------- //
        let usernameInput = document.getElementById("username");
        let usernameLabel = document.querySelector('label[for="username"]');
        let usernameHelper = document.getElementById("username-helper");
        

        // --------- VALIDAÇÃO E-MAIL -------------//
        let emailInput = document.getElementById("email");
        let emailLabel = document.querySelector('label[for="email"]');
        let emailHelper = document.getElementById("email-helper");

        // --------- VALIDAÇÃO IDADE -------------//
        let idadeInput = document.getElementById("idade");
        let idadeLabel = document.querySelector('label[for="idade"]');
        let idadeHelper = document.getElementById("idade-helper");

        // ---------VALIDAÇÂO ENVIAR ------------//
        let form = document.getElementById('cadastroForm');


        // CAMPOS OBRIGATORIOS//
        // Mostrar popup de campo obrigatório  "focus""
        function campoObrigatorio(input, label){ 
        imput.addEventListener("focus", function() {
            label.classList.add("required-popup")
        });
        } ;
        campoObrigatorio (usernameInput, usernameLabel);
        campoObrigatorio (emailInput, emailLabel);
        campoObrigatorio (idadeInput, idadeLabel);

        // Ocultar popup de campo obrigatório  "blur"
        function ocultarCampoObrigatorio(input, label){ 
        imput.addEventListener("blur", function() {
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

        // Impede o envio do formulário caso a idade seja inválida
        form.addEventListener('submit', (event) => {
        const idade = parseInt(idadeInput.value);

        if (isNaN(idade) || idade < 18) {
            event.preventDefault(); // Bloqueia o envio do formulário
            idadeHelper.style.display = 'block'; // Mostra mensagem de erro se não estiver visível
            idadeInput.classList.add('error');
        }
        });

        // Cadastro efetuado com sucesso //
        


        
        
        break;
    case 'biblioteca.html':
        console.log('Você está na página KURUMIN.');
        // Código para a página Kurumin
        const imageData = [
            './imagens/IMG_4958.JPG',
            './imagens/IMG_4950.JPG',
            './imagens/IMG_7061.JPG',
        ];
        let currentIndex = 0; // Índice da imagem atual

        // Seleciona os elementos do HTML
        const slider = document.getElementById('slider');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        // Função para atualizar o slider com a imagem atual
        function updateSlider() {
            slider.innerHTML = ''; // Limpa o conteúdo atual do slider
            const img = document.createElement('img');
            img.src = imageData[currentIndex];
            slider.appendChild(img);
        }

        // Função para ir para a próxima imagem
        function nextImage() {
            currentIndex = (currentIndex + 1) % imageData.length; // Volta ao início se estiver no final
            updateSlider();
        }

        // Função para ir para a imagem anterior
        function prevImage() {
            currentIndex = (currentIndex - 1 + imageData.length) % imageData.length; // Vai para o final se estiver no início
            updateSlider();
        }

        // Adiciona event listeners para os botões
        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);

        // Inicializa o slider
        updateSlider();


        break;


    case 'educacao.html':
        console.log('Você está na página de Educação.');
        // Código para a página Educação INFANTIL
        
        const imageData2 = [
            './imagens/IMG_7159.JPG',
            './imagens/IMG_7207.JPG',
            './imagens/IMG_8361.JPG',
        ];
        let currentIndex2 = 0; // Índice da imagem atual

        // Seleciona os elementos do HTML
        const slider2 = document.getElementById('slider');
        const prevButton2 = document.getElementById('prev');
        const nextButton2 = document.getElementById('next');

        // Função para atualizar o slider com a imagem atual
        function updateSlider2() {
            slider2.innerHTML = ''; // Limpa o conteúdo atual do slider
            const img2 = document.createElement('img');
            img2.src = imageData2[currentIndex2];
            slider2.appendChild(img2);
        }

        // Função para ir para a próxima imagem
        function nextImage2() {
            currentIndex2 = (currentIndex2 + 1) % imageData2.length; // Volta ao início se estiver no final
            updateSlider2();
        }

        // Função para ir para a imagem anterior
        function prevImage2() {
            currentIndex2 = (currentIndex2 - 1 + imageData2.length) % imageData2.length; // Vai para o final se estiver no início
            updateSlider2();
        }

        // Adiciona event listeners para os botões
        nextButton2.addEventListener('click', nextImage2);
        prevButton2.addEventListener('click', prevImage2);

        // Inicializa o slider
        updateSlider2();
        break;

    default:
        console.log('Página não encontrada.');
        // Código para páginas não especificadas
        break;
}

//para kurumin

