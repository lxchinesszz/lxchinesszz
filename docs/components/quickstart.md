---
navbar: true
title: 快速开始
category: '开发指南'
---

# 快速上手

## Vue 版本

vue >= 3.x

## 安装

暂不开源,仅仅个人使用。

```
pnpm link v-ui -g
```

## 完整引用

```js
import VUI from 'v-ui';
import 'v-ui/web-vue/style.css';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');
```
