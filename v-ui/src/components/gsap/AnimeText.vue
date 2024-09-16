<template>
  <div id="container">
    <div class="item">
      <h2>卜算子·咏梅</h2>
      <p><em>读陆游咏梅词，反其意而用之。</em></p>
      <p>
        风雨送春归，<br>
        飞雪迎春到。<br>
        已是悬崖百丈冰，<br>
        犹有花枝俏。<br><br>
        俏也不争春，<br>
        只把春来报。<br>
        待到山花烂漫时，<br>
        她在丛中笑。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import anime from 'animejs';

  onMounted(() => {

    let tl = anime.timeline({
      targets: '.item',
      loop: true,
      direction: 'alternate',
    });

    tl.add({
      scale: {
        value: [0, 1],
        duration: 2000,
      },
      rotate: {
        value: [0, 360],
        duration: 2000,
      },
      easing: 'spring(1, 80, 10, 0)',
    });
  });
</script>

<style scoped>
  #container {
  }
</style>
