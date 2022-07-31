const zapatillas = [{
        id: 1,
        marca: "Nike",
        categoria: "",
        nombre: "Air Force 1",
        precio: "31.000",
        image: "<img src='../imagenes/zapatillas/otroLogo-removebg-preview.png' />"
    },
    {
        id: 2,
        marca: "Adidas",
        categoria: "",
        nombre: "All Star",
        precio: "28.000",
        image: "<img src='../imagenes/zapatillas/wjffl5e1.bmp' />"
    },
    {
        id: 3,
        marca: "Nike",
        categoria: "",
        nombre: "Revolution",
        precio: "20.600",
        image: "<img src='../imagenes/zapatillas/otroLogo-removebg-preview.png' />"
    },
    {
        id: 4,
        marca: "Asics",
        categoria: "",
        nombre: "EQ78",
        precio: "19.000",
        image: "<img src='../imagenes/zapatillas/zapatillas-deportivas-moda-11910482-removebg-preview.png' />"
    },
    {
        id: 5,
        marca: "Adidas",
        categoria: "",
        nombre: "NMD",
        precio: "11.200",
        image: "<img src='../imagenes/zapatillas/wjffl5e1.bmp' />"
    },
    {
        id: 6,
        marca: "Asics",
        categoria: "",
        nombre: "Run-T",
        precio: "18.000",
        image: "<img src='../imagenes/zapatillas/zapatillas-deportivas-moda-11910482-removebg-preview.png' />"
    },
    {
        id: 7,
        marca: "Nike",
        categoria: "",
        nombre: "Air Force 1",
        precio: "14.900",
        image: "<img src='../imagenes/zapatillas/otroLogo-removebg-preview.png' />"
    },
    {
        id: 8,
        marca: "Adidas",
        categoria: "",
        nombre: "All Star",
        precio: "16.500",
        image: "<img src='../imagenes/zapatillas/wjffl5e1.bmp' />"
    },
    {
        id: 9,
        marca: "Nike",
        categoria: "",
        nombre: "Revolution",
        precio: "22.300",
        image: "<img src='../imagenes/zapatillas/otroLogo-removebg-preview.png' />"
    }
];

//  FILTRTADO DE ZAPATILLAS

let zapas = document.querySelector("#zapatilla");

zapatillas.forEach(i => {
    zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <h5>${i.marca} ${i.nombre}</h5> <h4>$ ${i.precio}</h4>  <p>${i.image}</p> </p>
    <button id="agregarModal" class="buy-btn botonCompra">Agregar al Carrito</button> </div>`
});


let boton_todas = document.getElementById("boton_todas");
boton_todas.addEventListener("click", function () {
    zapas.innerHTML = ""
    zapatillas.forEach(i => {
        zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <h5>${i.marca} ${i.nombre}</h5> <h4>$${i.precio}</h4> <p>${i.image}</p> </p>
        <button id="agregarModal" class="buy-btn botonCompra">Agregar al Carrito</button> </div>`
    });
});

let boton_nike = document.getElementById("boton_nike");
boton_nike.addEventListener("click", function () {
    zapas.innerHTML = ""
    const filtro = zapatillas.filter(filtradoZapas => filtradoZapas.marca === "Nike");
    console.log(filtro);
    filtro.forEach(i => {
        zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <h5>${i.marca} ${i.nombre}</h5> <h4>$${i.precio}</h4> <p>${i.image}</p>  </p> 
        <button class="buy-btn botonCompra">Agregar al Carrito</button></div>`
    });
});

let boton_adidas = document.getElementById("boton_adidas");
boton_adidas.addEventListener("click", function () {
    zapas.innerHTML = ""
    const filtro = zapatillas.filter(filtradoZapas => filtradoZapas.marca === "Adidas");
    console.log(filtro);
    filtro.forEach(i => {
        zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <h5>${i.marca} ${i.nombre}</h5> <h4>$${i.precio}</h4> <p>${i.image}</p>  </p> 
        <button class="buy-btn botonCompra">Agregar al Carrito</button></div>`
    });
});


let boton_ascics = document.getElementById("boton_ascics");
boton_ascics.addEventListener("click", function () {
    zapas.innerHTML = ""
    const filtro = zapatillas.filter(filtradoZapas => filtradoZapas.marca === "Asics");
    console.log(filtro);
    filtro.forEach(i => {
        zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <h5>${i.marca} ${i.nombre}</h5> <h4> $${i.precio}</h4> <p>${i.image}</p>  </p>
        <button class="buy-btn botonCompra">Agregar al Carrito</button></div>`
    });
});




//  BOTON COMPRAR - CARRITO 

let carrito = [];

function traerLocalStorage(){
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
}
traerLocalStorage();

let btn_compra = document.querySelectorAll(".botonCompra");

for (let boton of btn_compra) {
    boton.addEventListener("click", agregar_al_carrito);
}

function agregar_al_carrito(e) {
    let padre = e.target.parentNode;

    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("h4").textContent;
    let img_producto = padre.querySelector("img").src;

    let producto = {
        nombre : nombre_producto,
        precio : precio_producto,
        cantidad : 1,
        img : img_producto
    };

    carrito.push(producto);

    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", arreglo_JSON);

    
    Swal.fire({
        title: 'Bien',
        text: 'Se agrego producto al carrito!',
        icon:'success'
    })
    
    
}

let container = document.getElementById("carrito");

carrito.forEach(e => {
    let fila = document.createElement("tr");

    fila.classList ='table'
    const tablaHTML = `<td><a class="fa-solid fa-trash-can borrar_elemento"></a></td>
    <td><img src="${e.img}" height=60px></td>
    <td>${e.nombre} </td>
    <td>${e.cantidad} </td>
    <td>${e.precio} </td><br>`;

    let botones_borrar = document.querySelectorAll("borrar_elemento");
    for(let btn of botones_borrar){
        btn.addEventListener("click" , borrar_producto)
    }

    let tabla = document.getElementById("tbody");
    tabla.append(fila);

    container.innerHTML += tablaHTML;
});

function borrar_producto(e){
    abuelo = e.target.parentNode.parentNode;
    abuelo.remove();

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
    })
}












// let zapas = document.querySelector("#zapatilla");
// const btnsFilter = document.getElementsByClassName("btn-filter");
// function mostrarProductos(productos) {
//     zapas.innerHTML = ""
//     productos.forEach(i => {
//         zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <p>${i.marca}</p> <p>${i.nombre}</p> <p>${i.image}</p>  </p> </div>`
//     });
// }
// mostrarProductos(zapatillas)
// for(btn of btnsFilter){
//     btn.addEventListener("click", (e)=>{
//         console.log(e.target.value)
//         let filtro=e.target.value
//         if(filtro==="todas"){
//             mostrarProductos(zapatillas)
//             return //corto de flujo
//         }
//         const filtradas = zapatillas.filter(filtradoZapas => filtradoZapas.marca === filtro)
//         mostrarProductos(filtradas)
//     })
// }
// const doc = document;
// let zapas = document.querySelector("#zapatilla");
// zapatillas.forEach(i => {
//     zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <p>${i.marca}</p> <p>${i.nombre}</p> <p>${i.image}</p>  </p> </div>`
// });

