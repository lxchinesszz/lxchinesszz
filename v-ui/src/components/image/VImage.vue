<template>
  <img v-bind="attrs" ref="imgRef" :src="props.src" />
</template>

<script setup lang="ts">
  import { onMounted, ref, useAttrs } from 'vue';

  const props = defineProps({
    src: String,
  });

  const emits = defineEmits(['success', 'error']);

  const imgRef = ref();

  const attrs = useAttrs();

  onMounted(() => {
    if (imgRef.value) {
      imgRef.value.onload = function() {
        console.log('图片加载成功！');
        // 在这里执行图片加载成功后的操作
        emits('success');
      };

      imgRef.value.onerror = function() {
        console.log('图片加载失败！');
        emits('error');
      };
    }
  });
</script>

<style scoped></style>
