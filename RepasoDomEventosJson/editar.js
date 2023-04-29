class Producto{
    constructor(nombre, descripcion, precio){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
        this.enviogratis = false;
    }
    envioGratis(precioEnvio){
        this.precio = this.precio + precioEnvio;
        this.enviogratis = true;
    }
}

const productos = JSON.parse(localStorage.getItem("productos")) || [];  //Si hay algo en el LS lo trae si no hace un array vacio.

const crearProducto = () => {
    const formularioCrear = document.querySelector("#crearProducto");
    formularioCrear.addEventListener("submit",(e) =>{
        e.preventDefault();
        const datos = e.target.children;
        const producto = new Producto(datos["nombre"].value,datos["descripcion"].value,datos["precio"].value);
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));
        formularioCrear.reset();
    })
}

crearProducto();