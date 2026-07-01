import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import heroOffice from "@/assets/hero-office.jpg";
import eagleEmblem from "@/assets/user-eagle-clean.png";
import catedralImg from "@/assets/catedral-teziutlan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camacho Y Asociados Abogados — Despacho Legal en Teziutlán" },
      { name: "description", content: "Despacho jurídico líder en Teziutlán, Puebla. +25 años de experiencia en derecho civil, familiar, laboral y penal. Primera consulta de evaluación." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Camacho Y Asociados Abogados — Teziutlán" },
      { property: "og:description", content: "Despacho jurídico en Teziutlán, Puebla. Resultados claros, estrategia precisa y la defensa legal que tu caso merece." },
      { property: "og:url", content: "https://camachoyasociados.com" }, // Cambiar por dominio real
      { property: "og:site_name", content: "Camacho Y Asociados" },
      // { property: "og:image", content: "URL_A_TU_IMAGEN_SOCIAL" }, // Descomentar cuando haya dominio
    ],
  }),
  component: Index,
});

/* ── Scroll animation ─────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Business Status Hook ─────────────────────────── */
function useBusinessStatus() {
  const [status, setStatus] = useState({ isOpen: false, text: "" });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      let open = false;
      // Lunes a viernes: 9:00 - 20:00
      if (day >= 1 && day <= 5) {
        if (hour >= 9 && hour < 20) open = true;
      }
      // Sábado: 9:00 - 15:00
      else if (day === 6) {
        if (hour >= 9 && hour < 15) open = true;
      }

      setStatus({
        isOpen: open,
        text: open ? "Abierto ahora" : "Cerrado ahora"
      });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}

function BusinessStatus() {
  const { isOpen, text } = useBusinessStatus();

  if (!text) return null;

  return (
    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-[#c9a84c]">
      <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500/80'}`}></span>
      {text}
    </span>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── SVG Icons ────────────────────────────────────── */
const IconScales = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className || "w-[26px] h-[26px]"}>
    <line x1="12" y1="3" x2="12" y2="21" /><line x1="3" y1="6" x2="21" y2="6" />
    <path d="M6 10l-3 7h6l-3-7z" /><path d="M18 10l-3 7h6l-3-7z" />
  </svg>
);
const IconHome = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className || "w-[26px] h-[26px]"}>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconBriefcase = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className || "w-[26px] h-[26px]"}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);
const IconUser = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className || "w-[26px] h-[26px]"}>
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconShield = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className || "w-[26px] h-[26px]"}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IconFacebook = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const IconGoogle = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M21.8 10.2H12v3.6h5.6c-.5 2.5-2.7 4.2-5.6 4.2a6 6 0 010-12c1.5 0 2.9.6 4 1.5l2.6-2.6A10 10 0 1022 12c0-.6-.1-1.2-.2-1.8z" />
  </svg>
);
const IconStar = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6 text-[#B0623B]"}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconStarOutline = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className || "w-6 h-6 text-[#B0623B]"}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconWhatsApp = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" className={className || "w-[18px] h-[18px]"}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
const IconCheck = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-5 h-5"}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconMessage = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className || "w-6 h-6"}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconFileText = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className || "w-6 h-6"}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
const IconChevronDown = ({ className = "" }: { className?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-5 h-5"}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// URL de WhatsApp con mensaje formal predeterminado
const WA_URL = `https://wa.me/5212311221030?text=${encodeURIComponent('Estimado Licenciado Camacho, solicito agendar una consulta jurídica para evaluar mi caso. Quedo a la espera de sus horarios disponibles.')}`;

/* ── Page ─────────────────────────────────────────── */
function Index() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.008_90)] text-[oklch(0.18_0.015_150)]">
      <Nav />
      <Hero />
      <Marquee />
      <WhyUs />
      <Practice />
      <Process />
      <Results />
      <Reviews />
      <Team />
      <FAQ />
      <Coverage />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ── Floating WhatsApp ───────────────────────────── */
function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="bg-white px-3 py-1.5 rounded-t-xl rounded-bl-xl rounded-br-sm shadow-md border border-[#c9a84c]/30 text-[10px] font-semibold text-[#1C2B22] flex items-center gap-1.5 animate-pulse">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        Atención rápida y prioritaria
      </div>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-md border border-[#c9a84c] text-[#1C2B22] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-[#1C2B22] hover:text-[#c9a84c] transition-all duration-300"
        aria-label="Agendar Asesoría por WhatsApp"
      >
        <IconWhatsApp className="w-5 h-5" />
        <span className="text-[11px] font-bold uppercase tracking-widest hidden sm:block">
          Agendar Asesoría
        </span>
      </a>
    </div>
  );
}

