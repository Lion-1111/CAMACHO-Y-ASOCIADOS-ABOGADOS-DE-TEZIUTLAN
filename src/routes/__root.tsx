import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Abogado en Teziutlán Puebla | Camacho y Asociados — Derecho Penal, Familiar, Civil" },
      { name: "description", content: "Despacho jurídico en Teziutlán, Puebla. Atendemos casos de Derecho Penal, Familiar, Civil, Mercantil y Laboral en Teziutlán, Chignautla, Xiutetelco, Hueyapan, Hueytamalco y sus alrededores. Más de 25 años de experiencia." },
      { name: "theme-color", content: "#1C2B22" },
      { name: "keywords", content: "abogado Teziutlán, abogado Puebla, abogado Chignautla, abogado Xiutetelco, derecho penal Teziutlán, derecho familiar Teziutlán, divorcios Teziutlán, defensa penal Puebla, asesoría jurídica Sierra Norte Puebla" },
      { property: "og:title", content: "Camacho y Asociados Abogados — Teziutlán, Puebla" },
      { property: "og:description", content: "Despacho jurídico de confianza en Teziutlán. Derecho Penal, Familiar, Civil, Mercantil y Laboral. Atendemos toda la Sierra Norte de Puebla." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Camacho y Asociados Abogados — Teziutlán, Puebla" },
      { name: "twitter:description", content: "Despacho jurídico de confianza en Teziutlán, Puebla. Más de 25 años de experiencia." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://camachoyasociados.com/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Camacho y Asociados Abogados",
          "image": "https://camachoyasociados.com/catedral-teziutlan.jpg",
          "url": "https://camachoyasociados.com/",
          "telephone": "+5212311221030",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Miguel Hidalgo 408, Centro",
            "addressLocality": "Teziutlán",
            "addressRegion": "Puebla",
            "postalCode": "73800",
            "addressCountry": "MX"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.816667,
            "longitude": -97.35
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "15:00"
            }
          ],
          "priceRange": "$$"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
