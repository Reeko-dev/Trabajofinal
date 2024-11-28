let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let productosCarrito = document.getElementById('productos-carrito');
let contadorCarrito = document.getElementById('contador-carrito');

function actualizarCarrito() {
    productosCarrito.innerHTML = ''; 
    contadorCarrito.innerHTML = `Productos en el carrito: ${carrito.length}`; 

    if (carrito.length === 0) {
        productosCarrito.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        carrito.forEach((producto, index) => {
            productosCarrito.innerHTML += `
                <article class="articulo">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <img src="${producto.imagen}" alt="${producto.nombre}" style="width:120px;height:120px;">
                    <button class="elim" onclick="eliminarProducto(${index})">Eliminar</button>
                </article>
            `;
        });
    }
}

function eliminarProducto(index) {
    carrito.splice(index, 1); 
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito(); 
}

function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    actualizarCarrito(); 
}

document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

actualizarCarrito();