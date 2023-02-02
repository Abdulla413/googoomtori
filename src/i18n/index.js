import { createI18n } from "vue-i18n";

// import messages from "./locales/messages";
import uy from "./locales/uy.json";
import uyl from "./locales/uyl.json";

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: [
    import.meta.env.VITE_FALLBACK_LOCALE,
    import.meta.env.VITE_FALLBACK_LOCALE_2,
  ],
  legacy: false,
  globalInjection: true,
  messages: {
    uy,
    uyl,
  },
});

export default i18n;
