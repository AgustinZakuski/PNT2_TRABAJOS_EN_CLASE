const API_URL = 'https://jsonplaceholder.typicode.com/todos?userId=3';

async function getPendientes(link) {
    let tareas = [];
    try {
        const response = await fetch(link);
        tareas = await response.json();
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
    }
    tareas = tareas.filter(tarea => !tarea.completed);
    return tareas;
}

async function mostrarPendientes(link) {
    const pendientes = await getPendientes(link);
    console.log('Tareas pendientes:', pendientes);
}

mostrarPendientes(API_URL);