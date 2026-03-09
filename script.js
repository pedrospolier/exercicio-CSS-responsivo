let carrinho = [];


const botoes = document.querySelectorAll('.produto button');


const header = document.querySelector('header');
const contador = document.createElement('p');
contador.style.marginTop = '10px';
contador.textContent = "Carrinho: 0 itens";
header.appendChild(contador);


botoes.forEach((botao) => {
    botao.addEventListener('click', function () {


        const produto = this.parentElement.querySelector('h3').textContent;


        carrinho.push(produto);


        contador.textContent = `Carrinho: ${carrinho.length} itens`;

        alert(`${produto} foi adicionado ao carrinho!`);
    });
});
