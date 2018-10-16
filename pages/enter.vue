<template>
  <section>

    <!-- 案内文言 -->
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <p>{{ getMode() }}ルームに入場します。</p>
      </v-flex>
    </v-layout>

    <!-- ニックネーム入力フォーム -->
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="nickname"
            :rules="nicknameRules"
            :counter="20"
            label="ニックネーム"
            prepend-icon="tag_faces"
            required
          >
          </v-text-field>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            入場する
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>

  </section>
</template>


<script lang="ts">

import { AxiosResponse } from 'axios'; // tslint:disable-line
import Vue from 'vue';
import RealtimeDB from '~/plugins/firebase-realtimedb';

export default Vue.extend({

  data: () => ({
    valid: true,
    nickname: '',
    nicknameRules: [
      (v: string): boolean | string => !!v || 'ニックネームを入力してください',
      (v: string): boolean | string => (v && v.length <= 20 || 'ニックネームは20文字以内で入力してください。')
    ],
    modes: {
      rapper: '対戦',
      watcher: '観戦'
    }
  }),

  methods: {

    getMode() {
      const mode = this.$route.query.mode;
      return this.modes[mode] || '対戦';
    },

    async submit(): Promise<void> {

      if (this.$refs.form.validate()) {

        const mode = this.$route.query.mode;
        const roomId   = this.$route.query.roomId;
        const roomName = this.$route.query.roomName;
        const nickname = this.nickname;
        const peerId = `${roomId}-${this.nickname}-${Math.random().toString(36).slice(-4)}`;

        if (mode === 'rapper') {
          const res: AxiosResponse = await this.$coreApi.post(`/rooms/${roomId}`, {
            nickname, peerId
          });
          if (res.status !== 200) {
            console.error(`Error on POST /rooms/${roomId}`);
            return;
          }
          await RealtimeDB.ref(`/rooms/${roomId}/rappers/${peerId}`).set({
            feedback: {
              thumb_up: 0,
              thumb_down: 0
            }
          });
        }

        const queryParams = `?roomId=${roomId}&roomName=${roomName}&peerId=${peerId}&nickname=${nickname}`;

        const urlForLocal = {
          rapperUrl:  `http://${location.hostname}:${location.port}/room/rapper/${queryParams}`,
          watcherUrl: `http://${location.hostname}:${location.port}/room/watcher/${queryParams}`
        };
        const urlToServe = {
          rapperUrl:  `https://${location.hostname}/rap-tap-app/room/rapper/${queryParams}`,
          watcherUrl: `https://${location.hostname}/rap-tap-app/room/watcher/${queryParams}`
        };
        if      (location.hostname === 'localhost' && mode === 'rapper')  { location.href = urlForLocal.rapperUrl; }
        else if (location.hostname === 'localhost' && mode === 'watcher') { location.href = urlForLocal.watcherUrl; }
        else if (mode === 'rapper')  { location.href = urlToServe.rapperUrl; }
        else if (mode === 'watcher') { location.href = urlToServe.watcherUrl; }
        else    { return; }
      }
    }
  }
});
</script>


<style scoped>
</style>
