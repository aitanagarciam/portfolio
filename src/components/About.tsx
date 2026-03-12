import { motion } from "motion/react";
import { Zap, Code, Workflow, Lightbulb } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const skills = [
    { icon: <Zap className="w-5 h-5" />, title: t("about.skills.engineering.title"), desc: t("about.skills.engineering.desc") },
    { icon: <Code className="w-5 h-5" />, title: t("about.skills.web.title"), desc: t("about.skills.web.desc") },
    { icon: <Workflow className="w-5 h-5" />, title: t("about.skills.automation.title"), desc: t("about.skills.automation.desc") },
    { icon: <Lightbulb className="w-5 h-5" />, title: t("about.skills.marketing.title"), desc: t("about.skills.marketing.desc") },
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/10 bg-bg-cream">
              <span className="text-sm font-medium tracking-wide uppercase text-ink/80">
                {t("about.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-ink">
              {t("about.title1")}<span className="text-electric-blue italic">{t("about.title2")}</span>
            </h2>

            <div className="space-y-6 text-lg text-ink/70 font-light leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>
                {t("about.p2")}<strong>{t("about.p2_bold")}</strong>
              </p>
              <p>{t("about.p3")}</p>
            </div>
          </motion.div>

          {/* Visual / Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 relative"
          >
            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-lime-green/30 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-orange/20 rounded-full blur-2xl -z-10" />

            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-bg-cream border border-ink/5 hover:border-ink/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-ink mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-serif font-medium text-ink mb-2">{skill.title}</h3>
                <p className="text-sm text-ink/60 font-light">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
