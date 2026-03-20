import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-16 flex items-center" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 shrink-0" style={{ backgroundColor: "var(--olive)" }} />
              <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--olive-mid)" }}>
                Forensic Scientist
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight" style={{ color: "var(--olive-dark)" }}>
              Gracie<br />Flake
            </h1>

            <p className="text-xl font-medium" style={{ color: "var(--olive-mid)" }}>
              Serology &amp; Biological Evidence Analysis
            </p>

            <p className="text-base leading-relaxed max-w-prose" style={{ color: "var(--text-mid)" }}>
              Forensic Scientist with the Mesa Forensic Services Crime Laboratory, specializing in
              serology and body fluid identification. B.S. Forensic Science, Barrett the Honors
              College, Arizona State University. Currently undergoing DNA training — committed to
              accuracy, quality, and continuous professional development.
            </p>

            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Mesa, Arizona
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/gracieflake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: "var(--olive)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors"
                style={{ border: "1.5px solid var(--olive)", color: "var(--olive)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-full opacity-20"
                style={{ backgroundColor: "var(--olive-light)" }}
              />
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-30"
                style={{ backgroundColor: "var(--olive-pale)" }}
              />
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden"
                style={{ border: "4px solid var(--olive)", boxShadow: "0 20px 60px rgba(74,92,58,0.2)" }}
              >
                <Image
                  src="/profile.png"
                  alt="Gracie Flake"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
