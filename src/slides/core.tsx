import { ArrowUpRight } from "lucide-react";
import {
  AGENDA,
  HERO,
  PENUTUP,
  PRESENTER,
  SIMPULAN,
  TICKER,
  VISI,
} from "../data/content";
import { PHOTOS } from "../data/photos";
import { Focus, Kicker, PhotoPlate, Rule, SlideShell } from "../components/ui";
import { cn } from "../utils/cn";

export interface SlideProps {
  index: number;
  total: number;
  go: (n: number) => void;
  print: () => void;
  fullscreen: () => void;
}

const Diamond = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden
    className={`mx-3 inline-block h-1.5 w-1.5 rotate-45 bg-accent ${className}`}
  />
);

/* ················ 01 · JUDUL & AGENDA ················ */
export function SampulSlide({ index, total, go }: SlideProps) {
  return (
    <SlideShell chapter="Judul & Agenda" index={index} total={total}>
      <div className="mx-auto flex h-full max-w-[95rem] flex-col justify-center">
        <div className="grid items-center gap-8 lg:grid-cols-14 lg:gap-14">
          <div className="lg:col-span-8">
            <Focus delay={80}>
              <Kicker className="text-ink-soft">
                {PRESENTER.edition} <Diamond /> {PRESENTER.date}
              </Kicker>
            </Focus>

            <Focus delay={220}>
              <h1 className="mt-5 font-display text-[3.8rem] font-medium leading-[1.04] tracking-tight text-ink sm:text-8xl lg:text-[5.6rem]">
                {HERO.titleA}
                <br />
                <em className="hl font-light italic text-rose">
                  {HERO.titleB}
                </em>
              </h1>
            </Focus>

            <Focus delay={380}>
              <p className="mt-6 max-w-3xl font-serif text-xl italic leading-relaxed text-ink/85 md:text-2xl">
                {HERO.subtitle}
              </p>
            </Focus>

            <Focus delay={520} className="mt-6 w-full">
              <div className="grid grid-cols-1 gap-4 border-y border-ink/25 py-4 text-left sm:grid-cols-2">
                {[
                  ["Mahasiswa", PRESENTER.name],
                  ["Status", PRESENTER.role],
                ].map(([k, v]) => (
                  <div key={k}>
                    <Kicker className="text-[13px]">{k}</Kicker>
                    <p className="mt-1 font-serif text-lg font-medium italic text-ink">
                      {v}
                    </p>
                  </div>
                ))}
              </div>
            </Focus>
          </div>

          <div className="lg:col-span-6">
            <PhotoPlate
              src={PHOTOS.hero.src}
              alt={PHOTOS.hero.alt}
              credit={PHOTOS.hero.credit}
              fig="Plat 01"
              caption="Persamaan di papan, pagi itu"
              badge="Matematika"
              live
              delay={320}
              className="mx-auto w-full max-w-2xl lg:max-w-none"
              imgClassName="aspect-[4/3] lg:aspect-[5/4]"
            />
          </div>
        </div>

        {/* agenda presentasi · bisa diklik */}
        <Focus delay={760} className="mt-7 lg:mt-8">
          <div className="mb-2 flex items-center gap-3">
            <Kicker className="text-accent">Agenda Presentasi</Kicker>
            <Rule className="w-16" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {AGENDA.map((a) => (
              <button
                key={a.numeral}
                type="button"
                onClick={() => go(a.slide)}
                className="group border border-ink/25 bg-paper-mist/70 p-3.5 text-left transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-card"
              >
                <div className="flex items-baseline justify-between gap-2">
                <span className={cn(
                  "font-display text-xl font-semibold",
                  a.numeral === "I" && "text-rose",
                  a.numeral === "II" && "text-violet",
                  a.numeral === "III" && "text-teal",
                  a.numeral === "IV" && "text-amber"
                )}>
                  {a.numeral}.
                </span>
                <ArrowUpRight size={13} className={cn(
                  "transition-colors",
                  a.numeral === "I" && "text-ink/30 group-hover:text-rose",
                  a.numeral === "II" && "text-ink/30 group-hover:text-violet",
                  a.numeral === "III" && "text-ink/30 group-hover:text-teal",
                  a.numeral === "IV" && "text-ink/30 group-hover:text-amber"
                )} />
                </div>
                <p className="mt-1 font-display text-xl leading-snug tracking-tight text-ink">
                  {a.title}
                </p>
                <p className="mt-1 line-clamp-3 font-serif text-[19px] leading-relaxed text-ink-soft">
                  {a.desc}
                </p>
              </button>
            ))}
          </div>
        </Focus>

        {/* pita marquee berjalan */}
        <Focus delay={900} className="mt-6">
          <div className="marquee overflow-hidden border-y border-ink/25">
            <div className="marquee-track flex w-max items-center">
              {[0, 1].map((half) => (
                <div
                  key={half}
                  aria-hidden={half === 1}
                  className="flex items-center whitespace-nowrap py-2 font-mono text-[13px] uppercase tracking-[0.32em] text-ink-soft md:text-[13px]"
                >
                  {TICKER.map((t) => (
                    <span key={t} className="flex items-center">
                      <span className="px-6">{t}</span>
                      <span className="h-1.5 w-1.5 rotate-45 bg-accent/70" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Focus>
      </div>
    </SlideShell>
  );
}

/* ················ 02 · VISI PRIBADI ················ */
export function VisiSlide({ index, total }: SlideProps) {
  return (
    <SlideShell chapter="Babak I · Visi Pribadi" index={index} total={total} ghost="I">
      <div className="mx-auto flex h-full max-w-[95rem] flex-col justify-center">
        <div className="grid items-center gap-8 lg:grid-cols-14 lg:gap-14">
          <div className="lg:col-span-8">
            <Focus delay={80}>
              <div className="flex items-center gap-4">
                <Kicker className="text-accent">Untuk Pendidikan Indonesia</Kicker>
                <Rule className="w-24" />
              </div>
            </Focus>

            <Focus delay={200}>
              <blockquote className="drop-cap mt-5 font-display text-[2.2rem] font-normal leading-[1.26] tracking-tight text-ink md:text-[2.7rem] xl:text-[3.2rem]">
                Mewujudkan pendidikan matematika yang{" "}
                <span className="hl font-medium text-rose">
                  merangkul seluruh keberagaman siswa
                </span>{" "}
                melalui ekosistem digital · akses belajar yang{" "}
                <span className="hl-blue font-medium text-violet">setara</span>, tanpa
                terhambat perbedaan kecepatan memahami materi.
              </blockquote>
            </Focus>

            <Focus delay={360}>
              <div className="mt-6 border-l-2 border-accent/70 pl-5">
                <Kicker className="text-gold">Sebagai Calon Guru</Kicker>
                <p className="mt-2 max-w-3xl font-serif text-lg leading-relaxed text-ink/90 md:text-xl">
                  {VISI.guru}
                </p>
              </div>
            </Focus>
          </div>

          <PhotoPlate
            src={PHOTOS.visi.src}
            alt={PHOTOS.visi.alt}
            credit={PHOTOS.visi.credit}
            fig="Fig. 01"
            caption="Setiap tangan yang terangkat penting"
            live
            delay={320}
            className="lg:col-span-6"
            imgClassName="aspect-[4/3]"
          />
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-5 md:mt-10 md:grid-cols-2">
          {VISI.langkah.map((l, i) => (
            <Focus key={l.title} delay={440 + i * 120}>
              <div className="flex gap-5 border-t-2 border-ink pt-5">
                <span className="font-display text-5xl font-semibold leading-none text-accent/80">
                  {i + 1}
                </span>
                <div>
                  <Kicker className="text-[13px] text-gold">Langkah nyata</Kicker>
                  <h3 className="mt-1.5 font-display text-2xl tracking-tight text-ink md:text-3xl">
                    {l.title}
                  </h3>
                  <p className="mt-2 font-serif text-[20px] leading-relaxed text-ink-soft">
                    {l.desc}
                  </p>
                </div>
              </div>
            </Focus>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ················ 10 · PENUTUP ················ */
export function PenutupSlide({ index, total }: SlideProps) {
  return (
    <SlideShell chapter="Penutup" index={index} total={total}>
      <div className="mx-auto flex h-full max-w-[95rem] items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-14 lg:gap-14">
          {/* simpulan */}
          <div className="lg:col-span-8">
            <Focus delay={80}>
              <h2 className="font-display text-4xl font-medium tracking-tight md:text-8xl">
                Simpu<em className="hl italic text-accent">lan</em>
              </h2>
            </Focus>
            <div className="mt-6">
              {SIMPULAN.map((s, i) => (
                <Focus key={s.title} delay={200 + i * 120}>
                  <article className="border-t border-ink/20 py-3.5 last:border-b">
                    <p className="font-mono text-[13px] uppercase tracking-[0.26em] text-gold">
                      {String(i + 1).padStart(2, "0")} · {s.title}
                    </p>
                    <p className="mt-1.5 font-serif text-[19px] leading-relaxed text-ink/90">
                      {s.body}
                    </p>
                  </article>
                </Focus>
              ))}
            </div>
          </div>

          {/* kutipan & salam */}
          <div className="lg:col-span-6">
            <PhotoPlate
              src={PHOTOS.penutup.src}
              alt={PHOTOS.penutup.alt}
              credit={PHOTOS.penutup.credit}
              fig="Fig. 07"
              caption="Kelas yang ingin kita bangun"
              live
              delay={300}
              imgClassName="aspect-[16/9]"
            />
            <Focus delay={440}>
              <blockquote className="mt-6 border-l-2 border-accent pl-5 font-display text-2xl font-light italic leading-snug tracking-tight text-ink md:text-[2rem]">
                “{PENUTUP.quote}”
              </blockquote>
            </Focus>
            <Focus delay={560}>
              <p className="mt-6 font-display text-6xl font-medium tracking-tight text-accent md:text-8xl">
                {PENUTUP.thanks}
              </p>
              <p className="mt-3 font-serif text-sm italic text-ink-soft md:text-base">
                {PENUTUP.note}
              </p>
            </Focus>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
