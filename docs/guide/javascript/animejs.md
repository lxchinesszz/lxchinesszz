---
title: animejs
editLink: true
navbar: true
category: 'JavaScript'
link: https://gsap.com/resources/getting-started/timelines#special-properties
---

>

# animejs

:::tip
平替 gsap,语法更简单。重点是免费。

animejs 对比 gsap 它的文档是非常清晰的，这里笔记就是为了学习。使用中可以直接看官方文档。
[animejs官网](https://animejs.com/)
[文档](https://github.com/juliangarnier/anime/)
:::



## 基本用法

因为 `animejs` 还不支持 ts,所以需要先安装 `pnpm add @types/animejs` 这样才有提示。

``` 
  import anime from 'animejs';
  onMounted(() => {
    anime({
      targets: '.item',
      width: {
        value: '10px', // 28 - 20 = '8px'
        duration: 1000,
        easing: 'linear',
      },
      // 类似 gsap 中的 yoyo https://animejs.com/documentation/#direction
      // direction: 'alternate',
      delay: anime.stagger(2000, { grid: [10, 10], from: 'center' }),
      // https://animejs.com/documentation/#loop
      loop: true,
    });
  });
```


## targets

### CSS 选择器

```javascript
anime({
  targets: '.css-selector-demo .el',
  translateX: 250
});
```

### DOM 节点/节点列表

```javascript
var elements = document.querySelectorAll('.dom-node-demo .el');

anime({
  targets: elements,
  translateX: 270
});
```

### JavaScript 对象

一种 JavaScript 对象，至少有一个包含数值的属性。

```javascript
var logEl = document.querySelector('.battery-log');

var battery = {
  charged: '0%',
  cycles: 120
}

anime({
  targets: battery,
  charged: '100%',
  cycles: 130,
  round: 1,
  easing: 'linear',
  update: function() {
    logEl.innerHTML = JSON.stringify(battery);
  }
});
```

### 数组

接受混合类型。例如['.el', domNode, jsObject]

```javascript
var el = document.querySelector('.mixed-array-demo .el-01');

anime({
  targets: [el, '.mixed-array-demo .el-02', '.mixed-array-demo .el-03'],
  translateX: 250
});
```

## 支持的CSS属性

任何 CSS 属性都可以设置动画。

大多数 CSS 属性都会导致布局更改或重新绘制，并导致动画断断续续。尽可能优先考虑不透明度和 CSS 变换。

```javascript
anime({
  targets: '.css-prop-demo .el',
  left: '240px',
  backgroundColor: '#FFF',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad'
});
```

###  CSS 变换

| 有效属性        | 默认单位  | 作用                                                     |
|-----------------|-----------|----------------------------------------------------------|
| 'translateX'     | 'px'      | 沿 X 轴平移                                               |
| 'translateY'     | 'px'      | 沿 Y 轴平移                                               |
| 'translateZ'     | 'px'      | 沿 Z 轴平移（适用于 3D 变换）                             |
| 'rotate'         | 'deg'     | 绕 Z 轴旋转                                               |
| 'rotateX'        | 'deg'     | 绕 X 轴旋转                                               |
| 'rotateY'        | 'deg'     | 绕 Y 轴旋转                                               |
| 'rotateZ'        | 'deg'     | 绕 Z 轴旋转（适用于 3D 变换）                             |
| 'scale'          | —         | 在所有轴上缩放比例                                        |
| 'scaleX'         | —         | 沿 X 轴缩放比例                                           |
| 'scaleY'         | —         | 沿 Y 轴缩放比例                                           |
| 'scaleZ'         | —         | 沿 Z 轴缩放比例（适用于 3D 变换）                         |
| 'skew'           | 'deg'     | 沿 X 和 Y 轴倾斜                                          |
| 'skewX'          | 'deg'     | 沿 X 轴倾斜                                               |
| 'skewY'          | 'deg'     | 沿 Y 轴倾斜                                               |
| 'perspective'    | 'px'      | 定义 3D 空间中的透视效果                                  |

```javascript
anime({
  targets: '.css-transforms-demo .el',
  translateX: 250,
  scale: 2,
  rotate: '1turn'
});
```


### 对象属性

属性要包含数字

```javascript
var objPropLogEl = document.querySelector('.js-object-log');

var myObject = {
  prop1: 0,
  prop2: '0%'
}

anime({
  targets: myObject,
  prop1: 50,
  prop2: '100%',
  easing: 'linear',
  round: 1,
  update: function() {
    objPropLogEl.innerHTML = JSON.stringify(myObject);
  }
});
```

### 支持的写法

1. 无单位
```javascript
anime({
  targets: '.unitless-values-demo .el',
  translateX: 250, // -> '250px'
  rotate: 540 // -> '540deg'
});
```
2. 具体单位
```javascript
anime({
  targets: '.specific-unit-values-demo .el',
  width: '100%', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});
```
3. 相对的

   | 接受   | 影响   | 例子      |
   |--------|--------|-----------|
   | '+='   | 添加   | '+=100'   |
   | '-='   | 减法   | '-=2turn' |
   | '*='   | 乘     | '*=10'    |

```javascript
var relativeEl = document.querySelector('.el.relative-values');
relativeEl.style.transform = 'translateX(100px)';

anime({
  targets: '.el.relative-values',
  translateX: {
    value: '*=2.5', // 100px * 2.5 = '250px'
    duration: 1000
  },
  width: {
    value: '-=20px', // 28 - 20 = '8px'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=2turn', // 0 + 2 = '2turn'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  direction: 'alternate'
});
```
4. 颜色
   Anime.js接受并转换十六进制、RGB、RGBA、HSL 和 HSLA 颜色值。**不支持 CSS 颜色代码（例如： 'red' , 'yellow' , 'aqua' ）。**
```javascript
var colorsExamples = anime.timeline({
  endDelay: 1000,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
})
.add({ targets: '.color-hex',  background: '#FFF' }, 0)
.add({ targets: '.color-rgb',  background: 'rgb(255,255,255)' }, 0)
.add({ targets: '.color-hsl',  background: 'hsl(0, 100%, 100%)' }, 0)
.add({ targets: '.color-rgba', background: 'rgba(255,255,255, .2)' }, 0)
.add({ targets: '.color-hsla', background: 'hsla(0, 100%, 100%, .2)' }, 0)
.add({ targets: '.colors-demo .el', translateX: 270 }, 0);
```

5. 从x到y

语法: `['50%', '100%']`

```javascript
anime({
  targets: '.el.from-to-values',
  translateX: [100, 250], // from 100 to 250
  delay: 500,
  direction: 'alternate',
  loop: true
});
```

6. 函数
   该函数接受 3 个参数：

   | 论点          | 信息                    |
   |---------------|-------------------------|
   | target        | 当前动画的目标元素      |
   | index         | 动画目标元素的索引      |
   | targetsLength | 动画目标总数            |

```javascript
anime({
  targets: '.function-based-values-demo .el',
  translateX: function(el) {
    return el.getAttribute('data-x');
  },
  translateY: function(el, i) {
    return 50 + (-50 * i);
  },
  scale: function(el, i, l) {
    return (l - i) + .25;
  },
  rotate: function() { return anime.random(-360, 360); },
  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
  loop: true
});
```

## keyframes

### 动画关键帧

动画关键帧是使用keyframes属性中的数组定义的。**如果关键帧内没有指定持续时间，则每个关键帧持续时间将等于动画的总持续时间除以关键帧数。**

| 类型   | 例子                                                                                             |
|--------|--------------------------------------------------------------------------------------------------|
| Array  | `[{value: 100, easing: 'easeOutExpo'}, {value: 200, delay: 500}, {value: 300, duration: 1000}]`   |

```javascript
anime({
  targets: '.animation-keyframes-demo .el',
  keyframes: [
    {translateY: -40},
    {translateX: 250},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
```

## direction

| 接受        | 信息                                            |
|-------------|-------------------------------------------------|
| 'normal'    | 动画进度从 0 到 100%                            |
| 'reverse'   | 动画进度从 100% 变为 0%                         |
| 'alternate' | 动画进度从 0% 到 100%，然后又回到 0%            |

## loop

定义动画的迭代次数。

```javascript
anime({
  targets: '.loop',
  translateX: 270,
  loop: 3,
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-infinity',
  translateX: 270,
  loop: true,
  easing: 'easeInOutSine'
});
```

## autoplay

定义动画是否自动开始。

| 接受   | 信息                |
|--------|---------------------|
| true   | 自动开始动画         |
| false  | 动画默认暂停         |


```javascript
anime({
  targets: '.dir-reverse',
  translateX: 250,
  direction: 'reverse',
  easing: 'easeInOutSine'
});

anime({
  targets: '.dir-alternate',
  translateX: 250,
  direction: 'alternate',
  easing: 'easeInOutSine'
});
```

### 属性关键帧

与动画关键帧类似，属性关键帧是使用属性对象数组定义的。属性关键帧允许重叠动画，因为每个属性都有自己的关键帧数组。

```javascript
anime({
  targets: '.property-keyframes-demo .el',
  translateX: [
    { value: 250, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
```

## duration

定义动画的持续时间（以毫秒为单位）。

### 数字

`duration: 3000`

### 函数

`(el, i) => i * 150`

### stagger

交错动画

1. 交错动画 `delay: anime.stagger(100)`

```
 延迟 = (100 * 0) 毫秒
 延迟 = (100 * 1) 毫秒
 延迟 = (100 * 2) 毫秒
 延迟 = (100 * 3) 毫秒
 延迟 = (100 * 4) 毫秒
 延迟 = (100 * 5) 毫秒
```

2. 交错 + 延迟 `anime.stagger(value, {start: startValue})`

``` 
延迟 = 500 + (100 * 0) 毫秒
延迟 = 500 + (100 * 1) 毫秒
延迟 = 500 + (100 * 2) 毫秒
延迟 = 500 + (100 * 3) 毫秒
延迟 = 500 + (100 * 4) 毫秒
延迟 = 500 + (100 * 5) 毫秒
```

3. from

| 选项            | 类型    | 信息                              |
|-----------------|---------|-----------------------------------|
| 'first' （默认） | 'string' | 从第一个元素开始效果              |
| 'last'          | 'string' | 从最后一个元素开始效果            |
| 'center'        | 'string' | 从中心开始效果                    |
| index           | 'number' | 从指定索引处开始效果              |


```javascript 
anime({
  targets: '.staggering-from-demo .el',
  translateX: 270,
  delay: anime.stagger(100, {from: 'center'})
});
```

4. direction

注意: `anime.stagger(100, {direction: 'reverse'})` 只有这 2 个参数。

| 选项        | 信息                              |
|-------------|-----------------------------------|
| 'normal' （默认） | 正常交错，从第一个元素到最后一个元素  |
| 'reverse'   | 反转惊人，从最后一个元素到第一个元素 |


```javascript
anime({
  targets: '.staggering-direction-demo .el',
  translateX: 270,
  delay: anime.stagger(100, {direction: 'reverse'})
});
```

5. easing 缓动函数

如下 有专门介绍的段落

```javascript
anime({
  targets: '.staggering-easing-demo .el',
  translateX: 270,
  delay: anime.stagger(300, {easing: 'easeOutQuad'})
});
```

6. 网格

基于二维数组的惊人值允许“波纹”效果。`anime.stagger(value, {grid: [rows, columns]})`

```javascript
anime({
  targets: '.staggering-grid-demo .el',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});
```

7. axis
强制网格交错效果的方向。
语法: `anime.stagger(value, {grid: [rows, columns], axis: 'x'})`

| 参数  | 信息         |
|-------|--------------|
| 'x'   | 跟随 x 轴    |
| 'y'   | 跟随 y 轴    |

```javascript
anime({
  targets: '.staggering-axis-grid-demo .el',
  translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
  translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
  rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
  easing: 'easeInOutQuad'
});
```

## easing

[动画曲线](https://animejs.com/documentation/#linearEasing)

### linear

对于不透明度和颜色过渡很有用。

```javascript
anime({
  targets: '.item',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'linear',
});
```

### 内置函数

[缓动函数](https://easings.net/zh-cn)

|       in       |       out       |      in-out       |      out-in       |
|:--------------:|:---------------:|:-----------------:|:-----------------:|
|  'easeInQuad'  |  'easeOutQuad'  |  'easeInOutQuad'  |  'easeOutInQuad'  |
| 'easeInCubic'  | 'easeOutCubic'  | 'easeInOutCubic'  | 'easeOutInCubic'  |  
| 'easeInQuart'  | 'easeOutQuart'  | 'easeInOutQuart'  | 'easeOutInQuart'  |  
| 'easeInQuint'  | 'easeOutQuint'  | 'easeInOutQuint'  | 'easeOutInQuint'  |  
|  'easeInSine'  |  'easeOutSine'  |  'easeInOutSine'  |  'easeOutInSine'  |  
|  'easeInExpo'  |  'easeOutExpo'  |  'easeInOutExpo'  |  'easeOutInExpo'  |  
|  'easeInCirc'  |  'easeOutCirc'  |  'easeInOutCirc'  |  'easeOutInCirc'  |  
|  'easeInBack'  |  'easeOutBack'  |  'easeInOutBack'  |  'easeOutInBack'  |  
| 'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce' | 'easeOutInBounce' |

### 自定义贝塞尔曲线

可以在[这里](https://matthewlein.com/tools/ceaser)生成

```javascript
anime({
  targets: '.cubic-bezier-demo .el',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)'
})
```

### spring

基于弹簧物理的缓动。

| Parameter | 范围       | Default 默认 | Min 最小 | Max 最大限度 |
|-----------|------------|---------------|----------|--------------|
| Mass 大量的    | 1            | 0             | 100      |
| Stiffness 刚性 | 100          | 0             | 100      |
| Damping 减震   | 10           | 0             | 100      |
| Velocity 速度  | 0            | 0             | 100      |


```javascript
anime({
  targets: '.spring-physics-demo .el',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'spring(1, 80, 10, 0)'
})
```


### Elastic

[官方文档](https://animejs.com/documentation/#elasticEasing)

| in 在           | out 出去        | in-out 输入输出     | out-in 出入         |
|-----------------|-----------------|---------------------|---------------------|
| 'easeInElastic' | 'easeOutElastic' | 'easeInOutElastic'   | 'easeOutInElastic'   |

| Parameter 范围  | Default 默认 | Min 最小 | Max 最大限度 | Info 信息                                                                 |
|----------------|---------------|----------|--------------|---------------------------------------------------------------------------|
| Amplitude 振幅 | 1             | 1        | 10           | Controls the overshoot of the curve. The larger this number, the more overshoot there is. <br> 控制曲线的超调。该数字越大，超调量越大。 |
| Period 时期    | 0.5           | 0.1      | 2            | Controls how many times the curve goes back and forth. The smaller this number, the more times the curtain goes back and forth. <br> 控制曲线来回的次数。这个数字越小，窗

```javascript
anime({
  targets: '.elastic-easing-demo .line:nth-child(1) .el',
  translateX: 270,
  easing: 'easeInElastic(1, .6)'
});

anime({
  targets: '.elastic-easing-demo .line:nth-child(2) .el',
  translateX: 270,
  easing: 'easeOutElastic(1, .6)'
});

anime({
  targets: '.elastic-easing-demo .line:nth-child(3) .el',
  translateX: 270,
  easing: 'easeInOutElastic(1, .6)'
});

anime({
  targets: '.elastic-easing-demo .line:nth-child(4) .el',
  translateX: 270,
  easing: 'easeOutInElastic(1, .6)'
});
```

### Steps

定义动画到达其最终值所需的跳跃次数。

语法: `easing: 'steps(numberOfSteps)'`

```javascript
anime({
  targets: '.step-easing-demo .el',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'steps(5)'
})
```

### 自定义函数

语法: `easing: function() { return function(time) { return time * i} }`


```javascript
anime({
  targets: '.custom-easing-demo .el',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  duration: 2000,
  easing: function(el, i, total) {
    return function(t) {
      return Math.pow(Math.sin(t * (i + 1)), total);
    }
  }
});
```

## 工具类

https://animejs.com/documentation/#remove

### remove

[移除动画](https://animejs.com/documentation/#remove)


```javascript
var animation = anime({
  targets: '.remove-demo .el',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad'
});

document.querySelector('.remove-el-button').addEventListener('click', function() {
  animation.remove('.remove-demo .line:nth-child(2) .el');
});
```

### get

获取元素属性。

语法: `anime.get(domNode, 'width', 'rem');`


```javascript
var el = document.querySelector('.get-value-demo .el');
// 48px
anime.get(el, 'width', 'px')
// 3rem
anime.get(el, 'width', 'rem')
```

### set

设置属性

语法: `anime.set(targets, {property: value});`

```javascript
anime.set('.set-value-demo .el', {
  translateX: function() { return anime.random(50, 250); },
  rotate: function() { return anime.random(0, 360); },
});
```

### random

随机函数: `anime.random(minValue, maxValue);`

```javascript {5}
function randomValues() {
  anime({
    targets: '.random-demo .el',
    translateX: function() {
      return anime.random(0, 270);
    },
    easing: 'easeInOutQuad',
    duration: 750,
    complete: randomValues
  });
}
randomValues();
```

### tick

requestAnimationFrame() 会根据显示器的刷新率来自动调节帧率

```javascript {7,8}
var animation = anime({
  targets: '.tick-demo .el',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  // 不要忘记将autoplay参数设置为false以防止anime.js内置 RAF 循环启动。
  autoplay: false
});

function loop(t) {
  animation.tick(t);
  customRAF = requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
```

### running

返回当前正在运行的所有活动的anime.js实例的数组。

[官方示例](https://animejs.com/documentation/#running)

```javascript
var runninLogEl = document.querySelector('.running-log');

anime({
  targets: '.running-demo .square.el',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
});

anime({
  targets: '.running-demo .circle.el',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutCirc'
});

anime({
  targets: '.running-demo .triangle.el',
  translateX: 270,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true,
  update: function() {
    runninLogEl.innerHTML = 'there are currently ' + anime.running.length + ' instances running';
  }
});
```

## 控制方法

### play

- 注意 autoplay 要设置为 false, 不然启动就会执行动画。

```javascript {7}
var animation = anime({
  targets: '.play-pause-demo .el',
  translateX: 270,
  delay: function(el, i) { return i * 100; },
  direction: 'alternate',
  loop: true,
  autoplay: false,
  easing: 'easeInOutSine'
});

document.querySelector('.play-pause-demo .play').onclick = animation.play;
document.querySelector('.play-pause-demo .pause').onclick = animation.pause;
```

### reverse

反转动画

```javascript
var animation = anime({
  targets: '.reverse-anim-demo .el',
  translateX: 270,
  loop: true,
  delay: function(el, i) { return i * 200; },
  easing: 'easeInOutSine'
});

document.querySelector('.reverse-anim-demo .reverse').onclick = animation.reverse;
```

### seek

- 跳转到特定时间（以毫秒为单位）。 `animation.seek(timeStamp);`
- 控制滚动时的动画 `animation.seek((scrollPercent / 100) * animation.duration);`

```javascript
var animation = anime({
  targets: '.seek-anim-demo .el',
  translateX: 270,
  delay: function(el, i) { return i * 100; },
  elasticity: 200,
  easing: 'easeInOutSine',
  autoplay: false
});

var seekProgressEl = document.querySelector('.seek-anim-demo .progress');
seekProgressEl.oninput = function() {
  animation.seek(animation.duration * (seekProgressEl.value / 100));
};
```

### timeline

时间线动画

| 类型   | 抵消    | 例子     | 信息                                      |
|--------|---------|----------|-------------------------------------------|
| 细绳   | '+=200' | '+=200'  | 上一个动画结束 200 毫秒后开始             |
| 细绳   | '-=200' | '-=200'  | 在上一个动画结束前 200 毫秒开始           |
| 数字   | Number  | 100      | 从 100 毫秒开始，无论动画在时间轴中的位置如何 |


```javascript

var controlsProgressEl = document.querySelector('.timeline-controls-demo .progress');

// 默认参数
var tl = anime.timeline({
  direction: 'alternate',
  loop: true,
  duration: 500,
  easing: 'easeInOutSine',
  update: function(anim) {
    controlsProgressEl.value = tl.progress;
  }
});
// 动画 1
tl
.add({
  targets: '.timeline-controls-demo .square.el',
  translateX: 270,
})
// 动画1 执行前-100ms开始执行。跟 gsap的表达式是一样的。  
.add({
  targets: '.timeline-controls-demo .circle.el',
  translateX: 270,
}, '-=100')
.add({
  targets: '.timeline-controls-demo .triangle.el',
  translateX: 270,
}, '-=100');

document.querySelector('.timeline-controls-demo .play').onclick = tl.play;
document.querySelector('.timeline-controls-demo .pause').onclick = tl.pause;
document.querySelector('.timeline-controls-demo .restart').onclick = tl.restart;

controlsProgressEl.addEventListener('input', function() {
  tl.seek(tl.duration * (controlsProgressEl.value / 100));
});
```

## 回调函数

### update

动画开始播放后，每一帧都会触发回调。

```javascript
var updates = 0;

anime({
  targets: '.update-demo .el',
  translateX: 270,
  delay: 1000,
  direction: 'alternate',
  loop: 3,
  easing: 'easeInOutCirc',
  update: function(anim) {
    updates++;
    progressLogEl.value = 'progress : '+Math.round(anim.progress)+'%';
    updateLogEl.value = 'updates : '+updates;
  }
});
```

### complete

如果动画的duration为0 ，则begin()和complete()回调都会被调用。

```javascript
anime({
  targets: '.begin-complete-demo .el',
  translateX: 240,
  delay: 1000,
  easing: 'easeInOutCirc',
  update: function(anim) {
    progressLogEl.value = 'progress : ' + Math.round(anim.progress) + '%';
    beginLogEl.value = 'began : ' + anim.began;
    completeLogEl.value = 'completed : ' + anim.completed;
  },
  begin: function(anim) {
    beginLogEl.value = 'began : ' + anim.began;
  },
  complete: function(anim) {
    completeLogEl.value = 'completed : ' + anim.completed;
  }
});
```


### loopBegin & loopComplete

- 每次循环开始时都会触发一次loopBegin()回调。
- 每次循环完成时都会触发一次loopComplete()回调。

```javascript
var loopBegan = 0;
var loopCompleted = 0;

anime({
  targets: '.loopBegin-loopComplete-demo .el',
  translateX: 240,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutCirc',
  loopBegin: function(anim) {
    loopBegan++;
    beginLogEl.value = 'loop began : ' + loopBegan;
  },
  loopComplete: function(anim) {
    loopCompleted++;
    completeLogEl.value = 'loop completed : ' + loopCompleted;
  }
});
```

### change

在动画延迟和endDelay之间的每一帧触发回调。

```javascript {6,7}
var changes = 0;

anime({
  targets: '.change-demo .el',
  translateX: 270,
  delay: 1000,
  endDelay: 1000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutCirc',
  update: function(anim) {
    progressLogEl.value = 'progress : '+Math.round(anim.progress)+'%';
  },
  change: function() {
    changes++;
    changeLogEl.value = 'changes : ' + changes;
  }
});
```

### changeBegin & changeComplete

每次动画开始改变时都会触发changeBegin()回调。

每次动画停止变化时都会触发changeComplete()回调。

动画方向会影响changeBegin()和changeComplete()的触发顺序。

```javascript
var changeBegan = 0;
var changeCompleted = 0;

anime({
  targets: '.changeBegin-chnageComplete-demo .el',
  translateX: 240,
  delay: 1000,
  endDelay: 1000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutCirc',
  update: function(anim) {
    progressLogEl.value = 'progress : '+Math.round(anim.progress)+'%';
  },
  changeBegin: function(anim) {
    changeBegan++;
    beginLogEl.value = 'change began : ' + changeBegan;
  },
  changeComplete: function(anim) {
    changeCompleted++;
    completeLogEl.value = 'change completed : ' + changeCompleted;
  }
});
```

### finished

当动画完成时，每个动画实例都会返回一个finished Promise。

[官方示例](https://animejs.com/documentation/#finishedPromise)

```javascript

var progressLogEl = document.querySelector('.promise-demo .progress-log');
var promiseEl = document.querySelector('.promise-demo .el');
var finishedLogEl = document.querySelector('.promise-demo .finished-log');
var demoPromiseResetTimeout;

function logFinished() {
  anime.set(finishedLogEl, {value: 'Promise resolved'});
  anime.set(promiseEl, {backgroundColor: '#18FF92'});
}

var animation = anime.timeline({
  targets: promiseEl,
  delay: 400,
  duration: 500,
  endDelay: 400,
  easing: 'easeInOutSine',
  update: function(anim) {
    progressLogEl.value = 'progress : '+Math.round(anim.progress)+'%';
  }
}).add({
  translateX: 250
}).add({
  scale: 2
}).add({
  translateX: 0
});

animation.finished.then(logFinished);
```
