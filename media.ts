/*Media do modulo 1 */
/* const: o valor uma vez fornecido não pode ser modificado*/
//operador +
let soma = 100 + 45;
let concatenação = 'Nota: ' + 100;
let nota = '92.9';
let nota2 = +'92.9';

const ex1: number = +prompt('Exercicio 1: ');
const ex2: number = +prompt ('Exercicio 2: ');
const part: number = +prompt('Participação: ');

let media = (ex1 * 2 + ex2 * 3 + part * 5) / 10;

let nome: string = prompt('Nome: ')

if (media >= 60) {
  document.write(`<p> ${nome}, você foi aprovado(a) com media ${media}</p>`)
} else if (media >= 20) {
  document.write(
   '<p>' +
     nome +
     ', você ficou em avaliação final  com media ' +
     media +
     '</p>'
  );
} else {
  document.write(`<p> ${nome}, você foi reprovado(a) com media ${media}</p>`);
}

document.write(media); 
document.write('<p> Media: ' + media + '</p>');
document.write(`<p>Media: ${media}</p>`) ;
console.log(`Media:  ${media}`);

