<template>
  <div id="app">
    <header v-if="$route.name !== 'Login'">
      <TopBar :logout="showLogoutDialog" :refresh="refresh"></TopBar>
    </header>
    <main>
      <router-view></router-view>
      <div v-if="isRefreshing" role="status" aria-live="polite">
        <span v-if="!showSuccessMsg">Fetching notifications...</span>
        <span v-if="showSuccessMsg">Notifications updated</span>
      </div>
    </main>
    <div v-if="logoutDialogIsVisible" class="overlay">
      <section v-if="logoutDialogIsVisible" role="alert" aria-live="assertive">
        Wanna log out?!
        <p>This means that your localStorage entry will be deleted and you can't use GuardCat until you enter a new GitHub Access Token.</p>
        <footer>
          <button type="button" @click="hideLogoutDialog">Stay logged in</button>
          <button type="button" @click="logout">Log out</button>
        </footer>
      </section>
    </div>
  </div>
</template>

<script>
import TopBar from './components/partials/TopBar'
import notifications from './lib/notifications'
import settings from './lib/settings'

export default {
  name: 'app',
  data () {
    return {
      isRefreshing: false,
      notifications: notifications.get(),
      repoPatterns: ['stefanjudis/*', 'tc39/ecma262'],
      logoutDialogIsVisible: false,
      showSuccessMsg: false
    }
  },
  components: {
    TopBar
  },
  methods: {
    hideLogoutDialog () {
      this.logoutDialogIsVisible = false
    },
    showLogoutDialog () {
      this.logoutDialogIsVisible = true
    },
    logout () {
      settings.logout()
      notifications.clear()
      this.logoutDialogIsVisible = false
      // TODO add parameter to say successfully logged out
      this.$router.push('/login')
    },

    refresh () {
      if (!this.isRefreshing) {
        this.isRefreshing = true

        notifications.fetch({
          token: settings.get('token'),
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
  overflow: hidden;
}

header {
  position: absolute;
  width: 100%;
  z-index: 10;
}

main {
  position: absolute;

  top: 4.5em;
  left: 0;
  right: 0;
  height: calc(100vh - 4.5em);

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

[role="alert"] {
  max-width: 20em;
  padding: 1em 2em;
  color: var(--c-text);
  background: #fff;

  z-index: 12;
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.overlay {
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 11;
}

* {
  box-sizing: border-box;
}
</style>
