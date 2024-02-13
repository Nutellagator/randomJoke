// Array mit Witzen
let jokes = [
    "Witz1",
    "Witz2",
    "Witz3",
    "Witz4",
    "Witz5",
    "Witz6"
];

// Funktion, um einen zufälligen Witz auszuwählen und anzuzeigen
function generateJoke() {
    // Zufällige Indexnummer auswählen
    let randomIndex = Math.floor(Math.random() * jokes.length);
    // Den zufälligen Witz dem Element mit der ID "jokeOutputText" zuweisen
    document.getElementById("jokeOutputText").innerHTML = jokes[randomIndex];
};

let toggle = false;
function darkMode() {
    if(toggle == false){
        document.querySelector('header').style.backgroundColor = "black";
        document.querySelector('body').style.backgroundColor = "darkgrey";
        document.getElementById('jokeButtonDIV').style.backgroundColor = "darkgrey";
        document.getElementById('newJokeButton').style.backgroundColor = "black";
        document.getElementById('newJokeButton').style.color = "white";
        toggle = true

    } else {
        document.querySelector('header').style.backgroundColor = "brown";
        document.querySelector('body').style.backgroundColor = "lightcoral";
        document.getElementById('jokeButtonDIV').style.backgroundColor = "lightcoral";
        document.getElementById('newJokeButton').style.backgroundColor = "coral";
        document.getElementById('newJokeButton').style.color = "black";
        toggle = false;
    }
}