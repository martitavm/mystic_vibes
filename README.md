# Mystic Vibes

¡Descubre Mystic Vibes y sumérgete en un mundo lleno de misterio y sabiduría ancestral! Nuestra página está diseñada para aquellos que desean explorar el fascinante universo del esoterismo de manera sencilla, intuitiva y divertida. En Mystic Vibes te ofrecemos una experiencia única con herramientas y recursos que te ayudarán a conectar con tu ser interior y a descubrir lo que el destino tiene preparado para ti.

## ¿Qué encontrarás en nuestra página?

- ✨ **Calculadora de Carta Astral y Horóscopo**: Conoce tu Carta astral y recibe recomendaciones personalizadas para cada etapa de tu vida según las estrellas.
- 💖 **Compatibilidad entre Signos del Zodíaco**: Descubre qué tan compatible eres con esa persona especial, basada en las energías cósmicas de tu signo.
- 🔮 **Tirada Rápida de Tarot – Sí o No**: Responde a tus dudas más inmediatas con una tirada de tarot que te guiará con claridad y precisión.
- 🔢 **Calculadora de Numerología**: Encuentra el significado oculto en los números de tu vida y desbloquea las energías que te rodean.
- 📚 **Cursos Esotéricos**: Aprende sobre el fascinante mundo de la astrología, el tarot, la numerología y mucho más con nuestros cursos diseñados para todos los niveles.
- 🛍️ **Tienda Esotérica**: Encuentra productos exclusivos, desde amuletos hasta libros y accesorios que te acompañarán en tu camino espiritual.

En Mystic Vibes, cada herramienta y módulo ha sido creado para que tu experiencia sea única, fascinante y accesible. Ya seas un principiante o un experto en el mundo del esoterismo, aquí encontrarás todo lo que necesitas para profundizar en tu práctica y expandir tus conocimientos. ¡Ven y comienza tu viaje hacia el autoconocimiento hoy mismo!

---

## Marta: Formulario para calcular la carta astral

- **Desarrollar lógica para calcular la Carta Astral** al introducir Fecha de Nacimiento y Hora de Nacimiento.
- **Mostrar el resultado de la Carta Astral**.
- El formulario utiliza **JavaScript** para manejar la interacción del usuario. La función `calcularHoroscopo()` se activa al hacer clic en el botón de cálculo, obteniendo los valores puestos en los campos de fecha y hora de nacimiento mediante el DOM (`document.getElementById`). Se emplean funciones flecha para estructurar el código de forma más clara. Además, el resultado se muestra dinámicamente en la página manipulando el contenido del elemento con `innerHTML`.

---

## Tienda

- **Mostrar productos de la tienda**.
- **Filtrar productos** tanto por barra de búsqueda como con una barra de navegación con todos los tipos de producto.
- El código en **JavaScript** utiliza el evento `DOMContentLoaded` para asegurarse de que la página esté completamente cargada antes de ejecutar el script. Se manejan eventos de clic en los botones de filtrado mediante `addEventListener`, permitiendo mostrar u ocultar productos según su categoría usando `getAttribute` y manipulando el estilo con `style.display`.
- Además, se implementa un filtro de búsqueda con un campo de entrada (`input[type="search"]`) que usa `addEventListener` en el evento `input` para filtrar los productos en tiempo real. La búsqueda se realiza convirtiendo los valores a minúsculas y comparándolos con los nombres y categorías de los productos.

---

## Detalles de producto (con implementación del carrito de compra)

- **Mostrar cada detalle de producto** según a qué producto se acceda en la página web de Tienda.
- **Desarrollar la funcionalidad del carrito de compras**, que permita agregar productos a este.

---

## Ale: Herramientas utilizadas

- **JavaScript**: Lenguaje de programación utilizado para agregar interactividad a la web.
- **DOM (Document Object Model)**: Se usa para manipular elementos HTML mediante `document.getElementById()` y `document.addEventListener()`.
- **Eventos**: Se ha utilizado `DOMContentLoaded` para ejecutar el código sólo cuando la página ha cargado, y `click` para detectar cuando el usuario pulsa el botón click.
- **Manipulación de cadenas y números**: Se usan métodos como `replaceAll()`, `includes()`, y `Number()` para procesar y transformar los datos.
- **Estructuras de control**: Uso de `while` para iterar hasta obtener un número válido según las reglas establecidas.
- **Objetos en JavaScript**: Se utiliza un objeto `descripciones` para almacenar las interpretaciones de cada número.

---

## Compatibilidad zodiacal (genera un % de compatibilidad)

- **Desarrollar la lógica para calcular el porcentaje de compatibilidad** basado en los signos zodiacales.
- **Crear la interfaz para mostrar los resultados** de forma clara.

### Funciones:

- `document.addEventListener("DOMContentLoaded", function () {...})`: Espera a que el documento esté completamente cargado antes de añadir un click al botón de comprobar. Esto garantiza que los elementos HTML ya están disponibles antes de acceder a ellos.
- `compatibilidad()`: 
  - Obtiene los valores de los signos seleccionados en los inputs.
  - Busca la compatibilidad entre los signos en el objeto `compatibilidades`.
  - Asigna un porcentaje de compatibilidad basado en los signos seleccionados.
  - Determina la categoría de compatibilidad (muy alta, alta, etc.).
  - Busca la descripción correspondiente en el objeto `descripciones`.
  - Muestra el resultado en un `div` dentro de la página.
- `capitalizar(str)`: Convierte la primera letra de un string en mayúscula y devuelve el resultado. Se usa para mostrar los signos zodiacales con la primera letra en mayúscula.

---

## Numerología (Formulario para calcular tu número)

