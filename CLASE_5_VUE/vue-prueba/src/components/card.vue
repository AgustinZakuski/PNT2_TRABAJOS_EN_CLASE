<script setup>
    import {ref, onMounted} from 'vue'
    import axios from 'axios'

    const users = ref([])
    // Filtro los datos cuando los traigo, para no tener que preocuparme después
    onMounted(async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        users.value = res.data.filter(user => user.id % 2 !== 0)
    })
</script>

<template>
    <div class="card" style="width: 18rem;" v-for="user in users" :key="user.id">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <!-- Puse para mostrar el ID para poder comprobar el filtrado 👇👇👇 -->
            <p class="card-text">Mail: {{ user.email }} /// ID: {{ user.id }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
