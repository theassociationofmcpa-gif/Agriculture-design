import { ArrowUpRight } from "lucide-react"
import { SiteNav } from "@/components/site-nav"

export function HeroSection() {
  return (
    <section
      id="top"
      className="flex min-h-[680px] flex-col bg-cream text-cream md:min-h-[760px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(12,31,22,0.83), rgba(12,31,22,0.25)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto w-[min(100%-36px,1180px)] md:w-[min(1180px,calc(100%-48px))]">
        <SiteNav />
      </div>

      <div className="mx-auto flex w-[min(100%-36px,1180px)] flex-1 flex-col justify-center py-[70px] pb-[30px] md:w-[min(1180px,calc(100%-48px))] md:py-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c9e07d]">
          Agricultural wholesale · Vilnius, Lithuania
        </p>
        <h1 className="my-5 text-[58px] font-semibold leading-[0.9] tracking-[-0.08em] md:my-[25px] md:text-[clamp(58px,9vw,120px)]">
          Moving agriculture
          <br />
          <em className="font-bold not-italic text-[#bdd66a]">forward.</em>
        </h1>
        <p className="max-w-[390px] text-[17px] leading-[1.55] text-white/78">
          UAB &ldquo;Ruedus&rdquo; connects growers and markets with the products that help
          agriculture thrive.
        </p>
        <a
          href="#capabilities"
          className="mt-6 inline-flex w-max items-center gap-3 rounded-md bg-cream px-5 py-4 text-[13px] font-bold text-forest no-underline transition-transform motion-safe:hover:-translate-y-0.5"
        >
          Explore our work <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="mx-auto flex w-[min(100%-36px,1180px)] items-center gap-[18px] pb-[27px] text-[9px] uppercase tracking-[0.14em] text-white/60 md:w-[min(1180px,calc(100%-48px))] md:text-[10px]">
        <span>Est. 2016</span>
        <span className="h-px w-[35px] bg-white/50 md:w-[100px]" />
        <span>Scroll to discover</span>
      </div>
    </section>
  )
}
