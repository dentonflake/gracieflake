export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#research", label: "Research" },
    { href: "#publications", label: "Publications" },
    { href: "#awards", label: "Awards" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: "rgba(250,248,242,0.92)", borderBottom: "1px solid var(--warm-200)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <a
          href="#hero"
          className="font-display text-lg font-semibold shrink-0"
          style={{ color: "var(--olive-dark)" }}
        >
          Gracie Flake
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: "var(--text-mid)" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-[--olive]"
              style={{ color: "var(--text-mid)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="/CV.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-80 shrink-0"
          style={{ backgroundColor: "var(--olive)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>
      </div>
    </nav>
  );
}
