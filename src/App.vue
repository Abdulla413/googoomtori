<script setup> 
import { RouterView } from "vue-router";
import { watch, ref } from "vue";
import { useI18n } from "vue-i18n";
import "./assets/main.css";
import "./assets/custom.css";



// Setup i18n
 const { locale } = useI18n();
 console.log(locale.value, 'frist local value')
 const direction = ref(locale.value === 'uyl' ? 'ltr' : 'rtl');
 console.log(locale.value, 'this local value')

// Watch for changes in locale and update direction accordingly
// watch(locale.value, (newLocale) => {
//   const dir = newLocale === 'uyl' ? 'ltr' : 'rtl';
//   document.getElementById('app').setAttribute('dir', dir);
//   document.body.className = dir === 'ltr' ? 'ltr-font' : 'rtl-font';
// });


</script>

<template>
  <RouterView />
</template>

<style>
@import 'tailwindcss/tailwind.css';
</style>
