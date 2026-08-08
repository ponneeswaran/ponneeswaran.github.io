const TAGS = ["#CODER", "#GAMER", "#VLOGGER", "#NUMISMATIST"];

const RATINGS = [
  {
    quote:
      "Placeholder testimonial \u2014 replace with a real quote from someone you've worked with.",
    author: "Jane Doe, Placeholder Studio",
  },
  {
    quote:
      "Placeholder testimonial \u2014 swap this out for genuine feedback later.",
    author: "John Smith, Placeholder Co.",
  },
  {
    quote: "Placeholder testimonial \u2014 edit me in Hero.tsx.",
    author: "Alex Roe, Placeholder Inc.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            PONNEESWARAN
            <br />
            NATARAJAN
          </h1>
          <div className="flex flex-wrap gap-3 text-xs font-semibold tracking-wide text-accent">
            {TAGS.map((tag) => (
              <span key={tag} className="rounded-full border border-accent/40 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-surface text-3xl font-bold text-accent ring-2 ring-accent/40">
            PN
          </div>
          <div className="flex flex-col gap-4">
            <p className="max-w-xl text-lg text-muted">
              Welcome to my portfolio! I&apos;m Ponneeswaran, a coder, gamer,
              vlogger, and numismatist who loves building things, streaming
              gameplay, and collecting coins from around the world.
            </p>
          </div>
        </div>

        <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
          {RATINGS.map((rating) => (
            <div key={rating.author} className="flex flex-col gap-2 text-sm">
              <span className="text-accent">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <p className="text-muted">&ldquo;{rating.quote}&rdquo;</p>
              <span className="text-xs text-zinc-500">{rating.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

