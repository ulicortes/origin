let header = (llaves) => {
    let acc = "accion";
    llaves.push(acc)
    let theadEl = document.createElement('thead');
    let trEl = document.createElement('tr');
    for (let i = 0; i < llaves.length; i++) {
        let thEl = document.createElement('th');
        thEl.innerHTML = llaves[i];
        trEl.appendChild(thEl);
        thEl.classList.add("borders")
    }
    theadEl.appendChild(trEl);
    tablaEl.appendChild(theadEl);
};
let filas = (elementos) => {
    let trEl = document.createElement('tr');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    btn1.innerText = "Editar";
    btn2.innerText = "Eliminar";
    btn1.classList.add("med");
    btn2.classList.add("med");
    for (i in elementos) {
        let tdEl = document.createElement('input');
        let j = document.createElement('td');
        tdEl.value = elementos[i];
        tdEl.readOnly = true;
        tdEl.classList.add("borders");
        j.appendChild(tdEl);
        trEl.appendChild(j);
        trEl.appendChild(btn1);
        trEl.appendChild(btn2);
        
        btn1.addEventListener('click', () => {
            trEl.classList.toggle("m");
            trEl.classList.toggle("mem");
            if (tdEl.readOnly == true) {
                tdEl.readOnly = false;
                btn1.innerText = "Listo";
            } else if (tdEl.readOnly == false) {
                tdEl.readOnly = true;
                btn1.innerText = "Editar";

            }
        })
    }
    btn2.addEventListener('click', () => {
        console.log("Boton eliminar");
        console.log(trEl.rowIndex);
        tBody.removeChild(trEl);
    })
    return trEl
}

