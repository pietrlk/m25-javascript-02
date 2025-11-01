const carregar = () => {
    const tbody = document.querySelector('#id_dados');
    axios.get('#http://localhost:3000/produtos')
    .then((ret)=> {
        ret.data.forEach(element => (()){
        const tr = document.createElement('tr');
        const td_id = document.createElement('td');
        const td_desc = document.createElement('td');
        const td_saldo = document.createElement('td');
        const td_preco = document.createElement('td');
        });
        //adicionando os tds nos trs
        tr.appendChild(td_id);
        tr.appendChild(td_desc);
        tr.appendChild(td_saldo);
        tr.appendChild(td_preco);
        //adicionando ao tbody
        tbody.appendChild(tr);
        //colocando os valores na tbs
        td_id.textContent = item.id
        td_desc.textContent = item.descricao
        td_preco.textContent = item.preco
        td_saldo.textContent = item.saldo 
    })
}

carregar();