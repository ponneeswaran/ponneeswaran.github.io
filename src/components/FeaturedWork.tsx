const PROJECTS = [
  {
    title: "Coin Catalog App",
    description:
      "Placeholder project \u2014 a numismatic collection tracker with search and valuation.",
  },
  {
    title: "Gaming Highlights Channel",
    description:
      "Placeholder project \u2014 edited highlight reels from streamed gameplay sessions.",
  },
  {
    title: "Weekly Vlog Series",
    description:
      "Placeholder project \u2014 a recurring video series documenting projects and travel.",
  },
  {
    title: "This Portfolio Website",
    description:
      "Placeholder project \u2014 a Next.js + Tailwind site showcasing all of the above.",
  },
];

export default function FeaturedWork() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-accent">&#10022; Featured Work</span>
            <h2 className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
              Showcasing My Work for Your Inspiration
            </h2>
          </div>
          <a
            href="#contact"
            className="w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Explore all Projects &rarr;
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted">
                Project image placeholder
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-muted">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
