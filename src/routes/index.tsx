import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Blocks,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Globe2,
  Layers3,
  Lightbulb,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Send,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEXA | Software, diseño web y soluciones digitales" },
      { name: "description", content: "DEXA diseña y desarrolla software, páginas web y soluciones digitales personalizadas para convertir ideas en productos reales." },
      { property: "og:title", content: "DEXA | Software y experiencias digitales" },
      { property: "og:description", content: "Diseño y desarrollo de soluciones digitales modernas, funcionales y hechas a la medida." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Inicio", "#inicio"], ["Servicios", "#servicios"], ["Nosotros", "#nosotros"],
  ["Proyectos", "#proyectos"], ["Contacto", "#contacto"],
];

const services = [
  { icon: Globe2, title: "Desarrollo Web", text: "Sitios modernos, rápidos y responsive, optimizados para ofrecer una experiencia excepcional." },
  { icon: Code2, title: "Software a medida", text: "Sistemas y aplicaciones adaptados a los procesos y necesidades específicas de cada proyecto." },
  { icon: PenTool, title: "Diseño UI/UX", text: "Interfaces intuitivas, claras y atractivas, centradas en lo que tus usuarios realmente necesitan." },
  { icon: Blocks, title: "Soluciones digitales", text: "Tecnología y creatividad para convertir problemas de negocio en soluciones que generan valor." },
];

