<template>
  <div class="post">
    <div
      class="post__cover"
      :class="{active: item.match}"
      @click="$router.push(`/detail/${name}/${item.id}`)"
    >
      <div class="post__cover-center">
        <span>{{ item.name.charAt(0) }}</span>
      </div>
      <div class="post__more">
        <span>City: {{ item.city }}</span>
        <span>State: {{ item.state }}</span>
      </div>
    </div>
    <div class="post__meta">
      <h4 class="post__meta-title">{{ item.name }}</h4>
      <span class="post__meta-type">{{ item.brewery_type }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'idx'],

  data() {
    return {
      name: this.item.name.trim().replace('/', '|'),
    };
  },
};
</script>>

<style lang="scss" scoped>
.post {
  width: 100%;
  max-width: 200px;
  height: auto;

  &__cover {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: var(--bgc-one);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    cursor: pointer;

    &.active {
      border: 1px solid var(--default-c);
    }

    &-center {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--bgc-two);
      font-size: 36px;
      font-weight: 700;
    }
  }

  &__more {
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    text-align: center;
    color: var(--bgc-two);
  }

  &__meta {
    margin-top: 10px;
    font-weight: 300;

    &-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-type {
      color: var(--neutral-secondary);
    }
  }
}
</style>>
