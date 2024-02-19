<script>
export default {
  data() {
    return {};
  },
  props: { card: Object },
  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <div class="card-coach">
    <img :src="getImgPath(card.imgUrl)" alt="" />
    <span>{{ card.title }}</span>
    <p>{{ card.parag }}</p>
  </div>
</template>
<style lang="scss" scoped>
.card-coach {
  span {
    display: block;
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
}
</style>
