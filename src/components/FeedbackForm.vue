<template>
  <form
    class="form-group"
    @submit.prevent="create()"
  >
    <div
      class="form-control input-group"
      :class="{focus: name}"
    >
      <input
        type="text"
        class="input-group__input"
        v-model="name"
      >
      <span
        class="input-group__placeholder"
        data-placeholder="Your name"
      ></span>
    </div>

    <div class="form-control">
      <textarea
        placeholder="Your feedback..."
        class="text-field"
        v-model="text"
      ></textarea>
    </div>

    <div class="form-control">
      <button class="btn">Send</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {

  data: () => ({
    name: '',
    text: '',
  }),

  methods: {
    ...mapActions(['localstorageSave']),

    create() {
      if (!this.name.trim() && !this.text.trim()) return;

      this.localstorageSave({
        id: Date.now(),
        author: this.name,
        date: new Date(),
        text: this.text,
      });

      this.name = '';
      this.text = '';
    },
  },

};
</script>

<style lang="scss" scoped>
.form-group {
  margin-top: 60px;
}

.form-control {
  margin-bottom: 40px;
}

.text-field {
  width: 100%;
  height: 200px;
  padding: 20px;
  border: 1px solid var(--default-c);
  background: transparent;
  color: var(--default-c);
  line-height: 1.2;
  font-weight: 300;
}
</style>
