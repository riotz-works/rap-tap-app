<template>
  <section>
    <h1>{{ title }}</h1>
  </section>
</template>


<script>
export default {
  computed: {
    title: () => 'About'
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>


<style scoped>
</style>
