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
      <img :src="getImgPath(card.imgUrl)" :alt="card.title" />
    </div>
    <div class="card-bottom">
      <span class="price">{{ card.price }}</span>
      <span class="title"> {{ card.title }}</span>
      <div class="banners">
        <div class="left">
          <font-awesome-icon icon="fa-regular fa-file-lines" />
          <span class="banner-text">{{ card.lessonsNumber }} Lessons</span>
        </div>
        <div class="right">
          <font-awesome-icon icon="fa-regular fa-user" />
          <span class="banner-text">{{ card.sudentsNumber }} Students</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.card-container {
  position: relative;
  cursor: pointer;

  &:hover {
    .card-bottom {
      position: absolute;
      left: -17px;
      top: 80%;
      transform: scale(0.9);
      border: 2px solid $orange;
      background-color: white;
    }
  }
  .card-bottom {
    padding: 1rem 1.5rem;

    span {
      display: inline-block;
    }

    .price {
      font-weight: bold;
      color: $orange;
      margin-bottom: 0.3rem;
    }

    .title {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .banners {
      display: flex;
      gap: 15px;
      margin-top: 1rem;

      .banner-text {
        margin-left: 5px;
      }
    }
  }
}
</style>
