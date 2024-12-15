Esta es el sito web de Estetica AIRES, con diferentes secciones

Autor:    Evangelina Noemi Garcia
           

Descripción: Esta pagina cuenta con diferentes secciones, una principal index donde encontramos una barra de navegacion, un carrusell con imagenes y luego presenta las distintas seciones, incluyendo un mapa y un formulario para ingresar informacion.  
Las secciones que se abren  son:
Conocenos
Nuestros Servios
Nuestra tienda
Experiencias


Estructura de archivos básica:

o	proyecto/
o	├── index.html
o	├── secciones/
o       ├── conocenos.html
o       ├── experiencias.html
o       ├── nuestra tienda.html
o	│   ├── nuestros servicios.html
o	├── img/
o	│   ├── 
o	├── css/
o	│   ├── style.css
o   └── README.md (pueden ir los nombres de los integrantes del grupo). Comentarios de uso, etc.
Estructura básica del HTML:

<!DOCTYPE html>: Indica al navegador que estamos usando HTML5.
<html lang="es">: Especifica que el idioma del contenido es español.
<head>: Contiene información sobre el documento (metadatos).
Meta etiquetas en <head>:

<meta charset="UTF-8">: Define la codificación de caracteres para evitar problemas con caracteres especiales.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Hace que el sitio sea responsive en dispositivos móviles ajustando el ancho al del dispositivo.
Importación de fuentes y CSS:

Fuentes de Google: Importamos la fuente 'Monserrat' para usarla en el sitio.
Bootstrap CSS: Importamos Bootstrap para facilitar el diseño y hacerlo responsive.
<link rel="stylesheet" href="style.css">: Enlazamos nuestro propio archivo de estilos CSS.
Contenido del <body>:

<header>: Contiene el menú de navegación y el carrusel de imágenes.

<nav class="navbar sticky-top">: El menú de navegación que se queda fijo en la parte superior al hacer scroll.
Logo y título: Dentro de una división para organizarlos juntos.
Carrusel: Usamos el componente de carrusel de Bootstrap para mostrar imágenes de forma interactiva.

<main>: Contiene el contenido principal de la página.
Título: "Secciones destacadas".
contiente dos secciones, la primera contiene Tarjetas de productos: Usamos las clases de Bootstrap para las tarjetas.
la segunda contiene Formulario de contacto y informacion de contacto

<footer>: Contiene información de contacto .

Scripts al final del <body>:

Bootstrap JS: Necesario para que los componentes interactivos de Bootstrap funcionen.
Boxicons JS: Para mostrar los iconos en el menú.
Estilos CSS detallados:

Estilos globales: Ajustamos la fuente y eliminamos márgenes y padding predeterminados.

Menú de navegación:
Usamos flexbox para organizar los elementos.


Carrusel:
Ajustamos la altura de las imágenes y cómo se muestran para que se vean bien en diferentes tamaños de pantalla.
Tarjetas de productos:
Usamos flexbox para organizarlas y permitimos que se ajusten según el espacio disponible.

Pie de página:
Estilos para el formulario y los enlaces.


Media Queries:
Pantallas medianas (tablets):
Ajustamos el tamaño del logo y las tarjetas para que se vean mejor en pantallas más pequeñas.
Cambiamos la altura de las imágenes del carrusel.

Pantallas pequeñas (celulares):
Hacemos ajustes adicionales para asegurar que todo el contenido se vea correctamente en pantallas pequeñas.
Reducimos tamaños de fuente e imágenes para mejorar la legibilidad.

Comentarios en el código