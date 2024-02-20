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
  <div class="bg-container">
    <img
      class="strig-shape"
      :src="getImgPath('maxcoach-shape-03.png')"
      alt="filo"
    />
    <div class="circle-orange"></div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.bg-container {
  position: relative;
  background-color: $blogBg;
  height: $blogHeight;

  .strig-shape {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  .circle-orange {
    width: 80px;
    aspect-ratio: 1;
    border: 10px solid #ecc5ab;
    border-radius: 50%;

    position: absolute;
    top: 25%;
    left: 250px;
    transform: translate(0, -50%);
  }
}
</style>
