<template>
  <section class="bottom">

    <!-- ボタン表示 -->
    <v-layout row>
      <v-flex xs12>
        <v-btn class="host-btn" @click="onHost">バトルを募集する</v-btn>
        <v-alert :value="true" icon="priority_high" color="white" class="warning" outline>
          認証等の保護はしていません。URLがわかると中継カメラの映像が見られます。あらかじめ了承のうえご利用ください。
        </v-alert>
      </v-flex>
    </v-layout>

  </section>
</template>


<script lang="ts">
import { AxiosResponse } from 'axios';
import Vue from 'vue';
import RealtimeDB from '~/plugins/firebase-realtimedb';

export default Vue.extend({
  methods: {
    onHost(): void {
      this.$coreApi.post('/rooms', { roomName: 'RAP_BATTLE' }).then((res: AxiosResponse) => RealtimeDB
        .ref(`/rooms/${res.data.roomId}`)
        .set({
          messages: [],
          rappers: {}
        })
        .then(() => res)).then((res: AxiosResponse) => {
        this.$router.push({ path: '/host', query: { roomId: res.data.roomId, roomName: res.data.roomName }});
      });
    }
  }
});
</script>


<style scoped>
.host-btn {
  width: 100%;
  margin: 0.5em 0;
  font-weight: 600;
}

.warning {
  font-size: small;
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
