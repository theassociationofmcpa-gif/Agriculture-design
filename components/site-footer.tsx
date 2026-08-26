export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-[min(100%-36px,1180px)] flex-wrap items-center justify-between gap-4 border-t border-line py-[26px] text-forest md:w-[min(1180px,calc(100%-48px))]">
      <a
        className="flex items-center gap-[9px] text-xl font-bold tracking-[-0.07em] text-forest no-underline"
        href="#top"
      >
        <span>Ruedus</span>
      </a>
      <a href="#top" className="order-3 w-full text-[11px] text-muted-foreground no-underline md:order-none md:w-auto">
        Back to top ↑
      </a>
      <p className="order-2 m-0 text-[11px] text-muted-foreground md:order-none">
        UAB &ldquo;Ruedus&rdquo; · 304176326
      </p>
    </footer>
  )
}
