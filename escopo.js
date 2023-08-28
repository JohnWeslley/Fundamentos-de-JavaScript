// Escopo de Função
/**Variáveis declaradas dentro de funções não são acessíveis fora das mesmas.*/
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro(); // Exibe 'Fusca' no console
console.log(carro); // Erro, carro não está definido
// O escopo evita conflitos entre nomes.

// Escopo de Função (Pai)
/**Variáveis declaradas no escopo superior da função podem ser acessadas por ela.*/
var carroGlobal = 'Ferrari';

function mostrarCarroGlobal() {
  console.log(carroGlobal);
}
mostrarCarroGlobal(); // Exibe 'Ferrari' no console

// Escopo de Bloco
/**Variáveis criadas com var vazam o bloco. Usar const e let respeita o escopo de bloco.*/
if (true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Exibe 'Fusca'

// Var vaza o bloco
/**Mesmo com a condição falsa, a variável ainda é declarada usando hoisting e seu valor fica como undefined*/

// Const e Let no lugar de Var
/**A partir de agora, vamos usar apenas const e let para declarar variáveis.*/
if (true) {
  const carro2 = 'Corsa';
  console.log(carro2);
}
console.log(carro2); // Erro, carro2 não está definido

// {} cria um bloco
/**Chaves { criam um escopo de bloco, não deve ser confundido com a criação de objetos.*/
{
  var carro3 = 'Vectra';
  const ano = 2001;
}
console.log(carro3); // Exibe 'Vectra'
console.log(ano); // Erro, ano não está definido

// For Loop
/**Ao usar var dentro de um for loop, que é um bloco, o valor da variável vaza e existe fora do loop.*/
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // Exibe 10

// For Loop com Let
/**Com let, evitamos o vazamento da variável.*/
for (let j = 0; j < 10; j++) {
  console.log(`Número ${j}`);
}
console.log(j); // Erro, j não está definido

// Const
/**Mantém o escopo no bloco, impede redeclaração e impede a modificação do valor da variável.*/
const mes = 'Dezembro';
// mes = 'Janeiro'; // Erro, tentou modificar o valor
// const semana; // Erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
};

data.dia = 29; // Funciona
// data = 'Janeiro'; // Erro

// Let
/**Mantém o escopo no bloco, impede redeclaração, mas permite a modificação do valor da variável.*/
let ano;
ano = 2018;
ano++;
console.log(ano); // Exibe 2019
// let ano = 2020; // Erro, redeclarou a variável
/**Geralmente, prefira usar const.*/
