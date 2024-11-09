<template>
  <div ref="boxRef" class="animate__box" @click="replay">
    <slot />
  </div>
</template>

<!--VUE组件-->
<script setup lang="ts">
  // https://animate.style/
  /**
   * 这是一个Vue组件，用于显示欢迎信息。
   * @vue fds
   * @component sf
   * @name v-animate
   * @prop {String} message - 要显示的欢迎信息。
   * @event replay 执行动画
   */
  import { computed, onMounted, onUnmounted, PropType, ref, useId } from 'vue';
  import { AnimateOption } from '@/components/animate/types';

  /**
   * animate.css 组件的封装使用
   */
  const props = defineProps({
    /**
     * 动画样式
     */
    animate: {
      type: Object as PropType<AnimateOption>,
      default: {
        type: 'fadeIn',
        duration: 1,
        disabled: false,
        intersecting: false,
      },
    },
  });

  const boxRef = ref();

  const id = useId();

  const classId = `animate__box`;

  /**
   * 执行动画
   */
  const replay = () => {
    const classNames = boxRef.value.className.split(' ');
    classNames.push(classId);
    boxRef.value.className = classNames.join(' ');
  };

  const removeAnimate = () => {
    // 假设我们要移除的类名是 'initial-class'
    const classNames = boxRef.value.className.split(' ');
    const filteredClasses = classNames.filter(
      (className: string) => className !== 'animate__box',
    );
    boxRef.value.className = filteredClasses.join(' ');
  };

  const observer = ref<IntersectionObserver>();

  onUnmounted(() => {
    if (observer.value) {

      observer.value.disconnect();
      observer.value = null;
    }

  });

  onMounted(() => {
    boxRef.value.addEventListener('animationend', function() {
      removeAnimate();
    });
    if (props.animate.intersecting) {
      // 使用 Intersection Observer 来检测卡片的可见性
      observer.value = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            replay();
          }
        });
      }, {
        threshold: 0.1, // 当 10% 的卡片可见时触发
      });
      // 观察所有卡片
      document.querySelectorAll(`.${classId}`).forEach(card => {
        observer.value.observe(card);
      });
    }
  });

  defineExpose({ replay });

  const addAnimatePrefixIfNeeded = (className: string) => {
    // 检查className是否以'animate__'开头
    if (className.startsWith('animate__')) {
      // 如果不是，则添加'animate__'前缀
      return className.replace('animate__', '');
    }
    // 如果是，则直接返回原字符串
    return className;
  };

  const animate = computed(() => {
    if (props.animate.disabled) {
      return '';
    }
    return addAnimatePrefixIfNeeded(props.animate.type);
  });

  const duration = computed(() => {
    if (props.animate.disabled) {
      return '';
    }
    return `${props.animate.duration ?? 1}s`;
  });


</script>

<style scoped lang="less">
  .animate__box {
    animation: v-bind('animate');
    animation-duration: v-bind('duration');
  }
</style>
