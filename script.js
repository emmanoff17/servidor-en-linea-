let map;
let marker;

function initMap() {
    // Coordenadas iniciales (pueden ser las de tu ubicación actual)
    const initialPosition = { lat: -34.397, lng: 150.644 };

    // Crear el mapa
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: initialPosition
    });

    // Crear un marcador
    marker = new google.maps.Marker({
        position: initialPosition,
        map: map,
        title: 'Ubicación GPS 303F'
    });

    // Actualizar la ubicación cada 5 segundos
    setInterval(updateLocation, 5000);
}

function updateLocation() {
    // Aquí debes obtener la ubicación actual del GPS 303F
    // Puedes hacer una solicitud a un servidor que te devuelva las coordenadas
    fetch('https://tuservidor.com/ubicacion')
        .then(response => response.json())
        .then(data => {
            const newPosition = { lat: data.lat, lng: data.lng };
            marker.setPosition(newPosition);
            map.setCenter(newPosition);
        })
        .catch(error => console.error('Error al obtener la ubicación:', error));
}

window.initMap = initMap;