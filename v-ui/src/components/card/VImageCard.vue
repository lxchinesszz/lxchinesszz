<template>
  <div id="container">
    <div
      v-if="data.badge"
      class="badge"
      :style="{
        backgroundColor: data.badge.bgColor ?? 'red',
        color: data.badge.color ?? 'white',
      }"
    >
      {{ data.badge.text }}
    </div>
    <div id="head">
      <div class="title">
        <Space>
          <a
            href="https://ritheme.com/theme/riplus.html"
            class="text-dark"
            style="color: inherit; text-decoration: none"
          >
            {{ data.title }}
          </a>
          <Tag
            v-for="tag in data.tags"
            :key="tag.tag"
            size="small"
            :color="tag.color"
          >
            {{ tag.tag }}
          </Tag>
        </Space>
      </div>
      <div class="descBox">
        <TypographyParagraph
          :ellipsis="{
            rows: data.description.rows,
          }"
        >
          {{ data.description.content }}
        </TypographyParagraph>
      </div>
    </div>
    <div class="body">
      <img
        class="theme-item-media"
        :src="data.image.src"
        :alt="data.image.alt"
      />
    </div>
    <div id="footer">
      <Space v-if="data.footButton">
        <Button v-bind="data.footButton.leftButton">
          {{ data.footButton.leftButton.text }}
        </Button>
        <Button v-bind="data.footButton.rightButton">
          {{ data.footButton.rightButton.text }}
        </Button>
      </Space>
      <slot v-else name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {
    Button,
    Space,
    Tag,
    TypographyParagraph,
  } from '@arco-design/web-vue';
  import { CardProps } from './type.js';
  import { PropType } from 'vue';

  const props = defineProps({
    template: {
      type: Object as PropType<CardProps>,
      default: {
        title: '${title}',
        image: {
          src: 'https://ritheme.com/wp-content/uploads/2023/06/theme-ripro-v5-300x200.jpg',
        },
        tags: [
          {
            tag: 'V8.1',
            color: '#86909c',
          },
          {
            tag: '强大首选',
            color: '#d16c74',
          },
        ],
        description: {
          rows: 2,
          content:
            'A design is a plan or specification for theconstruction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or\n          process. The verb to design expresses the process of developing a design. The verb to design expresses the\n          process of developing a design.A design is a plan or specification for the construction of an object or system\n          or for the implementation of an activity or process, or the result of that plan or specification in the form\n          of a prototype, product or process. The verb to design expresses the process of developing a design. The verb\n          to design expresses the process of developing a design.',
        },
        footButton: {
          leftButton: {
            text: '主题介绍',
            type: '',
            status: 'danger',
          },
          rightButton: {
            text: '正版演示',
            type: 'primary',
            status: 'normal',
          },
        },
      },
    },
  });

  const data: CardProps = props.template as CardProps;
</script>

<style scoped>
  #container {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 18vw;
    height: 45vh;
    background: var(--color-bg-2);
    border-radius: var(--border-radius-large);
    padding: 15px;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  #container:hover {
    transform: translateY(-10px);
    -webkit-box-shadow: 0 1rem 3rem rgba(31, 45, 61, 0.125);
    box-shadow: 0 1rem 3rem rgba(31, 45, 61, 0.125);
  }

  .theme-item-media:hover {
    transform: translateY(-10px);
  }

  #head {
    height: 74px;
    flex-direction: column;
    padding: 0;
    color: var(--color-neutral-10);
    display: block;
    unicode-bidi: isolate;
    direction: ltr;
  }

  .title {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 5px;
  }

  .body {
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .theme-item-media {
    width: 100%;
    transform: scale(1);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  #footer {
    margin-top: 15px;
    height: 32px;
  }

  .desc {
    overflow: hidden;
    color: #213547;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 0.875rem;
  }

  .descBox {
    display: flex;
    justify-content: start;
    align-items: start;
    text-align: left;
  }

  .badge {
    right: 1rem;
    position: absolute;
    top: 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
    width: 5.656rem;
    transform: translate(38px, -8px) rotate(45deg);
    background-color: #ffd467;
    text-align: center;
    font-size: 0.875rem;
    color: #c53600;
  }
</style>
