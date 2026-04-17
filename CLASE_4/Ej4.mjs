const API_URL = 'https://jsonplaceholder.typicode.com';
const USER_ID = 5;


async function getUserData(link, id) {
    let data = {};
    try{
        const response = await fetch(`${link}/users/${id}`);
        data = await response.json();
    } catch (error){
        console.error('Error al obtener los datos del usuario:', error);
    }
    return data;
}

async function mostrarUserData(link, id) {
    console.log(await getUserData(link, id));
}

mostrarUserData(API_URL, USER_ID);