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
// 导航栏，页脚
  var headfoot = document.createElement('script');
  headfoot.src = '../js/head-foot.js';
  headfoot.async = true;
  document.body.appendChild(headfoot);
// 图标库Font Awesome
var icon = document.createElement('script');
icon.src = 'https://kit.fontawesome.com/c61fec31c6.js';
icon.crossorigin = 'anonymous';
icon.async = true;
document.head.appendChild(icon);
// 文章标题, 正文末尾
  var blogtitle = document.createElement('script');
  blogtitle.src = '../js/blog-list.js';
  blogtitle.async = true;
  document.body.appendChild(blogtitle);
// 配置Mathjax
var mathjax = document.createElement('script');
mathjax.src = '../js/math-config.js';
mathjax.type = 'text/x-mathjax-config';
mathjax.async = true;
document.body.appendChild(mathjax);
  var jaxcdn = document.createElement('script');
  // jaxcdn.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/tex-mml-chtml.js';
  jaxcdn.src = '//cdn.bootcss.com/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  // jaxcdn.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  jaxcdn.defer = true;
  document.body.appendChild(jaxcdn);
// 打印组件
var pr = document.createElement('script');
pr.src = 'https://printjs-4de6.kxcdn.com/print.min.js';
pr.crossorigin = 'anonymous';
pr.async = true;
document.body.appendChild(pr);
// // valine评论系统
// var valine = document.createElement('script');
// valine.src = 'https://unpkg.com/valine/dist/Valine.min.js';
// valine.async = true;
// document.head.appendChild(valine);
// window.onload = (function () {
//   var comment = document.createElement('script');
//   comment.src = '../js/comment.js';
//   comment.async = true;
//   document.body.appendChild(comment);
// })();
