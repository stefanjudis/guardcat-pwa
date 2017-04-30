<template>
  <div class="topBar">
    <router-link v-if="$route.name !== 'GuardCat'" :to="{ name: 'GuardCat'}" aria-label="Go back" class="backLink">
      <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
    </router-link>
    <span class="topBar__title">{{ $route.name }}</span>

    <svg width="24" class="logo" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg"><title>Group 2</title><g fill-rule="nonzero"><path d="M13.219.391C6.83-.171 1.208 4.406.664 10.616c-.547 6.209 4.188 11.699 10.573 12.26 6.389.563 12.01-4.016 12.558-10.224C24.34 6.442 19.606.954 13.219.39zm9.263 11.913c-.47 5.33-5.2 9.27-10.566 8.796-5.362-.47-9.332-5.176-8.862-10.507.467-5.331 5.198-9.27 10.564-8.797 5.364.473 9.332 5.177 8.864 10.508z"/><path d="M16.52 9.009l3.701.065.018-1.1-3.701-.064a3.702 3.702 0 0 0-.13 7.402l3.703.067.018-1.1-3.701-.066a2.603 2.603 0 1 1 .091-5.204zM8.662 8.871l3.701.065.02-1.098-3.701-.066a3.702 3.702 0 0 0-.13 7.404v-.002l2.6.045 1.1.02.02-1.098.045-2.602v-.001l.01-.548-3.702-.065-.02 1.098 2.603.046-.036 2.052-2.601-.046a2.603 2.603 0 1 1 .091-5.204z"/></g></svg>

    <button type="button" class="refreshBtn" aria-label="Reload notifications" @click="refresh">
      <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
    </button>
    <button type="button" aria-label="Open menu" @click="toggleSettings">
      <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
    </button>
    <div v-if="showSettings" class="menu">
      <ul>
        <li><router-link :to="{ name: 'Settings'}">Settings</router-link></li>
        <li><button type="button" @click="triggerLogout">Log out</button></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tobBar',
  props: ['refresh', 'logout'],
  data () {
    return {
      showSettings: false
    }
  },
  methods: {
    toggleSettings () {
      this.showSettings = !this.showSettings
    },
    triggerLogout () {
      this.showSettings = false
      this.logout()
    }
  }
}
</script>

<style scoped>
  button {
    fill: #fff;
    background: transparent;
    border: none;
  }

  svg {
    display: block;
    height: 30px;
    width: 30px;
    fill: #fff;
  }

  .menu {
    position: absolute;

    top: .75em .5em;
    right: 3em;

    background: #fff;
    color: var(--c-text);
  }

  .backLink {
    margin-right: .5em;
  }

  .refreshBtn {
    margin-left: auto;
  }

  .logo {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 2.25em;
    height: 2.25em;
  }

  .topBar {
    padding: .5em 1em;

    height: 3.5em;

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
