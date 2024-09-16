<template>
  <span id="container">

  </span>
</template>

<script setup lang="ts">
  import Typed from 'typed.js';
  import { onMounted } from 'vue';

  const props = defineProps({
    text: String,
  });

  const startTyped = () => {
    let text = props.text;
    if (text) {
      const textSplit: string[] = text.split(',');
      if (textSplit) {
        const typed = new Typed('#container', {
          strings: textSplit,
          typeSpeed: 100,
          loop: true,
          startDelay: 100,
          fadeOut: true,
        });
        typed.start();
      }
    }
  };

  onMounted(() => {
    startTyped();
  });
</script>

<style scoped>
  #container {
  }
</style>
