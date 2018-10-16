<template>
  <v-app dark>
    <v-toolbar app flat height="36px">
      <v-toolbar-title class="title">
        <router-link to="/">
          <img src="@/static/icon.png" />
          <span>{{ require('~/package.json').displayName }}</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat fab color="black" class="no-margin"><v-icon>notifications_none</v-icon></v-btn>
      <v-btn flat fab color="black" class="no-margin"><v-icon>settings</v-icon></v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app class="footer" height="18px">
      <v-spacer></v-spacer>
      <small>© Since 2018 <a href="https://riotz.works">Riotz Works</a>.</small>
    </v-footer>
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>


<style>
nav {
  background-color: rgba(0, 0, 0, 0) !important;
}

.application {
  background: url("~/assets/top.jpg") center center / cover no-repeat fixed !important;
  height: 100%;
}

.v-toolbar__content {
  padding-left: 4px;
}

.title a {
  color: #EF164B;
  text-decoration: none;
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
  min-height: 0px;
  text-align: right;
}
.footer a {
  color: #fff;
  text-decoration: none;
}
</style>
