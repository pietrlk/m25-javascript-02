/**
 * exemplos de uso de condicionais
 */
let idade= 17;
/*usando IF */
if (idade>=18){
    console.log("voce pode dirigir");
}
else if(idade>=16){
    console.log("voce esta quase na idade para dirigir")
}
else{
    console.log("voce nao pode dirigir, voce é menor de idade")
}
/**
 * operadores relacionais
 * > maior que =>             10 > 5 =>       verdadeiro
 * < menor que =>             5 < 2 =>        falso
 * == igual a =>              10 == 10 =>     verdadeiro
 * != diferente =>            10 != 5 =>      verdadeiro
 * >= maior ou igual a =>     10 >= 11 =>     falso
 * <= menor ou igual a <=     10 11 =>        verdadeiro
 * 
 * exemplos com texto
 * 'Ana' > 'ana' => falso
 * 
 * operador logicos 
 * && operador AND => idade >= 18 && <= 60
 *                 => verdadeiro para idades entre 18 e 60
 * 
 * || operador OR => idade < 18 || idade> 60
 *                => verdadeiros para idades menores de 18 ou idades maiores de 60
 * 
 * ! operador NOT => (idade >= 18 && idade <= 60)
 *                => nesse caso seria equivalente a verdadeiro para idades menores de 18 ou idades maiores de 60
 */