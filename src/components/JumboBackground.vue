<script>
export default {
  props: {},
  methods: {
    getLogoPath(imgUrl) {
      return new URL(`../assets/img/${imgUrl}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="jumbo-container">
    <div class="left">
      <img
        class="fourthLeft"
        :src="getLogoPath('artist-hero-image-01.jpg')"
        alt="scimmia"
      />
      <img
        class="thirdLeft"
        :src="getLogoPath('artist-hero-image-02-232x300.jpg')"
        alt="quadro"
      />
      <img
        class="secondLeft"
        :src="getLogoPath('artist-hero-image-03-204x300.png')"
        alt="ragazzo"
      />
      <img
        class="firstLeft"
        :src="getLogoPath('artist-shape-02-768x415.png')"
        alt=""
      />
      <img
        class="fifthLeft"
        :src="getLogoPath('artist-shape-03.png')"
        alt="dots"
      />
    </div>
    <div class="right">
      <img
        class="secondRight"
        :src="getLogoPath('artist-hero-image-04-235x300.jpg')"
        alt="persona"
      />
      <img
        class="firstRight"
        :src="getLogoPath('artist-shape-01-600x577.png')"
        alt="background"
      />
      <img
        class="thirdRight"
        :src="getLogoPath('artist-shape-04-127x300.png')"
        alt="piuma"
      />
      <img
        class="fourthRight"
        :src="getLogoPath('artist-shape-05-300x198.png')"
        alt="pennello"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.jumbo-container {
  height: $jumboHeight;
  background-color: $jumboBg;
  position: relative;

  .firstLeft {
    position: absolute;
    left: 0;
    top: 0;
  }

  .secondLeft {
    position: absolute;
    bottom: 20px;
    left: 25%;
  }

  .thirdLeft {
    position: absolute;
    top: 60px;
    left: 18%;
    z-index: 1;
  }

  .fourthLeft {
    position: absolute;
    bottom: 10%;
    left: 10%;
    z-index: 2;
  }

  .fifthLeft {
    position: absolute;
    left: 0;
    bottom: 10%;
  }

  .firstRight {
    position: absolute;
    top: 0;
    right: 100px;
    height: 90%;
  }

  .secondRight {
    position: absolute;
    bottom: 10%;
    right: 14%;
    width: 16%;
    z-index: 1;
  }

  .thirdRight {
    position: absolute;
    right: 10%;
    bottom: 40%;
    width: 7%;
  }

  .fourthRight {
    position: absolute;
    bottom: 0;
    right: 8%;
  }
}
</style>
