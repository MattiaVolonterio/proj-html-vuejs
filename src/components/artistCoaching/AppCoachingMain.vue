<script>
import CardCoaching from "./CardCoaching.vue";
export default {
  data() {
    return {};
  },
  components: {
    CardCoaching,
  },
  props: { cardsArray: Array },
  methods: {},
};
</script>
<template>
  <div class="container">
    <div class="row-modified">
      <div v-for="card in cardsArray" class="col-modified">
        <CardCoaching :card="card" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
.row-modified {
  display: flex;
  justify-content: center;
  gap: 20px;

  .col-modified {
    width: (100% / 6);
  }
}
</style>
