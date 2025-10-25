/**
 * manipulando objetos html com JS
 */
const incluir = ()=>{
    const li = document.createElement("li");
    //const txtCmp = document.getElementById("idtexto");
    const txtCmp = document.querySelector("#idtexto");
    li.textContent = txtCmp.value;
    const ul = document.getElementById("idlista");
    ul.appendChild(li);
}
const remover = () => {
    const lis = document.querySelectorAll("#idlista li");
    const txtCmp = document.querySelector("#idtexto");
    const ul = document.querySelector("#idlista");
    lis.forEach(it=>{
        if (it.textContent == txtCmp.value)
            ul.removeChild(it); 
    });
}
//adicionando o botao de incluir
const btnAdicionar = document.querySelector("#idadicionar")
const btnRemover = document.querySelector("#idremover");
btnAdicionar.addEventListener("click",incluir);
btnRemover.addEventListener("click",remover);