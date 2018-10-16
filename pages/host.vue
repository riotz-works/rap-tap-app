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
                :value="roomUrl.rapper"
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
                :value="roomUrl.watcher"
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
    QRCode.toCanvas(rapperCanvas, 'https://to.rapper.page.sample', qrCodeOptions);
    QRCode.toCanvas(watcherCanvas, 'https://to.watcher.page.sample', qrCodeOptions);
  },

  async asyncData({ app }: NuxtContext): Promise<object> {
    const res = await app.$axios.get('https://n0wp6edtwj.execute-api.us-west-2.amazonaws.com/dev/version?detail=true'); // 一旦ダミー API Call

    return {
      roomUrl: {
        rapper: `https://rapper.sample.com/${res.data.name}`,
        watcher: `https://watcher.sample.com/${res.data.name}`
      }
    };
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
