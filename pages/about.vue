<template>
  <section>
  </section>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    title: (): string => 'About'
  },
  head(): object {
    return {
      title: this.title
    };
  }
});
</script>


<style scoped>
</style>
