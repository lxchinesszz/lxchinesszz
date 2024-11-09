<template>
  <div id="knowledges">
    <div v-for="(post, index) in knowledges?.items" :key="index">
      <div>
        <a-space align="baseline">
          <a-typography-title :heading="3">
            {{ post.text }}
          </a-typography-title>
        </a-space>
      </div>
      <a-grid
        :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }"
        :col-gap="24"
        :row-gap="12"
      >
        <a-grid-item
          class="lib"
          v-for="(lib, lib_index) in post.items"
          :key="lib.text"
        >
          <a :href="lib.link" target="_blank">
            <div
              style="display: flex; flex-direction: row; align-items: center"
            >
              <a-avatar
                shape="square"
                :style="{
                  backgroundColor: computeColor(lib_index),
                  verticalAlign: 'middle',
                }"
              >
                {{ getFirstTwoChars(lib.text) }}
              </a-avatar>
              <a-typography-title
                :heading="6"
                style="margin-left: 5px; margin-bottom: 20px"
                >{{ lib.text.toUpperCase() }}
              </a-typography-title>
            </div>
            <div>{{ lib.desc || lib.title }}</div>
          </a>
        </a-grid-item>
      </a-grid>
    </div>
  </div>
</template>

<script setup>
  import { useData } from 'vitepress';
  import { onMounted, ref } from 'vue';

  const { theme } = useData();

  const knowledges = ref();

  const t = ref();

  const colors = ['#4d4d4d', '#fe3d40', '#e1b62e', '#4673c6'];
  const computeColor = (index) => {
    return colors[index % 4];
  };

  const getFirstTwoChars = (text) => {
    // 检查文本长度是否至少有两个字符
    if (typeof text === 'string' && text.length >= 2) {
      return text.slice(0, 2);
    } else {
      // 如果文本不足两个字符，直接返回输入的内容
      return text;
    }
  };

  onMounted(() => {
    t.value = theme.value['nav'][5];
    knowledges.value = theme.value['nav'][5];
  });

  const posts = [
    {
      category: '知识库',
      category_desc: '超级知识库',
      list: [
        {
          title: 'A',
          link: '',
          desc: '',
        },
        {
          title: 'B',
          link: '',
          desc: '',
        },
        {
          title: 'C',
          link: '',
          desc: '',
        },
        {
          title: 'D',
          link: '',
          desc: '',
        },
      ],
    },
  ];
</script>

<style scoped lang="less">
  #knowledges {
    width: 100%;
  }

  .lib {
    //background: white;
    padding: 15px;
    width: 20vw;
    border-radius: 5px;
    // 鼠标样式
    cursor: pointer;

    background-color: rgba(255, 255, 255,1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-border-radius: 12px;
  }

  .lib:hover {
    transform: translateY(5px);
    transition: transform 0.3s ease-in;
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
</style>
