<template>
  <v-app dark :style="wallpaper()">

    <v-toolbar app flat height="36px">
      <v-toolbar-title class="title">
        <router-link to="/">
          <img src="@/static/icon.png" :alt="displayName">
          <span class="neon">{{ displayName }}</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app class="footer" height="18px">
      <v-spacer />
      <small>© Since 2018 <a href="https://riotz.works">Riotz.works</a>.</small>
    </v-footer>

  </v-app>
</template>


<script lang="ts">
import Vue from 'vue';
import { config } from '~/mixins/config';

const home = require('~/assets/image/wallpaper-top.jpg'); /* eslint-disable-line @typescript-eslint/no-var-requires */ // 'cuz importing resources requires `require`
const room = require('~/assets/image/wallpaper-room.jpg'); /* eslint-disable-line @typescript-eslint/no-var-requires */ // 'cuz importing resources requires `require`

export default Vue.extend({
  data: () => ({
    displayName: config.displayName
  }),
  methods: {
    wallpaper(): object {
      const { path } = this.$route;
      const { mode } = this.$route.query;
      const type = path.startsWith('/room') ? 'room' : mode === 'watcher' ? 'room' : 'top';
      const pos = type === 'top' ? 'bottom' : 'top';

      let image = home;
      if (type === 'room') {
        image = room;
      }
      return { background: `url('${image}') center ${pos} / cover no-repeat fixed !important` };
    }
  }
});
</script>


<style>
nav {
  background-color: rgba(0, 0, 0, 0) !important;
}

.application {
  height: 100%;
}

.v-toolbar__content {
  padding-left: 4px;
}

.title a span {
  font-size: medium;
  font-weight: bold;
}

.title img {
  width: 28px;
  margin-top: 4px;
  margin-right: 4px;
}

.footer {
  min-height: 0;
  padding-right: 4px;
  text-align: right;
  background-color: rgba(0, 0, 0, 0) !important;
}

.footer a {
  color: #fff;
}
</style>
