<template>
  <a-grid-item class="blog" :key="title">
    <div
      class="blog_img"
      :style="{ backgroundImage: 'url(' + img + ')' }"
    ></div>
    <div class="blog_title" @click="gotoNav(link)">
      <a-typography-title :heading="6">
        {{ title }}
      </a-typography-title>
    </div>
    <div class="blog_desc">
      <a-typography-text
        type="secondary"
        :ellipsis="{ row: 2, showTooltip: true }"
      >
        {{ desc }}
      </a-typography-text>
    </div>
  </a-grid-item>
</template>

<script setup lang="ts">
  defineProps({
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  });

  const gotoNav = (link: string) => {
    window.open(link, '_blank');
  };
</script>

<style scoped lang="less">
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
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .blog_title {
      padding: 0 15px;
      height: 10%;
      cursor: pointer;
    }

    .blog_desc {
      padding: 0 15px;
      height: 20%;
    }
  }

  .blog:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease-in;
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .blog:hover .blog_title {
  }
</style>
