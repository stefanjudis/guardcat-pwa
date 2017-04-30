<template>
  <div id="app">
    <header>
      <TopBar :refresh="refresh"></TopBar>
    </header>
    <main>
      <router-view></router-view>
      <div v-if="isRefreshing" role="status" aria-live="polite">
        <span v-if="!showSuccessMsg">Fetching notifications...</span>
        <span v-if="showSuccessMsg">Notifications updated</span>
      </div>
    </main>
  </div>
</template>

<script>
import TopBar from './components/partials/TopBar'
import notification from './lib/notifications'

export default {
  name: 'app',
  data () {
    return {
      isRefreshing: false,
      notifications: JSON.parse(localStorage.getItem('notifications')) || [],
      repoPatterns: ['stefanjudis/*', 'tc39/ecma262'],
      showSuccessMsg: false,
      token: localStorage.getItem('token')
    }
  },
  components: {
    TopBar
  },
  methods: {
    refresh () {
      if (!this.isRefreshing) {
        this.isRefreshing = true

        notification.fetch({
          token: this.token,
          repoPatterns: this.repoPatterns
        })
          .then(notifications => {
            this.notifications = notifications
            return notifications
          })
          .then(_ => {
            this.showSuccessMsg = true

            setTimeout(_ => {
              this.isRefreshing = false
              this.showSuccessMsg = false
            }, 3000)
          })
      }
    }
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
  height: calc(100vh - 3.5em);

  overflow: scroll;
}

[role="status"] {
  position: fixed;
  bottom: 0;
  background: var(--c-dark-green);
  width: 100%;
  padding: 1em 2em;
  color: #fff;
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

* {
  box-sizing: border-box;
}
</style>
