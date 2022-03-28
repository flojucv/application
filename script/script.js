urlString = `${document.location.href}`;
let categorie = urlString.split('?')[1];
const catHtml = document.getElementById("categorie");

document.title = `Report | ${categorie}`;
catHtml.innerText = categorie;



function envoieReport() {
    const nom = document.getElementById("nom");
    if(nom.value){}
}

const buton = document.getElementById("btn-envoyer");
buton.addEventListener("click", envoieReport);