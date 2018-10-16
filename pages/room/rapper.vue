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
            <video id="battle-movie-me" autoplay playsinline class="battle-movie"></video>
            <v-card-title>
              <div>{{ this.rappers.me.nickname }}</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_up</v-icon>
                </v-avatar>
                {{ rappers.me.feedback.thumb_up }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_down</v-icon>
                </v-avatar>
                {{ rappers.me.feedback.thumb_down }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!-- 相手のパネル -->
        <v-flex xs6 text-xs-center class="margin-0-2">
          <v-card>
            <video id="battle-movie-competitor" autoplay playsinline class="battle-movie"></video>
            <v-card-title>
              <div>{{ this.rappers.competitor.nickname }}</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_up</v-icon>
                </v-avatar>
                {{ rappers.competitor.feedback.thumb_up }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_down</v-icon>
                </v-avatar>
                {{ rappers.competitor.feedback.thumb_down }}
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

  data: (): {} => ({

    roomId:   '',
    roomName: '',

    rappers: {
      me: {
        nickname: 'Waiting...',
        peerId: '',
        feedback: {
          thumb_up: 0,
          thumb_down: 0
        }
      },
      competitor: {
        nickname: 'Waiting...',
        peerId: '',
        feedback: {
          thumb_up: 0,
          thumb_down: 0
        }
      }
    },

    peer:     undefined,

    // コンポーネント外出したい
    chatCount: 0,
    chats: [],
    chatMessage: ''
  }),

  methods: {
    onStart(): void {

      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((myStream: MediaStream) => {
        const myVideo = document.getElementById('battle-movie-me') as HTMLMediaElement;
        myVideo.srcObject = myStream;

        return myStream;
      }).then((myStream: MediaStream) => {

        this.peer.joinRoom(this.roomId, { mode: 'sfu', stream: myStream }).on('stream', (competitorStream: MediaStream | any) => {
          console.log('@@ Incoming stream: ', competitorStream);

          this.$coreApi.get(`/rooms/${this.roomId}`).then((res: AxiosResponse) => {
            const competitor = res.data.rappers.find((rapper: any) => rapper.peerId !== this.rappers.me.peerId);
            if (competitor.peerId !== competitorStream.peerId) {
              console.log('@@ Unexpected stream. This may be not a valid competitor.');
              return;
            }
            this.rappers.competitor.nickname = competitor.nickname;
            this.rappers.competitor.peerId = competitor.peerId;

            RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.competitor.peerId}/feedback`).on('value', (snapshot: any) => {
              console.log('on competitor feedback value: ', snapshot.val());
              if (snapshot.val()) {
                this.rappers.competitor.feedback = snapshot.val();
              }
            });
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
  },

  mounted(): void {

    this.roomId = this.$route.query.roomId;
    this.roomName = this.$route.query.roomName;
    this.nickname = this.$route.query.nickname;
    this.rappers.me.nickname = this.$route.query.nickname;
    this.rappers.me.peerId = this.$route.query.peerId;

    this.roomState = this.$coreApi.get(`/rooms/${this.roomId}`).then((res: AxiosResponse) => {

      const competitor = res.data.rappers.find((r: any) => r.peerId !== this.peerId);
      this.rappers.competitor.nickname = competitor.nickname;
      this.rappers.competitor.peerId = competitor.peerId;

    });

    RealtimeDB.ref(`/rooms/${this.roomId}/messages`).on('child_added', (snapshot: any) => {
      const data = snapshot.val();
      this.chats.push({ id: `chatid-${this.chatCount + 1}`, nickname: data.name, content: data.content });
      this.chatCount++;
    });

    RealtimeDB.ref(`/rooms/${this.roomId}/rappers/${this.rappers.me.peerId}/feedback`).on('value', (snapshot: any) => {
      if (snapshot.val()) {
        this.rappers.me.feedback = snapshot.val();
      }
    });

    this.peer = new Peer(this.rappers.me.peerId, { key: process.env.SKYWAY_API_KEY, debug: 3 });
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
