<template>
  <section class="section">
    <div id="app" class="container">
      <router-view/>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { actionTypes as authActions } from "./store/modules/auth";

export default {
  data: function () {
    return {
      message: "Hello, Vue!"
    }
  },
  methods: {
    ...mapActions('auth', [authActions.GET_CURRENT_USER]),
    isAuthIndexPage() {
      return !!this.$router.currentRoute.matched.find(route => route.name === 'Auth');
    },
  },
  mounted() {
    this[authActions.GET_CURRENT_USER]()
      .then(() => {
        if (this.isAuthIndexPage()) this.$router.push({ name: 'Home' });
      })
      .catch(() => {
        if (!this.isAuthIndexPage()) this.$router.push({ name: 'Auth' });
      })
  }
}
</script>

<style lang="scss">
html, body, #app, .section {
  height: 100%;
}
</style>
