---
navbar: true
title: 文本特效
category: '动画'
---

# 文本特效

## 跳动

:::demo

```vue

<template>
  <div class="container">
    <h1 class="animated-text">
      <span v-for="(letter, index) in text" :key="index" class="letter" :style="{ animationDelay: `${index * 0.1}s` }">
        {{ letter }}
      </span>
    </h1>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const text = ref('Vercel Inspired')
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: #000;
  }

  .animated-text {
    font-size: 3rem;
    font-weight: bold;
    //color: #fff;
  }

  .letter {
    display: inline-block;
    opacity: 0;
    animation: fadeInOut 4s infinite;
  }

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    20%, 80% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
```

:::

## 打字机

:::demo

```vue 

<template>
  <div class="container">
    <h1 class="typewriter-text">
      <span class="typed-text">{{ typedText }}</span>
      <span class="cursor">|</span>
    </h1>
  </div>
</template>
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const fullText = 'Welcome to china';
  const typedText = ref('');
  let currentIndex = 0;
  let typingInterval;

  const typeText = () => {
    if (currentIndex < fullText.length) {
      typedText.value += fullText[currentIndex];
      currentIndex++;
    } else {
      clearInterval(typingInterval);
    }
  };

  onMounted(() => {
    typingInterval = setInterval(typeText, 100);
  });

  onUnmounted(() => {
    clearInterval(typingInterval);
  });
</script>
<style scope>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .typewriter-text {
    font-size: 3rem;
    font-weight: bold;
  }

  .typed-text {
    background: linear-gradient(45deg, #3490dc, #6574cd, #9561e2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: gradient 5s ease infinite;
  }

  .cursor {
    opacity: 1;
    animation: blink 0.7s infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>
```

:::

## 粒子

:::demo

```vue 

<template>
  <div class="container">
    <canvas ref="canvas" @click="triggerAnimation"></canvas>
  </div>
</template>
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const canvas = ref(null);
  let ctx;
  let particles = [];
  let animationFrame;
  let exploded = false;

  const text = '西魏陶渊明';
  const particleSize = 3;
  const explosionForce = 5;

  onMounted(() => {
    const canvasEl = canvas.value;
    ctx = canvasEl.getContext('2d');
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    createParticles();
    animate();

    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener('resize', handleResize);
  });

  function createParticles() {
    particles = [];
    ctx.font = 'bold 80px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const textWidth = ctx.measureText(text).width;
    const startX = (canvas.value.width - textWidth) / 2;
    const startY = canvas.value.height / 2;

    ctx.fillText(text, canvas.value.width / 2, canvas.value.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.value.width, canvas.value.height);

    for (let y = 0; y < canvas.value.height; y += particleSize) {
      for (let x = 0; x < canvas.value.width; x += particleSize) {
        if (imageData.data[(y * canvas.value.width + x) * 4 + 3] > 128) {
          const particle = {
            x: x,
            y: y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
            color: `hsl(${Math.random() * 360}, 80%, 60%)`,
          };
          particles.push(particle);
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    for (const particle of particles) {
      if (exploded) {
        particle.x += (particle.originX - particle.x) * 0.1;
        particle.y += (particle.originY - particle.y) * 0.1;
      } else {
        particle.x += particle.vx;
        particle.y += particle.vy;
      }

      ctx.fillStyle = particle.color;
      ctx.fillRect(particle.x, particle.y, particleSize, particleSize);
    }

    animationFrame = requestAnimationFrame(animate);
  }

  function triggerAnimation() {
    if (exploded) {
      exploded = false;
      for (const particle of particles) {
        particle.vx = (Math.random() - 0.5) * explosionForce;
        particle.vy = (Math.random() - 0.5) * explosionForce;
      }
    } else {
      exploded = true;
    }
  }

  function handleResize() {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    createParticles();
  }
</script>

<style scope>
  .container {
    overflow: hidden;
    height: 35vh;
  }

  canvas {
    display: block;
    cursor: pointer;
  }
</style>
```

:::

