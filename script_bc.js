console.log('Você está na página Biblioteca.');

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


console.log('Você está na página de Educação.');
// Código para a página Educação INFANTIL
