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
        id: 10,
        marca: "Puma",
        categoria: "",
        nombre: "Pmas 102",
        precio: "19.500",
        image: "<img src='../imagenes/zapatillas/puma.png' />"
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
        marca: "Shoes",
        categoria: "",
        nombre: "EQ78",
        precio: "19.000",
        image: "<img src='../imagenes/zapatillas/shoes.png' />"
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
        id: 11,
        marca: "Puma",
        categoria: "",
        nombre: "P Max",
        precio: "13.900",
        image: "<img src='../imagenes/zapatillas/puma.png' />"
    },
    {
        id: 6,
        marca: "Shoes",
        categoria: "",
        nombre: "Run-T",
        precio: "18.000",
        image: "<img src='../imagenes/zapatillas/shoes.png' />"
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
        id: 13,
        marca: "NewBalance",
        categoria: "",
        nombre: "NewStyle",
        precio: "22.300",
        image: "<img src='../imagenes/zapatillas/newbal-removebg-preview.png' />"
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
        nombre: "AirMax97",
        precio: "22.300",
        image: "<img src='../imagenes/zapatillas/otroLogo-removebg-preview.png' />"
    },
    {
        id: 14,
        marca: "NewBalance",
        categoria: "",
        nombre: "Insan",
        precio: "22.300",
        image: "<img src='../imagenes/zapatillas/newbal-removebg-preview.png' />"
    },
    {
        id: 12,
        marca: "Puma",
        categoria: "",
        nombre: "Pumas 311",
        precio: "27.500",
        image: "<img src='../imagenes/zapatillas/puma.png' />"
    },
    {
        id: 4,
        marca: "Shoes",
        categoria: "",
        nombre: "32 Max",
        precio: "9.000",
        image: "<img src='../imagenes/zapatillas/shoes.png' />"
    }
];

//  FILTRTADO DE ZAPATILLAS

function pintarProducto(productos) {
    let zapas = document.querySelector("#zapatilla");
    zapas.innerHTML = ""
    productos.forEach(i => {
        zapas.innerHTML += `
        <div class="d_articulos"> 
            <p class="p_articulos"> 
                <h5>${i.marca} ${i.nombre}</h5> 
                <h4>$ ${i.precio}</h4>  
                <p>${i.image}</p> 
            </p>
                <button id="${i.id}" class="buy-btn botonCompra">Agregar al Carrito</button>
        </div>`
    });
}
pintarProducto(zapatillas);
let boton_nike = document.getElementById("boton_nike");
boton_todas.addEventListener("click", function () {
    pintarProducto(zapatillas);
})
boton_nike.addEventListener("click", function () {
    let nikes = zapatillas.filter(e => e.marca === "Nike");
    pintarProducto(nikes);
})
boton_adidas.addEventListener("click", function () {
    let adi = zapatillas.filter(e => e.marca === "Adidas");
    pintarProducto(adi);
})
boton_shoes.addEventListener("click", function () {
    let sho = zapatillas.filter(e => e.marca === "Shoes");
    pintarProducto(sho);
})
boton_puma.addEventListener("click", function () {
    let pum = zapatillas.filter(e => e.marca === "Puma");
    pintarProducto(pum);
})
boton_newBalance.addEventListener("click", function () {
    let newB = zapatillas.filter(e => e.marca === "NewBalance");
    pintarProducto(newB);
})


//  BOTON COMPRAR - CARRITO 

function traerLocalStorage() {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
}
traerLocalStorage();

let btn_compra = document.querySelectorAll(".botonCompra");

for (let boton of btn_compra) {
    boton.addEventListener("click", agregar_al_carrito);
}


function agregar_al_carrito(e) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let padre = e.target.parentNode;

    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("h4").textContent;
    let img_producto = padre.querySelector("img").src;
    let id_producto = padre.querySelector(".buy-btn").id;


    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        cantidad: 1,
        img: img_producto,
        id: id_producto
    };

    carrito.push(producto);

    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", arreglo_JSON);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true
    })

    Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
    })
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

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.forEach(e => {
        let fila = document.createElement("tr");
        let tabla = document.getElementById("tbody");

        fila.innerHTML = `<td><a id="${e.id}" class="fa-solid fa-trash-can borrar_elemento"></a></td>
        <td><img src="${e.img}" height=60px></td>
        <td>${e.nombre} </td>
        <td>${e.cantidad} </td>
        <td>${e.precio} </td>`;

        tabla.append(fila);
    });

    let botones_borrar = document.querySelectorAll(".borrar_elemento");
    for (let btn of botones_borrar) {
        btn.addEventListener("click", borrar_producto)
    }

    const footer = document.getElementById('footer');

    footer.innerHTML = ''
    if (carrito.length === 0) {
        footer.innerHTML = `<th scope="row" colspan="5" class="carritoVacio text-center ">   -   Carrito Vacio   -   <a class="botonVolverTienda" href="./tienda.html">  Comprar ahora  </a> -</th>`
        return
    }


    if (carrito.length > -1) {

        footer.innerHTML = `
        <td><button class="btn btn-danger btn-sm" id="vaciar_carro">Vaciar todo</button></td>
        <td><button class="btn btn-success btn-sm" id="comprar">Comprar</button></td>
        <td>Total productos</td>
        <td>${carrito.length}</td>
        <td class="font-weight-bold"> $</td>`

        let boton_vaciar = document.getElementById("vaciar_carro");
        boton_vaciar.addEventListener("click", vaciar_carrito);

        let boton_comprar = document.getElementById("comprar");
        boton_comprar.addEventListener("click", hacer_checkout);

    }
}


function borrar_producto(e) {

    let producto = e.target.parentNode.parentNode
    producto.remove();

    let productosLS = JSON.parse(localStorage.getItem('carrito'));

    if (productosLS) {
        let newProductos = productosLS.filter(producto => producto.id !== e.target.id);
        localStorage.setItem('carrito', JSON.stringify(newProductos));
    }

    Swal.fire({
        icon: 'error',
        title: 'Se elimino un producto',
        text: 'Que lastima!'
    })
    mostrarCarrito()
}

function vaciar_carrito(e) {
    localStorage.clear();
    mostrarCarrito(traerLocalStorage());
    Swal.fire({
        icon: 'error',
        title: 'Se vacio el carrito',
        text: 'Ve a la tienda a llenarlo!'
    })
}

function hacer_checkout() {
        Swal.fire({
        title: 'Multiple inputs',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            localStorage.clear()
          ]
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
}