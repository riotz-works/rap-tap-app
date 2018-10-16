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
      this.$router.push({ path: '/enter', query: { mode: 'rapper', roomId: this.getRoomId, roomName: this.getRoomName }})
    },
    openEnterPageForWatcher(): void {
      location.href = this.watcherUrl;
    }
  },

  computed: {
    roomId(): string {
      return this.$route.query.roomId;
    },
    roomName(): string {
      return this.$route.query.roomName;
    },
    roomParam(): string {
      return `roomId=${this.roomId}&roomName=${this.roomName}`;
    },
    rapperUrl(): string {
      return location.hostname === 'localhost' ?
        `http://${location.hostname}:${location.port}/enter/?mode=rapper&${this.roomParam}`
        : `https://${location.hostname}/rap-tap-app/enter/?mode=rapper&${this.Param}`;
    },
    watcherUrl(): string {
      return location.hostname === 'localhost' ?
        `http://${location.hostname}:${location.port}/enter/?mode=watcher&${this.roomParam}`
        : `https://${location.hostname}/rap-tap-app/enter/?mode=watcher&${this.roomParam}`
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
