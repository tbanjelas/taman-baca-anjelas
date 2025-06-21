module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: ".",         // direktori input (semua file konten kamu di sini)
      includes: "src/layouts", // folder untuk layout/template
      output: "_site"     // hasil build
    }
  };
};
