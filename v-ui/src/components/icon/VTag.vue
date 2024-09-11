<template>
  <div>
    <a-tag v-bind="attr">
      <slot />
    </a-tag>
  </div>
</template>

<script lang="ts" setup>
  import { useAttrs } from 'vue';

  const attr = useAttrs();
</script>

<style scoped></style>
