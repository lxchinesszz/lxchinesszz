<template>
  <div class="skillWrapper">
    <a-grid :colGap="12" :rowGap="16" style="width: 100%">
      <a-grid-item
        class="move"
        :span="8"
        v-for="(item, index) in skills"
        :key="index"
      >
        <div class="card">
          <a-space direction="vertical" fill>
            <a-typography-title :heading="5">
              {{ item.title }}
            </a-typography-title>
            <a-progress
              :percent="item.scale / 100"
              :color="{
                '0%': 'rgb(var(--primary-6))',
                '100%': 'rgb(var(--success-6))',
              }"
            />
            <a-space wrap>
              <a-tag
                v-for="(tag, index) in item.uses"
                :key="index"
                :color="tag.color"
              >
                {{ tag.name }}
              </a-tag>
            </a-space>
          </a-space>
        </div>
      </a-grid-item>
    </a-grid>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';

  type Tag = {
    color?: string;
    name: string;
  };

  type Skill = {
    title: string;
    desc: string;
    scale?: number;
    uses?: Tag[];
  };
  const skills = ref<Skill[]>([
    {
      title: 'Java',
      desc: '',
      scale: 99,
      uses: [
        {
          name: '支付系统',
        },
        {
          name: '供应链系统',
        },
        {
          name: '财务系统',
        },
      ],
    },
    {
      title: 'Python',
      desc: '',
      scale: 99,
      uses: [
        {
          name: '财务数据分析',
        },
        {
          name: '爬虫',
        },
        {
          name: 'AI训练',
        },
      ],
    },
    {
      title: 'JavaScript',
      desc: '',
      scale: 99,
      uses: [
        {
          name: '前端逆向',
        },
        {
          name: '简单脚本',
        },
      ],
    },
    {
      title: 'NodeJS',
      desc: '',
      scale: 99,
      uses: [
        {
          name: 'IO System',
        },
        {
          name: '爬虫脚本',
        },
        {
          name: '跨平台B端软件',
        },
      ],
    },
    {
      title: 'Vue/React',
      desc: '',
      scale: 99,
      uses: [
        {
          name: 'Web系统',
        },
        {
          name: '小程序',
        },
        {
          name: 'Blog',
        },
      ],
    },
  ]);

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
  .skillWrapper {
    width: 100%;
    position: relative;
  }

  .card {
    border-radius: 15px;
    background: linear-gradient(to right bottom, #fcfcfd 20%, #f2f2f3 150%);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
    padding: 0 15px;
    width: 100%;
    color: currentColor;
  }

  .card:hover {
    transform: translateY(-5px);
    scale: 1;
    box-shadow:
      0px 3.1px 17.7px rgba(0, 0, 0, 0.035),
      0px 25px 141px rgba(0, 0, 0, 0.07);
    transition:
      box-shadow 0.2s linear,
      transform 0.2s linear;
  }

  .move {
    transition:
      opacity 0.6s ease,
      transform 0.3s ease;
    transform: translateY(100px) scale(0.95);
  }

  .visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition:
      opacity 0.6s ease,
      transform 0.3s ease;
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
</style>
