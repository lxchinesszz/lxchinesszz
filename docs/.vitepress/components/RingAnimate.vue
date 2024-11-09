<template>
  <main class="main" ref="myElement">
    <div class="big_path">
      <div class="big_avatar" v-for="(imgUrl,index) in without" :key="imgUrl"
           :style="{animationDelay: `-${index * bigSpeed}s`, animationDuration: `${time / 1000}s`}">
        <img :src="imgUrl" draggable="false"/>
      </div>
      <div class="path" style="display: flex;justify-content: center;align-items: center">
        <div style="display: flex;justify-content: center;align-items: center;">
          <slot/>
        </div>
        <div class="avatar" v-for="(imgUrl,index) in interior" :key="imgUrl" :style="{animationDelay: `-${index * smallSpeed}s`
     , animationDuration: `${time / 1000}s`
        }">
          <img :src="imgUrl" draggable="false"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {computed, onMounted, PropType, ref} from 'vue';

const props = defineProps({
  typing: Boolean,
  text: String,
  /**
   * 动画时长
   */
  duration: {
    type: Number,
    default: 10500,
  },
  /**
   * 内圆
   */
  interior: {
    type: Object as PropType<string[]>,
    default: ['https://www.qzq.at/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMicrosoft_Edge_logo.0bbb06ae.png&w=640&q=75',
      'https://www.qzq.at/_next/static/media/chrome-logo.c00ccd4f.svg'],
  },
  /**
   * 外圆
   */
  without: {
    type: Object as PropType<string[]>,
    default: ['https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
      'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
      'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
      'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png'],
  },
});

const myElement = ref(null);

let time = props.duration;

let smallLength = props.interior.length;
// 平均步长
let smallSpeed = (time / smallLength) / 1000;

let bigLength = props.without.length;

let bigSpeed = (time / bigLength) / 1000;

function calculateOuterCircleDuration(innerDuration, innerRadius, outerRadius) {
  // 根据半径比例计算外圆的运动时长
  const outerDuration = innerDuration * (outerRadius / innerRadius);
  return outerDuration;
}

let bigDuration = ref();


computed(() => {
  return props.interior.map(t => {
    return {
      img: t,
      delay: `-{}`,
    };
  });
});

const bigWidth = ref();

const bigRadioPx = ref();

const smallRadioPx = ref();

onMounted(() => {
  const element = myElement.value;
  const width = element.clientWidth - 50;
  // 大圆直径
  bigWidth.value = `${width}px`;
  // 大圆半径
  bigRadioPx.value = `${width / 2}px`;
  // 小圆半径
  smallRadioPx.value = `${width / 2 / 2}px`;

  bigDuration.value = `${calculateOuterCircleDuration(time, width / 2 / 2, width / 2) / 1000}s`;
});
</script>

<style scoped lang="less">
main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.big_path {
  width: v-bind(bigWidth);
  height: v-bind(bigWidth);
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  display: flex;
  border: 1px dashed #858586;
  justify-content: center;
  align-items: center;
}

.path {
  width: v-bind(bigRadioPx);
  height: v-bind(bigRadioPx);
  border-radius: 50%;
  position: relative;
  border: 1px dashed #696868;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 52px;
  margin: auto;
  background: #FFF;
}

img {
  border-radius: 50%;
}

.big_avatar {
  width: 50px;
  position: absolute;
  animation: circular-smooth-spin2 7.5s infinite linear;
  animation-play-state: running;
}

.big_avatar > img {
  width: inherit;
  border-radius: 50%;
  overflow: hidden;
}

.avatar {
  width: 50px;
  position: absolute;
  animation-name: circular-smooth-spin;
  animation-play-state: running;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.avatar > span {
  font-weight: 500;
  position: absolute;
  white-space: nowrap;
  top: -50%;
  left: 50%;
  padding: 3px 12px;
  opacity: 0;
  transform: scale(0);
  transition: opacity, transform .8s;
  transform-origin: 0 bottom;
}

.avatar > img {
  width: inherit;
  border-radius: 50%;
  overflow: hidden;
  user-select: none; /* 禁止选中图片 */
  -webkit-user-select: none; /* 兼容 Webkit 内核的浏览器 */
  -moz-user-select: none; /* 兼容 Firefox */
  -ms-user-select: none; /* 兼容旧版本 IE */
}

//.path:hover .avatar {
//  animation-play-state: paused;
//}

//.path:hover .avatar > span {
//  opacity: 1;
//  transform: scale(1);
//  transition: opacity, transform .8s;
//}

.avatar:nth-of-type(2) {
  animation-delay: -1.5s;
}

.avatar:nth-of-type(3) {
  animation-delay: -3s;
}

.avatar:nth-of-type(4) {
  animation-delay: -4.5s;
}

.avatar:nth-of-type(5) {
  animation-delay: -6s;
}

@keyframes circular-smooth-spin {
  from {
    transform: rotate(0turn) translateY(v-bind(smallRadioPx)) rotate(1turn)
  }
  to {
    opacity: 1;
    transform: rotate(1turn) translateY(v-bind(smallRadioPx)) rotate(0turn)
  }
}

@keyframes circular-smooth-spin2 {
  from {
    transform: rotate(1turn) translateY(v-bind(bigRadioPx)) rotate(0turn)
  }
  to {
    opacity: 1;
    transform: rotate(0turn) translateY(v-bind(bigRadioPx)) rotate(1turn)
  }
}
</style>
