"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const gallery = [
  {
    url: "/urea-container.jpeg",
    label: "Container loading",
    alt: "Urea big bags loaded inside a shipping container",
  },
  {
    url: "/urea-field.jpeg",
    label: "Yard under sky",
    alt: "Rows of white Urea big bags in an open yard under a dramatic cloudy sky",
  },
  {
    url: "/urea-rows.jpeg",
    label: "Bags in rows",
    alt: "Rows of Indorama Fargonaazot Urea big bags outdoors under a blue sky",
  },
  {
    url: "/urea-bag-closeup.jpeg",
    label: "Bag close-up",
    alt: "Close-up of an Indorama Fargonaazot Urea N46 big bag label",
  },
]

export function CatalogueSection() {
  const [active, setActive] = useState(0)
  const shot = gallery[active]!

  return (
    <section id="catalogue" className="bg-[#e9e6d9] py-20 md:py-[112px] md:pb-[120px]">
      <div className="mx-auto w-[min(100%-36px,1180px)] md:w-[min(1180px,calc(100%-48px))]">
        <div className="flex gap-5 text-[10px] font-bold uppercase tracking-[0.15em] text-olive">
          03 <span className="text-muted-foreground">Product catalogue</span>
        </div>

        <div className="mt-[46px] grid grid-cols-1 gap-[46px] md:mt-[52px] md:grid-cols-[0.78fr_1.22fr] md:items-center md:gap-[82px]">
          <div className="max-w-[400px]">
            <h2 className="my-[26px] text-[44px] font-semibold leading-[0.92] tracking-[-0.075em] text-foreground md:text-[clamp(44px,5.4vw,80px)]">
              From store
              <br />
              <span className="text-olive">to soil.</span>
            </h2>
            <p className="m-0 text-[15px] leading-[1.65] text-muted-foreground">
              A closer look at the products we move in bulk — sourced from established
              manufacturers and delivered on schedule across the Baltics.
            </p>
            <ul className="mt-[30px] list-none p-0">
              <li className="flex justify-between gap-4 border-t border-line py-[13px] text-xs uppercase tracking-[0.11em] text-muted-foreground">
                Category{" "}
                <strong className="text-sm font-semibold tracking-[-0.01em] text-foreground normal-case">
                  Nitrogen fertilizer
                </strong>
              </li>
              <li className="flex justify-between gap-4 border-t border-line py-[13px] text-xs uppercase tracking-[0.11em] text-muted-foreground">
                Packaging{" "}
                <strong className="text-sm font-semibold tracking-[-0.01em] text-foreground normal-case">
                  Big bag · 500 kg
                </strong>
              </li>
              <li className="flex justify-between gap-4 border-t border-line py-[13px] text-xs uppercase tracking-[0.11em] text-muted-foreground">
                Availability{" "}
                <strong className="text-sm font-semibold tracking-[-0.01em] text-foreground normal-case">
                  Year-round
                </strong>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-forest p-3.5 shadow-[12px_12px_0_rgba(86,112,63,0.22)] md:shadow-[18px_18px_0_rgba(86,112,63,0.22)]">
              <div className="group relative flex aspect-4/3 flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-[#2c4433] to-[#152720] text-[11px] uppercase tracking-[0.13em] text-cream">
                <Image
                  src={shot.url || "/placeholder.svg"}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-4 left-4 z-10 border border-[#bdd66a]/40 bg-[#0b1a14]/66 px-[14px] py-2 text-[10px] tracking-[0.16em] text-[#e8f0d2] backdrop-blur-[6px]">
                  {shot.label}
                </span>
              </div>
              <div className="flex items-end justify-between gap-5 px-0.5 pt-[18px] text-cream">
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#bdd66a]">
                    Catalogue · 01
                  </span>
                  <strong className="text-xl font-semibold tracking-[-0.05em]">Urea N46</strong>
                  <span className="text-[11px] text-white/58">
                    Granulated, wholesale quantities
                  </span>
                </div>
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {gallery.map((thumb, i) => (
                <button
                  type="button"
                  key={thumb.url}
                  onClick={() => setActive(i)}
                  aria-label={thumb.label}
                  aria-pressed={i === active}
                  className={`relative aspect-square overflow-hidden border p-0 transition-[opacity,box-shadow,transform] duration-300 ${
                    i === active
                      ? "border-forest opacity-100 shadow-[0_0_0_2px_var(--forest)]"
                      : "border-line opacity-60 hover:-translate-y-0.5 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={thumb.url || "/placeholder.svg"}
                    alt={thumb.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
