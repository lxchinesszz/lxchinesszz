<template>
  <div id="container" class="custom-scrollbar">
    <div id="ball"></div>
    <div class="section">
      <FirstBanner />
    </div>
    <div class="section">
      <div class="section_title">技能</div>
      <Skills />
    </div>
    <div class="section life">
      <WorkYear />
    </div>
    <div class="section">
      <div class="section_title">参与系统设计</div>
      <BusinessSystem />
    </div>
    <div class="section">
      <FinanceBanner />
    </div>
    <div class="section">
      <a-row style="height: 40vh; width: 100%">
        <a-col
          :span="14"
          class="card"
          style="height: 95%; background: white; margin: 0 5px"
        >
          <h1 style="height: 5%">时间</h1>
          <PeopleTimeEchart style="height: 80%" />
        </a-col>
        <a-col
          :flex="1"
          class="card"
          style="height: 95%; background: white; margin: 0 5px"
        >
          <h1 style="height: 5%">音乐</h1>
          <MusicEchart style="height: 80%" />
        </a-col>
      </a-row>
      <a-row style="height: 40vh; width: 100%">
        <a-col
          :span="14"
          class="card"
          style="height: 95%; background: white; margin: 0 5px; padding: 5px"
        >
          <div
            style="
              background-image: url('https://i.pinimg.com/originals/ae/b1/0c/aeb10ccc141384132bb20e73632f1310.gif');
              background-position: center center;
              width: 100%;
              height: 100%;
              border-radius: 15px;
            "
          ></div>
        </a-col>
        <a-col
          class="card"
          :flex="1"
          style="height: 95%; background: white; margin: 0 5px; padding: 5px"
        >
          <div
            style="
              background-image: url('https://i.pinimg.com/474x/41/6d/4a/416d4ab5cec6c569269e2a9d3e650c32.jpg');
              background-position: center center;
              background-size: cover;
              width: 100%;
              height: 100%;
              border-radius: 15px;
            "
          ></div>
        </a-col>
        <a-col
          class="card"
          :span="7"
          style="height: 95%; background: white; margin: 0 5px; padding: 5px"
        >
          <div
            style="
              background-image: url('https://i.pinimg.com/originals/72/6f/94/726f94d6da52eeba5dd324251ef61c8a.gif');
              background-position: center center;
              width: 100%;
              height: 100%;
              border-radius: 15px;
            "
          ></div>
          <!--          <MusicEchart style="height: 100%" />-->
        </a-col>
      </a-row>
    </div>
    <a-divider />
    <div class="section" style="width: 100vw; height: 10vh; padding: 0 0">
      <div
        style="
          position: absolute;
          bottom: 0;
          height: 10vh;
          width: 100vw;
          text-align: center;
        "
      >
        只要坚持不懈，嘲笑你的人，迟早会被你笑死。 本站总访问量26895次
        本站访客数23589人次 Copyright © 2024 西魏陶渊明
      </div>
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
    createObserver('.card');
    ballAnimate();
  });

  onUnmounted(() => {
    titleObServer.value?.disconnect();
    titleObServer.value = null;
    moveObServer.value?.disconnect();
    moveObServer.value = null;
  });
</script>

<style scoped lang="less">
  /* 针对WebKit浏览器（Chrome, Safari等） */
  .custom-scrollbar::-webkit-scrollbar {
    //display: none;
    scroll-behavior: smooth;
  }

  #container {
    background-image: radial-gradient(
      circle farthest-corner at 100% 50%,
      #d1d3d6,
      #fcfcfd
    );
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
