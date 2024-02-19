<script>
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
  components: {
    AppHeader,
  },
};
</script>

<template>
  <h1>Progetto</h1>
  <AppHeader :headerLinks="headerLinks" :headerIcons="headerIcons" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
