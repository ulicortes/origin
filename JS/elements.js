let tablaEl = document.getElementById("tabla");
let modalDiv = document.getElementById('div');
let modalDivEl = document.createElement('div');

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
let ca = [];
let elem = [];
let elemId = [];

let tBody = document.createElement('tbody');
let tBody1 = document.createElement('tbody');
let tBody2 = document.createElement('tbody');

// [
//  {"id": "1", "postre": "Chocotorta", "tiempoDePreparado": "30 minutos", "cantidadDeIngredientes": 5},
//  {"id": "2", "postre": "Tiramisu", "tiempoDePreparado": "60 minutos", "cantidadDeIngredientes": 8},
//  {"id": "3", "postre": "Isla flotante", "tiempoDePreparado": "70 minutos", "cantidadDeIngredientes": 10},
//  {"id": "4", "postre": "Pastafrola", "tiempoDePreparado": "100 minutos", "cantidadDeIngredientes": 8},
//  {"id": "5", "postre": "Flan", "tiempoDePreparado": "70 minutos", "cantidadDeIngredientes": 4}
// ]