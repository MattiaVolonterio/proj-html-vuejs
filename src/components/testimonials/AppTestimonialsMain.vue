<script>
import TestimonialsCard from "./TestimonialsCard.vue";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: { testimonialCards: Array },

  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },
    changeCard(index) {
      this.currentIndex = index;
    },
  },

  components: {
    TestimonialsCard,
  },
};
</script>

<template>
  <div class="wave"><img :src="getImgPath('wave.svg')" alt="wave" /></div>
  <div class="testimonials">
    <div class="testimonials-header">
      <div class="title">Testimonials</div>
      <div class="subtitle">Why do people love me?</div>
    </div>
    <!-- CAROUSEL -->
    <div class="card-container">
      <TestimonialsCard
        class="unactive-card"
        @selected-card="changeCard"
        :card="
          currentIndex == 0
            ? testimonialCards[testimonialCards.length - 1]
            : testimonialCards[currentIndex - 1]
        "
      />
      <TestimonialsCard
        @selected-card="changeCard"
        :card="testimonialCards[currentIndex]"
      />
      <TestimonialsCard
        class="unactive-card"
        @selected-card="changeCard"
        :card="
          currentIndex == testimonialCards.length - 1
            ? testimonialCards[0]
            : testimonialCards[currentIndex + 1]
        "
      />
    </div>
    <div class="card-selection">
      <div
        v-for="(n, index) in testimonialCards"
        class="selection-dot"
        @click="currentIndex = index"
        :class="index == currentIndex ? 'selected' : ''"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
.testimonials {
  position: relative;
  background-color: $testimonialsBg;
  padding: 1rem;
  padding-bottom: 80px;
  margin-bottom: 5rem;
  .testimonials-header {
    text-align: center;
    .title {
      color: $sectionTitle;
      font-family: "Marck Script", cursive;
      font-size: 2rem;
    }

    .subtitle {
      font-weight: bold;
      font-size: 1.8rem;
      color: $lightBlack;
    }
  }

  .card-container {
    display: flex;
    gap: 20px;

    padding-left: 1.5rem;
    padding-right: 1.5rem;

    margin-top: 1rem;
    margin-bottom: 0.5rem;

    .unactive-card {
      filter: opacity(0.6);
    }
  }

  .card-selection {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    .selection-dot {
      display: inline-block;
      margin-right: 5px;
      width: 10px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: grey;
      cursor: pointer;

      &.selected {
        background-color: black;
      }
    }
  }
}
</style>

<!-- <template>
  <div class="wave"><img :src="getImgPath('wave.svg')" alt="wave" /></div>
  <div class="testimonials">
    <div class="testimonials-header">
      <div class="title">Testimonials</div>
      <div class="subtitle">Why do people love me?</div>
    </div>
    <div class="card-container">
      <TestimonialsCard
        @selected-card="changeCard"
        v-for="(card, index) in testimonialCards"
        :card="card"
        :index="index"
        :currentIndex="currentIndex"
      />
    </div>
    <div class="card-selection">
      <div
        v-for="(n, index) in testimonialCards"
        class="selection-dot"
        @click="currentIndex = index"
        :class="index == currentIndex ? 'selected' : ''"
      ></div>
    </div>
  </div>
</template> -->
