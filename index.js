let carrito = [


]

const agregarAlcarrito = (nombre, precio)=> {

    carrito.push ({nombre,precio})
    actulizarContador()

    alert (`agregaste : ${nombre} al carrito`)
   
}

const actulizarContador = () =>{
    document.getElementById ("contador-carrito").textContent = carrito.length

}



window.addEventListener ("beforeunload",()=>{

    localStorage.setItem ("carrito",JSON.stringify(carrito))

})

