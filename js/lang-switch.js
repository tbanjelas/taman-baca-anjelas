console.log('Website Taman Baca Anjelas aktif');

function switchLang(lang) {
  const idTexts = document.querySelectorAll('.lang-id');
  const enTexts = document.querySelectorAll('.lang-en');

  if (lang === 'id') {
    idTexts.forEach(el => el.style.display = 'inline');
    enTexts.forEach(el => el.style.display = 'none');
  } else {
    idTexts.forEach(el => el.style.display = 'none');
    enTexts.forEach(el => el.style.display = 'inline');
  }
}