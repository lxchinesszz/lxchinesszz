<template>
  <div id="container">
    <div class="text-magic" :data-word="text">
    </div>
  </div>
</template>

<script setup lang="ts">

  import { onMounted, ref } from 'vue';

  const props = defineProps({
    text: {
      type: String,
      default: 'Hello World',
    },
  });

  onMounted(() => {

  });
</script>

<style scoped>

  .text-magic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-10%, -10%) scale(1.5);
    width: 300px;
    font-size: 36px;
    font-family: Raleway, Verdana, Arial;
    color: transparent;
  }


  .text-magic::before {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0;
    height: 36px;
    color: red;
    overflow: hidden;
    z-index: 2;
    filter: contrast(200%);
    text-shadow: 2px 0 0 red;
    animation: shake 0.95s infinite;
  }

  .text-magic::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -1px;
    height: 36px;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    z-index: 3;
    color: cyan;
    filter: contrast(200%);
    text-shadow: -2px 0 0 cyan;
    mix-blend-mode: lighten;
    animation: shake 1.1s infinite 0.2s;
    /**
    , move 6s infinite linear
     */
  }

  @keyframes shake {
    10% {
      top: -0.4px;
      left: -1.1px;
    }
    20% {
      top: 0.4px;
      left: -0.2px;
    }
    30% {
      left: .5px;
    }
    40% {
      top: -0.3px;
      left: -0.7px;
    }
    50% {
      left: 0.2px;
    }
    60% {
      top: 1.8px;
      left: -1.2px;
    }
    70% {
      top: -1px;
      left: 0.1px;
    }
    80% {
      top: -0.4px;
      left: -0.9px;
    }
    90% {
      left: 1.2px;
    }
    100% {
      left: -1.2px;
    }
  }

  @keyframes move {
    0%,
    30% {
      transform: translate(0, -150%);
    }
    60%,
    100% {
      transform: translate(0, 0);
    }
  }
</style>
