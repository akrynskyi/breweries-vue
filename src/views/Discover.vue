<template>
  <div>
    <section class="discover">
      <div class="wrapper">
        <div class="content">
          <div class="post">
            <div class="post__cover">
              <div class="post__cover-center">
                <span>A</span>
              </div>
              <div class="post__more">City: City</div>
            </div>
            <div class="post__meta">
              <h4 class="post__meta-title">Beer</h4>
              <span class="post__meta-type">Type</span>
            </div>
          </div>
          <!-- close .post -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.discover {
  padding-top: 60px;
}

.content {
  margin-top: 40px;
}

.post {
  width: 200px;
  height: auto;
  &__cover {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: var(--neutral-placeholder);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    &-center {
      // flex-grow: 1;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__more {
    padding: 10px 0px;
  }
  &__meta {
    margin-top: 10px;
    font-weight: 300;
  }
}
</style>
