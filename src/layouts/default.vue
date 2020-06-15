<template>
  <v-app dark :style="wallpaper()">
    <v-toolbar app flat height="36px">
      <v-toolbar-title class="title">
        <router-link to="/">
          <img src="@/static/icon.png">
          <span class="neon">{{ displayName }}</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn flat fab color="black" class="no-margin"><v-icon>notifications_none</v-icon></v-btn>
      <v-btn flat fab color="black" class="no-margin"><v-icon>settings</v-icon></v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app class="footer" height="18px">
      <v-spacer />
      <small>© Since 2018 <a href="https://riotz.works">Riotz Works</a>.</small>
    </v-footer>
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue';
import { config } from '~/mixins/config';

const home = require('~/assets/image/wallpaper-top.jpg');
const room = require('~/assets/image/wallpaper-room.jpg');


export default Vue.extend({
  data: (): object => ({
    displayName: config.displayName
  }),
  methods: {
    wallpaper(): object {
      const path = this.$route.path;
      const mode = this.$route.query.mode;
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
  background-color: rgba(0, 0, 0, 0) !important;
  padding-right: 4px;
  min-height: 0;
  text-align: right;
}
.footer a {
  color: #fff;
}
</style>
