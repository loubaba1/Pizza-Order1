// Add an event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);

// Store order code in a function
function placeOrder() {
  // INPUT
  let sizeOfPizza = document.getElementById("size-in").value;
  let Topping1 = document.getElementById("Topping1-in").value;
  let Topping2 = document.getElementById("Topping2-in").value;

  //Process
  let msg = `Your ${sizeOfPizza} pizza with  ${Topping1} and ${Topping2} will be ready soon!`;

  // Output
  document.getElementById("output").innerHTML = msg;

  document.getElementById(
    "picture-container"
  ).innerHTML = `<img width="300px" id="pizza-logo.avif" src= "img/pizza-logo.avif">`;
}
