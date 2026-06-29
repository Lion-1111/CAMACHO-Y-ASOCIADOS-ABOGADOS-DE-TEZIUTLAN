import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import heroOffice from "@/assets/hero-office.jpg";
import eagleEmblem from "@/assets/user-eagle-clean.png";
import catedralImg from "@/assets/catedral-teziutlan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camacho Y Asociados Abogados — Despacho Legal en Teziutlán" },
      { name: "description", content: "Despacho jurídico en Teziutlán, Puebla. Asesoría legal especializada con integridad, ética y profesionalismo." },
      { property: "og:title", content: "Camacho Y Asociados Abogados" },
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

  if (!text) return null; // No mostrar nada hasta calcular

  return (
    <span className="flex items-center gap-1.5 font-sans tracking-widest text-[10px] sm:text-xs">
      <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500/80'}`}></span>
      <span className="text-white/80">{text}</span>
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
const IconScales = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21" /><line x1="3" y1="6" x2="21" y2="6" />
    <path d="M6 10l-3 7h6l-3-7z" /><path d="M18 10l-3 7h6l-3-7z" />
  </svg>
);
const IconHome = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconBriefcase = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);
const IconUser = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconShield = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const IconGoogle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.8 10.2H12v3.6h5.6c-.5 2.5-2.7 4.2-5.6 4.2a6 6 0 010-12c1.5 0 2.9.6 4 1.5l2.6-2.6A10 10 0 1022 12c0-.6-.1-1.2-.2-1.8z" />
  </svg>
);
const IconStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#B0623B]">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconStarOutline = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#B0623B]">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
      <Reviews />
      <Team />
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
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-md border border-[#c9a84c] text-[#1C2B22] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-[#1C2B22] hover:text-[#c9a84c] transition-all duration-300"
      aria-label="Agendar Asesoría por WhatsApp"
    >
      <IconWhatsApp />
      <span className="text-[11px] font-bold uppercase tracking-widest hidden sm:block">
        Agendar Asesoría
      </span>
    </a>
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
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pb-20 md:pb-28 w-full">
        <div className="max-w-3xl">
          <FadeIn delay={100}>
            <div className="text-xs uppercase tracking-[0.3em] text-[#c9a84c] mb-6 flex flex-wrap items-center gap-3">
              <span>Teziutlán · Puebla · Desde 1998</span>
              <span className="hidden sm:inline-block text-[#c9a84c]/50 text-[6px]">◆</span>
              <BusinessStatus />
            </div>
          </FadeIn>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white text-balance">
            <FadeIn delay={200}>Defendemos</FadeIn>
            <FadeIn delay={300}>tu caso en toda</FadeIn>
            <FadeIn delay={400} className="text-[#c9a84c]">la región.</FadeIn>
          </h1>
          
          <FadeIn delay={500}>
            <p className="mt-8 max-w-xl text-base md:text-lg text-white/80 leading-relaxed font-medium">
              El despacho jurídico de referencia en Teziutlán. Resultados claros, estrategia precisa y la defensa penal, civil y familiar que tu caso merece.
            </p>
          </FadeIn>
          
          <FadeIn delay={600}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#1C2B22] font-bold px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-[#dbb95a] transition-colors rounded-sm shadow-lg"
              >
                <IconWhatsApp />
                Agendar Consulta
              </a>
              <a
                href="https://maps.app.goo.gl/ZCTcuLwndC5VV6mz6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#1C2B22] font-bold px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-gray-100 transition-colors rounded-sm shadow-lg"
              >
                📍 Ver dirección
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
    <section id="nosotros" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
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
          
          <div className="md:col-span-6 md:col-start-7 grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <div className="text-[#c9a84c] mb-4"><IconShield /></div>
              <h4 className="font-serif text-xl mb-2">Confidencialidad</h4>
              <p className="text-sm text-gray-500">Garantizada desde su primera llamada. Su información está segura.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <div className="text-[#c9a84c] mb-4">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h4 className="font-serif text-xl mb-2">Respuesta Rápida</h4>
              <p className="text-sm text-gray-500">Atención prioritaria y respuestas claras el mismo día.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <div className="text-[#c9a84c] mb-4"><IconHome /></div>
              <h4 className="font-serif text-xl mb-2">Presencia Local</h4>
              <p className="text-sm text-gray-500">Despacho establecido en Teziutlán con amplio conocimiento de la región.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <div className="text-[#c9a84c] mb-4"><IconUser /></div>
              <h4 className="font-serif text-xl mb-2">Consulta inicial</h4>
              <p className="text-sm text-gray-500">Analizamos la viabilidad de su caso con honestidad y transparencia.</p>
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
    { icon: <IconScales />, t: "Derecho Civil", d: "Contratos, propiedad, arrendamientos y conflictos entre particulares." },
    { icon: <IconHome />, t: "Derecho Familiar", d: "Divorcios, pensión alimenticia, custodia y sucesiones." },
    { icon: <IconBriefcase />, t: "Derecho Mercantil", d: "Constitución de empresas, contratos comerciales y cobranza." },
    { icon: <IconUser />, t: "Derecho Laboral", d: "Despidos injustificados, finiquitos y demandas ante la junta." },
    { icon: <IconShield />, t: "Amparo y Penal", d: "Defensa penal y juicios de amparo ante actos de autoridad." },
  ];

  return (
    <section id="practica" className="mx-auto max-w-7xl px-6 md:px-10 pb-24 md:pb-32">
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

        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance max-w-xl">
          Cinco áreas, un mismo nivel de atención.
        </h2>
        <p className="text-[oklch(0.45_0.015_120)] mb-12 max-w-lg text-base">
          No están ordenadas por importancia — cada una recibe el mismo cuidado,
          sea cual sea el motivo de su consulta.
        </p>
      </FadeIn>

      {/* Grid para móvil y escritorio (eliminado carrusel horizontal) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-px md:bg-[oklch(0.86_0.012_90)] mt-8">
        {areas.map((a, i) => (
          <FadeIn key={a.t} delay={i * 100} className="h-full">
            <div className="bg-[#E6EAE6] md:bg-[oklch(0.97_0.008_90)] border border-black/5 md:border-none p-8 md:p-10 h-full flex flex-col rounded-xl md:rounded-none relative overflow-hidden group">
              <span className="absolute top-6 right-6 text-[10px] font-bold text-black/10">0{i + 1}</span>
              <div className="text-[oklch(0.35_0.015_150)] mb-5 transition-transform group-hover:scale-110 group-hover:text-[#B0623B] duration-300 origin-left">{a.icon}</div>
              <h3 className="font-serif text-xl mb-2">{a.t}</h3>
              <p className="text-sm text-[oklch(0.45_0.015_120)] leading-relaxed">{a.d}</p>
            </div>
          </FadeIn>
        ))}

        {/* CTA card */}
        <FadeIn delay={areas.length * 100} className="h-full sm:col-span-2 lg:col-span-1">
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
      name: "José Eliuh Guzmán Flores",
      badge: "Local Guide",
      stars: 5,
      text: "Te tratan de la mejor manera, te atienden rápido y te resuelven de la misma manera, los Lic. Te hacen qué todo sea comprensible Y si dan resultados."
    },
    {
      name: "Hector Bello",
      badge: "Local Guide",
      stars: 4,
      text: "Buen trato a las personas, muy profesionales"
    {
      name: "Jose Alfredo Ramirez",
      badge: "NUEVA",
      stars: 5,
      text: "Tuve mi primera asesoría y me dieron un panorama realista, . Me explicaron costos y tiempos desde el día uno. Se agradece la honestidad."
    },
    // Repetimos para el efecto de carrusel infinito
    {
      name: "José Eliuh Guzmán Flores",
      badge: "Local Guide",
      stars: 5,
      text: "Te tratan de la mejor manera, te atienden rápido y te resuelven de la misma manera, los Lic. Te hacen qué todo sea comprensible Y si dan resultados."
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
              <IconGoogle /> {r.badge}
            </p>
          </div>
        </div>
        <div className="flex gap-1 mb-4 text-[#B0623B]">
          {[...Array(5)].map((_, i) => (
            i < r.stars ? <IconStar key={i} /> : <IconStarOutline key={i} />
          ))}
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
    <section className="py-20 md:py-28 bg-[#f0ece1] border-y border-[oklch(0.86_0.012_90)] overflow-hidden">
      <FadeIn className="mx-auto max-w-7xl px-6 md:px-10 mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-balance mb-4 text-center">
          Lo que dicen quienes ya nos consultaron
        </h2>
        <p className="text-center text-sm text-[oklch(0.45_0.015_120)] max-w-xl mx-auto">
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
    <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
      <FadeIn>
        <div className="text-xs uppercase tracking-[0.3em] text-[#B0623B] mb-6">
          — Nuestro Equipo
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
             {/* Placeholder para foto del abogado */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <IconUser />
              <p className="mt-4 text-sm font-medium uppercase tracking-widest">[Foto del Abogado]</p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-balance mb-6">
              Licenciado Camacho
            </h2>
            <div className="space-y-4 text-base text-[oklch(0.45_0.015_120)] leading-relaxed">
              <p>
                Con más de 25 años de experiencia litigando en la región, dirigiendo defensas estratégicas en materia Penal, Civil, Familiar y Mercantil.
              </p>
              <p>
                Comprometido con la ética profesional y la transparencia, garantizando que cada cliente entienda su situación y las opciones viables para resolver su conflicto legal.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-black/10">
              <p className="text-sm font-semibold text-[#1C2B22] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-[#c9a84c] rounded-full"></span>
                Atención directa y personalizada
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ── Coverage ────────────────────────────────────── */
function Coverage() {
  return (
    <section className="relative py-32 bg-[#111a15] overflow-hidden">
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
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
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
