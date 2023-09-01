//Height e Width
/**Estas são propriedades e métodos objetos Element e HTMLElement, a maioria delas são Read Only */
const listaAnimais = document.querySelector('.animais-lista');

listaAnimais.clientHeight; // height + padding
listaAnimais.offsetHeight; // height + padding + border
listaAnimais.scrollHeight; // height total, mesmo dentro de scroll
// Mesma coisa para o Width

// offsetTop e offsetLeft
const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

//Distância entre o conto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;

//getBoundingClientRect()
/**Nétodo que retorna um objeto com valores de width, height, distâncias do elemento e mais.*/
const rect = section.getBoundingClientRect();
rect.height; // heigt do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// Window
window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if (window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

// matchMedia();
/**Utilize um media-querie como no CSS para verificar a largura do browser */
const small = window.matchMedia('(max-width: 600px)').matches;

if (small) console.log('Usuário mobile');
else console.log('Usuário desktop');
