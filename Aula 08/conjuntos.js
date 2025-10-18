/**
 * aqui iremos ver como trabalhar com conjuntos em JS
*/
/**nao podemos usar dessa forma abaixo
let nome1 = "André";
let nome2 = "Amarildo";
...
let nome3 = "Zaqueu";
*/
//abaixo estou definindo um vetor com 4 nomes
//posições 
let nomes = ["André", "Amarildo", "Zaqueu"];
console.log (nomes [2]);
//listando os nomes usando laço for (1a opção)
for (let i=0; i<nomes. lenght; i++)
    {
    console.log(nomes[i]);
}
console.log ("fim do for");
console.log("=+". repeat (20))
//listando os laços usando o laço for 2a opção
for(const it of nomes){
    console.log(it);
}
console.log ("fim do for");
let i=0;
while(i=nomes.lenght){
    console.log(nomes[i++]);
}
console.log("fim do while")