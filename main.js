const pizzas = [
    {id: 1, nombre: "margarita", ingredientes: ["mozzarella", "albahaca"], precio: 600},
    {id: 2, nombre: "marinara", ingredientes: ["ajo", "albahaca"], precio: 450},
    {id: 3, nombre: "primavera", ingredientes: ["mozzarella", "huevo", "provolone", "aceitunas"], precio: 750},
    {id: 4, nombre: "funghi", ingredientes: ["mozzarella", "champiñones", "portobellos"], precio: 650},
    {id: 5, nombre: "carbonara", ingredientes: ["parmesano", "huevo", "cebolla", "guanciale"], precio: 900},
    {id: 6, nombre: "Diávola", ingredientes: ["mozzarella", "chorizo", "salami", "ají"], precio: 800}
]

const form = document.getElementById('form')
const idInput = document.getElementById('input_pizza')
const pizzaName = document.getElementById('pizzaName')



const checkIdInput = () => {
    let valid = false


    const idPizza = idInput.value.trim()

    if(isEmpty(idPizza)){
        showError(idInput, "ERROR debe completar el campo")
    }else if(!isBetween(idPizza)){
        showError(idInput, "ERROR el numero ingresado no es valido")
    }else{
        showSuccsess(idInput)
        valid = true
    }
    return valid
}

const isEmpty = (value) => value === "";

const isBetween = (value) =>{
    const existPizza = pizzas.some(pizza=> pizza.id === Number(value)) 
    return existPizza
}

const showError = (input, message) =>{
    const formField = input.parentElement;
    const error = formField.querySelector('small')
    error.classList.remove('success')
    error.classList.add('error')
    error.textContent = message
}

const showSuccsess = (input, message) =>{
    const formField = input.parentElement;
    const error = formField.querySelector('small')
    error.classList.remove('error')
    error.classList.add('success')
    error.textContent = ""
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let isIdValid = checkIdInput();

    if(isIdValid){

        const idPizza = idInput.value.trim()
        changePizzaName(idPizza, form)
        changePizzaPrice(idPizza, form)
        

    }else{
        deletePizzaName(form)
        deletePizzaPrice(form)

    }
})

const changePizzaName = (input, form) =>{
    const formField = form.parentElement;
    const pizza = pizzas.find((e) => e.id == input)
    const name = formField.querySelector('h2')
    name.textContent = pizza.nombre
}
const changePizzaPrice = (input, form) =>{
    const formField = form.parentElement;
    const pizza = pizzas.find((e) => e.id == input)
    const name = formField.querySelector('h4')
    name.textContent = "$"+pizza.precio
}

const deletePizzaName = (form) => {
    const formField = form.parentElement;
    const name = formField.querySelector('h2')
    name.textContent = ""
}
const deletePizzaPrice = (form) => {
    const formField = form.parentElement;
    const name = formField.querySelector('h4')
    name.textContent = ""
}