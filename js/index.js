// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // 1. Stock the basic sauce (red bg)
  // 2. if whiteSauce is called, then add whiteSauce (white bg) or remove it
  const sauceWhite = document.querySelector('.sauce')

    if (state.whiteSauce) {
      sauceWhite.classList.add('sauce-white');
    }
    else {
      sauceWhite.classList.remove('sauce-white');
    }
}

function renderGlutenFreeCrust() {
  const glutenFreeCrust = document.querySelector('.crust')

  if (state.glutenFreeCrust) {
    glutenFreeCrust.classList.add('crust-gluten-free');
  }
  else {
    glutenFreeCrust.classList.remove('crust-gluten-free');
  }
}



function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">` //Jordan
  buttons = document.querySelectorAll('.btn');

  function handleClick(evt) {
    const button = evt.target;
    button.classList.toggle("active")
  }

  buttons.forEach((button) => {
    button.onclick = handleClick;
  })
}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // -> 1.Stock panneau complet
  const price = document.querySelector('.panel.price');
  // -> 2.Stock liste des ingrédients extra (en gros pas la base à 10$ )
  const ul = price.querySelector('ul');
  // -> 3.LET Stock la base à 10$ 
  let total = basePrice;
  // -> 4. Les ingrédients sont des strings vides  
  ul.innerHTML = "";

  for(let position in ingredients){
    /* 5.position =/= loop   
  let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  POSITION>>> mushrooms: { name: 'Mushrooms', price: 1 },
  .... }; */

// si state de position(ex:POSITION (aka mushrooms))= true
    if (state[position]) {
// alors on additionne à 10$ 1$      
      total += ingredients[position].price
// et on a ajoute à la liste d'ingrédient <li> prix et nom <li>       
      ul.innerHTML += `<li>+ $ ${ingredients[position].price} ${ingredients[position].name}</li>`
    }
  }
 // pour finir, remplace le total fat final par le new total aka let total
  document.querySelector('strong').innerHTML = `Total: $${total}` ;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