const projects = [
  { number: "01", tag: "E-commerce", title: "Comercio sin fricción", text: "Plataforma moderna preparada para ofrecer una experiencia de compra clara y eficiente." },
  { number: "02", tag: "Landing Page", title: "Una marca que conecta", text: "Página de presentación enfocada en comunicar valor y convertir visitas en oportunidades." },
  { number: "03", tag: "Sistema empresarial", title: "Gestión más inteligente", text: "Software personalizado para organizar procesos y simplificar el trabajo diario." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
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
    <div className="overflow-x-hidden">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border/70 bg-background/90 shadow-sm backdrop-blur-xl" : "border-transparent bg-background/70"}`}>
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navegación principal">
          <a href="#inicio" className="flex items-center gap-2.5 text-xl font-extrabold text-brand-deep" aria-label="DEXA, inicio">
            <span className="grid size-8 grid-cols-2 gap-0.5 rounded-md bg-primary p-1.5" aria-hidden="true">
              <span className="rounded-sm bg-primary-foreground" /><span className="rounded-sm bg-primary-foreground/55" />
              <span className="rounded-sm bg-primary-foreground/55" /><span className="rounded-sm bg-primary-foreground" />
            </span>
            DEXA
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
            <Button asChild><a href="#contacto">Hablemos <ArrowRight className="size-4" /></a></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary">{label}</a>)}
              <Button asChild className="mt-3"><a href="#contacto" onClick={() => setMenuOpen(false)}>Hablemos <ArrowRight className="size-4" /></a></Button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative flex min-h-[92vh] scroll-mt-20 items-center overflow-hidden bg-background pb-14 pt-28">
          <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(to_right,var(--brand-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-line)_1px,transparent_1px)] bg-[size:68px_68px] opacity-[0.06]" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-brand-mist px-3.5 py-2 text-xs font-bold uppercase text-primary">
                <Sparkles className="size-3.5" /> Diseño + tecnología + estrategia
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-brand-deep sm:text-5xl lg:text-6xl xl:text-7xl">
                Creamos software y experiencias digitales que hacen avanzar tu negocio.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                En DEXA diseñamos y desarrollamos soluciones digitales modernas, funcionales y pensadas para convertir ideas en productos reales.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg"><a href="#servicios">Ver servicios <ArrowRight className="size-4" /></a></Button>
                <Button asChild variant="outline" size="lg"><a href="#contacto">Hablemos de tu proyecto</a></Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
                {['Diseño UI/UX', 'Desarrollo Web', 'Software a medida'].map((item) => <span key={item} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand-sky" />{item}</span>)}
              </div>
            </div>

            <div className="relative mx-auto hidden aspect-[1.06] w-full max-w-xl lg:block" aria-hidden="true">
              <div className="absolute inset-8 rounded-xl border border-primary/10 bg-brand-mist shadow-card" />
              <div className="animate-float-soft absolute left-0 top-10 w-[78%] rounded-lg border border-border bg-card p-4 shadow-card">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex gap-1.5"><span className="size-2 rounded-full bg-destructive/70" /><span className="size-2 rounded-full bg-accent" /><span className="size-2 rounded-full bg-primary/70" /></div>
                  <span className="text-[10px] font-bold text-muted-foreground">dexa / build</span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="h-2 w-2/5 rounded bg-primary/20" /><div className="ml-5 h-2 w-3/5 rounded bg-brand-sky/40" /><div className="ml-5 h-2 w-4/5 rounded bg-border" /><div className="h-2 w-1/2 rounded bg-primary/20" />
                </div>
                <div className="mt-7 grid grid-cols-3 gap-2"><span className="h-14 rounded bg-secondary" /><span className="h-14 rounded bg-primary/10" /><span className="h-14 rounded bg-secondary" /></div>
              </div>
              <div className="absolute bottom-7 right-0 w-[56%] rounded-lg bg-brand-deep p-5 text-primary-foreground shadow-card-hover">
                <div className="flex items-center justify-between"><MonitorSmartphone className="size-5 text-brand-sky" /><span className="rounded-full bg-primary/40 px-2 py-1 text-[9px] font-bold">ONLINE</span></div>
                <div className="mt-8 h-2 w-3/4 rounded bg-primary-foreground/25" /><div className="mt-2 h-2 w-1/2 rounded bg-primary-foreground/10" />
                <div className="mt-6 flex items-end gap-2"><span className="h-8 flex-1 rounded-sm bg-primary/50" /><span className="h-14 flex-1 rounded-sm bg-brand-sky/70" /><span className="h-11 flex-1 rounded-sm bg-primary/70" /><span className="h-18 flex-1 rounded-sm bg-brand-sky" /></div>
              </div>
              <div className="absolute right-6 top-3 grid size-14 place-items-center rounded-lg bg-primary text-primary-foreground shadow-button"><Code2 className="size-6" /></div>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-20 bg-secondary py-24 sm:py-30">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro eyebrow="Lo que hacemos" title="Soluciones digitales diseñadas para crecer contigo." text="Desde una idea inicial hasta una solución funcional, combinamos diseño, tecnología y estrategia para crear productos digitales de calidad." />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="group rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover">
                  <div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-md bg-brand-mist text-primary"><Icon className="size-5" /></span><span className="text-xs font-bold text-border">0{index + 1}</span></div>
                  <h3 className="mt-8 text-lg font-bold text-brand-deep">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                  <ChevronRight className="mt-6 size-4 text-primary transition-transform group-hover:translate-x-1" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="scroll-mt-20 bg-brand-deep py-24 text-primary-foreground sm:py-30">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
            <div><span className="text-xs font-bold uppercase text-brand-sky">Nuestra forma de trabajar</span><h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">Tecnología con propósito. Diseño con intención.</h2><p className="mt-6 max-w-xl leading-7 text-brand-muted">No se trata solamente de crear una página web. Construimos una experiencia digital que representa tu marca, conecta con tus clientes y ayuda a alcanzar tus objetivos.</p></div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-primary-foreground/10 bg-primary-foreground/10 sm:grid-cols-3">
              {[['01', 'Diseño', 'Interfaces modernas y experiencias intuitivas.'], ['02', 'Tecnología', 'Soluciones desarrolladas con tecnologías actuales.'], ['03', 'Resultados', 'Productos pensados para resolver necesidades reales.']].map(([number, title, text]) => <div key={number} className="bg-brand-deep p-7"><span className="text-xs font-bold text-brand-sky">{number}</span><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-background py-24 sm:py-30">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro eyebrow="Nuestro proceso" title="De la idea al producto." text="Un proceso claro, colaborativo y enfocado en avanzar con propósito en cada etapa." />
            <div className="relative mt-16 grid gap-8 md:grid-cols-4">
              <div className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-border md:block" />
              {[['Lightbulb', Lightbulb, 'Descubrimos', 'Entendemos tu idea, necesidades y objetivos.'], ['PenTool', PenTool, 'Diseñamos', 'Convertimos las ideas en una experiencia visual clara.'], ['Code2', Code2, 'Desarrollamos', 'Construimos una solución funcional, rápida y escalable.'], ['Rocket', Rocket, 'Lanzamos', 'Publicamos y dejamos tu producto listo para crecer.']].map(([, Icon, title, text], index) => <article key={title as string} className="relative"><div className="grid size-10 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-button"><Icon className="size-4" /></div><span className="mt-7 block text-xs font-bold text-primary">0{index + 1}</span><h3 className="mt-2 text-lg font-bold text-brand-deep">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p></article>)}
            </div>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-20 bg-secondary py-24 sm:py-30">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro eyebrow="Proyectos" title="Ideas convertidas en experiencias." text="Estos ejemplos muestran el tipo de soluciones que podemos construir. Cada espacio está preparado para incorporar tus proyectos reales." />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {projects.map((project) => <article key={project.number} className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-brand-deep">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-line)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                  <span className="relative text-7xl font-extrabold text-primary-foreground/10">{project.number}</span>
                  <span className="absolute bottom-4 left-4 rounded-md border border-primary-foreground/15 bg-brand-deeper px-3 py-1.5 text-[10px] font-bold uppercase text-brand-sky">Espacio para imagen</span>
                </div>
                <div className="p-6"><span className="text-xs font-bold uppercase text-primary">{project.tag}</span><h3 className="mt-3 text-xl font-bold text-brand-deep">{project.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{project.text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground">Ver proyecto <ExternalLink className="size-4" /></span></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="bg-background py-24 sm:py-30">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
            <div><span className="text-xs font-bold uppercase text-primary">¿Por qué DEXA?</span><h2 className="mt-5 text-3xl font-extrabold leading-tight text-brand-deep sm:text-5xl">Una idea merece una buena experiencia digital.</h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">Trabajamos cada proyecto con claridad, atención al detalle y una visión centrada en lo que tu negocio necesita.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{['Diseño moderno', 'Código limpio', 'Experiencia responsive', 'Soluciones personalizadas', 'Comunicación cercana', 'Enfoque en resultados'].map((item) => <div key={item} className="flex items-center gap-3 rounded-md border border-border bg-card p-4"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-mist text-primary"><Check className="size-4" /></span><span className="text-sm font-semibold text-brand-deep">{item}</span></div>)}</div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
            <div><h2 className="text-3xl font-extrabold sm:text-4xl">¿Tienes una idea? Hagámosla realidad.</h2><p className="mt-3 max-w-2xl text-primary-foreground/80">Cuéntanos qué tienes en mente y encontremos juntos la mejor solución digital.</p></div>
            <Button asChild variant="light" size="lg" className="shrink-0"><a href="#contacto">Comenzar un proyecto <ArrowRight className="size-4" /></a></Button>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-20 bg-background py-24 sm:py-30">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr]">
            <div><span className="text-xs font-bold uppercase text-primary">Contacto</span><h2 className="mt-5 text-3xl font-extrabold leading-tight text-brand-deep sm:text-5xl">Hablemos de tu próximo proyecto.</h2><p className="mt-5 text-muted-foreground">Estamos listos para escuchar tu idea.</p>
              <div className="mt-10 space-y-4"><a className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary" href="mailto:naydaliseth78@gmail.com"><span className="grid size-10 place-items-center rounded-md bg-brand-mist text-primary"><Mail className="size-5" /></span>naydaliseth78@gmail.com</a><a className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary" href="https://wa.me/573212458330" target="_blank" rel="noreferrer"><span className="grid size-10 place-items-center rounded-md bg-brand-mist text-primary"><MessageCircle className="size-5" /></span>321 2458330</a></div>
              <Button asChild variant="outline" className="mt-8"><a href="https://wa.me/573212458330?text=Hola%20DEXA,%20quiero%20hablar%20sobre%20un%20proyecto" target="_blank" rel="noreferrer"><MessageCircle className="size-4" />Escribir por WhatsApp</a></Button>
            </div>
            <form onSubmit={submitForm} className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2"><Field label="Nombre" name="nombre" required placeholder="Tu nombre" /><Field label="Correo electrónico" name="email" required type="email" placeholder="tu@correo.com" /><Field label="Empresa" name="empresa" placeholder="Opcional" /><label className="grid gap-2 text-sm font-semibold text-brand-deep">Tipo de proyecto<select name="tipo" required defaultValue="" className="h-12 rounded-md border border-input bg-background px-3 text-sm font-normal text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"><option value="" disabled>Selecciona una opción</option><option>Página web</option><option>Software a medida</option><option>Diseño UI/UX</option><option>Otra solución</option></select></label></div>
              <label className="mt-5 grid gap-2 text-sm font-semibold text-brand-deep">Mensaje<textarea name="mensaje" required rows={5} placeholder="Cuéntanos brevemente sobre tu idea" className="resize-none rounded-md border border-input bg-background px-3 py-3 text-sm font-normal text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15" /></label>
              {sent && <p role="status" className="mt-5 rounded-md bg-brand-mist px-4 py-3 text-sm font-semibold text-primary">Mensaje preparado. Conectaremos el envío por correo próximamente.</p>}
              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto"><Send className="size-4" />Enviar mensaje</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-brand-deeper py-14 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-10 border-b border-primary-foreground/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]"><div><div className="text-xl font-extrabold">DEXA</div><p className="mt-3 text-sm text-brand-muted">Software · Diseño · Innovación</p></div><div><p className="text-xs font-bold uppercase text-brand-sky">Explorar</p><div className="mt-4 grid grid-cols-2 gap-2">{navItems.map(([label, href]) => <a key={label} href={href} className="text-sm text-brand-muted hover:text-primary-foreground">{label}</a>)}</div></div><div><p className="text-xs font-bold uppercase text-brand-sky">Contacto</p><a href="mailto:naydaliseth78@gmail.com" className="mt-4 block text-sm text-brand-muted hover:text-primary-foreground">naydaliseth78@gmail.com</a><a href="tel:+573212458330" className="mt-2 block text-sm text-brand-muted hover:text-primary-foreground">321 2458330</a></div></div><div className="pt-7 text-xs text-brand-muted">© 2026 DEXA. Todos los derechos reservados.</div></div>
      </footer>
    </div>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><span className="text-xs font-bold uppercase text-primary">{eyebrow}</span><h2 className="mt-5 text-3xl font-extrabold leading-tight text-brand-deep sm:text-5xl">{title}</h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{text}</p></div>;
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder: string }) {
  return <label className="grid gap-2 text-sm font-semibold text-brand-deep">{label}<input name={name} type={type} required={required} placeholder={placeholder} className="h-12 rounded-md border border-input bg-background px-3 text-sm font-normal text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15 invalid:not-placeholder-shown:border-destructive" /></label>;
}