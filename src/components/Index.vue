<template>
  <div class="root">
    <header>
      <TopBar></TopBar>
    </header>
    <main>
      <scroller class="scroller" :on-refresh="refresh" refresh-text="Fetching notifications">
        <NotificationList v-if="notifications.length" :notifications="notifications"></NotificationList>
        <div v-if="!notifications.length">
          No nofitications
        </div>
      </scroller>
    </main>
  </div>
</template>

<script>
import NotificationList from './partials/NotificationList'
import TopBar from './partials/TopBar'
import guardCat from 'guardcat'

export default {
  name: 'index',
  data () {
    return {
      token: localStorage.getItem('token'),
      notifications: JSON.parse(localStorage.getItem('notifications')) || []
    }
  },
  methods: {
    refresh (done) {
      guardCat.run({
        token: this.token,
        repoPatterns: ['stefanjudis/*', 'tc39/ecma262']
      }).then(notifications => {
        console.log(notifications)
        this.notifications = notifications.map(notification => {
          return {
            title: notification.subject.title,
            type: notification.subject.type,
            repo: notification.repository.full_name,
            url: notification.repository.url
          }
        })

        return this.notifications
      }).then(notifications => {
        localStorage.setItem('notifications', JSON.stringify(notifications))
        done()
      })
    }
  },
  components: {
    TopBar,
    NotificationList
  }
}
</script>

<style scoped>

.root {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

header {
  position: fixed;
  width: 100%;
  z-index: 10;
}

main {
  position: absolute;

  top: 4em;
  left: 0;
  right: 0;
}

.scroller {
  position: relative !important;
}
</style>
