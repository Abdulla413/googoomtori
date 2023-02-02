import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import GoogoomNews from "@/views/hewerler/GoogoomNews.vue";
import IstiqlalNews from "@/views/hewerler/IstiqlalNews.vue";
import IuyghurNews from "@/views/hewerler/IuyghurNews.vue";
import TurkistanTimes from "@/views/hewerler/TurkistanTimes.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/googoomnews",
      name: "googoomnews",
      component: GoogoomNews,
    },
    {
      path: "/istiqlalnews",
      name: "IstiqlalNews",
      component: IstiqlalNews,
    },
    {
      path: "/turkistantimes",
      name: "TurkistanTimes",
      component: TurkistanTimes,
    },
    {
      path: "/iuyghurnews",
      name: "IuyghurNews",
      component: IuyghurNews,
    },
  ],
});

export default router;
