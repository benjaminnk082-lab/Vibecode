import { site } from "@/content/site";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a
          href="#top"
          className="font-display text-sm font-medium uppercase tracking-tightest text-white"
        >
          {site.brand}
        </a>
        <ul className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-white md:flex">
          <li>
            <a href="#work">Arbeid</a>
          </li>
          <li>
            <a href="#about">Studio</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
        <a
          href={site.cta.href}
          className="text-xs uppercase tracking-[0.18em] text-white"
        >
          {site.cta.label}
        </a>
      </nav>
    </header>
  );
}
