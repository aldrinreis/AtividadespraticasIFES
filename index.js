/*
 Crie um algoritmo que receba pelo teclado o nome de um aluno e três notas. 
 
Usando o algoritmo do exercício anterior, altere o resultado para: Média <=3, “reprovado”,
Média < 6, “recuperação” e Média >=6, “aprovado”.
 

*/

const prompt = require('prompt-sync')();

var nome = prompt("Digite o seu nome: ");
var nota1 = parseFloat(prompt("Insira a nota 1: "));
var nota2 = parseFloat(prompt("Insira a nota 2: "));
var nota3 = parseFloat(prompt("Insira a nota 3: "));

var media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
  console.log(media, "Aprovado")

} 
else if(media>3 && media<6) {
  console.log(media, "Recuperação")
}
else {
  console.log(media, "Reprovado")
};