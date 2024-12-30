var currYear = new Date().getFullYear();
// 网页数据
var urltxt = window.location.pathname.toString();
var urllength = urltxt.length;
// 整体样式
  var meta = document.createElement('meta');
  meta.charset = 'utf-8';
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0';
  document.head.appendChild(meta);
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = '../../css/style.css';
  document.head.appendChild(style);
  var card = document.createElement('link');
  card.rel = 'stylesheet';
  card.type = 'text/css';
  card.href = '../../css/card.css';
  document.head.appendChild(card);
// 配置Mathjax
var mathjax = document.createElement('script');
mathjax.src = '../../js/math-config.js';
mathjax.async = true;
document.body.appendChild(mathjax);
// 导航栏，页脚
  var headfoot = document.createElement('script');
  headfoot.src = '../../js/head-foot.js';
  headfoot.async = true;
  document.body.appendChild(headfoot);
//导入博客列表
  // var archYear = Number(urltxt.substring(6, 10));
  var archYear = sessionStorage.getItem('year');
  var archive = document.createElement('script');
  archive.id = 'blog-list';
  archive.src = '../../js/blog/list/' + archYear + '.js';
  archive.async = true;
  document.body.appendChild(archive);
