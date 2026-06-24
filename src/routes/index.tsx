import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroOffice from "@/assets/hero-office.jpg";
import lawBooks from "@/assets/law-books.jpg";
import attorneys from "@/assets/attorneys.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camacho y Asociados Abogados — Despacho Legal en Teziutlán" },
      { name: "description", content: "Despacho jurídico en Teziutlán, Puebla. Asesoría legal especializada con integridad, ética y profesionalismo." },
      { property: "og:title", content: "Camacho y Asociados Abogados" },
      { property: "og:description", content: "Asesoría legal especializada en Teziutlán, Puebla." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Pillars />
      <Practice />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex items-center justify-between">
        <div className="font-serif text-lg tracking-wide text-foreground">
          Camacho <span className="text-muted-foreground">&amp;</span> Asociados
        </div>
        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#nosotros" className="hover:text-foreground transition-colors">Nosotros</a>
          <a href="#practica" className="hover:text-foreground transition-colors">Áreas</a>
          <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
        </nav>
        <a href="#contacto" className="text-xs uppercase tracking-[0.2em] border-b border-foreground/40 pb-1 hover:border-foreground transition">
          Consulta
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden">
      <img
        src={heroOffice}
        alt="Despacho legal"
        width={1600}
        height={1200}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pb-20 md:pb-28 w-full">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.06_80)] mb-6">
            Teziutlán · Puebla · Desde 1998
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-[oklch(0.97_0.008_90)] text-balance">
            Defendemos lo<br />
            <em className="text-[oklch(0.82_0.1_78)] font-normal">que es justo.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-[oklch(0.88_0.01_90)]/80 leading-relaxed">
            Despacho jurídico al servicio de quienes buscan una representación legal seria,
            estratégica y comprometida con el resultado.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 bg-[oklch(0.97_0.008_90)] text-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-[oklch(0.82_0.1_78)] transition-colors"
            >
              Agendar consulta
              <span aria-hidden>→</span>
            </a>
            <a href="tel:2311221030" className="text-sm text-[oklch(0.9_0.01_90)] tracking-wide">
              231 122 1030
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Derecho Civil",
    "Derecho Mercantil",
    "Derecho Familiar",
    "Derecho Laboral",
    "Amparo",
    "Derecho Penal",
    "Notarial",
  ];
  return (
    <div className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex flex-wrap items-center gap-x-10 gap-y-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {items.map((it, i) => (
          <span key={it} className="flex items-center gap-10">
            {it}
            {i < items.length - 1 && <span className="text-accent">◆</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          — Nosotros
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
          Una práctica construida sobre la <em className="text-[oklch(0.45_0.09_155)]">confianza</em>,
          la disciplina y el rigor.
        </h2>
      </div>
      <div className="md:col-span-6 md:col-start-7 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
        <p>
          Camacho y Asociados Abogados es un despacho jurídico independiente con sede en Teziutlán,
          Puebla. Atendemos a personas, familias y empresas que requieren asesoría legal precisa,
          honesta y orientada a soluciones reales.
        </p>
        <p>
          Nuestro compromiso no se limita a un perfil específico de cliente. Defendemos a cualquier
          persona que necesite representación justa y equitativa, con la misma seriedad con la que
          tratamos los asuntos más complejos.
        </p>
        <div className="grid grid-cols-3 gap-8 pt-8">
          <Stat n="25+" l="Años de práctica" />
          <Stat n="600+" l="Casos atendidos" />
          <Stat n="100%" l="Compromiso ético" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-3xl md:text-4xl text-foreground">{n}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{l}</div>
    </div>
  );
}

function Pillars() {
  const items = [
    {
      k: "Visión",
      t: "Ser referente jurídico en la región, con soluciones adaptadas a los desafíos legales actuales.",
    },
    {
      k: "Misión",
      t: "Brindar asesoría legal especializada y soluciones eficientes para satisfacer cada necesidad.",
    },
    {
      k: "Valores",
      t: "Defendemos los intereses de nuestros clientes con integridad, ética y profesionalismo.",
    },
  ];
  return (
    <section className="bg-[oklch(0.16_0.012_150)] text-[oklch(0.95_0.008_90)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-3 gap-px bg-[oklch(0.95_0.008_90)]/10">
        {items.map((it) => (
          <div key={it.k} className="bg-[oklch(0.16_0.012_150)] p-10 md:p-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[oklch(0.82_0.1_78)] mb-8">
              {it.k}
            </div>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-balance">
              {it.t}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Practice() {
  const areas = [
    { n: "01", t: "Derecho Civil", d: "Contratos, sucesiones, arrendamientos y responsabilidad civil." },
    { n: "02", t: "Derecho Familiar", d: "Divorcios, custodias, pensiones y régimen patrimonial." },
    { n: "03", t: "Derecho Mercantil", d: "Constitución de sociedades, contratos y cobranza judicial." },
    { n: "04", t: "Derecho Laboral", d: "Defensa de trabajadores y patrones ante autoridades laborales." },
    { n: "05", t: "Amparo", d: "Protección de derechos fundamentales frente a actos de autoridad." },
    { n: "06", t: "Derecho Penal", d: "Defensa técnica especializada en el sistema acusatorio." },
  ];
  return (
    <section id="practica" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-36">
      <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            — Áreas de práctica
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            Atención jurídica con criterio<br />
            y profundidad técnica.
          </h2>
        </div>
        <div className="md:col-span-4 md:col-start-9 text-muted-foreground">
          Cada asunto se estudia, se planea y se defiende con la dedicación que merece.
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {areas.map((a) => (
          <article key={a.n} className="bg-background p-8 md:p-10 group transition-colors hover:bg-secondary/40">
            <div className="flex items-baseline justify-between mb-6">
              <span className="font-serif text-xs text-accent tracking-widest">{a.n}</span>
              <span className="text-foreground opacity-0 group-hover:opacity-100 transition">→</span>
            </div>
            <h3 className="font-serif text-2xl mb-3">{a.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-[560px]">
          <img
            src={lawBooks}
            alt="Volúmenes jurídicos"
            width={1200}
            height={1500}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-[oklch(0.22_0.02_150)] text-[oklch(0.95_0.008_90)] flex items-center p-10 md:p-20">
          <div>
            <div className="font-serif text-5xl md:text-6xl text-[oklch(0.82_0.1_78)] leading-none mb-6">
              “
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-balance">
              La justicia no se improvisa: se prepara con estudio, se sostiene con
              argumentos y se defiende con coraje.
            </blockquote>
            <div className="mt-10 text-xs uppercase tracking-[0.3em] text-[oklch(0.82_0.1_78)]">
              — Filosofía del despacho
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          — Contacto
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance mb-10">
          Cuéntenos su caso. Le respondemos en menos de 24 horas.
        </h2>

        <div className="space-y-6 text-sm">
          <Info label="Dirección">
            Av. Miguel Hidalgo 408, Centro<br />
            73800 Teziutlán, Puebla
          </Info>
          <Info label="Teléfono">
            <a href="tel:2311221030" className="hover:text-accent transition-colors">231 122 1030</a>
          </Info>
          <Info label="Correo">
            <a href="mailto:contacto@camachoyasociados.com" className="hover:text-accent transition-colors">
              contacto@camachoyasociados.com
            </a>
          </Info>
        </div>

        <img
          src={attorneys}
          alt="Atención al cliente"
          width={1400}
          height={1000}
          loading="lazy"
          className="mt-12 w-full h-64 object-cover grayscale-[20%]"
        />
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="md:col-span-6 md:col-start-7 bg-card border border-border p-8 md:p-10 space-y-6"
      >
        <Field label="Nombre completo" name="nombre" />
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Teléfono" name="telefono" type="tel" />
          <Field label="Correo" name="correo" type="email" />
        </div>
        <Field label="Asunto" name="asunto" />
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Describa su caso
          </label>
          <textarea
            name="mensaje"
            rows={5}
            required
            className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base resize-none transition-colors"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-foreground text-background py-4 text-xs uppercase tracking-[0.3em] hover:bg-[oklch(0.32_0.06_155)] transition-colors"
        >
          {sent ? "Mensaje enviado ✓" : "Enviar consulta"}
        </button>
        <p className="text-xs text-muted-foreground leading-relaxed">
          La información compartida en este formulario es estrictamente confidencial y
          se utiliza únicamente para responder a su consulta.
        </p>
      </form>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base transition-colors"
      />
    </div>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-accent mb-2">{label}</div>
      <div className="text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground tracking-wide">
        <div className="font-serif text-base text-foreground">
          Camacho &amp; Asociados Abogados
        </div>
        <div>© {new Date().getFullYear()} — Todos los derechos reservados.</div>
        <div className="uppercase tracking-[0.25em]">Teziutlán · Puebla · México</div>
      </div>
    </footer>
  );
}
