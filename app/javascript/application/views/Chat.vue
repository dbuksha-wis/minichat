<template>
  <div class="panel">
    <div class="panel-heading">
      <h3 class="title is-4">Public Chat</h3>
    </div>
    <div class="panel-content">
      <div class="panel-block message-block"
           v-for="(msg, i) in messages"
           :key="i">
        <div><b>{{msg.user.username}}</b>: {{ msg.text }}</div>
        <span class="is-small">{{ toDate(msg.created_at) }}</span>
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
</template>

<script>
import moment from 'moment';
import { mapState, mapActions } from 'vuex';

import { actionTypes as chatActions } from '../store/modules/chatMessages';

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
      rejected() {
      },
      received(data) {
        this.messages.push(data)
      },
      disconnected() {}
    }
  },
  created() {
    this.$cable._connect(`ws://localhost:3000/cable?accessToken=${localStorage.getItem('accessToken')}`)
  },
  mounted() {
    this[chatActions.INDEX]()
      .then((data) => {
        this.messages = data;
      });
    this.$cable.subscribe({ channel: 'ChatChannel', room: 'public' });
  },
  computed: {
    ...mapState('users', ['user']),
  },
  methods: {
    ...mapActions('chatMessages', [chatActions.INDEX, chatActions.CREATE]),
    toDate(date) {
      return moment(date).format('MM.DD.YYYY');
    },
    sendMessage() {
      this[chatActions.CREATE]({ message: { text: this.message }, room: 'public' })
        .then(() => { this.message = '' });
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
.message-block {
  display: flex;
  justify-content: space-between;
}
span {
  color: #DADADA;
}
.panel-content {
  min-height: 400px;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
}
</style>
