<template>
  <section>

    <section v-for="module in modules" :key="module.name">
      <h3>{{ module.name }} {{ module.version }}</h3>
      <div v-for="dependencies in [[ 'Dependencies', module.dependencies ], [ 'Develoment Dependencies', module.devDependencies ]]" :key="dependencies[0]">
        <h4>{{ dependencies[0] }} [{{ Object.keys(dependencies[1] || {}).length }}]</h4>
        <v-data-table :headers="headers" :items="Object.entries(dependencies[1] || {})" hide-actions>
          <template slot="items" slot-scope="props">
            <tr>
              <td>{{ props.index + 1 }}</td>
              <td>{{ props.item[0] }}</td>
              <td>{{ props.item[1].replace('^', '') }}</td>
            </tr>
          </template>
        </v-data-table>
      </div>
    </section>

  </section>
</template>


<script lang="ts">
import { NuxtContext } from 'nuxt';
import Vue from 'vue';
import { config } from '~/mixins/config';
import pkg from '../../package.json';

export default Vue.extend({
  async asyncData({ app }: NuxtContext): Promise<object> {
    return {
      modules: [ pkg, (await app.$axios.get(`${config.coreApiEndpoint}/version?detail=true`)).data ]
    };
  },
  computed: {
    title: (): string => 'About',
    headers: (): object => [
      { text: '#', sortable: false, width: '24px' },
      { text: 'Module Name', sortable: false, width: '240px' },
      { text: 'Version', sortable: false }
    ]
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
