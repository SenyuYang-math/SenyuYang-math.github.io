// 2.7.5版本配置
MathJax.Hub.Config({
  showProcessingMessages: true,
  messageStyle: "normal",
  jax: ["input/TeX", "output/HTML-CSS"], 
  tex2jax: {
    inlineMath: [['$', '$']], 
    displayMath: [['$$', '$$']],
    //     macros: {
    //       RR: "{\\bf R}",
    //       CH: "{\\mathcal{H}}", 
    //       CN: "{\\mathcal{N}}", 
    //       p: "{\\partial}",
    //     }
  }
  "HTML-CSS": {
    availableFonts: ["TeX"], 
    showMathMenu: false,
  }
});
// 3.0.0版本配置
  // window.MathJax = {
  // options: {
  //   enableMenu: false
  // }, 
//   tex: {
//     inlineMath: [['$', '$']], 
//     displayMath: [['$$', '$$']],
//     macros: {
//       RR: "{\\bf R}",
//       CH: "{\\mathcal{H}}", 
//       CN: "{\\mathcal{N}}", 
//       p: "{\\partial}",
//     }
//   }
// };

(function () {
  var script = document.createElement('script');
  // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/tex-mml-chtml.js';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TEX-MML-AM_CHTML';
  // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
