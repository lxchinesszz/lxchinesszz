---
title: package.json
editLink: true
navbar: true
category: 'JavaScript'
link: https://zhuanlan.zhihu.com/p/711414119
---

# package.json

:::tip
在每个前端项目中，都有 package.json 文件，它是项目的配置文件，常见的配置有配置项目启动、打包命令，声明依赖包等。
package.json 文件是一个 JSON 对象，该对象的每一个成员就是当前项目的一项设置。

`package.json` 其实就是一个配置文件,告诉 NPM 项目的相关信息。
:::

[原文地址](https://zhuanlan.zhihu.com/p/711414119)

package.json 文件主要包括：

- 列出项目所依赖的包
- 指定了项目可以使用/正在使用的包的版本
- 使您的构建过程可复制，因此更容易与其他开发人员共享
- 包含其他元数据，如项目描述、特定发行版中的项目版本、许可证信息，甚至属性数据等


## 快速创建

```
npm init -y
```

## 必须属性

### name

项目的名称，它是一个字符串。在给 name 字段命名时，需要注意以下几点

1. 名称的长度必须小于或等于 214 个字符，不能以 “.” 和“_”开头，不能包含大写字母
2. 名称可以作为参数被传入 require("")，用来导入模块，所以应当尽可能的简短、语义化；
3. 名称不能和其他模块的名称重复，可以使用 npm view 命令查询模块名是否重复，如果不重复就会提示 404：

### version 

- **描述**：表示该项目包的版本号，它是一个字符串。版本号的使用规范遵从语义化版本控制（Semantic Versioning, SemVer）规范，格式为`<major>.<minor>.<patch>`。
- **案例**：
  ```
  "version": "0.1.0"
  ```


## 描述信息

### description
- **描述**：项目的简短描述。
- **案例**：原文未直接给出具体案例，但通常形式如下：
  ```
  "description": "A simple React application."
  ```

### keywords
- **描述**：与项目相关的关键字数组，有助于搜索和分类。
- **案例**：
  ```
  "keywords": ["react", "webpack", "babel"]
  ```

### author
- **描述**：项目的作者信息。可以是字符串或对象形式。
- **案例**（字符串形式）：
  ```
  "author": "CUGGZ <xxxxx@xx.com> (https://juejin.cn/user/3544481220801815)"
  ```
- **案例**（对象形式）：
  ```
  "author": {
    "name": "CUGGZ",
    "email": "xxxxx@xx.com",
    "url": "https://juejin.cn/user/3544481220801815"
  }
  ```

### contributors
- **描述**：项目的贡献者列表，与`author`类似，但`contributors`是一个数组。
- **案例**（数组中的字符串形式）：
  ```
  "contributors": [
    "CUGGZ0 <xxxxx@xx.com> (https://juejin.cn/user/3544481220801815)",
    "CUGGZ1 <xxxxx@xx.com> (https://juejin.cn/user/3544481220801815)"
  ]
  ```
- **案例**（数组中的对象形式）：
  ```
  "contributors": [
    {
      "name": "CUGGZ0",
      "email": "xxxxx@xx.com",
      "url": "https://juejin.cn/user/3544481220801815"
    },
    {
      "name": "CUGGZ1",
      "email": "xxxxx@xx.com",
      "url": "https://juejin.cn/user/3544481220801815"
    }
  ]
  ```

### repository
- **描述**：项目仓库的URL。
- **案例**（字符串形式）：
  ```
  "repository": "https://github.com/facebook/react.git"
  ```
- **案例**（对象形式）：
  ```
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git"
  }
  ```

### bugs
- **描述**：项目提交问题的地址。
- **案例**：
  ```
  "bugs": {
    "url": "https://github.com/facebook/react/issues",
    "email": "xxxxx@xx.com"
  }
  ```
  
### homepage

- 项目地址，就是一个字符串。


## 脚本配置


### scripts
- **描述**：定义了一系列的脚本命令，这些命令可以通过`npm run [scriptName]`来执行。
- **案例**：
  ```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
  ```
- 除了运行基本的 scripts 命令，还可以结合 pre 和 post 完成前置和后续操作。先来看一组 scripts：
```json5
{
  "scripts": {
    // index.js
    // console.log("scripts: index.js")
    "dev": "node index.js",

    // beforeIndex.js
    // console.log("scripts: before index.js")
    "predev": "node beforeIndex.js",

    // afterIndex.js
    // console.log("scripts: after index.js")
    "postdev": "node afterIndex.js"
  }
}
```

当我们执行 npm run dev 命令时，输出结果如下：

``` 
scripts: before index.js
scripts: index.js
scripts: after index.js
```

可以看到，三个命令都执行了，执行顺序是 predev→dev→postdev。如果 scripts 命令存在一定的先后关系，则可以使用这三个配置项，分别配置执行命令。




### config
- **描述**：配置`scripts`字段中命令使用的环境变量。
- **案例**：
  ```
  "config": {
    "port": 3000
  }
  ```

如果运行 npm run start，则 port 字段会映射到npm_package_config_port环境变量中：

```
console.log(process.env.npm_package_config_port) // 3000
```

用户可以通过npm config set foo:port 3001 命令来重写 port 的值。

## 文件 & 目录


### type

- "type": "commonjs"
- "type": "module"
  设置 type 字段为 "module" 后，你就可以在 .js 文件中使用 import 和 export 语句了


### main

main 字段用来指定加载的入口文件，在 browser 和 Node 环境中都可以使用。如果我们将项目发布为 npm 包，那么当使用 require 导入 npm 包时，返回的就是 main 字段所列出的文件的 module.exports 属性。如果不指定该字段，默认是项目根目录下的 index.js。如果没找到，就会报错。

``` 
"main": "./src/index.js",
```

### browser

browser 字段可以定义 npm 包在 browser 环境下的入口文件。如果 npm 包只在 web 端使用，并且严禁在 server 端使用，使用 browser 来定义入口文件。

``` 
"browser": "./src/index.js" 
```

### module

module 字段可以定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用。如果 npm 包导出的是 ESM 规范的包，使用 module 来定义入口文件。

``` 
"module": "./src/index.mjs",
```

需要注意，.js 文件是使用 commonJS 规范的语法 (require('xxx'))，.mjs 是用 ESM 规范的语法 (import 'xxx')。

上面三个的入口入口文件相关的配置是有差别的，特别是在不同的使用场景下。在 Web 环境中，

- 如果使用 loader 加载 ESM（ES module）， 那么这三个配置的加载顺序是 browser→module→main
- 如果使用 require 加载 CommonJS 模块，则加载的顺序为 main→module→browser。

Webpack 在进行项目构建时，有一个 target 选项，默认为 Web，即构建 Web 应用。如果需要编译一些同构项目，
如 node 项目，则只需将 webpack.config.js 的 target 选项设置为 node 进行构建即可。
如果在 Node 环境中加载 CommonJS 模块，或者 ESM，则只有 main 字段有效。

### bin

bin 字段用来指定各个内部命令对应的可执行文件的位置：

```
"bin": {
  "someTool": "./bin/someTool.js"
} 
```

1. 这里，someTool 命令对应的可执行文件为 bin 目录下的 someTool.js
2. someTool.js 会建立符号链接 node_modules/.bin/someTool。
3. 由于 node_modules/.bin / 目录会在运行时加入系统的 PATH 变量，因此在运行 npm 时，就可以不带路径，直接通过命令来调用这些脚本。因此，下面的写法可以简写：

``` 
{
  "bin": {
    "someTool": "./bin/someTool.js"
  }
  // 不用这样，可以使用下面简写。
  scripts: {  
    start: './node_modules/bin/someTool.js build'
  }
   
  // 简写
  scripts: {  
    start: 'someTool build'
  }
}
```

### files

files 配置是一个数组，用来描述当把 npm 包作为依赖包安装时需要说明的文件列表。当 npm 包发布时，files 指定的文件会被推送到 npm 服务器中，如果指定的是文件夹，那么该文件夹下面所有的文件都会被提交。

``` 
"files": [
    "LICENSE",
    "Readme.md",
    "index.js",
    "lib/"
 ]
```

如果有不想提交的文件，可以在项目根目录中新建一个. npmignore 文件，并在其中说明不需要提交的文件，防止垃圾文件推送到 npm 上。这个文件的形式和. gitignore 类似。写在这个文件中的文件即便被写在 files 属性里也会被排除在外。比如可以在该文件中这样写：

``` 
node_modules
.vscode
 
build
 
.DS_Store 
```

### man

man 命令是 Linux 中的帮助指令，通过该指令可以查看 Linux 中的指令帮助、配置文件帮助和编程帮助等信息。如果 node.js 模块是一个全局的命令行工具，在 package.json 通过 man 属性可以指定 man 命令查找的文档地址：

``` 
"man": [
 "./man/npm-access.1",
 "./man/npm-audit.1"
]
```

man 字段可以指定一个或多个文件, 当执行 man {包名} 时, 会展现给用户文档内容

**需要注意：**

man 文件必须以数字结尾，如果经过压缩，还可以使用. gz 后缀。这个数字表示文件安装到哪个 man 节中；
如果 man 文件名称不是以模块名称开头的，安装的时候会加上模块名称前缀。

对于上面的配置，可以使用以下命令来执行查看文档：

``` 
man npm-access
man npm-audit
```

### directories

directories 字段用来规范项目的目录。node.js 模块是基于 CommonJS 模块化规范实现的，需要严格遵循 CommonJS 规范。模块目录下除了必须包含包项目描述文件 package.json 以外，还需要包含以下目录：

bin ：存放可执行二进制文件的目录
lib ：存放 js 代码的目录
doc ：存放文档的目录
test ：存放单元测试用例代码的目录
...
在实际的项目目录中，我们可能没有按照这个规范进行命名，那么就可以在 directories 字段指定每个目录对应的文件路径：

``` 
"directories": {
    "bin": "./bin",
    "lib": "./lib",
    "doc": "./doc",
    "test" "./test",
    "man": "./man"
},
```

**这个属性实际上没有什么实际的作用，当然不排除未来会有什么比较有意义的用处。**


## 发布配置

### private

private 字段可以防止我们意外地将私有库发布到 npm 服务器。只需要将该字段设置为 true：

``` 
"private": true
```

### preferGlobal

preferGlobal 字段表示当用户不把该模块安装为全局模块时，如果设置为 true 就会显示警告。它并不会真正的防止用户进行局部的安装，只是对用户进行提示，防止产生误解：

``` 
"preferGlobal": true
```

### publishConfig

publishConfig 配置会在模块发布时生效，用于设置发布时一些配置项的集合。如果不想模块被默认标记为最新，或者不想发布到公共仓库，可以在这里配置 tag 或仓库地址。更详细的配置可以参考 npm-config[1]。

通常情况下，publishConfig 会配合 private 来使用，如果只想让模块发布到特定 npm 仓库，就可以这样来配置：

``` 
private": true,
"publishConfig": {
  "tag": "1.1.0",
  "registry": "https://registry.npmjs.org/",
  "access": "public"
}
```

### os

os 字段可以让我们设置该 npm 包可以在什么操作系统使用，不能再什么操作系统使用。如果我们希望开发的 npm 包只运行在 linux，为了避免出现不必要的异常，建议使用 Windows 系统的用户不要安装它，这时就可以使用 os 配置：

``` 
"os" ["linux"]   // 适用的操作系统
"os" ["!win32"]  // 禁用的操作系统
```

### cpu

该配置和 OS 配置类似，用 CPU 可以更准确的限制用户的安装环境：

黑名单和白名单的区别就是，黑名单在前面加了一个 “!”。
``` 
"cpu" ["x64", "AMD64"]   // 适用的cpu
"cpu" ["!arm", "!mips"]  // 禁用的cpu
```

### license

license 字段用于指定软件的开源协议，开源协议表述了其他人获得代码后拥有的权利，可以对代码进行何种操作，何种操作又是被禁止的。常见的协议如下：

MIT ：只要用户在项目副本中包含了版权声明和许可声明，他们就可以拿你的代码做任何想做的事情，你也无需承担任何责任。
Apache ：类似于 MIT ，同时还包含了贡献者向用户提供专利授权相关的条款。
GPL ：修改项目代码的用户再次分发源码或二进制代码时，必须公布他的相关修改。

``` 
"license": "MIT"
```


## 第三方配置

package.json 文件还可以承载命令特有的配置，例如 Babel、ESLint 等。它们每个都有特有的属性，例如 eslintConfig、babel 等。它们是命令特有的，可以在相应的命令 / 项目文档中找到如何使用它们。下面来看几个常用的第三方配置项。

### typings

typings 字段用来指定 TypeScript 的入口文件：

``` 
"typings": "types/index.d.ts",
```

该字段的作用和 main 配置相同。

### eslintConfig

eslint 的配置可以写在单独的配置文件. eslintrc.json 中，也可以写在 package.json 文件的 eslintConfig 配置项中。

``` 
"eslintConfig": {
      "root": true,
      "env": {
        "node": true
      },
      "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
      ],
      "rules": {},
      "parserOptions": {
        "parser": "babel-eslint"
     },
}
```

### babel

babel 用来指定 Babel 的编译配置，代码如下：

``` 
"babel": {
 "presets": ["@babel/preset-env"],
 "plugins": [...]
}
```

### unpkg

使用该字段可以让 npm 上所有的文件都开启 cdn 服务，该 CND 服务由 unpkg 提供：

``` 
"unpkg": "dist/vue.js"
```

### lint-staged

lint-staged 是一个在 Git 暂存文件上运行 linters 的工具，配置后每次修改一个文件即可给所有文件执行一次 lint 检查，通常配合 gitHooks 一起使用。

``` 
"lint-staged": {
 "*.js": [
   "eslint --fix",
    "git add"
  ]
}
```

### gitHooks

gitHooks 用来定义一个钩子，在提交（commit）之前执行 ESlint 检查。在执行 lint 命令后，会自动修复暂存区的文件。修复之后的文件并不会存储在暂存区，所以需要用 git add 命令将修复后的文件重新加入暂存区。在执行 pre-commit 命令之后，如果没有错误，就会执行 git commit 命令：

``` 
"gitHooks": {
 "pre-commit": "lint-staged"
}
```

### browserslist

browserslist 字段用来告知支持哪些浏览器及版本。Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。比如最上面的例子中的该字段值：

``` 
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```
