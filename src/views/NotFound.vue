<script setup></script>
<template>
  <div
    class="font-alkatip_t flex flex-col justify-center items-center min-h-screen"
  >
    <h2 class="text-5xl font-alkatip_tt text-red-600 py-20">
      {{ $t("notFoundPage.notFound") }}
    </h2>
    <h3 class="text-2xl font-bold text-blue-800">
      {{ $t("notFoundPage.viewOther") }}
    </h3>
    <div class="flex gap-3 mt-5">
      <router-link
        to="/"
        class="bg-blue-500 text-white px-10 py-3 hover:text-yellow-200 rounded-lg"
        >{{ $t("googoom") }}</router-link
      >
      <router-link
        to="/googoomnews"
        class="bg-blue-500 text-white px-10 py-3 hover:text-yellow-200 rounded-lg"
      >
        {{ $t("newsAgency.googoomnews") }}
      </router-link>
      <router-link
        to="/arishpedia"
        class="bg-blue-500 text-white px-10 py-3 hover:text-yellow-200 rounded-lg"
      >
        {{ $t("pageHeader.arishPedia") }}
      </router-link>
      <router-link
        to="/termiler"
        class="bg-blue-500 text-white px-10 py-3 hover:text-yellow-200 rounded-lg"
      >
        {{ $t("pageHeader.termiler") }}
      </router-link>
    </div>
  </div>
</template>

<style></style>
