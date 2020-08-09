//procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField);
//quando clicar no botão

//executar uma acao
function cloneField() {
    //duplicar os campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. Quais campos??
    const fields = newFieldsContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = ""
    })

    //colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
    

    