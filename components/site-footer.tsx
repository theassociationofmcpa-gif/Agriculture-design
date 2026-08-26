export function SiteFooter() {
  return (
    <footer className="mx-auto w-[min(100%-36px,1180px)] text-forest md:w-[min(1180px,calc(100%-48px))]">
      <div className="h-px w-full bg-forest/25" />
      <div className="flex flex-wrap items-center justify-between gap-4 py-[26px]">
        <a
          className="flex items-center gap-[9px] text-xl font-bold tracking-[-0.07em] text-forest no-underline"
          href="#top"
        >
          <span>Ruedus</span>
        </a>
        <p className="m-0 text-[11px] text-muted-foreground">
          © 2026 Ruedus. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
