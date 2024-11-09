<template>
  <div id="container" v-if="true">
    <div style="position: relative;">
      <div class="blades" style="opacity: 0;scale: 1;left: 70px;z-index: 1000">
        <div class="blade"></div>
        <div class="blade"></div>
        <div class="blade"></div>
        <div class="blade"></div>
        <div class="blade"></div>
        <div class="blade"></div>
      </div>
    </div>
    <PeopleTimeEchart style="width: 45vw;aspect-ratio: 1"/>
    <div
      style="width: 100vw;height: 25vh;text-align: center;margin-top: 2rem;display: flex;flex-direction: column; justify-content: center;align-items: center">
      <div class="item" style="font-size: 0"> {{ textRef }}</div>
      <div style="font-size: 1.5rem;margin-top: 1rem;scale: 1" class="gsc gradient-text">
        {{ gushici }}
      </div>
      <Sphere class="sphere" style="opacity: 0.2" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import anime from 'animejs';
  import Letterize from './letterize.cjs';
  import Sphere from './Sphere.vue';
  import PeopleTimeEchart from "./PeopleTimeEchart.vue";

  const textRef = ref('Hello SCM !');

  const run = ref();

  const gushici = ref('  ');

  const loadGushici = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://v1.jinrishici.com/rensheng.txt', true); // 第三个参数为true表示异步请求
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        gushici.value = `> ${xhr.responseText}`;
        anime({
          targets: '.gsc',
          scale: [0, 1],
          easing: 'linear',
          duration: 500,
        });
      }
    };
    xhr.send();
  };

  const customAnimation = () => {
    const letterize = new Letterize({ targets: '.item' });
    // const letterize = {
    //   listAll: '.item',
    // };
    let tl = anime.timeline({
      targets: letterize.listAll,
      autoplay: false,
      zIndex: 2,
      width: '100vw',
      easing: 'easeInOutExpo',
    });
    // 字体弹出
    tl.add({
      // left: '100%',
      opacity: [0, 1],
      fontSize: '10rem',
      filter: ['blur(10px)', 'blur(0px)'],
      easing: 'linear',
      duration: 1000,
      delay: anime.stagger(200),
    }, '-=1800');

    tl.finished.then(() => {
      // 球形展示
      const n = anime({
        targets: '.sphere',
        opacity: 0.7,
        duration: 1000,
        easing: 'linear',
      });
      // 风车放大
      const s = anime({
        targets: '.blades',
        opacity: 1,
        scale: [0, 1],
        easing: 'spring',
        duration: 1000,
        complete(anim) {
          loadGushici();
        },
      });
      n.finished.then(() => {
        // 风车旋转
        run.value = anime({
          targets: '.blades',
          rotate: 360,
          loop: true,
          easing: 'linear',
          duration: 2000,
        });
      });
    });
    return tl;
  };


  const customAnimationRef = ref();


  onMounted(() => {
    customAnimationRef.value = customAnimation();
    customAnimationRef.value.play();
  });

  const uninstall = () => {
    customAnimationRef.value = null;
    if (run.value) {
      run.value.pause();
      run.value = null;
    }
  };

  onUnmounted(() => {
    uninstall();
  });

  //.sphere
  //box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  //-webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
</script>

<style scoped>

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    //background-color: white;
    background-image: radial-gradient(
        circle farthest-corner at 100% 50%,
        #d1d3d6,
        #fcfcfd
    );
  }

  .item {
    z-index: 2;
  }

  .btnWrapper {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 12px;
    -webkit-border-radius: 12px;
    color: rgba(255, 255, 255, 0.75);
  }

  .sphere {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 12px;
    -webkit-border-radius: 12px;
    color: rgba(255, 255, 255, 0.75);
  }

  .windmill {
    position: relative;
    width: 300px;
    height: 450px;
  }

  .blades {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    animation: spin 10s linear infinite;
  }

  .blade {
    bottom: 50%;
    left: 50%;
    width: 10px;
    height: 40px;
    position: absolute;
    transform-origin: center bottom;
  }

  .blade:nth-child(1) {
    background-color: #FF6B6B;
    transform: translateX(-50%) rotate(0deg);
  }

  .blade:nth-child(2) {
    background-color: #4ECDC4;
    transform: translateX(-50%) rotate(60deg);
  }

  .blade:nth-child(3) {
    background-color: #45B7D1;
    transform: translateX(-50%) rotate(120deg);
  }

  .blade:nth-child(4) {
    background-color: #FFA07A;
    transform: translateX(-50%) rotate(180deg);
  }

  .blade:nth-child(5) {
    background-color: #98D8C8;
    transform: translateX(-50%) rotate(240deg);
  }

  .blade:nth-child(6) {
    background-color: #F7DC6F;
    transform: translateX(-50%) rotate(300deg);
  }


  .gradient-text {
    font-size: 3rem;
    font-weight: 300; /* 使用较细的字体重量 */
    background: linear-gradient(
      to right,
      #2c3e50, /* 深蓝灰色 */ #34495e, /* 中蓝灰色 */ #5D6D7E /* 浅蓝灰色 */
    );
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: gradient 8s ease infinite;
    letter-spacing: 1px; /* 增加字母间距 */
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

</style>
