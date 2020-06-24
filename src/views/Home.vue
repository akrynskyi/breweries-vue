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

    <div class="feedback-section feedback-section-wrap">
      <h1 class="headline">
        Feedbacks
      </h1>

      <div class="feedback-section__container">
        <Card
          v-for="fb of feedbacks"
          :key="fb.id"
          :feedback="fb"
        ></Card>
      </div>

      <div class="feedback-section__form">
        <div class="headline">
          Leave your feedback
        </div>

        <FeedbackForm></FeedbackForm>

      </div>
    </div>

  </section>
</template>

<script>
import Card from '@/components/Card.vue';
import FeedbackForm from '@/components/FeedbackForm.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  title: 'Breweries - Home',

  data: () => ({

  }),

  computed: {
    ...mapGetters(['feedbacks']),
  },

  methods: {
    ...mapActions(['localstorageGet']),
  },

  mounted() {
    this.localstorageGet();
  },

  components: {
    Card,
    FeedbackForm,
  },
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    height: calc(100vh - 60px);
  }

  .feedback-section {
    position: relative;
    min-height: 100vh;
    padding: 80px 0px;

    &-wrap {
      max-width: 740px;
      width: 100%;
      margin: 0 auto;
    }

    &__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 25px;
      padding: 80px 0px;
      border-bottom: 1px solid var(--neutral-regular);
    }

    &__form {
      margin-top: 80px;
    }
  }

  .headline {
    font-size: 56px;
    color: var(--default-c)
  }

  .hero {
    background-image: url('../assets/images/side-2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: linear-gradient(to top, #1e212a, rgba(255, 255, 255, 0));
      z-index: 1;
    }
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
