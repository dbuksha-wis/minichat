<template>
  <section class="section">
    <div id="app" class="container">
      <router-view/>
    </div>
  </section>
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
html, body, #app, .section {
  height: 100%;
}
</style>
