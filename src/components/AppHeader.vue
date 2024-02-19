<script>
export default {
  props: { headerLinks: Array, headerIcons: Array },
  methods: {
    getLogoPath() {
      return new URL("../assets/img/dark-logo.png", import.meta.url).href;
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <!-- LOGO -->
      <img :src="getLogoPath()" alt="Logo" class="logoImg" />
      <!-- LINK LIST -->
      <div class="link-list">
        <ul>
          <li v-for="link in headerLinks">
            {{ link }}
            <font-awesome-icon icon="fa-solid fa-chevron-down" size="2xs" />
          </li>
        </ul>
      </div>
      <!-- ICONS -->
      <div class="icon-list">
        <ul>
          <li v-for="icon in headerIcons">
            <font-awesome-icon :icon="icon" />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.container {
  @include space-between;
  color: $headerList;
  height: $headerHeight;

  .logoImg {
    width: 130px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      cursor: pointer;
    }
  }

  .link-list {
    ul {
      font-size: 0.8rem;
      font-weight: bold;

      li {
        margin-left: 2rem;
      }
    }
  }

  .icon-list {
    ul {
      li {
        margin-left: 1rem;
      }
    }
  }
}
</style>
