<template>
  <div id="container">
    <h1 :data-spotlight="text">{{ text }}</h1>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  defineProps({
    text: {
      type: String,
      default: 'V-UI From Arco',
    },
  });

  onMounted(() => {

  });
</script>

<style scoped lang="less">

  #container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
  }

  h1 {
    font-size: 8rem;
    font-weight: 700;
    letter-spacing: -0.3rem;
    position: relative;
  }

  h1::after {
    content: attr(data-spotlight);
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right,
    #c23616,
    #192a56,
    #00d2d3,
    #ffff00,
    #6d214f,
    #2e86de,
    #4de173,
    #e84118);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
    clip-path: ellipse(100px 100px at 0% 50%);
    animation: spotlight 5s infinite;
  }

  @keyframes spotlight {
    0% {
      -webkit-clip-path: ellipse(100px 100px at 0% 50%);
      clip-path: ellipse(100px 100px at 0% 50%);
    }
    50% {
      -webkit-clip-path: ellipse(100px 100px at 100% 50%);
      clip-path: ellipse(100px 100px at 100% 50%);
    }
    100% {
      -webkit-clip-path: ellipse(100px 100px at 0% 50%);
      clip-path: ellipse(100px 100px at 0% 50%);
    }
  }

</style>
