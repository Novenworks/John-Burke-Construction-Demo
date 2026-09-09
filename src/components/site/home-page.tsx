import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  process,
  projects,
  secondary,
  services,
  site,
  testimonials,
} from "@/lib/site";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-display text-[0.7rem] font-medium uppercase tracking-[0.22em] text-steel">
      {children}
    </p>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Services />
      <Work />
      <Difference />
      <Process />
      <Capabilities />
      <Reputation />
      <Local />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[min(88vh,820px)] overflow-hidden bg-ink text-paper">
      <img
        src="/images/work/crew-jobsite.jpg"
        alt="John Burke Construction crew working a commercial interior jobsite"
        className="absolute inset-0 size-full object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/72 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
      <div className="relative mx-auto flex min-h-[min(88vh,820px)] max-w-[1440px] flex-col justify-end px-4 pb-14 pt-28 sm:px-6 lg:px-10 lg:pb-20">
        <div className="max-w-2xl">
          <p className="font-display text-[0.72rem] font-medium uppercase tracking-[0.22em] text-paper/70">
            {site.serving} · License #{site.license}
          </p>
          <h1 className="mt-4 font-display text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[3.1rem] lg:text-[3.6rem]">
            {site.headline}
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-paper/80">
            {site.support}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="invert" size="lg">
              <Link to="/contact">Request an Estimate</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#work">View Our Work</a>
            </Button>
          </div>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-6 inline-flex min-h-12 items-center gap-2 font-display text-[0.85rem] tracking-wide text-paper no-underline"
          >
            <Phone className="size-4" aria-hidden />
            Or call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  const items = [
    { k: "Licensed since", v: "1991" },
    { k: "CSLB", v: `#${site.license}` },
    { k: "Classification", v: "B · General Building" },
    { k: "Status", v: site.licenseStatus },
    { k: "BBB rating", v: `${site.bbbRating}` },
  ];
  return (
    <section
      aria-label="Verified credentials"
      className="border-b border-line bg-cream"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <div key={item.k} className="bg-cream px-4 py-6 sm:px-6">
            <p className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              {item.k}
            </p>
            <p className="mt-2 font-display text-[1.05rem] font-semibold tracking-tight text-ink">
              {item.v}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Eyebrow>What we take on</Eyebrow>
        <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Grouped the way a buyer actually decides.
          </h2>
          <p className="max-w-md text-[0.98rem] leading-relaxed text-muted">
            John Burke Construction is an all-aspect contractor: new work,
            remodel, and repair — residential and commercial — with a division
            dedicated to wood rot and termite repair.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="flex flex-col overflow-hidden border border-line bg-cream shadow-[var(--shadow-border)]"
            >
              <div
                className={
                  s.id === "repair"
                    ? "flex aspect-[16/11] items-center justify-center bg-ink p-8"
                    : "aspect-[16/11] overflow-hidden bg-ink-2"
                }
              >
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className={
                    s.id === "repair"
                      ? "max-h-44 w-auto object-contain"
                      : "size-full object-cover"
                  }
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                  {s.body}
                </p>
                <ul className="mt-5 space-y-1.5 border-t border-line pt-4 font-display text-[0.72rem] uppercase tracking-[0.14em] text-ink/80">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const featured = projects.slice(0, 4);
  return (
    <section id="work" className="scroll-mt-24 bg-ink py-20 text-paper">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper/50">
              Real work
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Photographs from the company’s own album.
            </h2>
          </div>
          <Button asChild variant="ghost">
            <Link to="/work" className="inline-flex items-center gap-2">
              Full photo album <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featured.map((p, i) => (
            <figure
              key={p.src}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <div
                className={
                  i === 0
                    ? "aspect-[16/8] overflow-hidden bg-ink-2"
                    : "aspect-[16/11] overflow-hidden bg-ink-2"
                }
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="size-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-display text-[0.85rem] font-medium tracking-wide">
                  {p.caption}
                </span>
                <span className="text-[0.8rem] text-paper/50">{p.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section id="approach" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative">
          <img
            src="/images/about/john-burke-truck.jpg"
            alt="John Burke standing with a lettered Burke Construction work truck"
            className="w-full max-w-md object-contain"
          />
          <p className="mt-3 text-[0.8rem] text-muted">
            First-party archive: owner with the company truck.
          </p>
        </div>
        <div>
          <Eyebrow>Why this company</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A practical San Diego contractor for jobs that need experienced
            coordination.
          </h2>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink/85">
            <p>
              The same license has covered both houses and commercial spaces
              since 1991. The live site still says it plainly: new, remodel, and
              repair — and a whole division for wood rot and termite work, also
              registered with CSLB as {site.dba}.
            </p>
            <p>
              That range is the point. Kitchen and living-room remodels sit in
              the same album as commercial interiors with the crew on site. If
              the job is small, it still gets a licensed contractor — the
              company’s own copy mentions jobs from large commercial work down
              to unusual residential calls.
            </p>
            <p>
              Do not take our word for the license. Look up {site.license} on
              the Contractors State License Board.
            </p>
          </div>
          <Button asChild className="mt-8" variant="outline">
            <a href={site.cslbUrl} rel="noreferrer" target="_blank">
              Check license {site.license}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-y border-line bg-cream px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Eyebrow>How a job starts</Eyebrow>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          No invented timeline. Three honest steps.
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {process.map((step) => (
            <li key={step.n} className="border-t border-ink/20 pt-6">
              <p className="font-display text-[0.75rem] tracking-[0.2em] text-steel">
                {step.n}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Eyebrow>Also on the truck</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
          Secondary trades, same contractor.
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {secondary.map((item) => (
            <li
              key={item}
              className="border border-line bg-cream px-4 py-4 font-display text-[0.78rem] uppercase tracking-[0.14em]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reputation() {
  return (
    <section id="testimonials" className="bg-ink px-4 py-20 text-paper sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Eyebrow>From the company’s testimonial page</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Names and words published by John Burke Construction — not invented
          here.
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="border border-paper/15 bg-ink-2 p-7"
            >
              <p className="font-serif text-[1.12rem] leading-relaxed text-paper/90">
                “{t.quote}”
              </p>
              <footer className="mt-6 font-display text-[0.78rem] uppercase tracking-[0.14em] text-paper/60">
                {t.name}
                <span className="mt-1 block normal-case tracking-normal text-paper/45">
                  {t.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-[0.95rem] text-paper/60">
          The original site still says: for more testimonials and references,
          call or email. We have not added review counts from other websites.
        </p>
      </div>
    </section>
  );
}

function Local() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>San Diego County</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Based on a Santee license. Working San Diego since 1991.
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
            The first-party site does not publish a city-by-city service list,
            so this redesign does not invent one. The licensed address on file
            with CSLB is {site.licensedAddress}. The public promise is the one
            on the current homepage: serving San Diego.
          </p>
        </div>
        <div className="border border-line bg-cream p-8">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            License snapshot
          </p>
          <dl className="mt-5 space-y-3 text-[0.95rem]">
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="text-muted">Number</dt>
              <dd className="font-medium">{site.license}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="text-muted">Class</dt>
              <dd className="font-medium">{site.licenseClass}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="text-muted">Issued</dt>
              <dd className="font-medium">{site.licenseIssued}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Expires</dt>
              <dd className="font-medium">{site.licenseExpires}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <img
        src="/images/work/commercial-interior.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.22em] text-paper/60">
          Ready to talk
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Request an estimate. Or just call John.
        </h2>
        <p className="mt-5 max-w-lg text-paper/75">
          No online booking calendar is published on the current site, so this
          page does not pretend to have one.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="invert" size="lg">
            <Link to="/contact">Request an Estimate</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
