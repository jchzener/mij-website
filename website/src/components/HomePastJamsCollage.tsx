// src/components/HomePastJamsCollage.tsx

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { pastJams } from "../data/pastJams";

export default function HomePastJamsCollage() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language.startsWith("fr") ? "fr" : "en";

  const pickedJams = useMemo(() => {
    return [...pastJams].sort(() => 0.5 - Math.random()).slice(0, 3);
  }, []);

  const getTilt = (id: string) =>
    ["0", "2", "4", "6", "8"].some((d) => id.endsWith(d))
      ? "1.25deg"
      : "-1.2deg";

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="font-serif text-3xl mb-10">{t("home.past.title")}</h2>

      <p className="text-stone-600 text-lg mb-12 max-w-md">
        {t("home.past.subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pickedJams.map((jam) => (
          <Link
            key={jam.id}
            to={`/jams/${jam.id}`}
            className="
            group relative h-full bg-white rounded-2xl border border-stone-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl
            "
            style={{ transform: `rotate(${getTilt(jam.id)})` }}
          >
            <div className="p-6">
              <h3 className="font-serif text-lg text-stone-900">
                {jam.speaker.name}
              </h3>

              <p className="text-sm text-stone-600">
                {jam.speaker.title[lang]}
              </p>

              <p className="text-xs text-stone-500 mt-1 mb-4">
                {jam.displayDate[lang]}
              </p>

              <blockquote className="text-sm italic text-stone-700 leading-relaxed line-clamp-2 mb-4">
                “{jam.quote[lang]}”
              </blockquote>

              <span className="inline-block px-2 py-1 text-xs bg-stone-100 text-stone-700 rounded-full">
                {jam.theme[lang]}
              </span>
            </div>

            {/* folded corner */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-stone-900/5 rotate-45 translate-x-2 -translate-y-2" />
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/jams"
          className="text-sm text-stone-500 hover:text-stone-900 underline transition"
        >
          {t("home.past.viewAll")}
        </Link>
      </div>
    </section>
  );
}
