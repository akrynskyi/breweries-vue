<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
