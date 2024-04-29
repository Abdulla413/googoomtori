<script setup>
import axios from "axios";
import * as cheerio from "cheerio";
import NewsCard from "@/components/hewerler/NewsCard.vue";
import NewsHeader from "@/components/hewerler/NewsHeader.vue";
import WelcomeNews from "@/components/hewerler/WelcomeNews.vue";
import { onMounted, ref } from "vue";

const latestPosts = ref([]);

onMounted(() => {
  //   function getWebsiteData() {
  let url = "https://uyghur.uyghurtimes.com/";
  let dataArray = [];
  axios({
    method: "get",
    url: url,
  }).then((response) => {
    const html = response.data;
    console.log(html);
    let $ = cheerio.load(html);
    $("div.m-b-30").each(function () {
      const title = $(this).find("a.f1-s-5").text();
      const image = $(this).find("img").attr("src");
      const url = $(this).find("a.wrap-pic-w").attr("href");
      const date = $(this).find("span.f1-s-3").html();

      // pushdata in array
      dataArray.push({
        url: `https://iuyghur.com${url}`,
        image: `https://iuyghur.com${image}`,
        title: title,
        date: new Date(date),
      });
    });
    const newDataArray = dataArray.sort((a, b) => {
      return b.date - a.date;
    });

    const newPosts = newDataArray.map((post) => {
      if (post) {
        return { ...post, date: post.date.toString().slice(4, 15) };
      }
      return post;
    });
    return (latestPosts.value = newPosts);
  });
});
</script>

<template>
  <div>
    <NewsHeader />
    <WelcomeNews :hewerQanili="'ئۇيغۇر ئاگنىتلىقى خەۋەر'" class="pt-[6rem] "/>
    <div class="flex flex-col mt-2 gap-5">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
        <NewsCard
          v-for="(post, index) in latestPosts.slice(0, 24)"
          :key="index"
          :post="post"
          :qanal="'ئۇيغۇر ئاگنىتلىقى'"
        />
      </div>
    </div>
  </div>
</template>
