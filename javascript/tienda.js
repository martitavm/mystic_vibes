document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-group .btn');  // Todos los botones
    const allProducts = document.querySelectorAll('.card');        // Todos los productos

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenimos comportamiento por defecto de los enlaces
            const category = button.id; // Obtenemos el ID del botón clicado

            // Mostramos todos los productos si se selecciona "Todos"
            if (category === 'todos') {
                allProducts.forEach(product => {
                    product.style.display = 'block'; // Mostramos todos
                });
            } else {
                allProducts.forEach(product => {
                    // Si la categoría coincide, mostramos el producto; si no, lo ocultamos
                    if (product.getAttribute('data-category') === category) {
                        product.style.display = 'block'; // Mostrar
                    } else {
                        product.style.display = 'none'; // Ocultar
                    }
                });
            }
        });
    });
});

// Obtenemos el input de búsqueda y la lista de productos
const searchInput = document.querySelector('input[type="search"]');
const productList = document.getElementById('product-list');

// Función que filtra productos según el texto ingresado
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase(); // Convertir el texto a minúsculas para comparación
    const products = productList.getElementsByClassName('card'); // Obtener todos los productos

    // Recorremos todos los productos y mostrar solo los que coinciden con el término de búsqueda
    Array.from(products).forEach(product => {
        const productCategory = product.getAttribute('data-category'); // Obtener la categoría del producto
        const productName = product.querySelector('.card-title').textContent.toLowerCase(); // Obtener el nombre del producto

        // Verificamos si el nombre del producto o la categoría contiene el término de búsqueda
        if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
            product.style.display = ''; // Mostramos producto si coincide
        } else {
            product.style.display = 'none'; // Ocultamos producto si no coincide
        }
    });
}

// Añadimos un evento para que el filtro se ejecute al escribir
searchInput.addEventListener('input', filterProducts);

