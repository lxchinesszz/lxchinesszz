---
title: CSS动画
navbar: true
category: 'CSS'
---


# 常用CSS动画

IntersectionObserver 是一个非常强大且高效的 API，用于检测元素是否进入或离开视口（viewport）。相比于传统的 scroll 事件监听器，它能更高效地处理视口中的元素变化，不会频繁触发，适合用于懒加载图片、触发滚动动画等场景。


## 文本模糊动画

:::demo
```vue 
<template>
  <div class="text-blurry"> 白日依山尽，黄河入海流。</div>
</template>
<style>
  .text-blurry {
    text-align: center;
    color: transparent;
    animation: blurAnimation 2s forwards; /* 添加动画 */
  }

  /* 定义模糊动画 */
  @keyframes blurAnimation {
    0% {
      text-shadow: 0 0 0 rgba(0, 0, 0, 0.5); /* 开始时没有模糊 */
    }
    100% {
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
      0 0 10px rgba(0, 0, 0, 0.4),
      0 0 15px rgba(0, 0, 0, 0.3); /* 结束时增加模糊效果 */
    }
  }
</style>
```
:::
