/**
 * codigo que vai demonstrar o uso de arrays em JS
 */
//definindo array
const vetor = [];
vetor .push("item 1");
vetor .push("item 2");
vetor .push("item 3");
vetor .push(1234);
console.log(vetor);
console.log(vetor.pop());
console.log(vetor);
vetor.splice(1,1);
console.log(vetor);
for(let i=0;i<vetor.length;i++){
    console.log(vetor[i])
}
    console.log("listando vetor com 2 opção")
    for(let it of vetor){
    console.log(it)
}
console.log("listando vetor com 3 opção")
    vetor.forEach(it=>console.log(it))

