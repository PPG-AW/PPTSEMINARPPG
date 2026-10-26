import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export const pad = (n: number) => String(n).padStart(2, "0");

/* Pembungkus animasi “Fokus Sinematik”: konten masuk dari kabur → tajam */
export function Focus({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("focus-item", className)}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

export function Kicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.26em] text-ink-soft md:text-[13px]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-ink/20", className)} />;
}

/* Pigura foto gaya majalah · bingkai, kertas, keterangan “Fig.”, nada biru */
export function PhotoPlate({
  src,
  fig,
  caption,
  credit,
  alt,
  className,
  imgClassName,
  delay = 0,
  live = false,
  badge,
}: {
  src: string;
  fig: string;
  caption: string;
  credit?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  live?: boolean;
  badge?: string;
}) {
  return (
    <Focus delay={delay} className={className}>
      <figure className="group relative border border-ink/30 bg-paper-mist p-2 shadow-card">
        {badge && (
          <span className="absolute -right-2 -top-2.5 z-10 flex rotate-2 items-center gap-1.5 border border-ink/25 bg-accent px-2 py-1 font-mono text-[8px] uppercase tracking-[0.22em] text-paper shadow-card">
            <span className="h-1 w-1 animate-pulse rounded-full bg-paper" />
            {badge}
          </span>
        )}
        <div className="overflow-hidden border border-ink/20">
          <img
            src={src}
            alt={alt ?? caption}
            loading="eager"
            className={cn(
              "photo-blue h-full w-full object-cover",
              live ? "kenburns" : "group-hover:scale-[1.04]",
              imgClassName
            )}
          />
        </div>
        <figcaption className="flex items-baseline justify-between gap-3 px-1 pb-0.5 pt-2">
          <span className="min-w-0 truncate font-mono text-[8.5px] uppercase tracking-[0.2em] text-ink-soft">
            <span className="font-medium text-accent">{fig}</span>
            <span className="mx-1.5 text-ink/30">·</span>
            {caption}
          </span>
          {credit && (
            <span className="shrink-0 font-serif text-[10px] italic text-ink-soft/80">
              Foto: {credit}
            </span>
          )}
        </figcaption>
      </figure>
    </Focus>
  );
}

/* Kerangka slide: masthead babak + durasi + nomor lembar + ornamen cetak */
export function SlideShell({
  chapter,
  index,
  total,
  ghost,
  watermark,
  children,
  className,
  contentClassName,
}: {
  chapter: string;
  index: number;
  total: number;
  ghost?: string;
  watermark?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden",
        className
      )}
    >
      {/* garis tepi editorial ganda */}
      <div className="pointer-events-none absolute inset-y-0 left-6 z-20 hidden w-px bg-ink/15 lg:block" />
      <div className="pointer-events-none absolute inset-y-0 left-8 z-20 hidden w-px bg-ink/8 lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-6 z-20 hidden w-px bg-ink/15 lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-8 z-20 hidden w-px bg-ink/8 lg:block" />

      {/* tanda potong sudut ala halaman cetak */}
      <div aria-hidden className="pointer-events-none absolute inset-3 z-20 hidden md:block">
        <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-accent/60" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-accent/60" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-accent/60" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-accent/60" />
      </div>

      {/* label tepi vertikal — diperjelas dan berwarna */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-4 top-24 z-20 hidden font-mono text-[10px] uppercase tracking-[0.38em] text-accent/60 lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        PPG · Bidang Studi Matematika · Persamaan Kuadrat
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-24 right-4 top-24 z-20 hidden rotate-180 font-mono text-[10px] uppercase tracking-[0.38em] text-ink-soft/60 lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Presentasi Lisan · {chapter}
      </span>

      {/* masthead */}
      <header className="relative z-10 flex items-baseline justify-between gap-4 border-b border-ink/15 px-4 py-3 md:px-14 lg:px-20">
        <Kicker className="truncate text-accent">{chapter}</Kicker>
        <span className="flex shrink-0 items-baseline gap-4">
          <Kicker>
            Lembar {pad(index + 1)} <span className="text-ink/30">/</span>{" "}
            {pad(total)}
          </Kicker>
        </span>
      </header>

      {/* badan slide */}
      <div className="relative z-10 min-h-0 flex-1">
        {ghost && (
          <span
            aria-hidden
            className="pointer-events-none absolute -right-8 bottom-0 z-0 select-none font-display text-[42vw] font-semibold leading-none text-accent/[0.08] md:text-[28rem] lg:-right-14"
          >
            {ghost}
          </span>
        )}
        {watermark && (
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-10 left-10 z-0 hidden select-none font-display text-[4rem] font-light italic leading-none tracking-tight text-ink/[0.05] md:block lg:text-[5rem]"
          >
            {watermark}
          </span>
        )}
        {/* garis bantu vertikal tipis — menciptakan kolom kiri-kanan */}
        <div className="pointer-events-none absolute inset-y-0 left-2 z-20 hidden w-px bg-ink/8 lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-2 z-20 hidden w-px bg-ink/8 lg:block" />

        <div
          className={cn(
            "relative z-10 h-full overflow-y-auto px-4 py-6 md:px-14 md:py-10 lg:px-20",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>

      {/* folio bawah */}
      <footer className="relative z-10 flex items-baseline justify-between gap-4 border-t border-ink/15 px-4 py-2.5 md:px-14 lg:px-20">
        <Kicker className="tracking-[0.22em]">PPG · Matematika</Kicker>
        <Kicker className="tracking-[0.22em]">{pad(index + 1)}</Kicker>
      </footer>
    </section>
  );
}
