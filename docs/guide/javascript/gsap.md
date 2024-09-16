---
title: gsap
editLink: true
navbar: true
category: 'JavaScript'
link: https://zhuanlan.zhihu.com/p/711414119
---

# GSAP

```

```

## ease

[ease](https://gsap.com/resources/getting-started/Easing)

- bounce.out 物理反转

## staggers

Staggers（交错动画）是一个非常有用的功能，它允许我们设置动画之间的间隔效果，以创建出更加动态和吸引人的动画序列。Staggers支持多种配置方式，主要包括以下几种：

### 数字配置

```
gsap.to('.box', {
    y: 100,
    stagger: 0.1 //每次“。”间隔0.1秒元素开始动画
});
```

### 对象配置

1. each：指定每个动画之间的固定时间间隔（以秒为单位）。
2. amount：与each属性配合使用，表示整个动画序列的总时长。如果设置了amount，GSAP会根据动画的数量和each的值来自动调整每个动画的间隔，以确保整个序列在指定的时间内完成。
3. from：指定动画开始的索引位置。可以是一个数字，表示从哪个元素开始动画；也可以是一个数组，如[0, 1]，表示从第一个和第二个元素同时开始。
4. grid：指示动画元素按照几行几列的网格布局进行交错。例如，grid: [3, 5]表示元素被组织成3行5列的网格。
5. axis：指定交错动画的轴向，可以是"x"、"y"或省略（默认同时考虑x和y轴）。如果设置了grid属性，axis可以用来指定是沿x轴还是y轴进行交错。
6. ease：定义动画的缓动效果。可以使用GSAP提供的各种缓动函数，如"power2.inOut"。[ease](https://gsap.com/resources/getting-started/Easing)
7. form: 配合 grid 使用，start、end、center、edges、random：这些属性用于控制动画序列的开始位置。例如，start表示从第一个元素开始，end表示从最后一个元素开始，center表示从中心元素开始，edges表示从第一个和最后一个元素同时开始，random表示随机位置开始。

```js
    gsap.to('.item', {
      duration: 1,
      scale: 0.4,
      yoyo: true,
      repeat: -1,
      ease: 'none',
      stagger: {
          amount: 1.5,
          // each: 1,
          axis: 'x',
          ease: 'none',
          grid: [12, 12],
          from: 'center'
      },
    });
```

### 函数配置

```
      stagger: function(index, target, list) {
        // 索引 1，2，3，4，5
        console.log(index);
        // 元素 <div class='item'></div>
        console.log(target);
        // 元素集合
        console.log(list);
        return index * 0.1;
      },
```

## ScrollTrigger Plugin

其他插件不是免费的，个人开发者就不用学了。这里就介绍一个 `ScrollTrigger`. 我先放弃。哈哈

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
4. end  两个参数，第一个参数是元素的位置，第二个参数是视窗的位置。eg: bottom top,触发元素的 bottom 和视窗 top 对齐时候结束动画。
5. scrub 平滑，向上滚动时候正向播放动画，向下滚动时候逆向播放动画。
