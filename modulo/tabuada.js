/**************************************************************************************
*Objetivo: Realizar o calculo de uma tabuada tendo duas entradas a tabuada e o contador
*Data: 09/02/2023
*Autor: Guilherme
*Versão: 1.0
***************************************************************************************/

//retorna o resultado de uma tabuada
const calcularTabuada = function(multiplicando, maximoMultiplicador) {
    let tabuada = Number(multiplicando);
    let maxContador = Number(maximoMultiplicador);
    
    let cont = 0; // start da repetição -> contador
    let resultado;
    let status = true
    // no javaScript temos 3 estrutura de repetição
    // while         for            for white 
    
    // tratativas de 0
    //validação de entradas vazia e 0
    if(tabuada == 0 || maxContador == 0)
        status = false
    // validação de entrada de caracteres
    else if (isNaN(tabuada) || isNaN(maxContador))
        status = false
    else {


                                                    //WHILE
        // while(/* condição*/ cont <= maxContador ){
        //     resultado = tabuada * cont;
        //     /* o que acontece*/
    
        //     //qquero que resultado seja 
        //     //2 x 0 =0
        //     console.log(tabuada + 'x' + cont + '=' + resultado );
    
        //                     //Formas de fazer incrmento (para sair do looping e ir ate o maxContador)
        //     // pega o conteudo dentro dela soma mais um dentro dela mesma
        //     // cont = cont + 1; 
        //     //cont++;
        //     cont += 1;
        // }


                                                        //FOR
        for (let cont = 0; cont <= maxContador; cont++) {
            resultado = tabuada * cont;
           // console.log(tabuada + 'x' + cont + '=' + resultado );
            console.log(`${tabuada}x${cont}= ${resultado}`); // usando crase para console
        }
    } 
    return status  
};
//testando funções sem back end
//chamando a função
console.log(calcularTabuada(10,10))

//deicando publixo
module.exports = {
    calcularTabuada
}