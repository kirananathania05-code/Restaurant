<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue';
//array or list
const cars = ref(["Daihatsu", "Nissan", "Hyundai"])

//object
const user = ref({
  name: 'John Pork',
  role: 'Comic Designer',
  location: 'Gianyar',
  isActive: true
})
//list of objects
let bags = ref([
  {name: "Gucci", material: "leather", color: "brown"},
  {name: "Channel", material: "cloth", color: "maroon"},
  {name: "YSL", material: "jeans", color: "blue"},
])

</script>

<template>
<ul>
  <li v-for="car in cars" :key="car">
    {{ car }}
  </li>
</ul>
  
<div class="card">
  <h2>{{ user.name }}</h2>
  <p>Role: {{ user.role }}</p>
  <p>Location: {{ user.location }}</p>
  <p>Status: {{ user.isActive ? 'Active' : 'Inactive' }}</p>
</div>

<ul v-for="bag in bags" :key="bag">
  <li>{{ bag.name }}</li>
  <li>{{ bag.material }}</li>
  <li>{{ bag.color }}</li>
</ul>

<Button background="red" label="Klik Saya"/>

</template>

<style scoped>

</style>
