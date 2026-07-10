import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terminos")({
  component: Terminos,
  head: () => ({
    meta: [{ title: "Términos y Condiciones | Camacho Y Asociados" }],
  }),
});

function Terminos() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.008_90)] text-[#1C2B22] font-sans selection:bg-[#B0623B] selection:text-white">
      <header className="bg-[#1C2B22] py-12 md:py-16 text-center border-b-[4px] border-[#c9a84c]">
        <Link to="/" className="inline-flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors mb-6">
          ← Volver al inicio
        </Link>
        <h1 className="text-3xl md:text-5xl font-serif text-white px-4">Términos y Condiciones de Uso</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-sm md:text-base leading-relaxed text-[oklch(0.35_0.015_120)]">
        <section className="mb-12 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-black/5">
          <h2 className="text-2xl font-serif text-[#1C2B22] mb-4 border-b border-black/10 pb-4">1. Exclusión de Garantía de Resultados (Obligación de Medios)</h2>
          <p className="mb-4">
            De conformidad con la legislación aplicable y la ética profesional de la abogacía en México, las obligaciones contraídas por <strong>Camacho Y Asociados Abogados</strong> al asumir una representación legal son estrictamente <strong>"obligaciones de medios" y no de "resultados"</strong>. 
          </p>
          <p className="mb-4">
            Nos comprometemos a aplicar todos nuestros conocimientos legales, experiencia, capacidad y debida diligencia en la defensa de sus intereses, así como agotar los recursos legales viables. Sin embargo, <strong>no garantizamos, prometemos ni aseguramos un resultado específico, absolución, resolución favorable o el éxito absoluto</strong> en ningún procedimiento judicial, ya que la resolución final depende enteramente del criterio y fallo de la autoridad jurisdiccional o administrativa competente.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-serif text-[#1C2B22] mb-4">2. Naturaleza Informativa del Sitio Web</h2>
          <p className="mb-4">
            El contenido de este sitio web (camachoyasociados.com) es de carácter estrictamente informativo. La visita, lectura, descarga o el envío de información a través de formularios de contacto <strong>NO establece ni constituye una relación formal abogado-cliente</strong>. Una relación legal oficial y vinculante únicamente se establece posterior a la firma física de un contrato de prestación de servicios profesionales y/o el pago formal de los honorarios correspondientes a una consulta.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-serif text-[#1C2B22] mb-4">3. Privacidad y Encriptación (Comunicaciones Seguras)</h2>
          <p className="mb-4">
            Reconociendo la confidencialidad absoluta que requiere todo asunto legal, informamos que <strong>todas las comunicaciones iniciadas desde nuestro sitio web hacia nuestros canales de WhatsApp están protegidas por el cifrado de extremo a extremo</strong> nativo de la plataforma. 
          </p>
          <p className="mb-4">
            Ningún tercero, incluido este sitio web, desarrolladores, ni el proveedor de alojamiento, puede interceptar o leer sus mensajes. Al utilizar nuestros formularios de contacto, usted autoriza expresamente a nuestro despacho a contactarlo de vuelta de manera segura para evaluar preliminarmente su situación legal.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-serif text-[#1C2B22] mb-4">4. Limitación de Responsabilidad</h2>
          <p className="mb-4">
            El despacho no asume responsabilidad alguna por daños directos o indirectos derivados de la interpretación o uso de la información general contenida en este sitio web. Las leyes y jurisprudencias cambian de manera constante; en consecuencia, la información plasmada podría no reflejar las reformas legales más recientes. Es imperativo agendar una consulta formal antes de ejecutar cualquier acción o decisión legal basándose en el contenido de esta página.
          </p>
        </section>
      </main>
      
      <footer className="bg-[#111a15] border-t border-white/10 text-center py-8 text-xs text-white/35">
        <p>© {new Date().getFullYear()} Camacho Y Asociados Abogados — Todos los derechos reservados.</p>
        <p className="mt-2 text-[10px] uppercase tracking-widest text-[#c9a84c]">Teziutlán · Puebla</p>
      </footer>
    </div>
  );
}
