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
      <b-field label="Password Confirmation">
        <b-input name="password"
                 v-model="user.password_confirmation"
                 type="password"
                 maxlength="30"
                 required></b-input>
      </b-field>

      <button class="button is-primary">
        <span>Sign Up</span>
      </button>
    </form>
    <p>Already have an account?
      <router-link :to="{name: 'AuthSignIn'}">
        Sign In
      </router-link>
    </p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { actionTypes } from "../../store/modules/auth";

  export default {
    name: 'AuthSignUp',
    data() {
      return {
        user: {}
      }
    },
    methods: {
      ...mapActions('auth', [actionTypes.SIGN_UP]),
      submitData() {
        this[actionTypes.SIGN_UP]({ user: this.user })
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
  .columns {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
