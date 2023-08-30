// clssList
/**Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.*/
const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona / remove
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

console.log(menu.classList[0]);

//Attributes
/**Retorna uma array-loke  com os atributos do elemento. */
const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
console.log(animais.attributes.id); // retorna o primeiro atributo

//getAttribute e setAttribute
/**Métodos que retornam ou definem de acordo com o atributo selecionado */
const img = document.querySelector('img');

console.log(img.getAttribute('alt')); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt
//img.hasAttribute(); // true / false se tem algum atributo
/**É muito comum métodos de get e set; */

//Read Only vs Writable
/**Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.*/
animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only
/**Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = '' */

// Adicione a classe ativo a todos os itens do menu
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// Verifique se as imagens possuem o atributo alt
// Modifique o href do link externo no menu
