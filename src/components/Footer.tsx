export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-3xl mx-auto px-5 py-10">
      <div className="divider mb-8" />
      <div className="flex items-center justify-between">
        <p className="text-xs font-mono text-[var(--muted)]">
          © {year} Pavitra Kushwaha
        </p>
        <p className="text-xs font-mono text-[var(--muted)]">
          Built with{" "}
          <span className="text-[var(--green)]">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
