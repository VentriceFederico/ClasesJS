const productos = JSON.parse(localStorage.getItem("productos")) || [];  //Si hay algo en el LS lo trae si no hace un array vacio.

const contenedorProductos = document.querySelector("#productos");

productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div");
tarjetaProducto.className = "producto";
tarjetaProducto.innerHTML = `
                <img src="./img/producto.png" alt="producto">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <span>${producto.precio}</span>
                <button class="btn">Carrito</button>`
                contenedorProductos.append(tarjetaProducto);
});

