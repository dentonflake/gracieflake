import { Section, SectionHeading } from "./Section";

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

export default function Research() {
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
