const translations = {
  id: {
    subtitle: "Belajar, Bermain, dan Tumbuh Bersama.",
    "nav-home": "Beranda",
    "nav-about": "Tentang Kami",
    "nav-activities": "Kegiatan",
    "nav-creations": "Karya Anak",
    "nav-contact": "Kontak",
    "activities-heading": "Kegiatan Taman Baca",
    "title": "Taman Baca Anjelas"
  },
  en: {
    subtitle: "Learn, Play, and Grow Together.",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-activities": "Activities",
    "nav-creations": "Creations",
    "nav-contact": "Contact",
    "activities-heading": "TBA Activities",
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
  // Modal klik gambar galeri
  document.querySelectorAll(".kegiatan-item img").forEach(img => {
    img.addEventListener("click", () => {
      openImageModal(img.src);
    });
  });

  // Modal container setup sekali saja
  if (!document.getElementById("modal-img-view")) {
    const modal = document.createElement("div");
    modal.id = "modal-img-view";
    modal.className = "modal";
    modal.style.display = "none";
    modal.innerHTML = `
      <span class="close" onclick="document.getElementById('modal-img-view').style.display='none'">&times;</span>
      <div class="modal-content">
        <img id="modal-img-large" src="" alt="Preview" />
      </div>
    `;
    document.body.appendChild(modal);

    // Tutup saat klik di luar konten
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
});

// Fungsi buka modal gambar
function openImageModal(src) {
  const modal = document.getElementById("modal-img-view");
  const img = document.getElementById("modal-img-large");
  if (modal && img) {
    img.src = src;
    modal.style.display = "block";
  }
}
