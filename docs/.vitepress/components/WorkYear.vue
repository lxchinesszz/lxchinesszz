<template>
  <div class="introduction">
    <Card />
    <HoveImageCard />
    <!--    <M2/>-->
    <Zmt />
    <MySkills />
    <BlogWelcome />
    <Earth/>
    <!--    <div class="left">-->
    <!--      <a-space direction="vertical" fill>-->
    <!--        <div style="display: flex; justify-content: start; align-items: center">-->
    <!--          <a-avatar :size="40" shape="square" style="background-color: #da0f0f"-->
    <!--            >Tiktok-->
    <!--          </a-avatar>-->
    <!--          <h1-->
    <!--            style="-->
    <!--              color: #da0f0f;-->
    <!--              font-weight: bold;-->
    <!--              margin-left: 15px;-->
    <!--              scale: 1.2;-->
    <!--            "-->
    <!--          >-->
    <!--            Tiktok-->
    <!--          </h1>-->
    <!--        </div>-->
    <!--        <a-typography-paragraph>-->
    <!--          从事供应链系统开发及财务系统开发、财务系统开发。-->
    <!--          完成供应链全业务流程设计参与开发 A design is a plan or specification-->
    <!--          for the construction of an object or system or for the implementation-->
    <!--          of an activity or process, or the result of be a design activity.-->
    <!--        </a-typography-paragraph>-->
    <!--      </a-space>-->
    <!--      <div class="card small_card">-->
    <!--        <a-statistic extra="Work" :start="true" :value="4" :precision="0.1" />-->
    <!--      </div>-->
    <!--      <div class="right">-->
    <!--        <div class="bu"></div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div style="flex: 1"></div>
  </div>
</template>

<script setup>
  import Card from './card/Card.vue';
  import HoveImageCard from './card/HoveImageCard.vue';
  import M2 from './card/M2.vue';
  import Zmt from './card/Zmt.vue';
  import MySkills from './card/MySkills.vue';
  import BlogWelcome from './card/BlogWelcome.vue';
  import Earth from "./card/Earth.vue";
</script>

<style scoped>
  .introduction {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-wrap: wrap;

    .left {
      position: relative;
      border-radius: 15px;
      padding: 35px;
      flex: 2;
      display: flex;
      flex-direction: column;
      background: white;
    }

    .right {
      position: absolute;
      padding: 35px 0;
      border-radius: 15px;
      right: -50vh;
      width: 45vw;
      top: 25px;
      bottom: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2d394b;
      box-shadow: 20px 113px 140px -30px rgba(0, 0, 0, 0.1);

      .bu {
        border-radius: 15px;
        box-shadow:
          0 3px 17px rgba(0, 0, 0, 0.035),
          0 25px 141px rgba(0, 0, 0, 0.07);
        position: absolute;
        left: 0;
      }
    }
  }

  .card {
    border-radius: 15px;
    background: linear-gradient(to right bottom, #fcfcfd 20%, #f2f2f3 150%);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
    padding: 0 15px;
    transition:
      opacity 0.6s ease,
      transform 0.3s ease;
  }

  .small_card {
    padding: 15px;
    width: 100%;
    box-shadow:
      0 3px 17px rgba(0, 0, 0, 0.035),
      0 25px 141px rgba(0, 0, 0, 0.07);
  }
</style>
