import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-cream">
        <h1 className="text-2xl font-serif">Project not found</h1>
      </div>
    );
  }

  const content = project.content[language];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-12 max-w-5xl mx-auto min-h-screen">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-ink/60 hover:text-neon-orange mb-12 transition-colors font-medium"
      >
        <ArrowLeft className="w-4 h-4" /> {t("nav.back")}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase border mb-8 ${project.color}`}>
          {content.tag}
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-ink mb-12 leading-tight">
          {content.title}
        </h1>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink/40 mb-3">{t("projects.labels.challenge")}</h3>
              <p className="text-lg text-ink/80 font-light leading-relaxed">{content.challenge}</p>
            </div>
            
            <div className="pl-6 border-l-2 border-lime-green/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink/40 mb-3">{t("projects.labels.logic")}</h3>
              <p className="text-lg text-ink/80 font-light leading-relaxed">{content.logic}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink/40 mb-3">{t("projects.labels.result")}</h3>
              <p className="text-lg text-ink/80 font-light leading-relaxed font-medium">{content.result}</p>
            </div>
          </div>
        </div>

        {/* WACZ Embed for Web Projects */}
        {project.category === "Marketing/Web" && project.waczUrl && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif font-medium text-ink">Interactive Archive</h3>
              {project.targetUrl && (
                <a href={project.targetUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-electric-blue transition-colors">
                  Original Site <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <div className="w-full h-[600px] md:h-[800px] border border-ink/10 rounded-2xl overflow-hidden bg-white shadow-sm relative">
              {/* @ts-ignore */}
              <replay-web-page
                source={project.waczUrl}
                url={project.targetUrl}
                embed="true"
                no-header="true"
              >
              {/* @ts-ignore */}
              </replay-web-page>
            </div>
            <p className="text-sm text-ink/40 mt-4 text-center">
              * This is a dynamic web archive (WACZ) of the project.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
