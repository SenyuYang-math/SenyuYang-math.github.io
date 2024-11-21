window.MathJax = {
  options: {
    enableMenu: false
  },
  tex: {
    inlineMath: [['$', '$']], 
    displayMath: [['$$', '$$']],
    macros: {
      RR: "{\\bf R}",
      CH: "{\\mathcal{H}}", 
      CN: "{\\mathcal{N}}", 
      p: "{\\partial}"
    }
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
