<script setup></script>


<template>
  <router-link to="/" class= “link”>Child Welfare System</router-link>
  <router-link to="/about" class= “link”>Abuse Liaisons</router-link>
  <router-view></router-view>
</template>


<style scoped>
.link {
  font-size: 54px;
  color: #333;
  margin-right: 40px;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
