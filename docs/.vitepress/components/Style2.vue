<template>
  <div id="container">
    <div class="stagger_text" style="z-index: 2;">
      <div style="text-align: left;">
        <Space :size="0">
          <div class="text">爱折腾</div>
          <Space :size="0">
            <div class="text">
              的
            </div>
            <div class="text loop_role_text loop_role_dev " :style="oneInitCss">
              独立开发者
            </div>
            <div class="text loop_role_text loop_role_play" :style="twoInitCss">
              未来任他画
            </div>
          </Space>
        </Space>
        <div class="text">永远享受创造精彩的东西</div>
      </div>
    </div>
    <div class="stagger_bg"
         style="z-index: 1">
    </div>
    <StaggerTemplate class="stagger"
                     style="width: 100vw;height:calc(100vh - var(--vp-nav-height));position: relative" />
  </div>
</template>

<script setup lang="ts">

  import { Space } from '@arco-design/web-vue';
  import StaggerTemplate from './StaggerTemplate.vue';
  import anime from 'animejs';
  import { onMounted, onUnmounted, ref } from 'vue';


  const oneInitCss = ref('transform: translate(0rem,100px);opacity: 0');

  const twoInitCss = ref('transform: translate(-20rem,100px);opacity: 0');

  const textAnimatedLoopObserve = ref();
  const textAnimated = () => {
    let tl = anime.timeline({
      easing: 'linear',
      duration: 300,
      autoplay: false,
    });
    tl.add({
      targets: '.loop_role_dev',
      translateY: -100,
      opacity: 1,
    });
    tl.add({
      targets: '.loop_role_dev',
      translateY: -200,
      delay(element, index, length) {
        return 3000;
      },
      opacity: {
        value: 0,
        duration: 200,
      },
    });
    tl.add({
      targets: '.loop_role_play',
      translateY: -100,
      opacity: 1,
    }, '-=100');
    return tl;
  };


  const startTextAnimated = () => {
    if (textAnimatedLoopObserve.value) {
      textAnimatedLoopObserve.value.play();
    } else {
      textAnimatedLoopObserve.value = textAnimated();
      textAnimatedLoopObserve.value.play();
      textAnimatedLoopObserve.value.finished.then(() => {
      });
    }
  };

  onMounted(() => {
    startTextAnimated();
  });

  const uninstall = () => {
    if (textAnimatedLoopObserve.value) {
      textAnimatedLoopObserve.value.pause();
      textAnimatedLoopObserve.value = null;
    }
  };

  onUnmounted(() => {
    uninstall();
  });

  defineExpose({ startTextAnimated });
</script>

<style scoped>
  #container {
  }


  .stagger_bg {
    color: rgb(255, 255, 255);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 0px;
    -webkit-border-radius: 0px;
    width: 100vw;
    height: calc(100vh - var(--vp-nav-height));
    position: absolute;
  }

  .stagger_text {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: calc(100vh - var(--vp-nav-height));
    position: absolute;
  }

  .loop_role_text {
    color: #f66447;
  }

  .text {
    font-size: 4rem;
    margin-bottom: 3rem;
    font-weight: 800
  }
</style>
