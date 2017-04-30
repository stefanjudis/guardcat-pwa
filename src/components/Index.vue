<template>
  <div class="root">
    <NotificationList v-if="notifications.length" :notifications="notifications"></NotificationList>
    <div v-if="!notifications.length" class="emptyMsg">
      <span class="number">0</span>
      nofitications
      <span class="pullMsg">Pssst... You can pull to refresh</span>
    </div>
  </div>
</template>

<script>
import NotificationList from './partials/NotificationList'
import notifications from '../lib/notifications'

export default {
  name: 'index',
  data () {
    return {
      notifications: notifications.get()
    }
  },
  methods: {},
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
  overflow: scroll;
  // position: relative !important;
}
</style>
