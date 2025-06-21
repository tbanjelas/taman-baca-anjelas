// Modal Gambar Preview
function openModal(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'block';
  modalImg.src = src;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Tutup modal berita berdasarkan data-close
document.querySelectorAll('.close[data-close]').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const modalId = closeBtn.getAttribute('data-close');
    document.getElementById(modalId).style.display = 'none';
  });
});

// Klik link berita buka modal berita
document.querySelectorAll('.berita-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const modalId = link.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

// Bahasa Toggle
function switchLang() {
  const langElem = document.querySelector('[data-id="lang-toggle"]');
  langElem.textContent = langElem.textContent === 'ID | EN' ? 'EN | ID' : 'ID | EN';
}
