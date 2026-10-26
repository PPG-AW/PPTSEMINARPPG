import { useState } from "react";
import { FlipHorizontal2, FolderOpen } from "lucide-react";
import { ARTEFAK, FOUR_C, type FourC } from "../data/content";
import { FOUR_C_PHOTOS } from "../data/photos";
import { Focus, Rule, SlideShell } from "../components/ui";
import { cn } from "../utils/cn";
import type { SlideProps } from "./core";

/* ················ 03 · KERANGKA 4C (KARTU FLIP) ················ */

function FlipCard({
  item,
  order,
  delay,
  flipped,
  dimmed,
  onToggle,
}: {
  item: FourC;
  order: number;
  delay: number;
  flipped: boolean;
  dimmed: boolean;
  onToggle: () => void;
}) {
  return (
    <Focus delay={delay} className="h-full">
      <div
        className={cn(
          "h-full transition-all duration-700 ease-out",
          flipped &&
            "relative z-10 scale-[1.04] drop-shadow-[0_30px_44px_rgba(18,32,58,0.38)]",
          dimmed && "scale-[0.96] opacity-35 saturate-[0.45]"
        )}
      >
        <div
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
          aria-label={`Kartu ${item.name}: ${flipped ? "tutup" : "buka"}`}
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onToggle();
            }
          }}
          className={cn(
            "flip h-[27rem] cursor-pointer select-none sm:h-[27.5rem] xl:h-[29.5rem]",
              flipped && "ring-2 ring-rose ring-offset-2 ring-offset-paper"
          )}
          data-flipped={flipped}
        >
          <div className="flip-inner">
            {/* SISI A */}
            <div className="flip-face flex flex-col border border-ink/30 bg-paper-deep p-5 shadow-card transition-colors hover:border-accent/70 md:p-6">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[13px] uppercase tracking-[0.28em] text-ink-soft">
                  <span className="font-medium text-accent">{item.letter}</span> · Sisi A
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 font-display text-lg font-semibold text-accent">
                  {item.letter.charAt(0)}
                </span>
              </div>
              <div className="-mx-5 mt-4 border-y border-ink/20 md:-mx-6">
                <img
                  src={FOUR_C_PHOTOS[order - 1].src}
                  alt={FOUR_C_PHOTOS[order - 1].alt}
                  loading="eager"
                  title={`Foto: ${FOUR_C_PHOTOS[order - 1].credit}`}
                  className="photo-blue h-24 w-full object-cover xl:h-28"
                />
              </div>
              <div className="mt-auto">
                <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-gold">
                  {item.letter} · {item.indo}
                </p>
                <h3 className="mt-1.5 font-display text-[2rem] font-medium leading-tight tracking-tight text-ink">
                  {item.name}
                </h3>
                <p className="mt-1.5 font-serif text-[21px] italic text-accent">{item.tag}</p>
                <Rule className="my-3.5 bg-ink/25" />
                <p className="font-serif text-[21px] leading-relaxed text-ink/85">
                  {item.frontNote}
                </p>
              </div>
              <p className="mt-4 flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-[0.24em] text-ink-soft">
                <FlipHorizontal2 size={11} className="text-accent" /> Balik kartu
              </p>
            </div>

            {/* SISI B */}
            <div className="flip-face flip-back flex flex-col overflow-hidden border border-ink bg-ink p-5 text-paper md:p-6">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[13px] uppercase tracking-[0.28em] text-paper/60">
                  <span className="text-gold">{item.letter}</span> · Sisi B
                </span>
                <span className="font-display text-sm italic text-gold">{item.indo}</span>
              </div>
              <div className="ruled mt-4 min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-gold">
                    Yang Saya Refleksikan
                  </p>
                  <p className="mt-1.5 font-serif text-[21px] leading-[1.7] text-paper">
                    {item.refleksi}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-gold">
                    Komitmen Saya
                  </p>
                  <p className="mt-1.5 font-serif text-[21px] leading-[1.7] text-paper">
                    {item.praktik}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-[0.24em] text-paper/60">
                <FlipHorizontal2 size={11} className="text-gold" /> Tutup kartu
              </p>
            </div>
          </div>
        </div>
      </div>
    </Focus>
  );
}

