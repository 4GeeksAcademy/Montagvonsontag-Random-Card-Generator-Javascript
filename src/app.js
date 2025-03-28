import "bootstrap";
import "./style.css";

window.onload = function() {
 
const arrSuits =['♦','♥','♠','♣'];
const arrCardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];

//Functions that give random numbers within the arrays' lenght
const randomSuits = (arrSuits) => Math.floor(Math.random()*arrSuits.length);
const randomCardValues = (arrCardValues) => Math.floor(Math.random()*arrCardValues.length);

//Obtain the elements corresponding to the index position within the arrays
const cardValues = arrCardValues[randomCardValues(arrCardValues)];
const valueSuits = arrSuits[randomSuits(arrSuits)];

//Selects the HTML elements changing their content
document.getElementById("valueSuits").textContent = valueSuits;
document.getElementById("cardValues").textContent = cardValues;
document.getElementById("suitsDown").textContent = valueSuits;

//timer refreshing the website every 10 seconds (10000 miliseconds)
setInterval(function(){
  location.reload();
}, 10000);
}




