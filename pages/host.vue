<template>
  <section>
    <v-container grid-list-md>

      <!-- 対戦者 -->
      <v-layout row>
        <v-flex xs12 text-xs-center>
          <v-card class="transparent-panel">
            <v-card-title primary-title>
              <h3 class="headline mb-0">対戦者</h3>
              <v-spacer />
              <v-chip label color="primary" @click="openEnterPageForRapper">
                <v-icon>open_in_browser</v-icon>
              </v-chip>
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
          <v-card class="transparent-panel">
            <v-card-title primary-title>
              <h3 class="headline mb-0">観戦者</h3>
              <v-spacer />
              <v-chip label color="primary" @click="openEnterPageForWatcher">
                <v-icon>open_in_browser</v-icon>
              </v-chip>
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
import QRCode from 'qrcode';
import Vue from 'vue';

export default Vue.extend({

  data: (): {} => ({
    rapperUrl: '',
    watcherUrl: ''
  }),

  methods: {
    copyRapperRoomUrl(): void {
      (document.getElementById('rapper-copy-url') as any).select(); // TODO: Typing
      document.execCommand('copy');
    },
    copyWatcherRoomUrl(): void {
      (document.getElementById('watcher-copy-url') as any).select(); // TODO: Typing
      document.execCommand('copy');
    },
    openEnterPageForRapper(): void {
      location.href = this.rapperUrl;
    },
    openEnterPageForWatcher(): void {
      location.href = this.watcherUrl;
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

    const roomId = this.$route.query.roomId;
    const roomName = this.$route.query.roomName;
    const roomParam = `roomId=${roomId}&roomName=${roomName}`;

    if (location.hostname === 'localhost') {
      this.rapperUrl = `http://${location.hostname}:${location.port}/enter/?mode=rapper&${roomParam}`;
      this.watcherUrl = `http://${location.hostname}:${location.port}/enter/?mode=watcher&${roomParam}`;
    } else {
      this.rapperUrl = `https://${location.hostname}/rap-tap-app/enter/?mode=rapper&${roomParam}`;
      this.watcherUrl = `https://${location.hostname}/rap-tap-app/enter/?mode=watcher&${roomParam}`;
    }

    QRCode.toCanvas(rapperCanvas, this.rapperUrl, qrCodeOptions);
    QRCode.toCanvas(watcherCanvas, this.watcherUrl, qrCodeOptions);
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
