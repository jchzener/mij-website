// src/components/LanguageToggle.tsx

import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const isEn = i18n.language.startsWith("en");
  const isFr = i18n.language.startsWith("fr");

  return (
    <div className="flex items-center gap-1 text-xs tracking-widest text-stone-400">
      <button
        onClick={() => changeLanguage("en")}
        className={`transition hover:text-stone-900 ${
          isEn ? "text-stone-900" : ""
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>

      <span className="opacity-40">/</span>

      <button
        onClick={() => changeLanguage("fr")}
        className={`transition hover:text-stone-900 ${
          isFr ? "text-stone-900" : ""
        }`}
        aria-label="Basculer en français"
      >
        FR
      </button>
    </div>
  );
}
