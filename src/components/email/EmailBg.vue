<script>
export default {
  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="background-container">
    <img
      :src="getImgPath('artist-shape-color-paint-top-left.png')"
      alt="top-left"
      class="top-left"
    />
    <img
      :src="getImgPath('artist-shape-color-paint-bottom-right.png')"
      alt="bottom-right"
      class="bottom-right"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.background-container {
  position: relative;
  background-color: $mailBg;
  height: $mailHeight;

  .bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