/* ── Nav — NO MODIFICAR ──────────────────────────── */
function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="absolute top-0 left-0 p-2 sm:p-3 flex flex-col items-center">
        <img
          src={eagleEmblem}
          alt="Emblema Camacho"
          className="w-36 sm:w-44 md:w-56 object-contain"
        />
        <div
          className="-mt-5 font-serif text-center tracking-widest text-[#c9a84c] leading-tight"
          style={{ fontSize: "10px" }}
        >
          <p className="sm:text-[12px] md:text-[14px]">CAMACHO Y ASOCIADOS</p>
          <p className="sm:text-[12px] md:text-[14px]">ABOGADOS</p>
        </div>
      </div>
      <div className="flex justify-end items-start px-4 md:px-10 pt-5 gap-4 md:gap-8">
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] text-white/75 mt-2">
          <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
          <a href="#practica" className="hover:text-white transition-colors">Áreas</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </nav>
        {/* Ubicación en nav — visible en escritorio */}
        <a
          href="https://maps.app.goo.gl/ZCTcuLwndC5VV6mz6"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-white/60 hover:text-[#c9a84c] transition mt-2"
          aria-label="Ver ubicación en Google Maps"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          Teziutlán, Puebla
        </a>
        <a
          href="#contacto"
          className="text-[10px] md:text-xs uppercase tracking-[0.15em] border-b border-white/30 pb-1 text-white/70 hover:text-white hover:border-white transition mt-2"
        >
          Consulta
        </a>
      </div>
    </header>
  );
}

