// 整体样式
  var meta = document.createElement('meta');
  meta.charset = 'utf-8';
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0';
  document.head.appendChild(meta);
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = '../css/style.css';
  document.head.appendChild(style);
// 图标库Font Awesome
var icon = document.createElement('script');
icon.src = 'https://kit.fontawesome.com/c61fec31c6.js';
icon.crossorigin = 'anonymous';
icon.async = true;
document.head.appendChild(icon);
// 配置Mathjax
var mathjax = document.createElement('script');
mathjax.src = '../js/math-config.js';
mathjax.async = true;
document.body.appendChild(mathjax);
// 导航栏，页脚
(function () {
  var headfoot = document.createElement('script');
  headfoot.src = '../js/head-foot.js';
  headfoot.async = true;
  document.body.appendChild(headfoot);
})();
