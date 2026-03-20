import { Section, SectionHeading } from "./Section";

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

export default function Awards() {
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
            <p className="text-sm mt-1" style={{ color: "var(--olive-pale)" }}>
              Arizona State University
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--olive-light)" }}>
              Barrett, The Honors College · 4.19 GPA · Dean&apos;s List All Semesters
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--olive-light)" }}>
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
            <p className="text-sm mt-1" style={{ color: "var(--olive-pale)" }}>
              American Leadership Academy — Queen Creek
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--olive-light)" }}>
              4.54 GPA · Valedictorian
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
