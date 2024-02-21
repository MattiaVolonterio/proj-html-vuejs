<script>
import CardCoachingBg from "./CardCoachingBg.vue";
import CardCoaching from "./CardCoaching.vue";
import AppCoachingCit from "./AppCoachingCit.vue";
import AppYoutubePlayer from "./AppYoutubePlayer.vue";

export default {
  components: {
    CardCoachingBg,
    CardCoaching,
    AppCoachingCit,
    AppYoutubePlayer,
  },
  props: { cardsArray: Array },
};
</script>

<template>
  <div class="card-coaching-container">
    <CardCoachingBg />
    <div class="container container-top">
      <!-- TITLE -->
      <div class="coach-head">
        <div class="title">Artist coaching</div>
        <div class="subtitle">
          I understand what it takes to create. I can help you with
        </div>
      </div>

      <!-- CARD -->
      <div class="row-modified">
        <div
          v-for="(card, index) in cardsArray"
          class="col-modified"
          :class="`col${index + 1}`"
        >
          <CardCoaching :card="card" />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <!-- CITATION -->
    <AppCoachingCit />

    <!-- YOUTUBE PLAYER -->
    <AppYoutubePlayer />
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.card-coaching-container {
  height: $cardCoachingHeight;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .container-top {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.container {
  width: 1080px;
  .coach-head {
    @include flex-column-center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    .title {
      color: $sectionTitle;
      font-family: "Marck Script", cursive;
      font-size: 2rem;
    }

    .subtitle {
      font-weight: bold;
      font-size: 1.8rem;
      width: 420px;
      color: $lightBlack;
    }
  }

  .row-modified {
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 250px;

    margin-bottom: 7rem;

    .col-modified {
      width: calc(100% / 4);

      &.col1,
      &.col3 {
        align-self: baseline;
      }

      &.col2,
      &.col4 {
        align-self: flex-end;
      }
    }
  }
}
</style>
