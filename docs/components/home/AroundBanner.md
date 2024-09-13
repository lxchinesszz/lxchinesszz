---
title: 图片介绍
editLink: true
sidebar: true
category: '首页模板'
aside: false
---

# 首页模板

用于 PC 端，功能演示等。

## 完整示例

:::demo

```vue

<template>
  <v-around-banner line />
</template>

<script setup>
</script>
```

:::

## API

| 字段       | 说明                   | 示例   |
|:---------|:---------------------|:-----|
| line     | 当图片大于 2 个是否绘制线段      | true |
| template | 类型AroundBannerType[] | 标题   |

## AroundBannerType

```
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
        }
```
