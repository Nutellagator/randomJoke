/* Die erste Variante */


/* TODO: 
-> Zufallsgenerator für Zahlen
-> Clear-Funktion für Witze
-> Witze in Datenbank speichern
*/

// Witz-variablen
let joke1 = "Witz1";
let joke2 = "Witz2";
let joke3 = "Witz3";
let joke4 = "Witz4";
let joke5 = "Witz5";
let joke6 = "Witz6";



/* 

// Neues p-Element erstellen
var paragraph = document.createElement("p");

// Textinhalt für das p-Element festlegen
var text = document.createTextNode("Hier ist der Text für das neue p-Element.");

// Den Text zum p-Element hinzufügen
paragraph.appendChild(text);

// Das p-Element dem Element mit der ID "jokeOutput" hinzufügen
document.getElementById("jokeOutput").appendChild(paragraph);


 */

/* Der Witz wird dem p-element im html zugewiesen  */
function generateJoke() {

let theRandomNumber = Math.floor(Math.random()*12 +1);

switch (theRandomNumber) {
    case 1:
        document.getElementById("jokeOutputText").innerHTML = joke1;
        break;
    case 2:
        document.getElementById("jokeOutputText").innerHTML = joke2;
        break;
    case 3:
        document.getElementById("jokeOutputText").innerHTML = joke3;
        break;
    case 4:
        document.getElementById("jokeOutputText").innerHTML = joke4;
        break;
    case 5:
        document.getElementById("jokeOutputText").innerHTML = joke5;
        break;
    case 6:
        document.getElementById("jokeOutputText").innerHTML = joke6;
        break;    
}

};

