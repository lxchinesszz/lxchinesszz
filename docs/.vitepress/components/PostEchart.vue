<template>
  <div id="container" style="overflow: hidden">
    <echarts v-if="echartsFlag" :option="option_column" class="echarts"></echarts>
  </div>
</template>

<script setup lang="ts">
import {data as posts} from '../theme/posts.data.js';
import {onMounted, onUnmounted, ref, reactive} from 'vue';
import 'echarts';
import anime from 'animejs';

import { defineClientComponent } from 'vitepress';

const echarts = defineClientComponent(() => {
  return import('vue-echarts');
});


const categoryUrlListMap = ref<Map<string, string[]>>();

const categoryCountMap = ref<Map<string, number>>();

const fetchDir = (path: string) => {
  // 获取下一级目录
  const parts = path.split('/');
  return parts.length > 2 ? parts[2] : null; // 确保有下一级目录
};


type WordNode = {
  name: string,
  value: number;
}

const datasetRef = reactive<WordNode[]>([]);

const animeRef = ref();

const echartsFlag = ref(false);

const replay = () => {
  echartsFlag.value = true;
  console.log('replay');
  if (animeRef.value) {
    animeRef.value = anime({
      targets: '.echarts',
      autoplay: false,
      opacity: 1,
      scale: [0, 1],
      easing: 'spring',
      duration: 1000,
    });
    animeRef.value.play();
  }
};

defineExpose({replay});


const option_column = reactive({
  title: {
    show: false,
    text: '内容统计',
    textAlign: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b} <br/> 数量: {c} 占比:({d}%)',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Document Count',
      type: 'pie',
      radius: ['40%', '70%'],
      padAngle: 1,
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: true,
        formatter: '{b} {d}%',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        {value: 1048, name: 'Search Engine'},
        {value: 735, name: 'Direct'},
        {value: 580, name: 'Email'},
        {value: 484, name: 'Union Ads'},
        {value: 300, name: 'Video Ads'},
      ],
    },
  ],
});

onMounted(() => {
  categoryUrlListMap.value = new Map<string, string[]>();
  categoryCountMap.value = new Map<string, number>();
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    if (!post.url.endsWith('html')) {
      continue;
    }
    let categoryName = fetchDir(post.url || '未定义');
    // let categoryName = post.category || '未定义';
    let urlList: string[] = categoryUrlListMap.value.get(categoryName) || [];
    urlList.push(post.url);
    categoryUrlListMap.value.set(categoryName, urlList);
  }
  const l = [];
  categoryUrlListMap.value.forEach((v, k) => {
    categoryCountMap.value.set(k, v.length);
    l.push({
      name: k.toUpperCase(),
      value: v.length,
    });
    datasetRef.push({
      value: v.length,
      name: k,
    });
  });
  option_column.series[0].data = l;
  posts.map(t => {
    console.log(`${t.title}--->${t.url}`);
  });
});
onUnmounted(() => {
  categoryUrlListMap.value = null;
});


</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.echarts {
  background: white;
}
</style>
