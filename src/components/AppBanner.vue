<script>
export default {
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>
<template>
  <div class="banner">
    <div class="banner-title">
      Starts TOMORROW! Our biggest event of the year...
    </div>
    <div class="countdown-section">
      <font-awesome-icon icon="fa-regular fa-clock" size="xs" />
      <span>00 : 00 : 00 : 00</span>
    </div>
    <button class="btn-orange">Get ticket</button>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.banner {
  height: $bannerHeight;
  background-color: $grayBg;
  @include flex-center;
  gap: 2rem;

  .banner-title {
    font-size: 0.65rem;
    color: $headerList;
    font-weight: bold;
  }

  .countdown-section {
    span {
      display: inline-block;
      font-size: 0.9rem;
      margin-left: 0.5rem;
      font-weight: bolder;
    }
  }
}
</style>
