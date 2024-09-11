<template>
  <div id="container">
    <v-animate :animate="{type: 'animate__fadeInDownBig'}">
      <div ref="boxRef" id="box" style="font-size: 5rem"> 如果拜佛有用，你连门都进不去；</div>
    </v-animate>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Typed from 'typed.js';

  const boxRef = ref();


  const annotationRef = ref();

  const highWorldStart = () => {
    if (annotationRef.value) {
      annotationRef.value.show();
    }
  };

  const highWorldHide = () => {
    if (annotationRef.value) {
      annotationRef.value.hide();
    }
  };

  const startTyped = () => {
    const typed = new Typed('#box', {
      strings: ['如果拜佛有用，你连门都进不去；', '如果勤劳能致富，你挑个大粪也在送礼走关系；', '如果种地可以赚钱，农民将无地可种；'],
      typeSpeed: 100,
      loop: true,
      startDelay: 100,
      fadeOut: true,
      preStringTyped(arrayPos, self) {
        highWorldHide();
      },
      onComplete(self) {
        highWorldStart();
      },
    });
    // if (boxRef.value) {
    //   annotationRef.value = annotate(boxRef.value as HTMLElement, {
    //     type: 'highlight',
    //     multiline: false,
    //     animate: true,
    //     color: 'red',
    //   });
    // }
    typed.start();
  };

  // type RoughAnnotationType = 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';
  onMounted(() => {

    startTyped();

  });

</script>

<style scoped>
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
