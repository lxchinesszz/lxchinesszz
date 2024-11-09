<template>
  <div id='container'>
    <canvas id="canvas3d"></canvas>
  </div>

</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  // @ts-ignore
  import { Application } from '@splinetool/runtime';


  // 这个网站 https://app.spline.design/home
  onMounted(() => {
    const canvas = document.getElementById('canvas3d');
    const spline = new Application(canvas as HTMLCanvasElement);
    spline.load(`https://prod.spline.design/aRLl3q9LCMYk0y52/scene.splinecode`);
  });
</script>

<style scoped>
  #container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    min-height: 100% !important;

  }

  #canvas3d {

    min-height: 100vh !important;
  }
</style>
