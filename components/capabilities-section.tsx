import { Check, Leaf, Wheat } from "lucide-react"

const capabilities = [
  {
    title: "Fertilizers",
    text: "Reliable inputs for productive soils and stronger harvests.",
    icon: Leaf,
  },
  {
    title: "Agrochemical products",
    text: "Practical crop-care solutions for modern agriculture.",
    icon: Check,
  },
  {
    title: "Agricultural goods",
    text: "Wholesale trade that keeps the wider supply chain moving.",
    icon: Wheat,
  },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-forest py-20 text-cream md:py-[112px] md:pb-[120px]">
      <div className="mx-auto w-[min(100%-36px,1180px)] md:w-[min(1180px,calc(100%-48px))]">
        <div className="flex gap-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#bdd66a]">
          02 <span className="text-white/55">What we do</span>
        </div>
        <div className="my-10 md:my-[55px] md:mb-[65px]">
          <h2 className="m-0 text-[42px] font-semibold leading-[0.95] tracking-[-0.07em] md:text-[clamp(42px,5vw,72px)]">
            Essential products.
            <br />
            <span className="text-olive">Considered supply.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/20 md:grid-cols-3">
          {capabilities.map(({ title, text, icon: Icon }, i) => (
            <article
              key={title}
              className="flex min-h-[245px] flex-col items-start bg-forest p-7 md:min-h-[285px]"
            >
              <span className="text-[11px] text-[#bdd66a]">0{i + 1}</span>
              <Icon className="my-[45px] text-[#bdd66a]" size={30} strokeWidth={1.5} />
              <h3 className="m-0 mb-[10px] text-[23px] tracking-[-0.04em]">{title}</h3>
              <p className="m-0 max-w-[230px] text-sm leading-[1.55] text-white/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
