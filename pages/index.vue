<template>
  <section class="bottom">

      <!-- ボタン表示 -->
      <v-layout row>
        <v-flex xs12>
          <router-link to="/host">
            <v-btn class="host-btn" @click="onHost">バトルを募集する</v-btn>
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
      this.$coreApi.post('/rooms', { roomName: 'RAP_BATTLE' }).then((res: any) => {

        return RealtimeDB
          .ref(`/rooms/${res.data.roomId}`)
          .set({
            messages: [],
            rappers: {}
          })
          .then(() => res);

      }).then((res: any) => {
        this.$router.push({path: '/host', query: { roomId: res.data.roomId, roomName: res.data.roomName }});
      });
    }
  }
});
</script>


<style scoped>
.host-btn {
  font-weight: 600;
  margin: 0.5em 0;
  width: 100%;
}
</style>
