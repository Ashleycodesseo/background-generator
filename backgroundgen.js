var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient () {
    body.style.background = "linear-gradient(to right," 
    + color1.value +  "," + color2.value + ")";
    //now we want to put the css text at the bottom
    css.textContent = body.style.background + ";";
}

//body.style.background = "red"; to change the style using the variable and js
//we want to listen to an event where the user takes action to pick a color
//events: click, mouseenter, keypress, but for this we need input

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

