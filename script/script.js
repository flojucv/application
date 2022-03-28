const boutons = document.querySelectorAll(".problemes");
let categorie = "";
const title_report = "./report".getElementById("report-title");


boutons.forEach(bouton => {
    function selectCategorie() {
        categorie = bouton.id;
        title_report.innerText = `Report | ${categorie}`;
    }
    bouton.addEventListener("click", selectCategorie);
})