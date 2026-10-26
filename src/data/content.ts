export const PRESENTER = {
  name: "Awang Haris Prasetyo Adhi",
  role: "Mahasiswa PPG · Bidang Studi Matematika",
  date: "Presentasi Lisan · 8 Menit",
  edition: "PPG Prajabatan",
  monogram: "4C",
};

export const HERO = {
  titleA: "Merangkul Keberagaman,",
  titleB: "Membangun Masa Depan",
  subtitle:
    "Visi Pribadi, Refleksi 4C, dan Karya Inovatif untuk Pendidikan Matematika Indonesia.",
};

export interface AgendaItem {
  numeral: string;
  title: string;
  desc: string;
  slide: number;
}

/* Agenda sesuai naskah · target lembar pada deck */
export const AGENDA: AgendaItem[] = [
  {
    numeral: "I",
    title: "Visi Pribadi",
    desc: "Visi untuk pendidikan matematika Indonesia dan peran saya sebagai calon guru.",
    slide: 1,
  },
  {
    numeral: "II",
    title: "Refleksi 4C · Kerangka",
    desc: "Empat kartu Connection, Challenge, Concept, Change · dibuka satu per satu.",
    slide: 2,
  },
  {
    numeral: "III",
    title: "Artefak Pendukung",
    desc: "E-portofolio di LMS sebagai bukti dukung seluruh hasil refleksi 4C.",
    slide: 3,
  },
  {
    numeral: "IV",
    title: "Karya Inovatif SIMAK",
    desc: "Masalah siswa magang, solusi, cara kerja, implementasi, dan evaluasinya.",
    slide: 4,
  },
];

/* Lembar gabungan Refleksi 4C (menggantikan tiga lembar terpisah) */
export const REFLEKSI_LENGKAP = [
  {
    letter: "C1",
    name: "Connection",
    indo: "Mengaitkan",
    tipe: "poin" as const,
    tanya: "Apa kaitannya dengan peran saya sebagai calon guru?",
    poin: [
      "Refleksi adalah kompetensi inti guru profesional, bukan pelengkap.",
      "Kerangka 4C memberi struktur refleksi yang jelas dan berurutan.",
      "Akan saya pakai sepanjang karier untuk menilai praktik mengajar.",
    ],
  },
  {
    letter: "C2",
    name: "Challenge",
    indo: "Menantang",
    tipe: "kontras" as const,
    tanya: "Apa yang berbeda dari praktik saya selama ini?",
    pasangan: [
      ["Tidak pernah refleksi terstruktur", "Refleksi sistematis dengan 4C"],
      ["Mengandalkan ingatan", "Berbasis artefak di LMS"],
      ["Tiap mata kuliah sendiri", "Dicari benang merahnya"],
      ["Belajar selesai di ujian", "Refleksi seumur hidup"],
    ],
  },
  {
    letter: "C3",
    name: "Concept",
    indo: "Merumuskan",
    tipe: "poin" as const,
    tanya: "Konsep utama apa yang saya pelajari?",
    poin: [
      "Refleksi sebagai kompetensi profesional guru.",
      "Kerangka 4C sebagai alat refleksi terstruktur.",
      "Artefak sebagai dasar refleksi yang objektif.",
      "Refleksi menggerakkan pengembangan diri berkelanjutan.",
    ],
  },
  {
    letter: "C4",
    name: "Change",
    indo: "Mengubah",
    tipe: "kontras" as const,
    tanya: "Perubahan apa yang ingin saya lakukan?",
    pasangan: [
      ["Kebiasaan refleksi", "Berkala memakai 4C"],
      ["Artefak", "Aktif dikumpulkan & ditinjau"],
      ["Mata kuliah", "Dilihat keterkaitannya"],
      ["Pengembangan diri", "Proses seumur hidup"],
    ],
  },
];

export const ARTEFAK_STRIP = {
  judul: "Artefak Pendukung · e-Portofolio di LMS",
  isi: "Bukti dukung hasil refleksi adalah e-portofolio berisi rangkuman seluruh mata kuliah Semester 1 sampai 2. Setiap review di dalamnya sudah memakai struktur 4C secara utuh dari Connection hingga Change, sehingga seluruh bagiannya menjadi satu kesatuan bukti bahwa materi Seminar telah saya praktikkan secara konsisten.",
  chip: "Bukti dukung",
};

