---
title: what monorepo?
editLink: true
navbar: true
category: 'Monorepo'
---


# monorepo是什么

monorepo是一种将多个项目代码存储在一个仓库里的项目管理方式，目前很多知名开源项目都是使用的这种方式进行代码的管理，例如：React、Vue、Vite等

**白话就是一个目录下创建了多个前端项目，有点类似 maven 的多模块管理，一个父pom，每个模块里面是子 pom**

## monorepo 的好处

1. 便于代码复用：多个仓库都会用到的组件、工具函数、类型声明、样式等，可以放到 common 子包中，需要的仓库直接 npm install 这个子包就行，就跟 npm install 一个 npm 包一样容易。
2. 独立构建和部署：每个子包都是一个独立的项目，有自己的 package.json 文件，独立安装依赖、独立端口和本地启动、独立测试、独立构建和部署，互不影响。
3. 降低切换成本：由于只有单一仓库，clone 代码、切换分支、安装依赖比较方便，不用在不同文件夹之间切换。
4. 节约磁盘空间：pnpm 天然具备 monorepo 能力，支持全局依赖管理，所有子包之间共享依赖，节约磁盘空间。
5. 方便提交PR：由于是单仓库，增加新组件或给组件增加新特性，只需要提交一个 MR、编写一次 MR 描述、关联一次需求/缺陷单。
6. 方便代码检视：一个完整的特性只需要统一在一个 MR 中检视，不用在多个仓库/多个 MR 之间切换。
7. 灵活便于扩展：后续增加新的工程只需要在 packages 下增加一个子包，不需要申请新的代码仓库，也降低后续仓库维护成本，比如：配置保护分支 / GitHub Actions / 仓库标签等。

## 使用

- 新建pnpm-workspace.yaml文件

``` 
packages:
  - 'docs/*'
  - 'v-ui/*'
```


## 常用命令

在根目录下安装依赖

`pnpm -w add @arco-design/web-vue`

在指定子目录 `v-ui` 安装依赖

`pnpm  -F v-ui -w add @arco-design/web-vue`
