// forEach
/**Constantemente vamos selecionar uma lista de itens do DOM. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.*/
const imgs = document.querySelectorAll('img');
imgs.forEach(function (item) {
  console.log(item);
});

//Parâmetros do forEach
/**O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array;*/
imgs.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

//forEach e Array
/**forEach é um método de Array, alguns objetos array-like possuem este m´todo, Caso não possua, o ideal é transformá-los em uma array*/
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);
titulosArray.forEach(function (item) {
  console.log(item);
});

//Arrow Function
/**Sintaxe curta em relação a function expression. Basta remover a plavra chave function e a fat arrow => após os argumentos. */
imgs.forEach((item) => {
  console.log(item);
});

//Argumentos e Parênteses
// parâmetro único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
