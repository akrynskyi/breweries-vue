<template>
  <div class="detail">
    <div class="wrapper">
      <div class="breadcrumbs">
        <router-link
          to="/"
          class="breadcrumbs__link"
          title="home"
        >
          Breweries
        </router-link>
        <span>/</span>
        <router-link
          to="/discover"
          class="breadcrumbs__link"
          title="discover"
        >
          Discover
        </router-link>
        <span>/</span>
        <span>{{ item.name }}</span>
      </div>
      <div class="card" v-if="!loading">
        <div class="card__group">
          <div class="card__cover">{{ item.name.charAt(0) }}</div>
          <div class="card__group-block">
            <div class="card__name">{{ item.name }}</div>
            <div class="card__type">Type: {{ item.brewery_type }}</div>
            <a :href="item.website_url" target="_blanc" class="card__link">website</a>
          </div>
        </div>
        <div class="card__content">
          <p>
            Country: <span>{{ item.country || 'Unknown' }}</span>
          </p>
          <p>
            State: <span>{{ item.state || 'Unknown' }}</span>
          </p>
          <p>
            City: <span>{{ item.city || 'Unknown' }}</span>
          </p>
          <p>
            Street: <span>{{ item.street || 'Unknown' }}</span>
          </p>
          <p>
            Phone: <span>{{ item.phone || 'Unknown' }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'detail',
  title() {
    return `Breweries - ${this.$route.params.name}`;
  },
  data: () => ({
    item: {},
    loading: true,
  }),
  computed: {
    ...mapGetters(['allData']),
  },
  methods: {
    ...mapActions(['getData']),
  },
  async mounted() {
    await this.getData(50);

    this.item = this.allData
      .find((item) => item.id === +this.$route.params.id);

    console.log(this.$route.params.name);

    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
  .detail {
    min-height: calc(100vh - 60px);
    margin-top: 60px;
    background-color: var(--bgc-two);
  }
  .breadcrumbs {
    padding: 40px 0px;
    color: var(--default-c);
    &__link {
      color: var(--neutral-secondary);
      transition: color .2s linear;
      &:hover {
        color: var(--default-c);
      }
    }
    & > span {
      margin: 0px 10px;
    }
  }

  .card {
    &__group {
      display: flex;
      &-block {
        margin-left: 40px;
      }
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(4, auto);
      grid-gap: 20px;
      margin-top: 40px;
      & > p {
        color: var(--neutral-regular);
        font-size: 24px;
        & > span {
          font-weight: 300;
          color: var(--default-c);
        }
      }
    }
    &__cover {
      width: 250px;
      height: 250px;
      background-color: var(--bgc-one);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--bgc-two);
      font-size: 56px;
      font-weight: 700;
    }
    &__name {
      font-size: 48px;
      color: var(--default-c);
    }
    &__type {
      margin-top: 20px;
      font-size: 28px;
      color: var(--default-c);
    }
    &__link {
      margin-top: 30px;
      display: block;
      color: var(--default-c);
      font-weight: 300;
      transition: color .2s linear;
      &:hover {
        color: var(--neutral-regular);
      }
    }
  }
</style>
