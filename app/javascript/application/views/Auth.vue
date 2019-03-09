<template>
  <div class="columns">
    <div class="column is-one-third">
      <div class="card">
        <div class="card-content">
          <form action="" class="app-form" @submit.prevent="submitData">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { actionTypes } from "../store/modules/auth";

export default {
  name: 'Auth',
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
          // FIXME
          // this.$router.push({ name: '' });
        }).catch((error) => {
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
