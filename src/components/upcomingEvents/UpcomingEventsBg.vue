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
  <div class="events-bg-container">
    <img
      :src="getImgPath('artist-shape-02-600x324.png')"
      alt="shape1"
      class="shape-one"
    />
    <img
      :src="getImgPath('maxcoach-shape-12.png')"
      alt="shape2"
      class="shape-two"
    />
    <img
      :src="getImgPath('paint-stains.png')"
      alt="stains"
      class="paint-stains"
    />
    <span class="section-title">Events</span>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.events-bg-container {
  position: relative;
  height: $eventHeight;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 5rem;

  .shape-one {
    position: absolute;
    bottom: 0;
    left: -150px;
    transform: rotate(270deg);
  }
  .shape-two {
    position: absolute;
    top: 200px;
    right: 0;
  }
  .paint-stains {
    position: absolute;
    top: 150px;
    right: -250px;
    width: 30%;
    filter: opacity(0.4) brightness(1.6);
  }

  .section-title {
    position: absolute;
    bottom: 200px;
    left: -150px;

    transform: rotate(90deg);
    font-size: 200px;
    color: $orangeLight;
    font-family: "Londrina Outline", sans-serif;
  }
}
</style>
