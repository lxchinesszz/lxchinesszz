---
title: CommonJs和ECMAScript
editLink: true
navbar: true
category: 'JavaScript'
---

:::tip
CommonJs（CommonJS）和ESMJs（通常简称为ESM，即ECMAScript Modules）是JavaScript中两种主要的模块化规范，它们在多个方面存在显著的区别。以下是它们之间主要差异的详细对比：
:::

### 1. 适用环境

* **CommonJS**：主要适用于Node.js环境，是Node.js打包JavaScript代码的原始方法。
* **ESM (ECMAScript Modules)**：是ECMAScript标准中定义的模块化规范，也称为ES6模块。它适用于现代浏览器和Node.js环境，是官方引入的模块化规范。

### 2. 加载方式

* **CommonJS**：采用同步加载模块的方式。当使用`require`
  函数加载模块时，会阻塞后续代码的执行，直到模块加载完成。这种方式在Node.js中较为合适，因为Node.js中的IO操作通常不是性能瓶颈。
* **ESM**：支持异步加载模块。使用`import`语句加载模块时，可以在运行时动态加载模块，这有助于优化性能，特别是在浏览器环境中，网络请求是性能瓶颈。

### 3. 导出与导入语法

* **CommonJS**：使用`module.exports`或`exports`来导出模块内容,扩展名为.cjs的文件，通过`require`函数来导入模块。
  - 当扩展名为.js的文件，且离自己最近的package.json文件包含一个顶级字段“type”，其值为“commonjs”；
  - 扩展名为.js的文件，且离自己最近的package.json文件不包含一个顶级字段“type”(建议明确指定 type值，而不是不定义)；

示例（导出）：
```javascript
  // 导出模块
  module.exports = {
    myFunction: function() { ... },
    myVariable: 'Hello, CommonJS!'
  };
```

  示例（导入）：
```javascript
  // 引入模块
  const myModule = require('./myModule');
  myModule.myFunction();
  console.log(myModule.myVariable);
```

* **ESM**：使用`export`关键字来导出模块内容,扩展名为 .mjs 的文件；通过`import`语句来导入模块。
  -   当扩展名为.js的文件，且离自己最近的package.json文件包含一个顶级字段“type”，其值为“module”，也会当做是 ESM.

  示例（导出）：
  ```javascript
  // 导出模块
  export function myFunction() { ... }
  export const myVariable = 'Hello, ES Modules!';
  ```

  示例（导入）：
  ```javascript
  // 引入模块
  import { myFunction, myVariable } from './myModule.js';
  myFunction();
  console.log(myVariable);
  ```

### 4. 缓存机制

* **CommonJS**：具有缓存机制。当再次使用`require`加载相同模块时，会直接从缓存中返回，不会重新加载模块。
* **ESM**：没有内置的缓存机制。每次使用`import`导入模块时，都会重新加载模块。

### 5. 静态与动态特性

* **CommonJS**：`require`是动态的，可以在运行时改变导入的内容（尽管这在实际应用中并不常见）。
* **ESM**：`import`/`export`是静态的，在代码编写时就必须确定要导入或导出的内容，这有利于编译时优化和静态分析。

