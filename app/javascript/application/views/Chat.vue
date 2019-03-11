<template>
  <div class="card mt-3">
    <div class="card-body">
      <div class="card-title">
        <h3>Public Chat</h3>
        <hr>
      </div>
      <div class="card-body">
        <div v-for="(msg, i) in messages"
                      :key="i">
          <b>{{msg.sender.username}}</b>:{{ msg.message }}
        </div>
      </div>
    </div>
    <div class="card-footer">
      <form action="" @submit.prevent="sendMessage">
        <b-field label="Message">
          <b-input name="message"
                   v-model="message"
                   maxlength="30"
                   required></b-input>
        </b-field>
        <button type="submit" class="btn btn-success">Send</button>
      </form>
    </div>
  </div>
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
  computed: {
    ...mapState('users', ['user']),
  },
  mounted() {
    this.$cable.subscribe({ channel: 'ChatChannel', room: 'public' });
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

</style>
