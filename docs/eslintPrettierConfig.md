---
title: Eslint和 Prettier使用
editLink: true
navbar: true
---

## eslint

## eslint-plugin-vue

[官方文档](https://eslint.vuejs.org/user-guide/)

```js 
import pluginVue from 'eslint-plugin-vue';

export default [
  ...pluginVue.configs['flat/recommended']
]
```

如果你想要禁用某个规则 [规则官方文档](https://eslint.vuejs.org/rules/)

```js
import pluginVue from 'eslint-plugin-vue';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/require-valid-default-prop': 0,
    },
  },
];

```

## eslint-plugin-prettier

[官方文档](https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-new-eslintconfigjs)

用于 Prettier 格式化的 ESLint 插件, 将 Prettier 作为 ESLint 规则运行，并将差异报告为单个 ESLint 问题。

**注意的是，一定要在放在配置数组的最后一项，这样才能覆盖前面的规则，达到屏蔽规则冲突的目的**

```js eslint.config.js
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  eslintPluginPrettierRecommended,
];
```

## eslint-config-prettier

[官方文档](https://github.com/prettier/eslint-config-prettier)

关闭所有不必要的规则或可能与 Prettier 冲突的规则。

## vite plugin

### vite-plugin-inspect

一个

```js 
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  plugins: [vue(), Inspect()]
})
```

### unplugin-auto-import/vite

- 配置自动导入 vue, 内置一些规则，会帮我们自动导入。

```js 
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        // 内置了一些的引用规则
        imports: ['vue', 'vue-router'],
        dirs: ['./components/**'],
      }),
      Inspect()]
  }
)
```

导入后 vue 常用的包会自动进行导入,编辑器也不会报错。因为会自动生成
`auto-imports.d.ts`,将常用的声明为全局类型

```vue 

<script setup lang="ts">
  const props = defineProps({
    src: String,
    title: String,
    color: String,
    secondary: String,
  });
  // 不用手动引入
  const name = ref('客户满意度');
</script>
```
