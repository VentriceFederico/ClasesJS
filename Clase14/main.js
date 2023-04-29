//Uso de librerias en JS.



const comprarProducto = document.querySelector("#comprarProducto");
comprarProducto.addEventListener("click",() =>{
    Swal.fire({
    title: "Compra Realizada",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dignissim massa. Suspendisse interdum ut ex a ultrices. Vestibulum id interdum ante..",
    icon: "success",
    confirmButtonText:"Sos mas probre..."
})
})