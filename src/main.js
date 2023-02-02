import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faHatWizard,
  faPenToSquare,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/main.css";
import i18n from "./i18n/index";

library.add(faHatWizard, faBars, faUser, faPenToSquare, faXmark);

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
