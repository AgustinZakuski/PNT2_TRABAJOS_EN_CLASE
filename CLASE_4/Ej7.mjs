import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/photos/1';

async function deletePhoto(link) {
    try{
        const response = await axios.delete(link);
        console.log('Foto eliminada:', response.data); 
    } catch (error){
        console.error('No lo borramos 👍👍👍:', error);
    }  
}

deletePhoto(API_URL);