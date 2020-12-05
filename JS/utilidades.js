let spanLoad = document.createElement('span');
spanLoad.innerText = "Cargando...";
spanLoad.classList.add("sr-only");
// LOADER ROJO
let loadDiv = document.createElement('div');
loadDiv.setAttribute("role", "staus");
loadDiv.classList.add("spinner-border", "text-danger");
loadDiv.appendChild(spanLoad);
loadDiv.classList.add("hide");
modalDivEl.appendChild(loadDiv)
// LOADER VERDE
let loadDivGreen = document.createElement('div');
loadDivGreen.setAttribute("role", "staus");
loadDivGreen.classList.add("spinner-border", "text-success");
loadDivGreen.classList.add("hide");
// DROPDOWN
let drop = document.createElement('select');
let opt = ["Sin filtro", "Menor a 70 minutos", "Mayor a 5 ingredientes"];
let options = document.createElement('option');
let options1 = document.createElement('option');
let options2 = document.createElement('option');

options.innerText = opt[0];
options1.innerText = opt[1];
options2.innerText = opt[2];
drop.appendChild(options);
drop.appendChild(options1);
drop.appendChild(options2);
