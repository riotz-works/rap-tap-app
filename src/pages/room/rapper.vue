<template>
  <section>

    <!-- ステータス表示 -->
    <v-layout row>
      <v-flex xs12>
        <v-btn v-if="roomState === 'entered'" dark color="black" class="display-label" @click="onStart">START</v-btn>
        <v-btn v-if="roomState === 'connecting'" dark color="black" class="display-label" disabled>
          <v-progress-circular indeterminate color="red" />
        </v-btn>
        <v-btn v-if="roomState === 'waiting'" dark color="black" class="display-label" disabled>対戦相手が入場するまでお待ち下さい。</v-btn>
        <v-btn v-if="roomState === 'fighting'" dark color="black" class="display-label" disabled>FIGHT</v-btn>
      </v-flex>
    </v-layout>

    <!-- 対戦パネル -->
    <v-layout row>

      <!-- 自分のパネル -->
      <v-flex xs6 text-xs-center class="margin-0-2">
        <v-card class="transparent-panel">
          <video id="battle-movie-me" autoplay playsinline class="battle-movie" />
          <v-card-title>
            <div>{{ rappers.me.nickname }}</div>
          </v-card-title>
          <v-card-actions>
            <v-chip color="white" label outline>
              <v-avatar>
                <v-icon class="neon">thumb_up</v-icon>
              </v-avatar>
              <span class="neon">{{ rappers.me.feedback.thumbUp }}</span>
            </v-chip>
            <v-spacer />
            <v-chip color="white" label outline>
              <span class="neon-blue">{{ rappers.me.feedback.thumbDown }}</span>
              <v-avatar>
                <v-icon class="neon-blue thumbDown">thumb_down</v-icon>
              </v-avatar>
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-flex>

      <!-- 相手のパネル -->
      <v-flex xs6 text-xs-center class="margin-0-2">
        <v-card class="transparent-panel">
          <video id="battle-movie-competitor" autoplay playsinline class="battle-movie" />
          <v-card-title>
            <div>{{ rappers.competitor.nickname }}</div>
          </v-card-title>
          <v-card-actions>
            <v-chip color="white" label outline>
              <v-avatar>
                <v-icon class="neon">thumb_up</v-icon>
              </v-avatar>
              <span class="neon">{{ rappers.competitor.feedback.thumbUp }}</span>
            </v-chip>
            <v-spacer />
            <v-chip color="white" label outline>
              <span class="neon-blue">{{ rappers.competitor.feedback.thumbDown }}</span>
              <v-avatar>
                <v-icon class="neon-blue thumbDown">thumb_down</v-icon>
              </v-avatar>
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>

    <!-- チャット -->
    <chat :room-id="roomId" :my-nickname="rappers.me.nickname" />

  </section>
</template>


<script lang="ts">
import { AxiosResponse } from 'axios';
import Peer from 'skyway-js';
import Vue from 'vue';
import { DataSnapshot } from '@firebase/database-types';
import Chat from '~/components/chat.vue';
import { config } from '~/mixins/config';
import RealtimeDB from '~/plugins/firebase-realtimedb';

interface Rapper { peerId: string }
interface SkywayMediaStream extends MediaStream { peerId: string }

export default Vue.extend({
  components: { Chat },
  data: () => ({
    roomState: 'entered', // Possible values are "entered | connecting | waiting | fighting"
    rappers: {
      me: {
        nickname: 'Waiting...',
        peerId: '',
        feedback: {
          thumbUp: 0,
          thumbDown: 0
        }
      },
      competitor: {
        nickname: 'Waiting...',
        peerId: '',
        feedback: {
          thumbUp: 0,
          thumbDown: 0
        }
      }
    },
    peer:     undefined,
    // コンポーネント外出したい
    chatCount: 0,
    chats: [],
    chatMessage: ''
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
    this.rappers.me.nickname = this.$route.query.nickname;
    this.rappers.me.peerId = this.$route.query.peerId;
    this.roomState = 'entered';

    this.$coreApi.get(`/rooms/${this.roomId}`).then((res: AxiosResponse) => {
      const competitor = res.data.rappers.find((r: Rapper) => r.peerId !== this.peerId);
      this.rappers.competitor.peerId = competitor.peerId;
    });

    RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.me.peerId}/feedback`).on('value', (snapshot: DataSnapshot) => {
      if (snapshot && snapshot.val()) {
        this.rappers.me.feedback = snapshot.val();
      }
    });

    this.peer = new Peer(this.rappers.me.peerId, { key: config.skywayApiKey, debug: 3 });
  },
  methods: {
    onStart(): void {
      this.roomState = 'connecting';

      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((myStream: MediaStream) => {
        const myVideo = document.getElementById('battle-movie-me') as HTMLMediaElement;
        myVideo.srcObject = myStream;
        this.roomState = 'waiting';

        return myStream;
      }).then((myStream: MediaStream) => {
        this.peer.joinRoom(this.roomId, { mode: 'sfu', stream: myStream }).on('stream', (competitorStream: SkywayMediaStream) => {
          console.debug('@@ Incoming stream: ', competitorStream);

          this.$coreApi.get(`/rooms/${this.roomId}`).then((res: AxiosResponse) => {
            const competitor = res.data.rappers.find((rapper: Rapper) => rapper.peerId !== this.rappers.me.peerId);
            if (competitor.peerId !== competitorStream.peerId) {
              console.debug('@@ Unexpected stream. This may be not a valid competitor.');
              return;
            }
            this.rappers.competitor.nickname = competitor.nickname;
            this.rappers.competitor.peerId = competitor.peerId;

            RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.competitor.peerId}/feedback`).on('value', (snapshot: DataSnapshot) => {
              console.debug('on competitor feedback value: ', snapshot ? snapshot.val() : snapshot);
              if (snapshot && snapshot.val()) {
                this.rappers.competitor.feedback = snapshot.val();
              }
            });
            this.roomState = 'fighting';
          });
          const competitorVideo = document.getElementById('battle-movie-competitor') as HTMLMediaElement;
          competitorVideo.srcObject = competitorStream;
        });
      });
    },
    sendMessage(): void {
      RealtimeDB.ref(`/rooms/${this.$route.query.roomId}/messages`).push({
        name:    this.rappers.me.nickname,
        content: this.chatMessage
      });
      this.chatMessage = '';
    }
  }
});
</script>


<style scoped>
.battle-movie {
  width: 100%;
  height: 280px;
}

.display-label {
  margin: 0.5em 0;
  width: 100%;
}

.margin-0-2 {
  margin: 0.2em;
}
</style>
