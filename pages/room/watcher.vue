<template>
  <section>

      <!-- 観戦パネル -->
      <v-layout row>

        <!-- 対戦者Aのパネル -->
        <v-flex xs6 text-xs-center class="margin-0-2">
          <v-card class="transparent-panel">
            <div v-if="rappers.A.state === 'waiting'">
              <br />
              <v-progress-circular :size="50" color="amber" indeterminate class="battle-movie"></v-progress-circular>
            </div>
            <video id="rapper-a" autoplay playsinline class="battle-movie"></video>
            <v-card-title>
              <div>{{ rappers.A.nickname }}</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="white" label outline @click="onClickThumbUpForA">
                <v-avatar>
                  <v-icon class="neon">thumb_up</v-icon>
                </v-avatar>
                <span class="neon">{{ rappers.A.feedback.thumb_up }}</span>
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="white" label outline @click="onClickThumbDownForA">
                <span class="neon-blue">{{ rappers.A.feedback.thumb_down }}</span>
                <v-avatar>
                  <v-icon class="neon-blue thumb_down">thumb_down</v-icon>
                </v-avatar>
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!-- 対戦者Bのパネル -->
        <v-flex xs6 text-xs-center class="margin-0-2">
          <v-card class="transparent-panel">
            <div v-if="rappers.B.state === 'waiting'">
              <br />
              <v-progress-circular :size="50" color="amber" indeterminate class="battle-movie"></v-progress-circular>
            </div>
            <video id="rapper-b" autoplay playsinline class="battle-movie"></video>
            <v-card-title>
              <div>{{ rappers.B.nickname }}</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="white" label outline @click="onClickThumbUpForB">
                <v-avatar>
                  <v-icon class="neon">thumb_up</v-icon>
                </v-avatar>
                <span class="neon">{{ rappers.B.feedback.thumb_up }}</span>
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="white" label outline @click="onClickThumbDownForB">
                <span class="neon-blue">{{ rappers.B.feedback.thumb_down }}</span>
                <v-avatar>
                  <v-icon class="neon-blue thumb_down">thumb_down</v-icon>
                </v-avatar>
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>

      <!-- チャット -->
      <chat :roomId="roomId" :myNickname="nickname" />

  </section>
</template>


<script lang="ts">
import { AxiosResponse } from 'axios';
import firebase from 'firebase';
import Peer from 'skyway-js';
import Vue from 'vue';
import Chat from '~/components/chat.vue';
import RealtimeDB from '~/plugins/firebase-realtimedb';

interface Rapper { peerId: string; }
interface SkywayMediaStream extends MediaStream { peerId: string; }
type Snapshot = firebase.database.DataSnapshot | null;


export default Vue.extend({

  components: { Chat },

  data: (): object => ({

    roomState: 'wating', // Possible values are "wating | started"

    peer:          undefined,
    rapperStreamA: undefined,
    rapperStreamB: undefined,

    rappers: {
      A: {
        state: 'waiting', // Possible values are "waiting | entered"
        nickname: 'Waiting...',
        peerId: undefined,
        feedback: {
          thumb_up: 0,
          thumb_down: 0
        }
      },
      B: {
        state: 'waiting', // Possible values are "waiting | entered"
        nickname: 'Waiting...',
        peerId: undefined,
        feedback: {
          thumb_up: 0,
          thumb_down: 0
        }
      }
    }
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

  computed: {
    roomId(): string {
      return this.$route.query.roomId;
    },
    roomName(): string {
      return this.$route.query.roomName;
    },
    nickname(): string {
      return this.$route.query.nickname;
    }
  },

  mounted(): void {

    this.peer = new Peer({ key: process.env.SKYWAY_API_KEY, debug: 3 });

    this.peer.on('open', () => {
      const sfuRoom = this.peer.joinRoom(this.roomId, { mode: 'sfu' });
      sfuRoom.on('peerJoin', () => console.debug('@@ peerJoin'));
      sfuRoom.on('stream', (stream: SkywayMediaStream) => {

        console.debug('@@ on stream');

        this.$coreApi.get(`/rooms/${this.roomId}`).then((res: AxiosResponse) => {

          const rapper = res.data.rappers.find((r: Rapper) => r.peerId === stream.peerId);
          if (!rapper) {
            return;
          }

          if (!this.rappers.A.peerId) {

            this.rappers.A.peerId   = rapper.peerId;
            this.rappers.A.nickname = rapper.nickname;

            RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.A.peerId}/feedback`).on('value', (snapshot: Snapshot) => {
              if (snapshot && snapshot.val()) {
                this.rappers.A.feedback = snapshot.val();
              }
            });
            this.rappers.A.state = 'entered';
            this.rapperStreamA = stream;
            const rapperVideoA = document.getElementById('rapper-a') as HTMLMediaElement;
            rapperVideoA.srcObject = stream;
          } else if (!this.rappers.B.peerId) {
            this.rappers.B.peerId   = rapper.peerId;
            this.rappers.B.nickname = rapper.nickname;

            RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.B.peerId}/feedback`).on('value', (snapshot: Snapshot) => {
              if (snapshot && snapshot.val()) {
                this.rappers.B.feedback = snapshot.val();
              }
            });

            this.rappers.B.state = 'entered';
            this.rapperStreamB = stream;
            const rapperVideoB = document.getElementById('rapper-b') as HTMLMediaElement;
            rapperVideoB.srcObject = stream;
          } else {
            console.debug('Out case');
          }

          if (this.rappers.A.peerId && this.rappers.B.peerId) {
            this.roomState = 'started';
          }
        });
      });
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
