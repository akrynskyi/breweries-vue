<template>
  <footer class="footer">
    <div class="wrapper footer__container">
      <div class="footer__logo">BR</div>
      <span>{{ year }}</span>
    </div>
  </footer>
</template>

<script>
export default {

  data: () => ({
    year: new Date().getFullYear(),
  }),

};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 80px;
  padding: 40px 0px;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--default-c);
    & > span {
      font-weight: 300;
      padding-left: 15px;
    }
  }

  &__logo {
    font-size: 24px;
    padding-right: 15px;
    border-right: 1px solid var(--default-c);
    letter-spacing: .1em;
  }
}
</style>
