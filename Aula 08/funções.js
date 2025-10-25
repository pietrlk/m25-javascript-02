/**
 * Criação e uso de funções
 */
//Definindo a função para usá-la
function fatorial(numero){
    let ret = 1;
    //aqui abaixo será um laço decrescente 5 * 4 * 3 * 2
    for (let i=numero;i>1;i--){
        ret*=i; //isso é o mesmo que ret = ret * i
    }
    return ret; //retornando o valor
}
//usando a função
console.log("O fatorial de 5 é " + fatorial(5));
//arrow function
const fatorial_arrow = (numero) => {
    let net = 1;
    for (let i=numero;i>1;i--){
        net *= i
    }
    return net;
}
console.log("O fatorial de 5 é " + fatorial_arrow(5));