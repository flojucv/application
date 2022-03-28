urlString = `${document.location.href}`;
let categorie = urlString.split('?')[1];
const catHtml = document.getElementById("categorie");

document.title = `Report | ${categorie}`;
catHtml.innerText = categorie;



function envoieReport() {
    const nom = document.getElementById("nom");
    if(nom.value === "") return alert("Vous n'avez pas renseignez votre nom.");

    const prenom = document.getElementById("prenom");
    if(prenom.value === "") return alert("Vous n'avez pas renseignez votre prenom");

    const email = document.getElementById('email');
    if(email.value === "" || !email.value.includes("@")) return alert("Vous n'avez pas renseignez d'email valide");

    const tel = document.getElementById('telephone');
    if(tel.value === "" || tel.value.length != 10 || isNaN(tel.value)) return alert("Vous n'avez pas renseignez de numéro de téléphone valide.");

    const message = document.getElementById("text-message");
    if(message.value === "") return alert("Vous n'avez pas renseignez de message.");
}

const buton = document.getElementById("btn-envoyer");
buton.addEventListener("click", envoieReport);