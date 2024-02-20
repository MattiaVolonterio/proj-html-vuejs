<script>
import CoursesBg from "./CoursesBg.vue";
import CourseCard from "./CourseCard.vue";

export default {
  props: { coursesArray: Array },

  components: {
    CoursesBg,
    CourseCard,
  },

  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="courses-main-container">
    <CoursesBg />
    <div class="courses-header">
      <div class="title">Artist coaching</div>
      <div class="subtitle">Latest Online Courses</div>
    </div>
    <div class="container">
      <div class="row g-3">
        <div v-for="card in coursesArray" class="col-3">
          <CourseCard :card="card">aaa</CourseCard>
        </div>
      </div>
    </div>
    <button class="btn-orange-light">
      View all courses <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.courses-main-container {
  position: relative;

  .courses-header {
    position: absolute;
    left: 50%;
    top: 1rem;
    transform: translate(-50%);
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

  .container {
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translate(-50%);

    margin-bottom: 3rem;
  }

  .btn-orange-light {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translate(-50%);
    padding: 15px 35px;
    font-weight: bold;
  }
}
</style>
