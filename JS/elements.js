let desserts = `{
        "postres": [
            {"postre": "Chocotorta", "tiempoDePreparado": "30 minutos", "cantidadDeIngredientes": 5},
            {"postre": "Tiramisu", "tiempoDePreparado": "60 minutos", "cantidadDeIngredientes": 8},
            {"postre": "Isla flotante", "tiempoDePreparado": "70 minutos", "cantidadDeIngredientes": 10},
            {"postre": "Pastafrola", "tiempoDePreparado": "100 minutos", "cantidadDeIngredientes": 8},
            {"postre": "Flan", "tiempoDePreparado": "70 minutos", "cantidadDeIngredientes": 4}
        ]
    }
`
let dPro = JSON.parse(desserts);
let llaves = Object.keys(dPro.postres[0]);
let tablaEl = document.getElementById("tabla");
let modalDiv = document.getElementById('div');
let modalDivEl = document.createElement('div');
let modalEdit = document.createElement('div');
let elementos = dPro.postres;

let carrousel = document.getElementById("carouselExampleControls");
let modal = document.getElementById("divModal");

let btnAdd = document.createElement('button');
let btnShow = document.createElement('button');
let agreg = document.createElement('button');
let cancelar = document.createElement('button');
let editar = document.createElement('button');

let inpuPostre = document.createElement('input'); 
let inpuTdp = document.createElement('input'); 
let inpuCdi = document.createElement('input'); 

let arrayInput = [];
// console.log(postre);
let tBody = document.createElement('tbody');

let jojo = document.createElement('input');