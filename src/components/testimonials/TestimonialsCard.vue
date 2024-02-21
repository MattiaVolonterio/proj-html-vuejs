<script>
export default {
  props: { card: Object, currentIndex: Number, index: Number },
  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },
  },
  emits: ["selected-card"],
};
</script>

<template>
  <div
    @click="$emit('selected-card', index)"
    class="card-container"
    :class="currentIndex == index ? 'active-card' : ''"
  >
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
  width: calc(100% / 4);
  height: 300px;
  background-color: white;
  padding: 1.5rem;
  border-radius: 15px;
  @include flex-column-start;
  filter: opacity(0.5);
  cursor: pointer;

  &.active-card {
    filter: opacity(1);
  }

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
