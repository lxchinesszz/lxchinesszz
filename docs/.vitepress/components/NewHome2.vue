<template>
  <div id="container" class="custom-scrollbar">
    <div id="ball"></div>
    <div class="section">
      <FirstBanner />
    </div>
    <div class="section">
      <Blogs />
    </div>
    <div class="section">
      <BusinessBlogs />
    </div>
    <div class="section" style="height: auto">
      <Knowledges />
    </div>
    <div style="width: 100vw; padding: 0 0; bottom: 0">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
  //https://www.pinterest.com/pin/4081455906105353/
  import { onMounted, onUnmounted, ref } from 'vue';
  import PeopleTimeEchart from './PeopleTimeEchart.vue';
  import MusicEchart from './MusicEchart.vue';
  import FinanceBanner from './FinanceBanner.vue';
  import FirstBanner from './FirstBanner.vue';
  import Skills from './Skills.vue';
  import BusinessSystem from './BusinessSystem.vue';
  import WorkYear from './WorkYear.vue';
  import Blogs from './Blogs.vue';
  import BusinessBlogs from './BusinessBlogs.vue';
  import Footer from './Footer.vue';
  import Knowledges from './Knowledges.vue';

  const titleObServer = ref<IntersectionObserver>();

  const moveObServer = ref<IntersectionObserver>();

  function createObserver() {
    titleObServer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1, // 当 10% 的卡片可见时触发
      },
    );

    moveObServer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1, // 当 10% 的卡片可见时触发
      },
    );

    // 观察所有卡片
    document.querySelectorAll('.section_title').forEach((card) => {
      titleObServer.value.observe(card);
    });

    // 观察所有卡片
    document.querySelectorAll('.move').forEach((card) => {
      moveObServer.value.observe(card);
    });
  }

  function updateSpherePosition(ball) {
    const scrollY = window.scrollY;
    // 更新小球的垂直位置
    ball.style.top = `${scrollY}px`;
    // 随机生成水平偏移
    const randomOffset = (Math.random() - 0.5) * 200; // 随机范围 -100 到 100
    const newLeft = Math.min(
      Math.max(50 + randomOffset, 0),
      window.innerWidth - 50,
    ); // 确保不超出窗口边界
    ball.style.left = `${newLeft}px`;
  }

  const ballAnimate = () => {
    const ball = document.getElementById('ball');
    window.addEventListener('scroll', () => {
      updateSpherePosition(ball);
    });
    window.addEventListener('resize', () => {
      updateSpherePosition(ball);
    });
    window.addEventListener('click', function (event) {
      // 在鼠标位置附近随机生成水平偏移
      const randomOffset = (Math.random() - 0.5) * 100; // 随机范围 -50 到 50
      const newLeft = Math.min(
        Math.max(event.clientX + randomOffset, 0),
        window.innerWidth - 50,
      ); // 确保不超出窗口边界
      ball.style.left = `${newLeft}px`;
      // 更新小球的垂直位置
      const clickY = event.clientY + window.scrollY;
      ball.style.top = `${clickY}px`;
    });
  };

  onMounted(() => {
    // createObserver('.card');
    ballAnimate();
  });

  onUnmounted(() => {
    // titleObServer.value?.disconnect();
    // titleObServer.value = null;
    // moveObServer.value?.disconnect();
    // moveObServer.value = null;
  });
</script>

