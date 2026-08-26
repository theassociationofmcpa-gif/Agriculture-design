import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Leaf, Mail, MapPin, Phone } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Contact UAB Ruedus | Wholesale Enquiries",
  description:
    'Reach the UAB "Ruedus" team in Vilnius for fertilizer, agrochemical, and agricultural goods wholesale enquiries.',
  openGraph: {
    title: "Contact UAB Ruedus | Wholesale Enquiries",
    description:
      'Reach the UAB "Ruedus" team in Vilnius for fertilizer, agrochemical, and agricultural goods wholesale enquiries.',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

const contactItems = [
  {
    label: "Visit us",
    value: (
      <>
        Perkūnkiemio g. 19
        <br />
        LT-12120 Vilnius, Lithuania
      </>
    ),
    icon: MapPin,
  },
  {
    label: "Call us",
    value: (
      <>
        +370 600 00000
        <br />
        <small className="text-[10px] font-normal text-muted-foreground">
          Placeholder contact
        </small>
      </>
    ),
    icon: Phone,
  },
  {
    label: "Email us",
    value: (
      <>
        info@ruedus.lt
        <br />
        <small className="text-[10px] font-normal text-muted-foreground">
          Placeholder contact
        </small>
      </>
    ),
    icon: Mail,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-forest">
      <nav className="mx-auto flex w-[min(100%-36px,1180px)] items-center justify-between py-[26px] md:w-[min(1180px,calc(100%-48px))]">
        <Link
          href="/"
          className="flex items-center gap-[9px] text-xl font-bold tracking-[-0.07em] text-forest no-underline"
        >
          <span className="grid h-[31px] w-[31px] place-items-center rounded-full border border-current">
            <Leaf size={15} />
          </span>
          <span>Ruedus</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-forest no-underline"
        >
          <ArrowLeft size={15} /> Back to home
        </Link>
      </nav>

      <section className="mx-auto grid w-[min(100%-36px,1180px)] grid-cols-1 gap-10 py-[78px] pb-[85px] md:w-[min(1180px,calc(100%-48px))] md:grid-cols-[1.1fr_0.9fr] md:gap-[100px] md:py-[110px] md:pb-[125px]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-olive">
            Start a conversation
          </p>
          <h1 className="my-[30px] text-[64px] font-semibold leading-[0.88] tracking-[-0.08em] md:text-[clamp(58px,9vw,116px)]">
            Let&apos;s talk
            <br />
            <em className="font-normal not-italic text-olive">agriculture.</em>
          </h1>
          <p className="max-w-[390px] text-[17px] leading-[1.6] text-muted-foreground">
            For wholesale fertilizer, agrochemical, and agricultural goods enquiries, contact the
            Ruedus team directly.
          </p>
        </div>
        <div className="pt-[45px] md:pt-[50px]">
          {contactItems.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex gap-[18px] border-t border-line py-6">
              <Icon className="flex-none text-olive" size={19} />
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
                  {label}
                </span>
                <strong className="text-base font-medium leading-[1.5]">{value}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <figure className="relative mx-auto mb-[100px] w-[min(100%-36px,1180px)] md:mb-[150px] md:w-[min(1180px,calc(100%-48px))]">
        <div className="relative h-[280px] w-full shadow-[10px_10px_0_rgba(86,112,63,0.22)] md:h-[clamp(280px,42vw,520px)] md:shadow-[18px_18px_0_rgba(86,112,63,0.22)]">
          <Image
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=2200&q=85"
            alt="Green agricultural fields stretching toward the horizon under a soft sky"
            fill
            className="object-cover"
          />
        </div>
        <figcaption className="absolute bottom-[18px] left-[18px] border border-[#bdd66a]/40 bg-[#0b1a14]/66 px-[15px] py-[9px] text-[10px] uppercase tracking-[0.16em] text-[#e8f0d2] backdrop-blur-[6px]">
          Growing partnerships across the Baltics
        </figcaption>
      </figure>

      <SiteFooter />
    </main>
  )
}
