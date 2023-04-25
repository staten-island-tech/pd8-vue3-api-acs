<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const pokemon = ref('')
//ref creates a variable thats going to change v model (pokemon api)

async function getPokemon() {
  let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  let data = await res.json()
  pokemon.value = data.results
}
onMounted(() => {
  getPokemon()
})
//mounted is a stage of the vue component's life cycle
</script>

<style scoped></style>
