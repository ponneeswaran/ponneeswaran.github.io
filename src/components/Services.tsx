const SERVICES = [
  {
    tag: "Building Reliable Software",
    title: "Web Development",
  },
  {
    tag: "Streaming & Let's Plays",
    title: "Game Streaming",
  },
  {
    tag: "Video Content & Editing",
    title: "Vlogging",
  },
  {
    tag: "Cataloguing & Valuation",
    title: "Numismatics Consulting",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-accent">&#10022; My Services</span>
            <h2 className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
              What I Can Help You With
            </h2>
          </div>
        </div>

        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="flex items-center justify-between gap-4 py-6"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-muted">
                  {service.tag}
                </span>
                <span className="text-2xl font-semibold sm:text-3xl">
                  {service.title}
                </span>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-accent">
                &rarr;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
