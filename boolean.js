// Booleano
/** Existem dois valores booleanos: false ou true */
var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais If e Else
/** Verificar se uma expressão é verdadeira com "if"; caso contrário, o "else" será ativado. */
if (possuiGraduacao) {
  console.log('Possui graduação.');
} else {
  console.log('Não possui graduação.');
}
// Retorna "Possui graduação." e não executa o "else"
/** O valor dentro dos parênteses sempre será avaliado como false ou true. */

// Condicionais Else if
/** Se o "if" não for verdadeiro, ele testa o "else if" */
if (possuiDoutorado) {
  console.log('Possui graduação e doutorado.');
} else if (possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado.');
} else {
  console.log('Não possui graduação.');
}

// Truthy e Falsy
/** Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana. */

// Falsy
if (false);
if (0); // ou -0
if (NaN);
if (null);
if (undefined);
if (''); // ou "" ou ``
/** Todo o resto é Truthy. */

// Operador Lógico de Negação !
/** O operador "!" nega uma operação booleana. Ou seja, !true é igual a false. */

// Truthy
if (!true); // false
if (!1); // false
/** Dica: você pode utilizar o "!!" para verificar se uma expressão é Truthy ou Falsy. */

// Operadores de Comparação
/** Sempre retornarão um valor booleano. */
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
teste = 10 >= 11; // false

// Operador de Igualdade
/** O "==" faz uma comparação não tão estrita e o "===" faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos "===" */
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false
10 !== '10'; // true

// Operador Lógico &&
/** O "&&" compara se ambas as expressões são verdadeiras. */
true && true; // true
true && false; // false
false && true; // false
/** Se ambos os valores forem true, ele retornará o último valor verificado; se algum valor for false, ele retornará esse valor e não continuará verificando os próximos. */

// Operador Lógico ||
/** O "||" compara se uma das expressões é verdadeira. */
true || true; // true
true || false; // true
false || true; // true
'gato' || 'Cão'; // 'gato'
5 - 5 || 5 + 5; // 10
5 >= 5 || 3 < 6; // true
/** Retorna o primeiro valor true que encontrar. */

// Switch
/** Com o "switch", você pode verificar se uma variável é igual a diferentes valores utilizando "case". Caso ela seja igual, você pode fazer algo e utilizar a palavra-chave "break;" para cancelar a continuação. O valor padrão ("default") ocorrerá caso nenhuma das anteriores seja verdadeira. */
var corFavorita = 'amarelo';

switch (corFavorita) {
  case 'azul':
    console.log('Olhe para o céu.');
    break;
  case 'vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'amarelo':
    console.log('Olhe para o sol.');
    break;
}

/** Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado, coloque no console 'É maior', 'É igual' ou 'É menor'. */

var minhaIdade = 24;
var idadeMae = 50;

if (minhaIdade > idadeMae) {
  console.log(
    `Sua idade é ${minhaIdade}, que é maior do que a idade da sua mãe (${idadeMae}).`,
  );
} else if (minhaIdade === idadeMae) {
  console.log(
    `Sua idade é ${minhaIdade}, que é igual à idade da sua mãe (${idadeMae}).`,
  );
} else {
  console.log(
    `Sua idade é ${minhaIdade}, que é menor do que a idade da sua mãe (${idadeMae}).`,
  );
}
