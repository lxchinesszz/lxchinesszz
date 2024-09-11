<template>
  <a-space
    :align="props.align"
    direction="vertical"
    size="mini"
    style="text-align: left"
  >
    <a-tag v-if="props.tag" :color="props.tag.color">{{ props.tag.tag }}</a-tag>
    <a-typography-title :heading="3">
      {{ props.title ?? '' }}
    </a-typography-title>
    <a-typography-text type="secondary" style="font-size: 1.17rem">
      {{ props.secondary ?? '' }}
    </a-typography-text>
  </a-space>
</template>

<script setup lang="ts">
  import { CardTag } from '@/components/card/type';
  import { PropType } from 'vue';

  type AlignType = 'center' | 'end' | 'start' | 'baseline' | undefined;

  const props = defineProps({
    align: {
      type: Object as PropType<AlignType>,
      default: 'center',
    },
    title: String,
    secondary: String,
    tag: Object as PropType<CardTag>,
  });
</script>

<style scoped>
  #container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
