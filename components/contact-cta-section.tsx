import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"

export function ContactCtaSection() {
  return (
    <section id="contact" className="bg-lime py-20 text-forest md:py-[100px]">
      <div className="mx-auto flex w-[min(100%-36px,1180px)] flex-col gap-10 md:w-[min(1180px,calc(100%-48px))] md:flex-row md:items-end md:justify-between md:gap-[70px]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-forest">
            Start a conversation
          </p>
          <h2 className="mt-[22px] text-[54px] font-semibold leading-[0.88] tracking-[-0.08em] md:text-[clamp(54px,8vw,100px)]">
            Let&rsquo;s grow
            <br />
            <em className="font-normal not-italic">something good.</em>
          </h2>
        </div>
        <div className="max-w-[350px]">
          <p className="text-[15px] leading-[1.65] text-forest/70">
            Looking for a dependable wholesale partner in the agricultural sector? We would be
            glad to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex w-max items-center gap-3 rounded-md bg-forest px-5 py-4 text-[13px] font-bold text-cream no-underline transition-transform motion-safe:hover:-translate-y-0.5"
          >
            Get in touch <ArrowUpRight size={17} />
          </Link>
          <span className="mt-[26px] flex items-center gap-2 text-xs">
            <MapPin size={16} /> Vilnius, Lithuania
          </span>
        </div>
      </div>
    </section>
  )
}
