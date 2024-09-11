<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import VAnimate from '@/components/animate/VAnimate.vue';
  import VTypedText from './components/animate/VTypedText.vue';
  import { createSwapy } from 'swapy';
  import gsap from 'gsap';
  import VIcon from './components/icon/VIcon.vue';
  import { onMounted, ref } from 'vue';
  import VImage from './components/image/VImage.vue';
  import VImageCard from './components/card/VImageCard.vue';
  import VAroundBanner from './components/card/VAroundBanner.vue';

  const animateRef = ref();

  onMounted(() => {
    // gsap.to('.container', {
    //   scale: 0.9,
    //   yoyo: true,
    //   repeat: -1,
    //
    //   duration: 2, // 动画持续时间为1秒
    //   ease: 'power2.out',
    // });
    let container = document.querySelector('.container');
    const swapy = createSwapy(container, {
      animation: 'spring',
    });
    swapy.enable(true);
  });
</script>

<template>
  <!--  <div class="container">-->
  <!--    <div>-->
  <!--      &lt;!&ndash;      <VImageCard />&ndash;&gt;-->
  <!--      <v-around-banner style="width: 100vw" />-->
  <!--    </div>-->
  <!--    <div class="section-1" data-swapy-slot="foo" style="background-color: #ebebeb">-->
  <!--      <div class="content-a" data-swapy-item="a">-->
  <!--        &lt;!&ndash;        <VIcon icon="icon-caigoufukuanguanli" />&ndash;&gt;-->
  <!--        <a href="https://vitejs.dev" target="_blank">-->
  <!--          <img src="/vite.svg" class="logo" alt="Vite logo" />-->
  <!--        </a>-->
  <!--        <a href="https://vuejs.org/" target="_blank">-->
  <!--          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
  <!--        </a>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="section-2" data-swapy-slot="bar">-->
  <!--      <div class="content-b" data-swapy-item="b">-->
  <!--        <div class="handle" data-swapy-handle>-->
  <!--          <v-animate ref="animateRef" :animate="{type: 'animate__fadeInDownBig'}">-->
  <!--            <HelloWorld msg="Vite + Vue" />-->
  <!--          </v-animate>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="section-3" data-swapy-slot="baz">-->
  <!--      <div class="content-c" data-swapy-item="c">-->
  <!--        <button type="button" @click="animateRef.replay()">Restart</button>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <VTypedText text="你是真的牛逼啊" />
  <v-around-banner style="width: 100vw" line />
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
