/*
 Awais Razaque - Lab 4: JavaScript Clue Game -- Mixing objects and arrays
 Marist CMPT 221L Fall 2024
*/

let suspectsArray = ["John", "Awais", "Evan", "Mary", "Kevin", "Pluto"];
let weaponsArray = ["Glock", "AK-47", "AWP", "Scout", "M4A1-S", "Deagle", "Knife", "P90"];
let roomsArray = ["Kitchen", "Living Room", "Garage", "Patio", "Master Bedroom", "HC1021", "DY2005", "DY1008", "Bathroom", "Closet"];

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
    let objectRandom = {
        name: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    };
    return objectRandom;
}

function revealMystery(objectRandom) {
    alert(objectRandom.name + " killed Mr.Marist using the " + objectRandom.weapon + " in the " + objectRandom.room + "!");
}

document.getElementById("main").addEventListener("click", () => {
    let obj = pickMystery();
    revealMystery(obj);
});
