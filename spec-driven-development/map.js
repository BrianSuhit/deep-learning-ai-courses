// Inicializamos el mapa y definimos la vista en las coordenadas de Tandil con un zoom de 13
// Usamos el ID 'map-interactive' que definimos en el HTML
var map = L.map('map-interactive').setView([-37.3288, -59.1368], 13);

// Agregamos la capa de tiles de OpenStreetMap, que provee el fondo del mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Definición de los Puntos Limpios con sus coordenadas
const puntosLimpios = [
    {
        nombre: "Centro",
        direccion: "Av. Santamarina 460",
        coords: [-37.326123107787716, -59.1297518781356]
    },
    {
        nombre: "Norte",
        direccion: "Darragueira y Jurado",
        coords: [-37.30691363888284, -59.115659734493846]
    },
    {
        nombre: "Punto Limpio estacion Oeste",
        direccion: "Reynoso al 2030",
        coords: [-37.29455099576207, -59.15962946811658]
    },
    {
        nombre: "Villa Italia Norte",
        direccion: "Pasteur 1150",
        coords: [-37.299335389653955, -59.13543359571474]
    },
    {
        nombre: "Juan B. Justo",
        direccion: "Av. Juan B. Justo 238",
        coords: [-37.31749406960154, -59.15625831789002]
    },
    {
        nombre: "Cerro Leones ( plaza Democracia )",
        direccion: "Maderni y Lamberto",
        coords: [-37.31621262864179, -59.20370497452548]
    },
    {
        nombre: "Vela",
        direccion: "Corralón Municipal",
        coords: [-37.39917894590941, -59.506234676840876]
    },
    {
        nombre: "Gardey",
        direccion: "Corralón Municipal",
        coords: [-37.28030460387253, -59.36089373309871]
    }
];

// Añadimos los marcadores al mapa
puntosLimpios.forEach(punto => {
    L.marker(punto.coords).addTo(map)
        .bindPopup(`<b>Punto Limpio ${punto.nombre}</b><br>${punto.direccion}`);
});