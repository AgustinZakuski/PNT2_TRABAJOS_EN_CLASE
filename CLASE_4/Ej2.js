import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

async function deletePost() {
    try{
        const response = await axios.delete(API_URL);
        console.log('Post eliminado:', response.data);
    } catch (error) {
        console.error('No lo borramos 👍👍👍', error);
    }
}

deletePost();