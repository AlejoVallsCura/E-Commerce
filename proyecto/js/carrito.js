



// function mostrar_carrito(producto){

//     let fila = document.createElement("tr");

//     fila.innerHTML = `<td><a class="fa-solid fa-trash-can borrar_elemento"></a></td>
//     <td><img src="${producto.img}" height=60px></td>
//     <td>${producto.nombre} </td>
//     <td>${producto.cantidad} </td>
//     <td>${producto.precio} </td>`;

//     let tabla = document.getElementById("tbody");
//     tabla.append(fila);

//     let botones_borrar = document.querySelectorAll(".borrar_elemento");

//     for(let btn of botones_borrar){
//         btn.addEventListener("click" , borrar_producto)
//     }
// }

// function borrar_producto(e){
//     let abuelo = e.target.parentNode.parentNode;
//     abuelo.remove();
// }


// let carrito = [];

// function traerLocalStorage(){
//     carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// }
// traerLocalStorage();

// let btn_compra = document.querySelectorAll(".botonCompra");

// for (let boton of btn_compra) {
//     boton.addEventListener("click", agregar_al_carrito);
// }

// function agregar_al_carrito(e) {
//     let padre = e.target.parentNode;

//     let nombre_producto = padre.querySelector("h5").textContent;
//     let precio_producto = padre.querySelector("h4").textContent;
//     let img_producto = padre.querySelector("img").src;

//     let producto = {
//         nombre : nombre_producto,
//         precio : precio_producto,
//         cantidad : 1,
//         img : img_producto
//     };

//     carrito.push(producto);

//     let arreglo_JSON = JSON.stringify(carrito);
//     localStorage.setItem("carrito", arreglo_JSON);

//     Swal.fire({
//         title: 'Bien',
//         text: 'Se agrego producto al carrito!',
//         icon:'success'
//     })
// }

// let container = document.getElementById("carrito");

// carrito.forEach(e => {
//     let fila = document.createElement("tr");

//     fila.classList ='table'
//     const tablaHTML = `<td><a class="fa-solid fa-trash-can borrar_elemento"></a></td>
//     <td><img src="${e.img}" height=60px></td>
//     <td>${e.nombre} </td>
//     <td>${e.cantidad} </td>
//     <td>${e.precio} </td><br>`;

//     let botones_borrar = document.querySelectorAll("borrar_elemento");
//     for(let btn of botones_borrar){
//         btn.addEventListener("click" , borrar_producto)
//     }

//     let tabla = document.getElementById("tbody");
//     tabla.append(fila);

//     container.innerHTML += tablaHTML;
// });

// function borrar_producto(e){
//     let abuelo = e.target.parentNode.parentNode;
//     localStorage.abuelo.remove();

//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong!'
//     })
// }



