import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

async function deleteToDo(link) {
    try{
        const response = await axios.delete(link);
        console.log('ToDo eliminado:', response.data); 
    } catch (error){
        console.error('No lo borramos 👍👍👍:', error);
    }  
}

deleteToDo(API_URL);