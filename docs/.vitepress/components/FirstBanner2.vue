<template>
  <div
    class="home"
    style="
      display: flex;
      flex-direction: row;
      /*background: url('webstorm.svg') scroll no-repeat left calc(50% + 386px)*/
      /*  top -104px / 2200px 1000px;*/
    "
  >
    <div
      class="move"
      style="
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      "
    >
      <a-space direction="vertical" style="margin-top: -5vw" size="medium">
        <h1 style="font-size: 3.5rem; font-weight: bold">Devs 西魏陶渊明</h1>
        <a-typography-text>
          用于帮助收集、整理和管理日常生活、工作中的各种信息。一个存储笔记的地方。
        </a-typography-text>
        <a-space>
          <a-avatar-group>
            <a-avatar image-url="https://g.csdnimg.cn/static/logo/favicon32.ico"
              >CSDN
            </a-avatar>
            <a-avatar
              :style="{ backgroundColor: '#ffffff' }"
              image-url="https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico"
              >阿里云博客专家
            </a-avatar>
            <a-avatar
              :style="{ backgroundColor: '#ffffff' }"
              image-url="https://p1.itc.cn/images01/20231015/7ea0bc9819fd4546a32067f2da0fccdd.jpeg"
              object-fit="cover"
              >华为云享专家
            </a-avatar>
            <a-avatar
              image-url="https://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico"
              object-fit="cover"
              >头条
            </a-avatar>
          </a-avatar-group>
          活跃媒体平台
        </a-space>
        <BannerBtn4 />
      </a-space>
    </div>
    <div
      style="
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      "
    >
      <MacWindow class="move" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import MacWindow from './MacWindow.vue';
  import { onMounted, onUnmounted, ref } from 'vue';
  import BannerBtn4 from './button/BannerBtn4.vue';

  const moveObServer = ref<IntersectionObserver>(null);

  const startObServer = () => {
    if (!moveObServer.value) {
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
      document.querySelectorAll('.move').forEach((el) => {
        moveObServer.value.observe(el);
      });
    }
  };

  const closeObServer = () => {
    moveObServer.value?.disconnect();
  };

  onMounted(() => {
    startObServer();
  });

  onUnmounted(() => {
    closeObServer();
  });
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }

  .move {
    transform: translateY(100px) scale(0.95);
    transition:
      opacity 0.6s ease,
      transform 0.3s ease;
  }

  .move.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
</style>
