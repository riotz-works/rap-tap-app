<template>
  <section>

    <!-- 案内文言 -->
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <p>{{ getMode() }}ルームに入場します。</p>
      </v-flex>
    </v-layout>

    <!-- ニックネーム入力フォーム -->
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="nickname"
            :rules="nicknameRules"
            :counter="20"
            label="ニックネーム"
            prepend-icon="tag_faces"
            required
          >
          </v-text-field>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            入場する
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>

  </section>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

  data: () => ({
    valid: true,
    nickname: '',
    nicknameRules: [
      (v: string): boolean | string => !!v || 'ニックネームを入力してください',
      (v: string): boolean | string => (v && v.length <= 20 || 'ニックネームは20文字以内で入力してください。')
    ],
    modes: {
      rapper: '対戦',
      watcher: '観戦'
    }
  }),

  methods: {
    getMode() {
      const mode = this.$route.query.mode;
      return this.modes[mode] || '対戦';
    },
    submit() {
      if (this.$refs.form.validate()) {
        console.log('nickname: ', this.nickname);
      }
    }
  }
});
</script>


<style scoped>
</style>
