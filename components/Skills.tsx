import { Section, SectionHeading } from "./Section";

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

export default function Skills() {
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
