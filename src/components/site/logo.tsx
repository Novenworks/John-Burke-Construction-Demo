import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 no-underline"
      aria-label={`${site.shortName} home`}
    >
      <span
        className={
          invert
            ? "flex size-10 shrink-0 items-center justify-center border border-paper/30 font-display text-[0.7rem] font-semibold tracking-[0.14em] text-paper"
            : "flex size-10 shrink-0 items-center justify-center border border-ink bg-ink font-display text-[0.7rem] font-semibold tracking-[0.14em] text-paper"
        }
      >
        JBC
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={
            invert
              ? "font-display text-[0.95rem] font-semibold tracking-[0.04em] text-paper"
              : "font-display text-[0.95rem] font-semibold tracking-[0.04em] text-ink"
          }
        >
          John Burke
        </span>
        <span
          className={
            invert
              ? "mt-1 font-display text-[0.62rem] font-medium uppercase tracking-[0.18em] text-paper/70"
              : "mt-1 font-display text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted"
          }
        >
          Construction
        </span>
      </span>
    </Link>
  );
}
