<template>
  <div style="display: flex; justify-content: center; align-items: center">
    <VTag
      v-if="hasInnerTagIcon(props.icon)"
      :color="hasInnerTagIcon(props.icon)?.tagStyle"
    >
      {{ hasInnerTagIcon(props.icon)?.tagStyle }}
    </VTag>
    <VCircle
      v-else-if="hasInnerNoticeIcon(props.icon)"
      :value="innerCircleStyle"
      :tag-key="props.icon"
    />
    <IconFont v-if="hasIconFont(props.icon)" :type="props.icon"></IconFont>
  </div>
</template>

<script lang="ts" setup>
  import iconfonts from './icons.json';
  import useInnerTag from '@/components/icon/innerIcon';
  import VCircle from '@/components/icon/VCircle.vue';
  import VTag from '@/components/icon/VTag.vue';
  import { Icon } from '@arco-design/web-vue';

  const props = defineProps({
    icon: String,
  });

  const href = '//at.alicdn.com/t/c/font_902793_kono671wie.js';

  /**
   * 阿里图标
   */
  const IconFont = Icon.addFromIconFontCn({
    src: `https://${href}`,
    extraProps: {
      // fill: 'white',
    },
  });

  const iconFontList: string[] = [];

  iconfonts.forEach((item: any) => {
    iconFontList.push(item.name);
  });

  const hasIconFont = (icon: string | undefined) => {
    return (
      iconFontList.findIndex((x) => {
        return x === icon;
      }) >= 0
    );
  };

  const { hasInnerTagIcon, hasInnerNoticeIcon, innerCircleStyle } =
    useInnerTag();
</script>

<style scoped></style>
