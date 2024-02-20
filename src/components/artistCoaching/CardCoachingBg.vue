<script>
export default {
  data() {
    return {};
  },
  props: {},
  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="bg-container">
    <img
      class="sphere-shape"
      :src="getImgPath('maxcoach-shape-13-150x150.png')"
    />
    <img
      class="paint-shape"
      :src="getImgPath('paint-stains.png')"
      alt="paint-strains"
    />
    <img
      class="strig-shape"
      :src="getImgPath('maxcoach-shape-03.png')"
      alt="filo"
    />
    <img
      class="right-shape"
      :src="getImgPath('artist-shape-01-600x577.png')"
      alt="shape"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
.bg-container {
  position: relative;
  height: $cardCoachingHeight;

  .right-shape {
    position: absolute;
    left: -100px;
    top: 0;
    width: 400px;
    transform: rotate(220deg);
  }

  .sphere-shape {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .paint-shape {
    position: absolute;
    left: 70%;
    bottom: 0;
    width: 20%;
    filter: opacity(0.9);
  }

  .strig-shape {
    filter: opacity(0.6);
  }
}
</style>
