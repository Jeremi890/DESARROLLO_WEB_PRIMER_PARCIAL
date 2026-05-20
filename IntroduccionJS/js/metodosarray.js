const numeros = [1, 2, 3, 4, 5];
console.table (numeros);

const meses = new Array ("Enero", "Febrero", "Marzo");
console.table(meses);

//añadir elemento a un arregglo
//no recomendado
numeros[6] = 60;
numero[2] = 10;

//no recomendada con push
numeros.push(30); //agregar al final del arreglo
numeros.push(30, 50, 12);
//no recomendada con unshift
numeros.unshift(20, 10, -2);//agregar al inicio del arreglo
//elin¿minar elemento del arreglo
numeros.pop();//eliminar el último elemento del arreglo
numeros.shift();//Eliminar el primer elemento del arreglo
numeros.splice(1, 3);
//rest operator o spread operator
const nuevosNumeros = [1000, ...numeros ];//buena practia ya que no modifica el arreglo original
console.table(numeros);
console.table(nuevosNumeros);
