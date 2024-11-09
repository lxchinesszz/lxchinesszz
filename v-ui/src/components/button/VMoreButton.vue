<template>
  <a-dropdown v-bind="attrs" position="bl">
    <a-button
    >更多操作
      <IconMoreVertical />
    </a-button>
    <!-- 插槽透传 -->
    <template
      :key="itemSlot"
      v-slot:[itemSlot]="temp"
      v-for="itemSlot in Object.keys(slots)"
    >
      <slot :name="itemSlot" v-bind="temp"></slot>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
  import { useAttrs, useSlots } from 'vue';
  import { IconMoreVertical } from '@arco-design/web-vue/es/icon';

  const attrs = useAttrs();

  const slots = useSlots();
</script>

<style scoped lang="less">
  .arco-dropdown-open .arco-icon-down {
    transform: rotate(180deg);
  }
</style>
