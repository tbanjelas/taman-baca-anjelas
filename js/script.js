// === Modal Gambar ===
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// === Modal Berita ===
document.querySelectorAll('.berita-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
  });
});

document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', function () {
    const targetId = this.getAttribute('data-close');
    if (targetId) {
      const modal = document.getElementById(targetId);
      if (modal) modal.style.display = 'none';
    } else {
      closeModal();
    }
  });
});

// === Klik di luar modal untuk tutup ===
window.addEventListener('click', function (e) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// === Switch Bahasa Placeholder ===
function switchLang() {
  const langToggle = document.querySelector('.lang-switch');
  if (langToggle.textContent.includes('ID')) {
    langToggle.textContent = 'EN | ID';
    // Tempat untuk logika switch ke bahasa Inggris
  } else {
    langToggle.textContent = 'ID | EN';
    // Tempat untuk logika switch ke Bahasa Indonesia
  }
}
