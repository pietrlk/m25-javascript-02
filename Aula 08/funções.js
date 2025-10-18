/**
 * criação e uso de frações
 */
function fatorial(numero){
    let ret= 1
    for(let i=numero; i>1; i--){
        ret*=i;
}
return ret; 
}
console.log("o fatorial de 5 é " + fatorial (5))    