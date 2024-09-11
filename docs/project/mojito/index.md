---
breadcrumb: false
navbar: true
sidebar: true
pageInfo: true
contributor: true
editLink: true
updateTime: true
prev: true
next: true
comment: true
footer: true
backtotop: true
title: Mojito介绍
category: Mojito
---

![](https://img.springlearn.cn/blog/dd74eb95dc1ea6c3d0a5ea341f2f62cf.png)

[Mojito Framework](https://mojito.springlearn.cn)

名字以周杰伦新专辑《Mojito》命名。

### 一、为什么要写这个项目？🥳

#### 原因1

其实小编个人,比较热衷于造轮子。在造轮子的过程中，设计到的通信一直都是一个问题，在SpringBoot的环境下，不得不引入`actuator`模块,进行端点构建。
虽然SpringBoot升级到2版本之后[WebEndpoint](https://blog.springlearn.cn/posts/40046/)会更加方便,但是感觉还是比较复杂,以使我在关于业务逻辑的同时，还要去适配
WebEndpoint的编程方式。于是就有了,构建一个简单方便的通信层框架。因为Java的Socket编程API不够友好,所以小编在Socket编程上选择Netty进行封装。

#### 原因2
作为开发者,无论我们写什么业务,最终都会通过web接口暴露进行通信。传统的方式是我们引入一个
web容器,比如tomcat、jboss等等。

在分布式环境下，我们使用到的通信框架，如dubbo、hsf、springcloud之类也离不开通信。这些是已经造好的轮子,但是我只需要轮子中的⛓链条,只要通信层。所以就将通信层
给抽离出来，并提供更加简单的API.

### 二、主要运用在什么地方？🚀

mojito的定位是通信层框架,其本质是基于Netty进行二次封装,提供更加简单的API,方便开发者进行调用。
如果你要写一个通信类的组件，但是又不希望引入web容器，或者rpc之类的框架。此时mojito就是最佳选择,因为它提供非常简单API可以快速的构建通信模块,代码量缺只有一点点的样子。当然如果你对Netty比较熟悉,也可以直接使用Netty进行开发。

```java
    @Test
    public void serverTest() throws Exception {
        Mojito.server(RpcUserRequest.class, RpcUserResponse.class)
                //这里接受客户端的请求,并返回一个相应
                .serverHandler((channel, rpcRequest) -> new RpcUserResponse("服务端返回: " + rpcRequest.message))
                .create()
                .start(12306);
    }
```


