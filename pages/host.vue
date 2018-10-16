<template>
  <section>
    <v-container grid-list-md>

      <!-- 対戦者 -->
      <v-layout row>
        <v-flex xs12 text-xs-center>
          <v-card>
            <v-card-title primary-title>
              <h3 class="headline mb-0">対戦者</h3>
            </v-card-title>
            <canvas id="rapper-qr-code"></canvas>
            <v-card-actions>
              <v-text-field
                readonly
                id="rapper-copy-url"
                label="URL"
                append-icon="file_copy"
                @click:append="copyRapperRoomUrl"
                :value="rapperUrl"
                persistent-hint
                hint="Copy this link to the battle room"></v-text-field>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- 観戦者 -->
      <v-layout row>
        <v-flex xs12 text-xs-center>
          <v-card>
            <v-card-title primary-title>
              <h3 class="headline mb-0">観戦者</h3>
            </v-card-title>
            <canvas id="watcher-qr-code"></canvas>
            <v-card-actions>
              <v-text-field
                readonly
                id="watcher-copy-url"
                label="URL"
                append-icon="file_copy"
                @click:append="copyWatcherRoomUrl"
                :value="watcherUrl"
                persistent-hint
                hint="Copy this link to the battle room"></v-text-field>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </section>
</template>


<script lang="ts">
import { NuxtContext } from 'nuxt';
import QRCode from 'qrcode';
import RealtimeDB from '~/plugins/firebase-realtimedb';
import Vue from 'vue';

export default Vue.extend({

  methods: {
    copyRapperRoomUrl () {
      (document.getElementById('rapper-copy-url') as any).select(); // TODO: Typing
      document.execCommand('copy');
    },
    copyWatcherRoomUrl () {
      (document.getElementById('watcher-copy-url') as any).select(); // TODO: Typing
      document.execCommand('copy');
    }
  },

  mounted(): void {
    const rapperCanvas = document.getElementById('rapper-qr-code');
    const watcherCanvas = document.getElementById('watcher-qr-code');
    const qrCodeOptions = {
      errorCorrectionLevel: 'H',
      scale: 5,
      width: 250
    };

    QRCode.toCanvas(rapperCanvas, this.rapperUrl, qrCodeOptions);
    QRCode.toCanvas(watcherCanvas, this.watcherUrl, qrCodeOptions);
  },

  async asyncData({ app }: NuxtContext): Promise<object> {

    const res = await app.$coreApi.post('/rooms', { roomName: 'BATTLE_FOR_SPIKE' });

    RealtimeDB.ref(`/rooms/${res.data.roomId}`).set({
      messages: [],
      feedbacks: {
        like: 0,
        thumbs_up: 0,
        thumbs_down: 0
      }
    });
    const query = `?roomId=${res.data.roomId}&roomName=${res.data.roomname}`;

    const urlForLocal = {
      rapperUrl:  `http://${location.hostname}:${location.port}/room/rapper/${query}`,
      watcherUrl: `http://${location.hostname}:${location.port}/room/watcher/${query}`
    };
    const urlToServe = {
      rapperUrl:  `https://${location.hostname}/rap-tap-app/room/rapper/${query}`,
      watcherUrl: `https://${location.hostname}/rap-tap-app/room/watcher/${query}`
    };

    return location.hostname === 'localhost' ? urlForLocal : urlToServe;
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
