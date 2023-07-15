//Load internal text upon loading the document
document.addEventListener("DOMContentLoaded", function() {
    // Get the reference to the card div
    var cardDiv = document.getElementById("Card");
  
    // Create a text node
    var textNode = document.createTextNode("This is the added text.");
  
    // Append the text node to the card div
    cardDiv.appendChild(textNode);
  });