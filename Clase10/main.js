/**
 * Opcion 1
 */

const evento1 = document.querySelector("#evento1");

const funcionEvento1 = () => {
    console.log("Evento 1");
}
//*************************************************** */
/**
 * Opcion 2
 */
evento1.addEventListener("click",funcionEvento1);

const evento2 = document.querySelector("#evento2");

evento2.onclick = () => {
    console.log("Evento 2");
}

//**************************************************** */

/**
 * Eventos mas comunes:
 *      -mouse
 *      -teclado
 *      -change
 *      -input
 *      -submit
 *      -otrs...
 */

//**************************************************** */

const eventoInput = document.querySelector("#eventoinput");

eventoInput.addEventListener("change",(f) => {
    console.log(f.target.value);
})

const eventoInput2 = document.querySelector("#eventoinput2");

eventoInput2.addEventListener("input",(f) => {
    console.log(f.target.value);
})