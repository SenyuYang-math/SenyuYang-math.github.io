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
  }
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
  }
};
