import axios from 'axios';

//Esta url es de la API de Pokemon. La usé para poder probar el código, 
// ya que la API del clima me tira error 401 y no me deja acceder a los datos.
const API_URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';
const NOMBRE_POKEMON = 'mudkip';
const API_URL_POKEMON = `${API_URL_BASE}${NOMBRE_POKEMON}`;
//-----------------------------------------------------------------------------

const ciudad= "La Massana - Andorra"
const LatLaMassana = 42.54;
const LonLaMassana = 1.52;
const API_KEY = "eacdc2f51c264c3261b7841a2a383984";
const API_URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${LatLaMassana}&lon=${LonLaMassana}&appid=${API_KEY}`;

async function getWeatherData(link, ubicacion) {
    try{ 
        const response = await axios.get(link);
        console.log(`El clima en ${ubicacion} es:`, response.data);
    } catch (error){
        console.error('No funca 👍👍👍:', error);
    }
}

//Llamando esta API tira 401 👇👇👇
getWeatherData(API_URL, ciudad);

//Me tira error 401, se ve que no me toma la API Key o simplemente no me da acceso, 
// pero no me deja acceder a los datos del clima. El código, de todas formas,
// debería funcionar correctamente si tuviera acceso a la API.

//Llamando el mismo método con esta API, trae los datos correctamente 👇👇👇

//getWeatherData(API_URL_POKEMON, NOMBRE_POKEMON); 

//Probé con la API de Pokemon para verificar el correcto funcionamiento del código.
//(La salida espera una ciudad pero puse el nombre del pokemon para probar probar si trae los datos, no es un error).