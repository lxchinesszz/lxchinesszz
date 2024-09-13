---
navbar: true
title: v-animate
category: '动画'
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
        <a-input v-model="animateOptions.type" placeholder="输入css 动画样式" />
        <a-button type="primary" @click="animateRef.replay()">重新动画</a-button>
      </a-space>
    </a-space>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue';

  const animateRef = ref();

  const animateOptions = reactive({
    type: 'animate__fadeInLeft',
    duration: 1,
    disabled: false,
  });
</script>
```
:::


支持动画: https://animate.style/
