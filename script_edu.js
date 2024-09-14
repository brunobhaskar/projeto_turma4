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





