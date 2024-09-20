---
title: Eslint和 Prettier使用
editLink: true
navbar: true
category: 'Plugins'
---

# eslint

::: tip ESLint
[ESLint](https://eslint.org/docs/latest/use/getting-started) 是一个用于识别和报告在 ECMAScript/JavaScript 代码中发现的模式的工具，目的是使代码更加一致并避免错误。

ESLint 是完全可插拔的。每个规则都是一个插件，您可以在运行时添加更多规则。您还可以添加社区插件、配置和解析器来扩展 ESLint 的功能。
:::

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