<style scoped lang="less">
  /* 针对WebKit浏览器（Chrome, Safari等） */
  .custom-scrollbar::-webkit-scrollbar {
    scroll-behavior: smooth;
  }

  #container {
    //background: url('https://i.pinimg.com/564x/ea/6d/3b/ea6d3b54c0ab32cdc628c642e3295fa5.jpg');
    //background: url('https://i.pinimg.com/originals/1a/a4/60/1aa4608ae3ec6562dc394ab747b26124.gif');
    //background: url('https://i.pinimg.com/564x/44/1c/06/441c0600984d96efcde3f313e9bd8252.jpg');
    //background: url('https://i.pinimg.com/564x/be/4c/f9/be4cf93374b073e27456558de39ce05f.jpg');
    background: url('https://i.pinimg.com/564x/82/2e/90/822e90f73b890d90511c1b2fcbf7d657.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    //background-image: radial-gradient(
    //  circle farthest-corner at 100% 50%,
    //  #d1d3d6,
    //  #fcfcfd
    //);
  }

  #ball {
    width: 25%;
    border-radius: 50%;
    aspect-ratio: 1;
    position: absolute;
    top: 10vw;
    left: 10vw;
    display: block;
    background-color: #ffffff;
    box-shadow: inset 0 0 20px rgba(180, 177, 177, 0.5); /* 添加内部阴影以模拟3D效果 */
    filter: blur(10px); /* 应用模糊滤镜 */
    animation: float 3s ease-in-out infinite; /* 添加动画使球体浮动 */
    transition:
      top 1.5s,
      left 1.5s; /* 平滑滚动 */
  }

  @keyframes float {
    0%,
    100% {
      scale: 1;
    }
    50% {
      scale: 1.2;
    }
  }

  .pattern-dots-xl {
    background-image: radial-gradient(currentColor 1px, transparent 1px);
    background-size: calc(10 * 1px) calc(10 * 1px);
  }

  .section {
    width: 100vw;
    height: 100vh;
    //backdrop-filter: blur(6px);
    background-color: rgba(244, 243, 246, 0.05);
    //background-image: radial-gradient(
    //  circle farthest-corner at 100% 50%,
    //  #d1d3d6,
    //  #fcfcfd
    //);
    -webkit-backdrop-filter: blur(6px);
    padding: 0 10vw;
    z-index: 2;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    position: relative;
  }

  .section_title {
    position: absolute;
    top: 10vw;
    left: 10vw;
    z-index: 2;
    font-size: 4rem;
    opacity: 0.5;
    transform: scale(0);
  }

  .section_title.visible {
    opacity: 1;
    transform: scale(1);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transition:
      color 0.3s linear,
      opacity 0.3s linear,
      transform 0.3s linear;
  }

  .card {
    border-radius: 15px;
    //background: white;
    background: linear-gradient(to right bottom, #fcfcfd 20%, #f2f2f3 150%);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
    padding: 0 15px;
    //margin-top: 6px;
    //transform: translateY(100px) scale(0.95);
    transition:
      opacity 0.6s ease,
      transform 0.3s ease;
  }

  .card.visible::after {
    content: 'x';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    scale: 0.1;
    background-color: #213547;
    border-radius: 15px;
  }

  .card.visible:hover::after {
    scale: 1;
    border-radius: 15px;
    opacity: 0;
    transition:
      opacity 0.6s ease-out,
      border-radius 0.8s ease-out;
  }

  .card.visible:hover {
    transform: translateY(-5px);
    box-shadow:
      0px 3.1px 17.7px rgba(0, 0, 0, 0.035),
      0px 25px 141px rgba(0, 0, 0, 0.07);
    transition:
      box-shadow 0.2s linear,
      transform 0.2s linear;
  }

  .card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .move {
    //transform: translateY(100px) scale(0.95);
    transition:
      opacity 0.6s ease,
      transform 0.3s ease;
  }

  .move.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .text-blurry {
    text-align: center;
    color: transparent;
    animation: blurAnimation 2s forwards; /* 添加动画 */
  }

  /* 定义模糊动画 */
  @keyframes blurAnimation {
    0% {
      text-shadow: 0 0 0 rgba(0, 0, 0, 0.5); /* 开始时没有模糊 */
    }
    100% {
      text-shadow:
        0 0 5px rgba(0, 0, 0, 0.5),
        0 0 10px rgba(0, 0, 0, 0.4),
        0 0 15px rgba(0, 0, 0, 0.3); /* 结束时增加模糊效果 */
    }
  }

  .fms_table_title {
    font-size: 3rem;
    transform-style: preserve-3d;
    transform: perspective(1000px) translateZ(20px); /* 旋转子元素 */
    text-shadow: 0 3px 17px rgba(0, 0, 0, 0.035);
  }
</style>
