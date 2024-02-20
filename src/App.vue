<script>
import AppBanner from "./components/AppBanner.vue";
import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppCoachingMain from "./components/artistCoaching/AppCoachingMain.vue";
import AppTestimonialsMain from "./components/testimonials/AppTestimonialsMain.vue";

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
      testimonialCards: [
        {
          title: "High level of efficiency and scientific teaching methods",
          paragraph:
            "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
          imgUrl: "artist-testimonial-avatar-04.jpg",
          name: "Mina Hollace",
          spec: "/ Frelancer",
        },
        {
          title:
            "Professional team of specialist and passionate mentors at reach",
          paragraph:
            "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
          imgUrl: "artist-testimonial-avatar-01.jpg",
          name: "Madley pondor",
          spec: "/ IT Specialist",
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus.",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, provident saepe accusantium nostrum est laborum, repellat necessitatibus veniam possimus ab, ex mollitia cupiditate! Facilis, aspernatur?",
          imgUrl: "artist-testimonial-avatar-03.jpg",
          name: "Pinco Pallo",
          spec: "/ IT Specialist",
        },
        {
          title: "It's a choice of quality for people with special needs",
          paragraph:
            "I'm a very strict person so i require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
          imgUrl: "artist-testimonial-avatar-02.jpg",
          name: "Florence Themes",
          spec: "/ Multimedia Admin",
        },
      ],
    };
  },
  components: {
    AppBanner,
    AppHeader,
    AppJumbo,
    AppCoachingMain,
    AppTestimonialsMain,
  },
};
</script>

<template>
  <AppBanner />
  <AppHeader :headerLinks="headerLinks" :headerIcons="headerIcons" />
  <AppJumbo :jumboIcons="jumboIcons" />
  <AppCoachingMain :cardsArray="coachingCards" />
  <AppTestimonialsMain :testimonialCards="testimonialCards" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
