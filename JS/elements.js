let postres = [
    {postre: "Chocotorta", tiempoDePreparado: "30 minutos", cantidadDeIngredientes: 5,},
    {postre: "Tiramisu", tiempoDePreparado: "60 minutos", cantidadDeIngredientes: 8,},
    {postre: "Isla flotante", tiempoDePreparado: "70 minutos", cantidadDeIngredientes: 10,},
    {postre: "Pastafrola", tiempoDePreparado: "100 minutos", cantidadDeIngredientes: 8,},
    {postre: "Flan", tiempoDePreparado: "70 minutos", cantidadDeIngredientes: 4,},
];
let cabecera = ["Postre", "Tiempo de preparacion", "N° de ingredientes", " "];

let tablaEl = document.getElementById("tabla");
let modal = document.getElementById("divModal");
let tablaBody = document.createElement('tbody');
let fila = document.createElement('tr');
let thead = document.createElement('thead');
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');

