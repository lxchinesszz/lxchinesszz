---
title: tsconfig.json
editLink: true
navbar: true
category: 'TypeScript'
---

# TypeScript Config

:::tip
tsconfig.json 是 TypeScript 项目的配置文件，用于指定编译器选项和项目结构。下面是对 tsconfig.json 文件中每个常见属性的详细解释：
基本属性主要有以下几个方面
:::

[原文作者：Moment](https://juejin.cn/post/7386532770476490761)

- compilerOptions: 定义 TypeScript 编译器的配置选项。
- include: 指定要包含在编译中的文件或目录。
- exclude: 指定要排除在编译之外的文件或目录。
- files: 明确列出要包含在项目中的文件。


## compilerOptions

### target

target 指定 ECMAScript 的目标版本。可选值包括：ES3、ES5、ES6/ES2015、ES2016、ES2017、ES2018、ES2019、ES2020、ES2021、ESNext。

```json
{
  "target": "ES6"
}

```
选择 target 的主要依据是你希望生成的 JavaScript 代码在哪些环境中运行。如果你需要支持较旧的浏览器，可以选择较低的 ECMAScript 版本（如 ES5）；如果你只需要支持现代浏览器或运行在 Node.js 环境中，可以选择较高的 ECMAScript 版本（如 ES2015 及以上）。

### module

module 指定模块系统。可选值包括：None、CommonJS、AMD、System、UMD、ES6/ES2015、ESNext。

该选项用于指定编译后的模块系统。TypeScript 支持多种模块系统，以适应不同的运行环境和加载方式。

```json 
{
  "module": "CommonJS"
}

```
### lib

lib 指定要包含在编译中的库文件。

```json 
{
  "lib": ["ES6", "DOM"]
}
```

lib 选项用于指定 TypeScript 编译器应包含的库文件。每个库文件提供了一组全局变量和类型声明，这些类型声明描述了特定环境中可用的功能。通过指定这些库文件，TypeScript 可以在编译时正确地理解和检查这些功能的使用。
常见的库选项主要有以下这些：ES5、ES6 / ES2015、ES2016 ~ ES2021、DOM、DOM.Iterable、WebWorker、ScriptHost、ESNext、ESNext.AsyncIterable、ESNext.Array。


### allowJs

该选项允许编译 JavaScript 文件。

```json 
{
  "allowJs": true
}
```

### checkJs

该选项报告 JavaScript 文件中的错误。

```json 
{
  "checkJs": true
}

```

### jsx

该选项指定 JSX 代码的编译模式。可选值包括：Preserve、React、React-native、react-jsx 和 react-jsxdev。

```json 
{
  "jsx": "React"
}
```

1. preserve：不转换 JSX 代码，保留为 JSX 格式。输出文件仍然包含 JSX 语法，通常用于进一步处理，如 Babel 转换。它适用于希望在 TypeScript 之后使用其他工具（如 Babel）来处理 JSX 的项目。
2. react：将 JSX 代码转换为 React.createElement 调用。这是标准的 React 项目设置。使用此设置时，TypeScript 编译器会将 JSX 语法转换为标准的 React API 调用。
3. react-native：与 preserve 类似，不转换 JSX 代码，但会为 React Native 项目生成类型检查。它适用于 React Native 开发，在后续步骤中由其他工具处理 JSX。
4. react-jsx 和 react-jsxdev：针对 React 17 及以上版本的优化，利用新的 JSX 转换方法。react-jsx 用于生产环境的优化转换。react-jsxde 用于开发环境，包含额外的开发时检查和调试信息。

### declaration

declaration 是 TypeScript 的一个编译器选项。当在 tsconfig.json 文件中设置 declaration: true 时，TypeScript 编译器会为每个编译后的 .ts 文件生成相应的 .d.ts 类型声明文件。这些声明文件包含 TypeScript 类型信息，可以用于类型检查和提供代码补全。

```json 
{
  "declaration": true
}
```


### sourceMap

sourceMap 是 TypeScript 编译器选项中的一个重要配置。设置 sourceMap: true 后，TypeScript 编译器会生成对应的源映射文件（.map 文件）。这些源映射文件可以帮助在调试时将编译后的 JavaScript 代码映射回原始的 TypeScript 代码，从而使调试过程更加直观和高效。

```json 
{
  "sourceMap": true
}
```


### outFile

该选项将输出文件合并为一个文件（仅适用于 AMD 和 System 模块）。

```json 
{
  "outFile": "./dist/app.js"
}

```

### outDir

该选项指定输出目录。

```json 
{
  "outDir": "./dist"
}
```


### rootDir

该选项指定输入文件的根目录，用于控制输出目录结构。

```json 
{
  "rootDir": "./src"
}

```

### removeComments
removeComments 用于删除编译后的注释。

```json 
{
  "removeComments": true
}
```

### noEmit

noEmit 选项用于控制编译器是否生成输出文件，这对于只需要进行类型检查的情况非常有用，而不需要生成最终的 JavaScript 代码。

```json 
{
  "noEmit": true
}
```

## 严格性选项

### strict

strict 用于启用所有严格类型检查选项的总开关。

```json5 
{
  "strict": true
}
```
### noImplicitAny

noImplicitAny 用于不允许隐式 any 类型。

```json 
{
  "noImplicitAny": true
}

```

### strictNullChecks

strictNullChecks 启用严格的空值检查。

```json 
{
  "strictNullChecks": true
}

```


### strictFunctionTypes

strictFunctionTypes 启用函数参数双向协变检查。

```json 
{
  "strictFunctionTypes": true
}

```
以下是一些示例，展示了启用 strictFunctionTypes 选项后，TypeScript 如何进行更严格的函数类型检查。

```ts
type Callback = (arg: number) => void;

function execute(callback: Callback) {
  callback(42);
}

// 兼容类型（更宽松）
const validCallback: Callback = (arg: number | string) => {
  console.log(arg);
};

// 启用 strictFunctionTypes 后，这会报错
execute(validCallback);

// 不兼容类型（更严格）
const invalidCallback: Callback = (arg: string) => {
  console.log(arg);
};

// 启用 strictFunctionTypes 后，这会报错
execute(invalidCallback);

```

虽然 strictFunctionTypes 主要关注参数类型的检查，但 TypeScript 本身也会对返回值类型进行检查。启用这个选项不会改变返回值类型的检查方式，但仍需注意返回值类型的兼容性：


```ts 
type NumberToString = (arg: number) => string;

const example: NumberToString = (arg) => {
  return arg.toString();
};

// 这会报错，因为返回值类型不兼容
const invalidExample: NumberToString = (arg) => {
  return arg; // Type 'number' is not assignable to type 'string'
};

```
strictFunctionTypes 选项启用后，TypeScript 将对函数参数类型进行更严格的检查，确保函数类型的兼容性和安全性。

### strictBindCallApply

strictBindCallApply 启用严格的 bind、call 和 apply 方法检查。

```json 
{
  "strictBindCallApply": true
}

```

### strictPropertyInitialization

strictPropertyInitialization 在严格模式下检查类的属性初始化。

```json 
{
  "strictPropertyInitialization": true
}
```

### noImplicitThis

noImplicitThis 不允许隐式的 this 类型。
```json 
{
  "noImplicitThis": true
}

```

### alwaysStrict

alwaysStrict 以严格模式解析并为每个源文件生成 use strict。

```json 
{
  "alwaysStrict": true
}
```
## 额外检查

### noUnusedLocals

noUnusedLocals 报告未使用的局部变量。

```json 
{
  "noUnusedLocals": true
}

```

### noUnusedParameters

noUnusedParameters 报告未使用的函数参数。

```json 
{
  "noUnusedParameters": true
}

```

### noImplicitReturns
noImplicitReturns 每个分支的函数都必须有返回值。

```json
{
  "noImplicitReturns": true
}
```

### noFallthroughCasesInSwitch

noFallthroughCasesInSwitch 报告 switch 语句中的遗漏的 break。

```json 
{
  "noFallthroughCasesInSwitch": true
}
```

## 模块解析选项

### moduleResolution

moduleResolution 选择模块解析策略。可选值：Node 和 Classic。

```json 
{
  "moduleResolution": "Node"
}
```

### baseUrl

baseUrl 用于解析非相对模块名称的基目录。

```json
{
  "baseUrl": "./"
}

```

### paths

paths 模块名到基于 baseUrl 的路径映射。

```json
{
  "paths": {
    "moment/*": ["./src/*"]
  }
}

```

### rootDirs
rootDirs 将多个目录内容合并到一个虚拟目录。

```json
{
  "rootDirs": ["./src", "./generated"]
}

```
### typeRoots
typeRoots 指定包含类型声明文件的目录。

```json
{
  "typeRoots": ["./node_modules/@types"]
}
```

### types

types 需要包含的类型声明文件。

```json 
{
  "types": ["node", "jest"]
}

```
### allowSyntheticDefaultImports

allowSyntheticDefaultImports 允许从没有默认导出的模块中默认导入。这不会影响代码的输出，只影响类型检查。

```json
{
  "allowSyntheticDefaultImports": true
}
```

### esModuleInterop
esModuleInterop 启用对 ES 模块默认导入的兼容性。

```json
{
  "esModuleInterop": true
}
```

## 高级选项

### experimentalDecorators
experimentalDecorators 启用实验性的装饰器特性。

```json
{
  "experimentalDecorators": true
}

```
### emitDecoratorMetadata

emitDecoratorMetadata 为装饰器生成元数据。

```json
{
  "emitDecoratorMetadata": true
}

```

### downlevelIteration

downlevelIteration 启用对 ES3/ES5 目标下 for...of、spread 操作符等的降级支持。

```json 
{
  "downlevelIteration": true
}
```
### skipLibCheck

skipLibCheck 跳过所有类型声明文件的类型检查。

```json
{
  "skipLibCheck": true
}

```
### forceConsistentCasingInFileNames

forceConsistentCasingInFileNames 禁止导入相同文件时大小写不同的文件名。

```json 
{
  "forceConsistentCasingInFileNames": true
}
```
## 总结

tsconfig.json 是 TypeScript 项目的配置文件，用于指定 TypeScript 编译器选项和项目结构。通过配置这个文件，你可以控制 TypeScript 如何处理你的代码。


