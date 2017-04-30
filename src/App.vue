<template>
  <div id="app">
    <header>
      <TopBar></TopBar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TopBar from './components/partials/TopBar'

export default {
  name: 'app',
  components: {
    TopBar
  }
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

header {
  position: fixed;
  width: 100%;
  z-index: 10;
}

main {
  position: absolute;

  top: 3.5em;
  left: 0;
  right: 0;
  bottom: 0;
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
