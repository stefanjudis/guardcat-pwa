<template>
  <ul class="list">
    <li v-for="notification in notifications" class="item">
      <svg v-if="notification.type === 'Issue'" aria-hidden="true" class="type" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
      <svg v-if="notification.type === 'PullRequest'" aria-hidden="true" class="type" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <svg v-if="notification.type === 'Commit'" aria-hidden="true" class="type" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"></path></svg>
      <div class="title">{{ notification.title }}</div>
      <div class="repo">{{ notification.repo }}</div>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'tobBar',
  data () {
    return {}
  },
  props: ['notifications']
}
</script>

<style scoped>
  .list {
    list-style: none;
    margin: 0;
    padding: 0 1em;
  }

  .item {
    position: relative;
    padding: .5em 0 .5em 2.5em;
  }

  .item + .item {
    border-top: 1px solid #eee;
  }

  .title {
    font-weight: bold;
    margin-bottom: .25em;
  }

  .type {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    left: .25em;
    top: 1.25em;

    width: 1.5em;
    height: 1.5em;

    fill: #bbb;

    border-radius: 50%;
  }

  .type--Issue {
    background: #ff4c4c;
  }

  .type--PullRequest {
    background: green;
  }

  .type--Commit {
    background: yellow;
  }
</style>
