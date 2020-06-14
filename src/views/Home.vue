<template>
  <section class="home view">
    <div class="wrapper">
      <div class="container">
        <div class="side side-text">
          <div class="text-group">
            <h1>Brew Collection</h1>
            <button>Discover now</button>
          </div>
        </div>
        <div class="side side-picture">
          <img src="../assets/images/side.jpg" alt="side">
        </div>
      </div>
      <div class="container">
        <h1>next</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
  title: 'Breweries - Home',
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    height: calc(100vh - 60px);
  }

  .side {
    width: 50%;
    height: 100%;

    &.side-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &.side-picture {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .text-group {
    position: absolute;
    z-index: 5;

    & > h1 {
      font-size: 149px;
      color: var(--default-c);
    }
  }
</style>
