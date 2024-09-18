---
title: Animejs示例
editLink: true
navbar: true
category: 'JavaScript'
---

## 示例

```
<template>
  <div id="container">
    <div class="block" v-for="i in 100" :key="i"></div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
  import anime from 'animejs';
  import { useData } from 'vitepress';


  const customAnimation = () => {
    let tl = anime.timeline({
      targets: '.block',
      autoplay: false,
      duration: function() {
        return anime.random(100, 2000);
      },
      easing: 'easeInOutExpo',
    });
    tl.add({
      opacity: 1,
      translateX: () => anime.random(-500, 500),
      translateY: () => anime.random(-300, 300),
      scale: () => anime.random(1, 5),
      easing: 'linear',
      duration: 3000,
      delay: anime.stagger(10),
    });
    tl.add({
      opacity: 0,
      translateX: () => anime.random(0, 0),
      translateY: () => anime.random(0, 0),
      scale: () => anime.random(1, 5),
      easing: 'linear',
      duration: 3000,
      delay: anime.stagger(10),
    });
    return tl;
  };


  onMounted(() => {
    customAnimationRef.value = customAnimation();
    customAnimationRef.value.play();
  });

  onUnmounted(() => {
    customAnimationRef.value = null;
  });

</script>

<style scoped>

  #container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    padding: 10%;
  }
  .block {
    position: absolute;
    height: 60px;
    width: 60px;
    opacity: 0;
    background: #901ed2;
    -webkit-box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.2);
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.2);
  }

</style>

```


## Letterize

```
pnpm add letterizejs
```

Letterize.js是一个轻量级的JavaScript库，它可以将文本内容分解为单个字母，以便可以对每个字母进行动画处理。这对于创建复杂的文本动画效果非常有用。

```javascript

<h1 class="item" style="z-index: 0;"> {{ textRef }}</h1>

const letterize = new Letterize({ targets: '.item' });
let tl = anime.timeline({
  targets: test.listAll,
  delay: anime.stagger(50),
  loop: true
});
tl
  .add({
    translateY: -40
  })
  .add({
    translateY: 0
  });
```
