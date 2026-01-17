// src/components/SiteHeader.tsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LanguageToggle from "./LanguageToggle";

type Props = {
  backTo?: string;
  backLabel?: string;
};

export default function SiteHeader({ backTo, backLabel }: Props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative max-w-7xl mx-auto px-6 pt-10">
      <div className="flex items-center justify-between">
        {/* Left */}
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-stone-600">
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

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          className="md:hidden relative h-6 w-6"
        >
          <span
            className={`absolute top-1/2 left-0 h-[1.5px] w-full bg-stone-900 transition-all duration-300
            ${open ? "rotate-45" : "-translate-y-2"}`}
          />
          <span
            className={`absolute top-1/2 left-0 h-[1.5px] w-full bg-stone-900 transition-all duration-300
            ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mt-8 bg-[#f4f2ed] px-6 py-8 shadow-sm"
          >
            <ul className="space-y-6 text-lg text-stone-800">
              <li>
                <a
                  href="https://tally.so/r/wogA4V"
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  {t("nav.join")}
                </a>
              </li>
              <li>
                <Link to="/jams" onClick={() => setOpen(false)}>
                  {t("nav.past")}
                </Link>
              </li>

              <li className="pt-4 border-t border-stone-300 text-sm text-stone-600">
                <LanguageToggle />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
