<script>
import UpcomingEventsBg from "./UpcomingEventsBg.vue";
import UpcomingCard from "./UpcomingCard.vue";

export default {
  props: { cardsArray: Array },
  components: {
    UpcomingEventsBg,
    UpcomingCard,
  },
};
</script>
<template>
  <div class="upcoming-main-container">
    <UpcomingEventsBg />
    <div class="upcoming-header">
      <div class="title">Upcoming Events</div>
      <div class="subtitle">Let's Work Togheter</div>
    </div>
    <div class="container">
      <div class="row g-5">
        <div v-for="(card, index) in cardsArray" class="col-6">
          <UpcomingCard :card="card" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
.upcoming-main-container {
  position: relative;

  .upcoming-header {
    position: absolute;
    left: 50%;
    top: 3.5rem;
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
    width: 1200px;
    position: absolute;
    top: 230px;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
