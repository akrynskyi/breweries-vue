<template>
  <div class="card">

    <div class="card__header">
      <div class="card__avatar">
        <i class="fas fa-beer"></i>
      </div>
      <div class="card__content">
        <div class="name">
          {{ feedback.author }}
        </div>
        <div class="date">
          {{ feedback.date | fromNow }}
        </div>
      </div>
    </div>

    <div class="card__body">
      <p>
        {{ feedback.text }}
      </p>
    </div>

  </div>
</template>

<script>
export default {
  props: ['feedback'],
};
</script>

<style lang="scss" scoped>
.card {
  min-height: 200px;
  background-color: var(--default-c);
  padding: 15px;
  line-height: 1.2;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
    0 3px 1px -2px rgba(0,0,0,0.12),
    0 1px 5px 0 rgba(0,0,0,0.2);

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--neutral-placeholder);
    border-radius: 4px;
    margin-right: 15px;

    & > i {
      color: var(--base);
    }
  }

  .name {
    font-size: 24px;
  }

  .date {
    font-size: 14px;
    font-weight: 300;
  }

  &__body {
    font-weight: 300;
  }
}
</style>
