import { motion } from "motion/react";
import { ArrowRight, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-ink text-bg-cream relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-lime-green/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-semibold leading-[1.1] tracking-tight">
            {t("contact.title1")}<span className="italic text-lime-green">{t("contact.title2")}</span>{t("contact.title3")}<span className="italic text-neon-orange">{t("contact.title4")}</span>
          </h2>

          <p className="text-xl md:text-2xl text-bg-cream/70 font-light max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link 
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-lime-green text-ink rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t("contact.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 pt-16 border-t border-bg-cream/10 mt-16">
            <a href="https://www.linkedin.com/in/aitana-garcia/" target="_blank" rel="noopener noreferrer" className="text-bg-cream/50 hover:text-neon-orange transition-colors flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
