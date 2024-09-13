---
title: 文本介绍
editLink: true
sidebar: true
aside: false
category: '首页模板'
---

# 首页模板

用于 PC 端，功能演示等。

## 完整示例

:::demo

```vue

<template>
  <a-space align="center" direction="vertical">
  <a-row>
    <v-text-center :title="title"
                   :secondary="secondary"
                   :tag="tag"/>
  </a-row>
  <a-row class="grid-demo" justify="space-between" style="margin: 35px 0">
    <a-col :span="4">
      <v-text-statistic title="92%"
                     src="https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/icon1.svg"
                     color='#2562eb'
                     secondary="客户服务满意"/>
    </a-col>
    <a-col :span="4">
      <v-text-statistic title="365x8"
                     color='#2562eb'
                     src="https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/icon2.svg"
                     secondary="客户支持时长"/>
    </a-col>
    <a-col :span="4">
      <v-text-statistic title="9++"
                     color='#2562eb'
                     src="https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/icon3.svg"
                     secondary="已开发模板"/>
    </a-col>
    <a-col :span="4">
      <v-text-statistic title="1000+"
                     color='#2562eb'
                     src="https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/icon4.svg"
                     secondary="累计更新次"/>
    </a-col>
  </a-row>
  </a-space>
</template>

<script setup>
  const title = '属于你的第一个虚拟资源建站首选主题'
  const secondary = "我们有常年大量用户运营经验提交改进，最终完成这些易于上手运营的的wordpress主题模板。"
  const tag = {
    tag: 'V-UI 2024',
    color: '#2b5ee9'
  }
</script>
```

:::

## API

| 字段        | 说明  | 示例  |
|:----------|:----|:----|
| title     | 标题  | 标题  |
| secondary | 副标题 | 标题  |
| tag       | tag | Tag |

## Tag

``` js
{  
    tag: 'V-UI 2024',
    color: '#2b5ee9'
}
```
