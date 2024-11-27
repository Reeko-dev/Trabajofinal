const products = [
    { id: 1, name: 'Producto 1', price: 10, image: 'spidey' },
    { id: 2, name: 'Producto 2', price: 20, image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Producto 3', price: 30, image: 'https://via.placeholder.com/50' },
];

let cart = [];

// Función para mostrar el listado de productos
function showProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '<h2>Productos Disponibles</h2>';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <strong>${product.name}</strong> - $${product.price}
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && !cart.some(item => item.id === productId)) {
        cart.push(product);
        showCart();
    } else {
        alert('Este producto ya está en el carrito.');
    }
}

// Función para mostrar el carrito
function showCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '<h2>Carrito</h2>';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <strong>${item.name}</strong> - $${item.price}
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
    const totalDiv = document.createElement('div')};