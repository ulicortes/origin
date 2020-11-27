let headeR = () => {
    for (n in cabecera) {
        let header = document.createElement('th');
        header.innerText = cabecera[n];
        header.classList.add("borders");
        console.log(cabecera[n]);
        thead.appendChild(header);
    }
}
let content = () => {
    for (n in postres) {
        let col1 = document.createElement('tr');
        let col2 = document.createElement('td');
        let col3 = document.createElement('td');

        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');
        btn1.innerText = "Editar";
        btn2.innerText = "Eliminar";

        col1.innerText = postres[n].postre;
        col1.classList.add("borders");
        col2.innerText = postres[n].tiempoDePreparado;
        col2.classList.add("borders");
        col3.innerText = postres[n].cantidadDeIngredientes;
        col3.classList.add("borders");

        col1.appendChild(col2);
        col1.appendChild(col3);
        col1.appendChild(btn1);
        col1.appendChild(btn2);
        tablaBody.appendChild(col1);

        btn2.addEventListener('click', () => {
            tablaBody.removeChild(col1)
        })
    }
}
let appenTable = () => {
    tablaEl.appendChild(thead);
    tablaEl.appendChild(tablaBody);
}
window.addEventListener('load', () => {
    headeR();
    content();
    appenTable();
})
