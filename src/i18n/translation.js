import i18n from "@/i18n";

const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },

  async switchLanguage(newLocale) {
    this.currentLocale = newLocale;
    const direction = newLocale === "uyl" ? "ltr" : "rtl";
    document.getElementById("app").setAttribute("dir", direction);
    document.body.className = direction === "ltr" ? "ltr-font" : "rtl-font";
  },
};

export default Trans;