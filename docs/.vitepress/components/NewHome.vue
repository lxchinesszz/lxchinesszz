<template>
  <div id="container" class="custom-scrollbar">
    <Vue3Fullpage class="custom-scrollbar" hide-navigation @page-enter="entryPage">
      <section>
        <VHome />
      </section>
      <section>
        <Style2 ref="textAnimatedRef" />
      </section>
      <section>
        <PostEchart ref="echartsRef" />
      </section>
    </Vue3Fullpage>
  </div>
</template>

<script setup lang="ts">
  import VHome from './VHome.vue';
  import 'vue3-fullpage/styles';
  import { ref } from 'vue';
  import { Vue3Fullpage } from 'vue3-fullpage';
  import Style2 from './Style2.vue';
  import PostEchart from './PostEchart.vue';

  const textAnimatedRef = ref();

  const echartsRef = ref();

  const entryPage = (arg: number) => {
    if (arg === 1) {
      textAnimatedRef.value.startTextAnimated();
    } else if (arg === 2) {
      echartsRef.value.replay();
    }
  };
</script>

<style scoped>
  /* 针对WebKit浏览器（Chrome, Safari等） */
  .custom-scrollbar::-webkit-scrollbar {
    display: none;
  }

  #container {
    overflow: hidden;
  }
</style>
