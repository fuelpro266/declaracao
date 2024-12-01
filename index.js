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
    const Tela = document.getElementById("Tela-Central");
    Tela.innerHTML = "";
    Tela.remove();
    const heart = document.getElementById("heart");
    const img = document.getElementById("image");
    const coracao = document.getElementById("coracao");
    coracao.className = "coracao";
    img.className = "image";
    heart.className = "heart";
    
}

const button = document.getElementById('startButton');
const image = document.querySelector('.image');
const txtt = document.getElementById("txtt");
button.addEventListener('click', () => {
  image.classList.remove('hidden'); // Mostra a imagem
  image.style.animation = 'none'; // Reseta a animação, se necessário
  txtt.className = "txt";
  txtt.innerHTML = "Acaba de ganhar essa belezinha";

  setTimeout(() => {
    image.style.animation = 'flyIn 3s ease-in-out forwards'; // Aplica a animação
  }, 10);
});