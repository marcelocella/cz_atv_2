// 1. Defina a lista de nomes das suas 6 imagens e o caminho (PASTA)
const catImages = [
    'c1.png',
    'c2.png',
    'c3.png',
    'c4.png',
    'c5.png',
    'c6.png' // Imagem do close-up/GoPro
];
// !!! ATENÇÃO: Atualize este caminho para o local real onde você salvou suas imagens
const imagePath = 'imagem/'; 

const catElement = document.getElementById('cat-animation');
const gifElement = document.getElementById('gif-impacto');


// Função principal de atualização
function updateCatAnimation() {
    const scrollPosition = window.scrollY;
    
    // Altura total que pode ser rolada
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Se não houver rolagem possível, não faz nada
    if (totalScrollHeight === 0) return;

    // Calcula a porcentagem de rolagem completa da página
    const scrollPercentage = scrollPosition / totalScrollHeight;

    // Calcula o limite de rolagem para cada frame (1/6, 2/6, etc.)
    const frameFraction = 1 / catImages.length;

    // Determina o índice da imagem (0 a 5)
    // Ex: Se scrollPercentage for 0.2 (20%), 0.2 / 0.166 (1/6) = ~1.2, Math.floor resulta em 1
    let imageIndex = Math.floor(scrollPercentage / frameFraction);
    
    // Garante que o índice não ultrapasse o número máximo de imagens (índice 5)
    imageIndex = Math.min(imageIndex, catImages.length - 1);
    
    // 2. Altera a fonte da imagem
    catElement.src = imagePath + catImages[imageIndex];

    // 3. Efeito de "Pulo" e "Saída" (no último frame)
    if (imageIndex === catImages.length - 1) {
        // Na última imagem, move para cima e aumenta o zoom para simular o ataque/saída de tela (efeito GoPro)
        catElement.style.transform = 'translateY(-50px) scale(3.5)'; 
        gifElement.classList.add('gif-impacto-visible');
    }else if (imageIndex === catImages.length - 2) {
        // Na última imagem, move para cima e aumenta o zoom para simular o ataque/saída de tela (efeito GoPro)
        catElement.style.transform = 'translateY(-50px) scale(2.5)'; 
        gifElement.classList.remove('gif-impacto-visible');
    
    }else if (imageIndex === catImages.length - 3) {
        // Na última imagem, move para cima e aumenta o zoom para simular o ataque/saída de tela (efeito GoPro)
        catElement.style.transform = 'translateY(-50px) scale(1.5)'; 
        gifElement.classList.remove('gif-impacto-visible');
    
    }else {
        // Volta ao normal
        catElement.style.transform = 'translateY(0) scale(1)';
        gifElement.classList.remove('gif-impacto-visible');
    }
}

// Anexa a função ao evento de rolagem
window.addEventListener('scroll', updateCatAnimation);

// Chama a função uma vez para carregar o frame correto ao iniciar/recarregar a página
updateCatAnimation();