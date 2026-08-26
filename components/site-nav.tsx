"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"

export function SiteNav() {
  const [open, setOpen] = useState(false)

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

      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute left-0 right-0 top-[68px] z-20 flex-col gap-0 border border-white/20 bg-forest px-[18px] pb-[18px] pt-[10px] shadow-[0_18px_35px_rgba(0,0,0,0.22)] md:static md:flex md:flex-row md:gap-9 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:ml-auto md:mr-12`}
      >
        <a
          href="#company"
          onClick={() => setOpen(false)}
          className="flex min-h-[52px] items-center border-b border-white/[0.14] text-sm text-cream no-underline last:border-b-0 md:min-h-0 md:border-0 md:text-[13px]"
        >
          Company
        </a>
        <a
          href="#capabilities"
          onClick={() => setOpen(false)}
          className="flex min-h-[52px] items-center border-b border-white/[0.14] text-sm text-cream no-underline last:border-b-0 md:min-h-0 md:border-0 md:text-[13px]"
        >
          What we do
        </a>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="flex min-h-[52px] items-center border-b border-white/[0.14] text-sm text-cream no-underline last:border-b-0 md:min-h-0 md:border-0 md:text-[13px]"
        >
          Contact
        </Link>
      </div>

      <a
        href="#contact"
        className="hidden items-center gap-[9px] text-[13px] font-semibold text-cream no-underline md:flex"
      >
        Get in touch <ArrowUpRight size={15} />
      </a>

      <button
        type="button"
        className="grid h-11 w-11 place-items-center border border-white/35 text-cream md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </nav>
  )
}
