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

        <Section title="Original-site observations (checked 2026-10-06 via page fetch)">
          <ol className="list-decimal space-y-2 pl-5 text-[0.98rem] leading-relaxed">
            <li>
              The footer on the homepage, contact page and testimonials page still
              reads “Copyright © 2020”, and the homepage says “over 25
              years” while CSLB shows license 631941 issued 11/13/1991.
            </li>
            <li>
              Contact page publishes john@johnburkeconstruction.com and
              619.838.1131; the homepage has a working tel: link.
            </li>
            <li>
              Not re-verified today: a real-browser mobile pass of the original site.
              The original site was unreachable from the QA sandbox browser
              (ERR_CONNECTION_RESET), so no mobile or layout claim should be made
              in outreach.
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

        <Section title="Subject lines"><ol className="list-decimal space-y-2 pl-5"><li>Your website footer still says 2020</li><li>A version of johnburkeconstruction.com built around your own photos</li></ol></Section>

        <Section title="Contact channel (verified 2026-10-06)">
          <p className="text-[0.98rem] leading-relaxed">
            Published business email john@johnburkeconstruction.com and phone 619.838.1131
            on https://johnburkeconstruction.com/contact-us. Send to the email only. Do not
            guess other mailboxes. The prospect receives the demo root URL, never /outreach.
          </p>
        </Section>

        <Section title="Outreach email (do not send without review)"><pre className="whitespace-pre-wrap rounded-lg bg-paper p-5 text-sm leading-relaxed">{`Hi John,

I was on johnburkeconstruction.com today and the footer still reads Copyright © 2020, and the homepage still says "over 25 years" even though your license has been active since 1991. Your own photos of the kitchen, living room and commercial work are stronger than the current pages make them look.

I built a version of the site around those photos, with your services grouped into remodels and additions, wood rot and termite repair, and new and commercial work, a direct CSLB license check link, and an estimate form that opens an email to your real address:

https://john-burke-construction-demo.vercel.app

If you want it, I handle the whole job: copy, build, mobile polish, connecting it to your existing phone and email, technical setup and launch. I handle the work. You review and approve.

Want me to send over the full breakdown of what you get and what it costs?

Vincent, Novenworks`}</pre></Section>

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
