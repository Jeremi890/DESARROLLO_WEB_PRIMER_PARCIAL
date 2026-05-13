//arreglo plano cada uno de sus indices hay un objeto
const meses = new Array ("Enero", "Febrero", "Marzo");

//arreglo de objetos - diferentes arreglos por cada objeto
const carrito = [
    {nombre: "Monitor", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Mouse", precio: 500},
];
//foreach para recorre
meses.forEach(function(mes){
    console.log(mes);
});
//foreach para buscar elementos
meses.forEach(function(mes){
    if (mes == "febrero"){
        console.log("SI EXISTE FEBRERO");
    }
});
//INCLUDES PARA BUSCAR ARREGLOS PLANOS
let resultado = meses.includes("Marzo");
console.log(resultdo);

//some ideal para buscar en arreglos de objetos
resultado = carrito.some(function (producto){
    return producto.nombre === "celular";
})
console.log(resultado);