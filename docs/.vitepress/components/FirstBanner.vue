<template>
  <div class="big_home">
    <div class="logo" style="cursor: pointer" @click="gotoNav('https://java.springlearn.cn')">个人博客站</div>
    <div class="home" style="">
      <div
        class="move"
        style="
          flex: 1;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          /*background: cyan;*/
        "
      >
        <a-space direction="vertical" style="margin-top: -5vw" size="medium">
          <h1 style="font-size: 3.5rem; color: #3d3f45; font-weight: bold">
            Devs 西魏陶渊明
          </h1>
          <a-typography-text>
            用于帮助收集、整理和管理日常生活、工作中的各种信息。一个存储笔记的地方。
          </a-typography-text>
          <a-space>
            <a-avatar-group>
              <a-avatar
                image-url="https://g.csdnimg.cn/static/logo/favicon32.ico"
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
          <a-space>
            <BannerBtn4 @click="gotoNav('/post/java/')"/>
          </a-space>
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
        <MacWindow />
      </div>
    </div>
    <div class="xiamian">
      <div class="rk" @click="gotoNav('/post/guide/')">
        <a-avatar :size="48" shape="square" style="background-color: #4e4e4e">
          JS
        </a-avatar>
        <a-typography-title :heading="6">
          <a href="/post/guide/">
            <span class="rk_title">前台技术</span>
          </a>
        </a-typography-title>
        <a-typography-text type="secondary">
          聚焦前端开发新趋势，探讨UI设计、交互体验与性能优化的最佳实践。
        </a-typography-text>
      </div>
      <div class="rk" @click="gotoNav('/post/java/')">
        <a-avatar :size="48" shape="square" style="background-color: #ff3d40">
          Java
        </a-avatar>
        <a-typography-title :heading="6">
          <a href="/post/java/">
            <span class="rk_title">后台技术</span>
          </a>
        </a-typography-title>
        <a-typography-text type="secondary">
          深入解析服务器端开发，涵盖API设计、数据库管理与高并发架构的技术要点。
        </a-typography-text>
      </div>
      <div class="rk" @click="gotoNav('/post/python/')">
        <a-avatar
          :size="48"
          shape="square"
          style="background-color: #414347"
          :image-url="withBase('py.png')"
        >
          Python
        </a-avatar>
        <a-typography-title :heading="6">
          <a href="/post/python/">
            <span class="rk_title">数据处理</span>
          </a>
        </a-typography-title>
        <a-typography-text type="secondary">
          数据清洗技巧，实现数据高效分析与应用。
        </a-typography-text>
      </div>
      <div class="rk" @click="gotoNav('/post/ai/')">
        <a-avatar :size="48" shape="square" style="background-color: #e1b62e">
          AI
        </a-avatar>
        <a-typography-title :heading="6">
          <a href="/post/ai/"> <span class="rk_title">AI笔记</span></a>
        </a-typography-title>
        <a-typography-text type="secondary">
          聚焦人工智能算法、机器学习模型及其实际应用场景，探索AI技术前沿。
        </a-typography-text>
      </div>
      <div class="rk" @click="gotoNav('/post/design/')">
        <a-avatar :size="48" shape="square" :imageUrl="withBase('js.png')">
        </a-avatar>
        <a-typography-title :heading="6">
          <a href="/post/design/">
            <span class="rk_title">生活随笔</span>
          </a>
        </a-typography-title>
        <a-typography-text type="secondary">
          分享日常所见所感，记录生活点滴，思考人生趣事与成长感悟。
        </a-typography-text>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import BannerBtn4 from './button/BannerBtn4.vue';
  import MacWindow from './MacWindow.vue';
  import { withBase, useData } from 'vitepress';

  const { theme } = useData();

  const gotoNav = (link: string) => {
    window.open(link, '_blank');
  };

  onMounted(() => {});

  onUnmounted(() => {});
</script>

<style scoped lang="less">
  .big_home {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .logo {
    position: absolute;
    margin: 10px auto;
    padding: 5px 15px;
    color: #3d3f45;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(10px);
    border: 0px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 1px 2px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 1px 2px 0px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
  }

  .home {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    /*background: red;*/
    // @ts-ignore
    background: url('webstorm.svg') scroll no-repeat left calc(50% + 286px) top -104px /
      2200px 1000px;
  }

  .xiamian {
    display: flex;
    flex-direction: row;
  }

  .rk {
    height: 25vh;
    width: 25%;
    margin: 5px;
    border-radius: 35px;
    padding: 25px;
    transition: all 0.3s ease;
    position: relative;
    cursor: pointer;

    .rk_title {
      font-size: 1.25rem;
      font-weight: 600;
      color: white;
      margin: 0;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    }
  }

  .rk:hover {
    transform: translateY(-5px);
  }

  :deep(.rk > .arco-typography) {
    color: white;
  }

  .rk::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    //background: red;
    border-radius: 35px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15),
      rgba(0, 0, 0, 0.05)
    );
    pointer-events: none;
  }

  .rk:nth-child(1) {
    //background: linear-gradient(to bottom right, #5dc8df, #2ec6e6);
    //box-shadow: 0 10px 20px rgba(0, 188, 212, 0.3);
    background: linear-gradient(135deg, #00d2ff, #00bcd4);
    box-shadow:
      0 10px 20px rgba(0, 188, 212, 0.3),
      0 6px 6px rgba(0, 188, 212, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  }

  .rk:nth-child(2) {
    //background: linear-gradient(to bottom right, #585c60, #252729);
    //box-shadow: 0 10px 20px rgba(44, 44, 46, 0.3);
    background: linear-gradient(135deg, #3a3a3e, #2c2c2e);
    box-shadow:
      0 10px 20px rgba(44, 44, 46, 0.3),
      0 6px 6px rgba(44, 44, 46, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  }

  .rk:nth-child(3) {
    //background: linear-gradient(to bottom right, #f6aaad, #fc737a);
    //box-shadow: 0 10px 20px rgba(255, 123, 123, 0.3);
    background: linear-gradient(135deg, #ff9a9e, #ff7b7b);
    box-shadow:
      0 10px 20px rgba(255, 123, 123, 0.3),
      0 6px 6px rgba(255, 123, 123, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  }

  .rk:nth-child(4) {
    //background: linear-gradient(to bottom right, #3d6fc3, #0d55cd);
    //box-shadow: 0 10px 20px rgba(66, 133, 244, 0.3);
    background: linear-gradient(135deg, #4e8ef7, #4285f4);
    box-shadow:
      0 10px 20px rgba(66, 133, 244, 0.3),
      0 6px 6px rgba(66, 133, 244, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  }

  .rk:nth-child(5) {
    //background: linear-gradient(to bottom right, #df9a40, #e58f1f);
    //box-shadow: 0 10px 20px rgba(255, 149, 0, 0.3);
    background: linear-gradient(135deg, #ffac38, #ff9500);
    box-shadow:
      0 10px 20px rgba(255, 149, 0, 0.3),
      0 6px 6px rgba(255, 149, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
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
