/*const fillSelect = function(json, selector){
    let select = document.querySelector(selector)
    json.forEach(element => {
        let option = document.createElement("OPTION")
        option.setAttribute("value", element.conta_id)
        const text = document.createTextNode( element.conta_id + ". " + element.conta_descricao + " - " + element.conta_numeroConta )
        option.appendChild( text )
        select.appendChild(option)
    });
}

const sendData = function (){
    fetch("http://rlbenevides.com.br/appfinanceiro/backend/api/contasBancarias", {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        mode: "cors",
        body: JSON.stringify()
    })
    .then (function(response) {
        return response.json();
    })
    .then(function(myjson){
        fillSelect(myjson, selector);
    })
}*/
