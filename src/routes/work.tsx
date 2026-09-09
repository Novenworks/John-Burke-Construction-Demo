import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/layout";
import { projects, site } from "@/lib/site";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [{ title: `Photo Album | ${site.shortName}` }],
  }),
});

function WorkPage() {
  return (
    <SiteLayout>
      <section className="border-b border-line px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.22em] text-steel">
            First-party photography
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Work from the company album — not stock, not rendered.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
            Every photograph on this page was published by John Burke
            Construction on johnburkeconstruction.com (live or archived).
            Captions stay generic unless the original site named the job.
          </p>
        </div>
      </section>
      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <figure key={p.src} className="flex flex-col">
              <div className="aspect-[16/11] overflow-hidden bg-ink-2">
                <img
                  src={p.src}
                  alt={p.alt}
                  className={
                    p.src.includes("new-construction")
                      ? "size-full object-contain"
                      : "size-full object-cover"
                  }
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-[0.95rem] font-semibold">
                  {p.caption}
                </p>
                <p className="mt-1 text-[0.85rem] text-muted">{p.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-[1440px] border border-line bg-cream p-8">
          <h2 className="font-display text-2xl font-semibold">
            Have a similar job?
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Call {site.phoneDisplay} or request an estimate. References are
            available from the company on request.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/contact">Request an Estimate</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
