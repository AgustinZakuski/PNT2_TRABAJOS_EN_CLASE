<template>
  <section class="container mt-5">
    <h1 class="mb-4">Productos</h1>
    <p>Aquí puedes ver una lista de productos disponibles.</p>

     <div class="mb-4">
       <label for="categoria" class="form-label">Filtrar por categoría:</label>
       <select v-model="categoriaSeleccionada">
        <option value="">Todas</option>
        <option value="electronics">Electrónica</option>
        <option value="jewelery">Joyería</option>
        <option value="men's clothing">Ropa de Hombre</option>
        <option value="women's clothing">Ropa de Mujer</option>
       </select>
     </div>
    <div class="tarjeta">
      <div v-for="producto in productosFiltrados" :key="producto.id" class="card">
        <img :src="producto.image" class="card-img-top" :alt="producto.title">
        <div class="card-body">
          <h5 class="card-title">{{ producto.title }}</h5>
          <p class="card-text">{{ producto.description }}</p>
          <a href="#" class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    </div>
    

  </section>

</template>

<script setup>
import {ref, onMounted, computed} from 'vue';
import axios from 'axios';

const productos = ref([]);
const categoriaSeleccionada = ref('')

const obtenerProductos = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    productos.value = response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
};

const productosFiltrados = computed(() => {
  return productos.value.filter(p => p.category === categoriaSeleccionada.value);
});


onMounted(() => {
  obtenerProductos();
});
</script>

<style scoped>
</style>