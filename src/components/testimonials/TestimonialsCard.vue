<script>
export default {
  props: { card: Object },
  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="card-container">
    <div class="card-top">
      <span class="card-title">{{ card.title }}</span>
      <span class="card-par">{{ card.paragraph }}</span>
    </div>

    <div class="card-image">
      <img :src="getImgPath(card.imgUrl)" alt="" />
      <div class="card-descr">
        <span class="card-name">{{ card.name }}</span>
        <span class="card-spec">{{ card.spec }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.card-container {
  width: calc(100% / 3);
  height: 300px;
  background-color: white;
  padding: 1.5rem;
  border-radius: 15px;
  @include flex-column-start;

  .card-top {
    height: 60%;
    span {
      display: inline-block;
    }
    .card-title {
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }

    .card-par {
      font-size: 0.9rem;
      color: $headerList;
    }
  }

  .card-image {
    @include flex-center;
    height: 40%;
    gap: 30px;
    img {
      width: 80px;
      border-radius: 50%;
    }
    .card-descr {
      span {
        display: block;
      }

      .card-name {
        font-weight: bold;
        margin-bottom: 0.2rem;
      }
      .card-spec {
        color: $headerList;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
