/**
 * exemplo do uso do switch
 */
console.log("menu de opção");
console.log("1 - cadastro")
console.log("2 - consulta")
console.log("3 - alteração")
console.log("4 - exclusao")
let op = 2;
if (op==1){
    console.log("escolheu cadastro");
}
else if (op==2){
    console.log ("opção escolhida: cadastro")
}
else if (op==2){
    console.log ("opção escolhida: consulta")
}
else if (op==2){
    console.log ("opção escolhida: alteração")
}
else if (op==2){
    console.log ("opção escolhida: exclusao")
}
/**
 * usando switch para a mesma sitação
 */
switch(op){
    case 1: console.log ("escolheu cadastro");
    break;
    case 2: console.log ("escolheu consulta");
    break;
    case 3: console.log ("escolheu alteração");
    break;
    case 4: console.log ("escolheu exclusão");
    break;
    default: console.log ("escolheu uma opção invalida");
}