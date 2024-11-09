<template>
  <div id="container">
    <div class="circle_wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="pointer-events-none absolute inset-0 size-full">
        <circle class="stroke-black/10 stroke-1 dark:stroke-white/10" cx="50%" cy="50%" r="80" fill="none"></circle>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="pointer-events-none absolute inset-0 size-full">
        <circle class="stroke-black/10 stroke-1 dark:stroke-white/10" cx="50%" cy="50%" r="190" fill="none"></circle>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  #container {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle_wrapper {
    background-color: #7d7d7f;
  }

  .size-full {
    height: 100%;
    width: 100%;
  }

  .inset-0 {
    inset: 0;
  }

  .absolute {
    position: absolute;
  }

  .pointer-events-none {
    pointer-events: none;
  }

  audio, canvas, embed, iframe, img, object, svg, video {
    display: block;
    vertical-align: middle;
  }

  .stroke-black\/10 {
    stroke: rgba(0, 0, 0, .1);
  }

  .stroke-1 {
    stroke-width: 1;
  }
</style>