export const VISI = {
  pendidikan:
    "Mewujudkan pendidikan matematika yang merangkul seluruh keberagaman siswa melalui ekosistem digital · setiap siswa memiliki akses belajar yang setara tanpa terhambat perbedaan kecepatan memahami materi.",
  guru: "Menjadi pendidik yang memposisikan diri sebagai mitra sekaligus arsitek pembelajaran: memperluas fungsi guru dari sekadar sumber informasi menjadi perancang jalur belajar yang personal, adaptif, dan membuat setiap anak percaya pada kemampuan uniknya.",
  langkah: [
    {
      title: "Meningkatkan kompetensi teknologi",
      desc: "Menguasai literasi teknologi masa depan · kecerdasan buatan (AI) dan dasar coding · demi media pembelajaran matematika yang interaktif, mandiri, dan relevan.",
    },
    {
      title: "Mendalami strategi pedagogis",
      desc: "Terus mengeksplorasi pembelajaran berdiferensiasi agar teknologi yang dipakai tepat sasaran menjawab kebutuhan setiap siswa.",
    },
  ],
};

export interface FourC {
  id: string;
  letter: string;
  name: string;
  indo: string;
  tag: string;
  frontNote: string;
  refleksi: string;
  praktik: string;
}

/* Kartu flip 4C = kerangka refleksi mata kuliah Seminar */
export const FOUR_C: FourC[] = [
  {
    id: "connection",
    letter: "C1",
    name: "Connection",
    indo: "Mengaitkan",
    tag: "Apa kaitannya dengan peranku?",
    frontNote: "Seminar mengajari saya berefleksi secara terstruktur dengan kerangka 4C.",
    refleksi:
      "Refleksi adalah kompetensi inti guru profesional: guru efektif bukan hanya pandai menjelaskan, tetapi mampu mengevaluasi pengalamannya sendiri · apa yang berhasil, gagal, dan perlu diperbaiki.",
    praktik:
      "Kerangka 4C memberi struktur jelas · mengaitkan, mengidentifikasi kesenjangan, merumuskan wawasan, merencanakan perbaikan · dan akan saya pakai terus setelah lulus PPG.",
  },
  {
    id: "challenge",
    letter: "C2",
    name: "Challenge",
    indo: "Menantang",
    tag: "Apa yang berbeda dari kebiasaanku?",
    frontNote: "Empat kesenjangan terbuka: dari tanpa refleksi menjadi refleksi bersistem.",
    refleksi:
      "Selama ini saya tidak pernah berefleksi terstruktur dan terdokumentasi; evaluasi hanya mengandalkan ingatan, dan setiap mata kuliah saya pandang berdiri sendiri.",
    praktik:
      "Seminar memaksa saya membuka artefak di LMS sebagai dasar refleksi, mencari benang merah antarmata kuliah, dan memahami bahwa refleksi adalah proses seumur hidup.",
  },
  {
    id: "concept",
    letter: "C3",
    name: "Concept",
    indo: "Merumuskan",
    tag: "Konsep utama apa yang kupelajari?",
    frontNote: "Empat konsep kunci kini menjadi pegangan: refleksi, kerangka, bukti, siklus.",
    refleksi:
      "Tanpa refleksi, guru akan mengulang pola yang sama dari tahun ke tahun. Refleksi bermakna memerlukan struktur, dan refleksi berkualitas harus berdiri di atas bukti konkret.",
    praktik:
      "Saya menjadikan kerangka 4C sebagai alat siklikal: identifikasi masalah, cari solusi, implementasi, lalu refleksi ulang · mesin penggerak pengembangan profesional.",
  },
  {
    id: "change",
    letter: "C4",
    name: "Change",
    indo: "Mengubah",
    tag: "Perubahan apa yang ingin kulakukan?",
    frontNote: "Dari insidental menjadi berkala; dari ingatan menjadi artefak.",
    refleksi:
      "Saya ingin membangun kebiasaan refleksi berkala dengan 4C, aktif mengumpulkan artefak sebagai dasarnya, dan melihat keterkaitan lintas mata kuliah secara komprehensif.",
    praktik:
      "Pengembangan diri tidak lagi bergantung pelatihan insidental · melainkan digerakkan refleksi yang terus berulang sepanjang karier.",
  },
];

