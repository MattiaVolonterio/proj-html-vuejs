import { createApp } from "vue";
import App from "./App.vue";

import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faTwitter,
  faFacebookF,
  faSquareFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCopyright,
  faCalendar,
  faEye,
  faFileLines,
  faUser,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faCircle,
  faBook,
  faCartShopping,
  faCompress,
  faRulerCombined,
  faChevronDown,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faCircle,
  faArrowRight,
  faTwitter,
  faFacebookF,
  faSquareFacebook,
  faInstagram,
  faLinkedin,
  faCopyright,
  faCalendar,
  faEye,
  faFileLines,
  faUser,
  faClock,
  faLocationDot,
  faBook,
  faCartShopping,
  faCompress,
  faRulerCombined,
  faChevronDown,
  faArrowUp
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
