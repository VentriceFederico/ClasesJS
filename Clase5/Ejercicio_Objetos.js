//Ejercicoo con objetos.

class Personaje_DBZ {
    constructor(name, raze, definitive, figth_lvl, health) {
        this.name = name;
        this.raze = raze;
        this.definitive = definitive;
        this.figth_lvl = figth_lvl;
        this.health = health;
    }

    use_definitive() {
        alert(this.definitive);
    }

}

function ingreso_name() {
    let name;

    name = prompt("Ingrese nombre del personaje de Dragon Ball Z");

    return name;
}

function ingreso_raza() {
    let raze = 0;

    while (raze >= 0) {

        raze = parseInt(prompt("Ingrese raza del personaje.\n1-SAIAYIN.\n2-TERRICOLA.\n3-MAJIN.\n-4NAMEKIANO.\n5-RAZA DE FREZZER.\n"));

        if(raze > 5 || raze <= 0){
            alert("raza invalida.\n");
            raze = 0;
        }
        if(isNaN(raze) == true){
           alert("raza invalida.\n");
            raze = 0; 
        }

        switch (raze) {
            case 1: //SAIAYIN
                raze = "SAIAYIN";
                break;
            case 2: //TERRICOLA
                raze = "TERRICOLA";
                break;
            case 3: //MAJIN
                raze = "MAJIN";
                break;
            case 4: //NAMEKIANO
                raze = "NAMEKIANO";
                break;
            case 5: //RAZA DE FREZZER
                raze = "RAZA DE FREZZER";
                break;
        }
    }

    return raze;
}

function main() {
    const personaje_1 = new Personaje_DBZ(ingreso_name(),ingreso_raza(),"KAMEHAMEHA",8000,5000);

    console.log(personaje_1);

    personaje_1.use_definitive();


}

main();