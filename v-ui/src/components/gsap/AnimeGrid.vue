<template>
  <div id="container">
    <div v-for="item in 900" class="item">
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import anime from 'animejs';

  onMounted(() => {
    let tl = anime.timeline({
      targets: '.item',
      easing: 'easeInOutExpo',
      loop: true,
    });
    tl.add({
      rotate: () => anime.random(-360, 360),
      translateY: () => anime.random(-150, 150),
      translateX: () => anime.random(-150, 150),
      delay: anime.stagger(100, { grid: [30, 30], from: '1' }),
      keyframes:[{
        background: '#f00'
      },{
        background: '#0f0'
      },{
        background: '#f0f'
      },{
        background: '#ff0'
      },{
        background: '#0ff'
      },{
        background: '#f33'
      }]
    });
    tl.add({
      rotate: () => anime.random(0, 0),
      translateY: () => anime.random(0, 0),
      translateX: () => anime.random(0, 0),
      delay: anime.stagger(100, { grid: [30, 30], from: 'center' }),
      keyframes:[{
        background: '#f00'
      },{
        background: '#0f0'
      },{
        background: '#f0f'
      },{
        background: '#ff0'
      },{
        background: '#0ff'
      },{
        background: '#f33'
      }]
    });
    tl.add({
      rotate: () => anime.random(0, 0),
      translateY: () => anime.random(0, 0),
      translateX: () => anime.random(0, 0),
      delay: anime.stagger(100, { grid: [30, 30], from: 'last' }),
      keyframes:[{
        background: '#fff'
      }]
    });
    tl.add({
      rotate: () => anime.random(0, 0),
      translateY: () => anime.random(0, 0),
      translateX: () => anime.random(0, 0),
      delay: anime.stagger(100, { grid: [30, 30], from: '1' }),
      keyframes:[{
        background: '#fff'
      },{
        background: '#0f0'
      },{
        background: '#fff'
      }]
    });
    // anime({
    //   targets: '.item',
    //   // easing: https://animejs.com/documentation/#easings
    //   // scale: [
    //   //   { value: .1, easing: 'linear', duration: 500 },
    //   //   { value: 1, easing: 'linear', duration: 500 },
    //   // ],
    //   // width: {
    //   //   value: '10px', // 28 - 20 = '8px'
    //   //   duration: 1000,
    //   //   easing: 'linear',
    //   // },
    //   // height: {
    //   //   value: '-=20px', // 28 - 20 = '8px'
    //   //   duration: 1000,
    //   //   easing: 'linear',
    //   // },
    //   // opacity: {
    //   //   value: 0.1,
    //   //   duration: 1000,
    //   //   easing: 'linear',
    //   // },
    //   // // Anime.js接受并转换十六进制、RGB、RGBA、HSL 和 HSLA 颜色值。
    //   // // 不支持 CSS 颜色代码（例如： 'red' , 'yellow' , 'aqua' ）
    //   // background: {
    //   //   value: 'rgb(185, 0, 89)',
    //   //   duration: 1000,
    //   //   easing: 'linear',
    //   // },
    //   // rotate: {
    //   //   value: 360,
    //   //   duration: 1000,
    //   //   easing: 'linear',
    //   // },
    //   // 类似 gsap 中的 yoyo https://animejs.com/documentation/#direction
    //   // direction: 'alternate',
    //   delay: anime.stagger(2000, { grid: [10, 10], from: 'center' }),
    //   // https://animejs.com/documentation/#loop
    //   loop: true,
    // });
  });

</script>

<style scoped>
  #container {
    width: 100vw;
    height: 100vh;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(30, 1fr);
    grid-template-rows: repeat(30, 1fr);
    background-color: #1b1b1f;
  }

  .item {
    background-color: #c5c2c2;
    border-radius: 15px;
    width: 20px;
    height: 20px;
  }
</style>
