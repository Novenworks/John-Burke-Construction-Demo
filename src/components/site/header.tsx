import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <a
            href="/#work"
            className="font-display text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink/80 no-underline hover:text-ink"
          >
            Work
          </a>
          <a
            href="/#services"
            className="font-display text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink/80 no-underline hover:text-ink"
          >
            Services
          </a>
          <a
            href="/#approach"
            className="font-display text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink/80 no-underline hover:text-ink"
          >
            How we work
          </a>
          <Link
            to="/work"
            className="font-display text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink/80 no-underline hover:text-ink"
          >
            Photo album
          </Link>
          <Link
            to="/contact"
            className="font-display text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink/80 no-underline hover:text-ink"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex h-12 items-center gap-2 font-display text-[0.78rem] font-medium tracking-wide text-ink no-underline"
          >
            <Phone className="size-4" aria-hidden />
            {site.phoneDisplay}
          </a>
          <Button asChild>
            <Link to="/contact">Request an Estimate</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex size-12 items-center justify-center text-ink"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            className="inline-flex size-12 items-center justify-center text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper px-4 py-5 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <a
              href="/#work"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center font-display text-[0.8rem] uppercase tracking-[0.16em] text-ink no-underline"
            >
              Work
            </a>
            <a
              href="/#services"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center font-display text-[0.8rem] uppercase tracking-[0.16em] text-ink no-underline"
            >
              Services
            </a>
            <a
              href="/#approach"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center font-display text-[0.8rem] uppercase tracking-[0.16em] text-ink no-underline"
            >
              How we work
            </a>
            <Link
              to="/work"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center font-display text-[0.8rem] uppercase tracking-[0.16em] text-ink no-underline"
            >
              Photo album
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center font-display text-[0.8rem] uppercase tracking-[0.16em] text-ink no-underline"
            >
              Contact
            </Link>
            <Button asChild className="mt-3 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Request an Estimate
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
