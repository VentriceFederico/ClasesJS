//Iteraciones

for(let i = 0; i < 10; i++){
    console.log("Vuelta numero " + i);
    prompt();
}

//Uso de break

for (i = 0; i < 10; i++) {
    console.log("Vuelta Numero " + i);
    if(i == 7){
        console.log("Vuelta 7 voy a parar.");
        break;
    }
}

console.log("Se termino el ciclo.");


//while

let nombre = prompt("ingrese nombre.");

while(nombre != ''){
    console.log("El nombre es: " + nombre);
    nombre = prompt("ingrese nombre.");
}

// do while
i = 0;
do{
    if(i == 0){
    console.log("Este codigo se ejecuta por lo menos una vez");
    }
    if(i > 0){
        console.log("Este codigo se ejecuta por el while" + i);
    }
    i++;
}while(i <= 10);

//Switch

i = prompt("Ingrese un caso:");
i = parseInt(i);

switch(i){
    case 1:
        console.log("Caso 1");
        break;
    case 2:
        console.log("Caso 2");
        break;
    default:
        console.log("Codigo default.\n");
        break;
}
