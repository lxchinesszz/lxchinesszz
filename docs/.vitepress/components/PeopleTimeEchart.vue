<template>
  <div id="container2">
    <VEcharts :option="option_column"></VEcharts>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import * as echarts from 'echarts';
  import { defineClientComponent } from 'vitepress';

  const VEcharts = defineClientComponent(() => {
    return import('vue-echarts');
  });

  const learn = [100, 95, 95, 95, 90, 80, 70];
  const game = [0, 10, 50, 50, 40, 10, 5];
  const music = [0, 5, 5, 5, 5, 5, 5];
  const coding = [0, 80, 50, 40, 20, 10, 5];
  const run = [0, 5, 10, 20, 30, 30, 20];

  const option_column = reactive({
    // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 0,
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['1Year', '2Year', '3Year', '4Year', '5Year', '6Year', '7Year'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    graphic: {
      type: 'rect',
    },
    series: [
      {
        name: '学习',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 191, 0)',
            },
            {
              offset: 1,
              color: 'rgb(224, 62, 76)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: learn,
      },
      {
        name: '游戏',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 0, 135)',
            },
            {
              offset: 1,
              color: 'rgb(135, 0, 157)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: game,
      },
      {
        name: '音乐',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(55, 162, 255)',
            },
            {
              offset: 1,
              color: 'rgb(116, 21, 219)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: music,
      },
      {
        name: '编码',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)',
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: coding,
      },
      {
        name: '游玩',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {
          opacity: 0.8,
          // color: 'rgb(255, 191, 0)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)',
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: run,
      },
    ],
  });
</script>

<style scoped>
  #container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    box-shadow: none !important;
  }

  :deep(.echarts) {
    box-shadow: none;
  }
</style>
