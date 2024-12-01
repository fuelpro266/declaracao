function TrocarPosicao() {
    
    let numeroInteiroAleatorio = gerarNumeroInteiroAleatorio(1, 400);
    let numeroInteiroAleatorio_2 = gerarNumeroInteiroAleatorio(1, 400);

    
    const btn = document.getElementById("Nao");
    const btn_2 = document.getElementById("aleatorio");

    
    btn.style.position = 'absolute';
    btn_2.style.position = 'absolute';

    
    btn.style.top = numeroInteiroAleatorio + 'px';
    btn.style.left = numeroInteiroAleatorio_2 + 'px';

    btn_2.style.top = numeroInteiroAleatorio_2 + 'px';
    btn_2.style.left = numeroInteiroAleatorio + 'px';

    
    const parent = btn.parentNode;
    
    
    parent.insertBefore(btn_2, btn);
    parent.insertBefore(btn, btn_2);
}

function gerarNumeroInteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Aceitou(){
    const tela = document.getElementById("Tela-Central");
    tela.innerHTML = ""; // Limpa o conteúdo da tela central
    tela.style.display = "none"; // Opcional: oculta a tela central
    
    // Classes para animação e exibição da imagem/label
    const heart = document.getElementById("heart");
    const img = document.getElementById("image");
    const coracao = document.getElementById("coracao");

    coracao.classList.add("coracao");
    img.classList.add("image");
    heart.classList.add("heart");
    
}

function mostrarImagem() {
    Aceitou();
    // Exibe a imagem e a label
    const image = document.getElementById('image');
    const label = document.querySelector('.label');
    
    image.classList.remove('hidden'); // Torna a imagem visível
    label.classList.remove('hidden'); // Torna a label visível
    label.style.display = 'block'; // Garante que a label será exibida
    
    // Aplica a animação para a imagem
    image.style.animation = 'none'; // Reseta a animação
    setTimeout(() => {
      image.style.animation = 'flyIn 3s ease-in-out forwards'; // Aplica a animação
    }, 10);
  }