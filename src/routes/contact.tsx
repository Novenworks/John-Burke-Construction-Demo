import { createFileRoute } from "@tanstack/react-router";
import { EstimateForm } from "@/components/site/estimate-form";
import { SiteLayout } from "@/components/site/layout";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: `Request an Estimate | ${site.shortName}` }],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-display text-[0.7rem] uppercase tracking-[0.22em] text-steel">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Request an estimate.
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              Drop a line the way the current site asks — John will take it
              from there. The company still offers a list of references; just
              ask.
            </p>
            <div className="mt-10 max-w-xl border border-line bg-cream p-6 sm:p-8">
              <EstimateForm />
            </div>
          </div>
          <aside className="h-fit border border-line bg-ink p-8 text-paper">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.18em] text-paper/50">
              Direct
            </p>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-[0.8rem] text-paper/50">Phone</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">
                  <a
                    className="text-paper no-underline hover:underline"
                    href={`tel:${site.phoneTel}`}
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.8rem] text-paper/50">Email</dt>
                <dd className="mt-1">
                  <a
                    className="text-paper no-underline hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.8rem] text-paper/50">
                  Licensed address (CSLB)
                </dt>
                <dd className="mt-1 text-paper/80">{site.licensedAddress}</dd>
              </div>
              <div>
                <dt className="text-[0.8rem] text-paper/50">License</dt>
                <dd className="mt-1">
                  #{site.license} · {site.licenseClass}
                  <br />
                  {site.licenseStatus}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
