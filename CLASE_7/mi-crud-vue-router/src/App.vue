<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const post = ref([])

const form = ref({
  title: '',
  body: ''
})

const isEdit = ref(false)
const currentId = ref(null)

const API_URL = 'https://jsonplaceholder.typicode.com/';
const API_USERS_URL = `${API_URL}users/`;

const fetchPosts = async () => {
  try {
    const response = await axios.get(API_USERS_URL);
    post.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}


// crear la funcion para crear una publicacion o editarla
const savePost = async () => {
  try {
    if (isEdit.value){
      //actualizar la publi
      await axios.put(`${API_USERS_URL}${currentId.value}`, form.value);
    alert('Post actualizado con éxito');

    }else{
      //crear la publi
      await axios.post(API_USERS_URL, form.value);
      alert('Post creado con éxito');
    }

    //limpiar el formulario
    form.value = {
      title: '',
      body: ''
    }
    isEdit.value = false;
    currentId.value = null;
  } catch (error) {
    console.error('Error saving post:', error);
  }
}


const deletePost = async (id) => {
  try {
    await axios.delete(`${API_USERS_URL}${id}`);
    post.value = post.value.filter(p => p.id !== id);
    alert('Post eliminado con éxito');
  } catch (error) {
    console.error('Error deleting post:', error);
  }
}

const editarPost = (post) => {
  isEdit.value = true;
  form.value = {
    title: post.title,
    body: post.body
  }
  currentId.value = post.id;
}

onMounted(() => {
  fetchPosts();
})
</script>

<template>
  <form class="mb-3" @submit.prevent="savePost">
    <div class="mb-3">
      <label for="title" class="form-label">Título</label>
      <input v-model="form.title" type="text" class="form-control" id="title" placeholder="titulo de la publicacion" required />
    </div>
    <div class="mb-3">
      <label for="body" class="form-label">Contenido</label>
      <input v-model="form.body" type="text" class="form-control" id="body" placeholder="contenido de la publicacion" required />
    </div>
    <button type="submit"  class="btn" :class="isEdit ? 'btn-warning' : 'btn-success'">{{isEdit ? 'Actualizar' : 'Crear'}}</button>

  </form>



  <table class="table">
    <thead>
      <tr>
        <th scope="col">#ID</th>
        <th scope="col">Título</th>
        <th scope="col">Contenido</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in post" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.name }}</td>
        <td>{{ post.username }}</td>
        <td>{{ post.email }}</td>
        <td>{{ post.address.street }}, {{ post.address.suite }}, {{ post.address.city }}</td>
        <td>{{ post.phone }}</td>
        <td>{{ post.website }}</td>
        <td>{{ post.company.name }}</td>
       
        <td>
          <button class="btn btn-warning" @click="editarPost(post)" >Editar</button>
          <button class="btn btn-danger" @click="deletePost(post.id)" >Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
