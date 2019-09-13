const fillSelect = function(json, selector){
    let select = document.querySelector(selector)
    json.forEach(element => {
        let option = document.createElement("OPTION")
        option.setAttribute("value", element.conta_id)
        const text = document.createTextNode( element.conta_id + ". " + element.conta_descricao + " - " + element.conta_numeroConta )
        option.appendChild( text )
        select.appendChild(option)
    });
}

const getFromApi = function (table, selector){
    fetch("http://rlbenevides.com.br/appfinanceiro/backend/api/"+ table)
    .then (function(response) {
        return response.json();
    })
    .then(function(myjson){
        fillSelect(myjson, selector);
    })
}
