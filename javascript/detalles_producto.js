// Definimos nuestra base de datos de productos
const productos = {
    "tarot_marsella": {
        "titulo": "Tarot de Marsella", // Título del producto
        "descripcion": "Un tarot tradicional con cartas llenas de sabiduría.", // Descripción del producto
        "precio": "$25.00", // Precio del producto
        "imagen": "https://www.hipermaterial.es/_imagenes_multi/juegos-y-regalos/baraja-fournier-tarot-espanol-78-10023386-imagen-00587-2-g.jpg" // Imagen del producto
    },
    "tarot_egipcio": {
        "titulo": "Tarot Egipcio", // Título del producto
        "descripcion": "Descubre los secretos del antiguo Egipto con este tarot.", // Descripción del producto
        "precio": "$28.00", // Precio del producto
        "imagen": "https://ae01.alicdn.com/kf/Se3886ff8c13d4359a1a1ae614c7f9fa7d.png" // Imagen del producto
    },
    "amatista": {
        "titulo": "Amatista", // Título del producto
        "descripcion": "Piedra de energía positiva y equilibrio.", // Descripción del producto
        "precio": "$30.00", // Precio del producto
        "imagen": "https://vivescortadaimport.com/diccionario-minerales/minerales/amatista/amatista.jpg" // Imagen del producto
    }
};

// Variable global para almacenar el carrito
let carrito = [];

// Función que cargamos para mostrar los detalles del producto
function cargarProducto() {
    // Obtenemos el parámetro 'producto' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productoID = urlParams.get('producto');

    // Comprobamos si el producto existe en nuestra base de datos
    if (productoID && productos[productoID]) {
        const producto = productos[productoID]; // Obtenemos el producto

        // Actualizamos los elementos del HTML con la información del producto
        document.getElementById("titulo").innerText = producto.titulo;
        document.getElementById("descripcion").innerText = producto.descripcion;
        document.getElementById("precio").innerText = producto.precio;
        document.getElementById("imagen").src = producto.imagen;
    } else {
        // Si el producto no se encuentra, mostramos un mensaje de error
        document.getElementById("titulo").innerText = "Producto no encontrado";
        document.getElementById("descripcion").innerText = "";
        document.getElementById("precio").innerText = "";
        document.getElementById("imagen").style.display = "none";
    }

    // Actualizamos el carrito de compras
    actualizarCarrito();
}

// Función para aumentar la cantidad del producto
function incrementarCantidad() {
    let quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1; // Incrementamos la cantidad
}

// Función para disminuir la cantidad del producto, asegurándonos de que no sea menor que 1
function disminuirCantidad() {
    let quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1; // Decrementamos la cantidad
    }
}

// Función para añadir el producto al carrito
function addToCarrito() {
    // Obtenemos el ID del producto desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productoID = urlParams.get('producto');
    let quantity = parseInt(document.getElementById('quantity').value); // Obtenemos la cantidad seleccionada

    // Verificamos si el producto existe en nuestra base de datos
    if (!productoID || !productos[productoID]) return;

    // Buscamos si el producto ya está en el carrito
    let productoEnCarrito = carrito.find(item => item.id === productoID);

    // Si el producto ya está en el carrito, sumamos la cantidad seleccionada
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += quantity;
    } else {
        // Si no está, lo añadimos con la cantidad seleccionada
        carrito.push({ id: productoID, cantidad: quantity });
    }

    // Actualizamos el carrito en la interfaz
    actualizarCarrito();

    // Mostramos un mensaje al usuario
    alert(`Se han añadido ${quantity} unidades de ${productos[productoID].titulo} al carrito.`);
}

// Función para actualizar el contador del carrito
function actualizarCarrito() {
    // Calculamos la cantidad total de productos en el carrito
    let totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    // Actualizamos el contador del carrito en la interfaz
    document.getElementById('cart-count').innerText = totalCantidad;
}

// Ejecutamos la función para cargar el producto cuando la página se carga
window.onload = cargarProducto;
