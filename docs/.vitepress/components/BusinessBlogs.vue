<template>
  <div class="skillWrapper">
    <div>
      <a-typography-title :heading="2"> 业财一体建设</a-typography-title>
    </div>
    <a-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :col-gap="24" :row-gap="12">
      <BusinessCard
          v-for="(post, index) in posts"
          :key="index"
          :index="index"
          :title="post.title"
          :img="post.img"
          :desc="post.desc"
          :link="post.link"
      />
    </a-grid>
  </div>
</template>

<script setup lang="ts">
import BlogCard from "./card/BlogCard.vue";
import BusinessCard from "./card/BusinessCard.vue";

type Post = {
  img: string;
  title: string;
  link: string;
  desc: string;
};

const posts: Post[] = [
  {
    img: 'https://img.springlearn.cn/blog/1c861b137fedd470229042b05bc85d97.png',
    title: '企业报表线上化',
    link: '/post/scm/finance/report.html',
    desc: '中级',
  },
  {
    img: 'https://img.springlearn.cn/blog/learn_1649514858000.png',
    title: '从零到1搭建业财一体',
    link: '/post/scm/introduce/业财一体.html',
    desc: '',
  },
  {
    img: 'https://img.springlearn.cn/blog/learn_1597068628000.png',
    title: '采购系统建设',
    link: '/post/scm/',
    desc: '',
  },
  {
    img: 'https://img.springlearn.cn/blog/learn_1654183539000.png',
    title: '商货品建设',
    link: '/post/scm/',
    desc: '',
  },
  {
    img: 'https://img.springlearn.cn/blog/bc0392fd430c6ed9465a5b2400ef5288.png',
    title: '仓库管理系统',
    link: '/post/scm/',
    desc: '',
  },
  {
    img: 'https://img.springlearn.cn/blog/e010189ef21411b8ce92f06342f65dd3.png',
    title: '库存系统建设',
    link: '/post/scm/',
    desc: '',
  },
  {
    img: '',
    title: '财务系统建设',
    link: '/post/scm/',
    desc: '',
  },
];
</script>

<style scoped>
.skillWrapper {
  width: 100%;
  position: relative;
}

.blog {
  width: 20vw;
  height: 250px;
  background: white;
  margin: 5px;
  border-radius: 15px;

  .blog_img {
    height: 70%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .blog_title {
    padding: 0 15px;
    height: 10%;
  }

  .blog_desc {
    padding: 0 15px;
    height: 20%;
  }

  .blog:hover {
    transform: translateY(-10px);
    transition: transform 0.3s;
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
}
</style>
