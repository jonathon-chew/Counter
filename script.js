//Load internal text upon loading the document
document.addEventListener("DOMContentLoaded", function() {
    enterInnerText()
    counter()
  });

  function enterInnerText(){
    // Get the reference to the card div
    let cardDiv = document.getElementById("Card");
  
    // Create a text node
    let textNode = document.getElementById.innerHTML = 1;
  
    // Append the text node to the card div
    cardDiv.innerHTML = textNode;
  };

function counter(){
  var counterElement = document.getElementById("Card");

  // Add a click event listener to the element
  counterElement.addEventListener("click", function() {
    // Get the current value and convert it to a number
    var currentValue = parseInt(counterElement.innerHTML);

    // Increment the value by 1
    var newValue = currentValue + 1;

    // Update the innerHTML of the element with the new value
    counterElement.innerHTML = newValue;
  });
}

function newCard(){
    
};