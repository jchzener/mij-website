// src/components/SiteHeader.tsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

type Props = {
  backTo?: string;
  backLabel?: string;
};

export default function SiteHeader({ backTo, backLabel }: Props) {
  const { t } = useTranslation();

  return (
    <header className="max-w-7xl mx-auto px-6 pt-10 flex items-center justify-between">
      {backTo ? (
        <Link
          to={backTo}
          className="text-xs tracking-widest uppercase text-stone-700 font-bold hover:text-stone-900 transition"
        >
          ← {backLabel}
        </Link>
      ) : (
        <span className="text-xs tracking-widest uppercase text-stone-700 font-bold">
          Montreal Idea Jams
        </span>
      )}

      <nav className="flex items-center gap-6 text-sm text-stone-600">
        <a
          href="https://tally.so/r/wogA4V"
          target="_blank"
          className="hover:text-stone-900 transition"
        >
          {t("nav.join")}
        </a>
        <Link to="/jams" className="hover:text-stone-900 transition">
          {t("nav.past")}
        </Link>
        <LanguageToggle />
      </nav>
    </header>
  );
}
