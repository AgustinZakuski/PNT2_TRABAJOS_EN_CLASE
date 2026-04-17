async function getData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

async function mostrarData() {
    const info = await getData();
    const lista = info.slice(0, 10);

    lista.forEach(i => { 
        console.log(i.title);
    });
}


mostrarData();
