//Objetos

/* 
    Es una forma de que datos esten realcionados entre si.

    en vez de declarar varias variables para referirse a ciertas caracteristicas puedo crear un objeto que almacene a todas esas caracteristicas.
*/

//Objeto literal
/*
const persona1 = {  
                    nombre:"Federico",
                    edad:"22",
                    direccion:"Belfast 2775"
                }

const persona2 = {  
                    nombre:"Evelyn",
                    edad:"24",
                    direccion:"Viamonte 2712"
                }

console.log(persona1.nombre);
console.log(persona2.nombre);

//Objeto Constructor

//Funcion Constructor

function Persona_function(nombre, apellido, edad, direccion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.direccion = direccion;
}

const persona3 = new Persona("federico","Ventrice", "22", "Belfast 2775");
*/


//Otra forma y la mas nueva de hacer una clase o objeto
class Persona{
    constructor (nombre, apellido, edad, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
    }

    //Metodos

    data(){
        console.log("Esta es la informacion:\n-Nombre: " + this.nombre + "\n-Apellido: " + this.apellido + "\n-Edad: " + this.edad + "\n-Direccion: " + this.direccion);
    }
}

const Federico = new Persona("Federico","Ventrice",22,"Psj. belfast 2775");

Federico.data();