const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-sm text-muted sm:flex-row sm:justify-between">
        <nav className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          <a
            href="https://github.com/ponneeswaran"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.youtube.com/@TheWindpacer"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            YouTube
          </a>
          <a
            href="https://www.twitch.tv/kongucholan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Twitch
          </a>
        </div>
        <p>&copy; {year} Ponneeswaran. All rights reserved.</p>
      </div>
    </footer>
  );
}

