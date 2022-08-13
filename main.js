const pizzas = [
    {id: 1, nombre: "margarita", ingredientes: ["mozzarella", "albahaca"], precio: 600},
    {id: 2, nombre: "marinara", ingredientes: ["ajo", "albahaca"], precio: 450},
    {id: 3, nombre: "primavera", ingredientes: ["mozzarella", "huevo", "provolone", "aceitunas"], precio: 750},
    {id: 4, nombre: "funghi", ingredientes: ["mozzarella", "champiñones", "portobellos"], precio: 650},
    {id: 5, nombre: "carbonara", ingredientes: ["parmesano", "huevo", "cebolla", "guanciale"], precio: 900},
    {id: 6, nombre: "Diávola", ingredientes: ["mozzarella", "chorizo", "salami", "ají"], precio: 800}
]

console.log("---------------------------------------------------")
// a)

console.log("las pizzas con id impar son:")

let pizzasImpar = pizzas.filter( (pizza) => pizza.id % 2 != 0 )

pizzasImpar.forEach( (pizza) => console.log(pizza.nombre) )

console.log("---------------------------------------------------")
// b)

let resultado = pizzas.some( (pizza) => pizza.precio < 600 )

if(resultado){
    console.log("hay pizzas con un precio menor a $600")
}else{
    console.log("no hay pizzas con un precio menor a $600")
}

console.log("---------------------------------------------------")
// c)

pizzas.forEach( (pizza) => {
    console.log(`la pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`)
});

console.log("---------------------------------------------------")
// d)

pizzas.forEach( (pizza) => {
    console.log(`los ingredientes de la pizza ${pizza.nombre} son:`)
    
    pizza.ingredientes.forEach( (ingrediente) => {
        console.log(ingrediente)
    })
    console.log("---------------------------------------------------")
})
