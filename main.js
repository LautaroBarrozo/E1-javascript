const pizzas = [
  {
    id: 1,
    nombre: "margarita",
    ingredientes: ["mozzarella", "albahaca"],
    precio: 600,
  },
  { id: 2, nombre: "marinara", ingredientes: ["ajo", "albahaca"], precio: 450 },
  {
    id: 3,
    nombre: "primavera",
    ingredientes: ["mozzarella", "huevo", "provolone", "aceitunas"],
    precio: 750,
  },
  {
    id: 4,
    nombre: "funghi",
    ingredientes: ["mozzarella", "champiñones", "portobellos"],
    precio: 650,
  },
  {
    id: 5,
    nombre: "carbonara",
    ingredientes: ["parmesano", "huevo", "cebolla", "guanciale"],
    precio: 900,
  },
  {
    id: 6,
    nombre: "diávola",
    ingredientes: ["mozzarella", "chorizo", "salami", "ají"],
    precio: 800,
  },
];

const form = document.getElementById("form");
const idInput = document.getElementById("input_pizza");
const pizzaName = document.getElementById("pizzaName");
const pizzaImage = document.getElementById("pizza-image");
const pizzaImageCenter = document.getElementById("pizzaImage-center");

let lastPizza = JSON.parse(localStorage.getItem("pizza")) || [];

const saveLocalStorage = (item) => {
  return localStorage.setItem("pizza", JSON.stringify(item));
};

const checkIdInput = () => {
  let valid = false;

  const idPizza = idInput.value.trim();

  if (isEmpty(idPizza)) {
    showError(idInput, "ERROR debe completar el campo");
  } else if (!isBetween(idPizza)) {
    showError(idInput, "ERROR el numero ingresado no es valido");
  } else {
    showSuccsess(idInput);
    valid = true;
  }
  return valid;
};

const isEmpty = (value) => value === "";

const isBetween = (value) => {
  const existPizza = pizzas.some((pizza) => pizza.id === Number(value));
  return existPizza;
};

const showError = (input, message) => {
  const formField = input.parentElement;
  const error = formField.querySelector("small");
  error.classList.remove("success");
  error.classList.add("error");
  error.textContent = message;
};

const showSuccsess = (input, message) => {
  const formField = input.parentElement;
  const error = formField.querySelector("small");
  error.classList.remove("error");
  error.classList.add("success");
  error.textContent = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isIdValid = checkIdInput();

  const idPizza = idInput.value.trim();
  const pizza = pizzas.find((e) => e.id == idPizza) || [];

  if (isIdValid) {
    saveLocalStorage(pizza);

    changePizzaName(pizza, form);
    changePizzaIngredient(pizza, form);
    changePizzaPrice(pizza, form);
    renderPizzaImage(pizza);
  } else {
    saveLocalStorage(pizza);
    deletePizzaName(form);
    deletePizzaIngredient(form);
    deletePizzaPrice(form);
    hidePizzaImage();
  }
});

const changePizzaName = (pizza, form) => {
  const formField = form.parentElement;
  const name = formField.querySelector("h2");
  name.textContent = pizza.nombre;
};
const changePizzaPrice = (pizza, form) => {
  const formField = form.parentElement;
  const name = formField.querySelector("h4");
  name.textContent = "$" + pizza.precio;
};

const changePizzaIngredient = (pizza, form) => {
  const formField = form.parentElement;
  const name = formField.querySelector("h3");
  name.textContent = pizza.ingredientes.join(", ");
};

const deletePizzaName = (form) => {
  const formField = form.parentElement;
  const name = formField.querySelector("h2");
  name.textContent = "";
};
const deletePizzaPrice = (form) => {
  const formField = form.parentElement;
  const name = formField.querySelector("h4");
  name.textContent = "";
};

const deletePizzaIngredient = (form) => {
  const formField = form.parentElement;
  const name = formField.querySelector("h3");
  name.textContent = "";
};

const PizzaImage = (pizza) => {
  const imageName = pizza.nombre;
  return `
            <div class="pizza-image-container" id="pizza-image">
                <img src="/imgs/${imageName}.png" alt="imagen de pizza" class="pizza-image">
            </div>
            
            `;
};

const renderPizzaImage = (input) => {
  pizzaImageCenter.innerHTML = PizzaImage(input);
};

const hidePizzaImage = () => {
  pizzaImageCenter.innerHTML = deletePizzaImage();
};

const deletePizzaImage = () => {
  return `
            <div class="pizza-image-container" id="pizza-image">
                
            </div>
            
            `;
};

document.addEventListener("DOMContentLoaded", () => {
  if (!Array.isArray(lastPizza)) {
    changePizzaName(lastPizza, form);
    changePizzaIngredient(lastPizza, form);
    changePizzaPrice(lastPizza, form);
    renderPizzaImage(lastPizza);
  }
});
