/*
 Crie um algoritmo que receba pelo teclado o nome de um aluno e três notas. Ao final,
deverá ser exibido o nome do aluno, sua média e o resultado (se for acima ou igual a 6, o
aluno estará “aprovado”; se não for, estará “reprovado”).

*/

const prompt = require('prompt-sync')();

var nome = prompt("Digite o seu nome: ");
var nota1 = parseFloat(prompt("Insira a nota 1: "));
var nota2 = parseFloat(prompt("Insira a nota 2: "));
var nota3 = parseFloat(prompt("Insira a nota 3: "));

var media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
  console.log(media, "Aprovado")

} else {
  console.log(media, "Reprovado")
};