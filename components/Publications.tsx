import { Section, SectionHeading } from "./Section";

const publications = [
  {
    type: "Honors Thesis",
    citation:
      "Thompson, G.; Parrott, J.; Weidner, L. (December 2024) A Developmental and Genomic Study of Blowfly (Diptera: Calliphoridae) Populations to Strengthen Forensic Entomology Baseline Data. Arizona State University — Barrett Honors College.",
    url: "https://keep.lib.asu.edu/items/199073",
  },
  {
    type: "Book Chapter",
    citation:
      "Parrott, J. J.; Brossia, A.; Thompson, G. (2025) Chapter 31: Death, History, and Archaeology. In Carrion Ecology, Evolution, and Their Applications, Second Edition. CRC Press. Boca Raton, FL.",
  },
  {
    type: "Abstract",
    citation:
      "Thompson, G.; Brossia, A.; Parrott, J.J. (2024) A Genetic Survey of Phoenix, AZ, Blow Fly (Diptera: Calliphoridae) Populations [abstract]. Proceedings of the 65th Annual Meeting of the Arizona-Nevada Academy of Sciences, Volume 56, Abstract #118.",
    url: "https://repository.arizona.edu/handle/10150/672280",
  },
];

const presentations = [
  {
    title: "A Developmental & Genomic Study to Strengthen Forensic Entomology Baseline Data",
    venues: [
      "American Academy of Forensic Sciences (AAFS), Baltimore, MD — Feb. 2025",
      "Entomological Society of America (ESA), Phoenix, AZ — Nov. 2024",
    ],
  },
  {
    title: "A Genetic Survey of Phoenix, AZ, Blow Fly (Diptera: Calliphoridae) Populations",
    venues: [
      "Entomological Society of America (ESA), Phoenix, AZ — Nov. 2024",
      "Entomological Society of America Pacific Branch (ESA), Waikoloa, HI — Apr. 2024",
      "65th Annual Meeting of Arizona-Nevada Academy of Science (ANAS), Glendale, AZ — Apr. 2024",
      "NCUIRE Research Symposium, Arizona State University — Apr. 2024",
    ],
  },
  {
    title: "Analysis of the Pollen Community at ASU West Valley",
    venues: ["NCUIRE Research Symposium, Arizona State University — Apr. 2024"],
  },
];

export default function Publications() {
  return (
    <Section id="publications" bg="parchment">
      <SectionHeading>Publications &amp; Presentations</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Publications */}
        <div>
          <h3 className="font-display text-xl font-semibold mb-6" style={{ color: "var(--olive-dark)" }}>
            Publications
          </h3>
          <div className="flex flex-col gap-5">
            {publications.map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{ backgroundColor: "var(--cream)", border: "1px solid var(--warm-200)" }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-wide uppercase px-2 py-0.5 rounded mb-3"
                  style={{ backgroundColor: "var(--olive-pale)", color: "var(--olive-dark)" }}
                >
                  {p.type}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {p.citation}
                </p>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs mt-2 hover:underline"
                    style={{ color: "var(--olive-mid)" }}
                  >
                    View publication
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Presentations */}
        <div>
          <h3 className="font-display text-xl font-semibold mb-6" style={{ color: "var(--olive-dark)" }}>
            Presentations
          </h3>
          <div className="flex flex-col gap-5">
            {presentations.map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{ backgroundColor: "var(--cream)", border: "1px solid var(--warm-200)" }}
              >
                <p className="font-medium text-sm mb-3 leading-snug italic" style={{ color: "var(--olive-dark)" }}>
                  &ldquo;{p.title}&rdquo;
                </p>
                <ul className="flex flex-col gap-1.5">
                  {p.venues.map((v, j) => (
                    <li key={j} className="flex gap-2 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ backgroundColor: "var(--olive-light)" }} />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
