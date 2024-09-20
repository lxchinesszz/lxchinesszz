---
title: gsap plugin
editLink: true
navbar: true
category: 'JavaScript'
link: https://gsap.com/resources/getting-started/timelines#special-properties
---

# GSAP

免费版本支持这几个插件: 

1. ScrollTrigger
2. Draggable
3. Flip
4. MotionPath
5. Observer
6. Pixi
7. ScrollTo
   - 滑动到指定元素的区域
8. Text

|插件|免费|Plus|Premium|Business|
|:--:|:--:|:--:|:--:|:--:|
| 新功能和错误修复的通知|x|y|y|y|
|DrawSVG|x|y|y|y|
|Physics2D|x|y|y|y|
|PhysicsProps|x|y|y|y|
|ScrambleText|x|y|y|y|
|CustomBounce|x|y|y|y|
|CustomWiggle|x|y|y|y|
|ScrollSmoother|x|y|y|y|
|MorphSVG|x|y|y|y|
|Inertia|x|y|y|y|
|SplitText|x|y|y|y|
|MotionPathHelper|x|y|y|y|
|GSDevTools|x|y|y|y|
| 商业许可证|x|y|y|y|
| 提供多开发人员会员资格|x|y|y|y|


## ScrollTrigger


```js
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
```

### 最简单的用法

```
gsap.to('.box', {
    scrollTrigger: '.box', //当.box出现的viewport 中开始动画
    x: 500
});
```

### 对象配置

1. markers 开始标记
2. trigger 触发的元素
3. start 两个参数，第一个参数是元素的位置，第二个参数是视窗的位置。eg: top center,触发元素的 top 和视窗 center 对齐时候开始动画。
4. end  两个参数，第一个参数是元素的位置，第二个参数是视窗的位置。eg: bottom top,触发元素的 bottom 和视窗 top 对齐时候结束动画。也可以为表达式 '+=100%' 动画完成才结束
5. scrub 平滑，向上滚动时候正向播放动画，向下滚动时候逆向播放动画。



### 组合用法

```
let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: '.container',
        pin: true, // 在活动状态下固定触发元素。
        start: 'top top', 
        end: '+=500', 
        scrub: 1, 
        snap: {
            snapTo: 'labels', // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        }
    }
});
```


## ScrollToPlugin

[ScrollToPlugin](https://gsap.com/docs/v3/Plugins/ScrollToPlugin/)

```
  import ScrollToPlugin from 'gsap/ScrollToPlugin';

  gsap.to(window, { duration: 2, scrollTo: '.b', ease: 'power2' });

```

## ScrollTo

```javascript
gsap.to(window, {
  duration: 2,
  scrollTo: { y: 300, autoKill: true, onAutoKill: myAutoKillFunction },
});

function myAutoKillFunction() {
  alert("autoKill");
}
```

## Text

[Text](https://gsap.com/docs/v3/Plugins/TextPlugin/)

```javascript
<h1 id="myText">wait 1 second please</h1>
gsap.to("#myText", {duration: 2, text: "thank you for waiting", delay: 1});
```


## Draggable

[Draggable](https://gsap.com/docs/v3/Plugins/Draggable/)

```javascript
gsap.registerPlugin(Draggable, InertiaPlugin);

Draggable.create(".flair--1", {
  type: "x",
  bounds: ".container"
});

Draggable.create(".flair--3b", {
  type: "rotation",
  inertia: true
});

Draggable.create(".flair--4b", {
  bounds: ".container",
  inertia: true
});

```

### Pixi

[Pixi](https://pixijs.io/examples-v7/#/gsap3-interaction/gsap3-basic)