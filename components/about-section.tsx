export function AboutSection() {
  return (
    <section
      id="company"
      className="mx-auto w-[min(100%-36px,1180px)] py-[82px] md:w-[min(1180px,calc(100%-48px))] md:py-[125px]"
    >
      <div className="flex gap-5 text-[10px] font-bold uppercase tracking-[0.15em] text-olive">
        01 <span className="text-muted-foreground">About Ruedus</span>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:mt-[55px] md:grid-cols-2 md:gap-[100px]">
        <h2 className="m-0 text-[42px] font-semibold leading-[1.15] tracking-[-0.07em] text-foreground md:text-[clamp(42px,5vw,72px)]">
          Trade with purpose.
          <br />
          <span className="text-olive">Built for growth.</span>
        </h2>
        <div>
          <p className="m-0 mb-[25px] text-[23px] leading-[1.4] tracking-[-0.025em] text-foreground">
            We operate where agriculture meets opportunity — supplying the fertilizers,
            agrochemical products, and agricultural goods that support a more productive future.
          </p>
          <p className="max-w-[470px] text-[15px] leading-[1.65] text-muted-foreground">
            Based in Vilnius, UAB &ldquo;Ruedus&rdquo; is a Lithuanian private company built
            around clear communication, dependable wholesale trade, and long-term relationships.
          </p>
        </div>
      </div>
    </section>
  )
}
