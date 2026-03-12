import { motion } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("nav.about"), href: "/#about" },
    { name: t("nav.projects"), href: "/#projects" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-bg-cream/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-2xl font-serif font-semibold tracking-tight text-ink flex items-baseline"
          >
            Aitana García<span className="text-neon-orange text-3xl leading-none">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-ink/70 hover:text-neon-orange transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-ink/70 hover:text-neon-orange transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-electric-blue transition-colors px-3 py-1.5 rounded-full border border-ink/10 hover:bg-ink/5"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-ink/70"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-bg-cream border-b border-ink/5"
        >
          <div className="px-6 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-ink/80 hover:text-neon-orange"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-ink/80 hover:text-neon-orange"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
