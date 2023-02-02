<script>
import axios from "axios";
import * as cheerio from "cheerio";
import NewsCard from "@/components/hewerler/NewsCard.vue";
import HeaderVue from "@/components/hewerler/HeaderVue.vue";
export default {
  components: { NewsCard, HeaderVue },
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

console.log(axios);
</script>

<template>
  <div>
    <HeaderVue />
    <h2 class="font-Ukijtitle text-center md:text-[3rem] lg:text-[3rem]">
      گۇگۇم خەۋەر قانىلىغان خۇش كەلدىڭىز!
    </h2>
    <div
      class="flex hidden gap-[7rem] items-center justify-center font-alkatip_t m-3 py-2 bg-blue-700 text-xl text-white md:w-[70%] lg:w-[70%] md:block lg:block"
    >
      <router-link
        to="/news"
        class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >ئىستىقلال خەۋەرلىرى
      </router-link>
      <router-link
        to="/turkistantimes"
        class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >تۈركىستان تايمىس خەۋەرلىرى
      </router-link>
      <router-link
        to="/iuyghur"
        class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >ئۇيغۇر ئاگنىتلىقى خەۋەرلىرى
      </router-link>
    </div>
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
