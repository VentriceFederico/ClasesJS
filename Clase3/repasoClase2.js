//Calculadora

let valor1;
let valor2;

valor1 = prompt("Ingrese primer valor");
const operacion = prompt("Colocar operacion: '+' '-' '*' '/' ");
valor2 = prompt("Ingrese segundo valor");

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);

if(operacion === '+'){
    console.log(valor1 + valor2);
}
else if(operacion === '-'){
    console.log(valor1 - valor2);
}
else if(operacion === '*'){
    console.log(valor1 * valor2);
}
else if(operacion === '/'){
    console.log(valor1 / valor2);
}
else{
    alert("Operacion invalida.")
}
