import i18n from "@/i18n";
const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },
  async switchLanguage(newLocale) {
    Trans.currentLocale = newLocale;
    if (newLocale === "uyl" || "en") {
        document.getElementById("app").setAttribute("dir", "ltr");
      }
  },
};

export default Trans;
