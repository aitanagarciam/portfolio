import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 px-6 lg:px-12 bg-ink text-bg-cream/40 text-sm font-medium border-t border-bg-cream/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} {t("footer.rights")}
        </p>
        <p className="flex items-center gap-2">
          {t("footer.designed")}<span className="text-neon-orange">♥</span>{t("footer.built")}<span className="text-lime-green">{t("footer.logic")}</span>.
        </p>
      </div>
    </footer>
  );
}
