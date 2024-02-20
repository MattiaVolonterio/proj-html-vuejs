<script>
import BlogBg from "./BlogBg.vue";
export default {
  components: {
    BlogBg,
  },
};
</script>
<template>
  <div class="blog-main-container">
    <BlogBg />
    <div class="blog-header">
      <div class="title">Articles and Tips</div>
      <div class="subtitle">Latest From The Blog</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.blog-main-container {
  position: relative;

  .blog-header {
    position: absolute;
    left: 50%;
    top: 6rem;
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
}
</style>
