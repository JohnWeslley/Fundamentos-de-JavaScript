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
