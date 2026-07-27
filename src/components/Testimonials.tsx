const TESTIMONIALS = [
  {
    id: "testimonial-1",
    quote:
      "Placeholder testimonial \u2014 replace with a real quote once you have client or community feedback.",
    author: "Placeholder Name",
    role: "Placeholder Role, Placeholder Company",
  },
  {
    id: "testimonial-2",
    quote:
      "Placeholder testimonial \u2014 swap this out for genuine feedback later.",
    author: "Placeholder Name",
    role: "Placeholder Role, Placeholder Company",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-2 text-center">
          <span className="text-sm font-semibold text-accent">&#10022; Testimonials</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Placeholder Clients
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <p className="text-lg text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex flex-col text-sm">
                <span className="font-semibold">{testimonial.author}</span>
                <span className="text-muted">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
