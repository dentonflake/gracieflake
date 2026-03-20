const backgrounds: Record<string, string> = {
  cream: "var(--cream)",
  dark: "var(--olive-dark)",
  parchment: "var(--parchment)",
  white: "#ffffff",
};

export function Section({
  id,
  bg = "cream",
  children,
}: {
  id: string;
  bg?: "cream" | "dark" | "parchment" | "white";
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ backgroundColor: backgrounds[bg] }} className="py-24">
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-14">
      <h2
        className="font-display text-4xl font-bold mb-3"
        style={{ color: light ? "var(--cream)" : "var(--olive-dark)" }}
      >
        {children}
      </h2>
      <div
        className="h-1 w-12 rounded-full"
        style={{ backgroundColor: light ? "var(--olive-light)" : "var(--olive)" }}
      />
    </div>
  );
}
