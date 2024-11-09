<template>
  <div id="footer">
    <div
      style="
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
      "
    >
      <div style="text-align: center">
        <a-typography-title :heading="5"> 友情链接</a-typography-title>
        <a-typography-text type="secondary">
          只要坚持不懈，嘲笑你的人，迟早会被你笑死。
        </a-typography-text>
      </div>
      <div style="width: 100%; text-align: center">
        <a-row class="grid-demo" justify="center">
          <a-col :span="4" v-for="(user, index) in userList" :key="index">
            <div>{{ user.title }}</div>
          </a-col>
        </a-row>
      </div>
    </div>
    <a-divider/>
    <div style="bottom: 0;  width: 100vw; text-align: center;">
      只要坚持不懈，嘲笑你的人，迟早会被你笑死。 本站总访问量26895次
      本站访客数23589人次 Copyright © 2024 西魏陶渊明
    </div>
  </div>
</template>

<script setup>
  const userList = [
    {
      title: '陈随易',
      link: 'https://me.yicode.tech/',
    },
    {
      title: 'Vue3 编译原理揭秘',
      link: 'https://vue-compiler.iamouyang.cn/',
    },
  ];
</script>

<style scoped>
  #footer {
    margin-top: 10vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
