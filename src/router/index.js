import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ArishPedia from '@/views/arishpedia/ArishPedia.vue'
import GoogoomNews from "@/views/hewerler/GoogoomNews.vue";
import IstiqlalNews from "@/views/hewerler/IstiqlalNews.vue";
import IuyghurNews from "@/views/hewerler/IuyghurNews.vue";
import TurkistanTimes from "@/views/hewerler/TurkistanTimes.vue";
import NotFound from "@/views/NotFound.vue";
import TermilerPage from "@/views/termiler/TermilerPage.vue"
import NewStory from "@/views/termiler/NewStory.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },

    {
      path: "/arishpedia",
      name: "ArishPedia",
      component: ArishPedia,
    },

    {
      path: "/termilerpage",
      name: "TermilerPage",
      component: TermilerPage,
    },

    {
      path: "/new-story",
      name:"NewStory",
      component:NewStory

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
    {
      path: "/:notfound(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
