//  FILTRTADO DE ZAPATILLAS

pintarProducto();

function pintarProducto() {
    fetch("/proyecto/json/productos.json")
        .then(rta => rta.json())
        .then(data => {

            let zapas = document.querySelector("#zapatilla");
            zapas.innerHTML = ""
            data.forEach(i => {
                zapas.innerHTML += `
        <div class="d_articulos"> 
            <p class="p_articulos"> 
                <h5>${i.marca} ${i.nombre}</h5> 
                <h4>$ ${i.precio}</h4>  
                <p>${i.image}</p> 
            </p>
                <button id="${i.id}" class="buy-btn botonCompra">Agregar al Carrito</button>
        </div>`
            })
            document.addEventListener("click", e => {
                if (e.target.matches(".botonCompra")) {
                    agregar_al_carrito(e);
                }
            })
        })
}





//  BOTON COMPRAR - CARRITO 

function traerLocalStorage() {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
}
traerLocalStorage();



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
        title: 'Producto agregado al carrito',
        confirmButtonColor: '#000'
    })
}


document.getElementById("carroBoton").addEventListener("click", mostrarCarrito);

let total = 0;

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


    carrito.forEach(e => {
        let precio_a = e.precio.replace("$", "") 
        let precio_n = parseFloat(precio_a);
        total = total + precio_n ;

        console.log(precio_n);
    });

    if (carrito.length > -1) {
        cargar_total()
        footer.innerHTML = `
        <td><button class="btn btn-danger btn-sm" id="vaciar_carro">Vaciar todo</button></td>
        <td><button class="btn btn-success btn-sm" id="comprar">Comprar</button></td>
        <td>Total productos</td>
        <td>${carrito.length}</td>
        
        <td class="font-weight-bold"> $${total}</td>`

        let boton_vaciar = document.getElementById("vaciar_carro");
        boton_vaciar.addEventListener("click", vaciar_carrito);

        let boton_comprar = document.getElementById("comprar");
        boton_comprar.addEventListener("click", hacer_checkout);

    }
}

function cargar_total(){
    total = 0
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.forEach(e => {
        let precio_a = e.precio.replace("$", "") 
        let precio_n = parseFloat(precio_a);
        total = total + precio_n ;
        console.log(precio_n);
    });
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
        text: 'Que lastima!',
        confirmButtonColor: '#000'
    })
    mostrarCarrito();
}

function vaciar_carrito(e) {
    localStorage.clear();
    mostrarCarrito(traerLocalStorage());
    Swal.fire({
        icon: 'error',
        title: 'Se vacio el carrito',
        text: 'Ve a la tienda a llenarlo!',
        confirmButtonColor: '#000'
    }).then(function() {
        window.location = "/proyecto/html/tienda.html";
    });
}

async function hacer_checkout() {
    let {
        value: email
    } = await Swal.fire({
        title: 'Ingrese su Email',
        input: 'email',
        inputPlaceholder: 'Ingrese su direccion de correo electronico',
        confirmButtonColor: '#000'
    })

    if (email) {
        Swal.fire({
            title: 'Gracias por su compra!',
            text: `No olvides revisar tu mail (${email}) para terminar la compra.`,
            width: 600,
            padding: '3em',
            color: '#000',
            confirmButtonColor: '#000',
            backdrop: `
              #fdbe01
              left top
              no-repeat
            `
        }).then(function() {
            window.location = "/proyecto/index.html";
            localStorage.clear();
            mostrarCarrito(traerLocalStorage());
        });
    }

}

















// let boton_nike = document.getElementById("boton_nike");
// boton_todas.addEventListener("click", function () {
//     pintarProducto(zapatillas);
// })
// boton_nike.addEventListener("click", function () {
//     let nikes = zapatillas.filter(e => e.marca === "Nike");
//     pintarProducto(nikes);
// })
// boton_adidas.addEventListener("click", function () {
//     let adi = zapatillas.filter(e => e.marca === "Adidas");
//     pintarProducto(adi);
// })
// boton_shoes.addEventListener("click", function () {
//     let sho = zapatillas.filter(e => e.marca === "Shoes");
//     pintarProducto(sho);
// })
// boton_puma.addEventListener("click", function () {
//     let pum = zapatillas.filter(e => e.marca === "Puma");
//     pintarProducto(pum);
// })
// boton_newBalance.addEventListener("click", function () {
//     let newB = zapatillas.filter(e => e.marca === "NewBalance");
//     pintarProducto(newB);
// })