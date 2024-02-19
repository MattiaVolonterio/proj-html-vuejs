<script>
import AppBanner from "./components/AppBanner.vue";
import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppCoachingMain from "./components/artistCoaching/AppCoachingMain.vue";
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
      jumboIcons: [
        "fa-solid fa-ruler-combined",
        "fa-solid fa-compress",
        "fa-solid fa-book",
        "fa-solid fa-cart-shopping",
      ],
      coachingCards: [
        {
          imgUrl: "artist-box-image-01.png",
          title: "Online Coures",
          parag:
            "Online art coaching now offers you a very powerful way to redesign your artist mind.",
        },
        {
          imgUrl: "artist-box-image-02.png",
          title: "One to One",
          parag:
            "Getting the necessary clarity about the current state to help you improve your ability.",
        },
        {
          imgUrl: "artist-box-image-03.png",
          title: "Anywhere",
          parag:
            "Access to valuable and portable program which allow you to setup and live anywhere you want.",
        },
        {
          imgUrl: "artist-box-image-04.png",
          title: "On Time",
          parag:
            "Punctuality is our top priority because it's an essential criteria to assess a program quality.",
        },
      ],
    };
  },
  components: { AppBanner, AppHeader, AppJumbo, AppCoachingMain },
};
</script>

<template>
  <AppBanner />
  <AppHeader :headerLinks="headerLinks" :headerIcons="headerIcons" />
  <AppJumbo :jumboIcons="jumboIcons" />
  <AppCoachingMain :cardsArray="coachingCards" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
