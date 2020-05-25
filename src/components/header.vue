<template>
  <header class="header">
    <div class="wrapper header-wrapper">
      <div class="header__title">Breweries</div>
      <nav class="navigation">
        <div class="navigation__link">
          <router-link to="/" class="link-waves">Home</router-link>
        </div>
        <div class="navigation__link">
          <router-link to="/discover" class="link-waves">Discover</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: var(--bgc-five);
  box-shadow:
    0 1.9px 2.1px rgba(0, 0, 0, 0.053),
    0 4.7px 3px rgba(0, 0, 0, 0.077), 0 10.3px 6.8px rgba(0, 0, 0, 0.093),
    0 30px 80px rgba(0, 0, 0, 0.1)
  ;

  &-wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    text-transform: uppercase;
    color: var(--default-c);
    font-weight: 700;
    letter-spacing: .1em;
  }
}
.navigation {
  height: 100%;
  display: flex;
  &__link {
    min-width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
  }
}
</style>
