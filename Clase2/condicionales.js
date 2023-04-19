//Condicional if
const NACIMIENTO = 2001;
let variableBooleana = true;

if(NACIMIENTO > 2000){
    console.log("Chupala Puto")
}

let nombre = prompt("Ingrese nombre:");
let edad = prompt("Ingrese edad:");

if(nombre == "fede"){
    console.log("Tu nombre es fede.");
}
else{
    console.log("Tu nombre es: " + nombre);
}
if(edad >= 18){
    console.log("Sos mayor de edad.");
}
else{
    console.log("Sos menor de edad.")
}

let precio = "50";

if (precio < 20) {
    alert("El precio es menor que 20");
}
else if(precio === 50){ //El '===' toma solo valor numerico no valor tipo string
                        //Basicamente estrictamente igual.
                        //Mismo tipo de dato y valor.
    console.log("El precio es 50");
}  
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}
