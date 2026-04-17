const API_URL = 'https://jsonplaceholder.typicode.com/comments?postId=2';

async function getComments(link) {
    let comments = [];
    try {
        const response = await fetch(link);
        comments = await response.json();
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
    }
    return comments;
}

async function mostrarComments(link) {
    const comments = await getComments(link);
    comments.forEach(comment => {
        console.log(comment);
    });
}

mostrarComments(API_URL);