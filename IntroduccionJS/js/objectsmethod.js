"use strict";
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: "200",
    disponibilidad: true,
    categoria: "Monitores",
};

//los objetos por defecto si se pueden modificar a pesar de que sea const

//Object.freeze(producto);
//con freeze no se puede agregar ni eliminar propiedades
//con freeze tampoco se puede cambiar valores

console.log(Object.isFrozen(producto));

Object.seal(producto);
producto.precio = 400;
console.log(producto.precio);
