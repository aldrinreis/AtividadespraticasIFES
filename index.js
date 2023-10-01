/*
Crie um algoritmo em que, dada a tabela a seguir, calcula e exibe na tela o valor de
desconto a ser concedido para um determinado cliente, de acordo com o valor da compra.
O algoritmo deverá receber pelo teclado o nome do cliente e o valor total da compra


Valor da compra                      |   % de desconto
Abaixo de R$ 1.000,00                |        5
Entre R$ 1.000,00 a R$ 5.000,00      |        10
Acima de R$ 5.000,00                 |        15

*/

const prompt = require('prompt-sync')();

var nome = prompt("Digite o seu nome: ");
var vlr_compra = parseFloat(prompt("Insira o valor da compra R$: "));


if (vlr_compra < 1000){

  var percentual_desconto = 5;
  var vlr_desconto = vlr_compra * 0.05; 
  
}else if(vlr_compra>=1000 && vlr_compra<=5000 ){
  var percentual_desconto = 10;
  var vlr_desconto = vlr_compra * 0.1;
}else{
  var percentual_desconto = 15;
  var vlr_desconto = vlr_compra * 0.15;
}


var vlr_final = vlr_compra - vlr_desconto;

console.log("O valor da compra foi de: ", vlr_compra);
console.log("O Percentual de Desconto foi de: ", percentual_desconto,"%");
console.log("Valor Final R$: ", vlr_final);