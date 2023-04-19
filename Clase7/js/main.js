//Funciones de orden superior


/*
const mayorQue = (numero) => {
    return (m) =>  m > numero;
}

console.log(mayorQue(10));
*/

//Completar...

//  Mas Metodos.

/**
 * Metodos de busqueda y transfromacion
 * 
 *      forEach() ->    Itera sobre el array y por cada elemento ejecuta la funcion que enviemos
 *      find()    ->
 *      filter()  ->
 *      some()    ->
 *      map()     ->
 *      reduce()  ->
 *      sort()    ->
 */

//-----------forEach()----------//

const mangas = [
    {
        nombre:"Tomo 10",
        precio:1800,
        duracion:4
    },
    {
        nombre:"Tomo 11",
        precio:500,
        duracion:5
    },
    {
        nombre:"Tomo 12",
        precio:2300,
        duracion:6
    }
];

mangas.forEach((num_fn) => { //Funcion anonima.
    console.log(num_fn.nombre);
});

//----------find()----------//

const curso_buscado = mangas.find( (el) => {
    return el.nombre == "Tomo 10";
} )

console.log(curso_buscado);

//-------------filter()-----------//

const precioMenor2500 = mangas.filter( (el) => {
    return el.precio < 2500;
})

console.log(precioMenor2500);

//----------some()-----------//

const existe = mangas.some( (el) => {
    return el.nombre == "Tomo 11";
})

console.log(existe);

//-----------map()-----------//

const tomos = mangas.map( (el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.20,
        duracion: el.duracion
    }
} )

console.log(tomos);

//-----------reduce()-----------//

const total = mangas.reduce( (acc,el) => acc + el.precio, 0)

console.log(total);

//------------sort()------------//

mangas.sort((a,b) => a.nombre - b.nombre);

console.log(mangas);
