  // Base de datos de productos
  const productos = {
    "tarot_marsella": {
        "titulo": "Tarot de Marsella",
        "descripcion": "Un tarot tradicional con cartas llenas de sabiduría.",
        "precio": "$25.00",
        "imagen": "https://www.hipermaterial.es/_imagenes_multi/juegos-y-regalos/baraja-fournier-tarot-espanol-78-10023386-imagen-00587-2-g.jpg"
    },
    "tarot_egipcio": {
        "titulo": "Tarot Egipcio",
        "descripcion": "Descubre los secretos del antiguo Egipto con este tarot.",
        "precio": "$28.00",
        "imagen": "https://ae01.alicdn.com/kf/Se3886ff8c13d4359a1a1ae614c7f9fa7d.png"
    },
    "amatista": {
        "titulo": "Amatista",
        "descripcion": "Piedra de energía positiva y equilibrio.",
        "precio": "$30.00",
        "imagen": "https://vivescortadaimport.com/diccionario-minerales/minerales/amatista/amatista.jpg"
    }
};

function cargarProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const productoID = urlParams.get('producto');

    if (productoID && productos[productoID]) {
        const producto = productos[productoID];

        document.getElementById("titulo").innerText = producto.titulo;
        document.getElementById("descripcion").innerText = producto.descripcion;
        document.getElementById("precio").innerText = producto.precio;
        document.getElementById("imagen").src = producto.imagen;
    } else {
        document.getElementById("titulo").innerText = "Producto no encontrado";
        document.getElementById("descripcion").innerText = "";
        document.getElementById("precio").innerText = "";
        document.getElementById("imagen").style.display = "none";
    }

    actualizarCarrito();
}

function increaseQuantity() {
    let quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}

function decreaseQuantity() {
    let quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}

function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const productoID = urlParams.get('producto');
    let quantity = parseInt(document.getElementById('quantity').value);

    if (!productoID || !productos[productoID]) return;

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let productoEnCarrito = carrito.find(item => item.id === productoID);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += quantity;
    } else {
        carrito.push({ id: productoID, cantidad: quantity });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();

    alert(`Se añadieron ${quantity} unidades de ${productos[productoID].titulo} al carrito.`);
}

function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById('cart-count').innerText = totalCantidad;
}

window.onload = cargarProducto;