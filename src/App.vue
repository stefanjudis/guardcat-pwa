<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

:root {
  --c-dark-green: #00796b;
  --c-yellow: #ffeb3b;

  --c-text: rgba(0,0,0,.87);

  font-family: Roboto,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--c-text);
}

body, html {
  margin: 0;
  padding: 0;

  height: 100%;
}

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

* {
  box-sizing: border-box;
}
</style>
