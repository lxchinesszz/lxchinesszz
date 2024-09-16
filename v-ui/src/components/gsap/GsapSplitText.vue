<template>
  <div id="container">
    <h1 id="text" ref="textRef">Hello</h1>
  </div>
</template>

<script setup lang="ts">

  import { onMounted, ref } from 'vue';

  const textRef = ref();

  onMounted(() => {

  });
</script>

<style scoped>
  #container {
    width: 100vw;
    height: 100vh;
    background-color: black;
  }
</style>