function Kerangka4CView({
  index,
  total,
  forcedOpen,
}: SlideProps & { forcedOpen?: number | null }) {
  const [interactiveOpen, setInteractiveOpen] = useState<number | null>(null);
  const isPrintState = forcedOpen !== undefined;
  const openIdx = isPrintState ? forcedOpen : interactiveOpen;
  const active = openIdx !== null ? FOUR_C[openIdx] : null;

  const toggleCard = (cardIndex: number) => {
    if (isPrintState) return;
    setInteractiveOpen(interactiveOpen === cardIndex ? null : cardIndex);
  };

  return (
    <SlideShell
      chapter="Babak II · Refleksi 4C · Kerangka"
      index={index}
      total={total}
     
      ghost="4C"
    >
      <div className="mx-auto flex h-full max-w-[95rem] flex-col justify-center">
        <Focus delay={80}>
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <h2 className="font-display text-6xl font-medium tracking-tight md:text-8xl">
              Kerangka <em className="hl-violet italic text-violet">4C</em> Seminar
            </h2>
            <div className="flex items-center gap-1.5">
              <span className="mr-1.5 font-mono text-[13px] uppercase tracking-[0.24em] text-ink-soft">
                Pilih kartu
              </span>
              {FOUR_C.map((c, i) => {
                const isOpen = openIdx === i;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => toggleCard(i)}
                    aria-pressed={isOpen}
                    aria-label={`${isOpen ? "Tutup" : "Buka"} kartu ${c.name}`}
                    title={c.name}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center border font-mono text-[13px] tabular-nums transition-colors",
                      isOpen
                        ? "border-accent bg-accent text-paper"
                        : "border-ink/25 bg-paper-mist/70 text-ink-soft hover:border-accent hover:text-accent"
                    )}
                  >
                    C{i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </Focus>

        <Focus delay={180}>
          <p
            className={cn(
              "mt-3 flex h-5 items-center gap-2 font-mono text-[13px] uppercase tracking-[0.22em] transition-colors md:text-[13px]",
              active ? "text-accent" : "text-ink-soft/70"
            )}
          >
            <FlipHorizontal2 size={12} />
            {active
              ? `Fokus: ${active.name} (${active.indo}) · klik kartu lagi untuk menutup`
              : "Klik kartu atau nomor C · kartu terbuka satu per satu"}
          </p>
        </Focus>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-6 xl:grid-cols-4">
          {FOUR_C.map((c, i) => (
            <FlipCard
              key={c.id}
              item={c}
              order={i + 1}
              delay={280 + i * 120}
              flipped={openIdx === i}
              dimmed={openIdx !== null && openIdx !== i}
              onToggle={() => toggleCard(i)}
            />
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

export function Kerangka4CSlide(props: SlideProps) {
  return <Kerangka4CView {...props} />;
}

/* Keadaan kartu yang dikunci untuk halaman PDF. Layout tetap sama persis
   dengan slide interaktif; hanya kartu aktifnya yang ditentukan dari luar. */
export function Kerangka4CPrintSlide({
  openIndex,
  ...props
}: SlideProps & { openIndex: number }) {
  return <Kerangka4CView {...props} forcedOpen={openIndex} />;
}

/* ················ 04 · ARTEFAK PENDUKUNG ················ */

export function ArtefakSlide({ index, total }: SlideProps) {
  const items = [ARTEFAK.apa, ARTEFAK.mengapa, ARTEFAK.bagian];
  const warna = [
    { t: "text-rose", b: "border-t-rose", c: "bg-rose text-paper" },
    { t: "text-violet", b: "border-t-violet", c: "bg-violet text-paper" },
    { t: "text-teal", b: "border-t-teal", c: "bg-teal text-paper" },
  ];

  return (
    <SlideShell
      chapter="Babak III · Artefak Pendukung"
      index={index}
      total={total}
      ghost="§"
      watermark="e-Portofolio · LMS"
    >
      <div className="mx-auto flex h-full max-w-[95rem] flex-col justify-center">
        <Focus delay={80}>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-display text-6xl font-medium tracking-tight md:text-8xl">
              Artefak <em className="hl-teal italic text-teal">e-Portofolio</em>
            </h2>
            <p className="max-w-3xl pb-1 font-serif text-xl italic leading-snug text-ink-soft md:text-2xl">
              Bukti dukung hasil refleksi 4C · tersimpan dan terunggah di LMS.
            </p>
          </div>
        </Focus>

        <div className="mt-8 grid gap-6 md:mt-10 xl:grid-cols-3 xl:gap-8">
          {items.map((it, i) => {
            const w = warna[i];
            return (
              <Focus key={it.q} delay={220 + i * 130} className="h-full">
                <article
                  className={cn(
                    "flex h-full flex-col border border-ink/20 border-t-4 bg-paper-mist/70 p-6 shadow-card md:p-7",
                    w.b
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center font-display text-xl font-semibold",
                        w.c
                      )}
                    >
                      {i + 1}
                    </span>
                    <FolderOpen size={22} className={cn("shrink-0", w.t)} />
                  </div>

                  <h3 className="mt-5 font-display text-[1.7rem] leading-tight tracking-tight text-ink md:text-[1.95rem]">
                    {it.q}
                  </h3>

                  <p className="mt-4 border-t border-ink/15 pt-4 font-serif text-[21px] leading-relaxed text-ink/90 md:text-[21px]">
                    {it.a}
                  </p>
                </article>
              </Focus>
            );
          })}
        </div>

        <Focus delay={660}>
          <div className="mt-7 flex flex-col items-start gap-4 border-y-2 border-ink px-1 py-5 md:flex-row md:items-center md:gap-7">
            <span className="flex shrink-0 items-center gap-2.5 bg-ink px-4 py-2 font-mono text-[13px] uppercase tracking-[0.22em] text-paper">
              <FolderOpen size={15} className="text-gold" />
              Simpulan artefak
            </span>
            <p className="font-serif text-[20px] italic leading-snug text-ink md:text-[23px]">
              Seluruh mata kuliah Semester 1 sampai 2 sudah direview memakai
              struktur 4C secara utuh · satu kesatuan bukti praktik yang
              konsisten.
            </p>
          </div>
        </Focus>
      </div>
    </SlideShell>
  );
}
