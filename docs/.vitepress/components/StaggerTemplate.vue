<template>
  <div id="container">
    <div class="animation-wrapper">
      <div class="stagger-visualizer">
        <div class="cursor" style="color: red"></div>
        <div class="dots-wrapper">
          <div class="dot" v-for="item in 200" :key="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import anime from 'animejs';
  import { onMounted, onUnmounted, ref, watchEffect } from 'vue';

  import { useData } from 'vitepress';

  const { isDark } = useData();


  const bg1 = ref(['#373734', '#242423', '#0D0D0C']);

  const blockBg = ref(isDark ? '##1b1a1f' : 'white');

  const linearGradient = ref('linear-gradient(180deg, #FFFFFF 8%, #373734 100%)');
  watchEffect(() => {
    if (isDark.value) {
      linearGradient.value = 'linear-gradient(180deg, #373734 8%, #1b1a1f 100%)';
      blockBg.value = '#1b1a1f';
    } else {
      linearGradient.value = 'linear-gradient(180deg, #FFFFFF 8%, #D3CDC6 100%)';
      blockBg.value = 'white';
    }
  });

  let fitElementToParent = (el, padding) => {
    var timeout = null;

    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, { scale: 1 });
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(() => anime.set(el, { scale: ratio }), 10);
    }

    resize();
    window.addEventListener('resize', resize);
  };

  let advancedStaggeringAnimation = () => {
    var staggerVisualizerEl = document.querySelector('.stagger-visualizer');
    var dotsWrapperEl = staggerVisualizerEl.querySelector('.dots-wrapper');
    var dotsFragment = document.createDocumentFragment();
    var grid = [20, 10];
    var cell = 55;
    var numberOfElements = grid[0] * grid[1];
    var animation;
    var paused = true;

    fitElementToParent(staggerVisualizerEl, 0);

    var index = anime.random(0, numberOfElements - 1);
    var nextIndex = 0;

    anime.set('.stagger-visualizer .cursor', {
      translateX: anime.stagger(-cell, { grid: grid, from: index, axis: 'x' }),
      translateY: anime.stagger(-cell, { grid: grid, from: index, axis: 'y' }),
      translateZ: 0,
      scale: 1.5,
    });

    let play = () => {
      paused = false;
      if (animation) animation.pause();

      nextIndex = anime.random(0, numberOfElements - 1);

      animation = anime.timeline({
        easing: 'easeInOutQuad',
        complete: play,
      })
        .add({
          targets: '.stagger-visualizer .cursor',
          keyframes: [
            { scale: .75, duration: 120 },
            { scale: 2.5, duration: 220 },
            { scale: 1.5, duration: 450 },
          ],
          duration: 300,
        })
        .add({
          targets: '.stagger-visualizer .dot',
          backgroundColor: 'white',
          keyframes: [
            {
              translateX: anime.stagger('-2px', { grid: grid, from: index, axis: 'x' }),
              translateY: anime.stagger('-2px', { grid: grid, from: index, axis: 'y' }),
              duration: 100,
            }, {
              translateX: anime.stagger('4px', { grid: grid, from: index, axis: 'x' }),
              translateY: anime.stagger('4px', { grid: grid, from: index, axis: 'y' }),
              scale: anime.stagger([2.6, 1], { grid: grid, from: index }),
              duration: 225,
            }, {
              translateX: 0,
              translateY: 0,
              scale: 1,
              duration: 1200,
            },
          ],
          delay: anime.stagger(80, { grid: grid, from: index }),
        }, 30)
        .add({
          targets: '.stagger-visualizer .cursor',
          translateX: { value: anime.stagger(-cell, { grid: grid, from: nextIndex, axis: 'x' }) },
          translateY: { value: anime.stagger(-cell, { grid: grid, from: nextIndex, axis: 'y' }) },
          scale: 1.5,
          easing: 'cubicBezier(.075, .2, .165, 1)',
        }, '-=800');
      index = nextIndex;
    };

    let stop = () => {
      paused = false;
      if (animation) animation.pause();
      animation = null;
    };
    return { play, stop };
  };

  let animate = ref();

  onMounted(() => {
    animate.value = advancedStaggeringAnimation();
    animate.value.play();
  });

  onUnmounted(() => {
    if (animate.value) {
      animate.value.stop();
      animate.value = null;
    }
  });
</script>

<style scoped>

  #container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: v-bind(blockBg)
  }


  .animation-wrapper {
    width: 80%;
    padding-bottom: 40%;
  }

  .stagger-visualizer {
    position: absolute;
    width: 1100px;
    height: 550px;
    transform-origin: left top;
  }

  .stagger-visualizer .dots-wrapper {
    transform: translateZ(0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .stagger-visualizer .dot {
    position: relative;
    z-index: 1;
    width: 23px;
    height: 23px;
    margin: 16px;
    background-color: red;
    border-radius: 50%;
  }

  @media (min-width: 740px) {
    .stagger-visualizer .dot {
      background-color: transparent;
      background-image: v-bind(linearGradient);
    }
  }

  .stagger-visualizer .cursor {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 37px;
    height: 37px;
    margin: 9px;
    background-color: currentColor;
    border-radius: 50%;
  }

  .dot {
    color: v-bind(blockBg);
  }
</style>
