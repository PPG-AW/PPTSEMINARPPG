import type { ComponentType, ReactNode } from "react";
import type { SlideProps } from "../slides/core";
import { Kerangka4CPrintSlide } from "../slides/refleksi";

function PrintPage({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div
      aria-label={label}
      className="print-page grain vignette relative overflow-hidden bg-paper"
    >
      {children}
    </div>
  );
}

/* Cetak deck persis seperti tampilan website · foto, warna, dan desain utuh.
   Setiap lembar menjadi satu halaman pada PDF. */
export function PrintDeck({
  slides,
  chapters,
}: {
  slides: ComponentType<SlideProps>[];
  chapters: string[];
}) {
  const [
    Sampul,
    Visi,
    Kerangka,
    Artefak,
    SimakMasalah,
    SimakFitur,
    SimakImplementasi,
    Penutup,
  ] = slides;
  const totalPages = 12;
  const props = (pageIndex: number): SlideProps => ({
    index: pageIndex,
    total: totalPages,
    go: () => {},
    print: () => {},
    fullscreen: () => {},
  });

  return (
    <div className="print-deck hidden bg-paper print:block">
      <PrintPage label={chapters[0]}>
        <Sampul {...props(0)} />
      </PrintPage>
      <PrintPage label={chapters[1]}>
        <Visi {...props(1)} />
      </PrintPage>
      <PrintPage label={`${chapters[2]} · keadaan awal`}>
        <Kerangka {...props(2)} />
      </PrintPage>

      {/* Slide interaktif 4C dikembangkan menjadi empat halaman berurutan. */}
      {([0, 1, 2, 3] as const).map((openIndex) => (
        <PrintPage
          key={`4c-${openIndex}`}
          label={`4C · ${["Connection", "Challenge", "Concept", "Change"][openIndex]} terbuka`}
        >
          <Kerangka4CPrintSlide
            {...props(openIndex + 3)}
            openIndex={openIndex}
          />
        </PrintPage>
      ))}

      <PrintPage label={chapters[3]}>
        <Artefak {...props(7)} />
      </PrintPage>
      <PrintPage label={chapters[4]}>
        <SimakMasalah {...props(8)} />
      </PrintPage>
      <PrintPage label={chapters[5]}>
        <SimakFitur {...props(9)} />
      </PrintPage>
      <PrintPage label={chapters[6]}>
        <SimakImplementasi {...props(10)} />
      </PrintPage>
      <PrintPage label={chapters[7]}>
        <Penutup {...props(11)} />
      </PrintPage>
    </div>
  );
}
