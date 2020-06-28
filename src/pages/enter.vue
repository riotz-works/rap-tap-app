<template>
  <section class="bottom">

    <!-- 案内文言 -->
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <p>{{ getMode() }}ルームに入場します。</p>
      </v-flex>
    </v-layout>

    <!-- ニックネーム入力フォーム -->
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <v-form
          ref="form"
          v-model="valid"
          color="black"
          lazy-validation
          @submit.prevent="submit"
        >
          <v-text-field
            v-model="nickname"
            label="ニックネーム"
            prepend-icon="tag_faces"
            required
            :counter="20"
            :rules="nicknameRules"
            @keyup.enter="submit"
          />
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
import { AxiosResponse } from 'axios';
import Vue from 'vue';
import RealtimeDB from '~/plugins/firebase-realtimedb';

export default Vue.extend({
  data: () => ({
    isSubmitted: false,
    valid: true,
    nickname: '',
    nicknameRules: [
      (v: string): boolean | string => Boolean(v) || 'ニックネームを入力してください',
      (v: string): boolean | string => v.length <= 20 || 'ニックネームは20文字以内で入力してください。'
    ],
    modes: {
      rapper: '対戦',
      watcher: '観戦'
    }
  }),
  methods: {
    getMode(): string {
      const mode = this.$route.query.mode;
      return this.modes[mode] || '対戦';
    },
    async submit(): Promise<void> {
      if (!this.isSubmitted && this.$refs.form.validate()) {
        this.isSubmitted = true;

        const mode = this.$route.query.mode;
        const roomId = this.$route.query.roomId;
        const roomName = this.$route.query.roomName;
        const nickname = this.nickname;
        const peerId = `${roomId}-${Math.random().toString(36).slice(-4)}`;

        if (mode === 'rapper') {
          const res: AxiosResponse = await this.$coreApi.post(`/rooms/${roomId}`, {
            nickname, peerId
          });
          if (res.status !== 200) {
            this.isSubmitted = false;
            console.error(`Error on POST /rooms/${roomId}`);
            return;
          }
          await RealtimeDB.ref(`/rooms/${roomId}/rappers/${peerId}`).set({
            feedback: {
              thumbUp: 0,
              thumbDown: 0
            }
          });
        }

        if (mode === 'rapper') {
          this.$router.push({ path: '/room/rapper', query: { roomId, roomName, peerId, nickname }});
        }
        if (mode === 'watcher') {
          this.$router.push({ path: '/room/watcher', query: { roomId, roomName, peerId, nickname }});
        }
      }
    }
  }
});
</script>


<style scoped>
</style>
