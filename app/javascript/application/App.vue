<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello, Vue!"
    }
  }
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
}
</style>
