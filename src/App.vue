<script setup lang="ts">
import Header from './components/Header.vue';

</script>

<template>
  <div class="content">
    <Header/>
    <router-view style="flex: 1"/>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }
</style>


