<script>
import AppBanner from "./components/AppBanner.vue";
import AppHeader from "./components/AppHeader.vue";
export default {
  data() {
    return {
      headerLinks: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
      headerIcons: [
        "fa-brands fa-twitter",
        "fa-brands fa-facebook-f",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin",
      ],
    };
  },
  components: { AppBanner, AppHeader },
};
</script>

<template>
  <AppBanner />
  <AppHeader :headerLinks="headerLinks" :headerIcons="headerIcons" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
