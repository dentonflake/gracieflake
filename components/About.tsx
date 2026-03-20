import { Section, SectionHeading } from "./Section";

const stats = [
  { value: "4.19", label: "GPA at ASU" },
  { value: "2 yrs", label: "Undergraduate Research" },
  { value: "4", label: "Research Projects" },
  { value: "7+", label: "Presentations" },
];

export default function About() {
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
