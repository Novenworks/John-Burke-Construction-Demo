import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/outreach")({
  component: OutreachPage,
  head: () => ({
    meta: [
      { title: `Operator outreach | ${site.shortName}` },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

const captures = [
  {
    file: "/outreach/before-original-desktop.png",
    label: "BEFORE — original desktop",
  },
  { file: "/outreach/after-desktop.png", label: "AFTER — desktop 1440" },
  { file: "/outreach/after-mobile.png", label: "AFTER — mobile ~390" },
  { file: "/outreach/after-scroll.gif", label: "AFTER — scrolling GIF" },
  { file: "/outreach/after-scroll.mp4", label: "AFTER — scrolling MP4" },
] as const;

function OutreachPage() {
  return (
    <main className="min-h-dvh bg-cream text-ink">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.22em] text-steel">
          Operator only · noindex · unlinked
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          Outreach brief — {site.shortName}
        </h1>
        <p className="mt-3 text-muted">
          Speculative Novenworks redesign. The prospect is not represented as a
          client. This route is not in the customer nav, footer, or sitemap.
        </p>

        <Section title="Business snapshot">
          <Dl
            rows={[
              ["Business", site.name],
              ["Trade", "Residential & commercial general contracting"],
              ["Area", "San Diego County, CA"],
              ["Phone", site.phoneDisplay],
              ["Email", site.email],
              ["License", `${site.license} · ${site.licenseClass} · ${site.licenseStatus}`],
              ["CSLB issued", site.licenseIssued],
              ["Original site", site.originalUrl],
              ["Deployed demo", "https://john-burke-construction-demo.vercel.app"],
              ["GitHub", "https://github.com/Novenworks/John-Burke-Construction-Demo"],
              ["Agency", "None. Footer: Powered by GoDaddy Website Builder."],
            ]}
          />
        </Section>

        <Section title="Original-site observations">
          <ol className="list-decimal space-y-2 pl-5 text-[0.98rem] leading-relaxed">
            <li>
              Copyright still reads 2020. The site is a GoDaddy Website Builder
              8 template on a near-black field with League Spartan — a 2020-era
              presentation that has not been materially redesigned.
            </li>
            <li>
              The homepage repeats “Building Trust with Quality Work” many times
              and dumps the entire service list into one paragraph, including
              the cat-rescue line, without a service architecture a buyer can
              scan.
            </li>
            <li>
              Navigation advertises Photo Album and Testimonials, but the live
              album currently renders a single kitchen image. Stronger
              commercial and living-room photographs still exist on the same
              CDN from a 2019 snapshot and are unused.
            </li>
            <li>
              Phone and email exist, but the homepage does not lead with a
              clear estimate path. License 631941 is mentioned; the buyer is
              told to “log into” CSLB rather than given a direct check link.
            </li>
            <li>
              The company copy claims residential and commercial range,
              including large commercial work, while the live visual system
              communicates a thin brochure, not that range.
            </li>
          </ol>
        </Section>

        <Section title="Redesign improvements">
          <ol className="list-decimal space-y-2 pl-5 text-[0.98rem] leading-relaxed">
            <li>
              Hero photograph is the live first-party crew shot, with a
              specific headline: a GC for more than one kind of project.
            </li>
            <li>
              Verified proof strip: 1991, CSLB 631941, Class B, current/active,
              BBB A+ (explicitly not accredited).
            </li>
            <li>
              Services grouped around buyer decisions (remodel/addition, rot
              repair, new/commercial) instead of a comma-separated dump.
            </li>
            <li>
              Work grid uses every distinct first-party photograph, including
              archive album frames the live site no longer shows.
            </li>
            <li>
              Contact path is honest: mailto to the first-party address, live
              tel: link, no fake scheduler or silent form backend.
            </li>
          </ol>
        </Section>

        <Section title="Strongest talking points">
          <ol className="list-decimal space-y-2 pl-5 text-[0.98rem] leading-relaxed">
            <li>
              The business already photographs larger, more varied work than
              the current homepage is willing to show.
            </li>
            <li>
              License 631941 has been in force since 13 November 1991 (CSLB).
              The live site still says “over 25 years” and © 2020.
            </li>
            <li>
              Wood rot / termite is not a side note — CSLB lists the DBA San
              Diego Wood Rot Repair. The current site buries it in a paragraph.
            </li>
          </ol>
        </Section>

        <Section title="Personalization hooks">
          <ul className="list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed">
            <li>
              Hillcrest House Bed & Breakfast is a named commercial client on
              the company’s own testimonial page (Ann Callahan, innkeeper).
            </li>
            <li>
              The 2011 homepage captioned a kitchen remodel in Rancho Santa Fe
              — a first-party place name the live album no longer uses.
            </li>
            <li>
              Qualifying individual on the license is John Patrick Burke. The
              archive shows him with the lettered Burke Construction truck.
            </li>
          </ul>
        </Section>

        <Section title="What not to say">
          <ul className="list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed">
            <li>Do not say “your website sucks,” or insult GoDaddy / a designer.</li>
            <li>Do not imply Novenworks was hired or is the agency of record.</li>
            <li>
              Do not claim ownership of prospect photography or the JBC
              wordmark.
            </li>
            <li>
              Do not fabricate ROI, SEO rankings, lead volume, staff size,
              warranties, prices, or review totals (including Yelp 5.0 / 19).
            </li>
            <li>
              Do not say “BBB accredited.” Rating is A+; accreditation is no.
            </li>
            <li>
              Do not use BBB’s 2005 start date as founding. CSLB issue date is
              1991; 2005 is a corporate reissue.
            </li>
            <li>
              Do not advertise Kalmia St or Spring Valley addresses. Licensed
              address is the CSLB Santee listing.
            </li>
            <li>
              Do not claim a lifetime zero-complaint record as a slogan, even
              though the live site does. Point buyers to CSLB instead.
            </li>
            <li>Do not invent service-area city lists beyond San Diego.</li>
          </ul>
        </Section>

        <Section title="Subject lines">
          <ol className="list-decimal space-y-2 pl-5">
<li>John, I made something for John Burke Construction</li>
<li>Had an idea for John Burke Construction</li>
<li>John, I tried something with the John Burke Construction site</li>
</ol>
        </Section>

        <Section title="Cold email">
          <pre className="overflow-x-auto whitespace-pre-wrap border border-line bg-paper p-5 font-sans text-[0.95rem] leading-relaxed">
            {`Hi John,

I came across John Burke Construction and started looking through the site. A few minutes turned into me actually rebuilding the homepage.

The part I wanted to bring forward was the work itself and the story behind the business.

https://john-burke-construction-demo.vercel.app

No big pitch here. I just like building when I see an idea worth trying.

Curious what you think.

Vincent
Novenworks`}
          </pre>
        </Section>

        <Section title="Follow-up">
          <pre className="overflow-x-auto whitespace-pre-wrap border border-line bg-paper p-5 font-sans text-[0.95rem] leading-relaxed">
            {`Hi John,

Circling back once on this. I made that homepage concept for John Burke Construction and figured it was worth one more send.

https://john-burke-construction-demo.vercel.app

If it is not on your radar right now, all good.

Vincent`}
          </pre>
        </Section>

        <Section title="Captures">
          <div className="grid gap-8">
            {captures.map((c) => (
              <figure key={c.file} className="border border-line bg-paper p-4">
                <figcaption className="mb-3 flex items-center justify-between gap-3 font-display text-[0.75rem] uppercase tracking-[0.14em]">
                  <span>{c.label}</span>
                  <a className="text-steel underline-offset-4 hover:underline" href={c.file}>
                    Direct file
                  </a>
                </figcaption>
                {c.file.endsWith(".mp4") ? (
                  <video
                    className="w-full bg-ink"
                    controls
                    playsInline
                    src={c.file}
                  />
                ) : (
                  <img src={c.file} alt={c.label} className="w-full" />
                )}
              </figure>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 border-t border-line pt-8">
      <h2 className="font-display text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Dl({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="space-y-3">
      {rows.map(([k, v]) => (
        <div
          key={k}
          className="grid gap-1 border-b border-line pb-3 sm:grid-cols-[10rem_1fr]"
        >
          <dt className="font-display text-[0.7rem] uppercase tracking-[0.14em] text-muted">
            {k}
          </dt>
          <dd className="text-[0.98rem]">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
