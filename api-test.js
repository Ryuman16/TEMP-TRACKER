const claveApi = '3037ed2e73aa4f0bb99170825261509';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

(async () => {
    try {
        const response = await fetch(apiClimaActual);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Hubo un error al obtener el clima:", error);
    }
})();