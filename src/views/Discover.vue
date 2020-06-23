<template>
  <section class="discover view">
    <div class="wrapper">
      <Loader v-if="loading"></Loader>
      <main v-else>
        <Search
          :count="countSearchResults"
          :intersect="intersect"
        ></Search>
        <div
          class="content"
          v-if="filterData.length"
          ref="discoverContent"
        >
          <Post
            v-for="(item, index) of filterData"
            v-bind:key="item.key"
            v-bind:item="item"
            v-bind:idx="index"
            v-bind:page="page"
          ></Post>

          <Observer @intersect="load()"></Observer>

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
import Observer from '@/components/Observer.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'discover',
  title: 'Breweries - Discover',

  data: () => ({
    loading: true,
    observer: null,
    intersect: false,
    page: 1,
  }),

  computed: {
    ...mapGetters(['data', 'searchTerm']),

    filterData() {
      return this.data.map((item) => {
        const n = item.name.toLowerCase();
        if (n.includes(this.searchTerm) && this.searchTerm) {
          return { ...item, match: true };
        }
        return item;
      });
    },

    countSearchResults() {
      return this.filterData.reduce((total, current) => (current.match ? total + 1 : total), 0);
    },
  },

  methods: {
    ...mapActions(['getData', 'loadData']),
    ...mapMutations(['updateSearchString']),

    intersectionObs() {
      const options = {
        rootMargin: '0px 0px -600px 0px',
      };

      this.observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          this.intersect = true;
        } else {
          this.intersect = false;
        }
      }, options);

      this.observer.observe(this.$refs.discoverContent);
    },

    async load() {
      this.page += 1;
      await this.loadData({ page: this.page });
      this.$router.replace({ query: { page: this.page } });
    },
  },

  async mounted() {
    await this.getData({});
    this.loading = false;
    setTimeout(() => this.intersectionObs(), 0);
  },

  beforeDestroy() {
    this.updateSearchString('');
    this.observer.disconnect();
  },

  components: {
    Post,
    Loader,
    Search,
    Observer,
  },
};
</script>

<style lang="scss" scoped>
.discover {
  padding-bottom: 60px;
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
