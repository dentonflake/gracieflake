import { Section } from "./Section";

export default function Contact() {
  return (
    <Section id="contact" bg="dark">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
        <div>
          <h2 className="font-display text-4xl font-bold mb-3" style={{ color: "var(--cream)" }}>
            Get in Touch
          </h2>
          <div className="h-1 w-12 rounded-full mx-auto" style={{ backgroundColor: "var(--olive-light)" }} />
        </div>
        <p className="text-base leading-relaxed" style={{ color: "var(--olive-pale)" }}>
          I welcome opportunities to collaborate within the forensic science community — whether
          in research, casework consultation, or professional development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="mailto:graciesthompson@icloud.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--olive)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/gracieflake"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            style={{ border: "1.5px solid var(--olive-mid)", color: "var(--olive-pale)" }}
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            style={{ border: "1.5px solid var(--olive-mid)", color: "var(--olive-pale)" }}
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
    </Section>
  );
}
