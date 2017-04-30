<template>
  <div class="root">
    <scroller class="scroller" :on-refresh="refresh" refresh-text="Fetching notifications">
      <NotificationList v-if="notifications.length" :notifications="notifications"></NotificationList>
      <div v-if="!notifications.length" class="emptyMsg">
        <span class="number">0</span>
        nofitications
        <span class="pullMsg">Pssst... You can pull to refresh</span>
      </div>
    </scroller>
  </div>
</template>

<script>
import NotificationList from './partials/NotificationList'
import guardCat from 'guardcat'

export default {
  name: 'index',
  data () {
    return {
      notifications: JSON.parse(localStorage.getItem('notifications')) || [],
      token: localStorage.getItem('token')
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
    NotificationList
  }
}
</script>

<style scoped>

.emptyMsg {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 4em);
}

.pullMsg {
  display: block;
  margin: 1em 0;
  font-style: italic;
}

.number {
  font-size: 50vw;
}

.scroller {
  position: relative !important;
}
</style>
