// HEADER
let header = (elem) => {
    let acc = "accion";
    ca = Object.keys(elem[0]);
    ca.push(acc);
    let theadEl = document.createElement('thead');
    let trEl = document.createElement('tr');
    for (let i = 1; i < ca.length; i++) {
      let thEl = document.createElement('th');
      thEl.innerHTML = ca[i];
      trEl.appendChild(thEl);
      thEl.classList.add("borders")
    }
    theadEl.appendChild(trEl);
    tablaEl.appendChild(theadEl);
};
// CREACION DE LAS FILAS DE LA TABLA ORIGINAL
let filas = (elem) => {
    let trEl = document.createElement('tr');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    ////////////////////////////////////////////
    let ediElem = [];
    btn1.innerText = "Editar";
    btn2.innerText = "Eliminar";
    btn1.classList.add("med");
    btn2.classList.add("med");
    ////////////////////////////////////////////
    for (i in elem) {
        let tdEl = document.createElement('input');
        let j = document.createElement('td');
        tdEl.value = elem[i];
        tdEl.readOnly = true;
        tdEl.classList.add("borders");
        j.appendChild(tdEl);
        trEl.appendChild(j);
        trEl.appendChild(btn1);
        trEl.appendChild(btn2);
        ////////////////////////////////////////////
        let ifUno = () => {
            trEl.classList.add("m");
            trEl.classList.add("mem");
            tdEl.readOnly = false;
            btn1.innerText = "Listo";
            ediElem.push(tdEl.value)
        }
        ////////////////////////////////////////////
        let ifDos = () => {
            trEl.appendChild(loadDivGreen);
            loadDivGreen.classList.remove("hide");
            for (let i = 0; i < ediElem.length; i++) {
                
            }
            setTimeout(() => {
                elem.postre = ediElem[0];
                elem.tiempoDePreparado = ediElem[1];
                elem.cantidadDeIngredientes = ediElem[2];
                tdEl.readOnly = true;
                btn1.innerText = "Editar";
                loadDivGreen.classList.add("hide")
                trEl.classList.remove("m");
                trEl.classList.remove("mem");
            }, 1000);
        }
        ////////////////////////////////////////////
        let listenBtn = () => {
            trEl.remove();
        }
        ////////////////////////////////////////////
        btn1.addEventListener('click', () => {
            if (tdEl.readOnly == true) {
                ifUno();
            } else if (tdEl.readOnly == false) {
                ifDos();
            }
        });
        ////////////////////////////////////////////
        btn2.addEventListener('click', () => {
            deleteDessert(trEl.rowIndex);
            listenBtn();
        })
    }
    return trEl
}
// CREACION DE LAS FILAS DE LOS FILTROS
let filasFilter = (elem) => {
    let trEl = document.createElement('tr');
    let btn1 = document.createElement('button');
    ////////////////////////////////////////////
    btn1.innerText = "X";
    btn1.disabled = true;
    btn1.classList.add("med");
    ////////////////////////////////////////////
    for (i in elem) {
        let tdEl = document.createElement('input');
        let j = document.createElement('td');
        tdEl.value = elem[i];
        tdEl.readOnly = true;
        tdEl.classList.add("borders");
        j.appendChild(tdEl);
        trEl.appendChild(j);
        trEl.appendChild(btn1);
    }
    return trEl
}
// CREACION EL TOGGLE
let switchBtn = () => {
    let div = document.createElement('div');
    div.classList.add("custom-control");
    div.classList.add("custom-switch");
    let inpu = document.createElement('input');
    inpu.type = "checkbox";
    inpu.classList.add("custom-control-input");
    inpu.setAttribute("id", "customSwitch1");
    let lab = document.createElement('label');
    lab.innerText = "Mostrar/ocultar filtro"
    lab.setAttribute("for", "customSwitch1");
    lab.classList.add("custom-control-label");
    div.appendChild(inpu);
    div.appendChild(lab);
    div.addEventListener('change', () =>{
        drop.classList.toggle("hide");
    })
    return div
}
// SE ANCLAN LAS FILAS AL BODY DE LA TABLA
let cuerpo = (elem) => {
    let cDiFilter = elem.filter(elemento => elemento.cantidadDeIngredientes > 5);
    let tDpFilter = elem.filter(elem => parseInt(elem.tiempoDePreparado) < parseInt("70 minutos"));
    for (let i = 0; i < elem.length; i++) {
        tBody.appendChild(filas(elem[i]));
        tBody1.appendChild(filasFilter(tDpFilter[i]));
        tBody2.appendChild(filasFilter(cDiFilter[i]));
    }
    tablaEl.appendChild(tBody);
    tablaEl.appendChild(tBody1);
    tablaEl.appendChild(tBody2);
    tablaEl.appendChild(switchBtn());
    tablaEl.appendChild(drop);
    tablaEl.classList.add("hide");
    drop.classList.add("hide");
    tBody1.classList.add("hide");
    tBody2.classList.add("hide");
    
};
// GENERACION DE BOTONES MOSTRAR/OCULTAR TABLA Y AGREGAR
let botton = () => {
    setTimeout(() => {
        btnAdd.classList.add("hide");
        btnAdd.innerText = "Agregar";
        btnShow.innerText = "Mostrar tabla";
        modal.appendChild(btnShow);
        modal.appendChild(btnAdd);
    }, 1000);
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
        
        let ifUno = () => {
            trEl.classList.add("m");
            trEl.classList.add("mem");
            tdEl.readOnly = false;
            btn1.innerText = "Listo";
        }
        let ifDos = () => {
            trEl.appendChild(loadDivGreen);
            loadDivGreen.classList.remove("hide");
            setTimeout(() => {
                tdEl.readOnly = true;
                btn1.innerText = "Editar";
                loadDivGreen.classList.add("hide")
                trEl.classList.remove("m");
                trEl.classList.remove("mem");
            }, 1000);
        }
        let listenBtn = () => {
            console.log("Boton eliminar");
            trEl.remove();
        }
        btn1.addEventListener('click', () => {
            if (tdEl.readOnly == true) {
                ifUno();
            } else if (tdEl.readOnly == false) {
                ifDos();
            }
        });
        btn2.addEventListener('click', () => {
            listenBtn();
        })
    }
    return trEl;
}
// MODAL QUE APARECE CUANDO PULSO EL BOTON "AGREGAR"
let spam = (elem) => {
    ca = Object.keys(elem[0]);
    ca.shift();
    inpuPostre.placeholder = ca[0];
    inpuTdp.placeholder = ca[1];
    inpuCdi.placeholder = ca[2];
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
// SE MANIPULA LAS CLASES DEL DIV PARA QUE EL MODAL QUEDE VISIBLE
let eventAdd = () => {
    modalDiv.classList.remove("hide");
    modalDiv.classList.add("m");
}
// OBTENGO LAS KEYS DE LA API Y LAS USO DE PLACEHOLDER PARA INDICAR DONDE VA A IR CADA ELEMENTO AGREGADO
let showAddDesserts = () => {
    fetch("https://5fcba09751f70e00161f1c5b.mockapi.io/postres")
    .then((res) => res.json().then((elem) => {
        spam(elem);
        eventAdd();
    }))
    .catch((error) => console.log(error))
};
// SE MUESTRA EN LA TABLA LA FILA AGREGADA Y SE VUELVEN LOS VALORES DE INPUTS A NULOS
let agregEvent = () => {
    arrayInput[0] = inpuPostre.value;   
    arrayInput[1] = inpuTdp.value;   
    arrayInput[2] = inpuCdi.value;
    loadDiv.classList.remove("hide");
}
// LOADER PARA AGREGAR ELEMENTOS
let timeOut = () => {
    setTimeout(() => {
        modalDiv.classList.add("hide");
        modalDiv.classList.remove("m");
        loadDiv.classList.add("hide");
        inpuPostre.value = "";
        inpuTdp.value = "";
        inpuCdi.value = "";
        tBody.appendChild(single(arrayInput));
    }, 1000);
}
// LOGICA DE EL BOTON MOSTRAR/OCULTAR TABLA
let btnMostrar = () => {
    btnAdd.classList.toggle("hide");
    tablaEl.classList.toggle("hide");
    carrousel.classList.toggle("hide");
    if (btnShow.innerText === "Mostrar tabla") {
        btnShow.innerText = "Ocultar tabla";
    } else if (btnShow.innerText === "Ocultar tabla") {
        btnShow.innerText = "Mostrar tabla"
    }
}
// LOGICA DEL BOTON QUE FILTRA LAS FILAS
let dropB = () => {
    if (drop.value == "Sin filtro") {
        tBody.classList.remove("hide");
        tBody1.classList.add("hide");
        tBody2.classList.add("hide");
    } else if (drop.value == "Menor a 70 minutos") {
        tBody1.classList.remove("hide");
        tBody.classList.add("hide");
        tBody2.classList.add("hide");
    } else if (drop.value == "Mayor a 5 ingredientes") {
        tBody2.classList.remove("hide");
        tBody1.classList.add("hide");
        tBody.classList.add("hide");
    }
}
// LOGICA DEL BOTON CANCELAR
let cancelBtn = () => {
    modalDiv.classList.add("hide");
    modalDiv.classList.remove("m");
    inpuPostre.value = "";
    inpuTdp.value = "";
    inpuCdi.value= "";
}
// EVENTO WINDOW, CUANDO CARGA LA PAGINA
window.addEventListener('load', () => {
    botton();
    getDesserts();
    alert("Hola, solo quiero destacar que no se puede editar elementos de la api. Por lo tanto se va a editar en pantalla pero no se va a guardar. No supe como hacerlo funcionar, pero lo demas funciona bien, sea obtener, añadir o eliminar. Desde ya muchas gracias, Ulises.")
})
// BOTON MOSTRAR/OCULTAR TABLA
btnShow.addEventListener('click', () => {
    btnMostrar();
})
// BOTON AGREGAR
btnAdd.addEventListener('click', () => {
    showAddDesserts();
})
// BOTON QUE AGREGA LA FILA NUEVA A LA TABLA
agreg.addEventListener('click', () => {
    agregEvent();
    timeOut();
    addDessert();
})
// BOTON QUE CANCELA EL INPUT, VOLVIENDO A LA TABLA ORIGINAL
cancelar.addEventListener('click', () => {
    cancelBtn();
})
// BOTON QUE FILTRA LAS FILAS
drop.addEventListener('change', () => {
    dropB();
})