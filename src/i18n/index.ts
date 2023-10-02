import en from "./translations/en";
import es from "./translations/es";
import fr from "./translations/fr";
import it from "./translations/it";

export namespace I18n {
  export const DICTIONARIES = Object.freeze({
    en,
    fr,
    it,
    es,
  });

  export type Dictionary = (typeof DICTIONARIES)["en"];
  export type WordKey = keyof (typeof DICTIONARIES)["en"];
  export type LanguageCode = keyof typeof DICTIONARIES;

  export const getDictionary = (lang: LanguageCode): Dictionary => {
    return DICTIONARIES[lang] ?? DICTIONARIES["en"];
  };

  export const langs = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
    { value: "it", label: "Italian" },
  ];

  export const getText = (
    key: WordKey,
    lang: LanguageCode = "en",
    defaultValue = ""
  ): string => {
    return (
      DICTIONARIES?.[lang]?.[key] ||
      defaultValue ||
      DICTIONARIES["en"][key] ||
      key
    );
  };
}
