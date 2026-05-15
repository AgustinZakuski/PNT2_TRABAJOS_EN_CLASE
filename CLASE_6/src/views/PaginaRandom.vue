<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const aTraer = ref([])

const obtenerGatos = async () => {
  try {
    const res = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')

    aTraer.value = res.data
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  obtenerGatos()
})
</script>

<template>
  <div>
    <h1>Página Random</h1>
    <p>Acá traemos imágenes random de gatos</p>

    <div class="grid">
        <div class="card" v-for="gato in aTraer" :key="gato.id">
            <img :src="gato.url" alt="gato" class="img"/>
        </div>
    </div>
    
  </div>
</template>