<template>
  <div
    class="finance"
    style="display: flex; justify-content: center; align-items: center"
  >
    <a-row style="width: 100%; height: 70vh">
      <a-col :span="10" style="height: 100%">
        <a-grid :cols="1" :row-gap="5" style="height: 100%; padding: 0 15px">
          <a-grid-item class="fms_table move">
            <div class="fms_table_title">利润表</div>
          </a-grid-item>
          <a-grid-item class="fms_table move">
            <div class="fms_table_title">资产负债表</div>
          </a-grid-item>
          <a-grid-item class="fms_table move">
            <div class="fms_table_title">现金流量表</div>
          </a-grid-item>
        </a-grid>
      </a-col>
      <a-col :offset="1" :span="12" style="height: 100%">
        <a-grid :cols="1" :row-gap="10" style="height: 100%; padding: 0 0">
          <a-grid-item class="move" style="padding: 0; border-radius: 15px">
            <div
              style="
                background-color: #ff6f3c;
                height: 100%;
                border-radius: 15px;
                border: white 5px solid;
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <a-typography-title
                :heading="6"
                style="color: white; padding: 15px"
              >
                <!--                <a-typography-paragraph style="color: white; padding: 15px">-->
                从财务视角出发，重新审视其业务逻辑。构建一套机制，能够将企业的各项业务活动无缝对接至财务框架中，通过详尽记录并分析其收支状况，从而为企业决策提供坚实的数据支撑，确保每一步战略都紧密围绕盈利目标展开。
                <!--                </a-typography-paragraph>-->
              </a-typography-title>
            </div>
          </a-grid-item>
          <a-grid-item class="move" style="padding: 0; border-radius: 15px">
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                border: white 5px solid;
                background-color: #155263;
                color: white;
                border-radius: 15px;
                height: 100%;
                font-weight: bold;
                font-size: 3rem;
              "
            >
              资产 = 负债
              <span style="color: #fe6f3d; margin: 0.5rem">+</span> 所有者权益
            </div>
          </a-grid-item>
        </a-grid>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';

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
  .finance {
    width: 100%;
    height: 100%;
  }

  .fms_table {
    height: 100%;
    border-radius: 15px;
    border: white 5px solid;
    text-align: center;
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    color: white;
    perspective: 1000px; /* 为父元素添加透视效果 */
  }

  .fms_table:nth-child(1) {
    background: #d6de51;
    //background-image: url('https://img.springlearn.cn/blog/744156a16dfbb0a090a0fa3548984b2c.png');
    //background-position: top center;
  }

  .fms_table:nth-child(2) {
    background: #ffc93c;
    //background-image: url('https://img.springlearn.cn/blog/5d621a7e166576de3a354c576e3691ea.png');
    //background-position: top center;
  }

  .fms_table:nth-child(3) {
    background: #ff9a3c;
    //background-image: url('https://img.springlearn.cn/blog/441482c8abb85b105133140a650968b9.png');
    //background-position: top center;
  }

  .fms_table_title {
    font-size: 3rem;
    transform-style: preserve-3d;
    transform: perspective(1000px) translateZ(20px); /* 旋转子元素 */
    text-shadow: 0 3px 17px rgba(0, 0, 0, 0.035);
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

  .move.visible:hover {
    transform: translateY(-5px);
    scale: 1;
    box-shadow:
      0px 3.1px 17.7px rgba(0, 0, 0, 0.035),
      0px 25px 141px rgba(0, 0, 0, 0.07);
    transition:
      box-shadow 0.2s linear,
      transform 0.2s linear;
  }
</style>
