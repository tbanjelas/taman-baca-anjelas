// Script JavaScript untuk bahasa
document.addEventListener("DOMContentLoaded", function () {
  const switcher = document.querySelector(".lang-switch");
  const texts = {
    id: {
      heading: "Taman Baca Anjelas",
      desc: "Belajar, Bermain, dan Tumbuh Bersama.",
      tentang: "Tentang Kami",
      kegiatan: "Kegiatan Taman Baca Anjelas",
      belajar: "📘 Belajar",
      bermain: "🎲 Bermain",
      sosial: "🤝 Aksi Sosial"
    },
    en: {
      heading: "Anjelas Reading Garden",
      desc: "Learn, Play, and Grow Together.",
      tentang: "About Us",
      kegiatan: "Activities at Anjelas",
      belajar: "📘 Learning",
      bermain: "🎲 Playing",
      sosial: "🤝 Social Actions"
    }
  };

  let currentLang = "id";

  switcher.addEventListener("click", () => {
    currentLang = currentLang === "id" ? "en" : "id";
    document.querySelector("h1 span").textContent = texts[currentLang].heading;
    document.querySelector("header p").textContent = texts[currentLang].desc;
    document.querySelector("#tentang h2").textContent = texts[currentLang].tentang;
    document.querySelector("#kegiatan h2").textContent = texts[currentLang].kegiatan;
    document.querySelectorAll(".kegiatan-item")[0].textContent = texts[currentLang].belajar;
    document.querySelectorAll(".kegiatan-item")[1].textContent = texts[currentLang].bermain;
    document.querySelectorAll(".kegiatan-item")[2].textContent = texts[currentLang].sosial;
  });
});
