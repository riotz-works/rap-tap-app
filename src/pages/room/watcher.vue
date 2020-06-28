<template>
  <section>

    <!-- 観戦パネル -->
    <v-layout row>

      <!-- 対戦者Aのパネル -->
      <v-flex xs6 text-xs-center class="margin-0-2">
        <v-card class="transparent-panel">
          <div v-if="rappers.A.state === 'waiting'">
            <br>
            <v-progress-circular :size="50" color="amber" indeterminate class="battle-movie" />
          </div>
          <video id="rapper-a" autoplay playsinline class="battle-movie" />
          <v-card-title>
            <div>{{ rappers.A.nickname }}</div>
          </v-card-title>
          <v-card-actions>
            <v-chip color="white" label outline @click="onClickThumbUpForA">
              <v-avatar>
                <v-icon class="neon">thumb_up</v-icon>
              </v-avatar>
              <span class="neon">{{ rappers.A.feedback.thumbUp }}</span>
            </v-chip>
            <v-spacer />
            <v-chip color="white" label outline @click="onClickThumbDownForA">
              <span class="neon-blue">{{ rappers.A.feedback.thumbDown }}</span>
              <v-avatar>
                <v-icon class="neon-blue thumbDown">thumb_down</v-icon>
              </v-avatar>
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-flex>

      <!-- 対戦者Bのパネル -->
      <v-flex xs6 text-xs-center class="margin-0-2">
        <v-card class="transparent-panel">
          <div v-if="rappers.B.state === 'waiting'">
            <br>
            <v-progress-circular :size="50" color="amber" indeterminate class="battle-movie" />
          </div>
          <video id="rapper-b" autoplay playsinline class="battle-movie" />
          <v-card-title>
            <div>{{ rappers.B.nickname }}</div>
          </v-card-title>
          <v-card-actions>
            <v-chip color="white" label outline @click="onClickThumbUpForB">
              <v-avatar>
                <v-icon class="neon">thumb_up</v-icon>
              </v-avatar>
              <span class="neon">{{ rappers.B.feedback.thumbUp }}</span>
            </v-chip>
            <v-spacer />
            <v-chip color="white" label outline @click="onClickThumbDownForB">
              <span class="neon-blue">{{ rappers.B.feedback.thumbDown }}</span>
              <v-avatar>
                <v-icon class="neon-blue thumbDown">thumb_down</v-icon>
              </v-avatar>
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>

    <!-- チャット -->
    <chat :room-id="roomId" :my-nickname="nickname" />

  </section>
</template>


<script lang="ts">
/* eslint-disable id-length */  // 'cuz to handle screen sequential numbering of rappers
import { AxiosResponse } from 'axios';
import Peer from 'skyway-js';
import Vue from 'vue';
import { DataSnapshot } from '@firebase/database-types';
import Chat from '~/components/chat.vue';
import { config } from '~/mixins/config';
import RealtimeDB from '~/plugins/firebase-realtimedb';

type Rapper = { peerId: string };
type SkywayMediaStream = { peerId: string } & MediaStream;

export default Vue.extend({
  components: { Chat },
  data: () => ({
    roomState: 'wating', // Possible values are "wating | started"
    peer: undefined,
    rapperStreamA: undefined,
    rapperStreamB: undefined,
    rappers: {
      A: {
        state: 'waiting', // Possible values are "waiting | entered"
        nickname: 'Waiting...',
        peerId: undefined,
        feedback: {
          thumbUp: 0,
          thumbDown: 0
        }
      },
      B: {
        state: 'waiting', // Possible values are "waiting | entered"
        nickname: 'Waiting...',
        peerId: undefined,
        feedback: {
          thumbUp: 0,
          thumbDown: 0
        }
      }
    }
  }),
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
  mounted() {
    this.peer = new Peer({ key: config.skywayApiKey, debug: 3 });

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
            this.rappers.A.peerId = rapper.peerId;
            this.rappers.A.nickname = rapper.nickname;

            RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.A.peerId}/feedback`).on('value', (snapshot: DataSnapshot) => {
              if (snapshot && snapshot.val()) {
                this.rappers.A.feedback = snapshot.val();
              }
            });
            this.rappers.A.state = 'entered';
            this.rapperStreamA = stream;
            const rapperVideoA = document.getElementById('rapper-a') as HTMLMediaElement;
            rapperVideoA.srcObject = stream;
          } else if (!this.rappers.B.peerId) {
            this.rappers.B.peerId = rapper.peerId;
            this.rappers.B.nickname = rapper.nickname;

            RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.B.peerId}/feedback`).on('value', (snapshot: DataSnapshot) => {
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
  },
  methods: {
    sendMessage(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/messages`).push({
        name: this.nickname,
        content: this.chatMessage
      });
      this.chatMessage = '';
    },
    onClickThumbUpForA(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/rappers/${this.rappers.A.peerId}/feedback`)
        .transaction((feedback: { thumbUp: number; thumbDown: number }) => feedback ? { thumbUp: feedback.thumbUp + 1, thumbDown: feedback.thumbDown } : undefined);
    },
    onClickThumbDownForA(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/rappers/${this.rappers.A.peerId}/feedback`)
        .transaction((feedback: { thumbUp: number; thumbDown: number }) => feedback ? { thumbUp: feedback.thumbUp, thumbDown: feedback.thumbDown + 1 } : undefined);
    },
    onClickThumbUpForB(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/rappers/${this.rappers.B.peerId}/feedback`)
        .transaction((feedback: { thumbUp: number; thumbDown: number }) => feedback ? { thumbUp: feedback.thumbUp + 1, thumbDown: feedback.thumbDown } : undefined);
    },
    onClickThumbDownForB(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/rappers/${this.rappers.B.peerId}/feedback`)
        .transaction((feedback: { thumbUp: number; thumbDown: number }) => feedback ? { thumbUp: feedback.thumbUp, thumbDown: feedback.thumbDown + 1 } : undefined);
    }
  }
});
</script>


<style scoped>
.battle-movie {
  width: 100%;
  height: auto;
}

.display-label {
  margin: 0.5em 0;
  width: 100%;
}

.margin-0-2 {
  margin: 0.2em;
}
</style>
