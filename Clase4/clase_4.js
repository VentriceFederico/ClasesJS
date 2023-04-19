//Funciones

// Declaracion de Funciones
/*
    function par(num_1){
        if( (num_1 % 2) == 0 ){
            return true;
        }
        return false;
    }

    let num_1;

    num_1 = parseInt(prompt("ingrese un numero para ver si es par.\n"));

    if(par(num_1)){
        alert("El numero " + num_1 + " es par.\n");
    }
    else{
        alert("El numero " + num_1 + " no es par.\n")
    }
*/

function calculadora(){
    let num_1, num_2, accion, resultado;

    num_1 = valor();

    accion = operacion();

    num_2 = valor();

    switch (accion) {
        case "+":
            resultado = num_1 + num_2;
            break;
        case "-":
            resultado = num_1 - num_2;
            break;
        case "*":
            resultado = num_1 * num_2;
            break;
        case "/":
            resultado = num_1 / num_2;
            break;
    }

    alert("El resultado es: " + resultado);
}

function valor(){
    let num;

    num = parseFloat(prompt("Ingrese un valor.\n"));

    while(num == NaN){
        alert("valor ingresado invalido.\n");
        num = parseFloat(prompt("Ingrese un valor.\n"));
    }

    return num;
}

function operacion(){
    let accion, i = true;

    accion = prompt("Ingrese la operacion a realizar: sumar (+) restar (-) multiplicar (*) dividir (/)\n");

    while(i){
        if(accion == "+"){
            i = false;
            return accion;
        }
        if(accion == "-"){
            i = false;
            return accion;
        }
        if(accion == "*"){
            i = false;
            return accion;
        }
        if(accion == "/"){
            i = false;
            return accion;
        }
        else{
            alert("Opereacion ingresada invalida.\n");
            accion = prompt("Ingrese la operacion a realizar: sumar (+) restar (-) multiplicar (*) dividir (/)\n");
        }
    }
}

let global = true;

while(global){
    calculadora();
    global = confirm("Desea continuar?\n");
}

//Diferentes formas de hacer funciones.

//----------FUNCION ANONIMA-----------//

/*

Es muy parecido a un puntero a funcion, basicamente es una variable que almacena la funcion o el inicio de intrucciones de dicha funcion

const funcionB = function (mensaje){
    return mensaje;
}

console.log(funcionB("Coder"));
console.log(funcionB("Hause"));

*/