
const translations = {
  en: {
    title: "Taman Baca Anjelas",
    logo: "TBA",
    "main-title": "Taman Baca Anjelas",
    tagline: "Learn, Play, and Grow Together.",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-events": "Activities",
    "nav-work": "Children's Works",
    "nav-contact": "Contact",
    "section-about": "About Us",
    "about-desc": "Taman Baca Anjelas is a learning space for all ages to grow through books, discussion, and educational play.",
    "section-events": "Taman Baca Anjelas Activities",
    learn: "📘 Learn",
    play: "🎲 Play",
    social: "🤝 Social Action",
    footer: "Taman Baca Anjelas"
  },
  id: {
    title: "Taman Baca Anjelas",
    logo: "TBA",
    "main-title": "Taman Baca Anjelas",
    tagline: "Belajar, Bermain, dan Tumbuh Bersama.",
    "nav-home": "Beranda",
    "nav-about": "Tentang Kami",
    "nav-events": "Kegiatan",
    "nav-work": "Karya Anak",
    "nav-contact": "Kontak",
    "section-about": "Tentang Kami",
    "about-desc": "Taman Baca Anjelas adalah ruang belajar untuk semua usia yang ingin tumbuh bersama lewat buku, diskusi, dan permainan edukatif.",
    "section-events": "Kegiatan Taman Baca Anjelas",
    learn: "📘 Belajar",
    play: "🎲 Bermain",
    social: "🤝 Aksi Sosial",
    footer: "Taman Baca Anjelas"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

console.log("Website Taman Baca Anjelas aktif");
