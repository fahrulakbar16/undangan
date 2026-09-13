export interface Wish {
  id: number;
  name: string;
  message: string;
  time: string;
  attend: string;
}

export type InvitationData = typeof invitationContent & {
  story?: {
    section_label: string;
    section_title: string;
    section_desc: string;
    timeline: { year: string; title: string; description: string }[];
  };
  gallery?: {
    section_label: string;
    section_title: string;
    images: { url: string; alt: string }[];
  };
};

// Konten mengacu pada konsep undangan A/Z di spreadsheet.
const invitationContent = {
  "invitation_meta": {
    "slug": "agam-zahra",
    "primary_language": "id",
    "music_url": "/music%20copy.mp3",
    "music_start_seconds": 0,
    "monogram": "A/Z",
    "theme_config": {
      "primary_color": "#6F744A",
      "font_family_serif": "var(--font-serif)",
      "hero_image_url": "/images/hero.png"
    }
  },
  "hero_section": {
    "eyebrow": "The Wedding of",
    "main_title": "and, somehow, here we are.",
    "label": "Undangan Pernikahan",
    "date_label": "31 • 10 • 2026",
    "target_date": "2026-10-31T09:00:00+07:00",
    "end_date": "2026-10-31T11:00:00+07:00",
    "calendar_event": {
      "summary": "The Wedding of Agam & Zahra",
      "location": "Masjid Daarul Matiin Cibadak",
      "description": "Akad Nikah Agam & Zahra"
    }
  },
  "distance": {
    "section_title": "THE DISTANCE BETWEEN US",
    "paragraphs": [
      "Ada kota-kota yang memisahkan, ada hari-hari yang hanya bisa dilewati lewat layar.",
      "Tapi barangkali, jarak memang tidak selalu datang untuk menjauhkan. Kadang ia hanya ingin mengajarkan bagaimana caranya tetap memilih, bahkan ketika tidak bisa selalu berdekatan."
    ],
    "phrase": "Somewhere between the distance, we found our way home."
  },
  "just_us": {
    "section_title": "JUST US",
    "profiles": [
      {
        "name": "ZAHRA",
        "description": "She chooses the simple things,\nfinds comfort in nature,\nand beauty in the little things."
      },
      {
        "name": "AGAM",
        "description": "He notices the little things,\nthe details others might miss,\nand believes every detail matters."
      }
    ],
    "phrase": "Two different ways of seeing the world, yet somehow, the same place to belong."
  },
  "couple": {
    "section_title": "THE DAY WE CHOOSE",
    "intro_text": "Dengan penuh rasa syukur, kami mengundang Anda untuk menjadi bagian dari hari ketika kami memulai babak baru bersama.",
    "bride": {
      "first_name": "Zahra",
      "full_name": "Zahra Ranabila",
      "parents_desc": "Putri pertama dari Bapak M. Hatta & Ibu Dewi Kartika Sari",
      "role_label": "Mempelai Wanita"
    },
    "groom": {
      "first_name": "Agam",
      "full_name": "Agam Prayoga",
      "parents_desc": "Putra pertama dari Bapak Rohmat & Ibu Suryani",
      "role_label": "Mempelai Pria"
    }
  },
  "events": [
    {
      "id": "event-akad",
      "type": "Akad Nikah",
      "title": "",
      "date_formatted": "Sabtu, 31 Oktober 2026",
      "time_range": "09.00 – 11.00 WIB",
      "venue_name": "Masjid Daarul Matiin Cibadak",
      "address": "",
      "maps_url": "https://maps.app.goo.gl/zgQMR4qEJQm5LR1w9"
    }
  ],
  "dress_code": {
    "section_title": "A LITTLE COLOR FOR THE DAY",
    "label": "DRESS CODE",
    "description": "Neutral · Earthy · Muted",
    "phrase": "Come in colors that feel like us — quiet, warm, and timeless.",
    "colors": [
      {
        "name": "Warm Ivory",
        "hex": "#F5F0E6"
      },
      {
        "name": "Warm Beige",
        "hex": "#E1D7C4"
      },
      {
        "name": "Soft Olive",
        "hex": "#B2B797"
      },
      {
        "name": "Muted Olive",
        "hex": "#858A65"
      },
      {
        "name": "Olive Grey",
        "hex": "#8A8C80"
      }
    ]
  },
  "rsvp": {
    "section_title": "WILL YOU BE THERE?",
    "description": "We’d love to have you with us,\nas we begin this new chapter.",
    "yes_label": "Ya, saya akan hadir",
    "no_label": "Maaf, tidak bisa hadir",
    "wishes_title": "LEAVE A LITTLE LOVE"
  },
  // Contoh ucapan untuk pratinjau tampilan; belum berasal dari kiriman tamu.
  "wishes": [
    {
      id: 1,
      name: "Budi Santoso",
      message: "Selamat menempuh hidup baru! Semoga rumah tangganya sakinah, mawaddah, warahmah. Panjang umur dan lancar rezekinya. 🌸",
      time: "2 jam lalu",
      attend: "hadir",
    },
    {
      id: 2,
      name: "Sari Indah",
      message: "Barakallahu lakuma wa baraka alaykuma wa jama'a baynakuma fi khair. Semoga menjadi keluarga yang penuh berkah! 💕",
      time: "1 jam lalu",
      attend: "hadir",
    },
    {
      id: 3,
      name: "Keluarga Permana",
      message: "Congrats Agam & Zahra! Semoga bahagia selalu dan segera dikaruniai buah hati yang sholeh/sholehah. ✨",
      time: "45 menit lalu",
      attend: "tidak hadir",
    },
  ] satisfies Wish[],
  "gift": {
    "section_label": "Hadiah Pernikahan",
    "section_title": "IF YOU WISH",
    "instruction_text": "Your presence is more than enough.\nBut if you’d like to send us a little something,\nwe’ve left the details here.",
    "bank_accounts": [
      {
        "id": "bca-zahra",
        "bank_name": "BCA",
        "account_number": "1652556633",
        "account_holder": "a.n. Zahra Ranabila"
      }
    ]
  },
  "quotes": [
    {
      "section_title": "Love & Gratitude",
      "content": "وَخَلَقْنَاكُمْ أَزْوَاجًا",
      "source": "QS. An-Naba’: 8",
      "translation": "Dan Kami menciptakan kamu berpasang-pasangan."
    }
  ],
  "closing": {
    "paragraphs": [
      "Dari dua arah yang berbeda, akhirnya kami tiba di satu tujuan yang sama.",
      "Terima kasih atas doa, ucapan, kehadiran, dan tanda kasih yang diberikan untuk kami."
    ]
  },
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
      months: "Okt",
      years: "Tahun",
      location: "Lokasi",
    },
  },
};

export const MOCK_DATA: InvitationData = invitationContent;
