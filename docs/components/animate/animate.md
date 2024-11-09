---
navbar: true
title: v-animate
category: '04-动画'
---

# 快速上手

```html 
<v-animate :animate={type: 'animate__fadeInLeft',
    duration: 1,
    disabled: false,}>
</v-animate>
```

## 完整示例

:::demo

```vue

<template>
  <div>
    <a-space direction="vertical" align="center">
      <v-animate ref="animateRef"
                 :animate="animateOptions"
      >
        <v-image
            src="https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-1-1000x800.jpg"
        />
      </v-animate>
      <a-space>
        <a-input v-model="animateOptions.type" placeholder="输入css 动画样式"/>
        <a-button type="primary" @click="animateRef.replay()">重新动画</a-button>
      </a-space>
    </a-space>
  </div>
</template>

<script setup>
  import {reactive, ref} from 'vue';

  const animateRef = ref();

  const animateOptions = reactive({
    type: 'animate__fadeInLeft',
    duration: 1,
    disabled: false,
    intersecting: true
  });
</script>
```
:::


支持动画: https://animate.style/

## 出现视图中播放动画


```
<template>
  <div id="container">
    <div class="card" v-for="i in 98" :key="i" />
  </div>
</template>

<script setup lang="ts">

  import { onMounted, onUnmounted } from 'vue';
  import { ScrollAnimate } from 'v-ui';

  const { createObserver, disconnect } = ScrollAnimate.useScrollAnimate();

  onMounted(() => {
    createObserver('.card', 'visible');
  });

  onUnmounted(() => {
    disconnect();
  });

</script>

<style scoped>
  #container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card {
    width: 450px;
    height: 200px;
    background: currentColor;
    border-radius: 5px;
    box-shadow: 0px 3.1px 17.7px rgba(0, 0, 0, 0.035),
    0px 25px 141px rgba(0, 0, 0, 0.07);
    color: rgba(255, 255, 255, 0.75);
    margin: 6px;
    transform: translateY(100px) scale(0.95);
    transition: opacity 0.6s ease, transform 0.3s ease;
    /**
     *不满足行就放大
     */
    flex-grow: 1;
  }

  .visible {
    opacity: 1;
    transform: translateY(0) scale(1);;
  }
</style>
```
