<template>
  <section class="section">
    <div style="height: 40px"></div>
    <div class="panel">
      <div class="panel-heading">
        <h3 class="title is-4">Public Chat</h3>
      </div>
      <div class="panel-content">
        <div class="panel-block"
             v-for="(msg, i) in messages"
             :key="i">
          <b>{{msg.sender.username}}</b>: {{ msg.message }}
          <!--TODO: add created at on the right of the block-->
        </div>
      </div>
      <div class="panel-block">
        <form action="" class="form" @submit.prevent="sendMessage">
          <b-input maxlength="200"
                   type="textarea"
                   placeholder="Write a message..."
                   v-model="message"></b-input>
          <button class="button is-link is-outlined ">
            Send message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Chat",
  data() {
    return {
      message: '',
      messages: [],
    }
  },
  channels: {
    ChatChannel: {
      connected() {},
      rejected() {},
      received(data) {
        // TODO: handle an error
        console.log('received');
        console.log(data);
        this.messages.push(data)
      },
      disconnected() {}
    }
  },
  created() {
    this.$cable._connect(`ws://localhost:5000/cable?accessToken=${localStorage.getItem('jwt')}`)
  },
  mounted() {
    this.$cable.subscribe({ channel: 'ChatChannel', room: 'public' });
  },
  computed: {
    ...mapState('users', ['user']),
  },
  methods: {
    sendMessage() {
      this.$cable.perform({
        channel: 'ChatChannel',
        action: 'send_message',
        data: {
          message: this.message,
          room: 'public',
        }
      });
      this.message = '';
    },
  },
  destroyed() {
    this.$cable.unsubscribe('ChatChannel');
  },
}
</script>

<style scoped lang="scss">
.form {
  width: 100%;
}
</style>
