# Requisitos: Mapa de Puntos Limpios (Versión Inicial)

## Alcance

-   **Entregable Principal:** Una imagen de mapa estática, generada a través de una API, que muestre las ubicaciones precisas de los puntos de reciclaje.
-   **Contenido:** El mapa mostrará al menos 3 puntos de reciclaje iniciales.
-   **Fuera de Alcance:** El mapa no será interactivo (sin zoom, ni pop-ups). La interacción se implementará en la Fase 4.

## Decisiones

-   **Stack Tecnológico:** Se utilizará una API de mapas estáticos para generar una imagen (`.png` o `.jpg`). La URL de esta imagen se insertará directamente en una etiqueta `<img>` en el HTML.
-   **Experiencia de Usuario:** El mapa debe ser claro y legible. Aunque es una imagen, debe parecer una parte integrada y profesional del sitio.
-   **Datos:** La URL del mapa, con las direcciones codificadas, será hardcodeada en el HTML para esta fase.

## Contexto

-   **Objetivo de la Misión:** Esta fase cumple con el objetivo clave de **"Localizar"** descrito en `specs/mission.md`, proporcionando una referencia visual precisa de dónde encontrar los puntos de reciclaje.
-   **Fase del Roadmap:** Corresponde a la **"Fase 3: Mapa de Puntos Limpios (Versión Inicial)"** del `specs/roadmap.md`.