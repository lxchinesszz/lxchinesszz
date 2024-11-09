<template>
  <div>
    <div class="wrapper" style="color: black;font-size: 4rem;display: flex;justify-content: center;align-items: center">
      <span class="item" v-for="item in text_list" style="position: relative;">
        {{ item }}
      </span>
    </div>
    <span class="js-object-log"></span>
  </div>

</template>

<script setup lang="ts">
  import { nextTick, onMounted, PropType, ref } from 'vue';
  import anime from 'animejs';
  import { TextStaggerType } from '../animate/types';

  const props = defineProps({
    text: String,
    animate: Object as PropType<TextStaggerType>,
  });

  const text_list = ref([]);

  const customRAF = ref();

  /**
   * 字母从上到下
   */
  const letterPullUp = () => {
    const animation = anime({
      targets: '.item',
      translateY: ['100px', 0],
      opacity: [0, 1],
      scale: [0.5, 1],
      autoplay: true,
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(100, { easing: 'linear' }),
    });

    function loop(t) {
      animation.tick(t);
      customRAF.value = requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  };

  /**
   * 字母从右边到左
   */
  const letterPullLeft = () => {
    const animation = anime({
      targets: '.item',
      translateX: [120, 0],
      opacity: [0, 1],
      scale: [0.5, 1],
      autoplay: true,
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(100, { easing: 'linear' }),
    });

    function loop(t) {
      animation.tick(t);
      customRAF.value = requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  };

  /**
   * 从左向右散开
   */
  const gradualSpacing = () => {
    const animation = anime({
      targets: '.item',
      opacity: [0, 1],
      left: [-10, 0],
      autoplay: true,
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(50, { easing: 'linear' }),
    });

    function loop(t) {
      animation.tick(t);
      customRAF.value = requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  };


  onMounted(() => {
    text_list.value = props.text.split('');

    const type = props.animate?.type || 'letterPullLeft';
    nextTick(() => {
      switch (type) {
        case 'letterPullUp':
          letterPullUp();
          break;
        case 'letterPullLeft':
          letterPullLeft();
          break;
        case 'gradualSpacing':
          gradualSpacing();
          break;
        default:
          break;
      }
    });
  });


  // 交错字母
</script>

<style scoped>
</style>