- **Desarrollar el formulario para calcular el número numerológico**.
- **Implementar la lógica para determinar el número** a partir de la fecha de nacimiento.

### Funciones:

- `document.addEventListener("DOMContentLoaded", function () {...})`: Espera a que el documento esté completamente cargado antes de añadir un click al botón de comprobar. Garantiza que los elementos HTML existen antes de manipularlos.
- `calcular_numero()`:
  - Obtiene la fecha introducida en el input.
  - Convierte la fecha en un número sin guiones mediante `obtener_num_fecha()`.
  - Suma los dígitos del número con `sumar_numeros()`.
  - Si el resultado es mayor o igual a 10, se sigue sumando hasta obtener un número de un solo dígito (salvo si es un número maestro: 11, 22 o 33).
  - Muestra el resultado en el `div` correspondiente con su descripción.
- `obtener_num_fecha()`: Obtiene el valor del campo de fecha (`input type="date"`). Reemplaza los guiones `-` de la fecha para obtener solo los números.
- `sumar_numeros(numeros)`: Convierte el número en una cadena (`String(numeros)`). Recorre cada dígito y lo suma al total. Retorna la suma de todos los dígitos.

---

## Página de cursos (aprendizajes sobre tarot, fases lunares, etc.)

- **Crear las páginas donde se mostrarán los cursos**.
- **Implementar la lógica para mostrar el contenido del curso**.

---

## Ana: Tirada de Sí o No (3 cartas)

- **Desarrollar la funcionalidad (crear el código) de la tirada de cartas** (generar 3 cartas aleatorias, mostrar una respuesta).
- **Crear la interfaz para visualizar las cartas y la interpretación del resultado**.

### Funciones principales:

- `DOMContentLoaded`: Usamos este evento para asegurarnos de que el contenido del DOM esté completamente cargado antes de ejecutar el código.
- `addEventListener("click")`: Para detectar cuando el usuario hace clic en el botón de "obtener respuesta", activamos la tirada de cartas.
- `trim()`: Eliminamos los espacios innecesarios de la pregunta antes de procesarla.
- `Math.random()` y `.sort()`: Combinamos la función de barajar el mazo con un algoritmo aleatorio para seleccionar las cartas sin repetirse.

### Funciones de DOM:

- `document.getElementById()`: Capturamos los elementos de la página como el botón, las imágenes de las cartas y el campo de texto para la pregunta.
- `style.display`: Modificamos el estilo de las cartas para que se muestren u oculten dependiendo de la tirada.
- `textContent`: Usamos para mostrar la respuesta final de la tirada ("Sí", "No" o "Incierta").
- `filter()`: Usamos este método para contar cuántas cartas seleccionadas corresponden a la categoría de "Sí" o "No", y así determinar la respuesta final.

### Ejemplo de funciones creadas:

- `obtenerCartasUnicas(mazo, cantidad)`: Se encarga de barajar las cartas aleatoriamente y devolver un número específico de cartas sin repetir.

---

## Login/Logout

- **Implementar la funcionalidad de autenticación de usuarios**: inicio de sesión y cierre de sesión.
- **Conectar el sistema de login** para que cuando un usuario inicie sesión, su nombre de usuario aparezca en la pestaña de usuario del navegador.

### Funciones principales:

- `addEventListener("submit")`: Usamos el evento de envío para interceptar el envío del formulario de inicio de sesión y evitar que recargue la página.
- `preventDefault()`: Para prevenir la acción predeterminada del formulario y manejar el inicio de sesión de manera controlada.
- `localStorage.setItem()` y `localStorage.getItem()`: Almacenamos el nombre del usuario en el almacenamiento local (localStorage) para que el nombre aparezca cuando se recargue la página.
- `setTimeout()`: Para simular una redirección después de un pequeño retardo, tras un inicio de sesión exitoso.
- **Condicionales**: Se usan para verificar las credenciales de usuario y mostrar una alerta de éxito o error.
- `localStorage.getItem()`: Verificamos si el usuario está autenticado y almacenamos el nombre del usuario en la interfaz.
- `textContent`: Para actualizar el nombre de usuario en el menú de navegación.
- `addEventListener("click")`: Detectamos el clic en el botón "Cerrar sesión" para eliminar al usuario de localStorage y actualizar la interfaz.
- `classList.add()` y `classList.remove()`: Usamos estas funciones para mostrar y ocultar las opciones de "Iniciar sesión" y "Cerrar sesión" según el estado del usuario.

---

## Registro de usuario

- **Desarrollar el formulario de registro y la lógica para crear un nuevo usuario**.
- **Implementar validación de datos**.

### Funciones principales:

- `addEventListener("submit")`: Usamos este evento para manejar el envío del formulario de registro, evitando el comportamiento por defecto.
- `trim()`: Para limpiar los campos del formulario eliminando espacios en blanco innecesarios.
- `mostrarAlerta()`: Función que muestra alertas de éxito o error, utilizando la propiedad `style.display` para mostrar y ocultar la caja de alerta, y `className` para cambiar el estilo de la alerta.
- `validarCorreo()`: Validación del correo electrónico con una expresión regular.
- `setTimeout()`: Después de un registro exitoso, limpia los campos y oculta la alerta después de 3 segundos.

### Funciones creadas:

- `validarCorreo(correo)`: Utiliza una expresión regular para validar si el correo ingresado tiene el formato adecuado.
- `mostrarAlerta(mensaje, tipo)`: Muestra una alerta con el tipo de mensaje (éxito o error) y el contenido proporcionado.

Para este proyecto hemos utilizado **JavaScript (DOM, eventos, funciones flecha, etc)**, **Bootstrap** y **CSS**.