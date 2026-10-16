
<script setup>
import Card from '@/components/Card.vue';
import Button from '../components/Button.vue';





</script>

<template>
  <div>
    <h1>AYO BELAJAR COMPONENT</h1>
    <Button background="blue" label="Klik Saya"/>
    <Card>
      <template #title>
        <h2>Ini Title</h2>
      </template>

      <template #content>
        <h2>Ini Contentnya</h2>
      </template>

      <template #image>
        <img src="#" alt="Photo">
      </template>
      
    </Card>
  </div>
</template>

<style scoped>

</style>