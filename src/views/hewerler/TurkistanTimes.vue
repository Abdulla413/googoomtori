<script>
import axios from "axios";
import * as cheerio from "cheerio";
import NewsCard from "@/components/hewerler/NewsCard.vue";
import NewsHeader from "@/components/hewerler/NewsHeader.vue";
import WelcomeNews from "@/components/hewerler/WelcomeNews.vue";
export default {
  components: { NewsCard, NewsHeader, WelcomeNews },
  name: "TurkistanTimes",
  data() {
    return {
      latestPosts: [],
    };
  },
  methods: {
    getWebsiteData() {
      const self = this;
      let url = "https://turkistantimes.com/ug/category-96.html";
      let dataArray = [];
      axios({
        method: "get",
        url: url,
      }).then(function (response) {
        const html = response.data;
        console.log(html);
        let $ = cheerio.load(html);
        $("div.home-item-list").each(function () {
          const title = $(this).find("div.home-item-title").text();
          const image = $(this).find("img").attr("src");
          const url = $(this).find("a").attr("href");
          const date = $(this).find("div.post-date").html();

          // putdata in array
          dataArray.push({
            url: url,
            image: image,
            title: title,
            date: date,
          });
        });
        self.latestPosts = dataArray;
      });
    },
  },

  created() {
    this.getWebsiteData();
  },
};
</script>

<template>
  <div>
    <NewsHeader />
    <WelcomeNews :hewerQanili="'تۈركىستان تايمىس'" class="pt-[7rem]" />
    <div
      class="grid grid-cols-1 lg:w-[70%] mr-3 md:grid-cols-3 lg:grid-cols-3 gap-2"
    >
      <NewsCard
        v-for="(post, index) in latestPosts.slice(0, 24)"
        :key="index"
        :post="post"
        :qanal="'تۈركىستان تايمىس'"
      />
    </div>
  </div>
</template>
