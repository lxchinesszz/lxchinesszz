---
title: vite打包环境
editLink: true
navbar: true
---


[vite打包环境变量配置](https://img-home.csdnimg.cn/images/20230724024159.png?origin_url=https%3A%2F%2Fcn.vitejs.dev%2Fguide%2Fenv-and-mode&pos_id=img-m60lgc0u-1711331335275)


## 环境变量

Vite 在一个特殊的 import.meta.env 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：

- import.meta.env.MODE: {string} 应用运行的模式。

- import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由base 配置项决定。

- import.meta.env.PROD: {boolean} 应用是否运行在生产环境（使用 NODE_ENV='production' 运行开发服务器或构建应用时使用 NODE_ENV='production' ）。

- import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。

- import.meta.env.SSR: {boolean} 应用是否运行在 server 上。

## .env 文件

> 环境加载优先级 份用于指定模式的文件（例如 .env.production）会比通用形式的优先级更高（例如 .env）。
>另外，Vite 执行时已经存在的环境变量有最高的优先级，不会被 .env 类文件覆盖。例如当运行 VITE_SOME_KEY=123 vite build 的时候。
>.env 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。

Vite 使用 dotenv 从你的 环境目录 中的下列文件加载额外的环境变量：


- .env                # 所有情况下都会加载
- .env.local          # 所有情况下都会加载，但会被 git 忽略
- .env.[mode]         # 只在指定模式下加载
- .env.[mode].local   # 只在指定模式下加载，但会被 git 忽略

## 注意

为了防止意外地将一些环境变量泄漏到客户端，只有以 `VITE_` 为前缀的变量才会暴露给经过 vite 处理的代码。例如下面这些环境变量：

```
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```
只有 `VITE_`SOME_KEY 会被暴露为 `import.meta.env.VITE_SOME_KEY` 提供给客户端源码，而 DB_PASSWORD 则不会。

```js
console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.DB_PASSWORD) // undefined
```
