<template>
  <div id="container">
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
    <div
      style="width: 100vw;height: 25vh;text-align: center;margin-top: 2rem;display: flex;flex-direction: column; justify-content: center;align-items: center">
      <div class="item" style="font-size: 0"> {{ textRef }}</div>
      <div style="font-size: 1.5rem;margin-top: 1rem" class="gsc">
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
      zIndex: 100,
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

    // 风车放大
    // tl.add({
    //   targets: '.blades',
    //   opacity: 1,
    //   scale: [0, 1],
    //   easing: 'spring',
    //   duration: 1000,
    //   delay: anime.stagger(1),
    // });


    tl.finished.then(() => {
      const n = anime({
        targets: '.sphere',
        opacity: 0.7,
        duration: 1000,
        easing: 'linear',
      });
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
    // VanillaTilt.init(document.querySelector('.sphere') as HTMLElement, {
    //   max: 5,
    //   speed: 100,
    // });


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

</script>

<style scoped>

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden
  }

  .item {
    z-index: 100;
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
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
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

</style>
