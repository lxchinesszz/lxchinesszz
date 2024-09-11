<template>
  <div id="container" style="width: 100%">
    <a-row
      v-for="(item, index) in props.template"
      :key="index"
      class="grid-demo"
      :gutter="12"
      style="margin: 5.5rem 0"
      align="center"
    >
      <a-col
        v-if="item.imagePosition.position === 'left'"
        :xs="24"
        :sm="24"
        :md="22"
        :lg="12"
        :xl="12"
        :xxl="12"
        align="center"
      >
        <div class="banner-image">
          <VAnimate :animate="item.imagePosition.animate">
            <Image
              class="around-banner-image"
              :src="item.imagePosition.image.src"
              :alt="item.imagePosition.image.alt"
              style="width: 70%; object-fit: contain"
              @success="loadImageSuccessCount"
            />
          </VAnimate>
        </div>
      </a-col>
      <a-col
        v-if="item.imagePosition.position === 'left'"
        align="center"
        :xs="24"
        :sm="12"
        :md="22"
        :lg="12"
        :xl="12"
        :xxl="12"
      >
        <a-space
          align="start"
          direction="vertical"
          size="mini"
          style="width: 70%"
        >
          <VAnimate :animate="item.animate" style="text-align: left">
            <TextCenter
              align="start"
              :title="item.title"
              style="margin: 1.5rem 0"
              :secondary="item.secondary"
            />
            <div
              v-for="(textItem, idx) in item.textItems"
              :key="idx"
              style="
                padding-top: 0.5rem !important;
                padding-bottom: 0.5rem !important;
              "
            >
              <a-space size="mini">
                <Icon :icon="textItem.icon ?? 'circle-blue'" />
                <a-typography-text bold>
                  {{ textItem.text }}
                </a-typography-text>
              </a-space>
            </div>
          </VAnimate>
        </a-space>
      </a-col>
      <a-col
        v-if="item.imagePosition.position === 'right'"
        :xs="24"
        :sm="12"
        :md="22"
        :lg="12"
        :xl="12"
        :xxl="12"
        align="center"
      >
        <a-space
          align="start"
          direction="vertical"
          size="mini"
          style="width: 70%"
        >
          <VAnimate :animate="item.animate" style="text-align: left">
            <TextCenter
              align="start"
              :title="item.title"
              style="margin: 1.5rem 0"
              :secondary="item.secondary"
            />
            <div
              v-for="(textItem, idx) in item.textItems"
              :key="idx"
              style="
                padding-top: 0.5rem !important;
                padding-bottom: 0.5rem !important;
              "
            >
              <a-space size="mini">
                <Icon :icon="textItem.icon ?? 'circle-blue'" />
                <a-typography-text bold>
                  {{ textItem.text }}
                </a-typography-text>
              </a-space>
            </div>
          </VAnimate>
        </a-space>
      </a-col>
      <a-col
        v-if="item.imagePosition.position === 'right'"
        :xs="24"
        :sm="12"
        :md="22"
        :lg="12"
        :xl="12"
        :xxl="12"
        align="center"
      >
        <div class="banner-image">
          <VAnimate :animate="item.imagePosition.animate">
            <Image
              class="around-banner-image"
              :src="item.imagePosition.image.src"
              :alt="item.imagePosition.image.alt"
              style="width: 70%; object-fit: contain"
              @success="loadImageSuccessCount"
            />
          </VAnimate>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, PropType, ref } from 'vue';
  import { AroundBannerType } from '@/components/card/type';
  import TextCenter from '@/components/text/VTextCenter.vue';
  import LeaderLine from 'vue3-leaderline';
  import Icon from '@/components/icon/VIcon.vue';
  import VAnimate from '@/components/animate/VAnimate.vue';
  import Image from '@/components/image/VImage.vue';

  const props = defineProps({
    line: Boolean,
    template: {
      type: Object as PropType<AroundBannerType[]>,
      default: [
        {
          imagePosition: {
            image: {
              src: 'https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-1-1000x800.jpg',
            },
            position: 'left',
            animate: {
              type: 'fadeInUp',
              duration: 1,
              disable: false,
            },
          },
          title: '灵活轻量原生态的首页模块化配置',
          animate: {
            type: 'fadeInUp',
            duration: 2,
            disable: false,
          },
          secondary:
            '现代化的前台页面，易于管理拖拽搭配的WP原生小工具模块化首页可拖拽设置。',
          textItems: [
            {
              text: '非常适合虚拟资源商城',
            },
            {
              text: '所有功能界面自带，无需依赖插件',
            },
          ],
        },
        {
          imagePosition: {
            image: {
              src: 'https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-2-1000x800.jpg',
            },
            position: 'right',
            animate: {
              type: 'fadeInUp',
              duration: 1,
              disable: false,
            },
          },
          animate: {
            type: 'fadeInUp',
            duration: 2,
            disable: false,
          },
          title: '灵活轻量原生态的首页模块化配置',
          secondary:
            '现代化的前台页面，易于管理拖拽搭配的WP原生小工具模块化首页可拖拽设置。',
          textItems: [
            {
              text: '非常适合虚拟资源商城',
            },
            {
              text: '所有功能界面自带，无需依赖插件',
            },
          ],
        },
        {
          imagePosition: {
            image: {
              src: 'https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-1-1000x800.jpg',
            },
            position: 'left',
            animate: {
              type: 'fadeInUp',
              duration: 1,
              disable: false,
            },
          },
          title: '灵活轻量原生态的首页模块化配置',
          animate: {
            type: 'fadeInUp',
            duration: 2,
            disable: false,
          },
          secondary:
            '现代化的前台页面，易于管理拖拽搭配的WP原生小工具模块化首页可拖拽设置。',
          textItems: [
            {
              text: '非常适合虚拟资源商城',
            },
            {
              text: '所有功能界面自带，无需依赖插件',
            },
          ],
        },
      ],
    },
  });

  const linesRef = ref<LeaderLine[]>([]);

  const successCount = ref(0);

  const loadImageSuccessCount = () => {
    successCount.value += 1;
    if (props.line) {
      const imgNodeList = document.querySelectorAll('.around-banner-image');
      if (
        imgNodeList &&
        imgNodeList.length == successCount.value &&
        imgNodeList.length >= 2
      ) {
        setTimeout(() => {
          for (let i = 0; i < imgNodeList.length - 1; i++) {
            const line = new LeaderLine(imgNodeList[i], imgNodeList[i + 1], {
              dash: {
                animation: true,
              },
              startPlug: 'behind',
              endPlug: 'behind',
              color: '#e7eaf0',
              startSocket: 'bottom',
              endSocket: 'top',
              hide: true,
            });
            linesRef.value.push(line); // 将线条引用添加到数组中以便后续管理（如果需要的话）
            line.show('draw');
            console.log('draw');
          }
        }, 1000);
      }
    }
  };

  const position = () => {
    if (linesRef.value.length > 0) {
      for (let i = 0; i < linesRef.value.length; i++) {
        linesRef.value[i].position();
      }
    }
  };

  onMounted(() => {
    window.addEventListener('resize', position);
  });

  onUnmounted(() => {
    if (linesRef.value.length > 0) {
      for (let linesRefKey in linesRef.value) {
        linesRef.value[linesRefKey].remove();
      }
    }
    window.removeEventListener('resize', position);
  });
</script>

<style scoped>
</style>
