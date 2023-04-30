<template>
  <div class="card">
    <h2>{{ pokemon.name }}</h2>
    <h3>{{ id }}</h3>
  </div>
</template>

<script setup>
const props = {
  pokemon: Object,
  id: Number
}
</script>

<style scoped></style>
