


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

function borrar_producto(e){
    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    
    
}
