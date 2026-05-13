
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: "200",
    disponibilidad: true,
    categoria: "Monitores",
};

//Forma anterior
const precioProducto = producto.precio;
console.log(precioProducto);


/*
const precioProducto = producto.precio;
const nombreProducto = nombre.producto;
const disponibilidadProducto = disponibilidad;
const categoriaProducto = producto.categoria;
console.log(precioProducto);*/

//Forma nueva - destructuring
const {nombreProducto, precio, disponibilidad, categoria} = producto;
//debe tener el mismo nombre que la propiedad
console.log(disponibilidad);
console.log(precio);