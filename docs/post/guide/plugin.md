---
title: Vite 从零搭建项目
editLink: true
navbar: true
---

注意下面的 pm 命令是 pnpm 的别名。

pm init ;
pm add -D vite;
pm add -D vue;
pm add -D @vitejs/plugin-vue;

```
// vue() 让 vite 支持解析 vue3 的语法
// vite.config.js 
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
})


```

## vite默认支持 ts

请注意，Vite 仅执行 .ts 文件的转译工作，并不执行 任何类型检查。并假定类型检查已经被你的 IDE 或构建过程处理了。
所以建议安装下面依赖，避免编辑器告警。
- pm add -D typescript
- pm add -D @types/node

否则会提示

path & __dirname 找不到，红色告警。


```json5
{
  "compilerOptions": {
    "rootDir": "./",
    "baseUrl": "./",
    "target": "ES2020",
    "module": "esnext",
    /* 用于选择模块解析策略，有'node'和'classic'两种类型' */
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "allowJs": true,
    /* allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件 */
    "checkJs": true,
    /* checkJs的值为true或false，用来指定是否检查和报告js文件中的错误，默认是false */
    "skipLibCheck": true,
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom"
    ],
    "include": [
      "./",
      "src/**/*",
      "src/**/*.vue"
    ],
    "exclude": [
      "node_modules"
    ]
  }
}

```


## 安装prettier格式化

[prettierc可视化](https://www.prettier.cn/playground/)

- pm add --save-dev --save-exact prettier ;
- node --eval "fs.writeFileSync('.prettierrc','{}\n')";
- pnpm exec prettier . --write ; 或者在直接使用 webstorm的插件，直接在格式化时候执行。

### prettier有几种写法

1. package.json 文件中 key: prettier
2. .prettierrc 用 json or yaml

```
.prettierrc.json, .prettierrc.yml, .prettierrc.yaml, or .prettierrc.json5 file.
.prettierrc.json、.prettierrc.yml、.prettierrc.yaml 或 .prettierrc.json5
```
3. .prettierrc.js, or prettier.config.js

`使用 export default 或 module.exports 导出对象的`

## 安装 eslint

```
    "@typescript-eslint/eslint-plugin": "^5.4.0",
    "@typescript-eslint/parser": "^5.4.0",
    "@vue/compiler-sfc": "^3.2.22",
    "@vue/eslint-config-typescript": "^9.1.0",
    "typescript-eslint": "0.0.1-alpha.0",
    "eslint": "^8.2.0",
    "eslint-plugin-vue": "^8.0.3",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
```

```js eslintrc.js
// https://eslint.org/docs/latest/rules/array-bracket-spacing
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  'env': {
    'node': true,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-var': 'error',
    'vue/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'interface',
    ],
    '@typescript-eslint/no-unused-vars': 'error', // 使用 ts 未使用变量的规则 比如枚举类型在es中会报错
    'no-extend-native': 0,
    'no-new': 0,
    'no-useless-escape': 0,
    'no-useless-constructor': 0,
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always',
    }],
    'semi': ['error', 'always'],
    'comma-dangle': 0,
    'no-console': 0,
    'no-debugger': 0,
    'id-length': 0,
    'eol-last': 0,
    'indent': 'off',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'no-multiple-empty-lines': 'error',
    'no-unused-vars': 'error',
    'spaced-comment': 'error',
    // 'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'no-unreachable': 'error',
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'semi-spacing': 'error',
    'comma-spacing': 'error',
    'key-spacing': 'error',
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false,
    }],
    'no-irregular-whitespace': 2, // 不规则的空白不允许
    'vue/require-default-prop': 'off',
  },
};

```


### eslint不同的版本用法不同

如果 ESLint < v9 中使用 .eslintrc.* 文件配置规则。 另请参阅：https://eslint.org/docs/latest/use/configure/。

``` 
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
```

从 V9后面开始，文件就变了

- eslint.config.js
- .eslintrc.js
- eslint.config.cjs

``` 
// eslint.config.js
export default [
    {
        rules: {
            semi: "error",
            "prefer-const": "error"
        }
    }
];
```

## 别名配置

### 告诉 vite 别名 编译不报错
``` 
// vite.config.js
// https://cn.vitejs.dev/config/shared-options.html
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
});

```

### 告诉 ts 语法不报错

``` 
{
  "compilerOptions": {
    ...
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    ...
  }
}

```
