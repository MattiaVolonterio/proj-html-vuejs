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
  <div class="container">
    <div class="col-left">
      <img :src="getImgPath('artist-quote-icon.png')" alt="quotes" />
      <p>
        I coach and mentor visual artists, like you, to Create Like You Mean It
      </p>
      <div class="title">Martin Garrix</div>
    </div>
    <div class="col-right">
      <p>
        As a coach and mentor, my ultimate goal is to motivate visual artists
        toward inspired action. I help you get you back on track to being the
        productive, creative, meaningful and authentic artist you truly want to
        be. I support artists in crafting and living a creative life as well as
        feeling good about themselves and thei art.
      </p>
      <p>
        As an artist and educator for nearly 30 years, I understand what it
        takes to create.
      </p>
      <div class="btn-orange-light">Get started today</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.container {
  @include space-between;
  gap: 80px;
  margin-bottom: 7rem;
  .col-left {
    flex-grow: 0;
    flex-shrink: 0;
    width: 40%;
    text-align: center;
    p {
      font-size: 2.5rem;
      font-weight: bold;
    }
    .title {
      color: $sectionTitle;
      font-family: "Marck Script", cursive;
      font-size: 2rem;
    }
  }

  .col-right {
    @include flex-column-start;
    flex: 1 0;
    width: 60%;

    p {
      color: $headerList;
      font-size: 1rem;
    }

    .btn-orange-light {
      padding: 10px 30px;
    }
  }
}
</style>
