<template>
  <div id="mac-window">
    <div class="mac-window-bg"></div>
    <div class="window">
      <!--      <div class="top-bar">-->
      <!--        <div class="window-action">-->
      <!--          <ul>-->
      <!--            <li>-->
      <!--              <a href=""></a>-->
      <!--            </li>-->
      <!--            <li>-->
      <!--              <a href=""></a>-->
      <!--            </li>-->
      <!--            <li>-->
      <!--              <a href=""></a>-->
      <!--            </li>-->
      <!--          </ul>-->
      <!--        </div>-->
      <!--        <div class="window-right"></div>-->
      <!--      </div>-->
      <div class="screen"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  #mac-window {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .mac-window-bg {
    position: absolute;
    background-image: linear-gradient(-45deg, #9aa7c5 50%, #a3d6ef 50%);
    filter: blur(160px);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-size: 800% 800%; /* 扩大背景尺寸，用于平滑渐变 */
    animation: gradientAnimation 10s ease infinite; /* 定义动画，10秒完成一轮，持续循环 */
  }

  /* 定义动画关键帧 */
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .window {
    margin: 20px auto;
    position: relative;
    background-size: cover;
    width: 40vw;
    min-height: 430px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    filter: blur(0px);
    background-image: url('https://www.jetbrains.com/webstorm/img/tour_img.png');
  }

  div.top-bar {
    position: absolute;
    top: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(#dddddd, #c7c7c7);
    width: 100%;
  }

  div.screen {
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
  }

  .window-action {
    padding: 0 20px;

    ul {
      position: relative;
      top: 3px;
      padding: 0;
      margin: 10px 0;
      display: block;
      list-style: none;

      li {
        margin: 0 3px;
        display: block;
        line-height: 50px;
        background: #333;
        width: 15px;
        height: 15px;
        border-radius: 100px;
        display: inline-block;
        transition: all 0.1s ease;

        &:nth-of-type(1) {
          background: #e36e6b;

          &:hover {
            background: darken(#e36e6b, 10%);
          }
        }

        &:nth-of-type(2) {
          background: #debb43;

          &:hover {
            background: darken(#debb43, 10%);
          }
        }

        &:nth-of-type(3) {
          background: #36d489;

          &:hover {
            background: darken(#36d489, 10%);
          }
        }
      }
    }
  }

  .window-right {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 20px;
  }

  h1.logo {
    font-size: 40px;
    padding-top: 170px;
    text-align: center;
    font-weight: 700;
    margin: 0;
    color: #1f89e5;

    span.thin {
      font-weight: 300;
    }
  }

  p.tagline {
    margin: 0;
    color: #1f89e5;
    text-align: center;

    &:after {
      content: '*';
    }

    &:before {
      content: '*';
    }
  }

  p.author {
    text-align: center;
    color: #444;

    a {
      color: #1f89e5;
      text-decoration: none;
    }
  }
</style>
