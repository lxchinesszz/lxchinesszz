---
title: requestAnimationFrame
editLink: true
navbar: true
category: 'JavaScript'
---

:::tip
核心本质: requestAnimationFrame 是 setInterval 的升级版。
:::

从名字来看，这就是一个关于UI 相关的 API, 目的是为了让用户感受不到页面的卡顿。我们知道动画和视频都是有帧来组成的。
那么帧率越高会越丝滑，动画就越连贯。

requestAnimationFrame = setInterval 

其实就是说他们都在做定时任务的触发，但是不同的是前者是浏览器控制的，后者则是 js 代码控制的。前者会更加的精准，后者可能会出现延迟，
其次还有些不同，requestAnimationFrame 会把触发 dom 的操作集中起来一次操作。而后者不会。所以有关于页面的操作，使用 requestAnimationFrame 会更加的合适。