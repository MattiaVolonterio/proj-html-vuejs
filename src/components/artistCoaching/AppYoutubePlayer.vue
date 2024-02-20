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
  <div class="container">
    <div class="player-container">
      <img
        :src="getImgPath('artist-video-poster.jpg')"
        alt="vide-background"
        class="player-background"
      />
      <img
        :src="getImgPath('icon-youtube-play.png')"
        alt="youtube icon"
        class="youtube-icon"
      />
      <div class="circle-orange"></div>

      <img
        :src="getImgPath('maxcoach-shape-12-150x150.png')"
        alt="shape 1"
        class="backgroundShapeBottom"
      />

      <img
        :src="getImgPath('maxcoach-shape-05-150x150.png')"
        alt="shape 2"
        class="backgroundShapeTop"
      />

      <img
        class="paint-stains"
        :src="getImgPath('paint-stains.png')"
        alt="paint-stains"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  text-align: center;
  margin-bottom: 7rem;

  .player-container {
    width: 80%;
    position: relative;
    margin: auto;
    .youtube-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }

    .circle-orange {
      width: 75px;
      aspect-ratio: 1;
      border: 8px solid #ecc5ab;
      border-radius: 50%;

      position: absolute;
      right: -55px;
      top: 100px;
    }

    .paint-stains {
      width: 40%;
      position: absolute;
      z-index: -2;
      top: -120px;
      left: -120px;
    }

    .backgroundShapeBottom {
      position: absolute;
      bottom: -10px;
      right: -100px;
      z-index: -1;
    }

    .backgroundShapeTop {
      position: absolute;
      top: -50px;
      left: -50px;
      z-index: -1;
    }
  }
}
</style>
