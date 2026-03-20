export default function Footer() {
  return (
    <footer
      className="py-6 text-center text-xs"
      style={{ backgroundColor: "var(--olive-dark)", color: "var(--olive-light)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      © {new Date().getFullYear()} Gracie Flake · Mesa, Arizona
    </footer>
  );
}
