<template>
  <section>

      <!-- ロゴ表示 -->
      <v-layout row >
        <v-flex xs12>
          <img src="@/static/icon.png" width="100%">
        </v-flex>
      </v-layout>

      <!-- ボタン表示 -->
      <v-layout row>
        <v-flex xs12>
          <v-btn dark color="black" class="host-btn">バトルを募集する</v-btn>
          <v-btn dark color="black" class="host-btn">対戦する</v-btn>
          <v-btn dark color="black" class="host-btn">観戦する</v-btn>
        </v-flex>
      </v-layout>

  </section>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>


<style scoped>
.host-btn {
  font-weight: 600;
  margin: 0.5em 0;
  width: 100%;
}
</style>
