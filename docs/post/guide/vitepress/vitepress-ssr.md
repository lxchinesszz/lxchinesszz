---
title: SSR
editLink: true
navbar: true
category: 'VitePress'
---

# SSR

`SSR: Server-Side Render` 服务端渲染的意思


在使用 VitePress 进行服务端打包的时候, 因为是 Node的打包环境,所以并没有 document 对象，经常会打包失败。比如下面。

```text {3}
✓ building client + server bundles...
build error: 
ReferenceError: document is not defined // [!code focus]
    at file:///Users/liuxin/WebstormProjects/lxchinesszz/docs/node_modules/.pnpm/vue-echarts@7.0.3_echarts@5.5.1_vue@3.5.9/node_modules/vue-echarts/dist/index.js:145:1
    at ModuleJob.run (node:internal/modules/esm/module_job:262:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:485:26)
    at async build (file:///Users/liuxin/WebstormProjects/lxchinesszz/docs/node_modules/.pnpm/vitepress@1.0.1_@algolia+client-search@5.6.1_@types+node@22.5.4_search-insights@2.17.2/node_modules/vitepress/dist/node/serve-C_2bYS0g.js:46722:24)

```

## 解决办法

*=defineClientComponent=*

[VitePress](https://vitepress.dev/zh/guide/ssr-compat)

VitePress 为导入 Vue 组件提供了一个方便的辅助函数，该组件可以在导入时访问浏览器 API。目标组件将仅在 wrapper 组件的 mounted 钩子中导入。

```js 
<script setup>
import { defineClientComponent } from 'vitepress'

const ClientComp = defineClientComponent(() => {
  return import('component-that-access-window-on-import')
})
</script>

<template>
  <ClientComp />
</template>
```

### 参数传递

传参的语法和 [h函数](https://cn.vuejs.org/api/render-function#h)一样。

- `function h(type: string | Component,props?: object | null, children?: Children | Slot | Slots): VNode`


```
const ClientComp = defineClientComponent(
  () => import('component-that-access-window-on-import'),

  // 参数传递给 h() - https://cn.vuejs.org/api/render-function.html#h
  [
    {
      ref: clientCompRef
    },
    {
      default: () => 'default slot',
      foo: () => h('div', 'foo'),
      bar: () => [h('span', 'one'), h('span', 'two')]
    }
  ],

  // 组件加载后的回调，可以是异步的
  () => {
    console.log(clientCompRef.value)
  }
```

### 条件导入

除此之外，还可以使用条件导入

```js 
export function useComponents(app) {
  app.mixin({
    async mounted() {
      import('v-ui').then((m) => {
        app.use(m.default);
      });
    },
  });
}

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
  },
};
```
