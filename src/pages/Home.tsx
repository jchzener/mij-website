// src/pages/Home.tsx

import heroImg from "/images/homepage/mij-hero.jpg";
import convoImg from "/images/homepage/mij-conversation.jpg";
import peopleImg from "/images/homepage/mij-people.jpg";

import { useTranslation } from "react-i18next";
import SiteHeader from "../components/SiteHeader";
import Section from "../components/Section";
import PrimaryButton from "../components/PrimaryButton";
import HomePastJamsCollage from "../components/HomePastJamsCollage";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="bg-stone-50 text-stone-900">
      {/* HEADER */}
      <SiteHeader />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-4 whitespace-pre-line">
            {t("home.hero.title")}
          </h1>

          <p className="text-lg text-stone-600 mb-8 md:mr-8 whitespace-pre-line">
            {t("home.hero.subtitle")}
          </p>

          <a href="https://tally.so/r/wogA4V" target="_blank" rel="noreferrer">
            <button className="bg-stone-900 text-white px-7 py-3.5 rounded-xl text-sm hover:bg-stone-800 transition active:translate-y-px w-fit">
              {t("home.hero.cta")}
            </button>
          </a>

          <p className="text-xs font-bold text-stone-500 mt-4">
            {t("home.hero.footer")}
          </p>
        </div>

        <div className="lg:col-span-7">
          <img
            src={heroImg}
            alt={t("home.hero.imageAlt")}
            className="rounded-3xl object-cover w-full max-h-[440px] border border-stone-200"
          />
        </div>
      </section>

      {/* NEXT JAM — PINNED NOTE */}
      <section className="max-w-7xl mx-auto px-6 py-2">
        <div className="relative max-w-5xl mx-auto">
          {/* Pin */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
            <div className="w-3 h-3 rounded-full bg-stone-400 shadow-sm" />
          </div>

          {/* Note */}
          <div
            className="
              bg-stone-100
              border border-stone-200
              rounded-2xl
              px-10 py-14 md:px-16
              shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]
              -rotate-1
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
              {/* LEFT */}
              <div className="md:col-span-7">
                <span className="text-xs uppercase tracking-widest font-bold text-stone-500">
                  {t("home.nextJam.eyebrow")}
                </span>

                <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-6 leading-snug">
                  {t("home.nextJam.title")}
                </h2>

                <p className="text-lg text-stone-600 mb-8 max-w-xl">
                  {t("home.nextJam.context")}
                </p>

                <p className="text-sm text-stone-500 mb-1">
                  {t("home.nextJam.speakerIntro")}
                </p>

                <p className="text-xl font-medium">
                  {t("home.nextJam.speakerName")}
                  <span className="text-stone-500 font-normal">
                    {" "}
                    — {t("home.nextJam.speakerTitle")}
                  </span>
                </p>

                <blockquote className="mt-6 italic text-stone-700 max-w-xl">
                  “{t("home.nextJam.quote")}”
                </blockquote>
              </div>

              {/* RIGHT */}
              <div className="md:col-span-5">
                <div className="bg-white/70 rounded-xl p-8 border border-stone-200">
                  <div className="space-y-4 text-sm text-stone-700">
                    <p>
                      <span className="text-stone-500">
                        {t("home.nextJam.dateLabel")}
                      </span>
                      <br />
                      <strong>{t("home.nextJam.date")}</strong>
                    </p>

                    <p>
                      <span className="text-stone-500">
                        {t("home.nextJam.timeLabel")}
                      </span>
                      <br />
                      <strong>{t("home.nextJam.time")}</strong>
                    </p>

                    <p>
                      <span className="text-stone-500">
                        {t("home.nextJam.locationLabel")}
                      </span>
                      <br />
                      <strong>{t("home.nextJam.location")}</strong>
                    </p>
                  </div>

                  <a
                    href="https://tally.so/r/wogA4V"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      id="join"
                      className="mt-8 w-full bg-stone-900 text-white py-3.5 rounded-xl text-sm hover:bg-stone-800 transition active:translate-y-px"
                    >
                      {t("home.nextJam.cta")}
                    </button>
                  </a>

                  <p className="text-xs text-stone-500 text-center mt-4">
                    {t("home.nextJam.rsvp")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MIJ EXISTS */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-6">
          <h2 className="font-serif text-3xl mb-8">{t("home.why.title")}</h2>

          <p className="text-xl font-medium text-stone-800 mb-8 whitespace-pre-line">
            {t("home.why.thesis")}
          </p>

          <div className="space-y-6 text-stone-600 text-lg">
            <p>{t("home.why.p1")}</p>
            <p>{t("home.why.p2")}</p>
            <p>{t("home.why.p3")}</p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <img
            src={convoImg}
            alt={t("home.convoImageAlt")}
            className="rounded-3xl object-cover w-full max-h-[400px] border border-stone-200"
          />
        </div>
      </section>

      {/* WHAT A JAM FEELS LIKE */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <img
            src={peopleImg}
            alt={t("home.peopleImageAlt")}
            className="rounded-3xl object-cover w-full max-h-[400px] border border-stone-200"
          />
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <h2 className="font-serif text-3xl mb-10">
            {t("home.jamExperience.title")}
          </h2>

          <div className="space-y-7 text-stone-600 text-lg leading-relaxed whitespace-pre-line">
            <p>{t("home.jamExperience.p1")}</p>
            <p>{t("home.jamExperience.p2")}</p>
            <p>{t("home.jamExperience.p3")}</p>
          </div>
        </div>
      </section>

      {/* PAST JAMS */}
      <HomePastJamsCollage />

      {/* INTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
          {["c1", "c2", "c3"].map((key) => (
            <div key={key}>
              <h3 className="font-serif text-3xl mb-6">
                {t(`home.intent.${key}.title`)}
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed whitespace-pre-line">
                {t(`home.intent.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <Section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-stone-600 text-lg font-bold mb-4">
            {t("home.who.description")}
          </p>

          <h2 className="text-3xl font-semibold mb-6">
            {t("home.finalCta.title")}
          </h2>

          <a href="https://tally.so/r/wogA4V" target="_blank" rel="noreferrer">
            <PrimaryButton>{t("home.finalCta.cta")}</PrimaryButton>
          </a>
        </div>
      </Section>
    </main>
  );
}
