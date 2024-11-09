<template>
  <main>
    <svg viewBox="0 0 100 100">
      <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00FFFF;stop-opacity:1" /> <!-- 青色 -->
          <stop offset="50%" style="stop-color:#8A2BE2;stop-opacity:1" /> <!-- 蓝紫色 -->
          <stop offset="100%" style="stop-color:#FF00FF;stop-opacity:1" /> <!-- 紫色带金属光泽（洋红色加亮） -->
          <stop offset="75%" style="stop-color:#FF69B4;stop-opacity:0.8" />
        </linearGradient>
      </defs>
      <text fill="url(#textGradient)">
        <textPath xlink:href="#circle">
          {{ text}}
        </textPath>
      </text>
    </svg>
  </main>
</template>

<script setup lang="ts">

  import { onMounted, ref } from 'vue';

  defineProps({
    text: {
      type: String,
      default: 'Welcome USE V-UI',
    },
  });

  onMounted(() => {

  });
</script>

<style scoped>
  main {
    width: 100%;
    height: 100%;
    margin: 80px auto;
    font-size: 12px;
  }

  main svg {
    overflow: visible;
    animation: circular-text-rotate 5s linear paused infinite;
    animation-play-state: running;
  }


  main path {
    fill: none;
  }

  @keyframes circular-text-rotate {
    to {
      transform: rotate(1turn);
    }
  }
</style>
