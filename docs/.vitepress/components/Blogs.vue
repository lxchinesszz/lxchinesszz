<template>
  <div class="skillWrapper">
    <div>
      <a-typography-title :heading="2"> 技术专题</a-typography-title>
    </div>
    <a-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :col-gap="24">
      <BlogCard
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :img="post.img"
        :desc="post.desc"
        :link="post.link"
      />
    </a-grid>
  </div>
</template>

<script setup lang="ts">
  import BlogCard from './card/BlogCard.vue';

  type Post = {
    img: string;
    title: string;
    link: string;
    desc: string;
  };

  const posts: Post[] = [
    {
      img: 'https://img.springlearn.cn/blog/1c861b137fedd470229042b05bc85d97.png',
      title: '《Spring专题系列》',
      link: '/post/java/spring/core01.html#一、前言',
      desc: 'spring 是 java 开发者,永远绕不开的结。是非常值得开发者来学习的,面对如此庞大的框架, 我们的学习一定要找到一个切入点, 这样学习效率才会更高。',
    },
    {
      img: 'https://img.springlearn.cn/blog/learn_1649514858000.png',
      title: '《Mybatis专题系列》',
      link: '/post/java/mybatis/环境搭建.html',
      desc: 'ORM映射框架,我们学习mybatis这一个就够了,万变不离其宗,主要是思想。当学习完这个系列, 你将不仅仅会用他来写业务代码, 更可以进行二次开发和扩展。',
    },
    {
      img: 'https://img.springlearn.cn/blog/learn_1597068628000.png',
      title: '《Dubbo源码学习系列》',
      link: '/post/java/dubbo/Dubbo源码解析之客户端Consumer.html#一、启动一个客户端consumer',
      desc: 'dubbo 是一款Java RPC框架, 我们可以从中窥视到网络通信的魅力。当复杂的dubbo 都学会了，还会害怕，SpringCloud生态吗? 轻松拿捏他。',
    },
    {
      img: 'https://img.springlearn.cn/blog/learn_1654183539000.png',
      title: '《Jvm调优系列》',
      link: '/post/project/jvm/JVM.html',
      desc: '大促调优,大促压测,jvm调优如果还不会,怎么敢称为Java高级工程师呢? 你距离高级工程师可能只差这篇文章和大促的实战的经验。',
    },
    {
      img: 'https://img.springlearn.cn/blog/learn_1600400853000.png',
      title: '从零到1开发网络通信框架',
      link: '/post/project/mojito/第01篇:手写JavaRPC框架之思路分析.html#一、前言',
      desc: '分布式定时任务,我们学着一个就够用了,还是那句话思路决定出路。elastic都会了,xxljob你还会害怕吗?',
    },
    {
      img: 'https://img.springlearn.cn/blog/e010189ef21411b8ce92f06342f65dd3.png',
      title: '《Java必会工具系列》',
      link: '/post/java/tools/bytecode/APT.html',
      desc: '工欲善其事必先利其器,本系列中所列举的工具框架,在你日后的业务开发中,或是在框架轮子的开发中,都一定会发挥作用。',
    },
  ];
</script>

<style scoped>
  .skillWrapper {
    width: 100%;
    position: relative;
  }
</style>
