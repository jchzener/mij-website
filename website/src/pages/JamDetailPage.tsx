// src/pages/JamDetailPage.tsx

import { useParams, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { pastJams } from "../data/pastJams";

import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import PaperCard from "../components/PaperCard";

export default function JamDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const forcedLang = location.state?.lang as "en" | "fr" | undefined;
  const lang = forcedLang ?? (i18n.language.startsWith("fr") ? "fr" : "en");

  const jam = pastJams.find((j) => j.id === id);
  const capitalizeFirst = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  if (!jam) {
    return (
      <main className="bg-stone-50 min-h-screen">
        <section className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-3xl mb-4">
            {t("jamDetail.notFound.title")}
          </h1>
          <Link to="/jams" className="text-sm text-stone-500 hover:underline">
            ← {t("jamDetail.notFound.back")}
          </Link>
        </section>
      </main>
    );
  }

  const [month, year] = jam.displayDate[lang].split(" ");
  const formattedMonth = capitalizeFirst(month);
  const gallery = jam.gallery ?? [];

  return (
    <main className="bg-stone-50 text-stone-900 min-h-screen">
      {/* HEADER */}
      <header className="max-w-3xl mx-auto px-6 pt-10">
        <Link
          to="/jams"
          className="text-xs tracking-widest uppercase text-stone-700 font-bold hover:text-stone-900 transition"
        >
          ← {t("jamDetail.header.backToAll")}
        </Link>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-24">
        {/* SPEAKER INTRO */}
        <header className="mb-24 flex flex-col md:flex-row gap-10">
          <img
            src={jam.speaker.image}
            alt={jam.speaker.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/images/speakers/default.jpg";
            }}
            className="w-36 h-36 rounded-2xl object-cover border border-stone-200 shadow-sm"
          />

          <div>
            <h1 className="font-serif text-3xl md:text-4xl">
              {jam.speaker.name}
            </h1>

            <p className="text-stone-600 mt-2">{jam.speaker.title[lang]}</p>

            <p className="mt-4 text-sm text-stone-500">
              {jam.location[lang]} · {formattedMonth} · {year}
            </p>

            <span className="inline-block mt-5 px-3 py-1 text-xs rounded-full bg-stone-200 text-stone-700">
              {jam.theme[lang]}
            </span>
          </div>
        </header>

        {/* KEY QUESTION + CONTEXT */}
        <Section className="pb-0">
          <p className="text-xl md:text-2xl font-medium text-stone-800 mb-10">
            {jam.keyQuestion[lang]}
          </p>

          <p className="text-lg text-stone-600 leading-relaxed mb-10">
            {jam.context[lang]}
          </p>

          {jam.descriptionLong[lang].split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-lg text-stone-700 leading-relaxed mb-8">
              {paragraph}
            </p>
          ))}
        </Section>

        {/* QUOTE — EDITORIAL PAUSE */}
        <Section className="pt-8">
          <PaperCard rotate={-1}>
            <blockquote className="font-serif text-xl md:text-2xl italic text-stone-700">
              “{jam.quote[lang]}”
            </blockquote>
          </PaperCard>
        </Section>

        {/* TAKEAWAYS */}
        <Section>
          <SectionTitle>{t("jamDetail.takeaways")}</SectionTitle>

          <ul className="grid md:grid-cols-3 gap-6">
            {jam.takeaways[lang].map((item, i) => (
              <li
                key={i}
                className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm"
              >
                <p className="text-stone-700 italic text-sm leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* RESOURCES */}
        {jam.resources && jam.resources.length > 0 && (
          <Section>
            <SectionTitle>{t("jamDetail.resources")}</SectionTitle>

            <div className="rounded-2xl bg-white border border-stone-200 p-6 space-y-5">
              {jam.resources.map((res, idx) => (
                <div key={idx} className="flex gap-4 text-stone-600">
                  <span className="mt-1">
                    {res.type === "book" && "📘"}
                    {res.type === "talk" && "🎧"}
                    {res.type === "article" && "📄"}
                    {res.type === "course" && "🎓"}
                  </span>

                  <div>
                    <p>{res.label}</p>
                    {res.link && (
                      <a
                        href={res.link}
                        className="text-sm text-stone-500 hover:text-stone-900"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* GALLERY — VISUAL BREATH */}
        {gallery.length > 0 && (
          <Section>
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                const randomIndex = Math.floor(Math.random() * 7) + 1;
                target.src = `/images/jams/default_${randomIndex}.jpg`;
              }}
              className="rounded-2xl w-full object-cover border border-stone-200 shadow-sm"
            />
          </Section>
        )}

        {/* JOIN NEXT JAM — CLOSING NOTE */}
        <Section className="pt-16">
          <PaperCard rotate={1}>
            <h3 className="font-serif text-2xl mb-4">
              {t("jamDetail.joinNext.cta")}
            </h3>

            <p className="text-stone-600 mb-6">
              {t("jamDetail.joinNext.note")}
            </p>

            <a
              href="https://tally.so/r/wogA4V"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-stone-900 text-white rounded-xl text-sm
                         hover:bg-stone-800 transition active:translate-y-px"
            >
              {t("jamDetail.joinNext.button")} →
            </a>
          </PaperCard>
        </Section>

        {/* BACK */}
        <footer className="mt-24 text-right">
          <Link to="/jams" className="text-sm text-stone-500 hover:underline">
            ← {t("jamDetail.backToAll")}
          </Link>
        </footer>
      </article>
    </main>
  );
}
