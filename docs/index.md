---
layout: page
footer: false
navbar: false
---


[//]: # (<NewHome style="width: 100vw;overflow: hidden;background: red"/>)

<NewHome2 style="width: 100%;"/>

[//]: # (<NewHome style="width: 100vw;height:calc&#40;100vh - var&#40;--vp-nav-height&#41;&#41;;"/>)

[//]: # (<XHome style="width: 100vw;"/>)

<style>

body {
    overscroll-behavior: none;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

--vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
--vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
:root {
--vp-home-hero-image-filter: blur(56px);
}
}

@media (min-width: 960px) {
:root {
--vp-home-hero-image-filter: blur(68px);
}
}

/* 整体滚动条 */
::-webkit-scrollbar {
    width: 10px; /* 滚动条的宽度 */
    height: 10px; /* 横向滚动条的高度 */
    display: none;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
    background: #f1f1f1; /* 滚动条轨道的背景颜色 */
    border-radius: 10px; /* 圆角 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    background: #888; /* 滑块颜色 */
    border-radius: 10px; /* 滑块的圆角 */
}

/* 当用户悬停在滚动条滑块上时的样式 */
::-webkit-scrollbar-thumb:hover {
    background: #555; /* 悬停时的颜色变化 */
}
</style>
