//Arrays

/*
    Un array es una lista, puede ser de numeros
    de strings, booleans, etc.
 */

const num = [10, 20, 30, 40, 50, 60];//Siempre declarar arrays como const
//           0 |1 |2 |3 |4 |5
const pal = ["hola", "chau", "como estas?"];

const binario = [true, false, true];

const mixto = [1234, "hola", true, "chau"];

console.log(num[4]);

num[1] = 33;

console.log(num[1]);

console.log("------------------------------------------------------------------------------");

for (let i = 0; i < num.length; i++) {
    console.log("num[" + i + "] = " + num[i]);
}

//-----Agregar elementos al array

pal.push("otro elemento agregado.");//Metodo push

pal.unshift("agrega elementos al principio del array.");//Metodo unshift y desplaza el resto.

for (let j = 0; j < pal.length; j++) {
    console.log("pal[" + j + "] = " + pal[j]);
}

console.log(pal);

//------Eliminar elementos del array.

pal.pop();//Elimina el ultimo elemento.

console.log(pal);

pal.shift();//Elimina el primer elemento.

console.log(pal);

pal.splice(2, 1);//Elimina de la posicion 2, 1 elementos.
//array.splice(posicionInicial, cantidadDeElementosABorrar)


console.log(pal);

console.log(num.join("|"));

/**
 * Array de objetos.
 */

const productos = [
    {
        nombre: "Tele",
        precio: 10000,
        stock: 12
    },
    {
        nombre: "heladera",
        precio: 12000,
        stock: 10
    }
]

console.log(productos);
/*
productos.push(
    {
        nombre: "microwave",
        precio: 15000,
        stock: 5
    }
)
*/
//console.log(productos);