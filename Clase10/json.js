
    //JSON

/**\
 * Resumen:

Tengo un objeto. Lo quiero guardar en local o session, hago JSON.stringify para guardarlo

Quiero traer un objeto de local o session, hago JSON.parse para transformarlo en objeto después de traerlo

 */

const producto1 = {
    id: 2,
    producto: "Arroz"
};
//localStorage.setItem("producto1", producto1);   //Se va a guardar [object Object]

const enJSON = JSON.stringify(producto1);   //Lo jeisoniamos

console.log(enJSON);
console.log(typeof producto1);
console.log(typeof enJSON);

localStorage.setItem("producto1", enJ)