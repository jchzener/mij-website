// src/components/JamCard.tsx

import { Jam } from "../data/pastJams";
import { useTranslation } from "react-i18next";

interface JamCardProps {
  jam: Jam;
}

export default function JamCard({ jam }: JamCardProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("fr") ? "fr" : "en";

  const hash = [...jam.id].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const tilt = hash % 2 === 0 ? "rotate(1.2deg)" : "rotate(-1.2deg)";

  return (
    <article
      style={{ transform: tilt }}
      className="
        group relative h-full
        bg-white rounded-2xl border border-stone-200
        p-6
        transition-all duration-200 ease-out
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Paper corner */}
      <div className="absolute top-0 right-0 w-6 h-6 bg-stone-900/5 rotate-45 translate-x-2 -translate-y-2" />

      {/* Date */}
      <div className="text-xs uppercase tracking-widest text-stone-400">
        {jam.displayDate[lang]}
      </div>

      {/* Theme */}
      <h3 className="mt-3 font-serif text-lg leading-snug">
        {jam.theme[lang]}
      </h3>

      {/* Speaker */}
      <p className="mt-2 text-sm text-stone-600">
        {jam.speaker.name} — {jam.speaker.title[lang]}
      </p>

      {/* Hover reveal */}
      <div
        className="
          mt-4 text-sm text-stone-600
          max-h-0 overflow-hidden opacity-0
          transition-all duration-300
          group-hover:max-h-40
          group-hover:opacity-100
        "
      >
        {jam.description[lang]}
      </div>

      {/* Read session */}
      <span
        className="
          absolute right-6 top-6
          text-xs text-green-600
          opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
        "
      >
        Read session ↗
      </span>
    </article>
  );
}
