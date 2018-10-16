<template>
  <section>

      <!-- 観戦パネル -->
      <v-layout row>

        <!-- 対戦者Aのパネル -->
        <v-flex xs6 text-xs-center class="margin-0-2">
          <v-card>
            <div v-if="rappers.A.state === 'waiting'">
              <v-progress-circular :size="50" color="amber" indeterminate class="battle-movie"></v-progress-circular>
            </div>
            <video id="rapper-a" autoplay playsinline class="battle-movie"></video>
            <v-card-title>
              <div>{{ rappers.A.nickname }}</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="indigo" label outline @click="onClickThumbUpForA">
                <v-avatar>
                  <v-icon>thumb_up</v-icon>
                </v-avatar>
                {{ rappers.A.feedback.thumb_up }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="indigo" label outline @click="onClickThumbDownForA">
                <v-avatar>
                  <v-icon>thumb_down</v-icon>
                </v-avatar>
                {{ rappers.A.feedback.thumb_down }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!-- 対戦者Bのパネル -->
        <v-flex xs6 text-xs-center class="margin-0-2">
          <v-card>
            <div v-if="rappers.B.state === 'waiting'">
              <v-progress-circular :size="50" color="amber" indeterminate class="battle-movie"></v-progress-circular>
            </div>
            <video id="rapper-b" autoplay playsinline class="battle-movie"></video>
            <v-card-title>
              <div>{{ rappers.B.nickname }}</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="indigo" label outline @click="onClickThumbUpForB">
                <v-avatar>
                  <v-icon>thumb_up</v-icon>
                </v-avatar>
                {{ rappers.B.feedback.thumb_up }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="indigo" label outline @click="onClickThumbDownForB">
                <v-avatar>
                  <v-icon>thumb_down</v-icon>
                </v-avatar>
                {{ rappers.B.feedback.thumb_down }}
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
import { AxiosResponse } from 'axios'; // tslint:disable-line
import Peer from 'skyway-js';
import Vue from 'vue';
import RealtimeDB from '~/plugins/firebase-realtimedb';

export default Vue.extend({

  data: () => ({

    roomId:   '',
    roomName: '',

    peer:          undefined,
    rapperStreamA: undefined,
    rapperStreamB: undefined,
    nickname: '',

    rappers: {
      A: {
        state: 'waiting', // waiting, entered
        nickname: 'Waiting...',
        peerId: undefined,
        feedback: {
          thumb_up: 0,
          thumb_down: 0
        }
      },
      B: {
        state: 'waiting', // waiting, entered
        nickname: 'Waiting...',
        peerId: undefined,
        feedback: {
          thumb_up: 0,
          thumb_down: 0
        }
      }
    },

    roomState: 'wating', // wating | started

    // コンポーネント外出したい
    chatCount: 0,
    chats: [],
    chatMessage: ''
  }),

  methods: {
    sendMessage(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/messages`).push({
        name:    this.nickname,
        content: this.chatMessage
      });
      this.chatMessage = '';
    },
    onClickThumbUpForA(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/rappers/${this.rappers.A.peerId}/feedback`)
        .transaction((feedback: { thumb_up: number; thumb_down: number }) =>
          feedback ? { thumb_up: feedback.thumb_up + 1, thumb_down: feedback.thumb_down } : undefined);
    },
    onClickThumbDownForA(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/rappers/${this.rappers.A.peerId}/feedback`)
        .transaction((feedback: { thumb_up: number; thumb_down: number }) =>
          feedback ? { thumb_up: feedback.thumb_up, thumb_down: feedback.thumb_down + 1 } : undefined);
    },
    onClickThumbUpForB(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/rappers/${this.rappers.B.peerId}/feedback`)
        .transaction((feedback: { thumb_up: number; thumb_down: number }) =>
          feedback ? { thumb_up: feedback.thumb_up + 1, thumb_down: feedback.thumb_down } : undefined);
    },
    onClickThumbDownForB(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/rappers/${this.rappers.B.peerId}/feedback`)
        .transaction((feedback: { thumb_up: number; thumb_down: number }) =>
          feedback ? { thumb_up: feedback.thumb_up, thumb_down: feedback.thumb_down + 1 } : undefined);
    }
  },

  mounted(): void {

    this.roomId = this.$route.query.roomId;
    this.roomName = this.$route.query.roomName;
    this.nickname = this.$route.query.nickname;

    this.roomState = this.$coreApi.get(`/rooms/${this.roomId}`).then((res: AxiosResponse) => {
      if (res.data.rappers.length < 2) {
        return 'waiting';
      }
      this.rappers.A.nickname = res.data.rappers[0].nickname;
      this.rappers.A.peerId   = res.data.rappers[0].peerId;
      this.rappers.B.nickname = res.data.rappers[1].nickname;
      this.rappers.B.peerId   = res.data.rappers[1].peerId;

      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/messages`).on('child_added', (snapshot: any) => {
        const data = snapshot.val();
        this.chats.push({ id: `chatid-${this.chatCount + 1}`, nickname: data.name, content: data.content });
        this.chatCount++;
      });

      RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.A.peerId}/feedback`).on('value', (snapshot: any) => {
        if (snapshot.val()) {
          this.rappers.A.feedback = snapshot.val();
        }
      });

      RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.B.peerId}/feedback`).on('value', (snapshot: any) => {
        if (snapshot.val()) {
          this.rappers.B.feedback = snapshot.val();
        }
      });

      this.peer = new Peer({ key: process.env.SKYWAY_API_KEY, debug: 3 });
      setTimeout(() => { // TODO: Change the trigger to join the room
        this.peer.joinRoom(this.roomId, { mode: 'sfu' }).on('stream', (stream: MediaStream | any) => {

          if (stream.peerId === this.rappers.A.peerId) {
            this.rappers.A.state = 'entered';
            this.rapperStreamA = stream;
            const rapperVideoA = document.getElementById('rapper-a') as HTMLMediaElement;
            rapperVideoA.srcObject = stream;
          }
          if (stream.peerId === this.rappers.B.peerId) {
            this.rappers.B.state = 'entered';
            this.rapperStreamB = stream;
            const rapperVideoB = document.getElementById('rapper-b') as HTMLMediaElement;
            rapperVideoB.srcObject = stream;
          }

        });
      }, 2000);

      return 'started';
    });
  }

});
</script>


<style scoped>

.battle-movie {
  width: 100%;
  height: auto; /* TODO: Set calculated max-height to keep aspect ratio */
}

.display-label {
  margin: 0.5em 0;
  width: 100%;
}

.margin-0-2 {
  margin: 0.2em;
}

</style>
