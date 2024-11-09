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
  <!--  <v-typed-text text="你是真的牛逼啊,就你最牛逼" />-->
  <!--  <VTypedText text="你是真的牛逼啊" />-->
  <!--  <v-around-banner style="width: 100vw" line />-->
  <div
    style="display: flex;flex-direction: column;justify-content: center;align-items: center;
    height: 100vh;background-color: #213547">
    <!--    <GsapGrid />-->
    <!--    <GsapSplitText />-->
    <!--    <AnimeGrid />-->
    <!--    <AnimeText />-->
    <!--    <OrbitingCircles />-->
    <!--    <v-animate :animate="{type: 'animate__fadeInDownBig'}">-->
    <!--      <HelloWorld msg="Vite + Vue" />-->
    <!--    </v-animate>-->
    <!--    <v-animate :animate="{type: 'animate__fadeInDownBig'}">-->
    <!--      <HelloWorld msg="Vite + Vue" />-->
    <!--    </v-animate>-->
    <!--    <v-animate :animate="{type: 'animate__fadeInDownBig'}">-->
    <!--      <HelloWorld msg="Vite + Vue" />-->
    <!--    </v-animate>-->
    <!--    <v-more-button>-->
    <!--      <template #content>-->
    <!--        <a-doption v-for="i in 10" :key="i" @click="alertAction(i)">打印二维码-{{ i }}</a-doption>-->
    <!--      </template>-->
    <!--    </v-more-button>-->
    <!--    <v-button type="primary" ref="animateRef" @click="addShake">-->
    <!--      <template #icon>-->
    <!--        <v-icon icon="icon-biaoshu" />-->
    <!--      </template>-->
    <!--      不错-->
    <!--    </v-button>-->
    <!--    <v-blur-in-animate />-->
    <!--    <v-interactive-card />-->
    <!--    <v-spline />-->
    <!--    <v-ring-animate style="width: 50vw">-->
    <!--      <a-avatar :size="164">-->
    <!--        <img src="https://img.springlearn.cn/learn_d98f09cdad8fa38168ec59c15a508490.ico" />-->
    <!--      </a-avatar>-->
    <!--            <v-text-rain style="border-radius: 50%"/>-->
    <!--    <v-ring-animate style="width: 50vw;height: 50vh;">-->
    <!--      <v-text-path text="大 A"/>-->
    <!--    </v-ring-animate>-->
    <!--      <h1 style="color: white;font-size: 5rem;filter: blur(5px)">Hell</h1>-->
    <!--    </v-ring-animate>-->
    <!--        <VTextTiktok text="大 A">-->
    <!--            123-->
    <!--        </VTextTiktok>-->
    <VCommonTest />
<!--    <VTextPath />-->
    <!--    <v-text-staggered-animate text="Staggered Letter Pull Up Animation" :animate="{type: 'gradualSpacing'}" />-->
  </div>
</template>

<script setup lang="ts">
  import VTypedText from './components/animate/VTypedText.vue';
  import { onMounted, ref } from 'vue';
  import GsapGrid from './components/gsap/GsapGrid.vue';
  import GsapSplitText from './components/gsap/GsapSplitText.vue';
  import AnimeGrid from './components/gsap/AnimeGrid.vue';
  import AnimeText from './components/gsap/AnimeText.vue';
  import OrbitingCircles from './components/OrbitingCircles.vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  import VButton from '@/components/button/VButton.vue';
  import VMoreButton from '@/components/button/VMoreButton.vue';
  import VBlurInAnimate from '@/components/animate/VBlurInAnimate.vue';
  import VTextStaggeredAnimate from '@/components/text/VTextStaggeredAnimate.vue';
  import VCommonTest from '@/components/VCommonTest.vue';
  import VRingAnimate from '@/components/animate/VRingAnimate.vue';
  import VBackgroundLine from '@/components/backgound/VBackgroundLine.vue';
  import VTextRing from '@/components/text/VTextRing.vue';
  import VTextRain from '@/components/backgound/VTextRain.vue';
  import VTextPath from '@/components/text/VTextPath.vue';
  import VTextTiktok from '@/components/text/VTextTiktok.vue';


  const animateRef = ref();

  const alertAction = (i) => {
    alert(i);
  };
  const addShake = () => {
    animateRef.value.shake();
  };

  onMounted(() => {
    // gsap.to('.container', {
    //   scale: 0.9,
    //   yoyo: true,
    //   repeat: -1,
    //
    //   duration: 2, // 动画持续时间为1秒
    //   ease: 'power2.out',
    // });
    // let container = document.querySelector('.container');
    // const swapy = createSwapy(container, {
    //   animation: 'spring',
    // });
    // swapy.enable(true);
  });
</script>


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
