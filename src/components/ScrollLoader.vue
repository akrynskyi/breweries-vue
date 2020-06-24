<template>
  <div class="loader-scroll">
    <div class="line-scale">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import "~loaders.css/src/animations/line-scale.scss";

.loader-scroll {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
}
</style>
