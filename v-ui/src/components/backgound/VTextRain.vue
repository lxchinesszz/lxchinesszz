<template>
  <div id="container">
    <div id="canvasContainer">
      <canvas></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  const props = defineProps({
    color: {
      type: String,
      default: '#f4427d',
    },
  });


  onMounted(() => {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let letter =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';

    let letters = letter.split('');

    var fontSize = 10,
      columns = canvas.width;

    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      //ctx.fillStyle = "rgba(255, 255, 255, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = props.color;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }


    setInterval(draw, 35);

  });
</script>

<style scoped lang="less">

  * {
    margin: 0;
    padding: 0;
  }

  #container {
    background: #000;
    width: 100%;
    height: 100%;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>
