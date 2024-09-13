<template>
  <div class="box">
    <div class="icon" style="margin-bottom: 1.5rem !important">
      <img class="home-number-icon" alt="" :src="props.src" />
    </div>
    <div class="h1">
      <span :style="{ color: props.color }">
        {{ props.title }}
      </span>
    </div>
    <h3 class="secondary">{{ props.secondary }}</h3>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    src: String,
    title: String,
    color: String,
    secondary: String,
  });

</script>

<style scoped>
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .h1 {
    font-size: 2.34375rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .secondary {
    color: var(--color-text-3);
  }

  .home-number-icon {
    height: 50px;
    vertical-align: middle;
    overflow: hidden;
  }
</style>
