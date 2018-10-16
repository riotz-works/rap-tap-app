<template>
  <section>

      <!-- ボタン表示 -->
      <v-layout row class="bottom">
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

.bottom {
  overflow: hidden;
  position: fixed;

  bottom: 46px;
  left: 20px;
  right: 20px;
}
</style>
