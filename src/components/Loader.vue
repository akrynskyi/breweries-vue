<template>
  <div class="loader-overlay">
    <div class="ball-scale-ripple-multiple">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~loaders.css/src/animations/ball-scale-ripple-multiple.scss";

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ball-scale-ripple-multiple > div {
  border: 2px solid var(--default-c);
}
</style>
