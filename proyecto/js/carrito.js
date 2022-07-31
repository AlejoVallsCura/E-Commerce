////////////////     BOTON COMPRAR - CARRITO       ////////////////

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

    let hijo = e.target;
    let padre = hijo.parentNode;
    let nombre_producto = padre.querySelector("h5").textContent;
    //console.log(nombre_producto);
    let precio_producto = padre.querySelector("h4").textContent;
    //console.log(precio_producto);
    let img_producto = padre.querySelector("img").src;
    //console.log(img_producto);


    let producto = {
        nombre : nombre_producto,
        precio : precio_producto,
        cantidad : 1,
        img : img_producto
    };


    carrito.push(producto);

    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", arreglo_JSON);

    mostrar_carrito( producto);

}

function mostrar_carrito( producto){

    let fila = document.createElement("tr");

    fila.innerHTML = `<td><a class="fa-solid fa-trash-can borrar_elemento"></a></td>
    <td><img src="${producto.img}" height=60px></td>
    <td>${producto.nombre} </td>
    <td>${producto.cantidad} </td>
    <td>${producto.precio} </td>`;

    let tabla = document.getElementById("tbody");
    tabla.append(fila);

    let botones_borrar = document.querySelectorAll(".borrar_elemento");

    for(let btn of botones_borrar){
        btn.addEventListener("click" , borrar_producto)
    }

}

function borrar_producto(e){

    let abuelo = e.target.parentNode.parentNode;

    abuelo.remove();
}




