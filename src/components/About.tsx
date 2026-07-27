const EXPERIENCE = [
  {
    role: "Placeholder Role \u2014 e.g. Software Engineer",
    place: "At Placeholder Company",
    period: "2023 \u2014 Present",
  },
  {
    role: "Placeholder Role \u2014 e.g. Junior Developer",
    place: "At Placeholder Company",
    period: "2021 \u2014 2023",
  },
];

const EDUCATION = [
  {
    title: "Placeholder Degree \u2014 e.g. B.Sc in Computer Science",
    place: "Placeholder University",
    period: "2019 \u2014 Present",
  },
  {
    title: "Placeholder Certificate \u2014 e.g. Web Development",
    place: "Placeholder Institute",
    period: "2018 \u2014 2019",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-2">
          <span className="text-sm font-semibold text-accent">&#10022; About Me</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Coder, Gamer, Vlogger &amp; Numismatist
          </h2>
        </div>

        <div className="grid gap-12 sm:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-surface text-2xl font-bold text-accent ring-2 ring-accent/40">
                PN
              </div>
              <div className="flex flex-col gap-4">
                <p className="max-w-xl text-muted">
                  Placeholder bio \u2014 I&apos;m Ponneeswaran Natarajan, a
                  developer who spends free time gaming, creating video
                  content, and collecting coins from around the world.
                  Replace this paragraph with your real story.
                </p>
                <a
                  href="/resume.pdf"
                  className="w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Download Resume &#8595;
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-semibold text-accent">&#10022; Experience</h3>
              <ul className="flex flex-col gap-6">
                {EXPERIENCE.map((item) => (
                  <li key={item.role} className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-semibold">{item.role}</span>
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                        {item.period}
                      </span>
                    </div>
                    <span className="text-sm text-muted">{item.place}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-semibold text-accent">&#10022; Education</h3>
              <ul className="flex flex-col gap-6">
                {EDUCATION.map((item) => (
                  <li key={item.title} className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-semibold">{item.title}</span>
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                        {item.period}
                      </span>
                    </div>
                    <span className="text-sm text-muted">{item.place}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex h-fit flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold text-accent">&#10022; Contact</h3>
            <dl className="flex flex-col gap-3 text-sm">
              <div>
                <dt className="text-muted">Phone</dt>
                <dd>+00 000 0000 000</dd>
              </div>
              <div>
                <dt className="text-muted">Email</dt>
                <dd>hello@ponneeswaran.dev</dd>
              </div>
              <div>
                <dt className="text-muted">Website</dt>
                <dd>www.ponneeswaran.dev</dd>
              </div>
              <div>
                <dt className="text-muted">Address</dt>
                <dd>Placeholder City, Placeholder Country</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
