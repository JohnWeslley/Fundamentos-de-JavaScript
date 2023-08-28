// ID
/**getElementById seleciona e retorna elementos do DOM*/

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getAnimations('contato');
console.log(animaisSection.innerText);
// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

//Classe e Tag
/**getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.*/

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

// Seletor Geral Único
/**querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.*/
const animais = document.querySelector('.animais');
const contatoNew = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');
console.log(navItem.innerText);

// Seletor Geral Lista
/**querySelectorAll retorna todos os elementos compatíveis com o seletor css em uma NodeList*/
const gridSection2 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotoAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection2[1]);
/**Diferente do getElementById, a lista aqui é estática. */

// HTMLCollection vs NodeList
/**A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática. */

// Array-Like
/**HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList. */
const arrayGrid = Array.from(gridSection);
arrayGrid.forEach(function (gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index); // index d item na array
  console.log(array); // a array completa
});
/**É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection) */

// Retorne no console todas as imagens do site

// Retorne no console apenas as imagens que começaram com a palavra imagem

// Selecione todos os links internos (onde o href começa com #)

// Selecione o primeiro h2 dentro de .animais-descricao

// Selecione o último p do site
