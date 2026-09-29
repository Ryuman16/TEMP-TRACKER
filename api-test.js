const claveApi = '3037ed2e73aa4f0bb99170825261509';
const idioma = 'es';

async function obtenerClima() {
    const inpCiudad = document.getElementById('input-ciudad');

    if (!inpCiudad) {
        console.error("No se encontró el elemento con id 'input-ciudad' en el DOM");
        return;
    }

    const ciudad = inpCiudad.value;

    if (!ciudad) {
        alert('Por favor, ingresa una ciudad');
        return;
    }

    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

    try {
        const response = await fetch(apiClimaActual);
        const data = await response.json();
        mostrarClima(data);
    } catch (error) {
        console.error("Hubo un error al obtener el clima:", error);
    }
}

function mostrarClima(data) {
    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c + '°C';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
    document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
    document.getElementById('clima-contenedor').style.display = 'block';
}