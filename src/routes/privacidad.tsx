import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  component: Privacidad,
  head: () => ({
    meta: [{ title: "Políticas de Seguridad y Privacidad | Camacho Y Asociados" }],
  }),
});

function Privacidad() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.008_90)] text-[#1C2B22] font-sans selection:bg-[#B0623B] selection:text-white">
      <header className="bg-[#1C2B22] py-12 md:py-16 text-center border-b-[4px] border-[#c9a84c]">
        <Link to="/" className="inline-flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors mb-6">
          ← Volver al inicio
        </Link>
        <h1 className="text-3xl md:text-5xl font-serif text-white px-4">Políticas de Seguridad y Privacidad</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-sm md:text-base leading-relaxed text-[oklch(0.35_0.015_120)]">
        <section className="mb-12 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-black/5">
          <h2 className="text-2xl font-serif text-[#1C2B22] mb-4 border-b border-black/10 pb-4">1. Seguridad y Confidencialidad (Secreto Profesional)</h2>
          <p className="mb-4">
            En <strong>Camacho Y Asociados Abogados</strong>, la seguridad de la información de nuestros clientes es nuestra máxima prioridad. Su información legal y personal es tratada bajo los más estrictos estándares de confidencialidad y ética profesional.
          </p>
          <p className="mb-4">
            Implementamos medidas de seguridad administrativas, técnicas y físicas diseñadas para proteger sus expedientes, documentos y datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. <strong>Nuestro deber de secreto profesional garantiza que sus asuntos no serán divulgados a terceros bajo ninguna circunstancia</strong> sin su consentimiento expreso, a menos que exista un mandamiento judicial que lo exija.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-serif text-[#1C2B22] mb-4">2. Identidad y domicilio del Responsable</h2>
          <p className="mb-4">
            En estricto cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), somos responsables del uso y protección de sus datos personales. Nuestras oficinas se encuentran ubicadas en Teziutlán, Puebla, México.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-serif text-[#1C2B22] mb-4">3. Datos Personales que recabamos</h2>
          <p className="mb-4">Para llevar a cabo la adecuada defensa y representación legal, recabaremos:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Datos de identificación oficial (nombre completo, identificaciones, estado civil).</li>
            <li>Datos de contacto (teléfono, correo electrónico, domicilio).</li>
            <li>Datos patrimoniales, financieros o legales estrictamente necesarios para la prestación de los servicios de asesoría jurídica y litigio.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-serif text-[#1C2B22] mb-4">4. Finalidades del tratamiento</h2>
          <p className="mb-4">Sus datos serán utilizados exclusiva y únicamente para las siguientes finalidades:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Proveer los servicios de representación legal y defensa jurídica en tribunales.</li>
            <li>Elaborar contratos, convenios, demandas, amparos y demás instrumentos legales.</li>
            <li>Realizar trámites ante autoridades judiciales, notariales y administrativas.</li>
            <li>Mantener comunicación directa sobre el avance de su proceso legal.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-serif text-[#1C2B22] mb-4">5. Derechos ARCO</h2>
          <p className="mb-4">
            Usted tiene derecho a conocer qué datos personales tenemos de usted y las condiciones del uso que les damos (Acceso); solicitar la corrección de su información (Rectificación); que la eliminemos de nuestros registros al concluir su caso (Cancelación); así como oponerse al uso de sus datos para fines específicos (Oposición). Para ejercer estos derechos, puede comunicarse directamente con nosotros.
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
