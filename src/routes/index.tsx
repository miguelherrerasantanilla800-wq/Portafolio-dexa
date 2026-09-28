import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Eye,
  Heart,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  MessageCircle,
  Palette,
  PartyPopper,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nayda Liseth | Invitaciones Digitales & Diseño Web" },
      {
        name: "description",
        content:
          "Invitaciones web interactivas para bodas, eventos y diseño de páginas personalizadas por Nayda Liseth.",
      },
      { property: "og:title", content: "Nayda Liseth | Invitaciones Digitales & Diseño Web" },
      {
        property: "og:description",
        content: "Invitaciones interactivas para bodas, quinceañeros y páginas web fáciles de compartir.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Inicio", "#inicio"],
  ["Ejemplo de Boda", "#muestras"],
  ["Servicios", "#servicios"],
  ["Cómo Funciona", "#como-funciona"],
  ["Sobre Mí", "#sobre-nayda"],
  ["Contacto", "#contacto"],
];

const workSamples = [
  {
    id: "sobre",
    title: "Apertura del Sobre",
    subtitle: "Tus invitados tocan la pantalla y el sobre se abre",
    badge: "Paso 1 · El Sobre",
    image: "/invitacion-sobre.png",
    description:
      "Una bienvenida interactiva. Al presionar el sobre, se abre suavemente con un sello personalizado con las iniciales de la pareja.",
    highlights: [
      "Animación suave al tocar la pantalla",
      "Sello con las iniciales de los novios",
      "Funciona perfecto en cualquier celular",
    ],
  },
  {
    id: "portada",
    title: "Portada y Mensaje",
    subtitle: "Nombres de los novios, frase especial y fecha",
    badge: "Paso 2 · Portada",
    image: "/invitacion-portada.png",
    description:
      "Presentación principal con tipografía elegante, mensaje o versículo para la boda y fecha de la celebración.",
    highlights: [
      "Nombres destacados con estilo caligráfico",
      "Efecto de hojas flotantes animadas",
      "Fecha clara del gran día",
    ],
  },
  {
    id: "dresscode",
    title: "Código de Vestimenta (Dress Code)",
    subtitle: "Muestra a los invitados cómo ir vestidos y los colores",
    badge: "Paso 3 · Vestimenta",
    image: "/invitacion-dresscode.png",
    description:
      "Guía visual sencilla para damas y caballeros con los tonos de ropa recomendados para que todos luzcan en armonía.",
    highlights: [
      "Muestras de los colores permitidos o sugeridos",
      "Recomendación para vestidos y trajes",
      "Evita preguntas repetitivas de los invitados",
    ],
  },
  {
    id: "mapa",
    title: "Ubicación y Cómo Llegar",
    subtitle: "Mapa con botón para abrir Google Maps o Waze",
    badge: "Paso 4 · Ubicación",
    image: "/invitacion-mapa.png",
    description:
      "Tus invitados pueden ver la ubicación exacta del lugar y abrir la ruta con un solo clic en su aplicación de mapas favorita.",
    highlights: [
      "Botón directo para abrir la ruta en el GPS",
      "Nombre del lugar y dirección exacta",
      "Llegada fácil sin perderse en el camino",
    ],
  },
];

