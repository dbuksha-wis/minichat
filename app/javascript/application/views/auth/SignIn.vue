<template>
  <div>
    <form action="" @submit.prevent="submitData">
      <b-field label="Username">
        <b-input name="username"
                 v-model="user.username"
                 maxlength="30"
                 required></b-input>
      </b-field>

      <b-field label="Password">
        <b-input name="password"
                 v-model="user.password"
                 type="password"
                 maxlength="30"
                 required></b-input>
      </b-field>

      <button class="button is-primary">
        <span>Login</span>
      </button>
    </form>
    <p>Don't have an account?
      <router-link :to="{name: 'AuthSignUp'}">
        Sign Up
    </router-link>
    </p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { actionTypes } from "../../store/modules/auth";

  export default {
    name: 'AuthSignIn',
    data() {
      return {
        user: {}
      }
    },
    methods: {
      ...mapActions('auth', [actionTypes.SIGN_IN]),
      submitData() {
        this[actionTypes.SIGN_IN]({ credentials: this.user })
          .then(() => {
            this.$router.push({ name: 'Home' });
          }).catch((error) => {
          // FIXME: add showing errors
        });
      }
    },
  }
</script>

<style scoped lang="scss">
</style>
