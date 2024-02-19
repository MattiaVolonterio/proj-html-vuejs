<script>
import AppBanner from "./components/AppBanner.vue";
import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
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
  components: { AppBanner, AppHeader, AppJumbo },
};
</script>

<template>
  <AppBanner />
  <AppHeader :headerLinks="headerLinks" :headerIcons="headerIcons" />
  <AppJumbo />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
