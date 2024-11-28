const productos = [
    { nombre: 'Ropa Deportiva Unisex', precio: 80000, categoria: 'ropa', imagen: '../assets/imagen/coleccion-ropa-deportiva-vector-iconos-cuadrados_18591-19997.avif' },
    { nombre: 'Ropa Deportiva para Mujer', precio: 90000, categoria: 'ropa', imagen: '../assets/imagen/conjunto-coleccion-ropa-deportiva-fitness-out-fit-vista-frontal-posterior_195527-326.avif' },
    { nombre: 'Shorts Deportivos', precio: 40000, categoria: 'ropa', imagen: '../assets/imagen/images.jfif' },
    { nombre: 'Zapatos Deportivos', precio: 100000, categoria: 'calzado', imagen: '../assets/imagen/Men-Size-Air-Cushion-Fashion-Sneakers-Brand-Sports-Shoes-Gym-Running-Shoes.avif' },
    { nombre: 'Camisa para Ciclismo', precio: 60000, categoria: 'ropa', imagen: '../assets/imagen/gratis-png-ropa-deportiva-camiseta-ropa-deportiva-thumbnail.png' }
];

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} ha sido añadido al carrito.`);
}

const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('closeSidebar');

toggleSidebar.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

closeSidebar.addEventListener('click', function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

function mostrarProductos(productosFiltrados) {
    const resultsDiv = document.getElementById('productosSection');
    resultsDiv.innerHTML = ''; // Limpiar resultados previos

    if (productosFiltrados.length === 0) {
        resultsDiv.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

    productosFiltrados.forEach(producto => {
        const article = document.createElement('article');
        article.className = 'producto';
        article.innerHTML = `
            <img width="300" src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toLocaleString()}</p>
            <button onclick="agregarAlCarrito({ nombre: '${producto.nombre}', precio: ${producto.precio}, imagen: '${producto.imagen}' })">Añadir al carrito</button>
        `;
        resultsDiv.appendChild(article);
    });
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const categoriaSeleccionada = document.getElementById('category').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;

    const productosFiltrados = productos.filter(producto => {
        const dentroDelRangoDePrecio = producto.precio >= minPrice && producto.precio <= maxPrice;
        const categoriaValida = categoriaSeleccionada === 'todos' || producto.categoria === categoriaSeleccionada;
        return dentroDelRangoDePrecio && categoriaValida;
    });

    mostrarProductos(productosFiltrados);
});

mostrarProductos(productos);
