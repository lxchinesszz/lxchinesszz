<template>
  <a-button
    ref="btn"
    v-bind="attrs"
    :loading="loading"
    @click="ck"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </a-button>
</template>

<!--抖动按钮-->
<script lang="ts" setup>
  import { ref, useAttrs, watch } from 'vue';

  const props = defineProps({
    shake: Boolean,
    loading: Boolean,
    shakeColor: {
      type: String,
      default: 'red',
    },
  });

  const attrs = useAttrs();

  const emits = defineEmits(['click']);

  const btn = ref();

  const ck = () => {
    emits('click');
  };

  const addShakeCss = (el: any) => {
    el.style.transition =
      'background-color 0.82s cubic-bezier(.36,.07,.19,.97) both';
    el.style.animation = 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both';
    el.style.backgroundColor = props.shakeColor;
    el.addEventListener('animationend', () => {
      el.style.animation = '';
      el.style.backgroundColor = '';
    });
  };

  watch(
    () => props.shake,
    () => {
      const el = btn.value.$el;
      addShakeCss(el);
    },
  );

  const shake = () => {
    addShakeCss(btn.value.$el);
  };

  // 暴露给外部组件调用
  defineExpose({ shake });
</script>

<style scoped>
  /* 全局样式中添加抖动动画 */
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

</style>
