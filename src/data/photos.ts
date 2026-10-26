export interface Photo {
  src: string;
  alt: string;
  credit: string;
}

const px = (id: number, params = "auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?${params}`;

export const PHOTOS: Record<
  "hero" | "visi" | "artefak" | "simak" | "kerja" | "penutup",
  Photo
> = {
  hero: {
    src: px(8617773, "auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800"),
    alt: "Guru menunjuk persamaan matematika di papan tulis",
    credit: "Yan Krukau",
  },
  visi: {
    src: px(5212342),
    alt: "Guru berinteraksi dengan murid-murid yang mengangkat tangan",
    credit: "Max Fischer",
  },
  artefak: {
    src: px(7583440),
    alt: "Meja kerja dengan laptop, agenda, dan arsip digital",
    credit: "Mikhail Nilov",
  },
  simak: {
    src: px(19895774),
    alt: "Siswa vokasi berdiskusi dengan laptop di bengkel kerja",
    credit: "ThisIsEngineering",
  },
  kerja: {
    src: px(8199151),
    alt: "Siswa belajar mandiri menggunakan perangkat digital",
    credit: "Yan Krukau",
  },
  penutup: {
    src: px(8423095),
    alt: "Suasana kelas yang hidup dalam sebuah pembelajaran",
    credit: "Pavel Danilyuk",
  },
};

/* Foto sisi depan kartu 4C — Connection, Challenge, Concept, Change */
export const FOUR_C_PHOTOS: Photo[] = [
  {
    src: px(8419161),
    alt: "Dua murid berbincang dan bertukar gagasan di kelas",
    credit: "RDNE Stock project",
  },
  {
    src: px(35865693, "auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"),
    alt: "Murid berkonsentrasi penuh menulis jawaban",
    credit: "Airlangga Jati",
  },
  {
    src: px(6929155),
    alt: "Buku agenda dan catatan terbuka di atas meja kayu",
    credit: "Polina Tankilevitch",
  },
  {
    src: px(8617994, "auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"),
    alt: "Murid-murid bersemangat mengangkat tangan",
    credit: "Yan Krukau",
  },
];

/* Dokumentasi tahapan implementasi SIMAK (dipakai bergantian per tahap) */
export const TAHAP_PHOTOS: Photo[] = [
  {
    src: px(5124870),
    alt: "Menyusun rencana di buku catatan spiral",
    credit: "cottonbro studio",
  },
  {
    src: px(8617759),
    alt: "Guru membimbing kelas dengan beragam murid",
    credit: "Yan Krukau",
  },
  {
    src: px(5185082),
    alt: "Menganalisis catatan dan data di meja kerja",
    credit: "cottonbro studio",
  },
  {
    src: px(7156144),
    alt: "Guru mempresentasikan praktik di depan kelas",
    credit: "Gustavo Fring",
  },
];
