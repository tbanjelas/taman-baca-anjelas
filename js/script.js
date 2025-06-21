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

document.addEventListener("DOMContentLoaded", () => {
  // Modal untuk "Lihat Berita"
  document.querySelectorAll(".berita-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = link.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "block";
    });
  });

  // Tombol tutup modal
  document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      const modal = closeBtn.closest(".modal");
      if (modal) modal.style.display = "none";
    });
  });

  // Klik luar modal = tutup
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });

  // Modal gambar kegiatan
  document.querySelectorAll(".kegiatan-item img").forEach(img => {
    img.addEventListener("click", () => {
      openImageModal(img.src);
    });
  });
});

// Fungsi modal gambar kegiatan
function openImageModal(src) {
  // Cek apakah modal sudah ada
  let modal = document.getElementById("modal-img-view");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-img-view";
    modal.className = "modal";
    modal.innerHTML = `
      <span class="close" onclick="document.getElementById('modal-img-view').style.display='none'">&times;</span>
      <div class="modal-content">
        <img id="modal-img-large" src="" alt="Preview" />
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById("modal-img-large").src = src;
  modal.style.display = "block";
}
