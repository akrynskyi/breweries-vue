<template>
  <section class="discover">
    <div class="wrapper">
      <Loader v-if="loading"></Loader>
      <main v-else>
        <Search v-bind:resultsNum="countSearchResuts"></Search>
        <div class="content" v-if="filterData.length">
          <Post
            v-for="(item, index) of filterData"
            v-bind:key="item.key"
            v-bind:item="item"
            v-bind:idx="index"
          ></Post>
        </div>
        <p v-else class="placeholder">
          <span>Nothing found...</span>
        </p>
      </main>
    </div>
  </section>
</template>

<script>
import Post from '@/components/Post.vue';
import Loader from '@/components/Loader.vue';
import Search from '@/components/Search.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'discover',
  title: 'Breweries - Discover',
  data: () => ({
    loading: true,
  }),
  computed: {
    ...mapGetters(['allData', 'searchTerm']),
    filterData() {
      return this.allData
        .map((item) => {
          if (item.name.toLowerCase().includes(this.searchTerm) && this.searchTerm !== '') {
            return { ...item, filtered: true };
          }
          return item;
        });
    },
    countSearchResuts() {
      return this.filterData.reduce((total, current) => (current.filtered ? total + 1 : total), 0);
    },
  },
  methods: {
    ...mapActions(['getData']),
    ...mapMutations(['updateSearchString']),
  },
  async mounted() {
    this.getData(50);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  destroyed() {
    this.updateSearchString('');
  },
  components: {
    Post,
    Loader,
    Search,
  },
};
</script>

<style lang="scss" scoped>
.discover {
  min-height: 100vh;
  margin-top: 60px;
  padding-bottom: 60px;
  background-color: var(--bgc-two);
}
.content {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  grid-row-gap: 20px;
}
.placeholder {
  display: flex;
  justify-content: center;
  color: var(--neutral-secondary);
}
</style>
