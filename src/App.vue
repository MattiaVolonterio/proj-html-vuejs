<script>
import AppBanner from "./components/AppBanner.vue";
import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppCoachingMain from "./components/artistCoaching/AppCoachingMain.vue";
import AppTestimonialsMain from "./components/testimonials/AppTestimonialsMain.vue";
import AppOnlineCourses from "./components/onlineCourse/AppOnlineCourses.vue";
import AppBlogMain from "./components/blog/AppBlogMain.vue";
import AppUpcomingEvents from "./components/upcomingEvents/AppUpcomingEvents.vue";
import AppEmailMain from "./components/email/AppEmailMain.vue";
import AppFooterMain from "./components/footer/AppFooterMain.vue";

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
      onlineCoursesCards: [
        {
          imgUrl: "artist-course-08-480x480.jpg",
          price: "$18.00",
          title: "The Acrylic Painting Academy",
          lessonsNumber: 4,
          sudentsNumber: 50,
        },
        {
          imgUrl: "artist-course-07-480x480.jpg",
          price: "$21.00",
          title: "Drawing and Shading: Complete Course",
          lessonsNumber: 14,
          sudentsNumber: 50,
        },
        {
          imgUrl: "artist-course-06-480x480.jpg",
          price: "$19.00",
          title: "The Color Theory for Digital Artist",
          lessonsNumber: 7,
          sudentsNumber: 50,
        },
        {
          imgUrl: "artist-course-05-480x480.jpg",
          price: "$35.00",
          title: "Ultimate Guide to Digital Sketching for Beginner",
          lessonsNumber: 14,
          sudentsNumber: 50,
        },
        {
          imgUrl: "artist-course-04-480x480.jpg",
          price: "$19.00",
          title: "Portrait Drawing The Smart Way",
          lessonsNumber: 2,
          sudentsNumber: 50,
        },
        {
          imgUrl: "artist-course-03-480x480.jpg",
          price: "$19.00",
          title: "Mastering Watercolor Painting from Beginner",
          lessonsNumber: 9,
          sudentsNumber: 50,
        },
        {
          imgUrl: "artist-course-02-480x480.jpg",
          price: "$25.00",
          title: "The Art & Science of Drawing",
          lessonsNumber: 4,
          sudentsNumber: 50,
        },
        {
          imgUrl: "artist-course-01-480x480.jpg",
          price: "$22.00",
          title: "The Colored Pencil Drawing Course",
          lessonsNumber: 6,
          sudentsNumber: 50,
        },
      ],
      blogCards: [
        {
          imgUrl: "artist-blog-01-480x356.jpg",
          title: "Pocket-Sized Notebooks Hold Miniature Paintings",
          date: "May 15, 2020",
          views: 603,
        },
        {
          imgUrl: "artist-blog-02-500x680.jpg",
          title: "Connection Between Self-Portraits and Identity",
          date: "May 15, 2020",
          views: 397,
        },
        {
          imgUrl: "artist-blog-03-480x356.jpeg",
          title: "Brush Strokes Energize Trees in Paintings",
          date: "May 15, 2020",
          views: 688,
        },
      ],
      eventCards: [
        {
          imgUrl: "artist-event-04-250x300.jpg",
          date: "NOV 22, 2020",
          title: "Storytelling Workshop",
          position: "Texas, US",
        },
        {
          imgUrl: "artist-event-03-250x300.jpg",
          date: "OCT 10, 2020",
          title: "Painting Art Contest 2020",
          position: "New York, US",
        },
        {
          imgUrl: "artist-event-02-250x300.jpg",
          date: "NOV 23, 2020",
          title: "International Art Fair 2020",
          position: "Hamburg, Germany",
        },
        {
          imgUrl: "artist-event-01-250x300.jpg",
          date: "DEC 15, 2020",
          title: "Street Performance: Call for Artist",
          position: "Illinois, US",
        },
      ],
      footerAddressInfo: [
        "382 NE 191st St # 87394 Miami, FL 33179-3899",
        "+1(305)547-9909 (9am -5pm EST, Monday - Friday)",
        "support@maxcoach.com",
      ],
      footerAddressBrand: [
        "fa-brands fa-square-facebook",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin",
      ],
      footerExplore: [
        "Start here",
        "Success story",
        "Blog",
        "Courses",
        "Contact us",
      ],
      footerInformation: [
        "Membership",
        "Purchase guide",
        "Privacy policy",
        "Terms of services",
      ],
      footerImg: [
        "artist-blog-03-480x356.jpeg",
        "artist-event-03-250x300.jpg",
        "artist-event-02-250x300.jpg",
      ],
    };
  },
  components: {
    AppBanner,
    AppHeader,
    AppJumbo,
    AppCoachingMain,
    AppTestimonialsMain,
    AppOnlineCourses,
    AppBlogMain,
    AppUpcomingEvents,
    AppEmailMain,
    AppFooterMain,
  },
};
</script>

<template>
  <AppBanner />
  <AppHeader :headerLinks="headerLinks" :headerIcons="headerIcons" />
  <AppJumbo :jumboIcons="jumboIcons" />
  <AppCoachingMain :cardsArray="coachingCards" />
  <AppTestimonialsMain :testimonialCards="testimonialCards" />
  <AppOnlineCourses :coursesArray="onlineCoursesCards" />
  <AppBlogMain :cardsArray="blogCards" />
  <AppUpcomingEvents :cardsArray="eventCards" />
  <AppEmailMain />
  <AppFooterMain
    :footerAddressInfo="footerAddressInfo"
    :footerAddressBrand="footerAddressBrand"
    :footerExplore="footerExplore"
    :footerInformation="footerInformation"
    :instaImg="footerImg"
  />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
