<template>
  <div id="container">
    <div class="container-text">
      <h1>{{ text}}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  const props = defineProps({
    text: {
      type: String,
      default: 'V-UI From Arco'
    }
  })

  onMounted(() => {

  });
</script>

<style scoped lang="less">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  .container-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  h1,h5 {
    text-transform: uppercase;
    background-image: linear-gradient(to right top, #ffff34, #ffc812, #ff8f2f, #ff554d, #eb1267);
    background-size: 50% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Poppins', sans-serif;
    animation: gradientAnim 7.5s ease  alternate infinite;
  }


  @keyframes gradientAnim {
    to {
      background-position: 100% top;
    }
  }
</style>
