export type InvitationData = any;

export const MOCK_DATA: InvitationData = {
  invitation_meta: {
    slug: "rizky-aulia",
    primary_language: "id",
    music_url: "/music.mp3",
    theme_config: {
      primary_color: "#8b6d46",
      font_family_serif: "var(--font-serif)",
      hero_image_url: "/images/hero.png",
    },
  },
  hero_section: {
    eyebrow: "The Wedding of",
    main_title: "Together",
    label: "Undangan Pernikahan",
    target_date: "2025-09-27T08:00:00",
    calendar_event: {
      summary: "The Wedding of Rizky & Aulia",
      location: "Jakarta Selatan",
      description: "Pernikahan Rizky & Aulia",
    },
  },
  couple: {
    section_title: "Dua Jiwa, Satu Tujuan",
    intro_text:
      "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dan mendoakan pernikahan kami.",
    groom: {
      first_name: "Agam",
      full_name: "Agam Prayoga",
      parents_desc: "Putra dari Bpk. H. Ahmad Fauzi & Ibu Hj. Siti Rahayu",
      ig_handle: "@agamprayoga",
      ig_link: "#",
      avatar_url: null,
      role_label: "Mempelai Pria",
    },
    bride: {
      first_name: "Zahra",
      full_name: "Zahra Ranabila",
      parents_desc:
        "Putri dari Bapak Drs. A. Latief & Ibu Dra. Rr. Eka Yuliawati",
      ig_handle: "@zahra.ranabila",
      ig_link: "#",
      avatar_url: null,
      role_label: "Mempelai Wanita",
    },
  },
  events: [
    {
      id: "event-akad",
      type: "Akad Nikah",
      title: "Ijab Qabul",
      date_formatted: "Sabtu, 27 September 2025",
      time_range: "08.00 – 10.00 WIB",
      venue_name: "Masjid Al-Ikhlas",
      address: "Jl. Sudirman No. 45, Jakarta Selatan",
      maps_url:
        "https://maps.google.com/?q=Masjid%20Al-Ikhlas%20Jl.%20Sudirman%20No.%2045%2C%20Jakarta%20Selatan",
    },
    {
      id: "event-resepsi",
      type: "Resepsi",
      title: "Walimatul Ursy",
      date_formatted: "Sabtu, 27 September 2025",
      time_range: "11.00 – 14.00 WIB",
      venue_name: "Grand Ballroom Mutiara Hotel",
      address: "Jl. Gatot Subroto No. 10, Jakarta Selatan",
      maps_url:
        "https://maps.google.com/?q=Grand%20Ballroom%20Mutiara%20Hotel%20Jl.%20Gatot%20Subroto%20No.%2010%2C%20Jakarta%20Selatan",
    },
  ],
  
  wishes: [
    {
      id: 1,
      name: "Budi Santoso",
      message:
        "Selamat menempuh hidup baru! Semoga rumah tangganya sakinah, mawaddah, warahmah. Panjang umur dan lancar rezekinya. 🌸",
      time: "2 jam lalu",
      attend: "hadir",
    },
    {
      id: 2,
      name: "Sari Indah",
      message:
        "Barakallahu lakuma wa baraka alaykuma wa jama'a baynakuma fi khair. Semoga menjadi keluarga yang penuh berkah! 💕",
      time: "1 jam lalu",
      attend: "hadir",
    },
    {
      id: 3,
      name: "Keluarga Permana",
      message:
        "Congrats Rizky & Aulia! Semoga bahagia selalu dan segera dikaruniai buah hati yang sholeh/sholehah. ✨",
      time: "45 menit lalu",
      attend: "tidak hadir",
    },
  ],
  story: {
    section_label: "Perjalanan Cinta",
    section_title: "Our Story",
    section_desc: "Kisah perjalanan cinta kami yang penuh berkah dan kebahagiaan.",
    timeline: [
      {
        year: "2019",
        title: "Pertemuan Pertama",
        description: "Kami pertama kali bertemu di sebuah acara kampus. Saat itu, pandangan pertama yang penuh makna menjadi awal dari segalanya.",
      },
      {
        year: "2021",
        title: "Menjalin Hubungan",
        description: "Setelah dua tahun saling mengenal, kami memutuskan untuk menjalin hubungan yang lebih serius dengan restu keluarga.",
      },
      {
        year: "2023",
        title: "Lamaran",
        description: "Dengan penuh kebahagiaan, keluarga besar kami melangsungkan acara lamaran yang penuh kehangatan.",
      },
      {
        year: "2025",
        title: "Menuju Bahagia",
        description: "Bismillah, kami siap melangkah ke jenjang pernikahan dan membangun rumah tangga yang sakinah.",
      },
    ],
  },
  gallery: {
    section_label: "Momen Berharga",
    section_title: "Gallery",
    images: [
      { url: "/images/hero.png", alt: "Foto prewedding 1" },
      { url: "/images/hero.png", alt: "Foto prewedding 2" },
      { url: "/images/hero.png", alt: "Foto prewedding 3" },
      { url: "/images/hero.png", alt: "Foto prewedding 4" },
      { url: "/images/hero.png", alt: "Foto prewedding 5" },
    ],
  },
  gift: {
    section_label: "Hadiah Pernikahan",
    section_title: "Wedding Gift",
    instruction_text: "Jika Anda ingin memberikan tanda kasih kepada kami, Anda dapat mengirimkannya melalui rekening berikut.",
    bank_accounts: [
      {
        id: "bca",
        bank_name: "BCA",
        account_number: "1234 5678 9012",
        account_holder: "a.n. Agam Prayoga",
      },
      {
        id: "mandiri",
        bank_name: "Mandiri",
        account_number: "9876 5432 1098",
        account_holder: "a.n. Zahra Ranabila",
      },
    ],
  },
  quotes: [
    {
      bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      content:
        "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
      source: "QS. Ar-Rum : 21",
      translation:
        "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
    },
  ],
  labels: {
    navigation: {
      home: "Home",
      couple: "Pasangan",
      event: "Acara",
      gallery: "Galeri",
      wish: "Ucapan",
      rsvp: "RSVP",
    },
    countdown: {
      days: "Hari",
      hours: "Jam",
      minutes: "Menit",
      seconds: "Detik",
    },
    buttons: {
      open_invitation: "Buka Undangan",
      save_calendar: "Simpan ke Kalender",
      view_maps: "Lihat di Maps",
      send_wish: "Kirim Ucapan ✦",
      confirm_rsvp: "Konfirmasi Kehadiran ✦",
      copy: "Salin",
      copied: "Tersalin",
    },
    placeholders: {
      name: "Nama lengkap Anda...",
      message: "Tulis ucapan dan doa terbaik Anda...",
      guests: "orang",
    },
    date: {
      days: "Hari",
      months: "Sep",
      years: "Tahun",
      location: "Lokasi",
    },
  },
};
