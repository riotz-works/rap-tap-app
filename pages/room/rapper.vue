<template>
  <section>

      <!-- 参加人数、曲表示 -->
      <v-layout row>
        <v-flex xs12>
          <v-chip label color="black" text-color="white" class="display-label">
            <v-icon left>people</v-icon>0 人
          </v-chip>
          <br />
          <v-chip label color="black" text-color="white" class="display-label">
            <v-icon left>library_music</v-icon>Song
          </v-chip>
          <v-btn dark color="black" class="display-label" @click="onStart">START</v-btn>
        </v-flex>
      </v-layout>

      <!-- 対戦パネル -->
      <v-layout row>

        <!-- 自分のパネル -->
        <v-flex xs6 text-xs-center class="margin-0-2">
          <v-card>
            <video id="battle-movie-me" autoplay class="battle-movie"></video>
            <v-card-title>
              <div>nickname</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_up</v-icon>
                </v-avatar>
                1
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_down</v-icon>
                </v-avatar>
                1
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!-- 相手のパネル -->
        <v-flex xs6 text-xs-center class="margin-0-2">
          <v-card>
            <video id="battle-movie-competitor" autoplay class="battle-movie"></video>
            <v-card-title>
              <div>nickname</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_up</v-icon>
                </v-avatar>
                1
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_down</v-icon>
                </v-avatar>
                1
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>

      <!-- チャット内容 -->
      <v-layout row>
        <v-flex xs12 class="margin-0-2">
          <v-card class="chat-contents">

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
        <v-flex xs12 class="margin-0-2">
          <v-card>
            <v-card-actions>
              <v-text-field
                v-model="chatMessage"
                :counter="20"
                append-icon="chat"
                @click:append="sendMessage"
                label="メッセージを入力してください"
                required
              >
              </v-text-field>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>


  </section>
</template>


<script lang="ts">

import Peer from 'skyway-js';
import Vue from 'vue';
import RealtimeDB from '~/plugins/firebase-realtimedb';

export default Vue.extend({

  data: (): {} => ({
    peer:     undefined,
    myStream: undefined,
    nickname: 'test-nickname',

    // コンポーネント外出したい
    chatCount: 1,
    chats: [
      { id: 'id-0', nickname: 'system', content: 'バトルルームに入場しました。' }
    ],
    chatMessage: ''
  }),

  methods: {
    onStart(): void {
      this.peer.joinRoom('test', { mode: 'sfu', stream: this.myStream }).on('stream', (competitorStream: MediaStream) => {
        const competitorVideo = document.getElementById('battle-movie-competitor') as HTMLMediaElement;
        competitorVideo.srcObject = competitorStream;
      });
    },
    sendMessage(): void {
      const dbMessageRef = RealtimeDB.ref('message');
      dbMessageRef.push({ name: this.nickname, content: this.chatMessage });
      this.chatMessage = '';
    }
  },

  mounted(): void {
    const dbMessageRef = RealtimeDB.ref('message');
    dbMessageRef.on('child_added', (snapshot: any) => {
      const data = snapshot.val();
      this.chats.push({ id: `id-${this.chatCount + 1}`, nickname: data.name, content: data.content });
      this.chatCount++;
    });

    this.peer = new Peer({ key: this.$route.query.roomId, debug: 3 });
    navigator.mediaDevices.getUserMedia({ video: true, audio: true}).then((myStream: MediaStream) => {
      const myVideo = document.getElementById('battle-movie-me') as HTMLMediaElement;
      myVideo.srcObject = myStream;
      this.myStream = myStream;
    });
  }
});
</script>


<style scoped>

.battle-movie {
  width: 100%;
  height: 280px; /* TODO: Set calculated height to keep aspect ratio */
}

.chat-contents {
  max-height: 200px;
  overflow: scroll;
}

.display-label {
  margin: 0.5em 0;
  width: 100%;
}

.margin-0-2 {
  margin: 0.2em;
}

</style>
