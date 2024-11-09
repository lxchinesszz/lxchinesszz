---
navbar: true
title: v-button
category: '05-按钮'
---

# 快速上手

```html 
<v-button>
    按钮
</v-button>
```

## 警告按钮

:::demo

```vue
<template>
  <div>
    <v-button type="primary" @click="addShake">
      <template #icon>
        <v-icon icon="icon-biaoshu" />
      </template>
      不错
    </v-button>
  </div>
</template>

<script setup>
  
  const addShake = () => {
    // animateRef.value.shake();
  };
</script>
```
:::


## 更多按钮

:::demo

```vue
<template>
  <v-more-button>
    <template #content>
      <a-doption v-for="i in 10" :key="i" @click="alertAction(i)">打印二维码-{{ i }}</a-doption>
    </template>
  </v-more-button>
</template>

<script setup>

  const alertAction = (i) => {
    alert(i);
  };
</script>
```
:::
