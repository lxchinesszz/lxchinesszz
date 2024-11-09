<template>
  <div id="container">
    <echarts :option="option_column" class="echarts"></echarts>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
  import 'echarts';
  import { defineClientComponent } from 'vitepress';

  const echarts = defineClientComponent(() => {
    return import('vue-echarts');
  });

  const learn = [100, 95, 95, 95, 90, 80, 70];
  const game = [0, 10, 50, 50, 40, 10, 5];
  const music = [0, 5, 5, 5, 5, 5, 5];
  const coding = [0, 80, 50, 40, 20, 10, 5];
  const run = [0, 5, 10, 20, 30, 30, 20];

  const option_column = reactive({
    radar: {
      shape: 'circle',
      indicator: [
        { name: '周杰伦', max: 100 },
        { name: '许嵩', max: 100 },
        { name: '小岛大浪吹', max: 100 },
        { name: '听风的蚕', max: 100 },
        { name: '静思有我', max: 100 },
        { name: '民谣', max: 100 },
      ],
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [50, 60, 90, 80, 90, 40],
            name: 'Allocated Budget',
          },
        ],
      },
    ],
  });

  onMounted(() => {
    let canvas_list: HTMLCanvasElement[] = document.getElementsByTagName(
      'canvas',
    ) as HTMLCanvasElement[];
    for (let i = 0; i < canvas_list.length; i++) {
      let canvas: HTMLCanvasElement = canvas_list[i];
      console.log(canvas);
      let ctx = canvas.getContext('2d');
      //设置阴影模糊级数
      ctx.shadowBlur = 0;
      //设置X轴偏移量
      ctx.shadowOffsetX = 0;
      //设置Y轴偏移量
      ctx.shadowOffsetY = 0;
      //设置阴影颜色
      ctx.shadowColor = 'black';
      ctx.fillStyle = 'red';
    }
  });
</script>

<style scoped>
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .echarts {
    background: white;
  }
</style>