/* ── Hero ────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={heroOffice}
        alt="Despacho legal Camacho"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pb-16 md:pb-24 w-full">
        <div className="max-w-3xl">
          <FadeIn delay={100}>
            <div className="mb-8 flex items-center gap-3 flex-wrap text-[10px] uppercase tracking-[0.2em] text-[#c9a84c]">
              <span className="flex items-center gap-1.5">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Teziutlán, Pue.
              </span>
              <span className="opacity-40">|</span>
              <span>Est. 1998</span>
              <span className="opacity-40">|</span>
              <BusinessStatus />
            </div>
          </FadeIn>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white text-balance">
            <FadeIn delay={200}>Protegemos</FadeIn>
            <FadeIn delay={300}>lo que más importa</FadeIn>
            <FadeIn delay={400} className="text-[#c9a84c]">para ti.</FadeIn>
          </h1>
          
          {/* Estadísticas: tipografía clásica editorial en lugar de "pills/chips" */}
          <FadeIn delay={500}>
            <div className="mt-8 flex flex-row flex-wrap items-center gap-x-3 gap-y-2 sm:gap-6 text-[10px] sm:text-xs text-white/80 font-medium uppercase tracking-[0.15em]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <IconBriefcase className="w-3.5 h-3.5 text-[#c9a84c]"/>
                <span><strong className="text-[#c9a84c]">+25</strong> años</span>
              </div>
              <div className="w-px h-3 bg-white/20"></div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <IconScales className="w-3.5 h-3.5 text-[#c9a84c]"/>
                <span><strong className="text-[#c9a84c]">+450</strong> casos</span>
              </div>
              <div className="w-px h-3 bg-white/20"></div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <IconStar className="w-3.5 h-3.5 text-[#c9a84c]"/>
                <span><strong className="text-[#c9a84c]">4.9★</strong> Google</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="mt-6 max-w-md text-sm md:text-lg text-white/80 leading-relaxed">
              Tu problema legal tiene solución, déjalo en nuestras manos. Primera consulta sin costo y atención directa.
            </p>
          </FadeIn>
          
          <FadeIn delay={700}>
            <div className="mt-8 flex gap-5 sm:gap-8 items-center">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#1C2B22] font-bold px-5 py-3 text-[10px] sm:text-[11px] uppercase tracking-widest hover:bg-[#dbb95a] transition-colors rounded-sm shadow-md"
              >
                <IconWhatsApp className="w-3.5 h-3.5" />
                Agendar Consulta
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-0.5"
              >
                Cómo trabajamos <span aria-hidden="true" className="text-[#c9a84c]">→</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ── Marquee ─────────────────────────────────────── */
function Marquee() {
  const items = [
    "Derecho Civil", "Derecho Mercantil", "Derecho Familiar",
    "Derecho Laboral", "Amparo", "Derecho Penal", "Notarial",
  ];

  // Elementos individuales
  const content = items.map((it, i) => (
    <span key={i} className="flex items-center gap-10 shrink-0 px-5">
      {it}
      <span className="text-[#B0623B]" style={{ fontSize: "7px" }}>◆</span>
    </span>
  ));

  return (
    <div className="border-y border-[oklch(0.86_0.012_90)] bg-[oklch(0.93_0.012_90)]/60 overflow-hidden py-5 flex">
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
      `}</style>

      {/* Duplicamos los bloques varias veces para asegurar que llene pantallas muy anchas */}
      <div className="flex shrink-0 animate-ticker w-max text-xs uppercase tracking-[0.25em] text-[oklch(0.45_0.015_120)]">
        {content}
      </div>
      <div className="flex shrink-0 animate-ticker w-max text-xs uppercase tracking-[0.25em] text-[oklch(0.45_0.015_120)]">
        {content}
      </div>
      <div className="flex shrink-0 animate-ticker w-max text-xs uppercase tracking-[0.25em] text-[oklch(0.45_0.015_120)]">
        {content}
      </div>
      <div className="flex shrink-0 animate-ticker w-max text-xs uppercase tracking-[0.25em] text-[oklch(0.45_0.015_120)]">
        {content}
      </div>
    </div>
  );
}

/* ── WhyUs (Sustituye a About) ────────────────────── */
function WhyUs() {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
      <FadeIn>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-[#B0623B] mb-6">
              — Por qué elegirnos
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance mb-6">
              ¿Enfrentando un proceso legal y no sabe por dónde empezar?
            </h2>
            <p className="text-base text-[oklch(0.45_0.015_120)] leading-relaxed">
              Más de 25 años de experiencia en Teziutlán y la región nos respaldan. Resultados comprobables, estrategia honesta.
            </p>
          </div>
          
          <div className="md:col-span-6 md:col-start-7 grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <div className="text-[#c9a84c] mb-4"><IconScales className="w-6 h-6" /></div>
              <h4 className="font-serif text-xl mb-2">+450 Casos Resueltos</h4>
              <p className="text-sm text-gray-500">Amplia experiencia litigando en los juzgados de Teziutlán y la región.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <div className="text-[#c9a84c] mb-4"><IconUser className="w-6 h-6" /></div>
              <h4 className="font-serif text-xl mb-2">Atención Directa</h4>
              <p className="text-sm text-gray-500">Atención personalizada directamente con el Licenciado, sin intermediarios ni becarios.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <div className="text-[#c9a84c] mb-4"><IconMessage className="w-6 h-6" /></div>
              <h4 className="font-serif text-xl mb-2">Sin Tecnicismos</h4>
              <p className="text-sm text-gray-500">Te explicamos tu situación y el proceso en español claro y comprensible.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <div className="text-[#c9a84c] mb-4"><IconShield className="w-6 h-6" /></div>
              <h4 className="font-serif text-xl mb-2">Honestidad Radical</h4>
              <p className="text-sm text-gray-500">Si no es viable tu caso, te lo decimos. Sin sorpresas, honorarios claros desde el principio.</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ── Practice ────────────────────────────────────── */
function Practice() {
  const areas = [
    { icon: <IconScales />, t: "Derecho Civil", d: "Contratos, propiedad, arrendamientos y conflictos entre particulares.", e: "Ej. Contratos de compraventa, regularización de predios." },
    { icon: <IconHome />, t: "Derecho Familiar", d: "Divorcios, pensión alimenticia, custodia y sucesiones.", e: "Ej. Divorcios incausados, juicios intestamentarios." },
    { icon: <IconBriefcase />, t: "Derecho Mercantil", d: "Constitución de empresas, contratos comerciales y cobranza.", e: "Ej. Cobro de pagarés, embargos precautorios." },
    { icon: <IconUser />, t: "Derecho Laboral", d: "Despidos injustificados, finiquitos y demandas ante la junta.", e: "Ej. Negociación de liquidaciones, defensa del trabajador." },
    { icon: <IconShield />, t: "Amparo y Penal", d: "Defensa penal y juicios de amparo ante actos de autoridad.", e: "Ej. Amparos contra órdenes de aprehensión." },
  ];

  return (
    <section id="practica" className="mx-auto max-w-7xl px-6 md:px-10 pb-16 md:pb-24">
      <FadeIn>
        <div className="text-xs uppercase tracking-[0.3em] text-[#B0623B] mb-6">
          — Áreas de práctica
        </div>

        {/* Enlaces Sociales - Facebook y Google */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="https://www.facebook.com/CamachoyAsociadosAbogado/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-xs uppercase tracking-widest text-white bg-[#1877F2] hover:bg-[#166fe5] transition-colors px-6 py-3 rounded-md shadow-sm"
          >
            <IconFacebook />
            Facebook
          </a>
          <a
            href="https://maps.app.goo.gl/ZCTcuLwndC5VV6mz6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-xs uppercase tracking-widest text-[oklch(0.18_0.015_150)] bg-white border border-black/10 hover:bg-black/5 transition-colors px-6 py-3 rounded-md shadow-sm"
          >
            <IconGoogle />
            Reseñas en Google
          </a>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl mb-12 text-balance max-w-xl">
          Especialización y atención experta en tu caso.
        </h2>
      </FadeIn>

      {/* Grid para escritorio y carrusel para móvil */}
      <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-px md:bg-[oklch(0.86_0.012_90)] mt-8 pb-4 sm:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {areas.map((a, i) => (
          <FadeIn key={a.t} delay={i * 100} className="w-[85vw] sm:w-auto shrink-0 snap-start h-full">
            <div className="bg-[#E6EAE6] md:bg-[oklch(0.97_0.008_90)] border border-black/5 md:border-none p-8 md:p-10 h-full flex flex-col rounded-xl md:rounded-none relative overflow-hidden group">
              <span className="absolute top-6 right-6 text-[10px] font-bold text-black/10">0{i + 1}</span>
              <div className="text-[oklch(0.35_0.015_150)] mb-5 transition-transform group-hover:scale-110 group-hover:text-[#B0623B] duration-300 origin-left">{a.icon}</div>
              <h3 className="font-serif text-xl mb-2">{a.t}</h3>
              <p className="text-sm text-[oklch(0.45_0.015_120)] leading-relaxed mb-4">{a.d}</p>
              <p className="text-xs font-semibold text-[#c9a84c] mt-auto uppercase tracking-wider">{a.e}</p>
            </div>
          </FadeIn>
        ))}

        {/* CTA card */}
        <FadeIn delay={areas.length * 100} className="w-[85vw] sm:w-auto shrink-0 snap-start h-full sm:col-span-2 lg:col-span-1">
          <div className="bg-[#1C2B22] p-8 md:p-10 h-full flex flex-col justify-between min-h-[200px] rounded-xl md:rounded-none">
            <div>
              <p className="font-serif text-xl text-white mb-3">
                ¿No está seguro cuál es su caso?
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                Cuéntenos qué pasó en la primera consulta, sin costo, y le decimos qué camino conviene.
              </p>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-[#c9a84c] font-semibold hover:text-white transition-colors tracking-wide"
            >
              Escribir por WhatsApp →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Reviews ─────────────────────────────────────── */
function Reviews() {
  const reviewsData = [
    {
      name: "Leonard RGz",
      badge: "NUEVA",
      stars: 5,
      type: "Caso Civil · 2024",
      text: "Un abogado honesto, responsable y comprometido con sus clientes. Me hizo sentir tranquilo durante todo el proceso y siempre estuvo pendiente de mi caso. Totalmente recomendado."
    },
    {
      name: "José Eliuh Guzmán Flores",
      badge: "Local Guide",
      stars: 5,
      type: "Caso Penal · 2023",
      text: "Te tratan de la mejor manera, te atienden rápido y te resuelven de la misma manera, los Lic. Te hacen qué todo sea comprensible Y si dan resultados."
    },
    {
      name: "Jose Alfredo Ramirez",
      badge: "Google Review",
      stars: 5,
      type: "Asesoría Legal",
      text: "Tuve mi primera asesoría y me dieron un panorama realista. Me explicaron costos y tiempos desde el día uno. Se agradece la honestidad."
    },
    {
      name: "Hector Bello",
      badge: "Local Guide",
      stars: 4,
      type: "Trámite Mercantil",
      text: "Buen trato a las personas, muy profesionales y con gran disposición para aclarar cualquier duda durante el proceso."
    }
  ];

  const ReviewCard = ({ r }: { r: any }) => (
    <div className="bg-white border border-black/5 p-8 rounded-xl shrink-0 w-[300px] md:w-[380px] shadow-sm flex flex-col justify-between mx-4 hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
            {r.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm">{r.name}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <IconGoogle className="w-3 h-3"/> {r.badge}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1 text-[#B0623B]">
            {[...Array(5)].map((_, i) => (
              i < r.stars ? <IconStar key={i} className="w-4 h-4"/> : <IconStarOutline key={i} className="w-4 h-4"/>
            ))}
          </div>
          <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-sm uppercase tracking-wider">
            {r.type}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">"{r.text}"</p>
        
        <a
          href="https://maps.app.goo.gl/vVgzB8vqXbLcGNAE6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#c9a84c] hover:text-[#B0623B] font-semibold uppercase tracking-widest transition-colors mt-auto"
        >
          Escribe tu opinión en Google <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-[#f0ece1] border-y border-[oklch(0.86_0.012_90)] overflow-hidden">
      <FadeIn className="mx-auto max-w-7xl px-6 md:px-10 mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-balance mb-4">
          Lo que dicen quienes ya nos consultaron
        </h2>
        <p className="text-sm text-[oklch(0.45_0.015_120)] max-w-xl">
          Reseñas reales de clientes en Google. Tu confianza nos respalda.
        </p>
      </FadeIn>
      
      <div className="flex">
        <style>{`
          @keyframes slideReviews {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-reviews {
            animation: slideReviews 35s linear infinite;
          }
          .animate-reviews:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="flex animate-reviews shrink-0">
          {reviewsData.map((r, i) => <ReviewCard key={i} r={r} />)}
        </div>
        <div className="flex animate-reviews shrink-0">
          {reviewsData.map((r, i) => <ReviewCard key={`dup-${i}`} r={r} />)}
        </div>
        <div className="flex animate-reviews shrink-0">
          {reviewsData.map((r, i) => <ReviewCard key={`dup2-${i}`} r={r} />)}
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <a
          href="https://maps.app.goo.gl/ZCTcuLwndC5VV6mz6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#1C2B22] text-white px-7 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm shadow-md"
        >
          <IconGoogle />
          Calificar en Google
        </a>
      </div>
    </section>
  );
}

/* ── Team ────────────────────────────────────────── */
function Team() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
      <FadeIn>
        <div className="text-xs uppercase tracking-[0.3em] text-[#B0623B] mb-6">
          — Nuestro Abogado
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] bg-[#E6EAE6] rounded-xl overflow-hidden relative shadow-md border border-black/5 flex items-center justify-center group">
             {/* Placeholder profesional para foto del abogado */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[oklch(0.45_0.015_120)] z-0">
              <IconUser className="w-16 h-16 opacity-30 mb-4" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#B0623B] px-6 py-2 border border-[#B0623B]/30 rounded-full bg-white/50">
                [Espacio para Foto Profesional]
              </p>
              <p className="mt-4 text-[10px] text-center max-w-[200px] opacity-70">
                Añadir foto real incrementa la confianza del usuario.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-balance mb-2">
              Licenciado Camacho
            </h2>
            <p className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest mb-8">
              Director General
            </p>
            <div className="space-y-4 text-base text-[oklch(0.45_0.015_120)] leading-relaxed">
              <p>
                Con más de 25 años de experiencia litigando en la región, dirigiendo defensas estratégicas en materia Penal, Civil, Familiar y Mercantil.
              </p>
              <p>
                Comprometido con la ética profesional y la transparencia, garantizando que cada cliente entienda su situación y las opciones viables para resolver su conflicto legal.
              </p>
            </div>
            
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ── Process ─────────────────────────────────────── */
function Process() {
  const steps = [
    { icon: <IconWhatsApp className="w-5 h-5 lg:w-8 lg:h-8" />, t: "Escríbenos por WhatsApp", d: "Te respondemos el mismo día para entender brevemente tu situación." },
    { icon: <IconMessage className="w-5 h-5 lg:w-8 lg:h-8" />, t: "Consulta Inicial Sin Costo", d: "Evaluamos la viabilidad legal de tu caso con total honestidad." },
    { icon: <IconFileText className="w-5 h-5 lg:w-8 lg:h-8" />, t: "Propuesta Clara", d: "Te entregamos estrategia, tiempos estimados y honorarios por escrito." },
    { icon: <IconShield className="w-5 h-5 lg:w-8 lg:h-8" />, t: "Te Representamos", d: "Iniciamos la defensa con actualizaciones constantes del proceso." },
  ];

  return (
    <section id="proceso" className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
      <FadeIn>
        <div className="text-xs uppercase tracking-[0.3em] text-[#B0623B] mb-6 text-center">
          — Cómo trabajamos
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-balance mb-16 text-center">
          Un proceso claro en 4 pasos
        </h2>
        
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-4 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group pl-16 lg:pl-0">
              {/* Línea vertical conectora en móviles */}
              {i < steps.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-[-48px] w-0.5 bg-[#c9a84c]/30 lg:hidden z-0"></div>
              )}
              {/* Línea horizontal conectora en pantallas grandes */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-[#c9a84c]/30 z-0"></div>
              )}
              
              {/* Contenedor del Círculo */}
              <div className="absolute left-0 top-0 lg:relative w-10 h-10 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center text-[#1C2B22] border-2 border-[#c9a84c] shadow-sm mb-0 lg:mb-6 z-10 group-hover:bg-[#c9a84c] group-hover:text-white transition-colors duration-300 shrink-0">
                {s.icon}
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-5 h-5 lg:w-7 lg:h-7 bg-[#B0623B] text-white rounded-full flex items-center justify-center text-[10px] lg:text-xs font-bold border-2 border-white">
                  {i + 1}
                </div>
              </div>
              
              {/* Textos */}
              <div>
                <h3 className="font-serif text-lg lg:text-xl mb-1 lg:mb-3 text-[#1C2B22]">{s.t}</h3>
                <p className="text-xs lg:text-sm text-[oklch(0.45_0.015_120)] leading-relaxed lg:px-4">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

/* ── Results ─────────────────────────────────────── */
function Results() {
  return (
    <section className="bg-[#1C2B22] py-12 md:py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#c9a84c] via-transparent to-transparent"></div>
      <FadeIn className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 divide-x-0 md:divide-x divide-white/10 text-center">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-4xl md:text-5xl font-serif text-[#c9a84c] mb-2">+450</div>
            <div className="text-xs uppercase tracking-widest text-white/70">Casos Atendidos</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-4xl md:text-5xl font-serif text-[#c9a84c] mb-2">87%</div>
            <div className="text-xs uppercase tracking-widest text-white/70">Éxito en juicios</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-4xl md:text-5xl font-serif text-[#c9a84c] mb-2">200+</div>
            <div className="text-xs uppercase tracking-widest text-white/70">Amparos tramitados</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-4xl md:text-5xl font-serif text-[#c9a84c] mb-2">25</div>
            <div className="text-xs uppercase tracking-widest text-white/70">Años sin queja formal</div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ── FAQ ─────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    { q: "¿Cuánto cuesta una consulta?", a: "La primera consulta para evaluar la viabilidad de su caso es sin costo. Si decidimos tomar su caso, los honorarios se establecerán de forma transparente y por escrito." },
    { q: "¿En cuánto tiempo se resuelve mi caso?", a: "Depende del tipo de proceso. Un divorcio incausado puede tomar de 1 a 3 meses, mientras que un juicio laboral o amparo puede tomar más tiempo. Le daremos un estimado realista desde el primer día." },
    { q: "¿Cobran si pierdo el caso?", a: "Nuestros honorarios se dividen en una parte inicial para iniciar el proceso y una parte sujeta al éxito del mismo (cuota litis), lo cual detallaremos en nuestra propuesta para su tranquilidad." },
    { q: "¿Atienden fuera de Teziutlán?", a: "Sí, llevamos asuntos en Teziutlán, Chignautla, Xiutetelco, Hueyapan, Hueytamalco y juzgados de toda la región." },
    { q: "¿Puedo pagar en partes?", a: "Entendemos que un proceso legal no siempre está presupuestado. Ofrecemos planes de pago adaptados a las etapas del juicio." },
    { q: "¿Qué documentos llevo a la primera consulta?", a: "Le pediremos llevar cualquier documento relacionado con su problema (contratos, notificaciones, identificaciones, actas). Le indicaremos los específicos por WhatsApp antes de su cita." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[oklch(0.93_0.012_90)]/60 py-16 md:py-24">
      <FadeIn className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-[#B0623B] mb-6 text-center">
          — Preguntas Frecuentes
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-balance mb-12 text-center">
          Resolvemos sus dudas
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-serif text-lg text-[#1C2B22]">{faq.q}</span>
                <IconChevronDown className={`w-5 h-5 text-[#c9a84c] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === i ? '200px' : '0' }}
              >
                <div className="px-6 pb-5 text-sm text-[oklch(0.45_0.015_120)] leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

/* ── Coverage ────────────────────────────────────── */
function Coverage() {
  return (
    <section className="relative py-20 md:py-32 bg-[#111a15] overflow-hidden">
      {/* Background image - Catedral */}
      <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
        <img src={catedralImg} alt="Catedral de Teziutlán Puebla" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-900/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 text-center">
        <FadeIn>
          <div className="flex justify-center mb-6 text-[#c9a84c]"><IconShield /></div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Cobertura Regional
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Con sede en Teziutlán, atendemos estratégicamente casos en toda la región: 
            <strong className="text-white font-normal block mt-2"> Teziutlán, Chignautla, Xiutetelco, Hueyapan, Hueytamalco y sus alrededores.</strong>
          </p>
          <a
            href="https://maps.app.goo.gl/ZCTcuLwndC5VV6mz6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#1C2B22] font-bold px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-white transition-colors rounded-sm shadow-lg"
          >
            📍 Ver ubicación en Google Maps
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Contact ─────────────────────────────────────── */
function Contact() {
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="contacto" className="bg-[#1C2B22] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-12">
        <FadeIn className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.3em] text-[#c9a84c] mb-6">— Contacto</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-10 text-balance">
            Cuéntenos su caso.
          </h2>

          {/* Botón de dirección destacado */}
          <a
            href="https://maps.app.goo.gl/ZCTcuLwndC5VV6mz6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#1C2B22] font-semibold px-5 py-3 rounded-sm text-xs uppercase tracking-widest hover:bg-[#dbb95a] transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Ver dirección en Google Maps
          </a>

          <div className="space-y-6 text-sm">
            <InfoBlock label="Dirección">
              <a
                href="https://maps.app.goo.gl/ZCTcuLwndC5VV6mz6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Av. Miguel Hidalgo 408, Centro<br />73800 Teziutlán, Puebla
              </a>
            </InfoBlock>
            <InfoBlock label="WhatsApp">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                +52 1 231 122 1030
              </a>
            </InfoBlock>
            <InfoBlock label="Correo">
              <a href="mailto:lic.camachoteziutlan@hotmail.com" className="hover:text-white transition-colors">
                lic.camachoteziutlan@hotmail.com
              </a>
            </InfoBlock>
            <InfoBlock label="Horario">
              Lunes a viernes: 9:00 – 20:00<br />Sábados: 9:00 – 15:00
            </InfoBlock>
          </div>

          {/* Mapa en tiempo real */}
          <div className="mt-8 overflow-hidden border border-white/10">
            <iframe
              title="Ubicación Camacho Y Asociados Abogados"
              src="https://www.google.com/maps?q=Av+Miguel+Hidalgo+408,+Centro,+73800+Teziutl%C3%A1n,+Pue&output=embed&z=16"
              width="100%"
              height="220"
              style={{ border: 0, display: "block", filter: "grayscale(30%) invert(5%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Los enlaces sociales fueron movidos a la sección Practice */}
        </FadeIn>

        <FadeIn delay={150} className="md:col-span-6 md:col-start-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-6"
          >
            <CField label="Nombre completo" name="nombre" />
            <CField label="Teléfono" name="telefono" type="tel" />

            {/* Area selector */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/45 mb-2">
                Área de interés
              </label>
              <select
                name="area"
                className="w-full bg-transparent border-b border-white/20 focus:border-white/60 outline-none py-2 text-sm text-white/80 transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="text-black bg-white">Seleccione...</option>
                <option value="civil" className="text-black bg-white">Derecho Civil</option>
                <option value="familiar" className="text-black bg-white">Derecho Familiar</option>
                <option value="mercantil" className="text-black bg-white">Derecho Mercantil</option>
                <option value="laboral" className="text-black bg-white">Derecho Laboral</option>
                <option value="penal" className="text-black bg-white">Amparo y Penal</option>
                <option value="otro" className="text-black bg-white">No estoy seguro</option>
              </select>
            </div>

            {/* Context area */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/45 mb-2">
                Cuéntenos brevemente su situación
              </label>
              <textarea
                name="situacion"
                required
                rows={3}
                placeholder="Ej. Necesito ayuda con un trámite de divorcio..."
                className="w-full bg-transparent border-b border-white/20 focus:border-white/60 outline-none py-2 text-sm text-white/80 transition-colors resize-none placeholder-white/20"
              />
            </div>

            {/* Date picker */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/45 mb-2">
                Fecha preferida para la consulta
              </label>
              <input
                type="date"
                name="fecha"
                min={today}
                className="w-full bg-transparent border-b border-white/20 focus:border-white/60 outline-none py-2 text-sm text-white/80 transition-colors [color-scheme:dark]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#B0623B] text-white py-4 text-xs uppercase tracking-[0.3em] hover:bg-[#963f1e] transition-colors"
            >
              {sent ? "Mensaje enviado — le contactaremos pronto" : "Enviar consulta"}
            </button>
            <p className="text-xs text-white/30 leading-relaxed">
              La información compartida es estrictamente confidencial.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function CField({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-white/45 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="w-full bg-transparent border-b border-white/20 focus:border-white/60 outline-none py-2 text-sm text-white/80 transition-colors"
      />
    </div>
  );
}

function InfoBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] mb-1">{label}</div>
      <div className="text-white/65 leading-relaxed">{children}</div>
    </div>
  );
}

/* ── Footer ──────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#111a15] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/35 tracking-wide">
        <div className="font-serif text-sm text-[#c9a84c]">Camacho Y Asociados Abogados</div>
        <div>© {new Date().getFullYear()} — Todos los derechos reservados.</div>
        <div className="uppercase tracking-[0.25em]">Teziutlán · Puebla · México</div>
      </div>
    </footer>
  );
}
