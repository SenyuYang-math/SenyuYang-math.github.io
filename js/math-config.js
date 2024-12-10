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
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/tex-mml-chtml.js';
  // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TEX-MML-AM_CHTML';
  // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
