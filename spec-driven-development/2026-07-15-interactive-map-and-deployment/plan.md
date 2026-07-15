# Plan de Implementación: Mapa Interactivo y Despliegue

Este plan detalla las tareas para completar la Fase 4: reemplazar el mapa estático por uno interactivo y desplegar el sitio web.

## Grupo de Tareas 1: Implementación del Mapa Interactivo

1.  **Integrar Librería:** Añadir los archivos CSS y JS de Leaflet.js al `punto-limpio.html`.
2.  **Preparar Contenedor:** Reemplazar la etiqueta `<img>` del mapa estático por un `<div>` que servirá como contenedor para el mapa interactivo (ej. `<div id="map-interactive"></div>`).
3.  **Crear Script de Mapa:** Crear un nuevo archivo `punto-limpio/map.js`.
4.  **Inicializar Mapa:** En `map.js`, escribir el código para inicializar el mapa de Leaflet en el `div` contenedor, centrándolo en Tandil.
5.  **Añadir Marcadores:** Definir las coordenadas de los 7 puntos limpios y añadir un marcador para cada uno. Configurar un pop-up para cada marcador que muestre su nombre o dirección.
6.  **Vincular Script:** Enlazar el nuevo `map.js` al final del `punto-limpio.html`.

## Grupo de Tareas 2: Pruebas y Despliegue

1.  **Pruebas Finales:** Realizar una revisión completa de la página, probando la interactividad del mapa, los enlaces y la responsividad en distintos navegadores y tamaños de pantalla.