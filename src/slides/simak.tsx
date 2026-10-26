import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Smartphone,
} from "lucide-react";
import {
  SIMAK,
  SIMAK_EVALUASI,
  SIMAK_FITUR,
  SIMAK_TAHAP,
  SIMAK_UKURAN,
} from "../data/content";
import { PHOTOS } from "../data/photos";
import { Focus, Kicker, PhotoPlate, Rule, SlideShell } from "../components/ui";
import { cn } from "../utils/cn";
import type { SlideProps } from "./core";

/* ················ 07 · SIMAK · MASALAH & SOLUSI ················ */

export function SimakMasalahSlide({ index, total }: SlideProps) {
  return (
    <SlideShell
      chapter="Babak IV · SIMAK · Masalah & Solusi"
      index={index}
      total={total}
     
      ghost="√"
      watermark="ax² + bx + c = 0"
    >
      <div className="mx-auto flex h-full max-w-[95rem] flex-col justify-center">
        <Focus delay={80}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-accent">Karya Inovatif · Identitas</Kicker>
              <h2 className="mt-1.5 font-display text-6xl font-medium tracking-tight md:text-8xl">
                <span className="hl">SIMAK</span>{" "}
                <em className="text-2xl font-light italic text-ink-soft md:text-3xl">
                  Sistem Mandiri Anti Ketinggalan
                </em>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-ink/25 bg-paper-mist/70 px-3 py-2 font-mono text-[13px] uppercase tracking-[0.2em] text-ink-soft md:text-[13px]">
                <Smartphone size={12} className="text-accent" />
                Website · via HP · Persamaan Kuadrat · 36 siswa SMK Fase E
              </div>
              <PhotoPlate
                src={PHOTOS.simak.src}
                alt={PHOTOS.simak.alt}
                credit={PHOTOS.simak.credit}
                fig="Fig. 03"
                caption="Siswa vokasi belajar mandiri"
                live
                delay={160}
                className="hidden w-44 lg:block"
                imgClassName="aspect-[4/3]"
              />
            </div>
          </div>
        </Focus>

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-14 lg:gap-14">
          {/* latar belakang masalah */}
          <div className="lg:col-span-6">
            <Focus delay={200}>
              <Kicker className="text-gold">Latar Belakang Masalah</Kicker>
            </Focus>
            <div className="mt-3">
              {SIMAK.masalah.map((m, i) => (
                <Focus key={m.kondisi} delay={260 + i * 90}>
                  <div className="border-t border-ink/20 py-3 last:border-b">
                    <p className="font-serif text-[19px] leading-snug text-ink">
                      {m.kondisi}
                    </p>
                    <p className="mt-1 flex items-start gap-1.5 font-mono text-[10.5px] uppercase leading-snug tracking-[0.14em] text-accent">
                      <ArrowRight size={12} className="mt-px shrink-0" />
                      {m.dampak}
                    </p>
                  </div>
                </Focus>
              ))}
            </div>
            <Focus delay={620}>
              <p className="mt-4 bg-ink px-4 py-3.5 font-serif text-[21px] italic leading-relaxed text-paper shadow-card">
                Solusinya: {SIMAK.solusi}
              </p>
            </Focus>
          </div>

          {/* mengapa bukan yang sudah ada */}
          <div className="lg:col-span-8">
            <Focus delay={240}>
              <Kicker className="text-gold">
                Mengapa bukan teknologi yang sudah ada?
              </Kicker>
            </Focus>
            <Focus delay={320}>
              <div className="mt-3 overflow-hidden border border-ink/30 bg-paper-mist/60 shadow-card">
                <div className="grid grid-cols-[0.6fr_1.1fr_1.1fr] border-b-2 border-ink bg-ink px-3 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-paper md:px-4">
                  <span>Teknologi</span>
                  <span className="text-paper/60">Keterbatasan</span>
                  <span className="text-gold">Solusi SIMAK</span>
                </div>
                {SIMAK.banding.map((b, i) => {
                  const w = ["text-rose", "text-violet", "text-teal", "text-amber"][i];
                  return (
                    <div
                      key={b.alat}
                      className="grid grid-cols-[0.6fr_1.1fr_1.1fr] gap-4 border-b border-ink/10 px-3 py-3.5 last:border-b-0 md:px-4"
                    >
                      <p className={cn("font-display text-[19px] leading-snug md:text-xl", w)}>
                        {b.alat}
                      </p>
                      <p className="font-serif text-[17px] leading-snug text-ink-soft md:text-[18px]">
                        {b.alasan}
                      </p>
                      <p className="flex items-start gap-2 font-serif text-[17px] font-medium leading-snug text-ink md:text-[18px]">
                        <ArrowRight size={15} className="mt-1 shrink-0 text-accent" />
                        {b.solusi}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Focus>
            <Focus delay={560}>
              <p className="mt-4 border-l-2 border-accent pl-4 font-serif text-[21px] italic leading-relaxed text-ink/90 md:text-xl">
                {SIMAK.kesimpulan}
              </p>
            </Focus>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ················ 08 · SIMAK · CARA KERJA (8 FITUR) ················ */

export function SimakFiturSlide({ index, total }: SlideProps) {
  return (
    <SlideShell
      chapter="Babak IV · SIMAK · Cara Kerja di Tempat Magang"
      index={index}
      total={total}
     
      ghost="ƒ"
      watermark="x² + bx + c = (x + p)(x + q)"
    >
      <div className="mx-auto flex h-full max-w-[95rem] flex-col justify-center">
        <Focus delay={80}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-6xl font-medium tracking-tight md:text-8xl">
              Delapan <em className="hl-amber italic text-amber">Fitur</em>
            </h2>
            <p className="max-w-2xl pb-1 font-serif text-[21px] italic leading-relaxed text-ink-soft">
              Konteks: siswa magang tak bisa hadir di kelas · SIMAK membuat
              mereka tetap mengejar materi dari tempat magang, tanpa mengganggu
              jadwal praktik.
            </p>
          </div>
        </Focus>

        <div className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
          {SIMAK_FITUR.map((f, i) => (
            <Focus key={f.n} delay={200 + i * 80}>
              <article className="h-full border-t-2 border-ink pt-3 transition-all hover:-translate-y-0.5 hover:bg-paper-mist/60">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[13px] uppercase tracking-[0.24em] text-gold">
                    Fitur
                  </span>
                  <span className="font-display text-3xl font-semibold tabular-nums text-accent/25">
                    {f.n}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl leading-snug tracking-tight text-ink md:text-[19px]">
                  {f.title}
                </h3>
                <p className="mt-1.5 font-serif text-[21px] leading-relaxed text-ink-soft">
                  {f.desc}
                </p>
                {f.chips && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {f.chips.map((c, ci) => (
                      <span
                        key={c}
                        className={cn(
                          "border px-2 py-1 font-mono text-[13px] uppercase tracking-[0.14em]",
                          ci === 0
                            ? "border-accent/50 text-accent"
                            : "border-ink/25 text-ink-soft"
                        )}
                      >
                        {ci + 1} · {c}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Focus>
          ))}
        </div>

        <Focus delay={840}>
          <div className="mt-6 flex items-center gap-3 border border-ink/25 bg-paper-mist/70 px-4 py-2.5">
            <Gauge size={16} className="shrink-0 text-accent" />
            <p className="font-serif text-[21px] italic leading-snug text-ink/85 md:text-[18px]">
              Alur bantuan memastikan siswa mencoba mandiri dulu · baru meminta
              bantuan manusia bila benar-benar perlu, sehingga kemandirian tetap
              terlatih.
            </p>
          </div>
        </Focus>
      </div>
    </SlideShell>
  );
}
/* ················ 09 · SIMAK · IMPLEMENTASI & EVALUASI ················ */

const TAHAP_WARNA = [
  "bg-rose border-rose text-paper",
  "bg-violet border-violet text-paper",
  "bg-teal border-teal text-paper",
  "bg-amber border-amber text-paper",
];

const EVAL_WARNAT = [
  { label: "Sebelum", icon: ClipboardCheck, warna: "text-rose", garis: "border-t-rose" },
  { label: "Selama", icon: Activity, warna: "text-violet", garis: "border-t-violet" },
  { label: "Sesudah", icon: CheckCircle2, warna: "text-teal", garis: "border-t-teal" },
  { label: "Tindak lanjut", icon: ArrowRight, warna: "text-amber", garis: "border-t-amber" },
];

export function SimakImplementasiSlide({ index, total }: SlideProps) {
  return (
    <SlideShell
      chapter="Babak IV · SIMAK · Implementasi & Evaluasi"
      index={index}
      total={total}
      ghost="π"
      watermark="x = (−b ± √(b² − 4ac)) ⁄ 2a"
    >
      <div className="mx-auto flex h-full max-w-[95rem] flex-col justify-center">
        <Focus delay={80}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-5xl font-medium tracking-tight md:text-7xl">
              Implementasi <em className="hl-amber italic text-amber">&amp; Evaluasi</em>
            </h2>
            <p className="max-w-2xl pb-1 font-serif text-lg italic leading-snug text-ink-soft md:text-xl">
              Delapan tahap rancangan dan empat waktu evaluasi · semuanya
              terbaca sekali pandang.
            </p>
          </div>
        </Focus>

        <div className="mt-7 grid gap-8 xl:grid-cols-14 xl:gap-12">
          {/* KIRI · 8 tahap rancangan, tampil seluruhnya */}
          <div className="xl:col-span-8">
            <Focus delay={180}>
              <div className="flex items-center gap-3">
                <Kicker className="text-accent">Rancangan Implementasi</Kicker>
                <Rule className="w-14" />
                <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-ink-soft">
                  8 tahap
                </span>
              </div>
            </Focus>

            <ol className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {SIMAK_TAHAP.map((t, i) => {
                const w = TAHAP_WARNA[i % 4];
                return (
                  <li
                    key={t.roman}
                    className="focus-item flex items-start gap-3.5 border-b border-ink/15 pb-3"
                    style={{ animationDelay: `${240 + i * 70}ms` }}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border font-display text-base font-semibold",
                        w
                      )}
                    >
                      {t.roman}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-lg leading-tight tracking-tight text-ink md:text-xl">
                        {t.title}
                      </p>
                      <p className="mt-1 font-serif text-[17px] leading-snug text-ink-soft md:text-[18px]">
                        {t.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* KANAN · evaluasi keberhasilan */}
          <div className="xl:col-span-6">
            <Focus delay={260}>
              <div className="flex items-center gap-3">
                <Kicker className="text-accent">Evaluasi Keberhasilan</Kicker>
                <Rule className="w-14" />
              </div>
            </Focus>

            <div className="mt-4 space-y-3">
              {SIMAK_EVALUASI.map(([waktu, kegiatan], i) => {
                const cfg = EVAL_WARNAT[i];
                const Icon = cfg.icon;
                return (
                  <Focus key={waktu} delay={340 + i * 90}>
                    <div
                      className={cn(
                        "flex items-start gap-3.5 border border-ink/20 border-t-4 bg-paper-mist/70 px-4 py-3",
                        cfg.garis
                      )}
                    >
                      <Icon size={18} className={cn("mt-0.5 shrink-0", cfg.warna)} />
                      <div className="min-w-0">
                        <p
                          className={cn(
                            "font-mono text-[13px] uppercase tracking-[0.22em]",
                            cfg.warna
                          )}
                        >
                          {waktu}
                        </p>
                        <p className="mt-1 font-serif text-[17px] leading-snug text-ink md:text-[19px]">
                          {kegiatan}
                        </p>
                      </div>
                    </div>
                  </Focus>
                );
              })}
            </div>

            <Focus delay={700}>
              <div className="mt-5 border border-ink/25 bg-ink px-4 py-4 text-paper shadow-card md:px-5">
                <p className="font-mono text-[13px] uppercase tracking-[0.24em] text-gold">
                  Ukuran keberhasilan
                </p>
                <ul className="mt-2.5 space-y-2">
                  {SIMAK_UKURAN.map((u) => (
                    <li
                      key={u}
                      className="flex items-start gap-2.5 font-serif text-[17px] leading-snug md:text-[19px]"
                    >
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </Focus>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
