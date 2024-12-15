const carrito = JSON.parse (localStorage.getItem("carrito")) || [];

const mostrarCarrito = ()=>{
    const lista = document.getElementById ("lista-carrito")
    lista.innerHTML = "";
    if (carrito.length===0){
        lista.innerHTML = '<p> Tu Carrito esta vacio</p>'
        return;
    }    
    carrito.forEach ((item,indice)=>{
        const producto = document.createElement ("article")
        producto.classList.add ("producto")
        producto.innerHTML= `
        <h2>${item.nombre}</h2>
        <p class= "precio">$${item.precio}<p/>
        <button onclick="EliminarDelCarrito(${indice})">Eliminar</button>
        `;
        lista.appendChild (producto)

    })



}
const EliminarDelCarrito =(indice)=>{
    carrito.splice (indice,1);
    localStorage.setItem ("carrito",JSON.stringify(carrito))
    mostrarCarrito();


}
/* const total= item.length(precio)
    producto.innerHTML= `<p "total">$${total}<p/>` */

const realizarCompra =()=>{
    alert ("Compra realizada con exito")
    localStorage.removeItem ("carrito")
    window.location.href="nuestra tienda.html"
}

mostrarCarrito ()

