<template>
  <section>

    <!-- チャット内容 -->
    <v-layout row>
      <v-flex xs12 class="chat-content-flex">
        <v-card class="chat-contents transparent-panel">

          <div v-for="chat of chats" :key="chat.id">
            <v-chip label color="pink" text-color="white">
              {{ chat.nickname }}
            </v-chip>{{ chat.content }}
          </div>

        </v-card>
      </v-flex>
    </v-layout>

    <!-- チャット入力 -->
    <v-layout row>
      <v-flex xs12 class="chat-input-flex">
        <v-card class="transparent-panel">
          <v-card-actions>
            <v-text-field
              v-model="chatInputMessage"
              :counter="20"
              append-icon="chat"
              label="メッセージを入力してください"
              required
              @click:append="sendChatMessage"
            />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </section>
</template>

<script lang="ts">
import { DataSnapshot } from '@firebase/database-types';
import Vue from 'vue';
import RealtimeDB from '~/plugins/firebase-realtimedb';



export default Vue.extend({

  name: 'Chat',

  props: {
    roomId: { type: String, required: true },
    myNickname: { type: String, required: true }
  },

  data: () => ({
    chatCount: 0,
    chats: [],
    chatInputMessage: ''
  }),

  mounted(): void {
    RealtimeDB.ref(`/rooms/${this.roomId}/messages`).on('child_added', (snapshot: DataSnapshot) => {
      if (snapshot && snapshot.val()) {
        const data = snapshot.val();
        this.chats.push({ id: `chatid-${this.chatCount + 1}`, nickname: data.name, content: data.content });
        this.chatCount++;
      }
    });
  },

  methods: {
    sendChatMessage(): void {
      RealtimeDB.ref(`/rooms/${this.roomId}/messages`).push({
        name:    this.myNickname,
        content: this.chatInputMessage
      });
      this.chatInputMessage = '';
    }
  }
});

</script>

<style scoped>

.chat-contents {
  max-height: 200px;
  overflow: scroll;
}

.chat-content-flex {
  margin: 0.2em;
}

.chat-input-flex {
  margin: 0.2em;
}

</style>
