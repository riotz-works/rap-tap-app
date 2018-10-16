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
          <router-link to="/host">
            <v-btn dark color="black" class="host-btn">バトルを募集する</v-btn>
          </router-link>
        </v-flex>
      </v-layout>

  </section>
</template>


<script lang="ts">
</script>


<style scoped>

a {
  text-decoration: none;
}

.host-btn {
  font-weight: 600;
  margin: 0.5em 0;
  width: 100%;
}

</style>
