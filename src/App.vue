<template>
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
</style>

<script>
import header from './components/header.vue';

export default {
  components: {
    appHeader: header,
  },
};
</script>
