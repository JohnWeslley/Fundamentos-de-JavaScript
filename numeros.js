// Operadores Aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
/* Lembre-se de que o operador '+' em Strings serve para concatenar. */

// Operadores Aritméticos (Strings)
var soma = '100' + 50; // '10050'
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'comprei 10' / 2; // NaN (Not a Number)
/* É possível verificar se uma variável é NaN ou não com a função isNaN(). */

// NaN = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// A ordem importa
/* A ordem de operações segue: multiplicação e divisão, depois soma e subtração. */
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
/* Use parênteses para priorizar uma expressão. */

// Operadores Aritméticos Unários
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6
var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
/* O mesmo se aplica ao decremento. */
/* O '+' e '-' tentam converter o valor seguinte em número. */

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
/** O '-' antes de um número o torna negativo. */

// Qual é o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; // 35

// Crie duas expressões que retornem NaN
var numeroTeste = 'vinte e dois';
console.log(+numeroTeste);

var idadeTeste = '23 anos';
++idadeTeste;
console.log(idadeTeste);

// Somar a string '200' com o número 50 e retornar 250
var numeroString = '200';
var numeroReal = 50;

var somaString = +numeroString + numeroReal;
console.log(somaString);

// Incrementar o número 5 e retornar o valor incrementado
var incrementado = 5;
++incrementado;
console.log(incrementado);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = +numero / 2;
console.log(pesoPorDois + unidade);
