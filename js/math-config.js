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
    macros: {
      // 刻版体
      N: "\\mathbb{N}",
      R: "\\mathbb{R}",
      Z: "\\mathbb{Z}",
      // 粗体
      bR: "{\\bf R}",
      bold: ["{\\bf #1}", 1],
      // 括号
      bb: ["\\left[ #1 \\right]", 1],
      pb: ["\\left( #1 \\right)", 1],
      vb: ["\\left| #1 \\right|", 1],
      jb: ["\\left\\langle #1 \\right\\rangle", 1],
      norm: ["\\left\\| #1 \\right\\|", 1],
      // 运算符
      D: "\\mathrm{d}",
      p: "\\partial"
    },
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
