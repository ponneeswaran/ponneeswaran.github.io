const EXPERIENCE = [
  {
    role: "Technical Lead / Architect",
    place: "Appex Tech Innovations Pvt Ltd. — Mumbai, MH",
    period: "Jun 2025 — Present",
  },
  {
    role: "Sr Lead Engineer",
    place: "Simplain Software Solutions — Coimbatore, TN",
    period: "Jul 2022 — Feb 2025",
  },
  {
    role: "Lead Engineer",
    place: "Brillio \u2014 Bengaluru, KA",
    period: "Oct 2018 \u2014 Aug 2020",
  },
  {
    role: "Software Dev Eng in Test",
    place: "Move Inc. \u2014 Santa Clara, CA",
    period: "May 2017 \u2014 Sep 2018",
  },
  {
    role: "Mobile App Support & Ops Intern",
    place: "Axway \u2014 Phoenix, AZ",
    period: "Oct 2016 \u2014 Dec 2016",
  },
  {
    role: "Sr. Systems Engineer",
    place: "Infosys Technologies Ltd. \u2014 Chennai, TN",
    period: "Feb 2011 \u2014 Jun 2014",
  },
];

const EDUCATION = [
  {
    title: "Master of Computer Science",
    place: "Arizona State University \u2014 Tempe, AZ",
    period: "",
  },
  {
    title: "B-Tech CSE",
    place: "Amrita School of Engineering \u2014 Coimbatore, TN",
    period: "",
  },
];

const SKILLS = [
  {
    category: "Programming Languages",
    items: "Java (Core), Android, C, C++, Python, Unix Shell Script",
  },
  {
    category: "Frameworks & Libraries",
    items: "Spring MVC, Spring Boot, Bootstrap, Liferay, ReactJS, NextJS, NodeJS",
  },
  {
    category: "Web Technologies",
    items: "HTML, JavaScript (ES6), JSP, CSS, JSON, jQuery",
  },
  {
    category: "Dev & Build Tools",
    items: "SVN, Jenkins, NetBeans, Eclipse, Maven, Git, Visual Studio, Unity3D, Google Cloud Functions",
  },
  {
    category: "Databases",
    items: "Oracle, DB2, MySQL, AWS DynamoDB, PostgreSQL, Google FHIR",
  },
  {
    category: "Other Tools",
    items: "Wolfram Mathematica, Titanium+, Jira, TomEE, Kibana",
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
                  Full-stack Java developer with approximately 11 years of
                  experience designing, developing, and managing complex web
                  applications. Outside of work I enjoy gaming, creating
                  video content, and collecting coins from around the world.
                </p>
                <a
                  href="/resume.pdf"
                  download
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
                  <li key={item.role + item.period} className="flex flex-col gap-1">
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
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-sm text-muted">{item.place}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-semibold text-accent">&#10022; Skills</h3>
              <ul className="flex flex-col gap-3">
                {SKILLS.map((skill) => (
                  <li key={skill.category} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                    <span className="w-48 shrink-0 font-semibold">{skill.category}</span>
                    <span className="text-sm text-muted">{skill.items}</span>
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
                <dd>+91-9003977744</dd>
              </div>
              <div>
                <dt className="text-muted">Email</dt>
                <dd>Ponneeswaran.Natarajan@asu.edu</dd>
              </div>
              <div>
                <dt className="text-muted">GitHub</dt>
                <dd>
                  <a
                    href="https://github.com/ponneeswaran"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    github.com/ponneeswaran
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Address</dt>
                <dd>
                  36 F, Panchayat Office Road, Podanur, Coimbatore, Tamil
                  Nadu, India - 641023
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
