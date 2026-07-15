# Plan de Implementación: Mapa de Puntos Limpios (Versión Inicial)

Este plan detalla las tareas para completar la Fase 3 del roadmap, utilizando un servicio de mapas para generar una imagen estática precisa.

## Grupo de Tareas 1: Generación del Mapa Estático

1.  **Recopilar Direcciones:** Listar las direcciones exactas de los Puntos Limpios que se mostrarán.
2.  **Elegir Servicio de Mapas:** Seleccionar un servicio que ofrezca una API de mapas estáticos (ej. OpenStreetMap, Google Maps Static API).
3.  **Construir URL de la Imagen:** Crear la URL para la API del mapa, especificando el centro del mapa (Tandil), el nivel de zoom, el tamaño de la imagen y las ubicaciones de los marcadores usando las direcciones recopiladas.

## Grupo de Tareas 2: Implementación en la Página

1.  **Estructura HTML:** En `punto-limpio.html`, dentro de la sección `<section id="mapa">`, reemplazar el texto de marcador de posición con una etiqueta `<img>`.
2.  **Integrar Imagen:** Asignar la URL generada en el paso anterior al atributo `src` de la etiqueta `<img>`.
3.  **Estilo CSS y Responsividad:** Añadir estilos para que la imagen del mapa sea responsiva (`max-width: 100%`) y se integre visualmente con el resto de la página.