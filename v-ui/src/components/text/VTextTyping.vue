<template>
  <div id="container">
    <h2 class="tittle-animation">
   <span class="text-typing">
     {{ text }}
   </span>
    </h2>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  const props = defineProps({
    text: {
      type: String,
      default: 'V-UI From Arco Vertical Animation seems very Adorable. ',
    },
    color: {
      type: String,
      default: 'red'
    }
  });

  const color = props.color

  onMounted(() => {

  });
</script>

<style scoped lang="less">
  .tittle-animation {
    position: relative;
    display: inline-block;
  }

  .text-typing {
    animation: typeAnimate 5.5s linear infinite 0s;
    -ms-animation: typeAnimate 5.5s linear infinite 0s;
    -webkit-animation: typeAnimate 5.5s linear infinite 0s;
    color: currentColor;
    opacity: 1;
    overflow: hidden;
    position: relative;
    font-size: 45px;
    display: block;
    white-space: nowrap;
    margin-right: 5px;
  }

  .text-typing:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 5px;
    background: v-bind(color);
    right: 0;
    top: 0;
    animation: cursorBlink .3s linear infinite;
    -ms-animation: cursorBlink .3s linear infinite;
    -webkit-animation: cursorBlink .3s linear infinite;
  }

  /*Text Typing Animation*/
  @-moz-keyframes typeAnimate {
    0% {
      width: 0%;
    }
    25% {
      width: 25%;
    }
    50% {
      width: 50%;
    }
    75% {
      width: 75%;
    }
    100% {
      width: 100%;
    }
  }

  @-webkit-keyframes typeAnimate {
    0% {
      width: 0%;
    }
    25% {
      width: 25%;
    }
    50% {
      width: 50%;
    }
    75% {
      width: 75%;
    }
    100% {
      width: 100%;
    }
  }

  @-ms-keyframes typeAnimate {
    0% {
      width: 0%;
    }
    25% {
      width: 25%;
    }
    50% {
      width: 50%;
    }
    75% {
      width: 75%;
    }
    100% {
      width: 100%;
    }
  }

  /*Cursor Typing Animation*/
  @-moz-keyframes cursorBlink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes cursorBlink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes cursorBlink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
