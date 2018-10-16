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
                label="URL"
                append-icon="file_copy"
                @click:append="copyRoomURL"
                value="https://to.rapper.page.sample"
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
                label="URL"
                append-icon="file_copy"
                @click:append="copyRoomURL"
                value="https://to.watcher.page.sample"
                hint="Copy this link to the battle room"></v-text-field>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </section>
</template>


<script lang="ts">

import QRCode from 'qrcode';
import Vue from 'vue';

export default Vue.extend({

  methods: {
    copyRoomURL (e: MouseEvent) {
      // TODO: Copy URL
      console.log('Copy room URL', e);
      console.log('MouseEvent', e);
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
