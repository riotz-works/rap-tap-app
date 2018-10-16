<template>
  <section>

      <!-- ボタン表示 -->
      <v-layout row class="bottom">
        <v-flex xs12>
          <router-link to="/host">
            <v-btn dark color="black" class="host-btn" @click="onHost">バトルを募集する</v-btn>
          </router-link>
        </v-flex>
      </v-layout>

  </section>
</template>


<script lang="ts">
import Vue from 'vue';
import RealtimeDB from '~/plugins/firebase-realtimedb';

export default Vue.extend({

  methods: {
    onHost(): void {
      this.$coreApi.post('/rooms', { roomName: 'BATTLE_FOR_SPIKE' }).then((res: any) => {

          RealtimeDB.ref(`/rooms/${res.data.roomId}`).set({
            messages: [],
            rappers: {}
          });
          const roomParam = `roomId=${res.data.roomId}&roomName=${res.data.roomname}`;
          const urlForLocal = `http://${location.hostname}:${location.port}/host/?${roomParam}`;
          const urlToServe = `https://${location.hostname}/rap-tap-app/host/?${roomParam}`;

          location.href = location.hostname === 'localhost' ? urlForLocal : urlToServe;
      });
    }
  }
});
</script>


<style scoped>

a {
  text-decoration: none;
}

.host-btn {
  font-weight: 600;
  margin: 0.5em 0;
  width: 100%;
}

.bottom {
  overflow: hidden;
  position: fixed;

  bottom: 46px;
  left: 20px;
  right: 20px;
}
</style>