let cuerpo = (elementos) => {
    for (let i = 0; i < elementos.length; i++) {
        tBody.appendChild(filas(elementos[i]));
    }
    tablaEl.appendChild(tBody);
    tablaEl.classList.add("hide");
};
// GENERACION DE BOTONES MOSTRAR/OCULTAR TABLA Y AGREGAR
let botton = () => {
    btnAdd.classList.add("hide");
    btnAdd.innerText = "Agregar";
    btnShow.innerText = "Mostrar tabla";
    modal.appendChild(btnShow);
    modal.appendChild(btnAdd);
}
// FILA DE ELEMENTOS AGREGADOS
let single = () => {
    let trEl = document.createElement('tr');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');

    btn1.innerText = "Editar";
    btn2.innerText = "Eliminar";
    btn1.classList.add("med");
    btn2.classList.add("med");

    for (i in arrayInput) {
        let tdEl = document.createElement('input');
        let j = document.createElement('td');
        tdEl.value = arrayInput[i];
        tdEl.readOnly = "readonly"
        tdEl.classList.add("borders");
        j.appendChild(tdEl);
        trEl.appendChild(j);
        trEl.appendChild(btn1);
        trEl.appendChild(btn2);        
        btn1.addEventListener('click', () => {
            trEl.classList.toggle("m");
            trEl.classList.toggle("mem");
            if (tdEl.readOnly == true) {
                tdEl.readOnly = false;
                btn1.innerText = "Listo";
            } else if (tdEl.readOnly == false) {
                tdEl.readOnly = true;
                btn1.innerText = "Editar";
            }
        })
    }
    btn2.addEventListener('click', () => {
        console.log(trEl.rowIndex);
        tBody.removeChild(trEl);
    })
    return trEl;
}
// MODAL QUE APARECE CUANDO PULSO EL BOTON "AGREGAR"
let spam = () => {
    inpuPostre.placeholder = llaves[0];
    inpuTdp.placeholder = llaves[1];
    inpuCdi.placeholder = llaves[2];
    agreg.innerText = "Agregar";
    cancelar.innerText = "Cancelar";
    modalDivEl.appendChild(inpuPostre);
    modalDivEl.appendChild(inpuTdp);
    modalDivEl.appendChild(inpuCdi);
    modalDivEl.appendChild(agreg);
    modalDivEl.appendChild(cancelar);
    modalDiv.appendChild(modalDivEl);
    modalDivEl.classList.add("medio");
}
// ASIGNACION DE VALORES A LOS INPUTS, PEGADO DE LA NUEVA FILA AL BODY Y PUESTA DE CLASES
let agregEventTasks = () => {
    arrayInput[0] = inpuPostre.value;   
    arrayInput[1] = inpuTdp.value;   
    arrayInput[2] = inpuCdi.value;
    tBody.appendChild(single(arrayInput));
    modalDiv.classList.add("hide");
    modalDiv.classList.remove("m");
}
// SE MUESTRA EN LA TABLA LA FILA AGREGADA Y SE VUELVEN LOS VALORES DE INPUTS A NULOS
let agregEvent = () => {
    agregEventTasks();
    inpuPostre.value = "";
    inpuTdp.value = "";
    inpuCdi.value = "";
}
// SE MANIPULA LAS CLASES DEL DIV PARA QUE EL MODAL QUEDE VISIBLE
let eventAdd = () => {
    modalDiv.classList.remove("hide");
    modalDiv.classList.add("m");
}
// EVENTO WINDOW, CUANDO CARGA LA PAGINA
window.addEventListener('load', () => {
    header(llaves);
    cuerpo(elementos);
    botton();
})
// BOTON MOSTRAR/OCULTAR TABLA
btnShow.addEventListener('click', () => {
    btnAdd.classList.toggle("hide");
    tablaEl.classList.toggle("hide");
    carrousel.classList.toggle("hide");
    if (btnShow.innerText === "Mostrar tabla") {
        btnShow.innerText = "Ocultar tabla";
    } else if (btnShow.innerText === "Ocultar tabla") {
        btnShow.innerText = "Mostrar tabla"
    }
})
// BOTON AGREGAR
btnAdd.addEventListener('click', () => {
    spam();
    eventAdd();
})
// BOTON QUE AGREGA LA FILA NUEVA A LA TABLA
agreg.addEventListener('click', () => {
    agregEvent();
})
// BOTON QUE CANCELA EL INPUT, VOLVIENDO A LA TABLA ORIGINAL
cancelar.addEventListener('click', () => {
    modalDiv.classList.add("hide");
    modalDiv.classList.remove("m");
    inpuPostre.value = "";
    inpuTdp.value = "";
    inpuCdi.value= "";
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MI IDEA ES HACER INPUTS EN CADA CELDA, PONERLES LOS VALORES Y DEJARLOS DESHABILITADOS
// CUANDO TOQUE EDITAR SE VAN A HABILITAR Y LOS VOY A PODES MODIFICAR.


// let single = () => {
//     let trEl = document.createElement('tr');
//     let j = document.createElement('td');
//     let btn1 = document.createElement('button');
//     let btn2 = document.createElement('button');

//     btn1.innerText = "Editar";
//     btn2.innerText = "Eliminar";

//     // let tdPo = document.createElement('input');
//     // let tdTi = document.createElement('input');
//     // let tdCa = document.createElement('input');

//     for (i in arrayInput) {
//         let tdEl = document.createElement('input');
//         let j = document.createElement('td');
//         tdEl.value = arrayInput[i];
//         tdEl.readOnly = "readonly"
//         tdEl.classList.add("borders");
//         j.appendChild(tdEl);
//         trEl.appendChild(j);
//         trEl.appendChild(btn1);
//         trEl.appendChild(btn2);
//     }

//     // tdPo.innerHTML = arrayInput[0];
//     // tdTi.innerHTML = arrayInput[1];
//     // tdCa.innerHTML = arrayInput[2];

//     // tdPo.classList.add("borders");
//     // tdTi.classList.add("borders");
//     // tdCa.classList.add("borders");

//     // trEl.appendChild(tdPo); 
//     // trEl.appendChild(tdTi); 
//     // trEl.appendChild(tdCa); 
//     trEl.appendChild(btn1);
//     trEl.appendChild(btn2);
//     btn1.addEventListener('click', () => {
//         console.log("Boton editar");
//         spam();
//         eventAdd();

//     })
//     btn2.addEventListener('click', () => {
//         console.log(trEl.rowIndex);
//         tBody.removeChild(trEl);
//     })
//     return trEl;
// }

    // btn1.addEventListener('click', () => {
    //     console.log("Boton editar");
    //     console.log(trEl.rowIndex);
    //     spamEdit();
    //     eventAdd();
    //     inpuPostre.value = elementos.postre;
    //     inpuTdp.value = elementos.tiempoDePreparado;
    //     inpuCdi.value= elementos.cantidadDeIngredientes;
    // })

    // MODAL QUE APARECE CUANDO PULSO EL BOTON "EDITAR"
// let spamEdit = () => {
//     inpuPostre.value = elementos.postre;
//     inpuTdp.value = elementos.tiempoDePreparado;
//     inpuCdi.value = elementos.cantidadDeIngredientes;
//     editar.innerText = "Editar";
//     cancelar.innerText = "Cancelar";
//     modalEdit.appendChild(inpuPostre);
//     modalEdit.appendChild(inpuTdp);
//     modalEdit.appendChild(inpuCdi);
//     modalEdit.appendChild(editar);
//     modalEdit.appendChild(cancelar);
//     modalDiv.appendChild(modalEdit);
//     modalDiv.classList.add("hide");
//     modalEdit.classList.add("medio");
// }