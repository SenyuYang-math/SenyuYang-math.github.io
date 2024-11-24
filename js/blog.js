// 整体样式
(function () {
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
})();
// 图标库Font Awesome
var icon = document.createElement('script');
icon.src = 'https://kit.fontawesome.com/c61fec31c6.js';
icon.crossorigin = 'anonymous';
icon.async = true;
document.head.appendChild(icon);
// 文章标题, 正文末尾
(function () {
  var blogtitle = document.createElement('script');
  blogtitle.src = '../js/blog-list.js';
  blogtitle.async = true;
  document.body.appendChild(blogtitle);
})();
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
// valine评论系统
var valine = document.createElement('script');
valine.src = 'https://unpkg.com/valine/dist/Valine.min.js';
valine.async = true;
document.head.appendChild(valine);
window.onload = (function () {
  var comment = document.createElement('script');
  comment.src = '../js/comment.js';
  comment.async = true;
  document.body.appendChild(comment);
})();
let vpower = document.getElementsByClassName('vpower txt-right');
document.querySelector('body').removeChild(vpower);
