import { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      back: "Back to Home"
    },
    hero: {
      badge: "Precision & Creativity",
      title1: "Designing systems that ",
      title2: "flow",
      title3: " and brands that ",
      title4: "connect.",
      subtitle: "Engineering applied to Marketing, Web Design, and Automation. The structure of engineering applied to the freedom of marketing.",
      cta1: "View projects",
      cta2: "Let's talk",
      scroll: "Scroll"
    },
    about: {
      badge: "About me",
      title1: "From electrical circuits to ",
      title2: "digital ecosystems.",
      p1: "I started my career as an Electronics Engineer, designing boards and solving complex problems with pure logic. But I soon discovered that my true passion wasn't in hardware, but in how systems can transform businesses.",
      p2: "Today, I apply that same analytical mindset to the digital marketing world. I'm not satisfied with something just looking pretty; I need to know ",
      p2_bold: "how it works, why it works, and how it can scale.",
      p3: "My approach is simple: combine the precision of engineering with the creativity of design to build brands that not only stand out, but operate like well-oiled machines.",
      skills: {
        engineering: { title: "Engineering", desc: "Logical and structured thinking" },
        web: { title: "Web Design", desc: "Functional and scalable aesthetics" },
        automation: { title: "Automation", desc: "Systems that work for you" },
        marketing: { title: "Marketing", desc: "Strategies that connect" }
      }
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Case studies where engineering logic meets strategic design.",
      filters: {
        all: "All",
        web: "Marketing/Web",
        automation: "Automation/Systems"
      },
      labels: {
        challenge: "Challenge",
        logic: "Logic (Engineering)",
        result: "Visual Result",
        view: "View Project"
      }
    },
    contact: {
      title1: "Should we talk about ",
      title2: "systems",
      title3: " or ",
      title4: "design?",
      subtitle: "If you're looking for someone who just makes things \"pretty\", that's probably not me. But if you want your brand to work as well as it looks, we have a lot to talk about.",
      cta: "Start Project"
    },
    footer: {
      rights: "Aitana García. All rights reserved.",
      designed: "Designed with ",
      built: " and built with ",
      logic: "logic"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      back: "Volver al Inicio"
    },
    hero: {
      badge: "Precisión & Creatividad",
      title1: "Diseñando sistemas que ",
      title2: "fluyen",
      title3: " y marcas que ",
      title4: "conectan.",
      subtitle: "Ingeniería aplicada al Marketing, Diseño Web y Automatización. La estructura de la ingeniería aplicada a la libertad del marketing.",
      cta1: "Ver proyectos",
      cta2: "Hablemos",
      scroll: "Scroll"
    },
    about: {
      badge: "Sobre mí",
      title1: "De los circuitos eléctricos a los ",
      title2: "ecosistemas digitales.",
      p1: "Comencé mi carrera como Ingeniera Electrónica, diseñando placas y resolviendo problemas complejos con lógica pura. Pero pronto descubrí que mi verdadera pasión no estaba en el hardware, sino en cómo los sistemas pueden transformar negocios.",
      p2: "Hoy, aplico esa misma mentalidad analítica al mundo del marketing digital. No me conformo con que algo se vea bonito; necesito saber ",
      p2_bold: "cómo funciona, por qué funciona y cómo puede escalar.",
      p3: "Mi enfoque es simple: combinar la precisión de la ingeniería con la creatividad del diseño para construir marcas que no solo destaquen, sino que operen como máquinas bien engrasadas.",
      skills: {
        engineering: { title: "Ingeniería", desc: "Pensamiento lógico y estructurado" },
        web: { title: "Diseño Web", desc: "Estética funcional y escalable" },
        automation: { title: "Automatización", desc: "Sistemas que trabajan por ti" },
        marketing: { title: "Marketing", desc: "Estrategias que conectan" }
      }
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Casos de estudio donde la lógica de la ingeniería se encuentra con el diseño estratégico.",
      filters: {
        all: "Todos",
        web: "Marketing/Web",
        automation: "Automatización/Sistemas"
      },
      labels: {
        challenge: "Desafío",
        logic: "Lógica (Ingeniería)",
        result: "Resultado Visual",
        view: "Ver Proyecto"
      }
    },
    contact: {
      title1: "¿Hablamos de ",
      title2: "sistemas",
      title3: " o de ",
      title4: "diseño?",
      subtitle: "Si estás buscando a alguien que solo haga las cosas \"bonitas\", probablemente no soy yo. Pero si quieres que tu marca funcione tan bien como se ve, tenemos mucho de qué hablar.",
      cta: "Iniciar Proyecto"
    },
    footer: {
      rights: "Aitana García. Todos los derechos reservados.",
      designed: "Diseñado con ",
      built: " y construido con ",
      logic: "lógica"
    }
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
