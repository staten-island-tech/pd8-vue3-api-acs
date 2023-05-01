<script setup></script>

<template>
  <router-link to="/">Hey</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 20em;
  padding: 20em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
