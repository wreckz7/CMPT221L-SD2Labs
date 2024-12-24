/*
 Awais Razaque - Lab 3: Intro to JS -- Counter App
 Marist CMPT 221L Fall 2024
*/

let counter = 0;

// Increase Button - Increases Count by One
document.getElementById("increment").addEventListener("click", () => {
    counternumber.innerHTML++;
})

// Reset Button - Sets Count to 0
document.getElementById("reset").addEventListener("click", () => {
    counternumber.innerHTML = 0;
})

// Decrease Button - Lowers Count by One
document.getElementById("decrement").addEventListener("click", () => {
    counternumber.innerHTML--;
})