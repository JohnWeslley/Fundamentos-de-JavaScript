// Objetos
/** Um objeto é um conjunto de variáveis e funções, chamadas de propriedades e métodos. */
var pessoa = {
  nome: 'Wesley',
  idade: 24,
  profissao: 'Designer',
  possuiFaculdade: true,
};

pessoa.nome; // 'Wesley'
pessoa.possuiFaculdade; // true
/** As propriedades e métodos têm nome (chave) e valor. */

// Métodos
/** Um método é uma propriedade que contém uma função como seu valor. */
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Métodos (ES6+)
/** No ES6+, você pode abreviar area: function() {} para area() {}. */
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

// Organizar o Código
/** Objetos ajudam a organizar o código em partes reutilizáveis. */
Math.PI; // 3.14
Math.random(); // número aleatório
var pi = Math.PI;
console.log(pi); // 3.14
/** Math é um objeto nativo do JavaScript. O console é um objeto e log() é um método. */

// Criar um Objeto
/** Crie objetos usando chaves {} */
var carro = {};
var pessoa = {};
console.log(typeof carro); // 'object'

// Dot Notation (Notação de Ponto)
/** Acesse propriedades usando ponto . */
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
};
var bg = menu.backgroundColor; // '#84E'

// Adicionar Propriedades e Métodos
/** Adicione novos nomes e defina seus valores */
menu.position = 'fixed';
menu.display = 'flex';

// Palavra-chave this
/** 'this' se refere ao próprio objeto. */
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};
menu.metadeHeight(); // 25
// Sem 'this', seria 60
/** 'this' retorna o próprio objeto */

// Protótipo e Herança
/** Um objeto herda propriedades e métodos do objeto usado para criá-lo. */
menu.hasOwnProperty('width'); // true
menu.hasOwnProperty('animation'); // false
/** hasOwnProperty é um método de Object */

// Crie um objeto com seus dados pessoais
// Deve conter pelo menos duas propriedades: nome e sobrenome
var serHumano = {
  nome: 'Wesley',
  sobrenome: 'Oliveira',
  idade: 24,
  altura: 1.87,
  peso: 65,
  cor: 'Branca',
  cidade: 'São Paulo',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

// Modifique o valor da propriedade 'preco' para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};
carro.preco = 3000;

// Crie um objeto que representa um cachorro labrador preto de 10 anos, que late ao ver um homem
const cachorroLabrador = {
  raca: 'Labrador',
  cor: 'preto',
  idade: 10,
  late(verAlguem) {
    if (verAlguem === 'homem') {
      return 'Woof! Woof!';
    } else {
      return '... (silêncio)';
    }
  },
};

console.log(cachorroLabrador.late('homem')); // Saída: Woof! Woof!
console.log(cachorroLabrador.late('mulher')); // Saída: ... (silêncio)

// Tudo é Objeto
/**Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.*/
var nome = 'Wesley';
console.log(nome.length); // 6 (comprimento da string)
console.log(nome.charAt(1)); // 'e' (caractere na posição 1)
console.log(nome.replace('ey', 'eyi')); // 'Wesleyi' (substituição de caracteres)
console.log(nome); // 'Wesley'
/**Uma string herda propriedades e métodos do construtor String() */

// Números
var altura = 1.8;
console.log(altura.toString()); // '1.8' (conversão para string)
console.log(altura.toFixed()); // '2' (arredondamento para número inteiro)
/**Os números são temporariamente envolvidos em um objeto para acessar suas propriedades e métodos. */

// Funções
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado.toString());
// "function areaQuadrado(lado) {
//   return lado * lado;
// }"

console.log(areaQuadrado.length); // 1 (quantidade de argumentos da função)

// Elementos do DOM
var btn = document.querySelector('.btn');

btn.classList.add('azul'); // adiciona a classe 'azul'
console.log(btn.innerText); // 'Clique' (conteúdo de texto)
btn.addEventListener('click', function () {
  console.log('Clicou');
});
/**A maioria das interações JavaScript no navegador é feita através de propriedades e métodos de objetos do DOM.*/

// Objetos revolucionaram a programação
/**As Web APIs são conjuntos de métodos e propriedades que permitem a interação entre JavaScript e o navegador. Isso revolucionou a forma como desenvolvemos para a web. */
