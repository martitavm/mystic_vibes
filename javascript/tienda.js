document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-group .btn');  // Todos los botones
    const allProducts = document.querySelectorAll('.card');        // Todos los productos

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir comportamiento por defecto de los enlaces
            const category = button.id; // Obtener el ID del botón clicado

            // Mostrar todos los productos si se selecciona "Todos"
            if (category === 'todos') {
                allProducts.forEach(product => {
                    product.style.display = 'block'; // Mostrar todos
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
