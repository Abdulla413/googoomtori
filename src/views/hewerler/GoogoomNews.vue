<script>
import WelcomeNews from "../../components/hewerler/WelcomeNews.vue";
import FooterCom from "@/components/homepage/FooterCom.vue";
import NewsHeader from "@/components/hewerler/NewsHeader.vue";
export default {
  components: {  WelcomeNews, FooterCom, NewsHeader },
};
</script>

<template>
  <div class="">
    <NewsHeader />
    <WelcomeNews :hewerQanili="'گۇگۇم خەۋەر'" class="pt-[7rem]"/>

    <h3 class="">گۇگۇم خەۋەرلىرى</h3>
    <div class="grid gap-3 grid-cols-1 justify-items-center lg:grid-cols-3">
      <div class="py-10">
        <div class="rounded overflow-hidden shadow-lg max-w-sm">
          <img
            src="https://iuyghur.com/Data/e73128b1-19b4-4423-b00d-2ee9e1951f4220230130021432.webp"
            alt="googoomnews"
            class="w-full"
          />

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              بۈگۈن شەرقىي تۈركىستان ياشلار قۇرۇلتىيىنىڭ يېغىنى ئچىلدى, يىغىنغا
              دۇنيانىڭ نۇرغۇن جايلىرىدىن قېرىنداشلار قاتناشتى.
            </div>
          </div>
        </div>
      </div>
      <div class="py-10">
        <div class="rounded overflow-hidden shadow-lg max-w-sm">
          <img
            src="https://iuyghur.com/Data/e73128b1-19b4-4423-b00d-2ee9e1951f4220230130021432.webp"
            alt="googoomnews"
            class="w-ful"
          />

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              بۈگۈن شەرقىي تۈركىستان ياشلار قۇرۇلتىيىنىڭ يېغىنى ئچىلدى, يىغىنغا
              دۇنيانىڭ نۇرغۇن جايلىرىدىن قېرىنداشلار قاتناشتى.
            </div>
          </div>
        </div>
      </div>
      <div class="py-10">
        <div class="rounded overflow-hidden shadow-lg max-w-sm">
          <img
            src="https://iuyghur.com/Data/e73128b1-19b4-4423-b00d-2ee9e1951f4220230130021432.webp"
            alt="googoomnews"
            class="w-ful"
          />

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              بۈگۈن شەرقىي تۈركىستان ياشلار قۇرۇلتىيىنىڭ يېغىنى ئچىلدى, يىغىنغا
              دۇنيانىڭ نۇرغۇن جايلىرىدىن قېرىنداشلار قاتناشتى, بۈگۈن شەرقىي
              تۈركىستان ياشلار قۇرۇلتىيىنىڭ يېغىنى ئچىلدى, يىغىنغا دۇنيانىڭ
              نۇرغۇن جايلىرىدىن قېرىنداشلار قاتناشتى.
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-com />
  </div>
</template>

<style></style>
