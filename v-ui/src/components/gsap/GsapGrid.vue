<template>
  <div id="container">
    <div class="item a" style="background-color: #ebebeb">A</div>
    <div class="item b" style="background-color: #ebebeb">B</div>
    <div class="item c" style="background-color: #ebebeb">C</div>
  </div>
</template>

<script setup lang="ts">
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import { onMounted, ref } from 'vue';

  const hide = () => {
    gsap.to('.item', {
      duration: 0.5,
      opacity: 0,
      y: -100,
      stagger: 0.1,
      ease: 'back.in',
    });
  };

  const flag = ref(false);
  const start = () => {
    flag.value = true;
  };

  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    gsap.to(window, { duration: 2, scrollTo: '.b', ease: 'power2' });
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     markers: true,
    //     trigger: '.c',
    //     start: 'top center',
    //     end: 'bottom top',
    //     pin: true,
    //     scrub: true, // 平滑: 正向动画，倒退就逆向动画
    //     toggleActions: 'restart pause reverse pause',
    //     snap: {
    //       snapTo: 'labels', // snap to the closest label in the timeline
    //       duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //       delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //       ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
    //     },
    //   }, // start the animation when ".box" enters the viewport (once)
    //   x: 1500,
    //   rotation: 360,
    //   duration: 5,
    //   // repeat: -1,
    //   // yoyo: true,
    // });
    // // add animations and labels to the timeline
    // tl.addLabel('start')
    //   .from('.b', { rotation: 45 })
    //   .addLabel('color')
    //   .from('.b', { backgroundColor: '#28a92b' })
    //   .to('.c', { rotation: 360 })
    //   .addLabel('end');
    // // 创建一个时间线
    // let tl = gsap.timeline();
    // // 向时间线添加动画
    // tl.to('.item', { x: 1600, duration: 5 }, 1) // 第一个动画，持续2秒
    //   .to('.item', { x: 600, duration: 5 }, '+=100%'); // 第三个动画，在前一个动画结束后1秒开始
    // 设置时间线的重复和往返
    // tl.repeat(-1).yoyo(true);
    // gsap.to('.item', {
    //   duration: 1,
    //   scale: 0.4,
    //   yoyo: true,
    //   repeat: -1,
    //   ease: 'none',
    // stagger: function(index, target, list) {
    //   // 索引 1，2，3，4，5
    //   console.log(index);
    //   // 元素 <div class='item'></div>
    //   console.log(target);
    //   // 元素集合
    //   console.log(list);
    //   return index * 0.1;
    // },
    // stagger: {
    //   amount: 1.5,
    //   // each: 1,
    //   axis: 'x',
    //   ease: 'none',
    //   grid: [12, 12],
    //   from: 'center',
    // },
    // });
  });

  // const props = defineProps({
  //   className: String,
  // });
</script>

<style scoped>
  #container {
    width: 100vw;
    height: 200vh;
  }

  .item {
    width: 150px;
    height: 150px;
    margin-bottom: 350px;
  }
</style>
