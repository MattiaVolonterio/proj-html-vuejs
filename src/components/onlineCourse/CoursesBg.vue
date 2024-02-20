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
  <div class="courses-bg-container">
    <img
      :src="getImgPath('artist-shape-01-600x577.png')"
      alt="shape1"
      class="shape-one"
    />
    <img
      :src="getImgPath('artist-shape-01-600x577.png')"
      alt="shape2"
      class="shape-two"
    />
    <span class="section-title">Courses</span>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.courses-bg-container {
  position: relative;
  height: $course-height;
  overflow-x: hidden;

  .shape-one {
    position: absolute;
    left: -250px;
    bottom: 20%;
    filter: invert(65%) sepia(64%) saturate(391%) hue-rotate(100deg)
      brightness(101%) contrast(89%);
  }
  .shape-two {
    position: absolute;
    right: -250px;
    transform: rotate(253deg);
  }

  .section-title {
    position: absolute;
    top: 25%;
    right: -190px;

    transform: rotate(90deg);
    font-size: 200px;
    color: $orangeLight;
    font-family: "Londrina Outline", sans-serif;
  }
}
</style>
