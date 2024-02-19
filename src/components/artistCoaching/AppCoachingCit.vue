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
    <div class="row">
      <div class="col-6 col-left">
        <img :src="getImgPath('artist-quote-icon.png')" alt="quotes" />
        <p>
          I coach and mentor visual artists, like you, to Create Like You Mean
          It
        </p>
        <div class="title">Martin Garrix</div>
      </div>
      <div class="col-6 col-right">
        <p>
          As a coach and mentor, my ultimate goal is to motivate visual artists
          toward inspired action. I help you get you back on track to being the
          productive, creative, meaningful and authentic artist you truly want
          to be. I support artists in crafting and living a creative life as
          well as feeling good about themselves and thei art.
        </p>
        <p>
          As an artist and educator for nearly 30 years, I understand what it
          takes to create.
        </p>
        <div class="btn-orange-light">Get started today</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.container {
  margin-bottom: 7rem;
  .col-6.col-left {
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

  .col-6.col-right {
    @include flex-column-start;

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
