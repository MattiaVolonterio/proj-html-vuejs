<script>
import JumboBackground from "./JumboBackground.vue";
export default {
  components: {
    JumboBackground,
  },
};
</script>

<template>
  <div class="jumbo-container">
    <JumboBackground />
    <div class="jumbo-content">
      <div class="title marck-script-regular">Hello, Im Matin</div>
      <div class="subtitle">
        Artist Coaching And Mentoring Might Be for You.
      </div>
      <div class="btn-orange">Get started today</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.jumbo-container {
  position: relative;

  .jumbo-content {
    @include flex-column-center;

    position: absolute;
    z-index: 1;
    width: 35%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;

    .title {
      color: $sectionTitle;
      font-family: "Marck Script", cursive;
      font-size: 2.5rem;
    }

    .subtitle {
      font-weight: bold;
      font-size: 2rem;
      color: $lightBlack;

      margin-bottom: 20px;
    }

    .btn-orange {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
}
</style>
