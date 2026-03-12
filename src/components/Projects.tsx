import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData, Category } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const { language, t } = useLanguage();

  const filteredProjects = projectsData.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-32 px-6 lg:px-12 bg-bg-cream relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-ink">
              {t("projects.title")}
            </h2>
            <p className="text-lg text-ink/60 font-light max-w-xl">
              {t("projects.subtitle")}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {[
              { id: "All", label: t("projects.filters.all") },
              { id: "Marketing/Web", label: t("projects.filters.web") },
              { id: "Automatización/Sistemas", label: t("projects.filters.automation") }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === cat.id 
                    ? "bg-ink text-bg-cream shadow-md" 
                    : "bg-white text-ink/70 hover:bg-ink/5 border border-ink/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const content = project.content[language];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-3xl p-8 md:p-10 border border-ink/5 hover:border-ink/10 transition-colors group relative overflow-hidden flex flex-col"
                >
                  {/* Tag */}
                  <div className={`self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border mb-6 ${project.color}`}>
                    {content.tag}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-ink mb-8 group-hover:text-neon-orange transition-colors">
                    {content.title}
                  </h3>

                  <div className="space-y-6 mb-8 flex-grow">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-ink/40 mb-2">{t("projects.labels.challenge")}</h4>
                      <p className="text-ink/80 font-light leading-relaxed line-clamp-2">{content.challenge}</p>
                    </div>
                  </div>

                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink hover:text-electric-blue transition-colors mt-auto pt-6 border-t border-ink/5"
                  >
                    {t("projects.labels.view")} <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {/* Hover Action */}
                  <Link to={`/project/${project.id}`} className="absolute top-8 right-8 w-12 h-12 rounded-full bg-bg-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-ink" />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
