import Image from "next/image";

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
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

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
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

// ─── Section wrapper ─────────────────────────────────────────────────────────

function Section({
  id,
  bg = "cream",
  children,
}: {
  id: string;
  bg?: "cream" | "dark" | "parchment" | "white";
  children: React.ReactNode;
}) {
  const backgrounds: Record<string, string> = {
    cream: "var(--cream)",
    dark: "var(--olive-dark)",
    parchment: "var(--parchment)",
    white: "#ffffff",
  };
  return (
    <section id={id} style={{ backgroundColor: backgrounds[bg] }} className="py-24">
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="mb-14">
      <h2
        className="font-display text-4xl font-bold mb-3"
        style={{ color: light ? "var(--cream)" : "var(--olive-dark)" }}
      >
        {children}
      </h2>
      <div className="h-1 w-12 rounded-full" style={{ backgroundColor: light ? "var(--olive-light)" : "var(--olive)" }} />
    </div>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const stats = [
    { value: "4.19", label: "GPA at ASU" },
    { value: "2 yrs", label: "Undergraduate Research" },
    { value: "4", label: "Research Projects" },
    { value: "7+", label: "Presentations" },
  ];

  return (
    <Section id="about" bg="parchment">
      <SectionHeading>About</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 flex flex-col gap-5">
          <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
            I am a Forensic Scientist with the Mesa Forensic Services Crime Laboratory, specializing
            in serology and body fluid identification, with a B.S. in Forensic Science from Arizona
            State University&apos;s Barrett, The Honors College. My work focuses on the analysis of
            bodily fluids and evidence processing within an accredited crime laboratory.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
            I completed an eight-month internship with the Arizona Department of Public Safety Crime
            Lab and spent two years as an undergraduate researcher in ASU&apos;s Forensic
            Entomology/Genetics Research Lab, contributing to four projects, multiple presentations,
            and peer-reviewed publications. I am detail-oriented, methodical, and currently
            undergoing DNA training, with a strong commitment to accuracy, quality, and continuous
            professional development.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
            I welcome opportunities to collaborate within the forensic science community.
          </p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1 p-5 rounded-2xl"
              style={{ backgroundColor: "var(--cream)", border: "1px solid var(--warm-200)" }}
            >
              <span className="font-display text-3xl font-bold" style={{ color: "var(--olive)" }}>
                {s.value}
              </span>
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Experience ──────────────────────────────────────────────────────────────

function ExperienceCard({
  role,
  org,
  dates,
  location,
  skills,
  bullets,
  current = false,
}: {
  role: string;
  org: string;
  dates: string;
  location: string;
  skills?: string;
  bullets: string[];
  current?: boolean;
}) {
  return (
    <div
      className="relative pl-8 pb-12 last:pb-0"
      style={{ borderLeft: "2px solid var(--olive-mid)" }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-[-9px] top-1 w-4 h-4 rounded-full"
        style={{ backgroundColor: current ? "var(--olive-pale)" : "var(--olive-mid)", border: "2px solid var(--olive-dark)" }}
      />

      <div
        className="rounded-2xl p-6 flex flex-col gap-4"
        style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-lg" style={{ color: "var(--cream)" }}>
                {role}
              </h3>
              {current && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ backgroundColor: "var(--olive-mid)", color: "var(--olive-pale)" }}
                >
                  Current
                </span>
              )}
            </div>
            <p className="font-medium" style={{ color: "var(--olive-pale)" }}>
              {org}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm" style={{ color: "var(--olive-light)" }}>
              {dates}
            </p>
            <p className="text-sm" style={{ color: "var(--olive-light)" }}>
              {location}
            </p>
          </div>
        </div>

        {skills && (
          <p className="text-sm italic" style={{ color: "var(--olive-pale)" }}>
            <span className="font-semibold not-italic" style={{ color: "var(--olive-light)" }}>Lab Skills: </span>
            {skills}
          </p>
        )}

        <ul className="flex flex-col gap-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "rgba(232,230,220,0.85)" }}>
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--olive-light)" }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience" bg="dark">
      <SectionHeading light>Experience</SectionHeading>
      <div className="max-w-3xl">
        <ExperienceCard
          current
          role="Forensic Scientist I — Biology Unit"
          org="Mesa Police Department, Forensic Services"
          dates="March 2025 – Present"
          location="Mesa, AZ"
          skills="Evidence handling, Screening (Microscopy & ALS), Presumptive tests (KM, HemaTrace, BCIP, AP spot, p30, Christmas Tree Stain, RSID), Report Writing"
          bullets={[
            "Received full serology training with verbal, written, and practical competency across all modules: Evidence Handling, Screening, Blood, Amylase, Semen, and Mock Court Testimony.",
            "Perform visual, microscopic, and serological testing on items of evidence related to police investigations.",
            "Write serology reports summarizing laboratory findings and analyses for forensic casework.",
            "Currently undergoing DNA training including extraction, quantitation via RT-PCR, PCR amplification, and DNA typing using Capillary Electrophoresis.",
          ]}
        />
        <ExperienceCard
          role="Forensics Crime Lab Intern"
          org="Arizona Department of Public Safety — Scientific Analysis Bureau"
          dates="Aug. 2024 – March 2025"
          location="Phoenix, AZ"
          skills="Qiagen EZ1 extraction, PCR, qPCR, Kastle Meyer, O-tol, RSID, Microscopy, Photography"
          bullets={[
            "Became familiar with serology/DNA lab protocols, safety precautions, and proper clean techniques for bench setup and materials handling.",
            "Assisted one serologist and one DNA analyst in completing two formal validation studies.",
            "Validation Study 1: Liquid extractions of alpha-amylase from saliva, RSID testing, photography; prepared diluted saliva samples and performed DNA extractions, quantification, and amplification.",
            "Validation Study 2: Created blood dilution stains on fabric, treated with BlueStar reagent; performed Kastle Meyer, Ortho-tolidine testing, and DNA extractions over multiple time markers.",
          ]}
        />
        <ExperienceCard
          role="Undergraduate Researcher"
          org="Forensic Entomology/Genetics Research Lab, Arizona State University"
          dates="Jan. 2023 – Jan. 2025"
          location="Glendale, AZ"
          skills="Qiagen DNeasy extraction, Invitrogen Trizol RNA extraction, PCR, qPCR, Gel Electrophoresis, Microscopy"
          bullets={[
            "Completed 4 independent research projects across forensic entomology, genetics, and botany.",
            "Achieved NCUIRE Research Assistant (×2) and NCUIRE Research Scholar designations.",
            "Presented research at 7+ conferences including the Entomological Society of America (national) and AAFS.",
            "Contributed to peer-reviewed publication and a CRC Press book chapter.",
          ]}
        />
      </div>
    </Section>
  );
}