export const CONNECTION = {
  pertanyaan: "Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
  alasan: [
    {
      title: "Refleksi = kompetensi inti guru profesional",
      desc: "Guru efektif mampu mengevaluasi pengalamannya sendiri: mana yang berhasil, mana yang gagal, dan apa yang perlu diperbaiki. Materi Seminar melatih keterampilan ini secara langsung.",
    },
    {
      title: "Kerangka 4C memberi struktur yang jelas",
      desc: "Sebelum Seminar saya tidak punya panduan berefleksi sistematis. Kini ada tahapannya: mengaitkan, mengidentifikasi kesenjangan, merumuskan wawasan, merencanakan perbaikan.",
    },
    {
      title: "Dipakai sepanjang karier",
      desc: "Setelah lulus PPG, kerangka refleksi ini menjadi alat yang dapat saya gunakan berulang kali mengevaluasi praktik mengajar · bukan sekadar mengandalkan perasaan atau intuisi.",
    },
  ],
};

export const CHALLENGE = [
  {
    dulu: "Tidak pernah refleksi terstruktur & terdokumentasi",
    kini: "Kerangka 4C memaksa evaluasi pengalaman secara sistematis",
  },
  {
    dulu: "Mengandalkan ingatan ketika mengevaluasi",
    kini: "Membuka artefak di LMS sebagai dasar · lebih objektif & mendalam",
  },
  {
    dulu: "Setiap mata kuliah berdiri sendiri; selesai ujian, tutup buku",
    kini: "Mencari benang merah antarmata kuliah secara komprehensif",
  },
  {
    dulu: "Belajar selesai saat tugas dikumpulkan",
    kini: "Refleksi adalah proses seumur hidup, bukan kegiatan sekali jadi",
  },
];

export const CONCEPT = [
  {
    title: "Refleksi sebagai kompetensi profesional",
    desc: "Guru efektif rutin merefleksikan praktiknya · tanpa itu, pola yang sama terulang tanpa perbaikan dari tahun ke tahun.",
  },
  {
    title: "Kerangka 4C sebagai alat terstruktur",
    desc: "Siklus Connection–Challenge–Concept–Change dapat dipakai berulang untuk mengevaluasi pengalaman belajar maupun mengajar.",
  },
  {
    title: "Artefak sebagai dasar yang objektif",
    desc: "Refleksi berkualitas berdiri di atas bukti konkret, bukan perasaan atau ingatan yang bisa bias; artefak membuatnya terukur dan dapat ditinjau ulang.",
  },
  {
    title: "Refleksi menggerakkan pengembangan diri",
    desc: "Pengembangan sebagai guru tidak berhenti setelah lulus PPG: identifikasi masalah, cari solusi, implementasi, refleksi ulang.",
  },
];

export const CHANGE_TABLE = [
  {
    aspek: "Kebiasaan refleksi",
    sebelum: "Tidak pernah refleksi terstruktur",
    sesudah: "Refleksi berkala menggunakan 4C",
  },
  {
    aspek: "Cara memandang pengalaman",
    sebelum: "Belajar selesai di ujian",
    sesudah: "Setiap pengalaman diekstrak maknanya",
  },
  {
    aspek: "Penggunaan artefak",
    sebelum: "Tidak terbiasa mendokumentasikan",
    sesudah: "Aktif mengumpulkan & meninjau artefak",
  },
  {
    aspek: "Cara memandang mata kuliah",
    sebelum: "Masing-masing berdiri sendiri",
    sesudah: "Melihat keterkaitan antarmata kuliah",
  },
  {
    aspek: "Sikap pengembangan diri",
    sebelum: "Insidental, menunggu pelatihan",
    sesudah: "Proses seumur hidup digerakkan refleksi",
  },
];

export const ARTEFAK = {
  apa: {
    q: "Artefak mana yang menjadi bukti dukung?",
    a: "E-portofolio yang telah saya susun dan unggah di LMS · berisi rangkuman seluruh mata kuliah Semester 1 sampai Semester 2 selama program PPG.",
  },
  mengapa: {
    q: "Mengapa e-portofolio yang dipilih?",
    a: "Karena setiap mata kuliah yang di-review di dalamnya sudah menerapkan kerangka 4C secara langsung: ia bukan sekadar kumpulan tugas, melainkan dokumen reflektif dua semester penuh.",
  },
  bagian: {
    q: "Bagian mana yang mendukung hasil refleksi?",
    a: "Seluruh bagian · dari Connection hingga Change · sudah berstruktur 4C secara utuh. Semuanya satu kesatuan bukti bahwa materi Seminar telah saya praktikkan secara konsisten dan komprehensif.",
  },
};

