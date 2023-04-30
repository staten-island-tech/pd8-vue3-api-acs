<template>
  <h1>test</h1>
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
//runs getPokemon function when mounted 
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
