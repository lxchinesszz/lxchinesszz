<template>
  <div class="card">
    <svg
      class="App-logo"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JavaScript"
      role="img"
      viewBox="0 0 512 512"
    >
      <rect width="512" height="512" rx="15%" fill="#f7df1e"></rect>
      <path
        fill="#25241c"
        d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"
      ></path>
    </svg>
    <div class="header">
      <center>
        Welcome to<br />
        JavaScript
      </center>
    </div>
    <button class="App-button">Start learning now</button>
  </div>
</template>

<script setup></script>

<style scoped>
  /* From Uiverse.io by aadium */
  .card {
    background-color: #25241c;
    border: 3px solid #f7df1e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 30px 40px;
    color: #f7df1e;
    border-radius: 45px;
  }

  .App-logo {
    pointer-events: none;
    width: 120px;
    margin-bottom: 20px;
  }

  .App-button {
    padding: 10px 20px;
    background-color: transparent;
    color: #f7df1e;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    border: 3px solid #f7df1e;
    border-radius: 5em;
    margin-top: 20px;
    transition: 0.2s;
  }

  .App-button:hover {
    color: #2e2d23;
    background-color: #f7df1e;
  }
</style>
