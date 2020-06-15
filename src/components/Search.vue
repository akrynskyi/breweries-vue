<template>
  <div
    class="search"
    :class="{fixed: intersect}"
  >
    <div
      class="input-group"
      :class="{focus: value, fixed: intersect}"
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
  props: ['count', 'intersect'],

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

  &.fixed {
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 20;
    padding: 15px 55px;
    background-color: var(--default-c);
    animation: fadeOut .2s linear;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}

.results-count {
  margin-right: 15px;
  font-weight: 300;
  color: var(--neutral-secondary);
}
</style>
