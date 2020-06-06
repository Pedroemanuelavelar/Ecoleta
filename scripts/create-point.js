
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res  =>  res.json())  // Função anônima 
    .then(states  => {
        
        for( const state of states) {
            ufSelect.innerHTML += `<option value=${state.id}>${state.nome}</option>`

        }

    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")


    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy = no final da url`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true


    fetch(url)
    .then(res  =>  res.json())  // Função anônima 
    .then(cities  => {
        
        for(const city of cities) {
            citySelect.innerHTML += `<option value=${city.nome}>${city.nome}</option>`

        }

        citySelect.disabled = false

    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities) 


// Ítens de Coleta - Seleção
// Pegar todos os li`s
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
        item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name=items]") 

//  Quais são os ítens selecionados
let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // add or remove a class with JavaScript
    itemLi.classList.toggle("selected") // toggle liga e desliga
  
    const itemId = itemLi.dataset.id

    // verificar se existem ítens selecionados, se sim
    // pegar os ítens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // comparando valores, para ver se retorna true || false
        return itemFound
    })


    // se já estiver selecionado, tirar da seleção
    if( alreadySelected >= 0) {
        // tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId //retorna false
            return  itemIsDifferent
        })

        selectedItems = filteredItems

    } else {
        // se não estiver selecionado
        // adicionar à seleção
        selectedItems.push(itemId) // adiciona itens no array
    }

    // atualizar o campo escondido com os ítens selecionados
    collectedItems.value = selectedItems



    
}
       
    