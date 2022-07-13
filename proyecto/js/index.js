const zapatillas=[
    {
        id:1,
        marca:"Nike",
        categoria: "urbanas",
        nombre:"Air Force 1",
        precio:18.000
    },
    {
        id:2,
        marca:"Adidas",
        categoria: "urbanas",
        nombre:"All Star",
        precio:12.000
    },
    {
        id:3,
        marca:"Nike",
        categoria: "sport",
        nombre:"Revolution",
        precio:20.000
    },
    {
        id:4,
        marca:"Asics",
        categoria: "running",
        nombre:"EQ78",
        precio:19.000
    },
    {
        id:5,
        marca:"Adidas",
        categoria: "sport",
        nombre:"NMD",
        precio:18.000
    },
    {
        id:4,
        marca:"Asics",
        categoria: "running",
        nombre:"Run-T",
        precio:18.000
    },
];


let category = prompt("De que categoria desea ver las zapatillas: running, sport o urbanas ");
console.log("Zapatillas de la categoria:", category)

const filter = zapatillas.filter(zapatillas => zapatillas.categoria === category);

filter.forEach(element => {
    console.log("Zapatillas:", element.nombre);
});


