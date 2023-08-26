// Array
/**Um conjunto de valores geralmente relacionados, usados para armazenar diferentes valores em uma única variável. */
var videoGames = ['Switch', 'PS4', 'XBox'];

console.log(videoGames[0]); // 'Switch'
console.log(videoGames[2]); // 'XBox'
/**Acesse um elemento da array utilizando [n] */

// Métodos e Propriedades de uma Array
videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
console.log(videoGames.length); // 3
/**Existem diversos outros métodos, como map, reduce, forEach, e mais, que veremos mais adiante. */

// For Loop
/**Executa algo repetidamente até que uma condição seja atingida. */
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console
/**O for loop possui 3 partes: início, condição, e incremento. */
console.log('While Loop');
// While Loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
/**O for loop é o mais comum. */

// Arrays e Loops
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}
// O for loop é o mais comum

// Break
console.log('break------------------------');
/**O loop irá parar caso encontre a palavra break. */
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'PS4') {
    break;
  }
}
console.log('forEach');
// forEach
/**forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de usarmos um loop com arrays (ou array-like). */
videoGames.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
/**Podemos passar os seguintes parâmetros: item, index, e array. */

// Não se confunda com a sintaxe
var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
/**Não aconselho escrever da forma acima, mas funciona normalmente.*/
