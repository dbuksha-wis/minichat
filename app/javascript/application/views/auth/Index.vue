<template>
  <div class="auth-container">
    <div class="columns">
      <div class="column is-one-third-desktop is-two-thirds-tablet is-half-mobile">
        <div class="card">
          <div class="card-content">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style scoped>
  .columns {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
