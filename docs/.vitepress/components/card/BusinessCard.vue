<template>
  <a-grid-item class="card12" :key="title">
    <div
      class="card-image"
      :style="{
        background:
          'linear-gradient(45deg, ' +
          colors[index % 4][0] +
          ',' +
          colors[index % 4][1] +
          ')',
      }"
    >
      <span class="auto-color-text"> {{ title }}</span>
    </div>
    <div class="category" @click="gotoNav(link)">
      {{ title }}
    </div>
    <div class="heading">
      {{ desc }}
      <div class="author">
        By <span class="name">西魏陶渊明</span> 1 year ago
      </div>
    </div>
  </a-grid-item>
</template>

<script setup lang="ts">
  const props = defineProps({
    index: {
      type: Number,
      default: 0,
    },
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

  const colors = [
    ['#00bcd4', '#5deaff'],
    ['#ff7b7b', '#ffa5a5'],
    ['#4285f4', '#7aadff'],
    ['#ff9500', '#ffc266'],
  ];

  const gotoNav = (link: string) => {
    window.open(link, '_blank');
  };
</script>

<style scoped lang="less">
  .card12 {
    width: 20vw;
    height: 250px;
    background: white;
    padding: 0.4em;
    border-radius: 6px;
    border: 2px solid transparent;
    overflow: hidden;
    position: relative;
    z-index: 0;
    transition: all 0.3s ease; /* 添加渐变过渡效果 */
    cursor: pointer;
  }

  .card12:hover {
    //border-color: #008bf8;
    animation: rotateBorder 3s ease infinite; /* 添加渐变动画 */
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  @keyframes rotateBorder {
    0% {
      border-image: linear-gradient(0deg, #f0f2f8, #5987fc, #ff7e5f) 1;
    }
    25% {
      border-image: linear-gradient(90deg, #f0f2f8, #5987fc, #ff7e5f) 1;
    }
    50% {
      border-image: linear-gradient(180deg, #f0f2f8, #5987fc, #ff7e5f) 1;
    }
    75% {
      border-image: linear-gradient(270deg, #f0f2f8, #5987fc, #ff7e5f) 1;
    }
    100% {
      border-image: linear-gradient(360deg, #f0f2f8, #5987fc, #ff7e5f) 1;
    }
  }

  @keyframes gradientAnimation {
    0% {
      border-image: linear-gradient(to right, #f0f2f8, #5987fc) 1;
    }
    50% {
      border-image: linear-gradient(to right, #5987fc, #f0f2f8) 1;
    }
    100% {
      border-image: linear-gradient(to right, #f0f2f8, #5987fc) 1;
    }
  }

  .card-image {
    width: 100%;
    height: 130px;
    border-radius: 6px 6px 0 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    //background-color: rgb(236, 236, 236);
    //background-size: cover;
    //background-position: center;
    //background-repeat: no-repeat;
  }

  .auto-color-text {
    //mix-blend-mode: difference;
  }

  .card-image:nth-child(1) {
    background: linear-gradient(45deg, #ff7b7b, #ffa5a5);
  }

  .card-image:nth-child(2) {
    background: linear-gradient(45deg, #4285f4, #7aadff);
  }

  .card-image:nth-child(3) {
    background: linear-gradient(45deg, #ff9500, #ffc266);
  }

  .card-image:nth-child(4) {
    background: linear-gradient(45deg, #2c2c2e, #5c5c5e);
  }

  .card-image:nth-child(5) {
    background: linear-gradient(45deg, #00bcd4, #5deaff);
  }

  .blog_img {
    height: 70%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .card-image:hover {
    transform: scale(0.98);
  }

  .category {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(63, 121, 230);
    padding: 10px 7px 0;
  }

  .category:hover {
    cursor: pointer;
  }

  .heading {
    font-weight: 600;
    color: rgb(88, 87, 87);
    padding: 7px;
  }

  .heading:hover {
    cursor: pointer;
  }

  .author {
    color: gray;
    font-weight: 400;
    font-size: 11px;
    padding-top: 20px;
  }

  .name {
    font-weight: 600;
  }

  .name:hover {
    cursor: pointer;
  }
</style>
