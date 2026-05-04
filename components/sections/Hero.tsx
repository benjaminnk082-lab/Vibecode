import { site } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pb-10 pt-32 md:px-10 md:pb-14 md:pt-40"
    >
      <div className="flex items-start justify-between text-xs uppercase tracking-[0.22em] text-bone-dim">
        <span>({site.location})</span>
        <span>Studio — Est. 2025</span>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* 3D canvas mounts here in next iteration */}
        <div className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-[2px] border border-bone/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-[2px]" />
      </div>

      <div className="space-y-10">
        <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] font-light leading-[0.95] tracking-tightest text-bone">
          {site.tagline.replace(/\.$/, "")}<span className="text-bone-dim">.</span>
        </h1>

        <div className="flex items-end justify-between gap-10">
          <p className="max-w-md text-sm leading-relaxed text-bone-dim md:text-base">
            {site.manifest[0]}
          </p>

          <div className="hidden flex-col items-end gap-2 text-xs uppercase tracking-[0.22em] text-bone-dim md:flex">
            <span className="h-10 w-px animate-pulse bg-bone/30" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
