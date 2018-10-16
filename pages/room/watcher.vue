<template>
  <section>

      <!-- 参加人数、曲表示 -->
      <v-layout row>
        <v-flex xs12>
          <v-chip label color="black" text-color="white" class="display-label">
            <v-icon left>people</v-icon>0 人
          </v-chip>
          <br />
          <v-chip label color="black" text-color="white" class="display-label">
            <v-icon left>library_music</v-icon>Song
          </v-chip>
        </v-flex>
      </v-layout>

      <!-- 観戦パネル -->
      <v-layout row>

        <!-- 対戦者Aのパネル -->
        <v-flex xs6 text-xs-center class="margin-0-2">
          <v-card>
            <video id="rapper-a" autoplay class="battle-movie"></video>
            <v-card-title>
              <div>nickname</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_up</v-icon>
                </v-avatar>
                1
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_down</v-icon>
                </v-avatar>
                1
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!-- 対戦者Bのパネル -->
        <v-flex xs6 text-xs-center class="margin-0-2">
          <v-card>
            <video id="rapper-b" autoplay class="battle-movie"></video>
            <v-card-title>
              <div>nickname</div>
            </v-card-title>
            <v-card-actions>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_up</v-icon>
                </v-avatar>
                1
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip color="indigo" label outline>
                <v-avatar>
                  <v-icon>thumb_down</v-icon>
                </v-avatar>
                1
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>

      <!-- チャット -->
      <v-layout row>
        <v-flex xs12 class="margin-0-2">
          <v-card>
            <v-card-actions>
              <v-text-field
                :counter="20"
                append-icon="chat"
                label="メッセージを入力してください"
                required
              >
              </v-text-field>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>


  </section>
</template>


<script lang="ts">

import Peer from 'skyway-js';
import Vue from 'vue';

export default Vue.extend({

  data: () => ({
    peer:          undefined,
    rapperStreamA: undefined,
    rapperStreamB: undefined
  }),

  mounted(): void {
    this.peer = new Peer({ key: this.$route.query.roomId, debug: 3 });

    setTimeout(() => { // TODO: Change the trigger to join the room
      this.peer.joinRoom('test', { mode: 'sfu' }).on('stream', (stream: MediaStream) => {

        if (!this.rapperStreamA) {
          this.rapperStreamA = stream;
          const rapperVideoA = document.getElementById('rapper-a') as HTMLMediaElement;
          rapperVideoA.srcObject = stream;

        } else if (!this.rapperStreamB) {
          this.streamB = stream;
          const rapperVideoB = document.getElementById('rapper-b') as HTMLMediaElement;
          rapperVideoB.srcObject = stream;

        } else {
          console.log('Probably 3rd user joined room. The stream is skipped.');
        }
      });
    }, 2000);

  }

});
</script>


<style scoped>

.battle-movie {
  width: 100%;
  height: auto; /* TODO: Set calculated max-height to keep aspect ratio */
}

.display-label {
  margin: 0.5em 0;
  width: 100%;
}

.margin-0-2 {
  margin: 0.2em;
}

</style>