// ─── Research ────────────────────────────────────────────────────────────────

function ResearchCard({
  title,
  dates,
  methods,
  bullets,
}: {
  title: string;
  dates: string;
  methods: string;
  bullets: string[];
}) {
  return (
    <div
      className="flex flex-col gap-4 p-6 rounded-2xl h-full"
      style={{ backgroundColor: "var(--parchment)", border: "1px solid var(--warm-200)" }}
    >
      <div>
        <p className="text-xs font-medium tracking-wide uppercase mb-2" style={{ color: "var(--olive-mid)" }}>
          {dates}
        </p>
        <h3 className="font-display font-semibold text-lg leading-snug" style={{ color: "var(--olive-dark)" }}>
          {title}
        </h3>
      </div>
      <p className="text-xs italic" style={{ color: "var(--text-muted)" }}>
        <span className="font-semibold not-italic">Methods: </span>{methods}
      </p>
      <ul className="flex flex-col gap-2 mt-auto">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
            <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--olive-light)" }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Research() {
  const projects = [
    {
      title: "Detection of Food Source in C. megacephala by PCR Analysis",
      dates: "Jan 2023 – Aug 2023",
      methods: "DNA extraction, PCR, Gel Electrophoresis",
      bullets: [
        "Maintained blowfly colonies and performed DNA extractions, PCR, and gel electrophoresis.",
        "Developed problem-solving and communication skills in a shared research environment.",
      ],
    },
    {
      title: "A Genetic Survey of Phoenix, AZ Blow Fly (Diptera: Calliphoridae) Populations",
      dates: "Aug 2023 – Mar 2024",
      methods: "DNA extraction, PCR, Gel Electrophoresis, Phylogenetic modeling",
      bullets: [
        "Set up fly traps across Central Arizona and collected specimens for analysis.",
        "Created a DNA barcoding database of blowfly species; presented at 4 conferences.",
      ],
    },
    {
      title: "A Developmental & Genomic Study to Strengthen Forensic Entomology Baseline Data",
      dates: "Jan 2024 – Dec 2024",
      methods: "Multi-generational rearing, Genomic & mitochondrial sequencing",
      bullets: [
        "Conducted developmental study at two temperatures on C. coloradensis across 5 generations.",
        "Sequenced genomic and mitochondrial barcoding regions; formed basis of Honors Thesis.",
      ],
    },
    {
      title: "Validation Study of microRNA Genes in Chrysomya rufifacies for PMI Estimation",
      dates: "May 2024 – Dec 2024",
      methods: "Invitrogen TRIzol RNA extraction, RT-PCR, qPCR",
      bullets: [
        "Reared C. rufifacies and collected pupal-stage samples per standard operating procedures.",
        "Extracted total RNA at early, mid, and late pupal stages to validate microRNA as a PMI marker.",
      ],
    },
    {
      title: "Analysis of the Pollen Community at ASU West Valley",
      dates: "Jan 2024 – May 2024",
      methods: "Microscopy, Pollen sampling protocols",
      bullets: [
        "Developed sampling protocol from peer-reviewed literature; sampled pollen from fabrics, honeybees, soil, and spore traps.",
        "Won 1st Place Student Choice Award and 2nd Place Judges Award at NCUIRE Symposium.",
      ],
    },
  ];

  return (
    <Section id="research" bg="cream">
      <SectionHeading>Research</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((p) => (
          <ResearchCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}

// ─── Publications ────────────────────────────────────────────────────────────

function Publications() {
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

// ─── Awards ──────────────────────────────────────────────────────────────────

function Awards() {
  const awards = [
    { year: "2021", title: "Valedictorian", org: "American Leadership Academy High School" },
    { year: "2021", title: "New American University Merit Scholarship — President's Award", org: "Arizona State University" },
    { year: "2021", title: "Scholastic Excellence Award", org: "United States Marine Corps" },
    { year: "2023", title: "NCUIRE Research Assistant Award", org: "ASU New College" },
    { year: "2023", title: "NCUIRE Research Assistant Award", org: "ASU New College" },
    { year: "2024", title: "1st Place Student Choice Award — Pollen Community Research", org: "NCUIRE Research Symposium" },
    { year: "2024", title: "2nd Place Student Choice Award — Blow Fly Genetic Survey", org: "NCUIRE Research Symposium" },
    { year: "2024", title: "2nd Place Judges Award — Pollen Community Research", org: "NCUIRE Research Symposium" },
    { year: "2024", title: "NCUIRE Research Scholar Award", org: "ASU New College" },
    { year: "2024", title: "Moeur Award", org: "ASU Alumni Association" },
  ];

  return (
    <Section id="awards" bg="dark">
      <SectionHeading light>Honors &amp; Awards</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {awards.map((a, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 rounded-2xl items-start"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <span
              className="shrink-0 text-xs font-mono font-semibold px-2 py-1 rounded"
              style={{ backgroundColor: "var(--olive-mid)", color: "var(--olive-pale)" }}
            >
              {a.year}
            </span>
            <div>
              <p className="text-sm font-medium leading-snug" style={{ color: "var(--cream)" }}>
                {a.title}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--olive-light)" }}>
                {a.org}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-16">
        <h3 className="font-display text-2xl font-bold mb-8" style={{ color: "var(--cream)" }}>
          Education
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: "var(--olive-light)" }}>
              Dec 2024
            </p>
            <h4 className="font-semibold" style={{ color: "var(--cream)" }}>
              B.S. Forensic Science
            </h4>
            <p style={{ color: "var(--olive-pale)" }} className="text-sm mt-1">
              Arizona State University
            </p>
            <p style={{ color: "var(--olive-light)" }} className="text-xs mt-0.5">
              Barrett, The Honors College · 4.19 GPA · Dean&apos;s List All Semesters
            </p>
            <p style={{ color: "var(--olive-light)" }} className="text-xs mt-0.5">
              Minor: Personal Health
            </p>
            <p className="text-xs mt-2 italic" style={{ color: "rgba(200,217,184,0.7)" }}>
              Honors Thesis: &ldquo;A Developmental & Genomic Study to Strengthen Forensic Entomology Baseline Data&rdquo;
            </p>
          </div>
          <div
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: "var(--olive-light)" }}>
              May 2021
            </p>
            <h4 className="font-semibold" style={{ color: "var(--cream)" }}>
              STEM Honors High School Diploma
            </h4>
            <p style={{ color: "var(--olive-pale)" }} className="text-sm mt-1">
              American Leadership Academy — Queen Creek
            </p>
            <p style={{ color: "var(--olive-light)" }} className="text-xs mt-0.5">
              4.54 GPA · Valedictorian
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Skills ──────────────────────────────────────────────────────────────────

function SkillBadge({ label }: { label: string }) {
  return (
    <span
      className="px-3 py-1.5 rounded-lg text-sm font-medium"
      style={{ backgroundColor: "var(--parchment)", color: "var(--text-mid)", border: "1px solid var(--warm-200)" }}
    >
      {label}
    </span>
  );
}

function Skills() {
  const groups = [
    {
      heading: "Serology & Body Fluid ID",
      skills: [
        "KM (Kastle Meyer)", "HemaTrace", "BCIP", "AP Spot Test", "p30 / PSA",
        "Christmas Tree Stain", "RSID Testing", "Alternate Light Source (ALS)",
        "Microscopy", "Evidence Handling", "Report Writing",
      ],
    },
    {
      heading: "Molecular & DNA Methods",
      skills: [
        "DNA Extraction (Qiagen EZ1, DNeasy)", "RNA Extraction (TRIzol)",
        "PCR", "qPCR / RT-PCR", "Gel Electrophoresis", "Capillary Electrophoresis",
        "BlueStar Reagent", "DNA Quantification", "Phylogenetic Modeling",
        "DNA Barcoding",
      ],
    },
    {
      heading: "Research & Professional",
      skills: [
        "Forensic Entomology", "Forensic Botany", "Scientific Writing",
        "Lab Safety & PPE", "Validation Studies", "Conference Presentations",
        "CODIS Database", "Photography & Documentation",
      ],
    },
    {
      heading: "Professional Affiliations",
      skills: [
        "American Academy of Forensic Sciences (AAFS) — Trainee Affiliate",
        "Entomological Society of America (ESA)",
        "Arizona-Nevada Academy of Science (ANAS)",
      ],
    },
  ];

  return (
    <Section id="skills" bg="cream">
      <SectionHeading>Skills &amp; Affiliations</SectionHeading>
      <div className="flex flex-col gap-10">
        {groups.map((g) => (
          <div key={g.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--olive-mid)" }}>
              {g.heading}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
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

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="py-6 text-center text-xs"
      style={{ backgroundColor: "var(--olive-dark)", color: "var(--olive-light)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      © {new Date().getFullYear()} Gracie Flake · Mesa, Arizona
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Publications />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
