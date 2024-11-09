<template>
  <div id="container2">
    <!--      采购，履约，仓网-->
    <a-grid
      :colGap="12"
      :rowGap="16"
      style="width: 100%"
    >
      <a-grid-item
        class="move"
        :span="8"
        v-for="(item, index) in scmSystems"
        :key="index"
      >
        <div class="card">
          <a-space direction="vertical" fill>
            <div
              style="display: flex; justify-content: start; align-items: center"
            >
              <a-avatar
                :size="40"
                shape="square"
                style="background-color: #1d60f4"
              >
                {{ item.name }}
              </a-avatar>
              <h1
                style="
                  color: #1d60f4;
                  font-weight: bold;
                  margin-left: 5px;
                  scale: 1;
                "
              >
                {{ item.name }}
              </h1>
            </div>

            <a-typography-paragraph> {{ item.desc }}</a-typography-paragraph>
            <a-space size="mini" wrap>
              <span>业务视角:</span>
              <a-tag v-for="(tag, index) in item.scm" :key="index">
                {{ tag }}
              </a-tag>
            </a-space>

            <a-space size="mini" wrap>
              <span>财务视角:</span>
              <a-tag v-for="(tag, index) in item.fms" :key="index">
                {{ tag }}
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

  type ScmSystem = {
    name: string;
    desc: string;
    scm: string[];
    fms: string[];
  };

  const scmSystems = ref<ScmSystem[]>([
    {
      name: 'PMS',
      desc: '采购管理系统',
      scm: ['采购下单', '到货通知', '...'],
      fms: ['账单预付', '供应商结算'],
    },
    {
      name: 'OMS',
      desc: '订单管理系统',
      scm: ['公域拉单', 'Hold单', '履约拆合单'],
      fms: ['预售收入', '销售收入'],
    },
    {
      name: 'TMS',
      desc: '物流管理系统',
      scm: ['物流下单', '电子面单', '订阅轨迹', '物流跟踪'],
      fms: ['物流费用', '平台预充值'],
    },
    {
      name: 'WMS',
      desc: '仓库管理系统',
      scm: ['入库', '出库', '调拨', '盘点', '组装', '抽检'],
      fms: ['仓库费用', '存货成本'],
    },
    {
      name: 'FMS',
      desc: '财务管理系统',
      scm: ['预算管理', '流程管理', '会计分录', '日记账'],
      fms: ['收入', '成本', '费用', '资产', '负债'],
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
  #container2 {
    width: 100%;
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
