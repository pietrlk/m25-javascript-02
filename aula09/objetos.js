/**
 * nesse codigo iremos ver objetos js
 */
//JSON => JavaScript object notification
const meuobjeto = {
    "nome": "richard",
    "endereco": "Rua das ruas",
    "numero": 15,
    "eh fumante": false,
    "ola": ()=> {
        console.log("ola mundo")
    },
    "telefone": {
        "residencial": "14 997102658",
        "comercial": "14 99710658",
    }
}
meuobjeto.ola()
console.log(meuobjeto)
console.log(JSON.stringify(meuobjeto))
const txtobjeto = '{"codigo":1234,"preço":15.32,"descricao":"teste"}';
const obj = JSON.parse(txtobjeto)
console.log(obj);