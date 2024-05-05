// Recuperamos todos los elementos
const resultContainer = document.querySelector('#result-container')
const inputAmount = document.querySelector('#monto')
const inputPeople = document.querySelector('#personas')
const optionTip = document.querySelector('#propina')
const btnCalculate = document.querySelector('#calcular')
const optionContainer = document.querySelector('#option-container')

// Evitamos que el monto total y numero de personas sea menor a 0

inputAmount.addEventListener('input', e =>{
    if(e.target.value < 0){
        e.target.value = ''
        e.target.value = 0
    }
})

inputPeople.addEventListener('input', e =>{
    if(e.target.value < 1){
        e.target.value = ''
        e.target.value = 1
    }
})


// Si la opcion elegida es "Otro" se desplegara un input

optionTip.addEventListener('change', e=>{
    if(e.target.value == "otro"){
        // Creamos el input y lo agregamos a un div
        const otherInput = document.createElement('input')
        otherInput.type = "number"
        otherInput.id = "other-option"
        otherInput.classList.add('w-full', 'mt-2', 'rounded-md', 'px-1')
        optionContainer.append(otherInput)

        // Si el valor es menor a uno se eliminara y se mantendra en 1
        otherInput.addEventListener('input', e=>{
            if(e.target.value < 1){
                e.target.value = ''
                e.target.value = 1
            }
        })
        
    // En el caso de que sea otra opcion se eliminara dicho input
    } else {
        if(optionContainer.lastElementChild.tagName === "INPUT"){
            optionContainer.lastChild.remove()
        }
    }
})

// Al precionar el boton se activara la funcion calcularPropina

btnCalculate.addEventListener('click', calcularPropina)


// Funcion para calcular la propina
function calcularPropina(){
    // Obtenemos el valor de cada input y lo convertimos en numero
    const amount = Number(inputAmount.value) 
    const people = Number(inputPeople.value)
    const tipOption = optionTip.value
    let tipTotal;
    let tipPerson;
    let total;

    switch(tipOption){

        // Dependiendo de la opcion hara una operacion distinta

        //Al final se llamara a una funcion que mostrara los resultados en un div a parte
        // Redondeamos el resultado a 2 decimales

        case "0":
            tipTotal = 0
            tipPerson = 0
            total = amount + tipTotal
            mostrarResultados(tipTotal.toFixed(2), tipPerson.toFixed(2), total.toFixed(2))
            break

        case "15":
            tipTotal = amount * .15
            tipPerson = tipTotal / people
            total = amount + tipTotal
            mostrarResultados(tipTotal.toFixed(2), tipPerson.toFixed(2), total.toFixed(2))
            break

        case "25":
            tipTotal = amount * .25
            tipPerson = tipTotal / people
            total = amount + tipTotal
            mostrarResultados(tipTotal.toFixed(2), tipPerson.toFixed(2), total.toFixed(2))
            break

        case "30":
            tipTotal = amount * .3
            tipPerson = tipTotal / people
            total = amount + tipTotal
            mostrarResultados(tipTotal.toFixed(2), tipPerson.toFixed(2), total.toFixed(2))

        case "50":
            tipTotal = amount * .5
            tipPerson = tipTotal / people
            total = amount + tipTotal
            mostrarResultados(tipTotal.toFixed(2), tipPerson.toFixed(2), total.toFixed(2))

        case "otro":
            const other = document.querySelector('#other-option') // Llamamos al input creado
            const otherValue = other.value; // Obtenemos su valor
            tipTotal = amount * (otherValue / 100) // Dividimos el valor entre 100 y lo multiplicamos por el monto
            tipPerson = tipTotal / people
            total = amount + tipTotal
            mostrarResultados(tipTotal.toFixed(2), tipPerson.toFixed(2), total.toFixed(2))

    }

}

// Creamos una funcion que creara un div con todos los resultados

function mostrarResultados(tip, personTip, totalAmount){
    const htmlResult = `<div class="bg-waikawa-gray-400 flex flex-col px-4 py-3 gap-y-2 rounded-md mt-5">
                            <div class="flex flex-row gap-x-1">
                                <label for="propinaTotal" class="text-waikawa-gray-900">Propina:</label>
                                <p>$${tip}</p>
                            </div>
                            <div class="flex flex-row gap-x-1">
                                <label for="propinaTotal" class="text-waikawa-gray-900">Propina por persona:</label>
                                <p>$${personTip}</p>
                            </div>
                            <div class="flex flex-row gap-x-1">
                                <label for="propinaTotal" class="text-waikawa-gray-900">Monto con propina:</label>
                                <p>$${totalAmount}</p>
                            </div>
                        </div>`

    resultContainer.innerHTML = htmlResult;
}