const zapatillas=[
    {
        id:1,
        marca:"Nike",
        categoria: "urbanas",
        nombre:"Air Force 1",
        precio:18.000,
        image:"<img src='/proyecto/imagenes/zapatillas/fondos/otroLogo-removebg-preview.png' />"
    },
    {
        id:2,
        marca:"Adidas",
        categoria: "urbanas",
        nombre:"All Star",
        precio:12.000,
        image:"<img src='/proyecto/imagenes/zapatillas/fondos/otroLogo-removebg-preview.png' />"
    },
    {
        id:3,
        marca:"Nike",
        categoria: "sport",
        nombre:"Revolution",
        precio:20.000,
        image:"<img src='/proyecto/imagenes/zapatillas/fondos/otroLogo-removebg-preview.png' />"
    },
    {
        id:4,
        marca:"Asics",
        categoria: "running",
        nombre:"EQ78",
        precio:19.000,
        image:"<img src='/proyecto/imagenes/zapatillas/fondos/otroLogo-removebg-preview.png' />"
    },
    {
        id:5,
        marca:"Adidas",
        categoria: "sport",
        nombre:"NMD",
        precio:18.000,
        image:"<img src='/proyecto/imagenes/zapatillas/fondos/otroLogo-removebg-preview.png' />"
    },
    {
        id:4,
        marca:"Asics",
        categoria: "running",
        nombre:"Run-T",
        precio:18.000,
        image:"<img src='/proyecto/imagenes/zapatillas/fondos/otroLogo-removebg-preview.png' />"
    },
];

// alert("Bienvenido a 'FOOTSHOP', disfruta la pagina")

// let category = prompt("De que categoria desea ver las zapatillas: running, sport o urbanas ");
// console.log("Zapatillas de la categoria:", category)

// const filter = zapatillas.filter(zapatillas => zapatillas.categoria === category);

// filter.forEach(element => {
//     console.log("Zapatillas:", element.nombre);
// });

const doc = document;

let zapas = document.querySelector("#zapatilla");

zapatillas.forEach(i => {
    zapas.innerHTML += `<div class="d_articulos"> <p class="p_articulos"> <p>${i.marca}</p> <p>${i.nombre}</p> <p>${i.image}</p>  </p> </div>`
});





