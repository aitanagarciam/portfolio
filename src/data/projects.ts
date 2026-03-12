export type Category = "Marketing/Web" | "Automatización/Sistemas";

export interface ProjectContent {
  title: string;
  tag: string;
  challenge: string;
  logic: string;
  result: string;
}

export interface Project {
  id: number;
  category: Category;
  color: string;
  waczUrl?: string;
  targetUrl?: string;
  content: {
    en: ProjectContent;
    es: ProjectContent;
  };
}

export const projectsData: Project[] = [
  {
    id: 1,
    category: "Marketing/Web",
    color: "bg-neon-orange/10 text-neon-orange border-neon-orange/20",
    waczUrl: "https://replayweb.page/docs/examples/example.wacz",
    targetUrl: "https://example.com",
    content: {
      en: {
        title: "E-commerce UX/UI Redesign",
        tag: "Aesthetics that convert",
        challenge: "An online store with high traffic but low conversion rate due to a confusing checkout flow.",
        logic: "Heatmap analysis, checkout restructuring into 3 logical steps, and simplification of information architecture.",
        result: "45% increase in conversions and 60% reduction in abandoned carts."
      },
      es: {
        title: "E-commerce Rediseño UX/UI",
        tag: "Estética que convierte",
        challenge: "Una tienda online con alto tráfico pero baja tasa de conversión debido a un flujo de pago confuso.",
        logic: "Análisis de mapas de calor, reestructuración del checkout en 3 pasos lógicos y simplificación de la arquitectura de la información.",
        result: "Aumento del 45% en conversiones y reducción del 60% en carritos abandonados."
      }
    }
  },
  {
    id: 2,
    category: "Automatización/Sistemas",
    color: "bg-lime-green/20 text-lime-green border-lime-green/30",
    content: {
      en: {
        title: "Automatic Onboarding System",
        tag: "Efficiency that frees up time",
        challenge: "The sales team lost 15 hours a week sending manual emails to new clients.",
        logic: "Design of a workflow in Zapier connecting the CRM with the email marketing platform, triggered by status tags.",
        result: "Zero manual intervention required, saving 60 hours a month and improving initial retention."
      },
      es: {
        title: "Sistema de Onboarding Automático",
        tag: "Eficiencia que libera tiempo",
        challenge: "El equipo de ventas perdía 15 horas semanales enviando correos manuales a nuevos clientes.",
        logic: "Diseño de un flujo de trabajo en Zapier conectando el CRM con la plataforma de email marketing, activado por etiquetas de estado.",
        result: "Cero intervención manual requerida, ahorrando 60 horas al mes y mejorando la retención inicial."
      }
    }
  },
  {
    id: 3,
    category: "Marketing/Web",
    color: "bg-electric-blue/10 text-electric-blue border-electric-blue/20",
    waczUrl: "https://replayweb.page/docs/examples/example.wacz",
    targetUrl: "https://example.com",
    content: {
      en: {
        title: "Personal Brand Launch",
        tag: "Aesthetics that convert",
        challenge: "A consultant needed to position themselves quickly in a saturated market without a defined visual identity.",
        logic: "Development of a modular design system and a content strategy based on authority pillars.",
        result: "Growth from 0 to 10k qualified followers in 3 months and a full schedule for the first quarter."
      },
      es: {
        title: "Lanzamiento de Marca Personal",
        tag: "Estética que convierte",
        challenge: "Un consultor necesitaba posicionarse rápidamente en un mercado saturado sin una identidad visual definida.",
        logic: "Desarrollo de un sistema de diseño modular y una estrategia de contenido basada en pilares de autoridad.",
        result: "Crecimiento de 0 a 10k seguidores cualificados en 3 meses y agenda llena para el primer trimestre."
      }
    }
  },
  {
    id: 4,
    category: "Automatización/Sistemas",
    color: "bg-ink/5 text-ink border-ink/10",
    content: {
      en: {
        title: "Real-Time Metrics Dashboard",
        tag: "Efficiency that frees up time",
        challenge: "The board made decisions based on outdated Excel reports.",
        logic: "Integration of APIs from multiple data sources (Ads, CRM, Sales) into an automated Looker Studio dashboard.",
        result: "Instant visibility of ROI, allowing real-time campaign adjustments and budget optimization."
      },
      es: {
        title: "Dashboard de Métricas en Tiempo Real",
        tag: "Eficiencia que libera tiempo",
        challenge: "La directiva tomaba decisiones basadas en reportes de Excel desactualizados.",
        logic: "Integración de APIs de múltiples fuentes de datos (Ads, CRM, Ventas) en un panel de Looker Studio automatizado.",
        result: "Visibilidad instantánea del ROI, permitiendo ajustes de campaña en tiempo real y optimización del presupuesto."
      }
    }
  }
];
