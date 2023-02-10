// var tabuada = require('./modulo/tabuada.js');
// var readline = ('readline');

// var entradaDados = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }); 


// entradaDados.question('primeiro valor', function(valor1)){
//     let v1 = valor1;

// }


//entradaDados.question('Escolha o mutiplicador') {}

var matematica = require('./modulo/tabuada.js');

//import da biblioteca para entrada de dados
var readline = require('readline');

//criar objeto para receber dados via teclado

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout


});

//pesuisar 

entradaDados.question(' qual é multilicado?: \n', function(numero1) {
    let valor1 = numero1.replace(',', '.');
    entradaDados.question(' qual é multilicando?: \n', function(numero2) {
        let valor2 = numero2.replace(',', '.');



    });




});