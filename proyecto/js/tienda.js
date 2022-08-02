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


// let boton_todas = document.getElementById("boton_todas");
// boton_todas.addEventListener("click", function () {
//     zapas.innerHTML = ""
//     zapatillas.forEach(i => {
//         zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <h5>${i.marca} ${i.nombre}</h5> <h4>$${i.precio}</h4> <p>${i.image}</p> </p>
//         <button id="agregarModal" class="buy-btn botonCompra">Agregar al Carrito</button> </div>`
//     });
// });

// let boton_nike = document.getElementById("boton_nike");
// boton_nike.addEventListener("click", function () {
//     zapas.innerHTML = ""
//     const filtro = zapatillas.filter(filtradoZapas => filtradoZapas.marca === "Nike");
//     console.log(filtro);
//     filtro.forEach(i => {
//         zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <h5>${i.marca} ${i.nombre}</h5> <h4>$${i.precio}</h4> <p>${i.image}</p>  </p> 
//         <button class="buy-btn botonCompra">Agregar al Carrito</button></div>`
//     });
// });

// let boton_adidas = document.getElementById("boton_adidas");
// boton_adidas.addEventListener("click", function () {
//     zapas.innerHTML = ""
//     const filtro = zapatillas.filter(filtradoZapas => filtradoZapas.marca === "Adidas");
//     console.log(filtro);
//     filtro.forEach(i => {
//         zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <h5>${i.marca} ${i.nombre}</h5> <h4>$${i.precio}</h4> <p>${i.image}</p>  </p> 
//         <button class="buy-btn botonCompra">Agregar al Carrito</button></div>`
//     });
// });


// let boton_ascics = document.getElementById("boton_ascics");
// boton_ascics.addEventListener("click", function () {
//     zapas.innerHTML = ""
//     const filtro = zapatillas.filter(filtradoZapas => filtradoZapas.marca === "Asics");
//     console.log(filtro);
//     filtro.forEach(i => {
//         zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <h5>${i.marca} ${i.nombre}</h5> <h4> $${i.precio}</h4> <p>${i.image}</p>  </p>
//         <button class="buy-btn botonCompra">Agregar al Carrito</button></div>`
//     });
// });




//  BOTON COMPRAR - CARRITO 

let carrito = [];

function traerLocalStorage() {
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
        nombre: nombre_producto,
        precio: precio_producto,
        cantidad: 1,
        img: img_producto
    };

    carrito.push(producto);

    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", arreglo_JSON);


    Swal.fire({
        title: 'Bien',
        text: 'Se agrego producto al carrito!',
        icon: 'success'
    })

    let botones_borrar = document.querySelectorAll('.btn-borrar');
    for (const boton of botones_borrar) {
        boton.addEventListener('click', borrar_producto);
    }
}

function borrar_producto(e) {
console.log("holaas")
    let producto = e.target.parentNode.parentNode 
    producto.remove();
    localStorage.clear();
    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", arreglo_JSON);
}

document.getElementById("carroBoton").addEventListener("click", mostrarCarrito);

function mostrarCarrito() {
    let main = document.getElementById("main");
    main.innerHTML = ''
    let carritoContainer = document.createElement('div');
    carritoContainer.classList.add('contenedor_carro')
    carritoContainer.innerHTML = `<h2 class="text-center">FootShop</h2>
        <p class="text-center">Revisa tus productos:</p>
        <table class="table table-condensed container">
            <thead>
                <tr>
                    <td>Borrar</td>
                    <td>Imagen</td>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Precio</td>
                </tr>
            </thead>
            <tbody id="tbody">

            </tbody>
            <tfoot>
                <tr id="footer">
                    
                </tr>
            </tfoot>
        </table>
        `

    main.appendChild(carritoContainer);

    carrito.forEach(e => {
        let fila = document.createElement("tr");
        let tabla = document.getElementById("tbody");

        fila.innerHTML = `<td><a class="fa-solid fa-trash-can borrar_elemento"></a></td>
        <td><img src="${e.img}" height=60px></td>
        <td>${e.nombre} </td>
        <td>${e.cantidad} </td>
        <td>${e.precio} </td>`;

        let botones_borrar = document.querySelectorAll(".borrar_elemento");
        for (let btn of botones_borrar) {
            btn.addEventListener("click", borrar_producto)
        }
        tabla.append(fila);
    });


    const footer = document.getElementById('footer');

    footer.innerHTML = ''

    if (carrito.length === 0) {
            footer.innerHTML = '<th scope="row" colspan="5" class="carritoVacio text-center "> Carrito Vacio - Comience a Comprar!</th>'
        return
    }

    if (carrito.length > 0) {
            footer.innerHTML = `
            <td><button class="btn btn-danger btn-sm" id="vaciar_carro">Vaciar todo</button></td>
            <td><button class="btn btn-success btn-sm" id="">Comprar</button></td>
            <td>Total productos</td>
            <td> 13</td>
            <td class="font-weight-bold"> $32.000</td>`
            let boton_vaciar = document.getElementById("vaciar_carro");
            boton_vaciar.addEventListener("click", vaciar_carrito);
        return  
    }
    
   
}




// function borrar_producto(e) {

//     // localStorage.removeItem("carrito", e.target);
//     //  COMO HAGO PARA BORRAR 1 SOLO
//     mostrarCarrito(traerLocalStorage());
//     Swal.fire({
//         icon: 'error',
//         title: 'Se elimino un producto',
//         text: 'Que lastima!'
//     })
// }

function vaciar_carrito(e) {
    localStorage.clear();
    mostrarCarrito(traerLocalStorage());
    Swal.fire({
        icon: 'error',
        title: 'Se vacio el carrito',
        text: 'Ve a la tienda a llenarlo!'
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