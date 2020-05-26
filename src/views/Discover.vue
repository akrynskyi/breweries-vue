<template>
  <section class="discover">
    <div class="wrapper">
      <Loader v-if="loading"></Loader>
      <div v-else class="content">
        <Post
          v-for="(item, index) of allData"
          v-bind:key="item.key"
          v-bind:item="item"
          v-bind:idx="index"
        ></Post>
      </div>
    </div>
  </section>
</template>

<script>
import Post from '@/components/Post.vue';
import Loader from '@/components/Loader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'discover',
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters(['allData']),
  },
  methods: {
    ...mapActions(['getData']),
  },
  async mounted() {
    this.getData(50);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  components: {
    Post,
    Loader,
  },
};
</script>

<style lang="scss" scoped>
.discover {
  min-height: 100vh;
  position: relative;
  padding: 60px 0px;
  z-index: -1;
  background-color: var(--bgc-two);
}

.content {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  grid-row-gap: 20px;
}
</style>