export const SIMAK = {
  nama: "SIMAK",
  kepanjangan: "Sistem Mandiri Anti Ketinggalan",
  identitas: [
    ["Bentuk", "Website belajar mandiri, diakses lewat HP"],
    ["Materi", "Persamaan Kuadrat: bentuk umum & nilai a·b·c, T-Faktor (a=1), rumus ABC"],
    ["Sasaran", "36 siswa kelas X SMK Fase E yang magang bergiliran"],
  ],
  masalah: [
    {
      kondisi: "Magang bergiliran 1–2 minggu per putaran",
      dampak: "5–10 dari 36 siswa absen bersamaan",
    },
    {
      kondisi: "Matematika 4 JP per minggu",
      dampak: "Siswa kehilangan 4–8 JP tiap putaran",
    },
    {
      kondisi: "Kejar materi via WhatsApp / salin catatan",
      dampak: "Tidak menjamin paham langkah penyelesaian",
    },
    {
      kondisi: "Guru tidak punya data teratur",
      dampak: "Tidak tahu siapa yang paham, siapa yang bingung",
    },
  ],
  solusi:
    "Website belajar mandiri berlevel untuk materi Persamaan Kuadrat, dirancang khusus bagi siswa yang sedang magang.",
  banding: [
    {
      alat: "WhatsApp",
      alasan: "Satu arah · tanpa urutan belajar, umpan balik otomatis, atau pemantauan progres.",
      solusi: "Level berurutan otomatis, umpan balik instan tiap jawaban, dan dasbor progres guru.",
    },
    {
      alat: "Google Classroom / LMS",
      alasan: "Dirancang untuk kelas reguler; tanpa mekanisme berlevel untuk siswa tertinggal.",
      solusi: "Siswa mulai dari titik ketertinggalannya sendiri, naik level setelah 3 soal benar.",
    },
    {
      alat: "Quizizz / Kahoot",
      alasan: "Alat evaluasi, bukan pembelajaran utuh · tanpa materi, contoh terstruktur, simulasi.",
      solusi: "Materi, worked examples, simulasi a·b·c, dan asesmen menyatu dalam satu alur belajar.",
    },
    {
      alat: "YouTube / video",
      alasan: "Pasif satu arah; tanpa interaksi, umpan balik, atau jaminan paham sebelum lanjut.",
      solusi: "Animasi penyelesaian interaktif plus syarat lulus level sebelum materi berikutnya.",
    },
  ],
  kesimpulan:
    "Belum ada platform yang dirancang untuk konteks siswa magang bergiliran · jalur mandiri berjenjang dengan pemantauan guru. SIMAK mengisi kekosongan itu.",
};

export const SIMAK_FITUR = [
  {
    n: "01",
    title: "Akses mandiri via HP",
    desc: "Belajar di waktu luang magang · istirahat, sepulang kerja, di rumah. Tidak harus online bersamaan kelas.",
  },
  {
    n: "02",
    title: "Level berjenjang otomatis",
    desc: "Materi dipecah level kecil berurutan; naik level setelah 3 soal benar. Gagal? Soal baru muncul untuk diulang.",
  },
  {
    n: "03",
    title: "Contoh langkah demi langkah",
    desc: "Worked examples yang menjelaskan alasan tiap langkah · menggantikan guru yang tak bisa hadir langsung.",
  },
  {
    n: "04",
    title: "Simulasi eksplorasi",
    desc: "Ubah koefisien a, b, c dan amati langsung perubahan bentuk, faktor, dan akar · belajar aktif, bukan pasif.",
  },
  {
    n: "05",
    title: "Asesmen formatif langsung",
    desc: "Latihan dengan umpan balik otomatis; siswa tahu letak kesalahannya dan bisa mengulang materi terkait.",
  },
  {
    n: "06",
    title: "Bantuan berjenjang",
    desc: "Tiga tahap: animasi penyelesaian di web → tutor sebaya via WhatsApp → guru via WhatsApp.",
    chips: ["Animasi 24 jam", "9 tutor sebaya", "Guru siaga"],
  },
  {
    n: "07",
    title: "Dasbor guru real-time",
    desc: "Progres tiap siswa terpantau: level selesai, jumlah pengulangan, miskonsepsi tersering · bimbingan jadi tepat sasaran.",
  },
  {
    n: "08",
    title: "Refleksi & umpan balik",
    desc: "Usai semua level, siswa menulis yang dipahami, kesulitan, dan saran · bahan evaluasi SIMAK putaran berikutnya.",
  },
];

