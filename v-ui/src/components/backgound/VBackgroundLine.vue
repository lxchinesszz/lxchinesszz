<template>
  <div id="container">
    <div id="wave"></div>
  </div>
</template>

<script setup lang="ts">

  import { onMounted, ref } from 'vue';

  onMounted(() => {

  });
</script>

<style scoped>
  #container {
    background: #000;
    filter: blur(5px) contrast(20);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    &::before {
      position: absolute;
      content: "";
      background: #000;
      top: 0;
      left: 0;
      right: 0;
      height: 20vh;
      z-index: 10;
    }
  }

  #wave {
    position: relative;
    width: 30vmin;
    height: 30vmin;
    margin: 30vh auto;
    border-radius: 46% 42% 47% 44%;
    background: linear-gradient(#fff, #9c27b0);
    transform: scale(15) translate(0, -13vh) rotate(0deg);
    animation: rotate 10s infinite linear alternate;

    &::before {
      content: "";
      position: absolute;
      width: 99%;
      height: 99%;
      background: #000;
      border-radius: 46% 42% 47% 44%;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
  }

  @keyframes rotate {
    100% {
      transform: scale(10) translate(0, -15vh) rotate(360deg);
    }
  }

  @keyframes move {
    50% {
      left: 50%;
      right: 49.95%;
    }
    100% {
      left: 90%;
      right: 9.7%;
    }
  }

</style>
