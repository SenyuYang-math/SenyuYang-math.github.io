// 2.7.5版本配置
// MathJax.Hub.Config({
//   showProcessingMessages: true,
//   messageStyle: "normal",
//   jax: ["input/TeX", "output/HTML-CSS"], 
//   tex2jax: {
//     inlineMath: [['$', '$']], 
//     displayMath: [['$$', '$$']],
    //     macros: {
    //       RR: "{\\bf R}",
    //       CH: "{\\mathcal{H}}", 
    //       CN: "{\\mathcal{N}}", 
    //       p: "{\\partial}",
    //     }
  // }
//   "HTML-CSS": {
//     availableFonts: ["TeX"], 
//     showMathMenu: false,
//   }
// });
// 3.0.0版本配置
  window.MathJax = {
  options: {
    enableMenu: false
  }, 
  tex: {
    inlineMath: [['$', '$']], 
    displayMath: [['$$', '$$']],
    // macros: {
    //   RR: "{\\bf R}",
    //   CH: "{\\mathcal{H}}", 
    //   CN: "{\\mathcal{N}}", 
    //   p: "{\\partial}",
    // }
  }, 
  svg: {
    fontCache: 'global'
  }
};
(function () {
  var jaxcdn = document.createElement('script');
  // jaxcdn.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/tex-mml-chtml.js';
  // jaxcdn.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-chtml.min.js';
     jaxcdn.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg.min.js';
  // jaxcdn.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  jaxcdn.async = true;
  document.body.appendChild(jaxcdn);
})();
