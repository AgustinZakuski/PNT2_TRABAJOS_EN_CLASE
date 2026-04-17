import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/albums?userId=1';

async function getAlbums(link) {
    let albums = [];
    try {
        const response = await axios.get(link);
        albums = await response.data;
    } catch (error) {
        console.error('Error al obtener los álbumes:', error);
    }
    return albums;
}

async function mostrarAlbums(link) {
    const albums = await getAlbums(link);
    albums.forEach(album => {
        console.log(album.title);
    });
}

mostrarAlbums(API_URL);