import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-10">
        <div>
          <Logo invert />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-paper/70">
            {site.serving}. California contractor license {site.license},{" "}
            {site.licenseClass}. {site.licenseStatus}.
          </p>
        </div>
        <div>
          <p className="font-display text-[0.7rem] font-medium uppercase tracking-[0.18em] text-paper/50">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            <li>
              <a
                className="text-paper no-underline hover:underline"
                href={`tel:${site.phoneTel}`}
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="text-paper no-underline hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li className="text-paper/70">{site.licensedAddress}</li>
            <li className="text-paper/50">Licensed business address (CSLB)</li>
          </ul>
        </div>
        <div>
          <p className="font-display text-[0.7rem] font-medium uppercase tracking-[0.18em] text-paper/50">
            License
          </p>
          <ul className="mt-4 space-y-2 text-[0.95rem] text-paper/80">
            <li>CSLB #{site.license}</li>
            <li>Issued {site.licenseIssued}</li>
            <li>Expires {site.licenseExpires}</li>
            <li>
              <a
                className="text-paper underline-offset-4 hover:underline"
                href={site.cslbUrl}
                rel="noreferrer"
                target="_blank"
              >
                Verify on cslb.ca.gov
              </a>
            </li>
            <li>BBB rating {site.bbbRating} (not accredited)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-5 text-[0.8rem] text-paper/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
            Photography and marks remain property of their owners.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            <Link to="/" className="text-paper/60 no-underline hover:text-paper">
              Home
            </Link>
            <Link
              to="/work"
              className="text-paper/60 no-underline hover:text-paper"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="text-paper/60 no-underline hover:text-paper"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
