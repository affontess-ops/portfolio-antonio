import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="font-display font-bold text-lg tracking-tight">
          Antonio Fontes<span className="text-cyan">.</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            className="px-3 py-2 rounded-md hover:bg-surface transition-colors [&.active]:text-cyan [&.active]:bg-surface"
            activeOptions={{ exact: true }}
          >
            Currículo
          </Link>
          <Link
            to="/portfolio"
            className="px-3 py-2 rounded-md hover:bg-surface transition-colors [&.active]:text-cyan [&.active]:bg-surface"
          >
            Portfólio
          </Link>
          <a
            href="mailto:comfontes@gmail.com"
            className="ml-2 hidden sm:inline-flex px-4 py-2 rounded-md bg-cyan text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-page py-10 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Antonio Fontes · Teresina · PI</div>
        <div className="flex gap-4">
          <a href="mailto:comfontes@gmail.com" className="hover:text-cyan">comfontes@gmail.com</a>
          <a href="https://linkedin.com/in/antonio-fontes-silva" target="_blank" rel="noreferrer" className="hover:text-cyan">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
