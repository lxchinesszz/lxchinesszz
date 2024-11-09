<template>
  <div id="container">
    <div class="roles-container">
      <div class="roles-wrapper">
        <div class="roles">
          <span class="highlight">独立开发者</span>
        </div>
        <div class="roles">
          <span class="highlight">设计师</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

  :root {
    --primary-color: #3b82f6;
    --primary-hover-color: #2563eb;
    --background-color: #f3f4f6;
    --card-background: #ffffff;
    --text-color: #1f2937;
    --text-secondary: #4b5563;
    --accent-color: #ef4444;
  }

  #container {
    width: 100vw;
    height: 50vh;
    background-color: yellow;
  }

  .roles-container {
    height: 1.5em;
    position: relative;
  }

  .roles-wrapper {
    position: absolute;
    left: 0;
    top: 0;
  }

  .roles {
    height: 50%;
    display: flex;
    align-items: center;
    animation: slideUp 8s infinite;
  }

  @keyframes slideUp {
    0%, 45% {
      transform: translateY(0);
    }
    50%, 95% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  .highlight {
    color: var(--accent-color);
    font-weight: 600;
    width: 100px;
    height: 200px;
  }
</style>
