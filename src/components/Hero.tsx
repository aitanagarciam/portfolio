import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 lg:px-12 bg-bg-cream">
      {/* Abstract Background Shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-lime-green/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-neon-orange/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ rotate: 180 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#005aff]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/10 bg-white/50 backdrop-blur-sm mb-8"
        >
          <span className="text-sm font-medium tracking-wide uppercase text-ink/80">
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[80px] font-serif font-semibold leading-[1.1] tracking-tight text-ink mb-8"
        >
          {t("hero.title1")}<span className="italic text-neon-orange">{t("hero.title2")}</span>{t("hero.title3")}<span className="italic text-lime-green">{t("hero.title4")}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-ink/70 max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="/#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-bg-cream rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("hero.cta1")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-neon-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </a>
          
          <a 
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-ink border border-ink/20 hover:bg-ink/5 transition-colors"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>

    </section>
  );
}
