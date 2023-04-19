const personas = [
    {
        nombre:"maxi",
        dni:1
    },
    {
        nombre:"Fede",
        dni:2
    }
];

const crearPersona = () => {
    console.log("Crear Persona");
    const nombre = prompt("Ingrese Nombre:");
    const dni = parseInt(prompt("Ingrese dni:"));
    personas.push({
        nombre:nombre,
        dni:dni,
    })
    console.log(personas);
}

const actualizarPersona = () => {
    console.log("Actualizar personas");
    const dniBuscar = parseInt(prompt("Ingrese el dni de la persona a actaulizar:"));
    const index = personas.findIndex(personas => personas.dni == dniBuscar);
    console.log(index);
    const nombreNuevo = prompt("Ingrese el nombre nuevo:");
    personas[index].nombre = nombreNuevo;
}

const borrarPersona = () => {
    console.log("Borrar Persona");
}

const verPersona = () => {
    console.log("Ver Persona");
}

const inicializar = (continuar) => {

    while (continuar) {
        const accion = prompt("Ingrese accion: c:Crear\na:Actualizar\nb:borrar\nv:ver");
        switch (accion) {
            case "c":
                crearPersona();
                break;
            case "a":
                actualizarPersona();
                break;
            case "b":
                borrarPersona();
                break;
            case "v":
                verPersona();
                break;

            default:
                alert("Accion no valida");
                break;
        }
        continuar = confirm("Quiere seguir editando los datos?");
    }
}

inicializar(true);