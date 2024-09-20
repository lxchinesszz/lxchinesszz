---
title: createDocumentFragment
editLink: true
navbar: true
category: 'JavaScript'
---

:::tip
核心本质: createDocumentFragment 将 dom 操作批量进行操作
:::

如下代码片段，循环往 document 里面添加元素

```
let element  = document.getElementById('ul');
let eles = document.getElementByIds('li');
for (var i = eles.length - 1; i >= 0; i--) {
    element.appendChild(eles[i]);
}
```

先创建一个 Fragment 片段，js 在内存中先把对象创建好，然后一次往 document 中进行插入。

```
let element  = document.getElementById('ul');

let fragment = document.createDocumentFragment();
let browsers = ['Firefox', 'Chrome', 'Opera', 
    'Safari', 'Internet Explorer'];

browsers.forEach((browser) => {
    let li = document.createElement('li');
    li.textContent = browser;
    // 此处往文档片段插入子节点，不会引起回流 （相当于打包操作）
    fragment.appendChild(li);
});
element.appendChild(fragment); // 将打包好的文档片段插入ul节点，只做了一次操作
```