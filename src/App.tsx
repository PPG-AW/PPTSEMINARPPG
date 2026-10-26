import { useCallback, useMemo, useState } from "react";
import { BottomChrome, TopChrome } from "./components/Chrome";
import { PrintDeck } from "./components/PrintDeck";
import {
  useDeckKeyboard,
  useFullscreen,
  useSwipe,
  useTimer,
} from "./hooks/useDeckTools";
import {
  PenutupSlide,
  SampulSlide,
  VisiSlide,
  type SlideProps,
} from "./slides/core";
import { ArtefakSlide, Kerangka4CSlide } from "./slides/refleksi";
import {
  SimakFiturSlide,
  SimakImplementasiSlide,
  SimakMasalahSlide,
} from "./slides/simak";
import "./index.css";

const CHAPTERS = [
  "Judul & Agenda",
  "Visi Pribadi",
  "Refleksi 4C · Kerangka",
  "Artefak Pendukung",
  "SIMAK · Masalah & Solusi",
  "SIMAK · Cara Kerja",
  "SIMAK · Implementasi & Evaluasi",
  "Penutup",
];

const SLIDES: React.ComponentType<SlideProps>[] = [
  SampulSlide,
  VisiSlide,
  Kerangka4CSlide,
  ArtefakSlide,
  SimakMasalahSlide,
  SimakFiturSlide,
  SimakImplementasiSlide,
  PenutupSlide,
];

export default function App() {
  const total = SLIDES.length;
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (n: number) => setIndex(Math.max(0, Math.min(total - 1, n))),
    [total]
  );
  const next = useCallback(
    () => setIndex((i) => Math.min(total - 1, i + 1)),
    [total]
  );
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const first = useCallback(() => setIndex(0), []);
  const last = useCallback(() => setIndex(total - 1), [total]);

  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen();
  const timer = useTimer();
  const print = useCallback(() => window.print(), []);

  const handlers = useMemo(
    () => ({
      next,
      prev,
      first,
      last,
      fullscreen: toggleFullscreen,
      print,
    }),
    [next, prev, first, last, toggleFullscreen, print]
  );

  useDeckKeyboard(handlers);
  const swipe = useSwipe(handlers);

  const slideProps: SlideProps = {
    index,
    total,
    go,
    print,
    fullscreen: toggleFullscreen,
  };

  const Active = SLIDES[index];

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-paper text-ink print:h-auto print:w-auto print:overflow-visible">
      <div {...swipe} className="flex h-full touch-pan-y flex-col print:hidden">
        <TopChrome
          timer={timer.label}
          running={timer.running}
          onTimerToggle={timer.toggle}
          onTimerReset={timer.reset}
          isFullscreen={isFullscreen}
          onFullscreen={toggleFullscreen}
          onPrint={print}
        />

        <main
          key={index}
          className="deck-frame grain vignette relative min-h-0 flex-1"
        >
          <Active {...slideProps} />
        </main>

        <BottomChrome
          index={index}
          total={total}
          chapters={CHAPTERS}
          onPrev={prev}
          onNext={next}
          onGo={go}
        />
      </div>

      {/* ————— Cetak seluruh deck persis tampilan web ————— */}
      <PrintDeck slides={SLIDES} chapters={CHAPTERS} />
    </div>
  );
}
