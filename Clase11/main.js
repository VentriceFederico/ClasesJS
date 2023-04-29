
//Guardar datos en el local storage.
localStorage.setItem("numero", 123);
localStorage.setItem("texto", "HOLA MUNDO");
localStorage.setItem("booleano", true);

//Leer datos del local storage
//Los valores que retorna .getItem son todos strings. Ojo cuando quiero hacer cuentas matematicas.
const valor_1 = localStorage.getItem("numero");

console.log(typeof(valor_1) );

//Booleano

const valor_3 = (localStorage.getItem("booleano") === "true");    //Uso una compracaion si es true en string le asigno true pero de tipo booleano, no tipo string.

console.log(valor_3);

/**
 * 
 * Resumen:

localStorage.setItem("nombre", "valor")

localStorage.getItem("nombre") y devuelve "valor" como string

 * 
 */


//Array.

localStorage.setItem("array",[12,4332,123,5345,12323]);

const array = localStorage.getItem("array").split("-")
console.log(typeof(array));
console.log(array);

//Session Storage

/**
 * Se almacenan los datos solamente cuando esta el session la pagina, la diferencia entre el local es que el local mantiene los datos aunque cierre la pagina.
 */



