export function SiteNav() {
  return (
    <nav
      className="relative flex items-center justify-between border-b border-white/25 py-4 md:py-[26px]"
      aria-label="Main navigation"
    >
      <a
        className="flex items-center gap-[9px] text-xl md:text-[23px] font-bold tracking-[-0.07em] text-cream no-underline"
        href="#top"
      >
        <span>Ruedus</span>
      </a>

      <div className="hidden items-center gap-9 md:flex md:ml-auto md:mr-12">
        <a
          href="#company"
          className="text-[13px] text-cream no-underline"
        >
          Company
        </a>
        <a
          href="#capabilities"
          className="text-[13px] text-cream no-underline"
        >
          What we do
        </a>
        <a
          href="#contact"
          className="text-[13px] text-cream no-underline"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
