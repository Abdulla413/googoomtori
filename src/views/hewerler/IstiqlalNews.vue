<script setup>
import axios from "axios";
import * as cheerio from "cheerio";
import NewsCard from "@/components/hewerler/NewsCard.vue";
import HeaderVue from "@/components/hewerler/HeaderVue.vue";
import WelcomeNews from "@/components/hewerler/WelcomeNews.vue";
import FooterCom from "@/components/FooterCom.vue";
import AgentsLink from "@/components/hewerler/AgentsLink.vue";
import { onMounted, ref } from "vue";
import SpinnerCom from "../../components/SpinnerCom.vue"

const latestPosts = ref([]);
const isLoading = ref(false);

onMounted(() => {
  
  let url = "https://www.istiqlalhaber.com/";
  let dataArray = [];
  axios({
    method: "get",
    url: url,
  }).then(function (response) {
    const html = response.data;
    let $ = cheerio.load(html);
    $("article.kutu").each(function () {
      const url = $(this).find("a").attr("href");
      const image = $(this).find("img").attr("src");
      const title = $(this).find("div.baslik").html();
      // putdata in array
      dataArray.push({
        url: `https://www.istiqlalhaber.com/${url}`,
        image: `https://www.istiqlalhaber.com/${image}`,
        title: title,
      });
    });
    return (latestPosts.value = dataArray);
  });

  isLoading.value=false;


});
</script>

<template>
  <div>
    <HeaderVue />
    <welcome-news />
    <SpinnerCom v-show="isLoading" class="w-20 text-center"/>
    <div class="flex">
      <div class="flex flex-col items-center justify-center w-4/5">
        <div
          class="flex hidden w-full gap-[3rem] items-center justify-center font-alkatip_t m-3 py-2 bg-blue-700 text-xl text-white md:flex"
        >
        
          <AgentsLink :message="'گۇگۇم خەۋەرلرى'" :direction="'/googoomnews'" />
          <AgentsLink
            :message="'ئىستىقلال خەۋەرلرى'"
            :direction="'/istiqlalnews'"
          />

          <AgentsLink
            :message="'تۈركىستان تايمىس'"
            :direction="'/turkistantimes'"
          />
          <AgentsLink
            :message="'ئۇيغۇر ئاگنىتلىقى'"
            :direction="'/iuyghurnews'"
          />
        </div>
        <div
          class="grid w-full grid-cols-1 justify-items-center gap-2 p-2 lg:grid-cols-4 md:grid-cols-3 lg:grid-cols-3"
        >
          <NewsCard
            v-for="(post, index) in latestPosts.slice(0, 24)"
            :key="index"
            :post="post"
            :qanal="'ئىستىقلال خەۋەرلىرى'"
          />
        </div>
      </div>
      <div class="w-1/5"></div>
    </div>
    <footer-com />
  </div>
</template>
