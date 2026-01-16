// src/pages/PastJamsPage.tsx

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import SiteHeader from "../components/SiteHeader";
import Section from "../components/Section";
import PastJamsGrid from "../components/PastJamsGrid";
import PrimaryButton from "../components/PrimaryButton";

export default function PastJamsPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-stone-50 text-stone-900 min-h-screen">
      <SiteHeader backTo="/" backLabel={t("pastJams.header.backToHome")} />

      {/* Title */}
      <Section className="pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-3xl md:text-4xl">
            {t("pastJams.title")}
          </h1>
          <p className="text-stone-600 mt-6 max-w-md">
            {t("pastJams.subtitle")}
          </p>
        </div>
      </Section>

      {/* Archive */}
      <PastJamsGrid />

      {/* Back CTA */}
      <Section className="py-20 text-center">
        <Link to="/">
          <PrimaryButton>{t("pastJams.backToUpcoming")}</PrimaryButton>
        </Link>
      </Section>
    </main>
  );
}
