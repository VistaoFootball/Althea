import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import frtranslation from "./frtranslation.json"
import entranslation from "./entranslation.json"

const fallbackLng = ["en"];
const availableLanguages = ["en", "ar", "fr"];

const resources = {

  fr: {
    translation: frtranslation
  },
  en: {
    translation: entranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    lng: "en",
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n;
