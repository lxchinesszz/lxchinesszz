<template>
  <div id="container">
    <svg viewBox="0 0 400 200" stroke-width="1">
      <defs>
        <linearGradient id="Gradient1" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stop-color="#BBC42A" />
          <stop offset="100%" stop-color="#ED6E46" />
        </linearGradient>
      </defs>
      <text text-anchor="middle"
            x="50%"
            y="35%"
            stroke-dasharray="700 700" stroke-dashoffset="700" fill="none" stroke="url(#Gradient1)" dy="1em"
            font-size="70">
        {{ text }}
        <animate dur="5s" repeatCount="indefinite"
                 attributeName="stroke-dashoffset"
                 values="700;0" />
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">

  defineProps({
    text: {
      type: String,
      default: 'Hello World',
    },
  });

</script>

<style scoped>

  @import url(https://fonts.googleapis.com/css?family=Josefin+Sans);

  #container {
    min-width: 100%;
    min-height: 1rem;
    display: flex;
    justify-content: center;
    font-family: 'Josefin Sans', sans-serif;
    align-items: center;
  }


</style>
