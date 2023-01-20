let ruimtePerLeerling = 3;
let aantal = window.prompt("Hoeveel leerlingen zitten er nu in de klas (Cijfer 0-33)");
let oppervlakte = ruimtePerLeerling * aantal;

let text = "Geen antwoord gegeven";
let antwoordDiv = document.getElementById("contentblok");

let d = new Date();
let n = d.toLocaleString();

if (oppervlakte <= 50) {
    text = "Dat is wel een lekker de ruimte";
    antwoordDiv.innerHTML = text + "<br><br>Ingevoerd op:" + n;
} else if (oppervlakte >= 80) {
    text = "Dat is wel druk, houd een beetje afstand!";
    antwoordDiv.innerHTML = text + "<br><br>Ingevoerd op:" + n;
} else if (oppervlakte >= 50 && oppervlakte < 80) {
    text = "Verspreid iedereen over het lokaal dan is het prima te doen!";
    antwoordDiv.innerHTML = text + "<br><br>Ingevoerd op:" + n;
}

