urlString = `${document.location.href}`;
let categorie = urlString.split('?')[1];

document.title = `Report | ${categorie}`;