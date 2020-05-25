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
  mounted() {
    document.addEventListener('mousedown', (e) => {
      const root = document.documentElement;
      const element = e.target;
      const x = (e.clientX - element.offsetLeft) / element.offsetWidth;
      const y = (e.clientY - element.offsetTop) / element.offsetHeight;
      root.style.setProperty('--rippleX', x);
      root.style.setProperty('--rippleY', y);
    });
  },
};
</script>
