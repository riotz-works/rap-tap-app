<template>
  <section>
    <v-container grid-list-md>

      <v-snackbar
        v-model="copyURLSnackbar.show"
        :timeout="copyURLSnackbar.timeout"
        :top="copyURLSnackbar.align_y === 'top'"
      >
        {{ copyURLSnackbar.text }}
        <v-btn
          color="pink"
          flat
          @click="copyURLSnackbar.show = false"
        >
          Close
        </v-btn>
      </v-snackbar>

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
            <canvas id="rapper-qr-code" />
            <v-card-actions>
              <v-text-field
                id="rapper-copy-url"
                readonly
                label="URL"
                append-icon="file_copy"
                :value="rapperUrl"
                persistent-hint
                hint="Copy this link to the battle room"
                @click:append="copyRapperRoomUrl"
              />
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
            <canvas id="watcher-qr-code" />
            <v-card-actions>
              <v-text-field
                id="watcher-copy-url"
                readonly
                label="URL"
                append-icon="file_copy"
                :value="watcherUrl"
                persistent-hint
                hint="Copy this link to the battle room"
                @click:append="copyWatcherRoomUrl"
              />
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
  data: () => ({
    copyURLSnackbar: {
      show: false,
      timeout: 5000,
      text: ''
    }
  }),
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
      return location.hostname === 'localhost'
        ? `http://${location.hostname}:${location.port}/enter/?mode=rapper&${this.roomParam}`
        : `https://${location.hostname}/rap-tap-app/enter/?mode=rapper&${this.roomParam}`;
    },
    watcherUrl(): string {
      return location.hostname === 'localhost'
        ? `http://${location.hostname}:${location.port}/enter/?mode=watcher&${this.roomParam}`
        : `https://${location.hostname}/rap-tap-app/enter/?mode=watcher&${this.roomParam}`;
    }
  },
  mounted() {
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
  methods: {
    copyRapperRoomUrl(): void {
      (document.getElementById('rapper-copy-url') as HTMLInputElement).select();
      document.execCommand('copy');

      this.copyURLSnackbar.text = '対戦者ルームのURLをコピーしました。';
      this.copyURLSnackbar.show = true;
    },
    copyWatcherRoomUrl(): void {
      (document.getElementById('watcher-copy-url') as HTMLInputElement).select();
      document.execCommand('copy');

      this.copyURLSnackbar.text = '観戦者ルームのURLをコピーしました。';
      this.copyURLSnackbar.show = true;
    },
    openEnterPageForRapper(): void {
      this.$router.push({ path: '/enter', query: { mode: 'rapper', roomId: this.roomId, roomName: this.roomName }});
    },
    openEnterPageForWatcher(): void {
      this.$router.push({ path: '/enter', query: { mode: 'watcher', roomId: this.roomId, roomName: this.roomName }});
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
