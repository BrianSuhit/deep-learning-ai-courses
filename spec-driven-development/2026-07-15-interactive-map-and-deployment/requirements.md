# Requisitos: Mapa Interactivo y Despliegue

## Alcance

-   **Entregable Principal:** Un mapa interactivo funcional en la landing page y el despliegue del sitio completo en una URL pública.
-   **Funcionalidad del Mapa:** Los usuarios podrán hacer zoom, panear y hacer clic en los marcadores para ver información adicional (nombre/dirección).
-   **Fuera de Alcance:** No se implementará geolocalización del usuario ni búsqueda de rutas.

## Decisiones

-   **Stack Tecnológico:** Se utilizará la librería **Leaflet.js** para el mapa interactivo, en línea con la directriz de `specs/tech-stack.md` de usar JavaScript "vanilla" o librerías ligeras.
-   **Datos de Ubicación:** Las coordenadas de los puntos limpios se mantendrán hardcodeadas en el archivo JavaScript.
-   **Plataforma de Despliegue:** Se optará por una plataforma de hosting para sitios estáticos gratuita y de bajo mantenimiento, como GitHub Pages.

## Contexto

-   **Objetivo de la Misión:** Esta fase lleva el objetivo de **"Localizar"** de `specs/mission.md` a su máxima expresión, ofreciendo una herramienta verdaderamente útil y moderna. También completa el ciclo de desarrollo al poner el producto a disposición del público.
-   **Fase del Roadmap:** Corresponde a la **"Fase 4: Mapa Interactivo y Despliegue"** del `specs/roadmap.md`.