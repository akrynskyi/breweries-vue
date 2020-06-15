<template>
  <section class="home view">
    <div class="hero">
      <div class="wrapper container">
          <div class="side side-text">
            <div class="group">
              <h1>Brew Collection</h1>
              <button
                class="btn-underlined gap-top"
                @click="$router.push('/discover')"
              >
                Discover now
              </button>
            </div>
          </div>
      </div>
    </div>
    <div class="info">
      <div class="side-picture left">
        <!-- <img src="@/assets/images/side-1.jpg" alt="side-picture"> -->
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

  .info {
    position: relative;
    min-height: 100vh;
  }

  .hero {
    background-image: url('../assets/images/side-2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .side {
    width: 100%;
    height: 100%;

    &.side-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .group > h1 {
      font-size: 149px;
      text-indent: -8px;
      color: var(--default-c);
    }
  }

  .side-picture {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    z-index: 1;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
</style>
