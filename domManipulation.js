// Document Object Model (DOM)
/**O DOM é uma interface que representa documentos HTML e XML por meio de objetos. Isso possibilita a manipulação da estrutura, estilo e conteúdo desses documentos. */
console.log(window);
// O "window" é o objeto global do navegador.
// Ele possui diversos métodos e propriedades.
window.innerHeight; // Retorna a altura do navegador.

/**Ao inspecionar um elemento no Chrome, você está vendo uma representação do DOM. */
console.log(window.location.href);

// Window e Document
/**O "window" e o "document" são os principais objetos do DOM.
Grande parte da manipulação ocorre por meio de seus métodos e propriedades. */
window.alert('Isso é um alerta');
alert('Isso também é um alerta'); // Funciona da mesma forma

document.querySelectorAll('h1'); // Seleciona o primeiro h1 encontrado
document.body; // Retorna o elemento body do documento

/**Como "window" é o objeto global, não é necessário prefixar seus métodos e propriedades com "window". */

// Node
/**Todas as tags HTML são representadas pelo objeto "Element" e, portanto, herdam seus métodos e propriedades. "Element" é um tipo de objeto "Node". */
const titulo = document.querySelector('h1');
titulo.innerText; // Retorna o texto contido no elemento.
titulo.classList; // Retorna as classes atribuídas ao elemento.
titulo.id; // Retorna o ID atribuído ao elemento.
titulo.offsetHeight; // Retorna a altura do elemento.

titulo.addEventListener('click', callback);
// Ativa a função "callback" ao clicar no título.
