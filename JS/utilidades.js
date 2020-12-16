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
// OBTENER LISTA DE POSTRES
let getDesserts = () => {
    fetch("https://5fcba09751f70e00161f1c5b.mockapi.io/postres")
    .then((res) => res.json().then((elementos) => (elem = elementos)) 
    .then ((elem)=> {
        header(elem);
        for (i in elem) {
            elemId[i] = elem[i].id;
            delete elem[i].id
        }
        cuerpo(elem);
    }))
    .catch((error) => console.log(error))
};
// AGREGAR NUEVO POSTRE
let newDessert = {postre: "Flan", tiempoDePreparado: "70 minutos", cantidadDeIngredientes: 4};
let addDessert = (newDessert) => {
    newDessert = { 
      postre : inpuPostre.value,
      tiempoDePreparado : inpuTdp.value,
      cantidadDeIngredientes : inpuCdi.value,
    }
    fetch("https://5fcba09751f70e00161f1c5b.mockapi.io/postres", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDessert),
    })
      .then((res) => console.log("Postre agregado", res))
      .catch((error) => console(error));
};
// BORRAR POSTRE
let deleteDessert = (idElem) => {
    fetch(`https://5fcba09751f70e00161f1c5b.mockapi.io/postres/${idElem}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        console.log("Cliente eliminado");
      } else {
        console.log("No se pudo eliminar el cliente");
      }
    });
};