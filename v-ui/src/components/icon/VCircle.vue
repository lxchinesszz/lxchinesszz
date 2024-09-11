<template>
  <span class="circle" :class="tagStyle"></span>
</template>

<script lang="ts" setup>
  import { computed, PropType } from 'vue';
  import { TableTag } from '@/components/icon/types';

  function findIndex<T>(arr: T[], filter: (v: T) => boolean) {
    if (arr !== undefined && arr instanceof Array && arr.length > 0) {
      for (let i = 0; i < arr.length; i += 1) {
        const t = arr[i];
        if (filter(t)) {
          return i;
        }
      }
    }
    return -1;
  }

  function find<T>(arr: T[], filter: (v: T) => boolean) {
    const index = findIndex(arr, filter);
    if (index >= 0) {
      return arr[index];
    }
    return null;
  }

  const props = defineProps({
    value: {
      type: Object as PropType<Array<TableTag>>,
      required: true,
    },
    tagKey: [String, Number],
  });
  const tagIndex = computed(() => props.tagKey);

  const tagStyle = computed(() => {
    const currentTag: TableTag | null = find(props.value, (v: TableTag) => {
      return v.key === tagIndex.value;
    });
    if (currentTag !== null) {
      return currentTag.tagStyle;
    }
    return tagIndex;
  });
</script>

<style scoped lang="less">
  .circle {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-right: 4px;
    background-color: rgb(var(--blue-6));
    border-radius: 50%;

    &.pass {
      background-color: rgb(var(--blue-6));
    }

    &.blue {
      background-color: rgb(var(--blue-6));
    }

    &.yellow {
      background-color: rgb(var(--yellow-6));
    }

    &.red {
      background-color: rgb(var(--red-6));
    }

    &.orange {
      background-color: rgb(var(--orange-4));
    }

    &.green {
      background-color: rgb(var(--green-4));
    }

    &.pink {
      background-color: rgb(var(--red-4));
    }

    &.purple {
      background-color: rgb(var(--purple-4));
    }

    &.gray {
      background-color: rgb(var(--gray-4));
    }

    &.neutral {
      background-color: var(--color-neutral-6);
    }

    &.noPass {
      background-color: rgb(var(--red-6));
    }
  }
</style>
