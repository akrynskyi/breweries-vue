<template>
  <div class="detail">
    <div class="wrapper">
      <div class="breadcrumbs">
        <router-link to="/" class="breadcrumbs__link" title="home">
          Breweries
        </router-link>
        <span>/</span>
        <router-link to="/discover" class="breadcrumbs__link" title="discover">
          Discover
        </router-link>
        <span>/</span>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'detail',
  computed: {
    ...mapGetters(['allData']),
    item() {
      return this.allData.find((item) => item.id === +this.$route.params.id);
    },
  },
  methods: {
    ...mapActions(['getData']),
  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
  .detail {
    min-height: 100vh;
    margin-top: 60px;
    background-color: var(--bgc-two);
  }
  .breadcrumbs {
    padding: 40px 0px;
    color: var(--default-c);
    &__link {
      color: var(--neutral-secondary);
      transition: color .2s linear;
      &:hover {
        color: var(--default-c);
      }
    }
    & > span {
      margin: 0px 10px;
    }
  }
</style>
