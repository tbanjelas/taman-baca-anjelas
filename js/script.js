const langData = {
  en: {
    subtitle: 'Learn, Play, and Grow Together.',
    'nav-home': 'Home',
    'nav-about': 'About Us',
    'nav-activities': 'Activities',
    'nav-creations': "Children's Work",
    'nav-contact': 'Contact',
    'about-heading': 'About Us',
    'about-desc': 'Taman Baca Anjelas is a learning space for all ages who want to grow through books, discussions, and educational games.',
    'activities-heading': 'TBA Activities',
    'act-learn': '📘 Learning',
    'act-play': '🎲 Playing',
    'act-social': '🤝 Social Actions',
    'creations-heading': "Children's Work",
    'creations-desc': 'A collection of writings, drawings, and creativity from TBA participants.'
  },
  id: {
    subtitle: 'Belajar, Bermain, dan Tumbuh Bersama.',
    'nav-home': 'Beranda',
    'nav-about': 'Tentang Kami',
    'nav-activities': 'Kegiatan',
    'nav-creations': 'Karya Anak',
    'nav-contact': 'Kontak',
    'about-heading': 'Tentang Kami',
    'about-desc': 'Taman Baca Anjelas adalah ruang belajar...',
    'activities-heading': 'Kegiatan Taman Baca',
    'act-learn': '📘 Belajar',
    'act-play': '🎲 Bermain',
    'act-social': '🤝 Aksi Sosial',
    'creations-heading': 'Karya Anak',
    'creations-desc': 'Kumpulan karya tulis, gambar, dan kreativitas dari anak-anak peserta TBA.'
  }
};

let currentLang = 'id';

function switchLang() {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  document.querySelectorAll('[data-id]').forEach(el => {
    const key = el.getAttribute('data-id');
    if (langData[currentLang][key]) {
      el.textContent = langData[currentLang][key];
    }
  });
}
