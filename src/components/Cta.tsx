export default function Cta() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-accent">&#10022; Got a project?</span>
          <h2 className="max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
            Surround yourself with an expert
          </h2>
        </div>
        <a
          href="mailto:Ponneeswaran.Natarajan@asu.edu"
          className="w-fit rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Start a Project Now &rarr;
        </a>
      </div>
    </section>
  );
}
