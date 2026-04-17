const API_BASE = 'https://jsonplaceholder.typicode.com';
const OBJETIVO = 'posts';
const API_URL = `${API_BASE}/${OBJETIVO}`;


async function obtenerArticulos(link) {
    let data = {};
    try{
        const response = await fetch(link);
        data = await response.json();
    } catch (error){
        console.error('No funca 👍👍👍', error);
    }
    return data;
}

async function mostrarArticulos(link) {
    console.log(await obtenerArticulos(link));
}

mostrarArticulos(API_URL);