import { motion } from "motion/react";
import { ArrowRight, Mail, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";

export default function ContactPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-bg-cream">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-semibold tracking-tight text-ink mb-6">
            {t("contact.title1")}<span className="italic text-lime-green">{t("contact.title2")}</span>
          </h1>
          <p className="text-xl text-ink/70 font-light leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-ink/5"
        >
          <form 
            action="mailto:aitana.gm99@gmail.com" 
            method="post" 
            encType="text/plain"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-ink/80">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="Name" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 bg-bg-cream/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-green/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-ink/80">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="Email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 bg-bg-cream/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-green/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="projectType" className="text-sm font-medium text-ink/80">Project Type</label>
              <select 
                id="projectType" 
                name="Project Type"
                className="w-full px-4 py-3 rounded-xl border border-ink/10 bg-bg-cream/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-green/50 transition-all appearance-none"
              >
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Marketing">Marketing / Branding</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-ink/80">Message</label>
              <textarea 
                id="message" 
                name="Message" 
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-ink/10 bg-bg-cream/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-green/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-bg-cream rounded-xl font-medium overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-lime-green translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
