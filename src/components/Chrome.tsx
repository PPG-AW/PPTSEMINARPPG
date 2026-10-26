import {
  ArrowLeft,
  ArrowRight,
  Maximize,
  Minimize,
  Pause,
  Play,
  Printer,
  RotateCcw,
} from "lucide-react";
import { cn } from "../utils/cn";
import { pad } from "./ui";
import { PRESENTER } from "../data/content";

function ChromeButton({
  onClick,
  label,
  title,
  children,
  className,
}: {
  onClick: () => void;
  label: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={title ?? label}
      className={cn(
        "flex h-9 w-9 items-center justify-center border border-ink/25 bg-paper-mist/60 text-ink transition-colors hover:border-accent hover:text-accent",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TopChrome({
  timer,
  running,
  onTimerToggle,
  onTimerReset,
  isFullscreen,
  onFullscreen,
  onPrint,
}: {
  timer: string;
  running: boolean;
  onTimerToggle: () => void;
  onTimerReset: () => void;
  isFullscreen: boolean;
  onFullscreen: () => void;
  onPrint: () => void;
}) {
  return (
    <div className="relative z-30 flex h-12 shrink-0 items-center justify-between border-b border-ink/20 bg-paper/90 px-4 backdrop-blur md:px-6">
      {/* bingkai biru tipis di tepi bawah bar */}
      <div aria-hidden className="absolute inset-x-0 -bottom-[3px] h-[3px] bg-accent/80" />
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-7 shrink-0 items-center justify-center border border-accent px-2 font-display text-[11px] font-semibold text-accent">
          {PRESENTER.monogram}
        </span>
        <p className="truncate font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft sm:text-[11px]">
          PPG · Matematika <span className="text-ink/25">/</span> Presentasi
          Lisan
        </p>
      </div>

      <div className="flex items-center gap-2">
        {/* Timer presentasi */}
        <div className="flex items-center border border-ink/25 bg-paper-mist/60">
          <span
            className="flex items-center gap-2 px-3 font-mono text-xs tabular-nums text-ink"
            title="Timer presentasi"
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                running ? "animate-pulse bg-accent" : "bg-ink/30"
              )}
            />
            {timer}
          </span>
          <button
            type="button"
            onClick={onTimerToggle}
            aria-label={running ? "Jeda timer" : "Lanjutkan timer"}
            title={running ? "Jeda (klik)" : "Lanjutkan"}
            className="flex h-9 w-8 items-center justify-center border-l border-ink/15 text-ink-soft transition-colors hover:text-accent"
          >
            {running ? <Pause size={13} /> : <Play size={13} />}
          </button>
          <button
            type="button"
            onClick={onTimerReset}
            aria-label="Atur ulang timer"
            title="Atur ulang"
            className="flex h-9 w-8 items-center justify-center border-l border-ink/15 text-ink-soft transition-colors hover:text-accent"
          >
            <RotateCcw size={13} />
          </button>
        </div>

        <ChromeButton onClick={onPrint} label="Cetak ringkasan" title="Cetak (P)">
          <Printer size={14} />
        </ChromeButton>
        <ChromeButton
          onClick={onFullscreen}
          label={isFullscreen ? "Keluar layar penuh" : "Mode layar penuh"}
          title="Layar penuh (F)"
        >
          {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
        </ChromeButton>
      </div>
    </div>
  );
}

export function BottomChrome({
  index,
  total,
  chapters,
  onPrev,
  onNext,
  onGo,
}: {
  index: number;
  total: number;
  chapters: string[];
  onPrev: () => void;
  onNext: () => void;
  onGo: (n: number) => void;
}) {
  return (
    <div className="relative z-30 flex h-14 shrink-0 items-center justify-between gap-3 border-t border-ink/20 bg-paper/90 px-4 backdrop-blur md:px-6">
      {/* garis progres berjalan */}
      <div className="absolute inset-x-0 -top-px h-px bg-ink/15">
        <div
          className="h-[2.5px] -translate-y-px bg-accent transition-all duration-700 ease-out"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>
      <button
        type="button"
        onClick={onPrev}
        disabled={index === 0}
        className="group flex items-center gap-2.5 border border-ink/25 bg-paper-mist/60 px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 md:px-5"
      >
        <ArrowLeft
          size={13}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        <span className="hidden sm:inline">Sebelumnya</span>
      </button>

      {/* indeks lembar */}
      <nav
        aria-label="Navigasi lembar"
        className="flex min-w-0 items-center gap-1 overflow-x-auto md:gap-1.5"
      >
        {chapters.map((c, i) => (
          <button
            key={c}
            type="button"
            onClick={() => onGo(i)}
            title={c}
            aria-label={`Ke lembar ${i + 1}: ${c}`}
            aria-current={i === index}
            className={cn(
              "relative shrink-0 px-1.5 py-1 font-mono text-[11px] tabular-nums tracking-wider transition-colors md:px-2 md:text-xs",
              i === index
                ? "text-accent"
                : "text-ink-soft/70 hover:text-ink"
            )}
          >
            {pad(i + 1)}
            <span
              className={cn(
                "absolute inset-x-1.5 bottom-0 h-px transition-colors md:inset-x-2",
                i === index ? "bg-accent" : "bg-ink/15"
              )}
            />
          </button>
        ))}
      </nav>

      <button
        type="button"
        onClick={onNext}
        disabled={index === total - 1}
        className="group flex items-center gap-2.5 border border-ink/25 bg-paper-mist/60 px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 md:px-5"
      >
        <span className="hidden sm:inline">Berikutnya</span>
        <ArrowRight
          size={13}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>
    </div>
  );
}
