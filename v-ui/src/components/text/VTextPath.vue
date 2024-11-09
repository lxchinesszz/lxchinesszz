<template>
  <div class="container">
    <div class="animation-container">
      <svg class="svgWrapper">
        <symbol id="text" viewBox="0 0 100% 100%">
          <text text-anchor="middle" dominant-baseline="middle" x="50%" y="50%">{{ text }}</text>
        </symbol>
        <use xlink:href="#text" class="text"></use>
        <use xlink:href="#text" class="text"></use>
        <use xlink:href="#text" class="text"></use>
        <use xlink:href="#text" class="text"></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, PropType } from 'vue';

  const props = defineProps({
    colors: Object as PropType<string[]>,
    type: {
      type: String,
      default: '1',
    },
    text: {
      type: String,
      default: 'V-UI',
    },
  });

  const colors = props?.colors || ['#59C173', '#a17fe0', '#5D26C1', '#d000ff'];

  const color_1 = colors[0];

  const color_2 = colors[1];

  const color_3 = colors[2];

  const color_4 = colors[3];

</script>

<style scoped lang="less">

  @import url(https://fonts.googleapis.com/css?family=Rancho&effect=shadow-multiple);

  .container {
    font-family: 'Rancho', sans-serif;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: default;
    position: relative;
    display: inline-block;
  }

  .svgWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .animation-container {
    font-weight: 800;
    font-size: 6em;
    opacity: 1;
    overflow: hidden;
  }

  .animation-container svg {
    display: block;
  }

  .animation-container svg .text {
    width: 100%;
    fill: transparent;
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-dasharray: 90, 310;
    stroke-dashoffset: 0;
    -webkit-animation: text 8s infinite linear;
    animation: text 8s infinite linear;
  }

  .animation-container svg .text:nth-child(4n + 1) {
    stroke: v-bind(color_1);
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
  }

  .animation-container svg .text:nth-child(4n + 2) {
    stroke: v-bind(color_2);;
    -webkit-animation-delay: -4s;
    animation-delay: -4s;
  }

  .animation-container svg .text:nth-child(4n + 3) {
    stroke: v-bind(color_3);;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }

  .animation-container svg .text:nth-child(4n + 4) {
    stroke: v-bind(color_4);
    -webkit-animation-delay: -8s;
    animation-delay: -8s;
  }

  @-webkit-keyframes text {
    100% {
      stroke-dashoffset: -400;
    }
  }
</style>
