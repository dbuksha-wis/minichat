<template>
  <div class="columns">
    <div class="column is-one-third">
      <div class="card">
        <div class="card-content">
          <b-field label="Username">
            <b-input maxlength="30"></b-input>
          </b-field>

          <b-field label="Password">
            <b-input type="password" maxlength="30"></b-input>
          </b-field>

          <button class="button is-primary">
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Auth',
    data() {
      return {
        hasError: true
      }
    }
  }
</script>

<style scoped lang="scss">
.columns {
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
