"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react"

const products = [
  {
    name: "Urea N46",
    subtitle: "Granulated, wholesale quantities",
    category: "Nitrogen fertilizer",
    packaging: "Big bag · 1000 kg",
    availability: "Year-round",
    gallery: [
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
    ],
  },
  {
    name: "NPK Fertilizer",
    subtitle: "Granulated blend, wholesale quantities",
    category: "NPK fertilizer",
    packaging: "NPK 15-15-15 · 8/20/30 · 10/26/26",
    availability: "Year-round",
    gallery: [
      {
        url: "/npk-fertilizer.jpeg",
        label: "Granules on leaf",
        alt: "White NPK fertilizer granules spread across a green leaf",
      },
    ],
  },
]

export function CatalogueSection() {
  const [productIndex, setProductIndex] = useState(0)
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const product = products[productIndex]!
  const gallery = product.gallery
  const shot = gallery[active] ?? gallery[0]!

  function goToProduct(next: number) {
    const clamped = (next + products.length) % products.length
    setProductIndex(clamped)
    setActive(0)
  }

  useEffect(() => {
    if (!lightboxOpen) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % gallery.length)
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + gallery.length) % gallery.length)
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [lightboxOpen])

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
                  {product.category}
                </strong>
              </li>
              <li className="flex justify-between gap-4 border-t border-line py-[13px] text-xs uppercase tracking-[0.11em] text-muted-foreground">
                Packaging{" "}
                <strong className="text-sm font-semibold tracking-[-0.01em] text-foreground normal-case">
                  {product.packaging}
                </strong>
              </li>
              <li className="flex justify-between gap-4 border-t border-line py-[13px] text-xs uppercase tracking-[0.11em] text-muted-foreground">
                Availability{" "}
                <strong className="text-sm font-semibold tracking-[-0.01em] text-foreground normal-case">
                  {product.availability}
                </strong>
              </li>
            </ul>

            <div className="mt-[30px] flex items-center gap-3">
              <button
                type="button"
                onClick={() => goToProduct(productIndex - 1)}
                aria-label="Previous product"
                className="grid h-10 w-10 place-items-center border border-line text-foreground transition-colors duration-200 hover:border-forest hover:bg-forest hover:text-cream"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => goToProduct(productIndex + 1)}
                aria-label="Next product"
                className="grid h-10 w-10 place-items-center border border-line text-foreground transition-colors duration-200 hover:border-forest hover:bg-forest hover:text-cream"
              >
                <ChevronRight size={16} />
              </button>
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Product {productIndex + 1} / {products.length}
              </span>
            </div>
          </div>

          <div>
            <div className="bg-forest p-3.5 shadow-[12px_12px_0_rgba(86,112,63,0.22)] md:shadow-[18px_18px_0_rgba(86,112,63,0.22)]">
              <div className="group relative">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label={`Open full-size image: ${shot.label}`}
                  className="relative flex aspect-4/3 w-full flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-[#2c4433] to-[#152720] p-0 text-[11px] uppercase tracking-[0.13em] text-cream"
                >
                  <Image
                    src={shot.url || "/placeholder.svg"}
                    alt={shot.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-4 left-4 z-10 border border-[#bdd66a]/40 bg-[#0b1a14]/66 px-[14px] py-2 text-[10px] tracking-[0.16em] text-[#e8f0d2] backdrop-blur-[6px]">
                    {shot.label}
                  </span>
                  <span className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center border border-[#bdd66a]/40 bg-[#0b1a14]/66 text-[#e8f0d2] opacity-0 backdrop-blur-[6px] transition-opacity duration-300 group-hover:opacity-100">
                    <Expand size={15} />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToProduct(productIndex - 1)
                  }}
                  aria-label="Slide to previous product"
                  className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-[#bdd66a]/40 bg-[#0b1a14]/66 text-[#e8f0d2] opacity-0 backdrop-blur-[6px] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToProduct(productIndex + 1)
                  }}
                  aria-label="Slide to next product"
                  className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-[#bdd66a]/40 bg-[#0b1a14]/66 text-[#e8f0d2] opacity-0 backdrop-blur-[6px] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="flex items-end justify-between gap-5 px-0.5 pt-[18px] text-cream">
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#bdd66a]">
                    Catalogue · {String(productIndex + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-xl font-semibold tracking-[-0.05em]">{product.name}</strong>
                  <span className="text-[11px] text-white/58">{product.subtitle}</span>
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

      {lightboxOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${shot.label} — full size image ${active + 1} of ${gallery.length}`}
          className="fixed inset-0 z-50 flex flex-col bg-[#0b1a14]/96 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-5 py-4 text-cream md:px-9 md:py-6">
            <span className="text-[11px] uppercase tracking-[0.16em] text-white/60">
              {active + 1} / {gallery.length} — {shot.label}
            </span>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close full-size view"
              className="grid h-10 w-10 place-items-center border border-white/25 text-cream transition-colors duration-200 hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-16 md:pb-10">
            <button
              type="button"
              onClick={() => setActive((i) => (i - 1 + gallery.length) % gallery.length)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/25 text-cream transition-colors duration-200 hover:bg-white/10 md:left-6"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="relative h-full max-h-[75vh] w-full max-w-4xl">
              <Image
                src={shot.url || "/placeholder.svg"}
                alt={shot.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={() => setActive((i) => (i + 1) % gallery.length)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/25 text-cream transition-colors duration-200 hover:bg-white/10 md:right-6"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mx-auto mb-6 flex gap-3 px-5">
            {gallery.map((thumb, i) => (
              <button
                type="button"
                key={thumb.url}
                onClick={() => setActive(i)}
                aria-label={`View ${thumb.label}`}
                aria-pressed={i === active}
                className={`relative h-12 w-12 flex-none overflow-hidden border p-0 transition-opacity duration-300 md:h-14 md:w-14 ${
                  i === active ? "border-[#bdd66a] opacity-100" : "border-white/20 opacity-50 hover:opacity-90"
                }`}
              >
                <Image src={thumb.url || "/placeholder.svg"} alt={thumb.alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
