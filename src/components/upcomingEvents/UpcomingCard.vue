<script>
export default {
  props: { card: Object, index: Number },
  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="card-container" :class="index > 1 ? 'right-card' : ''">
    <div class="card-image">
      <img :src="getImgPath(card.imgUrl)" :alt="card.title" />
    </div>
    <div class="card-description">
      <div class="date">{{ card.date }}</div>
      <div class="title">{{ card.title }}</div>
      <div class="position">
        <font-awesome-icon icon="fa-solid fa-location-dot" />
        <span>
          {{ card.position }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.card-container {
  display: flex;
  gap: 50px;
  .card-image {
    img {
      height: 250px;
    }
  }

  .card-description {
    align-self: center;

    .date {
      color: $headerList;
      font-size: 0.85rem;
      font-weight: bold;
    }

    .title {
      font-weight: bold;
      font-size: 1.3rem;
      margin: 1rem 0;
    }

    .position {
      color: $headerList;
      span {
        display: inline-block;
        margin-left: 10px;
        font-size: 0.75rem;
      }
    }
  }
}

.card-container.right-card {
  .card-image {
    order: 1;
  }

  .card-description {
    text-align: end;
  }
}
</style>
