---
title: Vite 插件
editLink: true
navbar: true
category: 'Plugins'
---

# vite plugin

:::tip Vite
在浏览器支持 ES 模块之前，JavaScript 并没有提供原生机制让开发者以模块化的方式进行开发。
这也正是我们对 “打包” 这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。

[vite](https://cn.vitejs.dev/guide/features.html) 下一代的前端工具链
:::

## vite-plugin-inspect

[vite-plugin-inspect](https://www.npmjs.com/package/vite-plugin-inspect) 可以让开发者在浏览器端就可以看到vue文件编译后的代码、vue文件的相互依赖关系


```js 
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  plugins: [vue(), Inspect()]
})
```

使用 vite 启用后，会看到一个新的 URL

![](https://user-images.githubusercontent.com/46585162/134683677-487e3e03-fa6b-49ad-bde0-520ebb641a96.png)

``` 
  VITE v5.3.5  ready in 2811 ms

  ➜  Local:   http://localhost:5177/
  ➜  Network: use --host to expose
  ➜  Inspect: http://localhost:5177/__inspect/
  ➜  press h + enter to show help
```

### 构建模式

要在构建模式下检查转换，您可以传递 build： true 选项：

``` 
// vite.config.ts
import Inspect from 'vite-plugin-inspect'

export default {
  plugins: [
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    })
  ],
}
```

运行 vite build 后，会在 .vite-inspect 下生成 inspector 客户端，你可以使用 npx serve .vite-inspect 来检查结果。

## unplugin-auto-import/vite

[unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import)

`npm i -D unplugin-auto-import`

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

```vue {2}
<script setup lang="ts">
  // 当我们配置了，自动导入，这一行就不用写了。
  // import { ref } from 'vue'
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

### 规则配置

```js
AutoImport({
  // targets to transform
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],

  // global imports to register
  imports: [
    // 常用的框架，内置了规则，不用在配置
    'vue',
    'vue-router',
    // 自定义的导入
    {
      '@vueuse/core': [
        // named imports
        'useMouse', // import { useMouse } from '@vueuse/core',
        // alias
        ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
      ],
      'axios': [
        // 间接的导入了 import axios from 'axios'
        ['default', 'axios'], // import { default as axios } from 'axios',
      ],
      // 这是规则
      '[package-name]': [
        '[import-names]',
        // alias
        ['[from]', '[alias]'],
      ],
    },
    // 从某个包里，导出类型。
    {
      from: 'vue-router',
      imports: ['RouteLocationRaw'],
      type: true,
    },
  ],

  // Array of strings of regexes that contains imports meant to be filtered out.
  ignore: [
    'useMouse',
    'useFetch'
  ],

  // Enable auto import by filename for default module exports under directories
  defaultExportByFilename: false,

  // Auto import for module exports under directories
  // by default it only scan one level of modules under the directory
  dirs: [
    // './hooks',
    // './composables' // only root modules
    // './composables/**', // all nested modules
    // ...
  ],

  // Filepath to generate corresponding .d.ts file.
  // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
  // Set `false` to disable.
  dts: './auto-imports.d.ts',

  // Array of strings of regexes that contains imports meant to be ignored during
  // the declaration file generation. You may find this useful when you need to provide
  // a custom signature for a function.
  ignoreDts: [
    'ignoredFunction',
    /^ignore_/
  ],

  // Auto import inside Vue template
  // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
  vueTemplate: false,

  // Custom resolvers, compatible with `unplugin-vue-components`
  // see https://github.com/antfu/unplugin-auto-import/pull/23/
  resolvers: [
    /* ... */
  ],

  // Include auto-imported packages in Vite's `optimizeDeps` options
  // Recommend to enable
  viteOptimizeDeps: true,

  // Inject the imports at the end of other imports
  injectAtEnd: true,

  // Generate corresponding .eslintrc-auto-import.json file.
  // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
  eslintrc: {
    enabled: false, // Default `false`
    // provide path ending with `.mjs` or `.cjs` to generate the file with the respective format
    filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  },

  // Generate corresponding .biomelintrc-auto-import.json file.
  // biomejs extends Docs - https://biomejs.dev/guides/how-biome-works/#the-extends-option
  biomelintrc: {
    enabled: false, // Default `false`
    filepath: './.biomelintrc-auto-import.json', // Default `./.biomelintrc-auto-import.json`
  },
})
```
