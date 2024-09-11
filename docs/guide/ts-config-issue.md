---
title: typescript配置说明
editLink: true
navbar: true
---

# typescript配置说明


## 无法找到__dirname

__dirname 是commonjs规范的内置变量。如果使用了esm 是不会自动注入这个变量的。
解决办法。

- "module": "CommonJS"

``` 
{
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "skipLibCheck": true,
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true,
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "include": ["vite.config.ts"]
}
```

或者

``` 
// 方法一
import { URL, fileURLToPath } from "node:url";

// 获取__filename
function getCurrnetFile () {
    return fileURLToPath(import.meta.url);
}
// 获取__dirname
function getCurrnetDir () {
    const url = new URL(".", import.meta.url);
    return fileURLToPath(url);
}

```

或者

``` 
// 方法二
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// 获取__filename
function getCurrnetFile () {
    return fileURLToPath(import.meta.url);
}
// 获取__dirname
function getCurrnetDir () {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return __dirname;
}

```

解决了这个问题 ts编译不会报错，但是页面加载还是会报错。

``` 
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src'), // 路径别名
        },
        extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    }
})

```

## 配置参数

```
{
  // 用来配置编译选项
  "compilerOptions": {
    "target": "esnext",// 生成js 的版本，下一版本
    "module": "esnext", // 生成的module的形式，esm，cmd，amd啥的
    "strict": false, // 是否严格模式
    "jsx": "preserve", // jsx用于的开发环境，preserve/react/RN
    "importHelpers": true, // 指定是否引入tslib里的复制工具函数
    "moduleResolution": "node", // 用于选择模块解析策略 node/classic
    "experimentalDecorators": true, // 用于指定是否启用实验性的装饰器特性
    "esModuleInterop": true, // 通过导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性
    "allowSyntheticDefaultImports": true, // 用于允许从没有默认导出的模块中默认导入
    "sourceMap": true, // 编译时是否生成.map文件
    "baseUrl": ".",// 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响
    //用于指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载
    "types": [
      "webpack-env"
    ],
    // 用于设置模块名到基于baseUrl的路径映射
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    // 指定要包含在编译中的库文件
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  // 指定编译的文件，没有include和exclude时候用
  "file": [],
  // 指定待编译的文件
  "include": [
  // ** : 任意目录 ， * : 任意文件
    "src/**/*.ts",
  ],
  // 指定排除的文件
  "exclude": [
    "node_modules"
  ]
}


```
