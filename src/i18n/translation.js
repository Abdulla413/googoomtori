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
    document.querySelector("html").setAttribute("lang", newLocale);
    // eslint-disable-next-line no-constant-condition
    if (newLocale === "uyl") {
      document.getElementById("app").setAttribute("dir", "auto");
    }
  },
};

export default Trans;
