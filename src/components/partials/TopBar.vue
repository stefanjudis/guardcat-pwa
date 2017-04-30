<template>
  <div class="topBar">
    <router-link v-if="$route.name !== 'GuardCat'" :to="{ name: 'GuardCat'}" aria-label="Go back" class="backLink">
      <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
    </router-link>
    <span class="topBar__title">{{ $route.name }}</span>
    <button type="button" aria-label="Open menu" @click="toggleSettings">
      <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
    </button>
    <div v-if="showSettings" class="menu">
      <ul>
        <li><router-link :to="{ name: 'Settings'}">Settings</router-link></li>
        <li>Log out</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tobBar',
  data () {
    return {
      showSettings: false
    }
  },
  methods: {
    toggleSettings () {
      this.showSettings = !this.showSettings
    }
  }
}
</script>

<style scoped>
  button {
    fill: #fff;

    margin-left: auto;
  }

  .menu {
    position: absolute;

    top: .5em;
    right: 3em;

    background: #fff;
    color: var(--c-text);
  }

  .backLink {
    margin-right: .5em;
  }

  .backLink svg {
    display: block;
    fill: #fff;
  }

  .topBar {
    padding: .5em 1em;

    background-color: var(--c-dark-green);
    color: #fff;

    font-size: 1.25em;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),
                0 4px 5px 0 rgba(0,0,0,.14),
                0 1px 10px 0 rgba(0,0,0,.12)
  }
</style>
