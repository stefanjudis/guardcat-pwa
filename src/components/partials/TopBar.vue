<template>
  <header class="topBar">
    <span class="topBar__title">GuardCat</span>
    <button type="button">Menu</button>
  </header>
</template>

<script>

export default {
  name: 'tobBar',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .topBar {
    padding: 1em;

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
