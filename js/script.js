const translations = {
  id: {
    subtitle: "Belajar, Bermain, dan Tumbuh Bersama.",
    "nav-home": "Beranda",
    "nav-about": "Tentang Kami",
    "nav-activities": "Kegiatan",
    "nav-creations": "Karya Anak",
    "nav-contact": "Kontak",
    "about-heading": "Tentang Kami",
    "about-desc": "Taman Baca Anjelas adalah ruang belajar untuk semua usia yang ingin tumbuh bersama lewat buku, diskusi, dan permainan edukatif.",
    "activities-heading": "Kegiatan Taman Baca",
    "act-learn": "📘 Belajar",
    "act-play": "🎲 Bermain",
    "act-social": "🤝 Aksi Sosial",
    "creations-heading": "Karya Anak",
    "creations-desc": "Kumpulan karya tulis, gambar, dan kreativitas dari anak-anak peserta TBA.",
    "title": "Taman Baca Anjelas"
  },
  en: {
    subtitle: "Learn, Play, and Grow Together.",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-activities": "Activities",
    "nav-creations": "Creations",
    "nav-contact": "Contact",
    "about-heading": "About Us",
    "about-desc": "Taman Baca Anjelas is a learning space for all ages to grow through books, discussion, and educational games.",
    "activities-heading": "TBA Activities",
    "act-learn": "📘 Learn",
    "act-play": "🎲 Play",
    "act-social": "🤝 Social Action",
    "creations-heading": "Children's Creations",
    "creations-desc": "A collection of writings, drawings, and creativity by children at TBA.",
    "title": "Anjelas Reading Garden"
  }
};

let currentLang = 'id';

function switchLang() {
  currentLang = currentLang === 'id' ? 'en' : 'id';

  document.querySelectorAll("[data-id]").forEach(el => {
    const key = el.getAttribute("data-id");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  const langSwitch = document.querySelector(".lang-switch");
  if (langSwitch) {
    langSwitch.textContent = currentLang === "id" ? "ID | EN" : "EN | ID";
  }

  const h1 = document.querySelector(".gradient");
  if (h1) {
    h1.textContent = translations[currentLang]["title"];
  }
}

// Modal logic
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");
  const kegiatanImages = document.querySelectorAll(".kegiatan-content img");
  const kegiatanLinks = document.querySelectorAll(".kegiatan-content .berita-link");

  // Tampilkan modal saat gambar diklik
  kegiatanImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      modals[index].style.display = "block";
    });
  });

  // Tutup modal
  closeButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      modals[index].style.display = "none";
    });
  });

  // Tutup modal jika klik di luar gambar
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  // Optional: buka link berita di tab baru
  kegiatanLinks.forEach(link => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});
