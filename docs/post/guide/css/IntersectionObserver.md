---
title: IntersectionObserver
navbar: true
category: 'CSS'
---


# IntersectionObserver

IntersectionObserver 是一个非常强大且高效的 API，用于检测元素是否进入或离开视口（viewport）。相比于传统的 scroll 事件监听器，它能更高效地处理视口中的元素变化，不会频繁触发，适合用于懒加载图片、触发滚动动画等场景。


## 使用 IntersectionObserver 实现卡片从小到大的动画效果

:::demo
```vue

<template>
  <div id="container" class="custom-scrollbar">
    <card class="card" v-for="i in 100">
      <div class="text-blurry">
        白日依山尽，黄河入海流。{{ i }}
      </div>
    </card>
  </div>
</template>
<script setup lang="ts">
  import {onMounted, onUnmounted, ref} from 'vue';

  const observer = ref<IntersectionObserver>();

  function createObserver(cardCssName: string) {
    // 使用 Intersection Observer 来检测卡片的可见性
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1, // 当 10% 的卡片可见时触发
    });
    // 观察所有卡片
    document.querySelectorAll(cardCssName).forEach(card => {
      observer.value.observe(card);
    });
  }

  onMounted(() => {
    createObserver('.card');
  });

  onUnmounted(() => {
    observer.value.disconnect();
    observer.value = null;
  })
</script>
<style scope>
  #container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #7d7d7f;
  }

  .pattern-dots-xl {
    background-image: radial-gradient(currentColor 1px, transparent 1px);
    background-size: calc(10 * 1px) calc(10 * 1px);
  }

  .card {
    width: 25%;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 12px;
    -webkit-border-radius: 12px;
    color: rgba(255, 255, 255, 0.75);
    margin: 6px;
    //transform: translateY(100px) scale(0.95);
    transition: opacity 0.6s ease, transform 0.3s ease;
  }

  .card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);;
  }

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
