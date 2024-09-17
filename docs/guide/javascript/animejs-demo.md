---
title: CommonJs和ECMAScript
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
