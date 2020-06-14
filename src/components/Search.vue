<template>
  <div class="search">
    <div
      class="input-group"
      v-bind:class="{focus: value}"
    >
      <input
        type="text"
        class="input-group__input"
        @input="search()"
        v-model="value"
      />
      <span class="input-group__placeholder" data-placeholder="Filter by name"></span>
      <span class="results-count">{{count}}/{{data.length}}</span>
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  props: ['count'],

  data: () => ({
    value: '',
  }),
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    ...mapMutations(['updateSearchString']),
    search() {
      this.updateSearchString(this.value.toLowerCase().trim());
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  padding: 40px 25px;
}

.results-count {
  margin-right: 15px;
  font-weight: 300;
  color: var(--neutral-secondary);
}
</style>
