const elementos = document.querySelectorAll('.fade-in');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
    entrada.target.classList.add('visible');
} else {
    entrada.target.classList.remove('visible');
}
    });
});

elementos.forEach((el) => observador.observe(el)); const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const imagensDosCards = document.querySelectorAll('.card img');

imagensDosCards.forEach((imagem) => {
    imagem.addEventListener('click', () => {
        modalImg.src = imagem.src;
        modal.classList.add('active');
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
}); const textoTitulo = "Marcus Vinicius";
const elementoTitulo = document.getElementById('titulo-digitando');
let posicao = 0;

function digitar() {
    if (posicao < textoTitulo.length) {
        elementoTitulo.textContent += textoTitulo.charAt(posicao);
        posicao++;
        setTimeout(digitar, 100);
    }
}

digitar(); const botaoCopiar = document.getElementById('btn-copiar-email');
const email = "mvpcfamamg@gmail.com";

botaoCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
        botaoCopiar.textContent = "E-mail copiado!";

        setTimeout(() => {
            botaoCopiar.textContent = "mvpcfamamg@gmail.com";
        }, 2000);
    });
});