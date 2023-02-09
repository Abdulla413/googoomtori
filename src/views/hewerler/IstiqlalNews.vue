<script setup>
import axios from "axios";
import * as cheerio from "cheerio";
import NewsCard from "@/components/hewerler/NewsCard.vue";
import WelcomeNews from "@/components/hewerler/WelcomeNews.vue";
import FooterCom from "@/components/homepage/FooterCom.vue";
import { onMounted, ref } from "vue";
import NewsHeader from "../../components/hewerler/NewsHeader.vue";
import SpinnerCom from "../../components/SpinnerCom.vue";

const latestPosts = ref([]);
const isLoading = ref(false);

onMounted(() => {
  let url = "https://googoomtori.vercel.app/https://www.istiqlalhaber.com/";
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

  isLoading.value = false;
});
</script>

<template>
  <div>
    <NewsHeader />
    <WelcomeNews :hewerQanili="'ئىستىقلال خەۋەر'" class="pt-[7rem]"/>
    <SpinnerCom v-show="isLoading" class="w-20 text-center" />
    <div class="flex">
      <div class="flex flex-col items-center justify-center w-2/3">
        <div
          class="grid w-full grid-cols-1 justify-items-center gap-5 p-2 md:grid-cols-3 lg:grid-cols-3"
        >
          <NewsCard
            v-for="(post, index) in latestPosts.slice(0, 24)"
            :key="index"
            :post="post"
            :qanal="'ئىستىقلال خەۋەرلىرى'"
          />
        </div>
      </div>
      <div class=""></div>
    </div>
    <footer-com />
  </div>
</template>
