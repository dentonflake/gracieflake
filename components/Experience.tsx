import { Section, SectionHeading } from "./Section";

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
            <p className="text-sm" style={{ color: "var(--olive-light)" }}>{dates}</p>
            <p className="text-sm" style={{ color: "var(--olive-light)" }}>{location}</p>
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

export default function Experience() {
  return (
    <Section id="experience" bg="dark">
      <SectionHeading light>Experience</SectionHeading>
      <div className="max-w-3xl">
        <ExperienceCard
          current
          role="Forensic Scientist I — Biology Unit"
          org="City of Mesa, Forensic Services"
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