export const SIMAK_TAHAP = [
  {
    roman: "I",
    title: "Persiapan",
    desc: "Guru menyusun level materi (prasyarat, bentuk umum a·b·c, T-Faktor, ABC), contoh, simulasi, soal formatif & sumatif.",
  },
  {
    roman: "II",
    title: "Validasi",
    desc: "Telaah materi dan soal oleh rekan sejawat, lalu uji coba fungsi website secara terbatas.",
  },
  {
    roman: "III",
    title: "Orientasi",
    desc: "Siswa belajar mengakses SIMAK, memahami aturan level, dan cara memakai fitur bantuan.",
  },
  {
    roman: "IV",
    title: "Pelaksanaan",
    desc: "Siswa magang belajar mandiri di waktu luang; siswa di kelas memakai SIMAK sebagai pelengkap.",
  },
  {
    roman: "V",
    title: "Penetapan Tutor",
    desc: "Sistem otomatis memilih 9 siswa tercepat berdasarkan progres level sebagai tutor sebaya daring.",
  },
  {
    roman: "VI",
    title: "Pemantauan",
    desc: "Guru memeriksa dasbor: progres siswa magang dan miskonsepsi yang muncul.",
  },
  {
    roman: "VII",
    title: "Penilaian",
    desc: "Siswa mengerjakan asesmen sumatif (T-Faktor & ABC), lalu mengisi lembar refleksi dan saran perbaikan.",
  },
  {
    roman: "VIII",
    title: "Tindak Lanjut",
    desc: "Pengajaran ulang saat siswa kembali ke kelas, dan revisi SIMAK berdasar evaluasi.",
  },
];

export const SIMAK_EVALUASI = [
  ["Sebelum", "Telaah materi & soal oleh sejawat, uji fungsi website"],
  ["Selama", "Progres level, jawaban formatif, miskonsepsi di dasbor"],
  ["Sesudah", "Asesmen sumatif (T-Faktor & ABC), refleksi siswa"],
  ["Lanjut", "Ajarkan ulang konsep keliru, revisi SIMAK"],
];

export const SIMAK_UKURAN = [
  "Siswa magang menunjukkan kemajuan level",
  "Mampu menyelesaikan soal T-Faktor & ABC",
  "Guru memperoleh data untuk pengajaran ulang",
];

export const SIMPULAN = [
  {
    title: "Visi Pribadi",
    body: "Pendidikan matematika yang merangkul keberagaman melalui ekosistem digital; guru sebagai arsitek jalur belajar personal · lewat penguasaan teknologi masa depan dan strategi diferensiasi.",
  },
  {
    title: "Refleksi 4C · Seminar",
    body: "Kerangka 4C mengubah kebiasaan lama saya yang tak pernah berefleksi sistematis; buktinya terekam di e-portofolio seluruh mata kuliah Semester 1–2.",
  },
  {
    title: "Karya Inovatif SIMAK",
    body: "Website berlevel untuk Persamaan Kuadrat bagi siswa magang · menjawab keterbatasan WhatsApp, LMS, Quizizz, dan YouTube dengan pembelajaran berjenjang terpantau.",
  },
];

export const PENUTUP = {
  quote:
    "Setiap siswa berhak memiliki jalur belajarnya sendiri. Tugas kita sebagai guru adalah memastikan jalur itu ada, terjangkau, dan bermakna.",
  thanks: "Terima Kasih",
  note: "Terbuka untuk pertanyaan, saran, dan masukan.",
};

export const TICKER = [
  "Merangkul Keberagaman",
  "Refleksi 4C · Seminar",
  "Artefak e-Portofolio",
  "Karya Inovatif SIMAK",
  "Persamaan Kuadrat",
  "36 Siswa SMK Magang",
  "Presentasi 8 Menit",
];