const services = [
  {
    icon: Heart,
    title: "Invitaciones para Bodas",
    text: "Invitaciones interactivas con sobre animado, música, cuenta regresiva, mapa para llegar y confirmación por WhatsApp.",
  },
  {
    icon: PartyPopper,
    title: "15 Años y Eventos Especiales",
    text: "Diseños personalizados para quinceañeras, cumpleaños y eventos sociales listos para enviar por enlace a todos tus invitados.",
  },
  {
    icon: Palette,
    title: "Diseño 100% Personalizado",
    text: "Adaptamos los colores, fotos, fuentes y detalles al estilo y temática de tu fiesta.",
  },
  {
    icon: MapPin,
    title: "Páginas Web & Negocios",
    text: "Sitios web limpios, rápidos y atractivos para mostrar tus productos o servicios de forma profesional.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Cuéntame tu idea",
    text: "Me dices la fecha, el lugar, tus colores favoritos y los detalles que quieres incluir.",
  },
  {
    step: "2",
    title: "Diseño tu invitación",
    text: "Preparo la invitación web cuidando cada detalle y te la muestro para que des el visto bueno.",
  },
  {
    step: "3",
    title: "¡Lista para compartir!",
    text: "Te entrego tu enlace personalizado para que lo envíes a todos tus invitados por WhatsApp.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [activeSampleTab, setActiveSampleTab] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Lightbox Modal for Full View Images */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md transition-all animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-slate-950/80 text-white backdrop-blur-md transition hover:scale-105"
              aria-label="Cerrar vista previa"
            >
              <X className="size-5" />
            </button>
            <div className="max-h-[75vh] overflow-y-auto bg-slate-950 p-3 sm:p-6 flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] rounded-lg object-contain shadow-lg"
              />
            </div>
            <div className="border-t border-slate-800 bg-slate-900 p-5 text-white">
              <h3 className="text-base font-bold">{selectedImage.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-md py-3"
            : "border-b border-transparent bg-background/60 backdrop-blur-xs py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Navegación principal">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Nayda Liseth, inicio">
            <div className="size-10 overflow-hidden rounded-full border border-primary/40 shadow-xs">
              <img src="/nayda.png" alt="Nayda" className="size-full object-cover object-top" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-foreground">
                Nayda Liseth
              </span>
              <span className="text-[11px] text-muted-foreground font-medium">
                Invitaciones Digitales
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <Button asChild size="sm" className="bg-primary text-primary-foreground font-medium px-5 rounded-full shadow-xs">
              <a href="https://wa.me/573212458330?text=Hola%20Nayda,%20quiero%20cotizar%20una%20invitación%20digital" target="_blank" rel="noreferrer">
                <MessageCircle className="size-4 mr-1.5 text-emerald-300" /> WhatsApp
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </nav>

        {menuOpen && (
          <div className="border-t border-border bg-background px-6 py-5 md:hidden shadow-xl">
            <div className="flex flex-col gap-3">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {label}
                </a>
              ))}
              <Button asChild className="mt-2 bg-primary text-primary-foreground py-5 rounded-xl">
                <a href="https://wa.me/573212458330?text=Hola%20Nayda,%20quiero%20cotizar%20una%20invitación%20digital" target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 mr-1.5 text-emerald-300" /> Escribir por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="inicio" className="relative flex min-h-[88vh] scroll-mt-20 items-center overflow-hidden pb-16 pt-28 sm:pt-36">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-2xs">
                <Sparkles className="size-3.5 text-primary" />
                <span>Invitaciones interactivas para momentos inolvidables</span>
              </div>

              <h1 className="text-3xl font-extrabold leading-[1.15] text-foreground sm:text-5xl lg:text-5xl">
                Invitaciones digitales que <span className="font-serif italic font-normal text-primary">enamoran</span> a tus invitados.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Diseño invitaciones interactivas para bodas y eventos especiales, listas para enviar por WhatsApp con sobre animado, mapa, música y confirmación fácil.
              </p>

              {/* Simple Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-6 rounded-xl shadow-md">
                  <a href="https://wa.me/573212458330?text=Hola%20Nayda,%20me%20gustaría%20cotizar%20una%20invitación%20digital" target="_blank" rel="noreferrer">
                    <MessageCircle className="size-5 mr-2" /> Cotizar por WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border bg-card hover:bg-secondary px-6 py-6 rounded-xl">
                  <a href="#muestras">
                    Ver ejemplo en vivo <ArrowRight className="size-4 ml-1.5" />
                  </a>
                </Button>
              </div>

              {/* Natural Highlights */}
              <div className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground border-t border-border/80 pt-6 font-medium">
                <span className="flex items-center gap-1.5 text-foreground">
                  <Check className="size-4 text-emerald-600" /> Abre fácil en celular
                </span>
                <span className="flex items-center gap-1.5 text-foreground">
                  <Check className="size-4 text-emerald-600" /> Enlace para enviar por WhatsApp
                </span>
                <span className="flex items-center gap-1.5 text-foreground">
                  <Check className="size-4 text-emerald-600" /> Diseño personalizado
                </span>
              </div>
            </div>

            {/* Nayda's Portrait Card */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-950">
                  <img
                    src="/nayda.png"
                    alt="Nayda Liseth"
                    className="size-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 inset-x-4 text-white">
                    <p className="text-xl font-bold">Nayda Liseth</p>
                    <p className="text-xs text-slate-300">Diseñadora de invitaciones y páginas web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK SHOWCASE SECTION: Boda Stiven & Gisel */}
        <section id="muestras" className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28 border-y border-border">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Ejemplo Real
                </span>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-4xl">
                  Invitación de Boda · <span className="font-serif italic font-normal text-primary">Stiven & Gisel</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
                  Así es como tus invitados verán e interactuarán con tu invitación desde su teléfono.
                </p>
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-6 rounded-xl shadow-sm shrink-0">
                <a href="https://invitaciones-matrimonio-stiven-y-gi.vercel.app/" target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4 mr-2" /> Abrir Invitación en Vivo
                </a>
              </Button>
            </div>

            {/* Showcase Tabs */}
            <div className="mt-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {workSamples.map((sample, index) => {
                  const isActive = activeSampleTab === index;
                  return (
                    <button
                      key={sample.id}
                      onClick={() => setActiveSampleTab(index)}
                      className={`flex flex-col items-start rounded-2xl p-4 text-left transition ${
                        isActive
                          ? "bg-card shadow-md border-2 border-primary"
                          : "bg-card/70 hover:bg-card border border-border"
                      }`}
                    >
                      <span className="text-[11px] font-bold text-primary">
                        {sample.badge}
                      </span>
                      <h4 className={`mt-1 text-sm font-bold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                        {sample.title}
                      </h4>
                    </button>
                  );
                })}
              </div>

              {/* Main Preview Card */}
              <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] items-center">
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-2xl border border-border bg-slate-950 shadow-inner"
                    onClick={() =>
                      setSelectedImage({
                        src: workSamples[activeSampleTab].image,
                        title: workSamples[activeSampleTab].title,
                        desc: workSamples[activeSampleTab].description,
                      })
                    }
                  >
                    <img
                      src={workSamples[activeSampleTab].image}
                      alt={workSamples[activeSampleTab].title}
                      className="w-full max-h-[460px] object-cover object-center transition duration-500 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-md">
                        <Maximize2 className="size-3.5" /> Ampliar imagen
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-bold text-primary">
                        {workSamples[activeSampleTab].badge}
                      </span>
                      <h3 className="mt-1 text-xl sm:text-2xl font-bold text-foreground">
                        {workSamples[activeSampleTab].title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {workSamples[activeSampleTab].description}
                      </p>
                    </div>

                    <div className="space-y-2.5 rounded-xl bg-secondary/60 p-4 border border-border">
                      <p className="text-xs font-bold text-foreground uppercase tracking-wide">
                        Qué incluye esta sección:
                      </p>
                      {workSamples[activeSampleTab].highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                          <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5 rounded-xl">
                        <a href="https://invitaciones-matrimonio-stiven-y-gi.vercel.app/" target="_blank" rel="noreferrer">
                          <ExternalLink className="size-4 mr-1.5" /> Ver en vivo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() =>
                          setSelectedImage({
                            src: workSamples[activeSampleTab].image,
                            title: workSamples[activeSampleTab].title,
                            desc: workSamples[activeSampleTab].description,
                          })
                        }
                        className="font-medium rounded-xl"
                      >
                        <Eye className="size-4 mr-1.5" /> Ver foto completa
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Toca cualquier captura para verla en grande:
              </p>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                {workSamples.map((sample) => (
                  <div
                    key={sample.id}
                    onClick={() =>
                      setSelectedImage({
                        src: sample.image,
                        title: sample.title,
                        desc: sample.description,
                      })
                    }
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xs transition hover:shadow-md hover:border-primary/50"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-950">
                      <img
                        src={sample.image}
                        alt={sample.title}
                        className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-2">
                      <h5 className="text-xs font-bold text-foreground line-clamp-1">
                        {sample.title}
                      </h5>
                      <p className="text-[11px] text-muted-foreground">{sample.badge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES / WHAT I DO */}
        <section id="servicios" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Servicios</span>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-4xl">
                ¿Qué podemos crear juntos?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Diseños pensados para ser compartidos fácilmente por celular y sorprender a tus invitados.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-xs transition hover:shadow-md hover:-translate-y-1"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (3 SIMPLE STEPS) */}
        <section id="como-funciona" className="scroll-mt-20 bg-secondary/30 py-20 border-y border-border">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="text-center max-w-lg mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Fácil y Rápido</span>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                ¿Cómo tener tu invitación?
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-border bg-card p-6 shadow-xs"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT NAYDA */}
        <section id="sobre-nayda" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-8 sm:grid-cols-[.9fr_1.1fr] items-center">
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-md">
              <img
                src="/nayda.png"
                alt="Nayda Liseth"
                className="w-full rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Sobre Nayda Liseth
              </span>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Diseño con cariño para tus días más importantes.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Hola, soy Nayda. Me apasiona ayudar a parejas y familias a compartir la emoción de su boda, fiesta o evento mediante invitaciones digitales hermosas y fáciles de usar.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cada detalle se personaliza a tu estilo para que tus invitados tengan una linda experiencia desde el primer momento.
              </p>
              <div className="pt-2">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-6 py-5 shadow-sm">
                  <a href="https://wa.me/573212458330?text=Hola%20Nayda,%20quiero%20hacerte%20una%20consulta" target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4 mr-2" /> Escríbeme por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contacto" className="scroll-mt-20 bg-secondary/40 py-20 border-t border-border">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Contacto</span>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                Hablemos de tu invitación
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Escríbeme para cotizar tu fecha, consultar precios o resolver cualquier duda.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 text-sm font-medium transition hover:border-emerald-500"
                  href="https://wa.me/573212458330"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-5 text-emerald-600" />
                  <div>
                    <p className="text-[11px] text-muted-foreground">WhatsApp Directo</p>
                    <p className="font-bold text-foreground">+57 321 2458330</p>
                  </div>
                </a>

                <a
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 text-sm font-medium transition hover:border-primary"
                  href="mailto:naydaliseth78@gmail.com"
                >
                  <Mail className="size-5 text-primary" />
                  <div>
                    <p className="text-[11px] text-muted-foreground">Correo electrónico</p>
                    <p className="font-bold text-foreground">naydaliseth78@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Simple Form */}
            <form onSubmit={submitForm} className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-foreground mb-4">Envía un mensaje</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Tu nombre" name="nombre" required placeholder="Nombre completo" />
                <Field label="WhatsApp / Celular" name="telefono" required placeholder="+57 300 000 0000" />
                <Field label="Correo (opcional)" name="email" type="email" placeholder="tu@correo.com" />
                <label className="grid gap-1.5 text-xs font-semibold text-foreground">
                  Tipo de evento
                  <select
                    name="tipo"
                    required
                    defaultValue=""
                    className="h-11 rounded-lg border border-input bg-background px-3 text-sm font-normal text-foreground outline-none focus:border-primary"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option>Invitación de Boda</option>
                    <option>Invitación de Quinceañero</option>
                    <option>Invitación para Cumpleaños / Fiesta</option>
                    <option>Página Web para Negocio</option>
                    <option>Otro proyecto</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 grid gap-1.5 text-xs font-semibold text-foreground">
                ¿Qué te gustaría incluir o cuál es la fecha estimada?
                <textarea
                  name="mensaje"
                  required
                  rows={3}
                  placeholder="Ej: Boda para noviembre, queremos mapa, música y confirmación..."
                  className="resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </label>

              {sent && (
                <div role="status" className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-50 p-3 text-xs font-semibold text-emerald-800 flex items-center gap-2">
                  <Check className="size-4 text-emerald-600 shrink-0" />
                  ¡Mensaje enviado con éxito! Te responderé muy pronto.
                </div>
              )}

              <Button type="submit" size="lg" className="mt-5 w-full sm:w-auto bg-primary text-primary-foreground font-semibold px-6 py-5 rounded-xl">
                <Send className="size-4 mr-2" /> Enviar Mensaje
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card py-10 text-muted-foreground">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">Nayda Liseth</span>
            <span>·</span>
            <span>Invitaciones Digitales & Diseño Web</span>
          </div>
          <div>
            <span>Muestra de Boda: </span>
            <a
              href="https://invitaciones-matrimonio-stiven-y-gi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Boda Stiven & Gisel
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <label className="grid gap-1.5 text-xs font-semibold text-foreground">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-lg border border-input bg-background px-3 text-sm font-normal text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </label>
  );
}