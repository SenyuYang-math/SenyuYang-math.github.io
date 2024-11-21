window.MathJax = {
  showProcessingMessages: true, 
  messageStyle: 'none', 
  showMathMenu: false,
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
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/latest?tex-mml-chtml.js';
  //'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
