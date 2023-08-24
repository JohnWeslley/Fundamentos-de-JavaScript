// Funções: Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor

// Calcula a área de um quadrado
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); // 16
console.log(areaQuadrado(5)); // 25
console.log(areaQuadrado(2)); // 4

// Retorna o valor de π
function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

// Parâmetros e Argumentos: Ao criar uma função, você pode definir parâmetros. Ao executar uma função, você pode passar argumentos.

// Calcula o IMC
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(56, 1.87));

// Retorna uma mensagem relacionada à cor favorita
function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Você gosta do céu.';
  } else if (cor === 'verde') {
    return 'Você gosta de mato.';
  } else {
    return 'Você não gosta de nada.';
  }
}

console.log(corFavorita('azul'));

// Argumentos podem ser funções: Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
addEventListener('click', function () {
  console.log('Clicou');
});

// Pode ou não retornar um valor: Quando não definimos o return, ela irá retornar undefined.

function mostrarImc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

mostrarImc(56, 1.87); // retorna o imc
console.log(mostrarImc(56, 1.87)); // retorna o imc e undefined

// Valores retornados: Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

// Escopo: Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

// Escopo léxico: Funções conseguem acessar variáveis que foram criadas no contexto pai.

var profissao = 'Programador';

function dados() {
  var nome = 'Wesley';
  var idade = 24;

  function outrosDados() {
    var endereco = 'São Paulo';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }

  return outrosDados();
}

console.log(dados()); // Retorna 'Wesley, 29, São Paulo, Programador'
// outrosDados(); // Retorna um erro

// Hoisting: Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória.

function calcularImc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

calcularImc(80, 1.8); // imc aparece no console

// EXERCÍCIOS

// Verifica se um valor é Truthy ou Falsy
function verificarValorTruthy(valor) {
  if (valor) {
    return `O valor ${valor} é Truthy.`;
  } else {
    return `O valor ${valor} é Falsy.`;
  }
}

// Calcula o perímetro de um quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

// Retorna o nome completo
function nomeCompleto(nome, sobrenome) {
  return `Olá, ${nome} ${sobrenome}, seja bem-vindo!`;
}

// Verifica se um número é par ou ímpar
function verificarSePar(numero) {
  if (typeof numero !== 'number') {
    return `O valor ${numero} não é um número. Por favor, digite um número!`;
  } else if (numero % 2 === 0) {
    return `O valor ${numero} é Par.`;
  } else {
    return `O valor ${numero} é ímpar.`;
  }
}

// Retorna o tipo de dado do argumento
function tipoDeDado(valor) {
  return typeof valor;
}

// Utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
// Função para mostrar o nome completo no console
function mostrarNomeCompleto() {
  console.log('Seu Nome Completo'); // Substitua com o seu nome completo
}

// Adicione um ouvinte de evento para o evento 'scroll'
window.addEventListener('scroll', mostrarNomeCompleto);

var totalPaises = 193; // Defina a variável fora das funções
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
