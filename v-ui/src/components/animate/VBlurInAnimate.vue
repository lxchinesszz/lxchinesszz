<template>
  <div id="container" class="text-blurry">
    Wolrd
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .text-blurry {
    text-align: center;
    color: black;
    animation: blurAnimation 1s; /* 添加动画 */
  }

  /* 定义模糊动画 */
  @keyframes blurAnimation {
    0% {
      text-shadow: 0 0 0 rgba(0, 0, 0, 0); /* 开始时清晰 */
      opacity: 1; /* 清晰 */
    }
    50% {
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
      0 0 10px rgba(0, 0, 0, 0.4),
      0 0 15px rgba(0, 0, 0, 0.3); /* 结束时增加模糊效果 */
      opacity: 0.5; /* 半透明 */
    }
    100% {
      text-shadow: 0 0 0 rgba(0, 0, 0, 0); /* 最后清晰 */
      opacity: 1; /* 清晰 */
    }
  }
</style>
